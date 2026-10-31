import { Link } from 'react-router-dom';
import { Camera, ChefHat, NotebookPen, Check, ArrowRight } from 'lucide-react';
import { CtaBand, PageHeader } from '../components/ui.jsx';
import { photo } from '../data/images.js';
import { services, steps } from '../data/site.js';
import { usePageTitle } from '../hooks.js';

const icons = { photography: Camera, styling: ChefHat, recipes: NotebookPen };

export default function Services() {
  usePageTitle('Services', 'Savory offers food photography, food styling and props, and recipe and content development. Sample services for a demonstration website.');
  return (
    <>
      <PageHeader title="Services" eyebrow="What we do">Three ways to work together, from a single shoot to a whole season of content. Services shown here are samples for the demonstration.</PageHeader>
      <section className="py-12 md:py-20">
        <div className="wrap grid gap-20 md:gap-28">
          {services.map((s, i) => { const p = photo(s.img); const Icon = icons[s.id]; return (
            <article key={s.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <img src={p.lg} width={p.lw} height={p.lh} alt={s.id === 'photography' ? 'An overhead table set with halved grapefruit, figs and small plates' : s.id === 'styling' ? 'Hands eating from a table spread with a fruit platter, small plates of pancakes and a teapot' : 'Fresh cherries in a bowl beside a berry tart, a whisk, spoons and an embroidered cloth'} loading="lazy" className={`aspect-[4/3] w-full object-cover ${i % 2 ? 'lg:order-2' : ''}`} />
              <div>
                <span className="mb-4 grid size-12 place-items-center rounded-full bg-blush text-accent"><Icon size={22} /></span>
                <h2 className="text-5xl md:text-6xl">{s.title}</h2>
                <p className="mt-3 font-display text-2xl italic text-muted">{s.lead}</p>
                <p className="mt-5 max-w-[54ch] text-lg leading-relaxed">{s.text}</p>
                <ul className="mt-6 grid gap-2.5">{s.includes.map((x) => <li key={x} className="flex gap-3"><Check size={20} className="mt-0.5 shrink-0 text-secondary" />{x}</li>)}</ul>
                <Link to="/contact" className="link-arrow mt-8">Ask about this service <ArrowRight size={16} /></Link>
              </div>
            </article>
          ); })}
        </div>
      </section>
      <section className="bg-base-200 py-16 md:py-24">
        <div className="wrap">
          <h2 className="text-5xl md:text-7xl">How a project works</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {steps.map(([t, d], i) => <li key={t} className="border-t border-neutral pt-5"><span className="font-display text-5xl text-accent">{i + 1}</span><h3 className="mt-2 text-3xl">{t}</h3><p className="mt-2 text-muted">{d}</p></li>)}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
