import { Link } from 'react-router-dom';
import { nav, site } from '../data/site.js';
import { Wordmark } from './Header.jsx';

const h = 'mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted';
export default function Footer() {
  return (
    <footer className="border-t border-line bg-base-200 pt-14">
      <div className="wrap grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div><Wordmark className="text-5xl" /><p className="mt-3 max-w-xs text-muted">Food photography and styling in natural light. A sample portfolio created for demonstration.</p></div>
        <nav aria-label="Footer" className="flex flex-col gap-2"><h2 className={`${h} font-sans`}>Explore</h2>{nav.map((n) => <Link key={n.to} to={n.to} className="w-fit hover:text-accent">{n.label}</Link>)}<Link to="/project" className="w-fit hover:text-accent">Sample project</Link></nav>
        <div className="flex flex-col gap-2"><h2 className={`${h} font-sans`}>Say hello</h2><a href={`mailto:${site.email}`} className="w-fit hover:text-accent">{site.email}</a><p className="text-sm text-muted">A placeholder address. Use the contact form to try the enquiry flow.</p></div>
      </div>
      <div className="wrap mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-line py-6 text-sm text-muted">
        <p>© {new Date().getFullYear()} Savory. All images and copy are sample content.</p>
        <p className="flex flex-wrap items-center gap-x-5"><span>Website designed and built by Zohair</span><Link to="/credits" className="hover:text-accent">Credits</Link></p>
      </div>
    </footer>
  );
}
