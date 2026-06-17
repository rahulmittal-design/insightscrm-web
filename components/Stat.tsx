'use client';
import { useEffect, useRef, useState } from 'react';

export default function Stat({ value, prefix = '', suffix = '', label, accent = 'blue' }:
  { value: number; prefix?: string; suffix?: string; label: string; accent?: 'blue' | 'red' | 'cyan' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        io.disconnect();
        const dur = 1100, start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const grad = accent === 'red' ? 'from-spark-400 to-spark-600' : accent === 'cyan' ? 'from-cyan-400 to-brand-500' : 'from-brand-300 to-cyan-400';
  return (
    <div ref={ref} className="card card-pad">
      <div className={`text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-br ${grad} bg-clip-text text-transparent`}>
        {prefix}{n}{suffix}
      </div>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
