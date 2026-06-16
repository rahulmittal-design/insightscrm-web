import type { Metadata } from 'next';
import ResourceBrowser from './ResourceBrowser';

export const metadata: Metadata = { title: 'Resources', description: 'Blogs and thought leadership on capital-markets CRM, customer intelligence, integrations, analytics and CRM selection.' };

export default function ResourcesPage() { return <ResourceBrowser />; }
