import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';

const root = path.resolve('dist');
const inlineScripts = new Set();
const routes = [
  'index.html',
  'work/index.html',
  'volunteer/index.html',
  'growth/index.html',
  '404.html',
];
for (const route of routes) {
  const html = await readFile(path.join(root, route), 'utf8');
  for (const script of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
    if (script[1].includes('application/ld+json') || !script[2].trim())
      continue;
    assert.ok(
      !script[2].includes('axe-core'),
      'No development audit in inline scripts',
    );
    inlineScripts.add(script[2]);
  }
  assert.match(
    html,
    /clipboard/,
    `${route}: email copy interaction is included`,
  );
  assert.match(
    html,
    /showModal/,
    `${route}: mobile menu interaction is included`,
  );
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
  for (const link of html.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)) {
    const href = link[1];
    if (
      href.startsWith('#') ||
      (href.startsWith('/') && !href.startsWith('//'))
    ) {
      const currentPath =
        route === 'index.html' ? '/' : `/${route.replace(/index\.html$/, '')}`;
      const url = new URL(href, `https://local.test${currentPath}`);
      const pathname = url.pathname;
      const target = path.join(
        root,
        pathname,
        pathname.endsWith('/') ? 'index.html' : '',
      );
      assert.ok(
        (await stat(target)).isFile(),
        `${route}: internal link ${href}`,
      );
      if (url.hash) {
        const destination = await readFile(target, 'utf8');
        assert.ok(
          destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `${route}: anchor ${href} exists`,
        );
      }
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

let javascriptGzipBytes = [...inlineScripts].reduce(
  (total, script) => total + gzipSync(script).length,
  0,
);
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
