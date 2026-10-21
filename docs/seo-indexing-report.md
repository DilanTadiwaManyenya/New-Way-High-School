# Google Search indexing preparation — 21 October 2026

The SEO changes were reviewed locally and approved for commit and push to the existing production branch. No DNS, verification token, verification HTML file, visible page content, styles, images or animations were changed.

## Audit and implementation

The six actual React Router public routes are /, /about, /academics, /admissions, /gallery and /contact. Each already has one H1 and supporting headings. Navigation links point to real routes. StudentLife.jsx is not routed and is intentionally excluded.

Before this work, HTML contained an empty React root and a shared homepage description. Titles were changed only by a browser effect, with a long repeated slogan. There were no canonical tags, robots.txt or sitemap. The catch-all Vercel rewrite returned the homepage shell for nonexistent paths, risking soft 404s.

Changed files:
- src/seo.js: one shared map of six unique page titles and descriptions based only on existing school text, plus https://newwaycollege.co.zw as the canonical origin.
- src/components/ui/SEO.jsx: update title, description, robots, canonical and Open Graph metadata on navigation. Unrecognized paths get noindex and no canonical. Query strings and fragments are excluded from canonical URLs.
- index.html: accurate homepage fallback metadata, canonical and Open Graph URL.
- src/App.jsx: expose the existing site tree for rendering with either BrowserRouter or StaticRouter. All six route definitions and layout classes remain the same.
- src/main.jsx: hydrate generated content in production; use createRoot for the empty development shell.
- src/prerender.jsx, vite.prerender.config.js, scripts/prerender.mjs: render the existing React tree into six static HTML documents at build time using installed dependencies. No runtime rendering server or new package is required. Page content and metadata are present without JavaScript; hydration restores interactive behavior.
- package.json: build the client, build the temporary rendering bundle, then generate static pages and sitemap.
- public/robots.txt: allow crawling and reference https://newwaycollege.co.zw/sitemap.xml.
- public/sitemap.xml: generated from the same route map; exactly six canonical URLs. No speculative routes or invented modification dates.
- vercel.json: clean URLs and no trailing slash, replacing the catch-all SPA rewrite. Existing public routes resolve to generated HTML files. Unknown direct requests use Vercel's native 404. Static assets, robots, sitemap and a future verification file remain actual files.
- .gitignore and eslint.config.js: exclude the generated .prerender bundle.
- scripts/check-seo.mjs: validate built metadata, sitemap membership, one H1 per route, real internal links and existence of built image/script/style assets.
- docs/seo-indexing-report.md: this report.

## Canonical domain: resolved and verified

The owner updated Vercel's domain settings. Fresh HTTP HEAD checks on 21 October 2026 confirmed:
- https://www.newwaycollege.co.zw/about returns 308 Location: https://newwaycollege.co.zw/about
- https://newwaycollege.co.zw/about returns 200.

The earlier redirect conflict is resolved. No DNS or domain settings were changed by this SEO work. The existing master branch tracks origin/master; GitHub's latest Production deployment SHA matches its pre-SEO commit, 42c84f4648698532ab710f22edbedcb96f8bcdbc.

No Vercel preview hostname was found in the source/configuration. Actual preview aliases and protection/indexing headers could not be enumerated without project access. Check production Vercel aliases and previews in the dashboard: preview deployments should be protected or return X-Robots-Tag: noindex; public production pages must not return noindex. Canonical tags always use the requested non-www domain even on previews, but canonical tags alone are not a preview access policy.

## Rendering and validation

Google can render JavaScript, but the original empty shell required rendering before page text and metadata were available. Build-time rendering removes that dependency for all six public pages. The same components and initial state are used on the server and client.

Run npm run build, then node scripts/check-seo.mjs. The build generates dist/index.html and dist/{about,academics,admissions,gallery,contact}.html plus robots.txt and sitemap.xml. Keep Vercel's output directory set to dist and build command set to npm run build; overriding it with only vite build would omit prerendering.

Local production-browser validation checks hydration, direct routes, client-side metadata updates, image loading, gallery lightbox opening/closing, mobile navigation and academic content with JavaScript disabled. A local static server emulates extensionless HTML routing; Vercel routing and domain behavior still require a post-deployment check.

## Remaining issues and follow-up

- The former domain redirect conflict has been resolved and independently verified.
- After approved deployment, verify /, all five inner routes, robots.txt and sitemap.xml return 200; unknown paths return 404; /about.html and /about/ normalize to /about; www and HTTP normalize to HTTPS non-www without loops; production has no noindex response header.
- Check each actual Vercel preview alias for indexing protection.
- Some existing JPEGs are approximately 0.87–1.0 MB. Image optimization could improve performance but was left outside this change to preserve assets. External Google Fonts also affect loading. No measured Core Web Vitals claim is made.
- New public routes must be added to both React Router and src/seo.js. Rebuild and rerun the validation.
- No authenticated portal is routed in this public app. Supabase registration functions contain synthetic parent/student email domains ending in newwaycollege.ac.zw; these are not public canonical URLs and were left unchanged.
- Indexing and ranking cannot be guaranteed by metadata or a sitemap.

## Manual Google Search Console steps

1. Add a URL-prefix property for https://newwaycollege.co.zw/. HTML file verification works with URL-prefix properties; a Domain property requires DNS verification.
2. Download Google's HTML verification file and provide it later. No verification file or token has been added. It should be copied unchanged to public/ using its exact filename, then included in a separately approved deployment. Verify its exact public URL returns the file, without authentication or redirect; keep the file after verification.
3. After deployment and completing verification, submit https://newwaycollege.co.zw/sitemap.xml in the Sitemaps report.
4. Inspect the homepage and important inner pages with URL Inspection > Test live URL. Confirm successful fetch, indexing allowed and the expected non-www canonical, then Request indexing.
5. Monitor the Page indexing and Sitemaps reports for crawl errors, duplicate canonicals and indexing status. Submission does not guarantee indexing.

References:
- https://support.google.com/webmasters/answer/9008080
- https://support.google.com/webmasters/answer/10351509
- https://support.google.com/webmasters/answer/12482179
- https://vite.dev/guide/ssr
- https://vercel.com/docs/project-configuration/vercel-json

Final validation: npm run build passed; node scripts/check-seo.mjs passed; targeted ESLint passed; git diff --check passed. Local Edge browser checks passed for all six routes, hydration, metadata, image loading, gallery lightbox, mobile navigation and JavaScript-disabled content. No build errors. Git emitted only Windows line-ending notices.
