import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
import Reveal from '@/components/Reveal';
import Button from '@/components/Button';
import DemoCTA from '@/components/DemoCTA';
import { SOLUTIONS } from '@/data/solutions';

export const metadata: Metadata = { title: 'Solutions', description: 'InsightsCRM product capabilities: knowledge management, customer & relationship intelligence, prospecting, roadshows, dashboards, security & compliance and more.' };

export default function SolutionsPage() {
  const general = SOLUTIONS.filter((s) => !s.security);
  const security = SOLUTIONS.filter((s) => s.security);
  return (
    <>
      <Section>
        <Reveal><Eyebrow>Solutions</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl"><span className="gradient-text">Everything the front office needs, in one platform</span></h1>
          <p className="mt-5 text-lg text-muted max-w-2xl">Explore the capabilities that power customer intelligence, deal flow, prospecting and engagement across capital markets.</p>
        </Reveal>
        <Reveal><nav className="mt-7 flex flex-wrap gap-2" aria-label="Solution capabilities">
          {SOLUTIONS.map((s) => <a key={s.slug} href={`#${s.slug}`} className="pill hover:text-white hover:border-white/25 transition-colors">{s.name}</a>)}
        </nav></Reveal>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4 lg:grid-cols-2">
          {general.map((s, i) => (
            <Reveal key={s.slug} delay={(i%2)*90}><div id={s.slug} className="scroll-mt-24 card card-pad h-full">
              <div className="icon-chip mb-4">{s.icon}</div>
              <h2 className="text-xl font-bold text-white">{s.name}</h2>
              <p className="mt-2 text-muted">{s.desc}</p>
              <ul className="mt-4 space-y-2">{s.bullets.map((b) => <li key={b} className="flex gap-2 text-sm text-muted"><span className="text-cyan-400">✦</span>{b}</li>)}</ul>
              <div className="mt-5"><Button href="/request-demo" variant="ghost" size="sm">Request a Demo →</Button></div>
            </div></Reveal>
          ))}
        </div>
      </Section>

      <Section id="security-compliance" className="scroll-mt-24">
        <div className="relative panel overflow-hidden px-6 sm:px-12 py-14">
          <div className="glow-blob" style={{ width:'26rem', height:'18rem', background:'rgba(46,123,246,0.22)', top:'-6rem', right:'5%' }} />
          <div className="relative">
            <Eyebrow>Enterprise trust</Eyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight"><span className="gradient-text">Data security &amp; compliance</span></h2>
            <p className="mt-3 text-muted max-w-2xl">Enterprise-grade controls designed for capital-markets risk, IT and compliance stakeholders.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {security.flatMap((s) => s.bullets).concat(['Secure, encrypted hosting','Least-privilege access','Vulnerability scanning']).map((b) => (
                <div key={b} className="glass rounded-xl p-4 text-sm text-muted flex items-center gap-2.5"><span className="text-cyan-400">✦</span>{b}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section><Reveal><DemoCTA /></Reveal></Section>
    </>
  );
}
