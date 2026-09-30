// Persistent progression — localStorage. Never loses progress on refresh.
const KEY = 'bharatQuestSaveV1';

const DEFAULTS = () => ({
  currentLevel: 1,
  unlocked: 5,              // all five eras are available from the start
  completed: [],            // [1,2..]
  seals: [],                // [1,2..]
  historyPoints: 0,
  artifacts: {},            // levelId -> count
  museum: [],               // "1-0" style ids
  quizScores: {},           // levelId -> best score
  stars: {},                // levelId -> 1..3
  achievements: [],
  settings: { music: true, sfx: true, quality: 'high' },
  finalDone: false,
  evidence: [], decisions: {}, consequences: {}, mastery: {}, codex: [], questStates: {},
  chapterProgress: {}, xp: 0, crossChapterConnections: [], profile: { reflection: '', connections: 0, decisions: 0 }
});

export const Save = {
  data: DEFAULTS(),
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) this.data = { ...DEFAULTS(), ...JSON.parse(raw) };
    } catch { this.data = DEFAULTS(); }
    // Keep all regular eras available even for saves created before this change.
    this.data.unlocked = Math.max(5, Math.min(6, this.data.unlocked || 1));
    ensurePhase1(this.data);
    this.write();
    return this.data;
  },
  write() {
    try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch {}
  },
  reset() { this.data = DEFAULTS(); this.write(); },
  addPoints(n) { this.data.historyPoints += n; this.data.xp = this.data.historyPoints; this.write(); },
  addMastery(skill, amount = 1) {
    ensurePhase1(this.data);
    const skills = MASTERY_ALIASES[skill] || [skill];
    skills.forEach(key => {
      this.data.mastery[key] = Math.max(0, Math.min(100, (this.data.mastery[key] || 0) + amount));
    });
    this.write();
  },
  addEvidence(id) {
    ensurePhase1(this.data);
    if (!this.data.evidence.includes(id)) {
      this.data.evidence.push(id);
      if (!this.data.codex.includes(id)) this.data.codex.push(id);
      const e = evidenceById(id);
      this.addMastery(e?.source === 'collectible' ? 'exploration' : 'scholarship', 1);
    }
    this.write();
  },
  recordObservation(id, details = {}) {
    ensurePhase1(this.data);
    if (!this.data.observations) this.data.observations = {};
    this.data.observations[id] = { ...details, at: Date.now() };
    this.addEvidence(id);
    this.addMastery('observation', 2);
    this.addMastery('evidenceAnalysis', 1);
    this.data.chapterProgress[1] = Math.min(100, (this.data.chapterProgress[1] || 0) + 5);
    this.write();
  },
  recordDecision(id, choice, consequence) {
    ensurePhase1(this.data);
    this.data.decisions[id] = { choice, consequence, at: Date.now() };
    if (consequence) this.data.consequences[id] = consequence;
    if (consequence && !this.data.codex.includes(consequence)) this.data.codex.push(consequence);
    this.addMastery('stewardship', 2);
    this.write();
  },
  setQuestState(id, state) { ensurePhase1(this.data); this.data.questStates[id] = state; this.write(); },
  addArtifact(levelId, museumId, name) {
    this.data.artifacts[levelId] = (this.data.artifacts[levelId] || 0) + 1;
    const key = ({ 1: 'harappa-tablet', 2: 'nalanda-scroll', 3: 'chola-blueprint', 4: 'fort-inscription', 5: 'freedom-newspaper' })[levelId];
    if (key) this.addEvidence(key);
    if (museumId && !this.data.museum.includes(museumId)) this.data.museum.push(museumId);
    if (!this.data.achievements.includes('first')) this.data.achievements.push('first');
    this.write();
  },
  recordQuiz(levelId, score, total) {
    const prev = this.data.quizScores[levelId] || 0;
    if (score > prev) this.data.quizScores[levelId] = score;
    if (score === total && !this.data.achievements.includes('scholar')) this.data.achievements.push('scholar');
    this.addMastery('scholarship', Math.max(1, score));
    this.write();
  },
  completeLevel(levelId, seal) {
    if (!this.data.completed.includes(levelId)) this.data.completed.push(levelId);
    if (seal && !this.data.seals.includes(levelId)) this.data.seals.push(levelId);
    this.setQuestState(`chapter-${levelId}`, 'COMPLETED');
    this.data.chapterProgress[levelId] = 100;
    this.addMastery('problemSolving', 2);
    const target = ART_TARGET[levelId] || 5;
    const got = this.data.artifacts[levelId] || 0;
    this.data.stars[levelId] = got >= target ? 3 : got >= Math.ceil(target * 0.6) ? 2 : 1;
    if (got >= target && !this.data.achievements.includes('explorer')) this.data.achievements.push('explorer');
    if (this.data.seals.length >= 5) {
      this.data.unlocked = 6;
      if (!this.data.achievements.includes('guardian')) this.data.achievements.push('guardian');
    }
    this.write();
  },
  completeFinal() {
    this.data.finalDone = true;
    if (!this.data.achievements.includes('master')) this.data.achievements.push('master');
    this.write();
  },
  recordChapterExperience(chapter, payload = {}) {
    ensurePhase1(this.data);
    this.data.chapterProgress[chapter] = 100;
    this.data.questStates[`chapter-${chapter}`] = 'COMPLETED';
    this.data.decisions[`chapter-${chapter}-decision`] = { choice: payload.choice, consequence: payload.consequence, at: Date.now() };
    if (payload.evidence) payload.evidence.forEach(id => this.addEvidence(id));
    (payload.codex || []).forEach(id => { if (!this.data.codex.includes(id)) this.data.codex.push(id); });
    (payload.skills || []).forEach(skill => this.addMastery(skill, 3));
    this.data.profile.decisions = (this.data.profile.decisions || 0) + 1;
    this.write();
  },
  recordConnection(connection) {
    ensurePhase1(this.data);
    if (!this.data.crossChapterConnections.includes(connection)) this.data.crossChapterConnections.push(connection);
    this.data.profile.connections = this.data.crossChapterConnections.length;
    this.addMastery('causeEffect', 2);
    this.write();
  },
  saveReflection(text) {
    ensurePhase1(this.data);
    this.data.profile.reflection = String(text || '').slice(0, 600);
    this.write();
  }
};

import { LEVELS } from './data.js';
import { ensurePhase1, evidenceById, MASTERY_ALIASES } from './systems.js';
const ART_TARGET = Object.fromEntries(LEVELS.map(l => [l.id, l.collectible.target]));
