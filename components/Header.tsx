'use client';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { NAV, SITE } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-ink-200">
      <div className="container-x flex items-center gap-6 h-16">
        <Link href="/" aria-label={`${SITE.name} home`}><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-6 ml-4" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-ink-700 hover:text-primary-700 py-2 border-b-2 border-transparent hover:border-accent-600 transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden lg:flex items-center gap-4">
          <a href={SITE.loginUrl} className="text-sm font-medium text-ink-700 hover:text-primary-700">Login</a>
          <Link href="/request-demo" className="btn btn-sm btn-accent">Request Demo</Link>
        </div>
        <button className="ml-auto lg:hidden p-2 text-ink-700" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-ink-200 bg-white px-6 py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="py-2 text-ink-700 font-medium" onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <a href={SITE.loginUrl} className="py-2 text-ink-700 font-medium">Login</a>
          <Link href="/request-demo" className="btn btn-md btn-accent mt-2" onClick={() => setOpen(false)}>Request Demo</Link>
        </nav>
      )}
    </header>
  );
}
