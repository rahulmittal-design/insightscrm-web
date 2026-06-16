import Link from 'next/link';
import { clsx } from '@/lib/clsx';

type Variant = 'primary' | 'accent' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export default function Button({
  href, children, variant = 'primary', size = 'md', className,
}: { href: string; children: React.ReactNode; variant?: Variant; size?: Size; className?: string }) {
  return (
    <Link href={href} className={clsx('btn', `btn-${size}`, `btn-${variant}`, className)}>
      {children}
    </Link>
  );
}
