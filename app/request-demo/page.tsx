import type { Metadata } from 'next';
import { Suspense } from 'react';
import Section, { Eyebrow } from '@/components/Section';
import DemoForm from './DemoForm';

export const metadata: Metadata = { title: 'Request a Demo', description: 'See InsightsCRM on your own capital-markets workflows. Book a tailored demo with our team.' };

export default function RequestDemoPage() {
  return (
    <Section muted>
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          <Eyebrow>Request a demo</Eyebrow>
          <h1 className="text-4xl font-bold text-ink-900">See it on your workflows</h1>
          <p className="mt-4 text-ink-600">Tell us about your team and we'll tailor a walkthrough to your market and use case. A capital-markets specialist will be in touch within one business day.</p>
          <ul className="mt-6 space-y-3">
            {['Tailored to your market segment','Live workflows, not slideware','No obligation'].map((t) => (
              <li key={t} className="flex gap-3 text-ink-700"><span className="text-primary-600 font-bold">✓</span>{t}</li>
            ))}
          </ul>
        </div>
        <Suspense fallback={null}><DemoForm /></Suspense>
      </div>
    </Section>
  );
}
