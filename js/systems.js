// Phase 1 progression systems. These are deliberately data driven so new eras
// can be added without changing the renderer or quest loop.
export const EVIDENCE = [
  { id: 'harappa-drains', title: 'Covered drains', period: 'Indus Valley Civilization', location: 'Mohenjo-daro-inspired settlement', category: 'infrastructure', description: 'A covered channel runs beside a planned street.', historicalSignificance: 'Planned drainage suggests organised urban sanitation.', sourceType: 'environmental observation', confidence: 'verified context', chapter: 1, source: 'landmark' },
  { id: 'harappa-tablet', title: 'Civilization tablet', period: 'Indus Valley Civilization', location: 'Settlement marketplace', category: 'archaeological evidence', description: 'A small tablet preserves clues about daily life.', historicalSignificance: 'Objects and inscriptions help historians reconstruct trade and society.', sourceType: 'interactive discovery', confidence: 'contextual', chapter: 1, source: 'collectible' },
  { id: 'indus-street', title: 'Planned street', period: 'Indus Valley Civilization', location: 'Settlement lane', category: 'spatial planning', description: 'A straight lane aligns houses, drains and public spaces.', historicalSignificance: 'Street alignment is evidence for coordinated urban planning.', sourceType: 'environmental observation', confidence: 'observed context', chapter: 1, source: 'landmark' },
  { id: 'indus-well', title: 'Neighbourhood well', period: 'Indus Valley Civilization', location: 'Residential quarter', category: 'water supply', description: 'A shared well sits close to homes and the street.', historicalSignificance: 'Wells show how water access could be organised at neighbourhood scale.', sourceType: 'environmental observation', confidence: 'observed context', chapter: 1, source: 'landmark' },
  { id: 'indus-house-outlet', title: 'House outlet', period: 'Indus Valley Civilization', location: 'Residential quarter', category: 'sanitation', description: 'A small outlet leads household water toward the street drain.', historicalSignificance: 'Outlets connect domestic activity to a wider drainage network.', sourceType: 'environmental observation', confidence: 'observed context', chapter: 1, source: 'landmark' },
  { id: 'indus-storage-trade', title: 'Storage and trade', period: 'Indus Valley Civilization', location: 'Granary and marketplace', category: 'economy', description: 'Storage, carts and craft goods cluster around a trading route.', historicalSignificance: 'Material evidence links urban planning with food storage, craft and exchange.', sourceType: 'environmental observation', confidence: 'observed context', chapter: 1, source: 'landmark' },
  { id: 'indus-brick', title: 'Standard brick structure', period: 'Indus Valley Civilization', location: 'Mohenjo-daro-inspired settlement', category: 'construction', description: 'Walls use repeated fired-brick proportions and varied repairs.', historicalSignificance: 'Standardised bricks suggest shared building knowledge and organised labour.', sourceType: 'environmental observation', confidence: 'observed context', chapter: 1, source: 'landmark' },
  { id: 'indus-seal-craft', title: 'Seal and craft evidence', period: 'Indus Valley Civilization', location: 'Settlement marketplace', category: 'craft and trade', description: 'A carved seal and bead-making tools point to skilled production and exchange.', historicalSignificance: 'Seals and craft debris help reconstruct identity, administration and trade.', sourceType: 'environmental observation', confidence: 'observed context', chapter: 1, source: 'landmark' },
  { id: 'nalanda-scroll', title: 'Nalanda scroll', period: 'Ancient learning at Nalanda', location: 'Nalanda-inspired campus', category: 'learning', description: 'A palm-leaf manuscript represents scholarly work.', historicalSignificance: 'Nalanda connected learners, texts, and disciplines across regions.', sourceType: 'interactive discovery', confidence: 'contextual', chapter: 2, source: 'collectible' },
  { id: 'nalanda-manuscript-culture', title: 'Manuscript culture', period: 'Ancient learning at Nalanda', location: 'Library and copying room', category: 'material culture', description: 'Palm leaves, writing tools, lamps and storage suggest a chain of copying and care.', historicalSignificance: 'Manuscripts are material evidence for how knowledge was preserved and moved.', sourceType: 'environmental observation', confidence: 'in-game interpretation', chapter: 2, source: 'landmark' },
  { id: 'nalanda-disciplines', title: 'Scholarly disciplines', period: 'Ancient learning at Nalanda', location: 'Study courtyard', category: 'intellectual history', description: 'Evidence cards connect philosophy, medicine, astronomy, mathematics, language and logic.', historicalSignificance: 'A diversity of subjects suggests a broad learning environment; it is not a trivia list.', sourceType: 'interactive reasoning', confidence: 'interpretive', chapter: 2, source: 'landmark' },
  { id: 'nalanda-learning-space', title: 'Learning environment', period: 'Ancient learning at Nalanda', location: 'Residential and teaching areas', category: 'institutional space', description: 'Courtyards, study rooms, dormitory verandas and debate spaces place learning in daily life.', historicalSignificance: 'Spatial evidence helps us reason about residential study and teaching.', sourceType: 'environmental observation', confidence: 'in-game interpretation', chapter: 2, source: 'landmark' },
  { id: 'nalanda-exchange', title: 'Intellectual exchange', period: 'Ancient learning at Nalanda', location: 'Debate court and travel paths', category: 'knowledge movement', description: 'Scholar conversations and routes model ideas moving through people, texts and discussion.', historicalSignificance: 'Exchange is a useful interpretation when multiple social and material clues align.', sourceType: 'dialogue observation', confidence: 'interpretive', chapter: 2, source: 'landmark' },
  { id: 'chola-blueprint', title: 'Temple blueprint', period: 'Chola period', location: 'Temple construction yard', category: 'architecture', description: 'A plan shows the sequence of monumental construction.', historicalSignificance: 'Temple building required coordinated engineering and cultural production.', sourceType: 'interactive discovery', confidence: 'contextual', chapter: 3, source: 'collectible' },
  { id: 'fort-inscription', title: 'Fort inscription', period: 'Chittorgarh Fort · Mewar · 15th century', location: 'Fort complex', category: 'inscription', description: 'A fictional gameplay fragment connects a place with people and memory.', historicalSignificance: 'Inscriptions can provide evidence about authority, building, and administration; this fragment is not a quoted source.', sourceType: 'interactive discovery', confidence: 'fictional gameplay clue', chapter: 4, source: 'collectible' },
  { id: 'freedom-newspaper', title: 'Newspaper fragment', period: 'Indian freedom movement', location: 'Press and communication network', category: 'communication', description: 'A printed fragment carries an event and its public meaning.', historicalSignificance: 'Print helped ideas and information travel during the freedom movement.', sourceType: 'interactive discovery', confidence: 'contextual', chapter: 5, source: 'collectible' }
];

export const DECISIONS = [
  { id: 'indus-water', chapter: 1, question: 'What should you investigate first?', context: 'This is a gameplay simulation inspired by archaeological reasoning, not a claimed historical event.', historicalReasoning: 'Comparing visible clues lets us test how a connected network may have worked.', evidenceRequired: ['harappa-drains'], masterySkills: ['spatialUnderstanding', 'decisionMaking', 'causeEffect'], prompt: 'A blockage is visible. Which investigation route helps us understand the network?', options: [
    { id: 'repair-blockage', label: 'A — Repair the visible blockage', consequence: 'repair-first', text: 'The channel clears quickly; residents value your practical care.' },
    { id: 'trace-network', label: 'B — Trace the connected network', consequence: 'trace-first', text: 'You map slope and outlets first; the craft worker shares a deeper clue.' }
  ], choices: [
    { id: 'repair-blockage', label: 'A — Repair the visible blockage', consequence: 'repair-first', text: 'The channel clears quickly; residents value your practical care.' },
    { id: 'trace-network', label: 'B — Trace the connected network', consequence: 'trace-first', text: 'You map slope and outlets first; the craft worker shares a deeper clue.' }
  ], consequences: { 'repair-blockage': 'repair-first', 'trace-network': 'trace-first' } }
];

export const NALANDA_DECISION = {
  id: 'nalanda-preservation', chapter: 2,
  prompt: 'The fictional disruption has damaged manuscripts. What should a young scholar do first?',
  choices: [
    { id: 'nalanda-stabilize', label: 'A — Stabilise, catalogue and compare before copying', consequence: 'evidence-first', text: 'The keeper trusts your careful inventory; fewer claims are made without evidence.' },
    { id: 'nalanda-copy-fast', label: 'B — Copy the most visible text immediately', consequence: 'speed-first', text: 'You save a legible fragment quickly, but the scholars ask you to mark what remains uncertain.' }
  ]
};

export const TIMELINE = [
  'Indus Valley', 'Ancient learning', 'Chola period',
  'Chittorgarh Fort · Mewar', 'Freedom movement', 'Modern synthesis'
];

export const CODEX = [
  ...EVIDENCE.map(e => ({ id: e.id, title: e.title, type: 'Evidence', text: e.description })),
  { id: 'codex-indus-planning', title: 'Indus Urban Planning', type: 'Codex', text: 'Aligned streets, homes, wells, drains and public spaces reveal planning at city scale.' },
  { id: 'codex-indus-drainage', title: 'Indus Drainage', type: 'Codex', text: 'Covered channels, slopes, outlets and maintenance points formed a connected water system.' },
  { id: 'codex-indus-seals', title: 'Indus Seals', type: 'Codex', text: 'Carved seals are archaeological evidence for craft, identity and exchange.' },
  { id: 'codex-craft-trade', title: 'Craft & Trade', type: 'Codex', text: 'Storage, beads, tools and market routes connect skilled work to urban life.' },
  { id: 'codex-daily-life', title: 'Daily Life', type: 'Codex', text: 'Wells, homes, streets and shared facilities make ordinary routines visible.' },
  { id: 'community-care', title: 'Community waterworks', type: 'Decision', text: 'A choice to maintain shared water systems.' },
  { id: 'private-water', title: 'Palace-first waterworks', type: 'Decision', text: 'A choice that prioritised the palace.' },
  { id: 'chola-architecture', title: 'Chola Architecture', type: 'Codex', text: 'Temple engineering is explored through stability, weight, symmetry and sequence.' },
  { id: 'chola-temple-culture', title: 'Temple Culture', type: 'Codex', text: 'Temples connected worship, patronage, craft and community life.' },
  { id: 'chola-sculpture', title: 'Sculpture & Bronze Art', type: 'Codex', text: 'Compare stone sculpture evidence with lost-wax bronze traditions.' },
  { id: 'chola-trade', title: 'Maritime Trade', type: 'Codex', text: 'A lightweight capacity, value and destination model is historically inspired.' },
  { id: 'chola-administration', title: 'Administration', type: 'Codex', text: 'Records and transparent labour decisions help interpret institutions.' },
  { id: 'fort-architecture', title: 'Fort Architecture', type: 'Codex', text: 'Walls, gates, towers and courtyards shape movement and defence.' },
  { id: 'fort-defence', title: 'Defensive Planning', type: 'Codex', text: 'Routes and sightlines can slow movement and support observation.' },
  { id: 'fort-water', title: 'Water Management', type: 'Codex', text: 'Reservoirs and stores are vital infrastructure in a hill fort.' },
  { id: 'fort-geography', title: 'Geography', type: 'Codex', text: 'Chittorgarh Fort’s hilltop geography shapes routes and logistics.' },
  { id: 'fort-administration', title: 'Administration', type: 'Codex', text: 'Measured rations and maintenance link civic and defensive planning.' },
  { id: 'fort-inscriptions', title: 'Inscriptions', type: 'Codex', text: 'The gameplay inscription is explicitly fictional, not a quoted source.' },
  { id: 'freedom-movement', title: 'Freedom Movement', type: 'Codex', text: 'A respectful, nonviolent newsroom scenario grounded in broad history.' },
  { id: 'freedom-newspapers', title: 'Newspapers', type: 'Codex', text: 'Editors distinguish sourced reports from interpretation.' },
  { id: 'freedom-communication', title: 'Communication', type: 'Codex', text: 'Time, distance, method and reliability affect a message network.' },
  { id: 'freedom-civic', title: 'Civic Participation', type: 'Codex', text: 'Civic choices have tradeoffs and do not prescribe a political position.' },
  { id: 'freedom-events', title: 'Major Events', type: 'Codex', text: 'Broad chronology avoids inventing unsupported exact dates.' },
  { id: 'freedom-people', title: 'People & Organisations', type: 'Codex', text: 'Compare roles and sources before making generalisations.' }
];

// Chapters 3–6 use the same evidence/decision loop with these small,
// data-driven definitions. They describe historically inspired simulations;
// they do not claim to recreate a single documented event.
export const CHAPTER_EXPERIENCES = {
  3: {
    title: 'Chola Thanjavur · c. 9th–13th century CE',
    role: 'You are a junior sthapati (architect) working in a temple construction yard.',
    context: 'A Chola-period temple-and-port landscape in the Kaveri delta; this is a historically inspired simulation.',
    problem: 'Place the vimana courses safely, compare sculpture evidence, and keep a small port shipment moving.',
    evidence: [
      { id: 'chola-architecture', title: 'Temple Architecture', text: 'Base, load-bearing walls, balanced courses and a planned sequence support monumental construction.' },
      { id: 'chola-sculpture', title: 'Sculpture & Bronze Art', text: 'Stone carving and lost-wax bronze work are distinct evidence for temple culture and skilled artisans.' },
      { id: 'chola-trade', title: 'Maritime Trade', text: 'A port links vessels, merchants, destinations, capacity and valuable cargo; the route is a gameplay model.' },
      { id: 'chola-administration', title: 'Administration', text: 'Inscriptions and organised labour can illuminate institutions, donations and responsibilities.' },
      { id: 'chola-temple-culture', title: 'Temple Culture', text: 'Temples were places of worship, patronage, craft and community activity.' }
    ],
    puzzle: { prompt: 'Arrange the structural courses from foundation to finial, checking weight, symmetry and sequence.', options: ['Finial', 'Foundation', 'Pillared hall', 'Tower courses'], answer: ['Foundation', 'Pillared hall', 'Tower courses', 'Finial'] },
    analysis: { prompt: 'Which match is strongest?', options: ['Granite block → load-bearing course', 'Bronze figure → stone foundation', 'Harbour manifest → temple wall'], answer: 0 },
    logistics: { prompt: 'Choose a viable small shipment (capacity 10).', options: ['Spices (6 capacity, value 8) → Nagapattinam', 'Stone (12 capacity, value 4) → inland workshop', 'Empty boat → unknown destination'], answer: 0 },
    decision: { prompt: 'A patron offers extra labour. What is the most defensible administrative response?', options: ['Record the labour and distribute tasks transparently.', 'Hide the change so the schedule looks perfect.', 'Promise every worker a reward without recording it.'], answer: 0 },
    skills: ['spatialUnderstanding', 'evidenceAnalysis', 'decisionMaking', 'culturalUnderstanding'],
    codex: ['chola-architecture', 'chola-temple-culture', 'chola-sculpture', 'chola-trade', 'chola-administration']
  },
  4: {
    title: 'Chittorgarh Fort · Mewar, 15th century',
    role: 'You are a fort surveyor mapping access, water and storage for the garrison and residents.',
    context: 'One coherent setting: Chittorgarh Fort on its hill in Mewar during the fifteenth century.',
    problem: 'Investigate walls, gates, towers, courtyards, routes, reservoirs and stores before advising the administrator.',
    evidence: [
      { id: 'fort-architecture', title: 'Fort Architecture', text: 'Walls, gates, towers and courtyards shape movement and defence on a hilltop.' },
      { id: 'fort-defence', title: 'Defensive Planning', text: 'A route can be slowed or observed by gates, turns and elevated towers.' },
      { id: 'fort-water', title: 'Water Management', text: 'Reservoirs, step wells and storage reduce risk during a siege; this challenge is a model.' },
      { id: 'fort-geography', title: 'Geography', text: 'A steep plateau changes sightlines, routes and the cost of moving supplies.' },
      { id: 'fort-administration', title: 'Administration', text: 'Maintaining stores and access requires coordinated civic and military decisions.' },
      { id: 'fort-inscriptions', title: 'Inscriptions', text: 'This fictional gameplay inscription is labelled as such; it is not presented as a quotation.' }
    ],
    puzzle: { prompt: 'Top-down route: select the safest sequence from gate to water store.', options: ['Gate → tower → inner courtyard → reservoir', 'Gate → exposed slope → reservoir → tower', 'Tower → outer wall → gate → empty yard'], answer: 0 },
    analysis: { prompt: 'Which clue supports a water-management inference?', options: ['A lined reservoir near a protected route', 'A colourful legend with no material trace', 'A random pile outside the fort'], answer: 0 },
    logistics: { prompt: 'Water challenge: allocate 12 units between people and animals.', options: ['8 people / 4 animals; protect reservoir stores', '12 animals / 0 people', 'Spend all water at the outer gate'], answer: 0 },
    decision: { prompt: 'A supply shortage appears. Which strategy balances defence and residents?', options: ['Prioritise measured rations and repair the protected cistern.', 'Close every route and discard the stores.', 'Move all water to one tower without records.'], answer: 0 },
    skills: ['spatialUnderstanding', 'evidenceAnalysis', 'causeEffect', 'decisionMaking'],
    codex: ['fort-architecture', 'fort-defence', 'fort-water', 'fort-geography', 'fort-administration', 'fort-inscriptions']
  },
  5: {
    title: 'India, 1930s–1940s · a fictional local newsroom',
    role: 'You are a young journalist and volunteer checking reports before they travel.',
    context: 'A historically grounded freedom-movement newsroom and communication network; dates are kept broad where sources are uncertain.',
    problem: 'Classify sources, build a responsible timeline and choose how to send a verified civic report.',
    evidence: [
      { id: 'freedom-movement', title: 'Freedom Movement', text: 'People and organisations used meetings, print and nonviolent civic action in varied regional contexts.' },
      { id: 'freedom-newspapers', title: 'Newspapers', text: 'Editors mediated reports, evidence and public argument; a newspaper is not automatically neutral.' },
      { id: 'freedom-communication', title: 'Communication', text: 'Time, distance, method and reliability shape how a message travels.' },
      { id: 'freedom-civic', title: 'Civic Participation', text: 'Civic choices involve tradeoffs; the simulation does not prescribe a political position.' },
      { id: 'freedom-events', title: 'Major Events', text: 'Place broad, well-supported events in sequence without inventing exact dates.' },
      { id: 'freedom-people', title: 'People & Organisations', text: 'Individuals and organisations had different roles; compare sources before generalising.' }
    ],
    puzzle: { prompt: 'Click a defensible broad chronology (no invented exact dates).', options: ['Public protest → report checked → community meeting', 'Community meeting → report checked → public protest', 'Unknown order → claim certainty'], answer: 0 },
    analysis: { prompt: 'Classify the editor’s note: “A volunteer saw this, but no second source confirms it.”', options: ['EVIDENCE', 'INTERPRETATION', 'UNCERTAIN'], answer: 2 },
    logistics: { prompt: 'Communication network: choose the most reliable route.', options: ['Nearby runner: 1 day, short distance, high reliability', 'Distant rumour: 0 days, unknown method, low reliability', 'Long route: 10 days, no source, medium reliability'], answer: 0 },
    decision: { prompt: 'A report could help residents but may expose them. What do you do?', options: ['Verify, remove identifying details and publish limits.', 'Publish the unsupported claim immediately.', 'Suppress every report permanently.'], answer: 0 },
    skills: ['chronology', 'evidenceAnalysis', 'causeEffect', 'decisionMaking'],
    codex: ['freedom-movement', 'freedom-newspapers', 'freedom-communication', 'freedom-civic', 'freedom-events', 'freedom-people']
  }
};

export const FINAL_SYNTHESIS = {
  title: 'THE ARCHIVE OF TIME',
  sourceLabels: ['Evidence', 'Interpretation', 'Speculation'],
  prompt: 'Connect evidence across the eras, then reflect with Kalam: what makes a historical claim responsible?',
  relationships: [
    ['Indus water planning', 'Chola temple engineering'],
    ['Fort water management', 'Freedom communication networks'],
    ['Evidence cards', 'Civic decisions and consequences']
  ]
};

export const MASTERY_SKILLS = [
  'observation', 'evidenceAnalysis', 'chronology', 'causeEffect',
  'spatialUnderstanding', 'decisionMaking', 'culturalUnderstanding'
];

export const MASTERY_ALIASES = {
  exploration: ['observation', 'evidenceAnalysis'],
  scholarship: ['evidenceAnalysis', 'chronology', 'culturalUnderstanding'],
  problemSolving: ['causeEffect', 'spatialUnderstanding'],
  stewardship: ['decisionMaking', 'culturalUnderstanding']
};

export const QUEST_STATES = [
  'LOCKED', 'AVAILABLE', 'ACTIVE', 'INVESTIGATING',
  'DECISION', 'ACTION', 'COMPLETED', 'FAILED', 'REVISIT'
];

export function ensurePhase1(data) {
  data.evidence = Array.isArray(data.evidence) ? data.evidence : [];
  data.observations = data.observations && typeof data.observations === 'object' ? data.observations : {};
  data.decisions = data.decisions && typeof data.decisions === 'object' ? data.decisions : {};
  data.consequences = data.consequences && typeof data.consequences === 'object' ? data.consequences : {};
  data.mastery = data.mastery && typeof data.mastery === 'object' ? data.mastery : {};
  MASTERY_SKILLS.forEach(k => { data.mastery[k] = Math.max(0, Math.min(100, Number(data.mastery[k]) || 0)); });
  data.codex = Array.isArray(data.codex) ? data.codex : [];
  data.questStates = data.questStates && typeof data.questStates === 'object' ? data.questStates : {};
  data.chapterProgress = data.chapterProgress && typeof data.chapterProgress === 'object' ? data.chapterProgress : {};
  data.crossChapterConnections = Array.isArray(data.crossChapterConnections) ? data.crossChapterConnections : [];
  data.profile = data.profile && typeof data.profile === 'object' ? data.profile : { reflection: '', connections: 0, decisions: 0 };
  data.xp = Number.isFinite(data.xp) ? data.xp : (Number(data.historyPoints) || 0);
  return data;
}

export function evidenceById(id) { return EVIDENCE.find(e => e.id === id); }
