import Link from 'next/link';
import Section, { Eyebrow } from '@/components/Section';
export default function NotFound() {
  return (
    <Section>
      <div className="text-center py-16">
        <Eyebrow>404</Eyebrow>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight"><span className="gradient-text">Page not found</span></h1>
        <p className="mt-4 text-muted">The page you're looking for doesn't exist or has moved.</p>
        <div className="mt-7 flex justify-center gap-3"><Link href="/" className="btn btn-md btn-primary">Back home</Link><Link href="/resources" className="btn btn-md btn-glass">Browse resources</Link></div>
      </div>
    </Section>
  );
}
