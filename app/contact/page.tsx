import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';

export const metadata: Metadata = { title: 'Contact', description: 'Contact InsightsCRM — sales, support, billing and legal channels.' };

const CHANNELS = [
  { dept: 'Sales', email: 'sales@insightscrm.com', desc: 'Demos, pricing and new business.' },
  { dept: 'Support', email: 'support@insightscrm.com', desc: 'Help for existing customers.' },
  { dept: 'Billing', email: 'billing@insightscrm.com', desc: 'Invoices and account billing.' },
  { dept: 'Legal', email: 'legal@insightscrm.com', desc: 'Privacy, security and legal inquiries.' },
];

export default function ContactPage() {
  return (
    <Section>
      <Reveal><Eyebrow>Contact</Eyebrow>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight"><span className="gradient-text">Talk to the right team</span></h1>
        <p className="mt-5 text-lg text-muted max-w-2xl">Reach the department you need directly, or request a tailored demo.</p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CHANNELS.map((c, i) => (
          <Reveal key={c.dept} delay={(i%2)*80}><div className="card card-pad">
            <h2 className="text-lg font-semibold text-white">{c.dept}</h2>
            <p className="mt-1 text-sm text-muted">{c.desc}</p>
            <a href={`mailto:${c.email}`} className="mt-3 inline-block text-brand-300 font-semibold hover:text-brand-100">{c.email}</a>
          </div></Reveal>
        ))}
      </div>
      <div className="mt-8"><Button href="/request-demo" variant="primary" size="lg">Request a Demo</Button></div>
    </Section>
  );
}
