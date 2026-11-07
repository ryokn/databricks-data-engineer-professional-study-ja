"""Rebuild standalone exam using standard library only: python3 build/build.py"""
import json
from pathlib import Path
from collections import Counter
P=Path(__file__).resolve().parent
questions=json.loads((P/'questions.json').read_text())
domains=json.loads((P/'domains.json').read_text())
assert len(questions)==40
assert len({q['id'] for q in questions})==40
assert sum(d['weight'] for d in domains.values())==100
counts=Counter(q['domain'] for q in questions)
for key,d in domains.items(): assert counts[key]==d['count'],key
for q in questions:
    assert q['original'] and len(q['options'])==len(q['optionExplanations'])==4
    assert len(set(q['options']))==4 and 0<=q['answer']<4
    assert q['source'].startswith('https://docs.databricks.com/')
def embedded(obj):
    return json.dumps(obj,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c').replace('\u2028','\\u2028').replace('\u2029','\\u2029')
app=(P/'app.js').read_text().replace('__QUESTIONS__',embedded(questions)).replace('__DOMAINS__',embedded(domains))
html=(P/'template.html').read_text().replace('__APP__',app)
out=P.parent/'databricks-de-professional-mock-exam.html'
out.write_text(html)
print(out, out.stat().st_size,'bytes',dict(counts))
