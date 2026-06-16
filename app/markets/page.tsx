import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
import { FeatureCard } from '@/components/Card';
import DemoCTA from '@/components/DemoCTA';
import { MARKETS } from '@/data/markets';

export const metadata: Metadata = { title: 'Markets', description: 'How InsightsCRM supports each capital-markets segment — banking, sales & trading, asset management, private equity and private wealth.' };

export default function MarketsIndex() {
  return (
    <>
      <Section muted>
        <Eyebrow>Markets</Eyebrow>
        <h1 className="text-4xl font-bold text-ink-900 max-w-3xl">A CRM tuned to your segment</h1>
        <p className="mt-4 text-ink-600 max-w-2xl">InsightsCRM adapts to the workflows, relationships and compliance needs of each capital-markets business.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m) => <FeatureCard key={m.slug} title={m.name} href={`/markets/${m.slug}`}>{m.subhead}</FeatureCard>)}
        </div>
      </Section>
      <Section><DemoCTA /></Section>
    </>
  );
}
