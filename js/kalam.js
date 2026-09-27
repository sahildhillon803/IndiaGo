// ============================================================
// KALAM — AI History Guide (RAG-ready architecture)
// ============================================================
import { KALAM_KB } from './data.js';

const LLM_ENDPOINT = window.BQ_LLM_ENDPOINT || '/api/history';

function retrieve(question) {
  const q = question.toLowerCase();
  let best = null, bestScore = 0;
  for (const entry of KALAM_KB) {
    let score = 0;
    for (const key of entry.keys) if (q.includes(key)) score += key.length;
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return best;
}

/**
 * @param {string} question
 * @param {object} context { levelId, levelName, era }
 * @returns {Promise<string>}
 */
export async function getHistoricalAnswer(question, context = {}) {
  const q = (question || '').trim();
  if (!q) return 'Ask me anything about history — drains, temples, scrolls, forts or freedom!';

  if (LLM_ENDPOINT) {
    try {
      const res = await fetch(LLM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(window.BQ_API_KEY ? { Authorization: `Bearer ${window.BQ_API_KEY}` } : {})
        },
        body: JSON.stringify({ question: q, context })
      });
      if (res.ok) {
        const data = await res.json();
        const text = data?.answer || data?.choices?.[0]?.message?.content;
        if (text) return text.slice(0, 500);
      }
    } catch {
      // Use the local knowledge base when the backend is unavailable.
    }
  }

  const hit = retrieve(q);
  if (hit) return '🤖 ' + hit.answer;
  const eraHints = {
    1: 'Look around this planned city — its drains, bricks and Great Bath each hide a story. Try asking about drains or seals!',
    2: 'Nalanda was a great university. Ask me about scholars, the library or the stars!',
    3: 'The Cholas raised mighty temples. Ask me about temples or Rajaraja!',
    4: 'This fort guards many secrets. Ask me about Shah Jahan or the Taj Mahal!',
    5: 'The printing press spread the dream of freedom. Ask me about Gandhi or 1947!'
  };
  return `🤖 Wonderful question! ${eraHints[context.levelId] || 'Indian history is full of wonders — try asking about drains, Nalanda, temples, forts or freedom!'}`;
}
