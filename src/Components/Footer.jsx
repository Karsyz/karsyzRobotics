import { Link } from 'react-router-dom';
import { SITE } from '../config/site';

const links = [
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-indigo-950 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 text-white">
            <img src="/images/karsyzLogo.svg" alt="" className="h-10 w-10" />
            <span className="text-xl font-bold">{SITE.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm">
            Build-ready CAD and mechanical design for fab shops, machine shops,
            equipment builders and automation integrators.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Site</h2>
          <ul className="mt-4 space-y-2">
            {links.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h2>
          <address className="mt-4 space-y-2 not-italic">
            <p>
              <a href={`mailto:${SITE.email}`} className="hover:text-white underline">
                {SITE.email}
              </a>
            </p>
            {/* TODO(Matt): add phone number here if you want one listed (SITE.phone in src/config/site.js). */}
            <p>{SITE.location}, Canada</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container mx-auto px-6 py-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
