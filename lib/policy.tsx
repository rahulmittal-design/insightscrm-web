import Section, { Eyebrow } from '@/components/Section';

export function PolicyPage({ kind }: { kind: 'privacy' | 'cookie' }) {
  const title = kind === 'privacy' ? 'Privacy Policy' : 'Cookie Policy';
  return (
    <Section>
      <div className="max-w-reading mx-auto">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">{title}</h1>
        <p className="mt-3 text-sm text-dim">Last updated: June 2026 · Placeholder — to be reviewed and approved by Legal/Compliance (POL-002).</p>
        <div className="mt-8 space-y-5 text-muted leading-relaxed">
          {kind === 'privacy' ? (
            <>
              <p>This policy describes the data InsightsCRM collects through forms, analytics and integrations, how it is used, and the rights available to you (POL-004).</p>
              <h2 className="text-xl font-bold text-white">Data we collect</h2>
              <p>Form submissions (name, business email, company, interest), analytics events subject to consent, and technical data such as referrer and UTM parameters.</p>
              <h2 className="text-xl font-bold text-white">How we use it</h2>
              <p>To respond to demo and contact requests, route inquiries to the right team, and improve the website. We do not sell personal data.</p>
              <h2 className="text-xl font-bold text-white">Your rights</h2>
              <p>Contact <a href="mailto:legal@insightscrm.com" className="text-brand-300">legal@insightscrm.com</a> to access, correct or delete your data.</p>
            </>
          ) : (
            <>
              <p>This policy explains the cookie categories used on this site and how to manage them. Non-essential cookies load only after consent where required (PRIV-003, PRIV-007).</p>
              <h2 className="text-xl font-bold text-white">Cookie categories</h2>
              <p><strong className="text-white">Essential</strong> — required for the site to function. <strong className="text-white">Analytics</strong> — measure usage (consent-gated). <strong className="text-white">Marketing</strong> — campaign measurement (consent-gated).</p>
              <h2 className="text-xl font-bold text-white">Managing cookies</h2>
              <p>You can accept, reject or manage non-essential cookies via the cookie banner at any time.</p>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
