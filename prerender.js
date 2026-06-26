/**
 * Post-build prerender script.
 * Run AFTER: `vite build` (client) + `vite build --ssr` (server bundle)
 * Renders the React app to a string and injects it into dist/index.html.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  const distServer = path.resolve(__dirname, 'dist/server/entry-server.js');
  const { render } = await import(distServer);

  const appHtml = render();

  const templatePath = path.resolve(__dirname, 'dist/index.html');
  let template = fs.readFileSync(templatePath, 'utf-8');

  const html = template.replace('<!--app-html-->', appHtml);
  fs.writeFileSync(templatePath, html);

  console.log('[prerender] index.html pre-rendered successfully.');
}

prerender().catch((err) => {
  console.error('[prerender] Error:', err);
  process.exit(1);
});
