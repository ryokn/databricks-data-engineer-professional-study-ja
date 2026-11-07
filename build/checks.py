"""Consistency checks for the study pack. Standard library only. No network."""
import json
import re
from pathlib import Path

DOCS_PREFIX = 'https://docs.databricks.com/'


def load_json(path):
    return json.loads(Path(path).read_text())


def section_anchor(section):
    return 'sec-' + str(section).lower().replace('.', '-')


def guide_sections(guide_field):
    return [part.strip() for part in re.split(r'[・、]', guide_field) if part.strip()]


def markdown_question_map(guide_text):
    """Parse the outline table: coverage id -> question numbers."""
    found = {}
    for line in guide_text.splitlines():
        if not line.startswith('| D'):
            continue
        cells = [cell.strip() for cell in line.strip().strip('|').split('|')]
        if len(cells) < 4 or not re.fullmatch(r'D\d+\.[A-Za-z0-9.-]+', cells[0]):
            continue
        found[cells[0]] = [int(n) for n in re.findall(r'\d+', cells[-1])]
    return found


def source_check_results(record):
    results = record.get('results') if isinstance(record, dict) else None
    if not isinstance(results, list):
        raise AssertionError('source-checks.json has no results list')
    return results


def validate(base=None):
    """Validate questions, domains, coverage, guide anchors, and recorded link checks.

    questions.json is the authored source. This function never rewrites it.
    """
    base = Path(base) if base else Path(__file__).resolve().parent
    root = base.parent
    questions = load_json(base / 'questions.json')
    domains = load_json(base / 'domains.json')
    coverage = load_json(base / 'coverage.json')
    guide = (root / 'databricks-de-professional-study-guide.md').read_text()
    checks = source_check_results(load_json(base / 'source-checks.json'))

    assert isinstance(questions, list) and questions, 'questions.json is empty'
    assert isinstance(domains, dict) and domains, 'domains.json is empty'
    assert isinstance(coverage, list) and coverage, 'coverage.json is empty'
    assert sum(d['weight'] for d in domains.values()) == 100, 'domain weights must total 100'
    assert sum(d['count'] for d in domains.values()) == len(questions), 'domain counts must equal question count'
    assert len({q['id'] for q in questions}) == len(questions), 'question ids must be unique'

    by_domain = {key: 0 for key in domains}
    for index, question in enumerate(questions, 1):
        expected_id = f'DEP-{index:02d}'
        assert question['id'] == expected_id, (question['id'], expected_id)
        assert question['domain'] in domains, question['id']
        by_domain[question['domain']] += 1
        assert question.get('original') is True, question['id']
        assert len(question['options']) == len(question['optionExplanations']) == 4, question['id']
        assert len(set(question['options'])) == 4, question['id']
        assert isinstance(question['answer'], int) and 0 <= question['answer'] < 4, question['id']
        assert question['source'].startswith(DOCS_PREFIX), question['id']
        assert question.get('prompt') and question.get('explanation'), question['id']
        assert isinstance(question.get('objectives'), list) and question['objectives'], question['id']
        for section in guide_sections(question['guide']):
            anchor = section_anchor(section)
            assert f'id="{anchor}"' in guide, f'{question["id"]} guide {section} missing #{anchor}'

    for key, domain in domains.items():
        assert by_domain[key] == domain['count'], (key, by_domain[key], domain['count'])
        assert domain['weight'] > 0 and domain['count'] > 0, key

    coverage_ids = []
    listed = {}
    kinds = {'objective': 0, 'group': 0, 'fragment': 0}
    for row in coverage:
        assert row.get('id') and row['id'] not in listed, row.get('id')
        assert row.get('kind') in kinds, row['id']
        kinds[row['kind']] += 1
        questions_for_row = row.get('questions')
        assert isinstance(questions_for_row, list) and len(questions_for_row) >= 1, row['id']
        anchor = section_anchor(row['section'])
        assert f'id="{anchor}"' in guide, f'{row["id"]} missing #{anchor}'
        listed[row['id']] = set(questions_for_row)
        coverage_ids.append(row['id'])
        for number in questions_for_row:
            assert isinstance(number, int) and 1 <= number <= len(questions), (row['id'], number)
            question = questions[number - 1]
            assert row['id'] in question['objectives'], (row['id'], question['id'])

    assert kinds == {'objective': 45, 'group': 8, 'fragment': 1}, kinds
    for index, question in enumerate(questions, 1):
        for objective in question['objectives']:
            assert objective in listed, (question['id'], objective)
            assert index in listed[objective], (question['id'], objective, index)

    table = markdown_question_map(guide)
    assert set(table) == set(listed), sorted(set(table) ^ set(listed))
    for coverage_id in coverage_ids:
        row_questions = coverage[coverage_ids.index(coverage_id)]['questions']
        assert table[coverage_id] == row_questions, (coverage_id, table[coverage_id], row_questions)

    for question in questions:
        assert question['prompt'] not in guide, question['id']

    checked = {}
    for item in checks:
        assert item.get('url'), item
        assert item.get('status') == 200, item.get('url')
        checked[item['url']] = item['status']
    for question in questions:
        assert question['source'] in checked, question['source']

    pack_text = guide + '\n' + (root / 'README.md').read_text() + '\n' + (base / 'template.html').read_text()
    pack_urls = set(re.findall(r'https://[^\s)\]>"\']+', pack_text))
    pack_urls.update(question['source'] for question in questions)
    missing = sorted(pack_urls - set(checked))
    assert not missing, missing

    assert '### 追加の演習問題（外部リソース）' in guide
    assert '要確認' in guide
    return questions, domains, coverage
