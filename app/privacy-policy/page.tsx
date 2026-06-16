import type { Metadata } from 'next';
import { PolicyPage } from '@/lib/policy';
export const metadata: Metadata = { title: 'Privacy Policy', description: 'How InsightsCRM collects and uses data.' };
export default function Page() { return <PolicyPage kind="privacy" />; }
