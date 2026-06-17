import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
import Reveal from '@/components/Reveal';
import { FeatureCard } from '@/components/Card';
import DemoCTA from '@/components/DemoCTA';
import { MARKETS } from '@/data/markets';

export const metadata: Metadata = { title: 'Markets', description: 'How InsightsCRM supports each capital-markets segment — banking, sales & trading, asset management, private equity and private wealth.' };

export default function MarketsIndex() {
  return (
    <>
      <Section>
        <Reveal><Eyebrow>Markets</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl"><span className="gradient-text">A CRM tuned to your segment</span></h1>
          <p className="mt-5 text-lg text-muted max-w-2xl">InsightsCRM adapts to the workflows, relationships and compliance needs of each capital-markets business.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m, i) => <Reveal key={m.slug} delay={(i%3)*80}><FeatureCard title={m.name} href={`/markets/${m.slug}`}>{m.subhead}</FeatureCard></Reveal>)}
        </div>
      </Section>
      <Section><Reveal><DemoCTA /></Reveal></Section>
    </>
  );
}
