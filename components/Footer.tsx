import Link from 'next/link';
import Logo from './Logo';
import { SITE } from '@/lib/site';
import { MARKETS } from '@/data/markets';
import { SOLUTIONS } from '@/data/solutions';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-8 border-t border-white/10">
      <div className="container-x py-16 grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-4 text-sm max-w-xs text-muted">{SITE.tagline} Powered by {SITE.brand} domain expertise.</p>
        </div>
        <FooterCol title="Markets" links={MARKETS.slice(0,5).map((m) => ({ label:m.shortName, href:`/markets/${m.slug}` }))} />
        <FooterCol title="Solutions" links={SOLUTIONS.slice(0,6).map((s) => ({ label:s.name, href:`/solutions#${s.slug}` }))} />
        <FooterCol title="Company" links={[
          { label:'Our Story', href:'/about' }, { label:'Resources', href:'/resources' },
          { label:'Contact', href:'/contact' }, { label:'Request a Demo', href:'/request-demo' },
          { label:'Privacy Policy', href:'/privacy-policy' }, { label:'Cookie Policy', href:'/cookie-policy' },
        ]} />
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col sm:flex-row gap-3 justify-between text-xs text-dim">
          <span>© {year} {SITE.brand} · {SITE.name}. All rights reserved.</span>
          <span className="flex gap-4"><Link href="/privacy-policy" className="hover:text-white">Privacy</Link><Link href="/cookie-policy" className="hover:text-white">Cookies</Link></span>
        </div>
      </div>
    </footer>
  );
}
function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-xs uppercase tracking-[0.14em] text-white font-semibold mb-3">{title}</h2>
      <ul className="space-y-1.5">{links.map((l) => <li key={l.href + l.label}><Link href={l.href} className="text-sm text-muted hover:text-white transition-colors">{l.label}</Link></li>)}</ul>
    </div>
  );
}
