export default function Section({
  children, className = '', muted = false, dark = false, id,
}: { children: React.ReactNode; className?: string; muted?: boolean; dark?: boolean; id?: string }) {
  const bg = dark ? 'bg-primary-900 text-white' : muted ? 'bg-ink-50' : 'bg-white';
  return (
    <section id={id} className={`${bg} py-16 sm:py-20 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-2">{children}</p>;
}
