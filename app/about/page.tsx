import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import DemoCTA from '@/components/DemoCTA';

export const metadata: Metadata = { title: 'About', description: 'The ANALEC / InsightsCRM story and why capital-markets domain expertise matters in CRM.' };

export default function AboutPage() {
  return (
    <>
      <Section>
        <Reveal><Eyebrow>Our story</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl leading-[1.08]"><span className="gradient-text">Business relationships are human connections</span></h1>
          <p className="mt-5 text-lg text-muted max-w-2xl">InsightsCRM is built on a simple belief: in capital markets, relationships drive value. Our mission is to give every front-office team a single, trusted view of the client and the tools to build profitable, lasting relationships — backed by decades of ANALEC domain expertise.</p>
          <div className="mt-7"><Button href="/request-demo" variant="primary">Request a Demo</Button></div>
        </Reveal>
      </Section>
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-4">
          <Reveal><div className="card card-pad h-full">
            <Eyebrow>Domain specialists</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight mb-3 mt-1">Why domain understanding matters</h2>
            <p className="text-muted leading-relaxed">Generic CRM platforms treat every industry the same. Capital markets is different — coverage models, research distribution, roadshows, information barriers and engagement-led prospecting demand a system that understands the work. InsightsCRM is purpose-built for it, not retrofitted.</p>
          </div></Reveal>
          <Reveal delay={100}><div className="card card-pad h-full">
            <ul className="grid gap-3">
              {['Purpose-built for capital-markets workflows','Deep relationship &amp; readership intelligence','Enterprise security and compliance','A partner, not just a platform'].map((t) => (
                <li key={t} className="flex gap-3 text-muted items-center"><span className="text-cyan-400">✦</span><span dangerouslySetInnerHTML={{ __html: t }} /></li>
              ))}
            </ul>
          </div></Reveal>
        </div>
      </Section>
      <Section><Reveal><DemoCTA /></Reveal></Section>
    </>
  );
}
