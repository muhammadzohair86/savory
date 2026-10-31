import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Gallery from '../components/Gallery.jsx';
import { CtaBand } from '../components/ui.jsx';
import { photo } from '../data/images.js';
import { featured } from '../data/gallery.js';
import { services } from '../data/site.js';
import { usePageTitle } from '../hooks.js';

export default function Home() {
  usePageTitle('', 'Savory is a sample food photography and styling portfolio: bright, natural-light images of brunch, baking, fruit and coffee. A demonstration website.');
  const hero = photo('12');
  const project = photo('13');
  return (
    <>
      <section className="overflow-hidden">
        <div className="wrap grid items-center gap-10 py-12 md:py-16 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:py-20">
          <div>
            <p className="eyebrow rise mb-5">Food photography and styling</p>
            <h1 className="rise text-[4.25rem] leading-[0.95] sm:text-8xl lg:text-[7rem]" style={{ animationDelay: '.08s' }}>Food, in <em className="text-accent">good</em> light.</h1>
            <p className="lede rise mt-7" style={{ animationDelay: '.16s' }}>Bright, honest pictures of brunch tables, bakes, fruit and coffee, made with window light and a calm approach to styling.</p>
            <div className="rise mt-9 flex flex-wrap gap-3" style={{ animationDelay: '.24s' }}>
              <Link to="/work" className="btn btn-primary btn-lg rounded-sm">View the work <ArrowRight size={18} /></Link>
              <Link to="/contact" className="btn btn-lg rounded-sm border-neutral bg-transparent hover:bg-neutral hover:text-neutral-content">Start a project</Link>
            </div>
          </div>
          <div className="relative rise" style={{ animationDelay: '.18s' }}>
            <img src={hero.lg} width={hero.lw} height={hero.lh} alt="An overhead table set with halved grapefruit, figs and small plates" className="aspect-[5/4] w-full object-cover" />
            <Link to="/project" className="absolute -bottom-5 left-4 flex items-center gap-3 bg-base-100 px-5 py-3 shadow-xl transition hover:-translate-y-0.5 sm:left-auto sm:right-6">
              <span><span className="eyebrow block">Sample project</span><span className="font-display text-xl">A slow weekend brunch</span></span><ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line py-16 md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <p className="eyebrow">The approach</p>
          <div>
            <p className="font-display text-4xl leading-[1.12] md:text-6xl">Food should look the way it does at the table: <em>unhurried, bright and a little bit messy.</em></p>
            <Link to="/about" className="link-arrow mt-8">About Savory <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><h2 className="text-5xl md:text-7xl">Selected work</h2><Link to="/work" className="link-arrow">See all twelve photographs <ArrowRight size={16} /></Link></div>
          <Gallery items={featured} />
        </div>
      </section>

      <section className="bg-base-200 py-16 md:py-24">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><h2 className="text-5xl md:text-7xl">Services</h2><Link to="/services" className="link-arrow">How we work <ArrowRight size={16} /></Link></div>
          <ul className="grid gap-8 md:grid-cols-3">
            {services.map((s) => { const p = photo(s.img); return (
              <li key={s.id} className="group">
                <Link to="/services" tabIndex={-1} aria-hidden="true" className="block overflow-hidden"><img src={p.md} width={p.mw} height={p.mh} alt="" loading="lazy" className="aspect-[3/2] w-full object-cover transition duration-700 group-hover:scale-105" /></Link>
                <h3 className="mt-5 text-3xl"><Link to="/services" className="hover:text-accent">{s.title}</Link></h3>
                <p className="mt-2 text-muted">{s.lead}</p>
              </li>
            ); })}
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <Link to="/project" className="group block overflow-hidden"><img src={project.lg} width={project.lw} height={project.lh} alt="Hands eating from a table spread with a fruit platter, small plates of pancakes and a teapot" loading="lazy" className="aspect-[3/2] w-full object-cover transition duration-1000 group-hover:scale-[1.03]" /></Link>
          <div>
            <p className="eyebrow">Sample project</p>
            <h2 className="mt-3 text-5xl md:text-6xl">A slow weekend brunch</h2>
            <p className="lede mt-5">See how a single shoot comes together, from the first shot list to the final frame.</p>
            <Link to="/project" className="link-arrow mt-7">Read the project <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
