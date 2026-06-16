import Link from 'next/link';

export function FeatureCard({ icon, title, children, href }: { icon?: string; title: string; children: React.ReactNode; href?: string }) {
  const inner = (
    <>
      {icon && <div className="w-11 h-11 rounded-md bg-primary-50 text-primary-600 flex items-center justify-center text-xl mb-4">{icon}</div>}
      <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm text-ink-500">{children}</p>
      {href && <span className="mt-4 inline-flex text-sm font-semibold text-primary-700">Explore →</span>}
    </>
  );
  const cls = 'block bg-white border border-ink-200 rounded-lg p-6 shadow-sm transition hover:shadow-lg hover:-translate-y-0.5';
  return href ? <Link href={href} className={cls}>{inner}</Link> : <div className={cls}>{inner}</div>;
}

export function MetricStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-ink-200 rounded-lg p-6 shadow-sm">
      <div className="text-4xl font-bold tracking-tight text-accent-600">{value}</div>
      <p className="mt-1 text-sm text-ink-600">{label}</p>
    </div>
  );
}

export function ArticleCard({ category, title, date, href, hue = 'blue' }: { category: string; title: string; date: string; href: string; hue?: 'blue' | 'red' }) {
  const grad = hue === 'red' ? 'from-accent-700 to-accent-500' : 'from-primary-700 to-primary-500';
  return (
    <Link href={href} className="block bg-white border border-ink-200 rounded-lg overflow-hidden shadow-sm transition hover:shadow-lg">
      <div className={`h-28 bg-gradient-to-br ${grad}`} />
      <div className="p-5">
        <span className="inline-block bg-primary-50 text-primary-700 text-[0.7rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">{category}</span>
        <h3 className="mt-2.5 text-base font-semibold text-ink-900 leading-snug">{title}</h3>
        <span className="mt-1.5 block text-xs text-ink-400">{date}</span>
      </div>
    </Link>
  );
}
