'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { NAV, SITE } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? 'backdrop-blur-xl bg-[#070B14]/80 border-b border-white/10' : 'border-b border-transparent'}`}>
      <div className="container-x flex items-center gap-6 h-16">
        <Link href="/" aria-label={`${SITE.name} home`}><Logo /></Link>
        <nav className="hidden lg:flex items-center gap-1 ml-4" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-medium text-muted hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-colors">{n.label}</Link>
          ))}
        </nav>
        <div className="ml-auto hidden lg:flex items-center gap-3">
          <a href={SITE.loginUrl} className="text-sm font-medium text-muted hover:text-white px-3 py-2">Login</a>
          <Link href="/request-demo" className="btn btn-sm btn-primary">Request Demo</Link>
        </div>
        <button className="ml-auto lg:hidden p-2 text-white" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? 'M6 6l12 12M6 18L18 6' : 'M4 7h16M4 12h16M4 17h16'} /></svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-white/10 backdrop-blur-xl bg-[#070B14]/95 px-5 py-4 flex flex-col gap-1" aria-label="Mobile">
          {NAV.map((n) => <Link key={n.href} href={n.href} className="py-2.5 text-muted hover:text-white font-medium" onClick={() => setOpen(false)}>{n.label}</Link>)}
          <a href={SITE.loginUrl} className="py-2.5 text-muted font-medium">Login</a>
          <Link href="/request-demo" className="btn btn-md btn-primary mt-2" onClick={() => setOpen(false)}>Request Demo</Link>
        </nav>
      )}
    </header>
  );
}
