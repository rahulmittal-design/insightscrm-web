import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
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
    <>
      <Section muted>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-4xl font-bold text-ink-900">Talk to the right team</h1>
        <p className="mt-4 text-ink-600 max-w-2xl">Reach the department you need directly, or request a tailored demo.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {CHANNELS.map((c) => (
            <div key={c.dept} className="bg-white border border-ink-200 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-ink-900">{c.dept}</h2>
              <p className="mt-1 text-sm text-ink-500">{c.desc}</p>
              <a href={`mailto:${c.email}`} className="mt-3 inline-block text-primary-700 font-semibold">{c.email}</a>
            </div>
          ))}
        </div>
        <div className="mt-8"><Button href="/request-demo" variant="accent" size="lg">Request a Demo</Button></div>
      </Section>
    </>
  );
}
