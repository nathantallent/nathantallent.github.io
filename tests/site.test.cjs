// Run with: NODE_PATH=/path/to/test-tools/node_modules node --test tests/site.test.cjs
// Test tools: playwright, axe-core, html-validate. No site runtime dependencies.
const { test, before, after } = require('node:test');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const { HtmlValidate } = require('html-validate');

const root = path.resolve(__dirname, '..');
let browser, server, origin;
before(async () => {
  server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + new URL(req.url, 'http://localhost').pathname);
    if (!file.startsWith(root + path.sep)) {
      res.writeHead(403).end();
      return;
    }
    fs.readFile(file, (error, data) => {
      if (error) {
        res.writeHead(404).end();
        return;
      }
      const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
      res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
      res.end(data);
    });
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch({ channel: 'chrome', headless: true });
});
after(async () => {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
});

for (const file of ['index.html', 'research.html']) {
  test(`${file}: semantic structure, keyboard navigation, links and accessibility`, async () => {
    const page = await browser.newPage();
    try {
      await page.goto(`${origin}/${file}`);
      if (file === 'research.html') assert.match(await page.title(), /Research/);
      assert.equal(await page.locator('meta[name="viewport"]').count(), 1);
      const viewport = await page.locator('meta[name="viewport"]').getAttribute('content');
      assert.match(viewport, /width=device-width/);
      assert.equal(await page.locator('main#main-content').count(), 1);
      assert.equal(await page.locator('nav[aria-label]').count(), 1);
      const current = page.locator('nav a[aria-current="page"]');
      assert.equal(await current.count(), 1);
      assert.equal(await current.getAttribute('href'), file);
      await page.keyboard.press('Tab');
      assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Skip to main content');
      assert.ok(await page.locator('.skip-link').isVisible());
      await page.keyboard.press('Enter');
      assert.equal(await page.evaluate(() => document.activeElement.id), 'main-content');
      await page.keyboard.press('Tab');
      const focus = await page.evaluate(() => {
        const style = getComputedStyle(document.activeElement);
        return { tag: document.activeElement.tagName, outline: style.outlineStyle };
      });
      assert.equal(focus.tag, 'A');
      assert.notEqual(focus.outline, 'none');
      assert.match(await page.locator('main a').first().evaluate(a => getComputedStyle(a).textDecorationLine), /underline/);
      const links = await page.locator('[href], [src]').evaluateAll(elements => elements.map(e => e.getAttribute('href') || e.getAttribute('src')));
      for (const link of links) {
        assert.ok(!link.startsWith('https://doi.org/https://'), `Malformed DOI: ${link}`);
        if (/^(https?:|mailto:)/.test(link)) continue;
        const target = new URL(link, `${origin}/${file}`);
        assert.ok(fs.existsSync(path.join(root, target.pathname)), `Missing local target: ${link}`);
        if (target.hash && target.pathname === '/' + file) {
          assert.equal(await page.locator(`[id="${target.hash.slice(1)}"]`).count(), 1, `Missing anchor: ${link}`);
        }
      }
      await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
      for (const width of [1280, 320]) {
        await page.setViewportSize({ width, height: 900 });
        if (file === 'index.html' && width === 1280) {
          const alignment = await page.evaluate(() => Math.abs(
            document.querySelector('.office-label').getBoundingClientRect().top -
            document.querySelector('.office-address').getBoundingClientRect().top
          ));
          assert.ok(alignment < 1, 'Office label and value must align');
        }
        const violations = await page.evaluate(async () => (await axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] }
        })).violations);
        assert.deepEqual(violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => n.target) })), [], `${width}px accessibility`);
      }
      const validator = new HtmlValidate({ extends: ['html-validate:standard'] });
      // Validate source as well as rendered HTML: browser recovery hides stray closing tags.
      for (const html of [fs.readFileSync(path.join(root, file), 'utf8'), await page.content()]) {
        const report = await validator.validateString(html);
        assert.equal(report.valid, true, JSON.stringify(report.results.flatMap(r => r.messages), null, 2));
      }
      const other = file === 'index.html' ? 'research.html' : 'index.html';
      await page.locator(`nav a[href="${other}"]`).click();
      await page.waitForURL(`${origin}/${other}`);
      assert.equal(await page.locator('nav a[aria-current="page"]').getAttribute('href'), other);
    } finally {
      await page.close();
    }
  });

  test(`${file}: reflows at narrow widths and enlarged text`, async () => {
    const page = await browser.newPage();
    try {
      for (const width of [320, 375, 768, 1280]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(`${origin}/${file}`);
        for (const enlarged of [false, true]) {
          if (enlarged) await page.addStyleTag({ content: 'html { font-size: 200%; }' });
          const layout = await page.evaluate(() => {
            const nav = document.querySelector('nav').getBoundingClientRect();
            const heading = document.querySelector('h1').getBoundingClientRect();
            return {
              overflow: document.documentElement.scrollWidth - innerWidth,
              overlaps: nav.left < heading.right && nav.right > heading.left && nav.top < heading.bottom && nav.bottom > heading.top,
              imagesFit: [...document.images].every(img => img.getBoundingClientRect().right <= innerWidth)
            };
          });
          assert.ok(layout.overflow <= 1, `${width}px, enlarged=${enlarged}: ${JSON.stringify(layout)}`);
          assert.equal(layout.overlaps, false);
          assert.equal(layout.imagesFit, true);
        }
      }
    } finally {
      await page.close();
    }
  });
}

test('shared scripts retain document.write; known text and badge errors stay fixed', () => {
  for (const file of ['navigation-map.js', 'footer.js']) {
    assert.match(fs.readFileSync(path.join(root, 'style', file), 'utf8'), /document\.write\(/);
  }
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'style/footer.js'), 'utf8'), /valid-html401|vcss-blue/);
  assert.doesNotMatch(fs.readFileSync(path.join(root, 'index.html'), 'utf8'), /image qualiy/);
});
