import { Link } from 'react-router-dom';
import { PageHeader } from '../components/ui.jsx';
import { usePageTitle } from '../hooks.js';

export default function NotFound() {
  usePageTitle('Page not found');
  return (
    <>
      <PageHeader title="Page not found" eyebrow="404">That address does not lead anywhere on Savory.</PageHeader>
      <div className="wrap flex flex-wrap gap-3 pb-24 pt-12"><Link to="/work" className="btn btn-primary rounded-sm">View the work</Link><Link to="/" className="btn rounded-sm border-neutral bg-transparent">Back to the home page</Link></div>
    </>
  );
}
