export default function Logo({ className = '' }: { className?: string }) {
  const blue = '#4F93FF';
  const red = '#FF4D57';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="34" height="34" viewBox="0 0 100 100" aria-hidden="true">
        <g fill="none" strokeWidth="9">
          <path d="M30 8 H18 V20" stroke={red} /><path d="M70 8 H82 V20" stroke={red} />
          <path d="M8 30 V18 H20" stroke={blue} /><path d="M92 30 V18 H80" stroke={blue} />
          <path d="M8 70 V82 H20" stroke={blue} /><path d="M92 70 V82 H80" stroke={blue} />
          <path d="M30 92 H18 V80" stroke={red} /><path d="M70 92 H82 V80" stroke={red} />
          <path d="M26 26 L44 44" stroke={red} /><path d="M74 26 L56 44" stroke={red} />
          <path d="M26 74 L44 56" stroke={blue} /><path d="M74 74 L56 56" stroke={red} />
        </g>
        <circle cx="50" cy="46" r="8" fill="none" stroke={blue} strokeWidth="5" />
        <path d="M40 64 Q50 54 60 64" fill="none" stroke={blue} strokeWidth="4" />
      </svg>
      <span className="leading-none">
        <span className="block font-bold text-[0.95rem] text-white tracking-wide">ANALEC</span>
        <span className="block text-[0.6rem] tracking-[0.22em] font-medium text-brand-300">INSIGHTS CRM</span>
      </span>
    </span>
  );
}
