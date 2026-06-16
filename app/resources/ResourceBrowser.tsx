'use client';
import { useMemo, useState } from 'react';
import Section, { Eyebrow } from '@/components/Section';
import { ArticleCard } from '@/components/Card';
import { ARTICLES, CATEGORIES } from '@/data/articles';

export default function ResourceBrowser() {
  const [cat, setCat] = useState<string>('All');
  const [q, setQ] = useState('');
  const filtered = useMemo(() => ARTICLES.filter((a) =>
    (cat === 'All' || a.category === cat) &&
    (q === '' || a.title.toLowerCase().includes(q.toLowerCase()) || a.excerpt.toLowerCase().includes(q.toLowerCase()))
  ), [cat, q]);

  return (
    <Section muted>
      <Eyebrow>Resources</Eyebrow>
      <h1 className="text-4xl font-bold text-ink-900">Insights &amp; thought leadership</h1>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
        <label className="sr-only" htmlFor="res-search">Search resources</label>
        <input id="res-search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…"
          className="w-full sm:max-w-xs px-4 py-2.5 border border-ink-300 rounded-md text-sm focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20" />
        <div className="flex flex-wrap gap-2">
          {['All', ...CATEGORIES].map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={`text-xs font-medium rounded-full px-3 py-1.5 border ${cat === c ? 'bg-primary-600 text-white border-primary-600' : 'bg-white text-ink-700 border-ink-200 hover:border-primary-400'}`}>{c}</button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => <ArticleCard key={a.slug} category={a.category} title={a.title} date={`${a.date} · ${a.readMins} min read`} href={`/resources/${a.slug}`} hue={a.hue} />)}
        </div>
      ) : (
        <div className="mt-10 bg-white border border-ink-200 rounded-lg p-10 text-center">
          <p className="text-ink-700 font-medium">No articles match your search.</p>
          <p className="mt-2 text-ink-500 text-sm">Try a different keyword, or <a href="/request-demo" className="text-primary-700 font-semibold">request a demo</a> instead.</p>
        </div>
      )}
    </Section>
  );
}
