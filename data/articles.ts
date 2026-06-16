export type Article = { slug: string; title: string; category: string; excerpt: string; date: string; readMins: number; hue?: 'blue' | 'red'; kind: 'blog' | 'thought-leadership' };

export const ARTICLES: Article[] = [
  { slug: 'what-relationship-intelligence-means', title: 'What relationship intelligence really means in capital markets', category: 'Customer Intelligence', excerpt: 'Beyond a contact list: how a relationship graph changes coverage, origination and risk.', date: 'June 2026', readMins: 6, kind: 'thought-leadership' },
  { slug: 'specialized-vs-generic-crm', title: 'Specialized vs. generic CRM: a buyer\'s framework', category: 'CRM Selection', excerpt: 'A practical scorecard for evaluating industry-specific CRM against horizontal platforms.', date: 'May 2026', readMins: 8, hue: 'red', kind: 'thought-leadership' },
  { slug: 'coverage-workflows-institutional-desks', title: 'Coverage workflows that institutional desks actually use', category: 'Sales & Trading', excerpt: 'Designing CRM workflows around how research, sales and trading really operate.', date: 'May 2026', readMins: 5, kind: 'blog' },
  { slug: 'crm-integrations-capital-markets', title: 'CRM integrations that matter in capital markets', category: 'Integrations', excerpt: 'Email, market data and content feeds — the integrations that drive adoption.', date: 'April 2026', readMins: 5, kind: 'blog' },
  { slug: 'crm-analytics-for-coverage', title: 'Turning CRM analytics into better coverage decisions', category: 'CRM Analytics', excerpt: 'From dashboards to decisions: making engagement data actionable.', date: 'April 2026', readMins: 7, hue: 'red', kind: 'blog' },
  { slug: 'eliminating-information-silos', title: 'Eliminating information silos across the front office', category: 'Customer Intelligence', excerpt: 'Why silos persist and how a domain CRM finally breaks them down.', date: 'March 2026', readMins: 6, kind: 'thought-leadership' },
];

export const CATEGORIES = Array.from(new Set(ARTICLES.map((a) => a.category)));
export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
