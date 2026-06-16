import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section, { Eyebrow } from '@/components/Section';
import { ArticleCard } from '@/components/Card';
import DemoCTA from '@/components/DemoCTA';
import { ARTICLES, getArticle } from '@/data/articles';

export function generateStaticParams() { return ARTICLES.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug); if (!a) return {};
  return { title: a.title, description: a.excerpt, openGraph: { type: 'article', title: a.title, description: a.excerpt } };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug); if (!a) notFound();
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: a.title, description: a.excerpt, datePublished: a.date };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Section>
        <div className="max-w-reading mx-auto">
          <Eyebrow>{a.category}</Eyebrow>
          <h1 className="font-serif text-4xl font-semibold text-ink-900 leading-tight">{a.title}</h1>
          <p className="mt-3 text-sm text-ink-400">{a.date} · {a.readMins} min read</p>
          <div className="mt-8 prose-content text-ink-700 leading-relaxed space-y-5">
            <p className="text-lg text-ink-600">{a.excerpt}</p>
            <p>This is placeholder body content for the article template. Migrated articles will preserve their original headings, images, links, tables and formatting (FRD ART-001, MIG-003). The CMS supplies rich text, embedded media and a demo CTA module.</p>
            <h2 className="text-2xl font-bold text-ink-900">Why it matters</h2>
            <p>Each article supports editable SEO title, meta description, canonical URL and Open Graph image (ART-002), plus author, publish and updated dates (ART-003) and structured data (ART-004).</p>
          </div>
        </div>
      </Section>
      <Section muted>
        <h2 className="text-2xl font-bold text-ink-900 mb-6">Related articles</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {related.map((r) => <ArticleCard key={r.slug} category={r.category} title={r.title} date={r.date} href={`/resources/${r.slug}`} hue={r.hue} />)}
        </div>
      </Section>
      <Section><DemoCTA /></Section>
    </>
  );
}
