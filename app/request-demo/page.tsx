import type { Metadata } from 'next';
import { Suspense } from 'react';
import Section, { Eyebrow } from '@/components/Section';
import DemoForm from './DemoForm';

export const metadata: Metadata = { title: 'Request a Demo', description: 'See InsightsCRM on your own capital-markets workflows. Book a tailored demo with our team.' };

export default function RequestDemoPage() {
  return (
    <Section>
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
        <div>
          <Eyebrow>Request a demo</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08]"><span className="gradient-text">See it on your workflows</span></h1>
          <p className="mt-5 text-lg text-muted">Tell us about your team and we'll tailor a walkthrough to your market and use case. A capital-markets specialist will be in touch within one business day.</p>
          <ul className="mt-7 space-y-3">
            {['Tailored to your market segment','Live workflows, not slideware','No obligation'].map((t) => (
              <li key={t} className="flex gap-3 text-muted items-center"><span className="text-cyan-400">✦</span>{t}</li>
            ))}
          </ul>
        </div>
        <Suspense fallback={null}><DemoForm /></Suspense>
      </div>
    </Section>
  );
}
