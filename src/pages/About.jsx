import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHeader } from '../components/ui.jsx';
import { photo } from '../data/images.js';
import { gallery, themes } from '../data/gallery.js';
import { principles } from '../data/site.js';
import { usePageTitle } from '../hooks.js';

export default function About() {
  usePageTitle('About', 'About Savory, a sample food photography and styling practice built around natural light, real food and calm styling.');
  const p = photo('10');
  return (
    <>
      <PageHeader title="Good food, simply lit" eyebrow="About Savory">Savory is a sample food photography and styling practice, created to demonstrate a portfolio website.</PageHeader>
      <section className="py-12 md:py-20">
        <div className="wrap grid items-start gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <img src={p.lg} width={p.lw} height={p.lh} alt="A plate of green salad with lemon wedges and crisp fillets beside a bottle of sparkling water" className="aspect-[4/5] w-full object-cover" />
          <div className="max-w-[56ch] text-lg leading-relaxed">
            <h2 className="text-5xl md:text-6xl">A calm way to photograph food</h2>
            <p className="mt-6">Savory makes bright, natural-light pictures of the food people actually cook and eat: pancakes at the weekend, a berry tart on a summer table, roasted fruit straight from the oven.</p>
            <p className="mt-5">The approach is simple. Find the best window, keep the surface pale and quiet, and let colour come from the ingredients. Styling supports the food rather than competing with it, and hands, crumbs and spoons are welcome when they make the picture feel real.</p>
            <p className="mt-5">The result is imagery that works on a menu, a recipe page, packaging or a feed, and still looks like something you would like to eat.</p>
            <Link to="/work" className="link-arrow mt-8">See the work <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-base-200 py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-5xl md:text-7xl">What guides the pictures</h2>
          <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {principles.map(([t, d]) => <li key={t} className="border-t border-neutral pt-5"><h3 className="text-3xl">{t}</h3><p className="mt-2 max-w-[48ch] text-lg text-muted">{d}</p></li>)}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-5xl md:text-7xl">Favourite subjects</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((t) => {
              const items = gallery.filter((g) => g.theme === t); const ph = photo(items[0].id);
              return (
                <li key={t}><Link to={`/work?theme=${encodeURIComponent(t)}`} className="group block">
                  <span className="block overflow-hidden"><img src={ph.md} width={ph.mw} height={ph.mh} alt="" loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" /></span>
                  <span className="mt-3 block font-display text-2xl group-hover:text-accent">{t}</span><span className="text-sm text-muted">{items.length} {items.length === 1 ? 'photograph' : 'photographs'}</span>
                </Link></li>
              );
            })}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
