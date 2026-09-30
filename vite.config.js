/* eslint-env node */
import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { SITE, ROUTES, NOT_FOUND } from './src/config/site.js';

const escapeHtml = (str) =>
  str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Build the <head> tags for one route. Mirrors src/Components/Seo.jsx. */
function headTags(meta) {
  const url = meta.path ? `${SITE.url}${meta.path}` : null;
  const image = `${SITE.url}${SITE.ogImage}`;
  // data-react-helmet lets react-helmet replace these tags on client-side
  // navigation instead of leaving stale duplicates behind.
  const tag = (html) => html.replace(/^<(\w+)/, '<$1 data-react-helmet="true"');
  const tags = [
    `<meta name="description" content="${escapeHtml(meta.description)}">`,
    meta.noindex && '<meta name="robots" content="noindex">',
    url && `<link rel="canonical" href="${url}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}">`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}">`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}">`,
    url && `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${image}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`,
    `<meta name="twitter:image" content="${image}">`,
  ].filter(Boolean);
  return [`<title>${escapeHtml(meta.title)}</title>`, ...tags.map(tag)].join('\n    ');
}

/**
 * After the build, write one HTML file per known route (dist/services.html, ...)
 * plus dist/404.html, each with that page's title/description/OG tags baked in.
 * All files load the same SPA bundle. Netlify serves 404.html with a real 404
 * status for any URL not matched by a file or a rule in _redirects.
 */
function routeHtmlPlugin() {
  let outDir;
  return {
    name: 'route-html',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      for (const meta of [...ROUTES, NOT_FOUND]) {
        const html = template.replace(/<title>[\s\S]*?<\/title>/, headTags(meta));
        fs.writeFileSync(path.join(outDir, meta.file), html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects',
          dest: '.',
        },
      ],
    }),
    routeHtmlPlugin(),
  ],
  define: {
    'process.env': {}, // Polyfill process to avoid the error
    // Show "TODO (Matt)" notes locally and on Netlify Deploy Previews,
    // hide them on the production site. Netlify sets CONTEXT during builds.
    __SHOW_TODOS__: JSON.stringify(process.env.CONTEXT !== 'production'),
  },
});
