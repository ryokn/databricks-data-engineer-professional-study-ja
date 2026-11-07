// Node VM + minimal DOM harness: executes the exact JS embedded in the deliverable.
// This is NOT a real-browser layout test.
'use strict';
const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const path = require('path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'databricks-de-professional-mock-exam.html'), 'utf8');
const guide = fs.readFileSync(path.join(root, 'databricks-de-professional-study-guide.md'), 'utf8');
const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
const questions = JSON.parse(fs.readFileSync(path.join(__dirname, 'questions.json'), 'utf8'));
const domains = JSON.parse(fs.readFileSync(path.join(__dirname, 'domains.json'), 'utf8'));
const coverage = JSON.parse(fs.readFileSync(path.join(__dirname, 'coverage.json'), 'utf8'));
const sourceChecks = JSON.parse(fs.readFileSync(path.join(__dirname, 'source-checks.json'), 'utf8'));

assert.equal(questions.length, Object.values(domains).reduce((sum, domain) => sum + domain.count, 0));
assert.equal(new Set(questions.map((question) => question.id)).size, questions.length);
assert.equal(html.includes('模試40問'), false);
assert.equal(html.includes('max="40"'), false);
assert.ok(html.includes(`模試${questions.length}問`));
assert.ok(html.includes(`max="${questions.length}"`));
assert.ok(html.includes('lang="ja"'));
assert.ok(html.includes('name="viewport"'));
assert.equal(/<script\s+src=/i.test(html), false);
assert.equal(/<link\s+[^>]*rel=["']stylesheet["']/i.test(html), false);
assert.ok(guide.includes('### 追加の演習問題（外部リソース）'));
assert.ok(guide.includes('要確認'));
assert.ok(readme.includes('要確認'));

const staticIds = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(new Set(staticIds).size, staticIds.length);
for (const question of questions) {
  assert.equal(guide.includes(question.prompt), false, question.id);
  assert.equal(staticIds.includes(question.id), false, question.id);
}

const coverageIds = new Set();
for (const row of coverage) {
  assert.ok(Array.isArray(row.questions) && row.questions.length >= 1, `${row.id} needs at least one question`);
  assert.equal(coverageIds.has(row.id), false, row.id);
  coverageIds.add(row.id);
  const anchor = `sec-${String(row.section).toLowerCase().replace(/\./g, '-')}`;
  assert.ok(guide.includes(`id="${anchor}"`), `${row.id} missing #${anchor}`);
  for (const number of row.questions) {
    const question = questions[number - 1];
    assert.ok(question, `${row.id} question ${number}`);
    assert.equal(question.id, `DEP-${String(number).padStart(2, '0')}`);
    assert.ok(question.objectives.includes(row.id), `${row.id} not tagged on ${question.id}`);
  }
}
for (const [index, question] of questions.entries()) {
  for (const objective of question.objectives) {
    assert.ok(coverageIds.has(objective), `${question.id} ${objective}`);
    const row = coverage.find((item) => item.id === objective);
    assert.ok(row.questions.includes(index + 1), `${question.id} ${objective}`);
  }
}

const table = new Map();
for (const line of guide.split(/\n/)) {
  if (!line.startsWith('| D')) continue;
  const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
  if (!/^D\d+\.[A-Za-z0-9.-]+$/.test(cells[0])) continue;
  table.set(cells[0], [...cells[cells.length - 1].matchAll(/\d+/g)].map((match) => Number(match[0])));
}
assert.equal(table.size, coverage.length);
for (const row of coverage) {
  assert.deepEqual(table.get(row.id), row.questions, row.id);
}

const checked = new Map(sourceChecks.results.map((item) => [item.url, item.status]));
const packText = `${guide}\n${readme}\n${fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8')}`;
const urls = new Set([...packText.matchAll(/https:\/\/[^\s)\]>"']+/g)].map((match) => match[0]));
for (const question of questions) urls.add(question.source);
for (const url of urls) assert.equal(checked.get(url), 200, url);

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length, 1);
const code = scripts[0][1];

function makeEnv(denied = false, store = shared) {
  const elements = {};
  const el = (id) => elements[id] || (elements[id] = {
    id,
    innerHTML: '',
    outerHTML: '',
    textContent: '',
    value: ['domain', 'filter'].includes(id) ? 'all' : '',
    listeners: {},
    addEventListener(type, fn) { this.listeners[type] = fn; },
  });
  const context = {
    document: {
      getElementById: el,
      createElement() { return { click() {} }; },
    },
    localStorage: {
      getItem(key) { if (denied) throw Error('denied'); return store[key] || null; },
      setItem(key, value) { if (denied) throw Error('denied'); store[key] = value; },
    },
    confirm: () => true,
    Blob,
    URL: { createObjectURL: () => 'blob:test', revokeObjectURL: () => {} },
    Date,
    console,
  };
  vm.createContext(context);
  vm.runInContext(code, context);
  return { context, elements, run: (source) => vm.runInContext(source, context) };
}

const shared = {};
const e = makeEnv();
const r = e.run;
const total = r('QUESTIONS.length');
assert.equal(total, questions.length);
assert.equal(r('calculateScore(state).selected'), 0);
assert.equal(e.elements.progress.max, total);
assert.equal(e.elements.notice ? e.elements.notice.textContent : '', '');
assert.equal(e.elements.questions.innerHTML.includes('class="explanation"'), false);
assert.equal(r('grade("DEP-01")'), false);
assert.equal(r('selectAnswer("unknown",0)'), false);
assert.equal(r('selectAnswer("DEP-01",999)'), false);

const embedded = JSON.parse(r('JSON.stringify(QUESTIONS)'));
assert.deepEqual(embedded.map((question) => question.id), questions.map((question) => question.id));
assert.deepEqual(embedded.map((question) => question.answer), questions.map((question) => question.answer));

let choices = 0;
for (const question of embedded) {
  for (let answer = 0; answer < 4; answer++) {
    e.elements.questions.listeners.change({
      target: { matches: () => true, name: question.id, value: String(answer), closest: () => null },
    });
    assert.equal(r(`Boolean(state.graded['${question.id}'])`), false);
    e.elements.questions.listeners.click({ target: { closest: () => ({ dataset: { grade: question.id } }) } });
    assert.equal(r(`Boolean(state.graded['${question.id}'])`), true);
    const card = e.elements[question.id].outerHTML;
    assert.ok(card.includes('class="explanation"'));
    assert.ok(card.includes(answer === question.answer ? '✓ 正解' : '✗ 不正解'));
    question.optionExplanations.forEach((text) => assert.ok(card.includes(r(`esc(${JSON.stringify(text)})`))));
    choices++;
  }
}
assert.equal(choices, total * 4);

r('state=freshState(); QUESTIONS.forEach(q=>selectAnswer(q.id,q.answer));');
e.elements.gradeall.listeners.click();
assert.equal(r('calculateScore(state).correct'), total);
assert.equal(r('calculateScore(state).graded'), total);
assert.ok(e.elements.summary.textContent.includes(`正解 ${total}/${total}`));
const totals = JSON.parse(r('JSON.stringify(calculateScore(state).domains)'));
const domainInfo = JSON.parse(r('JSON.stringify(DOMAINS)'));
for (const [key, domain] of Object.entries(domainInfo)) {
  assert.equal(totals[key].total, domain.count, key);
  assert.equal(totals[key].correct, totals[key].total, key);
  assert.ok(e.elements.scorebody.innerHTML.includes(
    `<th scope="row">${domain.name}</th><td>${domain.weight}%</td><td>${domain.count}/${domain.count}</td><td>${domain.count}/${domain.count}</td><td>100%</td>`
  ), key);
}
const reloaded = makeEnv();
assert.equal(reloaded.run('calculateScore(state).correct'), total);
assert.equal(reloaded.run('calculateScore(state).graded'), total);

e.context.confirm = () => false;
e.elements.reset.listeners.click();
assert.equal(r('calculateScore(state).graded'), total);
e.context.confirm = () => true;
e.elements.reset.listeners.click();
assert.equal(r('calculateScore(state).selected'), 0);

r('QUESTIONS.forEach(q=>{selectAnswer(q.id,(q.answer+1)%4);grade(q.id);});render();');
assert.equal(r('calculateScore(state).correct'), 0);
assert.equal(r('calculateScore(state).graded'), total);
e.elements.filter.value = 'wrong';
e.elements.filter.listeners.change();
assert.equal(e.elements.visiblecount.textContent, `表示 ${total}/${total}問`);
const performanceCount = domainInfo.performance.count;
e.elements.domain.value = 'performance';
e.elements.domain.listeners.change();
assert.equal(e.elements.visiblecount.textContent, `表示 ${performanceCount}/${total}問`);
r('selectAnswer("DEP-01",QUESTIONS[0].answer);');
assert.equal(r('calculateScore(state).graded'), total - 1);
assert.equal(r('normalizeState({version:2,answers:{"DEP-01":0}}).answers["DEP-01"]'), undefined);
assert.equal(r('normalizeState({version:1,answers:{"DEP-01":99},graded:{"DEP-01":true}}).graded["DEP-01"]'), undefined);

const blocked = makeEnv(true);
assert.ok(blocked.elements.storage.textContent.includes('利用できません'));
blocked.run('selectAnswer("DEP-01",0);grade("DEP-01");');
assert.equal(blocked.run('calculateScore(state).graded'), 1);

const legacyStore = {};
const legacyKey = r('LEGACY_STORAGE_KEYS[0]');
const currentKey = r('STORAGE_KEY');
assert.equal(legacyKey, 'dep-study-ja-current-20261107-v1');
assert.equal(currentKey, 'dep-study-ja-current-20261107-v2');
legacyStore[legacyKey] = JSON.stringify({
  version: 1,
  answers: { 'DEP-01': questions[0].answer, 'DEP-99': 0, GONE: 1 },
  graded: { 'DEP-01': true, 'DEP-99': true },
});
const migrated = makeEnv(false, legacyStore);
assert.equal(migrated.run('calculateScore(state).correct'), 1);
assert.equal(migrated.run('calculateScore(state).graded'), 1);
assert.equal(migrated.run('state.answers["DEP-99"]'), undefined);
assert.equal(migrated.run('QUESTIONS.length'), total);
assert.ok(legacyStore[currentKey]);
assert.ok(migrated.elements.notice.textContent.includes('引き継ぎ'));
assert.ok(migrated.elements.notice.textContent.includes(legacyKey));
assert.ok(migrated.elements.notice.textContent.includes(currentKey));

(async () => {
  const good = JSON.stringify({ pack: r('STORAGE_KEY'), state: JSON.parse(r('JSON.stringify(state)')) });
  await e.elements.import.listeners.change({ target: { files: [{ text: async () => good }], value: 'x' } });
  assert.ok(e.elements.notice.textContent.includes('復元しました'));
  const legacyPack = JSON.stringify({
    pack: legacyKey,
    state: { version: 1, answers: { 'DEP-02': questions[1].answer }, graded: { 'DEP-02': true } },
  });
  await e.elements.import.listeners.change({ target: { files: [{ text: async () => legacyPack }], value: 'x' } });
  assert.ok(e.elements.notice.textContent.includes('復元しました'));
  assert.equal(r('calculateScore(state).correct'), 1);
  assert.equal(r('state.answers["DEP-02"]'), questions[1].answer);
  await e.elements.import.listeners.change({ target: { files: [{ text: async () => '{bad' }], value: 'x' } });
  assert.ok(e.elements.notice.textContent.includes('正しい進捗JSON'));
  await e.elements.import.listeners.change({
    target: { files: [{ text: async () => JSON.stringify({ pack: 'other-pack', state: { version: 1 } }) }], value: 'x' },
  });
  assert.ok(e.elements.notice.textContent.includes('正しい進捗JSON'));
  e.elements.export.listeners.click();
  console.log(
    `PASS: exact embedded JS; ${choices} option selections/checks; ${total}/${total} all-correct; 0/${total} all-wrong; per-domain scoring; progress reload; re-selection; filters; reset confirmation; JSON import/export; legacy 40-question progress migration; invalid state; blocked storage fallback; coverage ${coverage.length} rows each with at least one question.`
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
