import Link from 'next/link';
import Section, { Eyebrow } from '@/components/Section';
export default function NotFound() {
  return (
    <Section>
      <div className="text-center py-16">
        <Eyebrow>404</Eyebrow>
        <h1 className="text-4xl font-bold text-ink-900">Page not found</h1>
        <p className="mt-3 text-ink-600">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-6 flex justify-center gap-4"><Link href="/" className="btn btn-md btn-primary">Back home</Link><Link href="/resources" className="btn btn-md btn-outline">Browse resources</Link></div>
      </div>
    </Section>
  );
}
