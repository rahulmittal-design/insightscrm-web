'use client';
import { useMemo, useState } from 'react';
import Section, { Eyebrow } from '@/components/Section';
import { ArticleCard } from '@/components/Card';
import { ARTICLES, CATEGORIES } from '@/data/articles';

export default function ResourceBrowser() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const filtered = useMemo(() => ARTICLES.filter((a) =>
    (cat === 'All' || a.category === cat) &&
    (q === '' || a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase()))
  ), [cat, q]);
  return (
    <Section>
      <Eyebrow>Resources</Eyebrow>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight"><span className="gradient-text">Insights &amp; thought leadership</span></h1>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" aria-label="Search resources"
          className="w-full sm:max-w-xs px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-sm text-white placeholder:text-dim focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30" />
        <div className="flex flex-wrap gap-2">
          {['All', ...CATEGORIES].map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`text-xs font-medium rounded-full px-3.5 py-1.5 border transition-colors ${cat === c ? 'bg-brand-500 text-white border-brand-500' : 'text-muted border-white/10 hover:border-white/25 hover:text-white'}`}>{c}</button>
          ))}
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => <ArticleCard key={a.slug} category={a.category} title={a.title} date={`${a.date} · ${a.readMins} min read`} href={`/resources/${a.slug}`} hue={a.hue} />)}
        </div>
      ) : (
        <div className="mt-10 card card-pad text-center py-14">
          <p className="text-white font-medium">No articles match your search.</p>
          <p className="mt-2 text-muted text-sm">Try a different keyword, or <a href="/request-demo" className="text-brand-300 font-semibold">request a demo</a> instead.</p>
        </div>
      )}
    </Section>
  );
}
