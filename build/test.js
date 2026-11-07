// Node VM + minimal DOM harness: executes the exact JS embedded in the deliverable.
// This is NOT a real-browser layout test.
'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert'),path=require('path');
const html=fs.readFileSync(path.join(__dirname,'../databricks-de-professional-mock-exam.html'),'utf8');
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];assert.equal(scripts.length,1);
const code=scripts[0][1];const store={};
function env(denied=false){
  const elements={};
  const el=id=>elements[id]||(elements[id]={id,innerHTML:'',outerHTML:'',textContent:'',value:['domain','filter'].includes(id)?'all':'',listeners:{},addEventListener(t,f){this.listeners[t]=f;}});
  const context={document:{getElementById:el,createElement(){return{click(){}};}},
    localStorage:{getItem(k){if(denied)throw Error('denied');return store[k]||null;},setItem(k,v){if(denied)throw Error('denied');store[k]=v;}},
    confirm:()=>true,Blob,URL:{createObjectURL:()=> 'blob:test',revokeObjectURL:()=>{}},Date,console};
  vm.createContext(context);vm.runInContext(code,context);
  return {context,elements,run:x=>vm.runInContext(x,context)};
}
const e=env(),r=e.run;
assert.equal(r('QUESTIONS.length'),40);assert.equal(r('calculateScore(state).selected'),0);
assert(!e.elements.questions.innerHTML.includes('class="explanation"'));
assert.equal(r('grade("DEP-01")'),false);
assert.equal(r('selectAnswer("unknown",0)'),false);
assert.equal(r('selectAnswer("DEP-01",999)'),false);
let choices=0;
for(const q of JSON.parse(r('JSON.stringify(QUESTIONS)'))){
  for(let a=0;a<4;a++){
    e.elements.questions.listeners.change({target:{matches:()=>true,name:q.id,value:String(a),closest:()=>null}});
    assert.equal(r(`Boolean(state.graded['${q.id}'])`),false);
    e.elements.questions.listeners.click({target:{closest:()=>({dataset:{grade:q.id}})}});
    assert.equal(r(`Boolean(state.graded['${q.id}'])`),true);
    const card=e.elements[q.id].outerHTML;
    assert(card.includes('class="explanation"'));
    assert(card.includes(a===q.answer?'✓ 正解':'✗ 不正解'));
    q.optionExplanations.forEach(x=>assert(card.includes(r(`esc(${JSON.stringify(x)})`))));
    choices++;
  }
}
r('state=freshState(); QUESTIONS.forEach(q=>selectAnswer(q.id,q.answer));');
e.elements.gradeall.listeners.click();
assert.equal(r('calculateScore(state).correct'),40);
assert.equal(r('calculateScore(state).graded'),40);
const totals=JSON.parse(r('JSON.stringify(calculateScore(state).domains)'));
Object.values(totals).forEach(d=>assert.equal(d.correct,d.total));
const reloaded=env();assert.equal(reloaded.run('calculateScore(state).correct'),40);
e.context.confirm=()=>false;e.elements.reset.listeners.click();assert.equal(r('calculateScore(state).graded'),40);
e.context.confirm=()=>true;e.elements.reset.listeners.click();assert.equal(r('calculateScore(state).selected'),0);
r('QUESTIONS.forEach(q=>{selectAnswer(q.id,(q.answer+1)%4);grade(q.id);});render();');
assert.equal(r('calculateScore(state).correct'),0);assert.equal(r('calculateScore(state).graded'),40);
e.elements.filter.value='wrong';e.elements.filter.listeners.change();assert(e.elements.visiblecount.textContent.includes('40/40'));
e.elements.domain.value='performance';e.elements.domain.listeners.change();assert(e.elements.visiblecount.textContent.includes('5/40'));
r('selectAnswer("DEP-01",QUESTIONS[0].answer);');assert.equal(r('calculateScore(state).graded'),39);
assert.equal(r('normalizeState({version:2,answers:{"DEP-01":0}}).answers["DEP-01"]'),undefined);
assert.equal(r('normalizeState({version:1,answers:{"DEP-01":99},graded:{"DEP-01":true}}).graded["DEP-01"]'),undefined);
const blocked=env(true);assert(blocked.elements.storage.textContent.includes('利用できません'));
blocked.run('selectAnswer("DEP-01",0);grade("DEP-01");');assert.equal(blocked.run('calculateScore(state).graded'),1);
(async()=>{
  const good=JSON.stringify({pack:r('STORAGE_KEY'),state:JSON.parse(r('JSON.stringify(state)'))});
  await e.elements.import.listeners.change({target:{files:[{text:async()=>good}],value:'x'}});
  assert(e.elements.notice.textContent.includes('復元しました'));
  await e.elements.import.listeners.change({target:{files:[{text:async()=>'{bad'}],value:'x'}});
  assert(e.elements.notice.textContent.includes('正しい進捗JSON'));
  e.elements.export.listeners.click();
  console.log('PASS: exact embedded JS; '+choices+' option selections/checks; 40/40 all-correct; 0/40 all-wrong; per-domain scoring; progress reload; re-selection; filters; reset confirmation; JSON import/export; invalid state; blocked storage fallback.');
})().catch(e=>{console.error(e);process.exitCode=1;});
