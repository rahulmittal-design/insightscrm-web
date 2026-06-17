import Link from 'next/link';
import Section, { Eyebrow } from '@/components/Section';
import Button from '@/components/Button';
import Reveal from '@/components/Reveal';
import Stat from '@/components/Stat';
import { FeatureCard, ArticleCard } from '@/components/Card';
import DemoCTA from '@/components/DemoCTA';
import { MARKETS } from '@/data/markets';
import { SOLUTIONS } from '@/data/solutions';
import { ARTICLES } from '@/data/articles';

function DashboardMock() {
  return (
    <div className="glass rounded-2xl p-3 shadow-2xl animate-floaty">
      <div className="rounded-xl bg-[#070C18]/80 border border-white/10 overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-spark-500/80" /><span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-[0.7rem] text-dim">InsightsCRM · Coverage Dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-3 p-4">
          {[['Pipeline','$248M','+12%'],['Active mandates','37','+4'],['Client touchpoints','1,204','+18%']].map(([k,v,d]) => (
            <div key={k} className="rounded-lg bg-white/[0.03] border border-white/10 p-3">
              <div className="text-[0.65rem] text-dim">{k}</div>
              <div className="text-lg font-bold text-white mt-1">{v}</div>
              <div className="text-[0.65rem] text-cyan-400 mt-0.5">{d}</div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-5">
          <div className="rounded-lg bg-white/[0.03] border border-white/10 p-4">
            <div className="flex items-end gap-2 h-28">
              {[42,58,49,71,63,84,77,95,88,72,90,100].map((h,i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-brand-600/40 to-cyan-400/80" style={{ height:`${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-16 pb-24 sm:pt-24 sm:pb-28 overflow-hidden">
        <div className="container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <Reveal>
            <span className="pill"><span className="pill-dot" />Purpose-built for capital markets</span>
            <h1 className="mt-6 text-[2.6rem] sm:text-6xl font-bold tracking-[-0.02em] leading-[1.05]">
              <span className="gradient-text">Build profitable client relationships</span><br className="hidden sm:block" /> across every desk
            </h1>
            <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
              InsightsCRM eliminates information silos and gives banking, research, sales &amp; trading, asset management and wealth teams a single, trusted view of the client — with workflows built for how capital markets actually work.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/request-demo" variant="primary" size="lg">Request a Demo</Button>
              <Button href="/solutions" variant="glass" size="lg">Explore Solutions</Button>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-dim">
              <span className="flex items-center gap-2"><span className="pill-dot" />SSO &amp; MFA</span>
              <span className="flex items-center gap-2"><span className="pill-dot" />Information barriers</span>
              <span className="flex items-center gap-2"><span className="pill-dot" />Powered by ANALEC</span>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="glow-blob" style={{ width:'26rem', height:'26rem', background:'rgba(46,123,246,0.30)', top:'-4rem', right:'-3rem' }} />
            <div className="glow-blob" style={{ width:'18rem', height:'18rem', background:'rgba(255,77,87,0.18)', bottom:'-3rem', left:'-2rem' }} />
            <div className="relative"><DashboardMock /></div>
          </Reveal>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="container-x">
        <Reveal><div className="rule" /></Reveal>
        <Reveal><p className="text-center text-xs uppercase tracking-[0.2em] text-dim py-8">Trusted across the front office — banking · research · sales &amp; trading · asset management · private wealth</p></Reveal>
        <div className="rule" />
      </div>

      {/* BUSINESS IMPACT */}
      <Section>
        <Reveal><Eyebrow>Business impact</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">Measurable outcomes for front-office teams</h2>
          <p className="mt-3 text-sm text-dim">Illustrative figures — replace with approved metrics from the current site.</p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}><Stat value={70} prefix="−" suffix="%" label="Reduction in manual data entry" accent="cyan" /></Reveal>
          <Reveal delay={80}><Stat value={85} prefix="−" suffix="%" label="Fewer information silos" accent="blue" /></Reveal>
          <Reveal delay={160}><Stat value={3} suffix="×" label="Faster support turnaround" accent="cyan" /></Reveal>
          <Reveal delay={240}><Stat value={40} prefix="+" suffix="%" label="Improvement in user adoption" accent="red" /></Reveal>
        </div>
      </Section>

      {/* MARKETS — bento */}
      <Section>
        <Reveal><div className="flex items-end justify-between flex-wrap gap-4">
          <div><Eyebrow>Markets</Eyebrow><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Built for your corner of the market</h2></div>
          <Link href="/markets" className="text-sm font-semibold text-brand-300 hover:text-brand-100">All markets →</Link>
        </div></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETS.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 3) * 80}><FeatureCard title={m.name} href={`/markets/${m.slug}`}>{m.subhead}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      {/* SOLUTIONS — bento */}
      <Section>
        <Reveal><div className="flex items-end justify-between flex-wrap gap-4">
          <div><Eyebrow>Solutions</Eyebrow><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">One platform, the full client lifecycle</h2></div>
          <Link href="/solutions" className="text-sm font-semibold text-brand-300 hover:text-brand-100">All solutions →</Link>
        </div></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}><FeatureCard icon={s.icon} title={s.name} href={`/solutions#${s.slug}`}>{s.desc}</FeatureCard></Reveal>
          ))}
        </div>
      </Section>

      {/* WHY SPECIALIZED + SECURITY (split bento) */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-4">
          <Reveal><div className="card card-pad h-full">
            <Eyebrow>Why specialized</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">A domain CRM, not a generic platform to customize</h2>
            <p className="mt-4 text-muted leading-relaxed">Generic CRMs require heavy, costly customization to fit capital-markets workflows — and still fall short. InsightsCRM is purpose-built for prospecting, coverage, deal flow, relationship intelligence and engagement, backed by ANALEC domain expertise.</p>
            <div className="mt-6"><Button href="/about" variant="glass" size="sm">Why InsightsCRM →</Button></div>
          </div></Reveal>
          <Reveal delay={100}><div className="card card-pad h-full relative overflow-hidden">
            <div className="glow-blob" style={{ width:'18rem', height:'14rem', background:'rgba(255,77,87,0.16)', top:'-4rem', right:'-3rem' }} />
            <div className="relative">
              <Eyebrow>Enterprise trust</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">Security &amp; compliance, built in</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {['SSO &amp; MFA','Role-based access','Information barriers','Audit logs','Secure hosting','Compliance controls'].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-muted"><span className="text-cyan-400">✦</span><span dangerouslySetInnerHTML={{ __html: t }} /></li>
                ))}
              </ul>
              <div className="mt-6"><Button href="/solutions#security-compliance" variant="glass" size="sm">See security &amp; compliance →</Button></div>
            </div>
          </div></Reveal>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section>
        <Reveal><div className="flex items-end justify-between flex-wrap gap-4">
          <div><Eyebrow>Resources</Eyebrow><h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest thinking</h2></div>
          <Link href="/resources" className="text-sm font-semibold text-brand-300 hover:text-brand-100">All resources →</Link>
        </div></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 80}><ArticleCard category={a.category} title={a.title} date={`${a.date} · ${a.readMins} min read`} href={`/resources/${a.slug}`} hue={a.hue} /></Reveal>
          ))}
        </div>
      </Section>

      <Section><Reveal><DemoCTA /></Reveal></Section>
    </>
  );
}
