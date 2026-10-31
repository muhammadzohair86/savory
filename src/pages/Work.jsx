import { useSearchParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';
import { CtaBand, PageHeader } from '../components/ui.jsx';
import { gallery, themes } from '../data/gallery.js';
import { usePageTitle } from '../hooks.js';

export default function Work() {
  usePageTitle('Work', 'Browse the Savory photo portfolio by theme: breakfast and brunch, fruit and berries, baking and roasting, coffee and savory.');
  const [params, setParams] = useSearchParams();
  const theme = themes.includes(params.get('theme')) ? params.get('theme') : 'All';
  const list = theme === 'All' ? gallery : gallery.filter((g) => g.theme === theme);
  const choose = (t) => setParams(t === 'All' ? {} : { theme: t }, { replace: true });
  return (
    <>
      <PageHeader title="The work" eyebrow="Portfolio">Twelve photographs across breakfast tables, bakes, fruit and coffee. Choose a theme, then select any image to see it larger.</PageHeader>
      <section className="py-10 md:py-14">
        <div className="wrap">
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter by theme">
            {['All', ...themes].map((t) => (
              <button key={t} type="button" aria-pressed={theme === t} onClick={() => choose(t)} className={`btn h-11 rounded-full px-5 ${theme === t ? 'btn-primary' : 'border-line bg-transparent hover:bg-base-300'}`}>{t}</button>
            ))}
          </div>
          <p className="mb-6 text-muted" role="status">{list.length} {list.length === 1 ? 'photograph' : 'photographs'}{theme !== 'All' ? ` in ${theme}` : ''}</p>
          <Gallery key={theme} items={list} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
