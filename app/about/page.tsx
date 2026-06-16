import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
import DemoCTA from '@/components/DemoCTA';
import Button from '@/components/Button';

export const metadata: Metadata = { title: 'About', description: 'The ANALEC / InsightsCRM story and why capital-markets domain expertise matters in CRM.' };

export default function AboutPage() {
  return (
    <>
      <Section muted>
        <Eyebrow>Our story</Eyebrow>
        <h1 className="text-4xl font-bold text-ink-900 max-w-3xl">Business relationships are human connections</h1>
        <p className="mt-4 text-ink-600 max-w-2xl">InsightsCRM is built on a simple belief: in capital markets, relationships drive value. Our mission is to give every front-office team a single, trusted view of the client and the tools to build profitable, lasting relationships — backed by decades of ANALEC domain expertise.</p>
        <div className="mt-6"><Button href="/request-demo" variant="accent">Request a Demo</Button></div>
      </Section>
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow>Domain specialists</Eyebrow>
            <h2 className="text-2xl font-bold text-ink-900 mb-3">Why domain understanding matters</h2>
            <p className="text-ink-600">Generic CRM platforms treat every industry the same. Capital markets is different — coverage models, research distribution, roadshows, information barriers and engagement-led prospecting demand a system that understands the work. InsightsCRM is purpose-built for it, not retrofitted.</p>
          </div>
          <ul className="grid gap-3">
            {['Purpose-built for capital-markets workflows','Deep relationship & readership intelligence','Enterprise security and compliance','A partner, not just a platform'].map((t) => (
              <li key={t} className="flex gap-3 bg-ink-50 border border-ink-200 rounded-md p-4 text-ink-700"><span className="text-primary-600 font-bold">✓</span>{t}</li>
            ))}
          </ul>
        </div>
      </Section>
      <Section muted><DemoCTA /></Section>
    </>
  );
}
