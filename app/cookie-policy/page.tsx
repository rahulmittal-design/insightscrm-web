import type { Metadata } from 'next';
import { PolicyPage } from '@/lib/policy';
export const metadata: Metadata = { title: 'Cookie Policy', description: 'Cookie categories used on the InsightsCRM website.' };
export default function Page() { return <PolicyPage kind="cookie" />; }
