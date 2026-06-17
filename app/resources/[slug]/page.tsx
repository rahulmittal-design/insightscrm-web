import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section, { Eyebrow } from '@/components/Section';
import Reveal from '@/components/Reveal';
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
  const schema = { '@context':'https://schema.org','@type':'Article', headline:a.title, description:a.excerpt, datePublished:a.date };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Section>
        <div className="max-w-reading mx-auto">
          <Eyebrow>{a.category}</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.08] text-white">{a.title}</h1>
          <p className="mt-4 text-sm text-dim">{a.date} · {a.readMins} min read</p>
          <div className="mt-8 space-y-5 text-muted leading-relaxed">
            <p className="text-lg text-white/90">{a.excerpt}</p>
            <p>This is placeholder body content for the article template. Migrated articles will preserve their original headings, images, links, tables and formatting (FRD ART-001, MIG-003). The CMS supplies rich text, embedded media and a demo CTA module.</p>
            <h2 className="text-2xl font-bold text-white pt-2">Why it matters</h2>
            <p>Each article supports editable SEO title, meta description, canonical URL and Open Graph image (ART-002), plus author, publish and updated dates (ART-003) and structured data (ART-004).</p>
          </div>
        </div>
      </Section>
      <Section className="!pt-0">
        <h2 className="text-2xl font-bold tracking-tight mb-6">Related articles</h2>
        <div className="grid gap-4 sm:grid-cols-3">{related.map((r) => <ArticleCard key={r.slug} category={r.category} title={r.title} date={r.date} href={`/resources/${r.slug}`} hue={r.hue} />)}</div>
      </Section>
      <Section><Reveal><DemoCTA /></Reveal></Section>
    </>
  );
}
