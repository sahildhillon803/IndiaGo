import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('.', import.meta.url)));
const port = Number(process.env.PORT || 8080);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

function sendJson(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(body));
}

async function readRequestBody(req) {
  let body = '';
  for await (const chunk of req) body += chunk;
  return JSON.parse(body || '{}');
}

function historyAnswer(question, context = {}) {
  const q = String(question || '').toLowerCase();
  if (q.includes('drain')) return '🤖 The Indus cities used covered drains to carry wastewater away. This helped keep streets cleaner and shows how carefully the cities were planned.';
  if (q.includes('nalanda') || q.includes('scholar') || q.includes('library')) return '🤖 Nalanda was a famous ancient university where students and scholars studied subjects such as philosophy, medicine and astronomy.';
  if (q.includes('temple') || q.includes('chola') || q.includes('rajaraja')) return '🤖 Chola rulers built grand temples such as the Brihadisvara Temple. These buildings were also centres of art, learning and community life.';
  if (q.includes('fort') || q.includes('shah jahan') || q.includes('taj')) return '🤖 Indian forts protected cities and trade routes. Their gates, walls and clever designs helped people defend important places.';
  if (q.includes('gandhi') || q.includes('freedom') || q.includes('1947')) return '🤖 India’s freedom movement brought together people across the country. India became independent on 15 August 1947.';
  return `🤖 Wonderful question about ${context.era || 'Indian history'}! Explore the world and ask me about drains, Nalanda, temples, forts or freedom.`;
}

async function serveStatic(req, res, pathname) {
  const requested = pathname === '/' ? '/index.html' : pathname;
  const filePath = resolve(join(root, normalize(requested)));
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    const file = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': contentTypes[extname(filePath)] || 'application/octet-stream',
    });
    if (req.method === 'HEAD') {
      res.end();
    } else {
      res.end(file);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(500);
    res.end('Internal server error');
  }
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (req.method === 'GET' && url.pathname === '/api/health') {
    sendJson(res, 200, { status: 'ok', service: 'bharat-quest' });
    return;
  }

  if (req.method === 'POST' && url.pathname === '/api/history') {
    try {
      const body = await readRequestBody(req);
      sendJson(res, 200, { answer: historyAnswer(body.question, body.context) });
    } catch {
      sendJson(res, 400, { error: 'Request body must be valid JSON.' });
    }
    return;
  }

  if (req.method === 'GET' || req.method === 'HEAD') {
    await serveStatic(req, res, url.pathname);
    return;
  }

  res.writeHead(405, { Allow: 'GET, POST' });
  res.end('Method not allowed');
});

function startServer(p, retries = 10) {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE' && retries > 0) {
      console.warn(`Port ${p} is in use, trying http://localhost:${p + 1}...`);
      startServer(p + 1, retries - 1);
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });

  server.listen(p, () => {
    console.log(`BharatQuest running at http://localhost:${p}`);
  });
}

startServer(port);
