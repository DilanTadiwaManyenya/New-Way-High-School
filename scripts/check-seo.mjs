import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { PUBLIC_PAGES, SITE_URL } from '../src/seo.js'
const titles = new Set()
const descriptions = new Set()
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
assert.deepEqual(urls, Object.keys(PUBLIC_PAGES).map(path => SITE_URL + path))
assert.equal(await readFile('public/sitemap.xml', 'utf8'), sitemap)
for (const [path, page] of Object.entries(PUBLIC_PAGES)) {
  const html = await readFile(path === '/' ? 'dist/index.html' : 'dist' + path + '.html', 'utf8')
  assert.equal((html.match(/<h1\b/g) || []).length, 1, path + ': one H1')
  for (const pattern of [/<title>/g, /name="description"/g, /rel="canonical"/g, /name="robots"/g]) {
    assert.equal([...html.matchAll(pattern)].length, 1, path + ': unique metadata')
  }
  assert.ok(html.includes('href="' + SITE_URL + path + '"'), path + ': canonical')
  assert.ok(html.includes('content="index, follow"'), path + ': indexable')
  assert.ok(!html.includes('/src/assets/'), path + ': no source image URLs')
  assert.ok(html.length > 5000, path + ': rendered content')
  for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)) {
    await access('dist' + match[1])
  }
  for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) {
    if (!match[1].startsWith('/assets/')) assert.ok(Object.hasOwn(PUBLIC_PAGES, match[1]), 'Real internal link: ' + match[1])
  }
  titles.add(page.title)
  descriptions.add(page.description)
}
assert.equal(titles.size, 6)
assert.equal(descriptions.size, 6)
assert.ok((await readFile('dist/robots.txt', 'utf8')).includes('Sitemap: ' + SITE_URL + '/sitemap.xml'))
console.log('SEO checks passed: six rendered routes, unique metadata, canonical sitemap, H1s, internal links and built assets.')
