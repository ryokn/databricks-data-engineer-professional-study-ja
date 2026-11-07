"""Validate the authored mock-exam data.

questions.json is the editable source of the original items (currently 60).
domains.json and coverage.json must describe the same set. Running this
script checks that relationship and exits non-zero when it drifts.

It does not rewrite question text, and it does not restore the retired
40-question generator.
"""
from pathlib import Path
from checks import validate

if __name__ == '__main__':
    base = Path(__file__).resolve().parent
    questions, domains, coverage = validate(base)
    counts = {key: domain['count'] for key, domain in domains.items()}
    print(
        f'OK {len(questions)} original questions; '
        f'{len(coverage)} coverage rows; domain counts {counts}'
    )
