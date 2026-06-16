import Link from 'next/link';
import Section, { Eyebrow } from '@/components/Section';
import Button from '@/components/Button';
import { FeatureCard, MetricStat, ArticleCard } from '@/components/Card';
import DemoCTA from '@/components/DemoCTA';
import { MARKETS } from '@/data/markets';
import { SOLUTIONS } from '@/data/solutions';
import { ARTICLES } from '@/data/articles';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary-900 text-white">
        <div className="container-x py-20 sm:py-28 max-w-3xl">
          <Eyebrow>CRM for capital markets</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Build profitable client relationships across every desk
          </h1>
          <p className="mt-5 text-lg text-primary-100 max-w-2xl">
            InsightsCRM eliminates information silos and gives banking, research, sales &amp; trading, asset management and wealth teams a single, trusted view of the client — with workflows built for how capital markets actually work.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/request-demo" variant="accent" size="lg">Request a Demo</Button>
            <Button href="/solutions" variant="outline" size="lg" className="!bg-transparent !text-white !border-white/40 hover:!bg-white/10">Explore Solutions</Button>
          </div>
        </div>
      </section>

      {/* BUSINESS IMPACT */}
      <Section muted>
        <Eyebrow>Business impact</Eyebrow>
        <h2 className="text-3xl font-bold text-ink-900 max-w-2xl">Measurable outcomes for front-office teams</h2>
        <p className="mt-2 text-ink-500 max-w-2xl text-sm">Illustrative figures — replace with approved metrics from the current site.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <MetricStat value="−70%" label="Reduction in manual data entry" />
          <MetricStat value="−85%" label="Fewer information silos" />
          <MetricStat value="3×" label="Faster support turnaround" />
          <MetricStat value="+40%" label="Improvement in user adoption" />
        </div>
      </Section>

      {/* MARKETS */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <Eyebrow>Markets</Eyebrow>
            <h2 className="text-3xl font-bold text-ink-900">Built for your corner of the market</h2>
          </div>
          <Link href="/markets" className="text-sm font-semibold text-primary-700">All markets →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m) => (
            <FeatureCard key={m.slug} title={m.name} href={`/markets/${m.slug}`}>{m.subhead}</FeatureCard>
          ))}
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section muted>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <Eyebrow>Solutions</Eyebrow>
            <h2 className="text-3xl font-bold text-ink-900">One platform, the full client lifecycle</h2>
          </div>
          <Link href="/solutions" className="text-sm font-semibold text-primary-700">All solutions →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.slice(0, 6).map((s) => (
            <FeatureCard key={s.slug} icon={s.icon} title={s.name} href={`/solutions#${s.slug}`}>{s.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      {/* WHY SPECIALIZED */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Eyebrow>Why specialized</Eyebrow>
            <h2 className="text-3xl font-bold text-ink-900">A domain CRM, not a generic platform to customize</h2>
            <p className="mt-4 text-ink-600">Generic CRMs require heavy, costly customization to fit capital-markets workflows — and still fall short. InsightsCRM is purpose-built for prospecting, coverage, deal flow, relationship intelligence and engagement, backed by ANALEC domain expertise.</p>
            <div className="mt-6"><Button href="/about" variant="outline">Why InsightsCRM →</Button></div>
          </div>
          <ul className="grid gap-3">
            {['Capital-markets workflows out of the box','Relationship intelligence across desks','Research distribution & readership analytics','Enterprise security, SSO/MFA & compliance controls'].map((t) => (
              <li key={t} className="flex gap-3 bg-ink-50 border border-ink-200 rounded-md p-4 text-ink-700">
                <span className="text-primary-600 font-bold">✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* SECURITY TEASER */}
      <Section dark>
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
          <div>
            <Eyebrow>Enterprise trust</Eyebrow>
            <h2 className="text-3xl font-bold text-white">Security &amp; compliance, built in</h2>
            <p className="mt-3 text-primary-100 max-w-xl">SSO and MFA, role-based access, information barriers, audit logs and secure hosting — designed to satisfy CTO, CIO, risk and compliance stakeholders.</p>
          </div>
          <div className="lg:justify-self-end"><Button href="/solutions#security-compliance" variant="accent" size="lg">See security &amp; compliance</Button></div>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section muted>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <Eyebrow>Resources</Eyebrow>
            <h2 className="text-3xl font-bold text-ink-900">Latest thinking</h2>
          </div>
          <Link href="/resources" className="text-sm font-semibold text-primary-700">All resources →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a) => (
            <ArticleCard key={a.slug} category={a.category} title={a.title} date={`${a.date} · ${a.readMins} min read`} href={`/resources/${a.slug}`} hue={a.hue} />
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section><DemoCTA /></Section>
    </>
  );
}
