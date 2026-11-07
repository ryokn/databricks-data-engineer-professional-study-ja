"""Optional public-link verifier (requires requests). No authenticated calls."""
import concurrent.futures,datetime,json,re
from pathlib import Path
import requests
P=Path(__file__).resolve().parent
texts=[
    (P.parent/'databricks-de-professional-study-guide.md').read_text(),
    (P.parent/'README.md').read_text(),
    (P/'template.html').read_text(),
]
urls=set()
for text in texts:
    urls.update(re.findall(r'https://[^\s)\]>"\']+', text))
urls.update(q['source'] for q in json.loads((P/'questions.json').read_text()))
def check(u):
    try:
        r=requests.get(u,timeout=35)
        title=re.search(r'<title[^>]*>(.*?)</title>',r.text,re.S) if 'pdf' not in r.headers.get('content-type','') else None
        return {'url':u,'status':r.status_code,'final_url':r.url,'title':re.sub(r'\s+',' ',title.group(1)) if title else None}
    except requests.RequestException as e:return {'url':u,'error':str(e)}
results=list(concurrent.futures.ThreadPoolExecutor(max_workers=8).map(check,sorted(urls)))
record={'checked_at':datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9))).isoformat(),'results':results}
(P/'source-checks.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n')
for x in results:print(x.get('status','ERROR'),x['url'],x.get('title',''))
print('TOTAL',len(results),'NON-200',sum(x.get('status')!=200 for x in results))
