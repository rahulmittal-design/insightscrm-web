import Link from 'next/link';

export function FeatureCard({ icon, title, children, href }: { icon?: string; title: string; children: React.ReactNode; href?: string }) {
  const inner = (
    <div className="card-pad h-full flex flex-col">
      {icon && <div className="icon-chip mb-5">{icon}</div>}
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed flex-1">{children}</p>
      {href && <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 group-hover:gap-2.5 transition-all">Explore <span aria-hidden>→</span></span>}
    </div>
  );
  return href
    ? <Link href={href} className="card group block h-full">{inner}</Link>
    : <div className="card h-full">{inner}</div>;
}

export function ArticleCard({ category, title, date, href, hue='blue' }: { category: string; title: string; date: string; href: string; hue?: 'blue'|'red' }) {
  const grad = hue === 'red' ? 'from-spark-600 via-spark-500 to-brand-600' : 'from-brand-600 via-brand-500 to-cyan-500';
  return (
    <Link href={href} className="card group block overflow-hidden h-full">
      <div className={`h-32 bg-gradient-to-br ${grad} relative`}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage:'radial-gradient(circle at 30% 30%, rgba(255,255,255,.5), transparent 45%)' }} />
      </div>
      <div className="card-pad">
        <span className="pill"><span className="pill-dot" />{category}</span>
        <h3 className="mt-3 text-base font-semibold text-white leading-snug group-hover:text-brand-100 transition-colors">{title}</h3>
        <span className="mt-2 block text-xs text-dim">{date}</span>
      </div>
    </Link>
  );
}
