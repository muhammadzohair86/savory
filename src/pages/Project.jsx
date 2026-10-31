import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CtaBand, PageHeader } from '../components/ui.jsx';
import { photo } from '../data/images.js';
import { usePageTitle } from '../hooks.js';

const facts = [['Subject', 'A relaxed weekend brunch table'], ['Light', 'Natural window light, no flash'], ['Angles', 'Overhead and three-quarter'], ['Delivery', 'Edited, web-ready images']];

export default function Project() {
  usePageTitle('A slow weekend brunch', 'A sample Savory project: how a brunch table is planned, styled and photographed in natural light.');
  const a = photo('13'); const b = photo('12'); const c = photo('14');
  return (
    <>
      <PageHeader title="A slow weekend brunch" eyebrow="Sample project">A sample project showing how a shoot comes together. It is not a real client commission.</PageHeader>
      <section className="py-12 md:py-16">
        <div className="wrap">
          <img src={a.lg} width={a.lw} height={a.lh} alt="Hands eating from a table spread with a fruit platter, small plates of pancakes and a teapot" className="aspect-[16/9] w-full object-cover" />
          <dl className="mt-8 grid gap-6 border-b border-line pb-8 sm:grid-cols-2 lg:grid-cols-4">{facts.map(([k, v]) => <div key={k}><dt className="eyebrow">{k}</dt><dd className="mt-1 text-lg">{v}</dd></div>)}</dl>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
            <h2 className="text-5xl md:text-6xl">The idea</h2>
            <div className="max-w-[60ch] space-y-5 text-lg leading-relaxed">
              <p>The goal was a table that looks lived in: a fruit platter in the middle, small plates within reach and a pair of hands about to start eating. Nothing is too perfect, because nobody wants to eat a table that looks untouchable.</p>
              <p>Everything is kept pale and simple so the colour comes from the food itself: blueberries, citrus, dragon fruit and a stack of golden pancakes.</p>
            </div>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <img src={b.lg} width={b.lw} height={b.lh} alt="An overhead table set with halved grapefruit, figs and small plates" loading="lazy" className="aspect-[3/2] w-full object-cover" />
            <img src={c.lg} width={c.lw} height={c.lh} alt="Fresh cherries in a bowl beside a berry tart, a whisk, spoons and an embroidered cloth" loading="lazy" className="aspect-[3/2] w-full object-cover" />
          </div>
          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_2fr]">
            <h2 className="text-5xl md:text-6xl">How it was made</h2>
            <ol className="max-w-[60ch] space-y-6 text-lg leading-relaxed">
              {[['Plan the light', 'The table is set beside a large window and the shoot is timed for the soft part of the day.'], ['Style the surface', 'A white surface, a few ceramics and one patterned cloth keep the focus on the food.'], ['Add life', 'Hands, a fork mid-air and a half-eaten plate tell the viewer that the food is meant to be shared.'], ['Edit gently', 'Colour is balanced and distractions removed, while the food is left looking like food.']].map(([t, d], i) => (
                <li key={t} className="grid grid-cols-[2.5rem_1fr] gap-3"><span className="font-display text-4xl leading-none text-accent">{i + 1}</span><span><strong className="block font-medium">{t}</strong>{d}</span></li>
              ))}
            </ol>
          </div>
          <p className="mt-14 flex flex-wrap gap-6"><Link to="/work" className="link-arrow">More work <ArrowRight size={16} /></Link><Link to="/services" className="link-arrow">See the services <ArrowRight size={16} /></Link></p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
