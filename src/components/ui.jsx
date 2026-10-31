import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PageHeader = ({ title, children, eyebrow }) => (
  <section className="border-b border-line">
    <div className="wrap py-14 md:py-20">
      {eyebrow && <p className="eyebrow rise mb-4">{eyebrow}</p>}
      <h1 className="rise max-w-4xl text-6xl md:text-8xl" style={{ animationDelay: '.06s' }}>{title}</h1>
      {children && <p className="lede rise mt-6" style={{ animationDelay: '.14s' }}>{children}</p>}
    </div>
  </section>
);

export const CtaBand = () => (
  <section className="on-dark mt-24 bg-neutral py-16 text-neutral-content md:py-24">
    <div className="wrap flex flex-wrap items-end justify-between gap-8">
      <div>
        <p className="eyebrow !text-[#f0a6b1]">Start a project</p>
        <h2 className="mt-3 max-w-2xl text-5xl text-white md:text-7xl">Have something delicious to shoot?</h2>
        <p className="mt-4 max-w-md text-neutral-content/75">Tell us what you are making and where the images will live. This is a demonstration form, so nothing is actually sent.</p>
      </div>
      <Link to="/contact" className="btn btn-lg rounded-sm border-0 bg-white text-neutral hover:bg-blush">Get in touch <ArrowRight size={18} /></Link>
    </div>
  </section>
);
