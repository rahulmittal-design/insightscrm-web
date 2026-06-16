export const SITE = {
  name: 'InsightsCRM',
  brand: 'ANALEC',
  domain: 'https://www.insightscrm.com',
  tagline: 'The specialized CRM for capital-markets professionals.',
  loginUrl: process.env.NEXT_PUBLIC_LOGIN_URL || 'https://app.insightscrm.com',
  description:
    'InsightsCRM is a specialized CRM for capital markets — eliminating information silos, enabling intuitive workflows, and building profitable client relationships. Powered by ANALEC domain expertise.',
};

export const NAV = [
  { label: 'Markets', href: '/markets' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
