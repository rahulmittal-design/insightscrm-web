import type { Metadata, Viewport } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/site';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-source-serif', display: 'swap' });

export const viewport: Viewport = { themeColor: '#05080F' };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: { default: `${SITE.name} — CRM for Capital Markets`, template: `%s — ${SITE.name}` },
  description: SITE.description,
  openGraph: { type: 'website', siteName: SITE.name, title: `${SITE.name} — CRM for Capital Markets`, description: SITE.description, url: SITE.domain },
  twitter: { card: 'summary_large_image', title: `${SITE.name} — CRM for Capital Markets`, description: SITE.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = { '@context':'https://schema.org','@type':'Organization', name:SITE.name, url:SITE.domain, description:SITE.description, brand:SITE.brand };
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
