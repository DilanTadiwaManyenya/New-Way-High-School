import { readFile, writeFile } from 'node:fs/promises'
import { render } from '../.prerender/prerender.js'
import { PUBLIC_PAGES, SITE_URL } from '../src/seo.js'
const template = await readFile('dist/index.html', 'utf8')
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
for (const [path, page] of Object.entries(PUBLIC_PAGES)) {
  const html = template
    .replace(/<title>.*?<\/title>/s, '<title>' + escape(page.title) + '</title>')
    .replace(/<meta (?:name="(?:description|robots)"|property="og:[^"]+")[^>]*\/?>/g, '')
    .replace(/<link rel="canonical"[^>]*\/?>/g, '')
    .replace('</head>', [
      '<meta name="description" content="' + escape(page.description) + '" />',
      '<meta name="robots" content="index, follow" />',
      '<link rel="canonical" href="' + SITE_URL + path + '" />',
      '<meta property="og:title" content="' + escape(page.title) + '" />',
      '<meta property="og:description" content="' + escape(page.description) + '" />',
      '<meta property="og:type" content="website" />',
      '<meta property="og:url" content="' + SITE_URL + path + '" />',
      '</head>',
    ].join('\n'))
    .replace('<div id="root"></div>', () => '<div id="root">' + render(path) + '</div>')
  await writeFile(path === '/' ? 'dist/index.html' : 'dist' + path + '.html', html)
}
const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + Object.keys(PUBLIC_PAGES).map(path => '  <url><loc>' + SITE_URL + path + '</loc></url>').join('\n')
  + '\n</urlset>\n'
await writeFile('public/sitemap.xml', sitemap)
await writeFile('dist/sitemap.xml', sitemap)
console.log('Prerendered ' + Object.keys(PUBLIC_PAGES).length + ' public pages and generated sitemap.xml.')
