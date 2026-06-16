import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section, { Eyebrow } from '@/components/Section';
import Button from '@/components/Button';
import { FeatureCard, ArticleCard } from '@/components/Card';
import DemoCTA from '@/components/DemoCTA';
import { MARKETS, getMarket } from '@/data/markets';
import { ARTICLES } from '@/data/articles';

export function generateStaticParams() { return MARKETS.map((m) => ({ slug: m.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = getMarket(params.slug);
  if (!m) return {};
  return { title: m.name, description: m.subhead };
}

export default function MarketPage({ params }: { params: { slug: string } }) {
  const m = getMarket(params.slug);
  if (!m) notFound();
  const related = ARTICLES.slice(0, 3);
  return (
    <>
      <section className="bg-primary-900 text-white">
        <div className="container-x py-20 max-w-3xl">
          <Eyebrow>{m.name}</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">{m.headline}</h1>
          <p className="mt-5 text-lg text-primary-100">{m.subhead}</p>
          <div className="mt-8"><Button href={`/request-demo?interest=${encodeURIComponent(m.name)}`} variant="accent" size="lg">Request a Demo</Button></div>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Eyebrow>The challenge</Eyebrow>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Market pain points</h2>
            <ul className="space-y-3">{m.painPoints.map((p) => <li key={p} className="flex gap-3 text-ink-700"><span className="text-accent-600 font-bold">•</span>{p}</li>)}</ul>
          </div>
          <div>
            <Eyebrow>How we help</Eyebrow>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">How InsightsCRM helps</h2>
            <ul className="space-y-3">{m.helps.map((p) => <li key={p} className="flex gap-3 text-ink-700"><span className="text-primary-600 font-bold">✓</span>{p}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section muted>
        <Eyebrow>Key workflows</Eyebrow>
        <h2 className="text-2xl font-bold text-ink-900 mb-6">Workflows built for {m.shortName}</h2>
        <div className="flex flex-wrap gap-3">
          {m.workflows.map((w) => <span key={w} className="bg-white border border-ink-200 rounded-full px-4 py-2 text-sm font-medium text-ink-700">{w}</span>)}
        </div>
      </Section>

      <Section>
        <Eyebrow>Capabilities</Eyebrow>
        <h2 className="text-2xl font-bold text-ink-900 mb-6">Product capabilities</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {m.capabilities.map((c) => <FeatureCard key={c.title} title={c.title}>{c.desc}</FeatureCard>)}
        </div>
      </Section>

      <Section muted>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow>Outcomes</Eyebrow>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Benefits &amp; outcomes</h2>
            <ul className="space-y-3">{m.outcomes.map((o) => <li key={o} className="flex gap-3 text-ink-700"><span className="text-primary-600 font-bold">✓</span>{o}</li>)}</ul>
          </div>
          <div>
            <Eyebrow>Resources</Eyebrow>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Related reading</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {related.map((a) => <ArticleCard key={a.slug} category={a.category} title={a.title} date={`${a.date}`} href={`/resources/${a.slug}`} hue={a.hue} />)}
            </div>
          </div>
        </div>
      </Section>

      <Section><DemoCTA market={m.name} /></Section>
    </>
  );
}
