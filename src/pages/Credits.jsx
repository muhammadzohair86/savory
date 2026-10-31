import { PageHeader } from '../components/ui.jsx';
import { usePageTitle } from '../hooks.js';

export default function Credits() {
  usePageTitle('Credits');
  const li = 'py-5'; const h = 'mb-1 block font-display text-2xl';
  return (
    <>
      <PageHeader title="Credits" eyebrow="Savory">Third-party material used on this website.</PageHeader>
      <section className="pb-24 pt-12">
        <ul className="wrap max-w-2xl divide-y divide-line border-y border-line text-lg">
          <li className={li}><strong className={h}>Photography</strong>The photographs come from the Mashup Template bundle, whose pages credit its images to <a className="font-medium text-accent underline" href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>. The individual photographers are not identified in the bundle. Images were resized and recompressed for the web.</li>
          <li className={li}><strong className={h}>Template</strong>The original structure came from the Mashup Template. All pages, code and copy on this site are new.</li>
          <li className={li}><strong className={h}>Typefaces</strong>Cormorant and Jost, used under the SIL Open Font License 1.1.</li>
          <li className={li}><strong className={h}>Interface toolkit</strong>Tailwind CSS, daisyUI and Lucide icons, released under the MIT and ISC licences.</li>
        </ul>
      </section>
    </>
  );
}
