export default function Section({ children, className='', id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`relative py-20 sm:py-28 ${className}`}><div className="container-x">{children}</div></section>;
}
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}
