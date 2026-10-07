import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const root = path.resolve('dist');
const routes = [
  'index.html',
  'work/index.html',
  'volunteer/index.html',
  'growth/index.html',
  '404.html',
];
for (const route of routes) {
  const html = await readFile(path.join(root, route), 'utf8');
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${route}: exactly one h1`,
  );
  assert.match(html, /<html[^>]*lang="zh-Hant"/, `${route}: document language`);
  assert.match(html, /name="description"/, `${route}: description`);
  assert.match(html, /rel="canonical"/, `${route}: canonical URL`);
  assert.match(html, /property="og:image"/, `${route}: social image`);
  assert.doesNotMatch(
    html,
    /id="development-audit"|clipboard-check|mailto:|vtuber/i,
    `${route}: no development content or excluded features`,
  );
  for (const image of html.matchAll(/<img\b[^>]*>/g)) {
    assert.match(image[0], /\balt="[^"]*"/, `${route}: image alternative text`);
  }
  for (const link of html.matchAll(/<a\b[^>]*href="([^"#]+)"[^>]*>/g)) {
    const href = link[1];
    if (href.startsWith('/') && !href.startsWith('//')) {
      const pathname = href.split(/[?#]/)[0];
      const target = path.join(
        root,
        pathname,
        pathname.endsWith('/') ? 'index.html' : '',
      );
      assert.ok(
        (await stat(target)).isFile(),
        `${route}: internal link ${href}`,
      );
    }
    if (/\btarget="_blank"/.test(link[0])) {
      assert.match(
        link[0],
        /rel="[^"]*noopener/,
        `${route}: safe external link`,
      );
    }
  }
}

let javascriptGzipBytes = 0;
for (const filename of await readdir(path.join(root, '_astro'))) {
  if (!filename.endsWith('.js')) continue;
  const content = await readFile(path.join(root, '_astro', filename));
  assert.ok(
    !content.includes('axe-core'),
    'Development audit dependency must not ship',
  );
  javascriptGzipBytes += gzipSync(content).length;
}
assert.ok(
  javascriptGzipBytes < 100 * 1024,
  'Client JavaScript exceeds the 100KB gzip budget',
);
await stat(path.join(root, 'robots.txt'));
await stat(path.join(root, 'sitemap-index.xml'));
console.log(
  `Build checks passed: ${routes.length} pages; ${javascriptGzipBytes} bytes client JavaScript (gzip).`,
);
