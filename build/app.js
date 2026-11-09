'use strict';
const QUESTIONS = __QUESTIONS__;
const DOMAINS = __DOMAINS__;
// v3 revises the option text and answer positions. v1 and v2 answers are not migrated.
const STORAGE_KEY = 'dep-study-ja-current-20261109-v3';
const LEGACY_STORAGE_KEYS = [];
function freshState(){ return {version:1, answers:{}, graded:{}}; }
function normalizeState(raw){
  const clean=freshState();
  if(!raw || raw.version!==1) return clean;
  QUESTIONS.forEach(q=>{
    const a=raw.answers && raw.answers[q.id];
    if(Number.isInteger(a) && a>=0 && a<q.options.length){
      clean.answers[q.id]=a;
      if(raw.graded && raw.graded[q.id]===true) clean.graded[q.id]=true;
    }
  });
  return clean;
}
let storageAvailable=true;
let state=freshState();
try{
  const current=localStorage.getItem(STORAGE_KEY);
  if(current) state=normalizeState(JSON.parse(current));
}catch(e){ storageAvailable=false; state=freshState(); }
function persist(){
  try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
  catch(e){storageAvailable=false;}
  showStorage();
}
function showStorage(){
  document.getElementById('storage').textContent=storageAvailable ?
    '進捗はこのブラウザに保存します。file://での保存はブラウザ設定によります。大切な記録はJSON出力してください。' :
    '自動保存が利用できません。今の画面では解答できます。必要なら進捗をJSON出力してください。';
}
function calculateScore(s){
  const out={total:QUESTIONS.length, selected:0, graded:0, correct:0, domains:{}};
  Object.keys(DOMAINS).forEach(k=>out.domains[k]={total:0,selected:0,graded:0,correct:0});
  QUESTIONS.forEach(q=>{
    const d=out.domains[q.domain];d.total++;
    if(Number.isInteger(s.answers[q.id])){out.selected++;d.selected++;}
    if(s.graded[q.id]===true && Number.isInteger(s.answers[q.id])){
      out.graded++;d.graded++;
      if(s.answers[q.id]===q.answer){out.correct++;d.correct++;}
    }
  });
  return out;
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function selectAnswer(id,value){
  const q=QUESTIONS.find(q=>q.id===id);
  if(!q || !Number.isInteger(value) || value<0 || value>=q.options.length) return false;
  state.answers[id]=value;delete state.graded[id];persist();return true;
}
function grade(id){
  const q=QUESTIONS.find(q=>q.id===id);
  if(!q || !Number.isInteger(state.answers[id]))return false;
  state.graded[id]=true;persist();return true;
}
function percent(n,d){return d ? Math.round(n/d*100)+'%' : '—';}
function renderScore(){
  const s=calculateScore(state);
  document.getElementById('summary').textContent=`選択 ${s.selected}/${s.total} ・採点 ${s.graded}/${s.total} ・正解 ${s.correct}/${s.graded}（採点済み正答率 ${percent(s.correct,s.graded)}）`;
  const progress=document.getElementById('progress');
  progress.max=s.total;
  progress.value=s.graded;
  document.getElementById('scorebody').innerHTML=Object.entries(DOMAINS).map(([k,d])=>{
    const v=s.domains[k];
    return `<tr><th scope="row">${esc(d.name)}</th><td>${d.weight}%</td><td>${v.graded}/${v.total}</td><td>${v.correct}/${v.graded}</td><td>${percent(v.correct,v.graded)}</td></tr>`;
  }).join('');
}
function matches(q){
  const d=document.getElementById('domain').value;
  const f=document.getElementById('filter').value;
  if(d!=='all' && q.domain!==d)return false;
  if(f==='unanswered' && Number.isInteger(state.answers[q.id]))return false;
  if(f==='wrong' && !(state.graded[q.id] && state.answers[q.id]!==q.answer))return false;
  return true;
}
function card(q){
  const a=state.answers[q.id],graded=state.graded[q.id]===true;
  const good=graded && a===q.answer;
  let body=`<article class="card" id="${q.id}"><div class="meta">${q.id} ／ ${esc(DOMAINS[q.domain].name)} ／ ${esc(q.topic)}</div><fieldset><legend>${esc(q.prompt)}</legend>`;
  body+=q.options.map((o,i)=>`<label class="option ${graded && i===q.answer?'correct':''} ${graded && i===a && !good?'incorrect':''}"><input type="radio" name="${q.id}" value="${i}" ${a===i?'checked':''}><span>${String.fromCharCode(65+i)}. ${esc(o)}</span></label>`).join('');
  body+='</fieldset><div class="actions"><button type="button" data-grade="'+q.id+'">答え合わせ</button>';
  body+=`<span class="result" aria-live="polite">${graded?(good?'✓ 正解':'✗ 不正解'):Number.isInteger(a)?'選択済み（未採点）':'未回答'}</span></div>`;
  if(graded){
    body+=`<section class="explanation"><h3>正解：${String.fromCharCode(65+q.answer)}</h3><p>${esc(q.explanation)}</p><ul>`;
    body+=q.optionExplanations.map((e,i)=>`<li><strong>${String.fromCharCode(65+i)}${i===q.answer?'（正解）':''}：</strong>${esc(e)}</li>`).join('');
    body+=`</ul><p><a href="${esc(q.source)}" target="_blank" rel="noopener noreferrer">公式根拠を開く</a> ／ ガイド ${esc(q.guide)} 節</p></section>`;
  }
  return body+'</article>';
}
function renderCards(){
  const qs=QUESTIONS.filter(matches);
  document.getElementById('visiblecount').textContent=`表示 ${qs.length}/${QUESTIONS.length}問`;
  document.getElementById('questions').innerHTML=qs.length ? qs.map(card).join('') : '<p>この条件の問題はありません。</p>';
}
function render(){renderScore();renderCards();showStorage();}
document.getElementById('domain').innerHTML='<option value="all">すべての分野</option>'+Object.entries(DOMAINS).map(([k,d])=>`<option value="${k}">${esc(d.name)}</option>`).join('');
document.getElementById('questions').addEventListener('change',e=>{
  if(e.target.matches('input[type="radio"]')){
    selectAnswer(e.target.name,Number(e.target.value));renderScore();
    // Keep focus on the chosen radio; clear only its stale explanation.
    const q=QUESTIONS.find(q=>q.id===e.target.name);
    const wrapper=e.target.closest('article');
    if(q && wrapper){
      wrapper.querySelectorAll('.option').forEach(el=>el.classList.remove('correct','incorrect'));
      const old=wrapper.querySelector('.explanation');if(old)old.remove();
      wrapper.querySelector('.result').textContent='選択済み（未採点）';
    }
  }
});
document.getElementById('questions').addEventListener('click',e=>{
  const button=e.target.closest('button[data-grade]');if(!button)return;
  const id=button.dataset.grade;
  if(!grade(id)){document.getElementById('notice').textContent='先に選択肢を選んでください。';return;}
  document.getElementById('notice').textContent='答え合わせしました。選び直すと未採点に戻ります。';
  renderScore();
  const old=document.getElementById(id);
  if(old){old.outerHTML=card(QUESTIONS.find(q=>q.id===id));}
});
document.getElementById('domain').addEventListener('change',renderCards);
document.getElementById('filter').addEventListener('change',renderCards);
document.getElementById('gradeall').addEventListener('click',()=>{
  QUESTIONS.forEach(q=>{if(Number.isInteger(state.answers[q.id]))state.graded[q.id]=true;});
  persist();render();document.getElementById('notice').textContent='選択済みの全問題を採点しました。未回答は採点しません。';
});
document.getElementById('reset').addEventListener('click',()=>{
  if(!confirm('すべての解答と採点状態を消します。必要なら先にJSON出力してください。'))return;
  state=freshState();persist();render();document.getElementById('notice').textContent='解答をリセットしました。';
});
document.getElementById('export').addEventListener('click',()=>{
  const blob=new Blob([JSON.stringify({pack:STORAGE_KEY,exportedAtJST:new Date(Date.now()+9*60*60*1000).toISOString().replace('Z','+09:00'),state},null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='dep-progress.json';a.click();URL.revokeObjectURL(url);
});
document.getElementById('import').addEventListener('change',async e=>{
  const f=e.target.files[0];if(!f)return;
  try{
    const data=JSON.parse(await f.text());
    const accepted=new Set([STORAGE_KEY,...LEGACY_STORAGE_KEYS]);
    if(!accepted.has(data.pack) || !data.state || data.state.version!==1)throw new Error('pack mismatch');
    state=normalizeState(data.state);persist();render();document.getElementById('notice').textContent='進捗を復元しました。';
  }catch(err){document.getElementById('notice').textContent='この模試の正しい進捗JSONを選んでください。';}
  e.target.value='';
});
render();
