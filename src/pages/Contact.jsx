import { useState } from 'react';
import { Check, Mail } from 'lucide-react';
import { PageHeader } from '../components/ui.jsx';
import { site } from '../data/site.js';
import { usePageTitle } from '../hooks.js';

const empty = { name: '', email: '', type: '', timeline: '', message: '' };
export default function Contact() {
  usePageTitle('Contact', 'Start a project with Savory. This enquiry form is a demonstration and sends nothing.');
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const f = {};
    if (!v.name.trim()) f.name = 'Please enter your name.';
    if (!v.email.trim()) f.email = 'Please enter your email address.';
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) f.email = 'Please enter an email address like name@example.com.';
    if (!v.type) f.type = 'Please choose what you need.';
    if (v.message.trim().length < 15) f.message = 'Please tell us a little more (at least 15 characters).';
    setErrors(f);
    if (Object.keys(f).length) { document.querySelector('main form [aria-invalid="true"]')?.focus(); return; }
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 900); // demonstration only: nothing is sent or stored
  };

  const a = (k) => ({ id: k, value: v[k], onChange: set(k), 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined });
  const b = (k) => (errors[k] ? 'border-error' : 'border-line');
  const field = (k, label, control) => <div className="field mb-5"><label htmlFor={k}>{label}</label>{control}{errors[k] && <p className="error-text" id={`${k}-err`}>{errors[k]}</p>}</div>;

  return (
    <>
      <PageHeader title="Let's make something delicious" eyebrow="Contact">Tell us what you are making, where the images will be used and when you need them.</PageHeader>
      <section className="pb-24 pt-12 md:pt-16">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="max-w-md">
            <h2 className="text-4xl">Say hello</h2>
            <p className="mt-4 flex items-center gap-3 text-lg"><Mail size={20} className="text-accent" /><a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a></p>
            <p className="mt-6 border-l-2 border-accent bg-blush p-4 text-sm">The email address is a placeholder and the form is a demonstration that does not send anything. Savory is a sample studio with no real address, phone number or social accounts.</p>
          </div>
          {sent ? (
            <div className="bg-base-200 p-8 md:p-10" role="status">
              <span className="mb-4 grid size-12 place-items-center rounded-full bg-accent text-accent-content"><Check size={22} /></span>
              <h2 className="text-5xl">Thank you, {v.name.trim().split(' ')[0]}.</h2>
              <p className="mt-3 max-w-md text-lg text-muted">This was a demonstration, so your message has not been sent or saved. On a live website it would now be on its way to {site.email}.</p>
              <button type="button" className="btn mt-6 rounded-sm border-neutral bg-transparent" onClick={() => { setV(empty); setErrors({}); setSent(false); }}>Write another message</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="border border-line p-6 md:p-8">
              <div className="grid gap-x-5 sm:grid-cols-2">
                {field('name', 'Your name', <input type="text" autoComplete="name" className={`input h-12 w-full bg-base-100 ${b('name')}`} {...a('name')} />)}
                {field('email', 'Email address', <input type="email" autoComplete="email" className={`input h-12 w-full bg-base-100 ${b('email')}`} {...a('email')} />)}
              </div>
              <div className="grid gap-x-5 sm:grid-cols-2">
                {field('type', 'What do you need?', <select className={`select h-12 w-full bg-base-100 ${b('type')}`} {...a('type')}><option value="">Choose one</option><option>Food photography</option><option>Food styling and props</option><option>Recipe and content development</option><option>Something else</option></select>)}
                {field('timeline', 'Timeline (optional)', <select className="select h-12 w-full border-line bg-base-100" {...a('timeline')}><option value="">Not sure yet</option><option>Within a month</option><option>One to three months</option><option>Just exploring</option></select>)}
              </div>
              {field('message', 'About your project', <textarea rows="6" className={`textarea w-full bg-base-100 ${b('message')}`} {...a('message')} />)}
              <button type="submit" className="btn btn-primary btn-lg rounded-sm" disabled={sending}>{sending ? <><span className="loading loading-spinner loading-sm" aria-hidden="true" /> Sending demo enquiry</> : 'Send enquiry'}</button>
              <p className="sr-only" role="status">{sending ? 'Sending demonstration enquiry' : ''}</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
