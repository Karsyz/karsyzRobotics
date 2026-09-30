import { SHOW_TODOS } from '../config/flags';

/**
 * Visible reminder for content Matt still needs to supply.
 * Rendered locally and on Netlify Deploy Previews; hidden in production builds
 * (see the __SHOW_TODOS__ define in vite.config.js).
 */
export default function TodoNote({ children }) {
  if (!SHOW_TODOS) return null;
  return (
    <p
      role="note"
      className="rounded-md border-2 border-dashed border-amber-500 bg-amber-50 px-4 py-3 text-sm text-amber-900"
    >
      <strong>TODO (Matt):</strong> {children}
    </p>
  );
}
