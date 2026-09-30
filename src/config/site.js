// Single source of truth for site-wide details and per-route SEO metadata.
// Imported by the React app (via <Seo />) AND by vite.config.js, which bakes
// the same title/description/Open Graph tags into static HTML at build time so
// crawlers and link previews (email, LinkedIn, Slack) see them without JS.

export const SITE = {
  name: 'Karsyz Robotics',
  url: 'https://karsyzrobotics.com',
  email: 'matt@karsyzrobotics.com',
  // TODO(Matt): add a business phone number if you want one published.
  phone: null,
  location: 'Sault Ste. Marie, Ontario',
  ogImage: '/images/portfolio/trailerFrame.png',
  calendlyUrl: 'https://calendly.com/karsyz/discovery',
};

// Routes that exist in the app. `path` must match the router in App.jsx.
// `file` is the HTML file emitted in dist/ for that route at build time.
export const ROUTES = [
  {
    path: '/',
    file: 'index.html',
    title: 'Karsyz Robotics | Build-ready CAD for fab shops, machine shops & automation builders',
    description:
      'Remote CAD and mechanical design from a former industrial robot programmer. 3D models, fabrication drawings, sheet metal, weldments, fixtures and DXF/STEP files that are practical to build. Sault Ste. Marie, ON.',
  },
  {
    path: '/services',
    file: 'services.html',
    title: 'CAD & Mechanical Design Services | Karsyz Robotics',
    description:
      '3D modelling, sheet metal, weldments and fabrication drawings, machined parts, 3D printed parts, and production welding, QC and workholding fixtures and robot tooling. Deliverables in DWG, DXF, STEP and PDF.',
  },
  {
    path: '/portfolio',
    file: 'portfolio.html',
    title: 'Portfolio: Weldments, Sheet Metal, Structural & Misc Steel | Karsyz Robotics',
    description:
      'Case studies and examples of CAD and fabrication detailing work: weldments and frames, structural steel, sheet metal, fixtures and tooling, stairs and guardrails, flat patterns and 3D printed parts.',
  },
  {
    path: '/about',
    file: 'about.html',
    title: 'About | Karsyz Robotics',
    description:
      "22 years making sure what's on the drawing actually gets built: fixture design, structural steel detailing, and robotic welding cell commissioning. Based in Sault Ste. Marie, Ontario.",
  },
  {
    path: '/contact',
    file: 'contact.html',
    title: 'Contact | Karsyz Robotics',
    description:
      'Send your drawings, sketches or project details for a quote on remote CAD and mechanical design work. Email matt@karsyzrobotics.com. Based in Sault Ste. Marie, Ontario.',
  },
  {
    path: '/blog',
    file: 'blog.html',
    title: 'Blog | Karsyz Robotics',
    description:
      'Notes on fabrication, manufacturing, CAD and product prototyping from Matt Kars at Karsyz Robotics.',
  },
];

export const NOT_FOUND = {
  path: null,
  file: '404.html',
  title: 'Page not found | Karsyz Robotics',
  description: 'The page you were looking for could not be found.',
  noindex: true,
};

export function getRouteMeta(path) {
  return ROUTES.find((r) => r.path === path) ?? NOT_FOUND;
}
