export type Solution = { slug: string; name: string; icon: string; desc: string; bullets: string[]; security?: boolean };

export const SOLUTIONS: Solution[] = [
  { slug: 'knowledge-management', name: 'Knowledge Management', icon: '◇', desc: 'Capture and surface institutional knowledge across teams.', bullets: ['Centralized client and deal knowledge', 'Searchable interaction history', 'No more information silos'] },
  { slug: 'customer-intelligence', name: 'Customer Intelligence', icon: '◈', desc: 'A single, trusted view of every client.', bullets: ['Unified client profiles', '360° interaction timeline', 'Relationship value scoring'] },
  { slug: 'workflows', name: 'Customizable Workflows', icon: '⚙', desc: 'Domain-specific workflows configured to your desk.', bullets: ['Capital-markets templates', 'Configurable stages & fields', 'No heavy custom development'] },
  { slug: 'relationship-intelligence', name: 'Relationship Intelligence', icon: '◆', desc: 'See the full strength of every relationship.', bullets: ['Firm-wide relationship graph', 'Warm-intro pathways', 'Coverage gap detection'] },
  { slug: 'prospecting-lifecycle', name: 'Prospecting Lifecycle', icon: '⛃', desc: 'Manage prospecting from target list to won mandate.', bullets: ['Targeted prospect lists', 'Pipeline stages', 'Conversion analytics'] },
  { slug: 'integrations', name: 'Third-Party Integrations', icon: '⇄', desc: 'Connect the tools your teams already use.', bullets: ['Email & calendar sync', 'Market data & content feeds', 'Open API'] },
  { slug: 'mobile-app', name: 'Native Mobile Application', icon: '▢', desc: 'Full CRM power on iOS and Android.', bullets: ['On-the-go client access', 'Log interactions instantly', 'Offline-friendly'] },
  { slug: 'roadshow-management', name: 'Roadshow Management', icon: '⛟', desc: 'Plan and track investor roadshows and corporate access.', bullets: ['Scheduling & logistics', 'Investor targeting', 'Feedback capture'] },
  { slug: 'account-planning', name: 'Account Planning & Budgeting', icon: '▥', desc: 'Prioritize coverage by client value.', bullets: ['Account plans', 'Revenue budgeting', 'Coverage allocation'] },
  { slug: 'content-distribution', name: 'Content Distribution & Readership', icon: '◧', desc: 'Distribute research and measure engagement.', bullets: ['Entitled distribution', 'Readership analytics', 'Engagement-led coverage'] },
  { slug: 'security-compliance', name: 'Data Security & Compliance', icon: '⛨', desc: 'Enterprise-grade controls and auditability.', bullets: ['SSO / MFA', 'Information barriers', 'Audit logs & role-based access'], security: true },
  { slug: 'conference-management', name: 'Conference Management', icon: '◫', desc: 'Run investor conferences end to end.', bullets: ['Event scheduling', 'Attendee management', 'Meeting matching'] },
  { slug: 'dashboards', name: 'Dashboarding', icon: '▤', desc: 'Real-time visibility into pipeline and engagement.', bullets: ['Configurable dashboards', 'Team & desk views', 'Exportable reports'] },
  { slug: 'support-desk', name: 'User Support Desk', icon: '☏', desc: 'Responsive support to drive adoption.', bullets: ['In-app support', 'Onboarding assistance', 'Fast turnaround'] },
];

export const getSolution = (slug: string) => SOLUTIONS.find((s) => s.slug === slug);
