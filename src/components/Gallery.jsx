import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { photo } from '../data/images.js';

// Masonry grid of photographs with a lightbox built on the native <dialog> element.
export default function Gallery({ items }) {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const n = items.length;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + n) % n);
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % n);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, n]);

  const cur = open !== null ? items[open] : null;
  const p = cur ? photo(cur.id) : null;

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {items.map((g, i) => {
          const ph = photo(g.id);
          return (
            <li key={g.id} className="fade-in break-inside-avoid">
              <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo: ${g.title}`} className="group relative block w-full overflow-hidden bg-base-300">
                <img src={ph.md} width={ph.mw} height={ph.mh} alt={g.alt} loading={i < 3 ? 'eager' : 'lazy'} style={{ objectPosition: g.pos }} className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/70 to-transparent p-4 pt-12 text-left text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="block font-display text-xl leading-tight">{g.title}</span><span className="text-xs uppercase tracking-widest text-white/85">{g.theme}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <dialog ref={ref} onClose={() => setOpen(null)} onClick={(e) => e.target === ref.current && setOpen(null)} aria-label="Photo viewer" className="m-auto max-h-[96vh] w-[min(64rem,calc(100%-1rem))] overflow-hidden rounded-sm bg-base-100 p-0 text-base-content shadow-2xl backdrop:bg-black/80">
        {cur && (
          <div className="relative flex max-h-[96vh] flex-col">
            <div className="grid min-h-0 flex-1 place-items-center bg-base-200">
              <img src={p.lg} width={p.lw} height={p.lh} alt={cur.alt} className="max-h-[78vh] w-auto max-w-full object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 p-4">
              <p className="min-w-0"><span className="block font-display text-2xl leading-tight">{cur.title}</span><span className="text-xs font-semibold uppercase tracking-widest text-muted">{cur.theme}</span></p>
              <p className="flex shrink-0 items-center gap-1">
                <button type="button" className="btn btn-ghost btn-square btn-sm" aria-label="Previous photo" onClick={() => setOpen((open - 1 + n) % n)}><ChevronLeft size={20} /></button>
                <span className="min-w-12 text-center text-sm tabular-nums">{open + 1} / {n}</span>
                <button type="button" className="btn btn-ghost btn-square btn-sm" aria-label="Next photo" onClick={() => setOpen((open + 1) % n)}><ChevronRight size={20} /></button>
              </p>
            </div>
            <button type="button" className="btn btn-circle btn-sm absolute right-3 top-3 border-0 bg-base-100/90 hover:bg-base-100" aria-label="Close photo viewer" onClick={() => setOpen(null)}><X size={18} /></button>
          </div>
        )}
      </dialog>
    </>
  );
}
