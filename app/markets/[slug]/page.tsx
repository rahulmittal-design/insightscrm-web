import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section, { Eyebrow } from '@/components/Section';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import { FeatureCard, ArticleCard } from '@/components/Card';
import DemoCTA from '@/components/DemoCTA';
import { MARKETS, getMarket } from '@/data/markets';
import { ARTICLES } from '@/data/articles';

export function generateStaticParams() { return MARKETS.map((m) => ({ slug: m.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const m = getMarket(params.slug); if (!m) return {};
  return { title: m.name, description: m.subhead };
}

export default function MarketPage({ params }: { params: { slug: string } }) {
  const m = getMarket(params.slug); if (!m) notFound();
  const related = ARTICLES.slice(0, 3);
  return (
    <>
      <section className="relative pt-16 pb-12 sm:pt-24 overflow-hidden">
        <div className="glow-blob" style={{ width:'30rem', height:'22rem', background:'rgba(46,123,246,0.22)', top:'-6rem', right:'10%' }} />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <span className="pill"><span className="pill-dot" />{m.name}</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05]"><span className="gradient-text">{m.headline}</span></h1>
            <p className="mt-6 text-lg text-muted">{m.subhead}</p>
            <div className="mt-8"><Button href={`/request-demo?interest=${encodeURIComponent(m.name)}`} variant="primary" size="lg">Request a Demo</Button></div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-4">
          <Reveal><div className="card card-pad h-full">
            <Eyebrow>The challenge</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-1">Market pain points</h2>
            <ul className="space-y-3">{m.painPoints.map((p) => <li key={p} className="flex gap-3 text-muted"><span className="text-spark-400 mt-0.5">●</span>{p}</li>)}</ul>
          </div></Reveal>
          <Reveal delay={100}><div className="card card-pad h-full">
            <Eyebrow>How we help</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight mb-4 mt-1">How InsightsCRM helps</h2>
            <ul className="space-y-3">{m.helps.map((p) => <li key={p} className="flex gap-3 text-muted"><span className="text-cyan-400 mt-0.5">✦</span>{p}</li>)}</ul>
          </div></Reveal>
        </div>
      </Section>

      <Section>
        <Reveal><Eyebrow>Key workflows</Eyebrow><h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-6">Workflows built for {m.shortName}</h2></Reveal>
        <Reveal><div className="flex flex-wrap gap-3">{m.workflows.map((w) => <span key={w} className="pill text-sm">{w}</span>)}</div></Reveal>
      </Section>

      <Section>
        <Reveal><Eyebrow>Capabilities</Eyebrow><h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8">Product capabilities</h2></Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {m.capabilities.map((c, i) => <Reveal key={c.title} delay={i*80}><FeatureCard title={c.title}>{c.desc}</FeatureCard></Reveal>)}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal><div>
            <Eyebrow>Outcomes</Eyebrow><h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Benefits &amp; outcomes</h2>
            <ul className="space-y-3">{m.outcomes.map((o) => <li key={o} className="flex gap-3 text-muted"><span className="text-cyan-400">✦</span>{o}</li>)}</ul>
          </div></Reveal>
          <Reveal delay={100}><div>
            <Eyebrow>Resources</Eyebrow><h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">Related reading</h2>
            <div className="grid gap-4 sm:grid-cols-2">{related.map((a) => <ArticleCard key={a.slug} category={a.category} title={a.title} date={a.date} href={`/resources/${a.slug}`} hue={a.hue} />)}</div>
          </div></Reveal>
        </div>
      </Section>

      <Section><Reveal><DemoCTA market={m.name} /></Reveal></Section>
    </>
  );
}
