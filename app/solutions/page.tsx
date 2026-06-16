import type { Metadata } from 'next';
import Section, { Eyebrow } from '@/components/Section';
import DemoCTA from '@/components/DemoCTA';
import Button from '@/components/Button';
import { SOLUTIONS } from '@/data/solutions';

export const metadata: Metadata = { title: 'Solutions', description: 'InsightsCRM product capabilities: knowledge management, customer & relationship intelligence, prospecting, roadshows, dashboards, security & compliance and more.' };

export default function SolutionsPage() {
  const general = SOLUTIONS.filter((s) => !s.security);
  const security = SOLUTIONS.filter((s) => s.security);
  return (
    <>
      <Section muted>
        <Eyebrow>Solutions</Eyebrow>
        <h1 className="text-4xl font-bold text-ink-900 max-w-3xl">Everything the front office needs, in one platform</h1>
        <p className="mt-4 text-ink-600 max-w-2xl">Explore the capabilities that power customer intelligence, deal flow, prospecting and engagement across capital markets.</p>
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Solution capabilities">
          {SOLUTIONS.map((s) => <a key={s.slug} href={`#${s.slug}`} className="text-xs font-medium bg-white border border-ink-200 rounded-full px-3 py-1.5 text-ink-700 hover:border-primary-500 hover:text-primary-700">{s.name}</a>)}
        </nav>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {general.map((s) => (
            <div key={s.slug} id={s.slug} className="scroll-mt-24 bg-white border border-ink-200 rounded-lg p-7 shadow-sm">
              <div className="w-11 h-11 rounded-md bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-4">{s.icon}</div>
              <h2 className="text-xl font-bold text-ink-900">{s.name}</h2>
              <p className="mt-2 text-ink-600">{s.desc}</p>
              <ul className="mt-4 space-y-2">{s.bullets.map((b) => <li key={b} className="flex gap-2 text-sm text-ink-700"><span className="text-primary-600">✓</span>{b}</li>)}</ul>
              <div className="mt-5"><Button href="/request-demo" variant="ghost" size="sm">Request a Demo →</Button></div>
            </div>
          ))}
        </div>
      </Section>

      {/* Security & compliance — clearly separated (SOL-005) */}
      <Section dark id="security-compliance" className="scroll-mt-24">
        <Eyebrow>Enterprise trust</Eyebrow>
        <h2 className="text-3xl font-bold text-white">Data security &amp; compliance</h2>
        <p className="mt-3 text-primary-100 max-w-2xl">Enterprise-grade controls designed for capital-markets risk, IT and compliance stakeholders.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {security.flatMap((s) => s.bullets).concat(['Secure, encrypted hosting','Least-privilege access','Vulnerability scanning']).map((b) => (
            <div key={b} className="bg-white/5 border border-white/15 rounded-lg p-5 text-primary-100"><span className="text-accent-300 font-bold mr-2">⛨</span>{b}</div>
          ))}
        </div>
      </Section>

      <Section><DemoCTA /></Section>
    </>
  );
}
