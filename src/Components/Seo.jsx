import { Helmet } from 'react-helmet';
import { SITE, getRouteMeta } from '../config/site';

/**
 * Per-page <title>, meta description, canonical and Open Graph/Twitter tags.
 * Pass `path` for a known route (see src/config/site.js) or `notFound`.
 */
export default function Seo({ path, notFound = false }) {
  const meta = getRouteMeta(notFound ? null : path);
  const url = meta.path ? `${SITE.url}${meta.path === '/' ? '/' : meta.path}` : null;
  const image = `${SITE.url}${SITE.ogImage}`;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.noindex && <meta name="robots" content="noindex" />}
      {url && <link rel="canonical" href={url} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
