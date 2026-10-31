import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { nav } from '../data/site.js';

export const Wordmark = ({ className = '' }) => (
  <Link to="/" aria-label="Savory home" className={`inline-flex items-baseline font-display font-semibold leading-none tracking-tight ${className}`}>
    Savory<span className="ml-0.5 inline-block size-[0.16em] rounded-full bg-accent" aria-hidden="true" />
  </Link>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative block px-1 py-2 text-[0.95rem] font-medium tracking-wide transition-colors hover:text-accent max-lg:border-b max-lg:border-line max-lg:py-4 max-lg:text-xl max-lg:font-display max-lg:font-medium ${isActive ? 'text-accent' : ''}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base-100/95 backdrop-blur-sm">
      <div className="wrap flex min-h-[76px] items-center justify-between gap-6">
        <Wordmark className="text-4xl" />
        <div id="site-nav" className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col gap-5 border-b border-line bg-base-100 px-5 pb-8 pt-2 lg:static lg:flex lg:flex-row lg:items-center lg:gap-9 lg:border-0 lg:bg-transparent lg:p-0`}>
          <nav aria-label="Main" className="flex flex-col lg:flex-row lg:gap-8">
            {nav.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkClass}>
                {({ isActive }) => (<>{n.label}<span className={`absolute inset-x-0 -bottom-px hidden h-px bg-accent lg:block ${isActive ? '' : 'scale-x-0'}`} aria-hidden="true" /></>)}
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="btn btn-primary rounded-sm">Start a project</Link>
        </div>
        <button type="button" className="btn btn-square btn-ghost border-line lg:hidden" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
