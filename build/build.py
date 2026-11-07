"""Rebuild the standalone exam: python3 build/build.py"""
import json
from pathlib import Path
from checks import validate


def embedded(obj):
    return (
        json.dumps(obj, ensure_ascii=False, separators=(',', ':'))
        .replace('<', '\\u003c')
        .replace('\u2028', '\\u2028')
        .replace('\u2029', '\\u2029')
    )


def main():
    base = Path(__file__).resolve().parent
    questions, domains, _coverage = validate(base)
    app = (base / 'app.js').read_text()
    app = app.replace('__QUESTIONS__', embedded(questions)).replace('__DOMAINS__', embedded(domains))
    if '__QUESTIONS__' in app or '__DOMAINS__' in app:
        raise SystemExit('app.js placeholder was not replaced')
    count = str(len(questions))
    html = (base / 'template.html').read_text().replace('__APP__', app).replace('__COUNT__', count)
    if '__APP__' in html or '__COUNT__' in html:
        raise SystemExit('template placeholder was not replaced')
    out = base.parent / 'databricks-de-professional-mock-exam.html'
    out.write_text(html)
    print(out, out.stat().st_size, 'bytes', count, 'questions')


if __name__ == '__main__':
    main()
