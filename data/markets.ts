export type Market = {
  slug: string; name: string; shortName: string; headline: string; subhead: string;
  painPoints: string[]; helps: string[]; workflows: string[];
  capabilities: { title: string; desc: string }[]; outcomes: string[];
};

export const MARKETS: Market[] = [
  {
    slug: 'banking-ma-advisory', name: 'Banking, M&A & Advisory', shortName: 'Banking & M&A',
    headline: 'Close more deals with data-driven engagement',
    subhead: 'Custom workflows, focused prospecting and confidentiality controls built for advisory teams.',
    painPoints: ['Deal context scattered across inboxes and spreadsheets', 'No single view of client and counterparty relationships', 'Compliance and information-barrier risk on sensitive mandates'],
    helps: ['Centralize deal flow, contacts and interactions in one secure system', 'Surface the strongest relationship paths to any target', 'Enforce confidentiality with role-based access and information barriers'],
    workflows: ['Pipeline & mandate tracking', 'Targeted prospecting lists', 'Relationship mapping', 'Deal team collaboration'],
    capabilities: [
      { title: 'Relationship Intelligence', desc: 'See the full strength of every counterparty relationship.' },
      { title: 'Prospecting Lifecycle', desc: 'From target list to won mandate, managed end to end.' },
      { title: 'Data Security & Compliance', desc: 'Information barriers and auditable access controls.' },
    ],
    outcomes: ['Faster origination', 'Fewer missed relationships', 'Defensible compliance posture'],
  },
  {
    slug: 'research-sales-trading', name: 'Research, Sales & Trading', shortName: 'Sales & Trading',
    headline: 'Coverage and distribution that desks actually use',
    subhead: 'Support institutional client coverage, research distribution, trading workflows, roadshows and account planning.',
    painPoints: ['Readership and interaction data disconnected from coverage', 'Manual roadshow and corporate-access logistics', 'No clear view of account value across desks'],
    helps: ['Unify coverage, readership intelligence and client interactions', 'Plan and track roadshows and corporate access in one place', 'Align account planning with measurable client value'],
    workflows: ['Client coverage', 'Research distribution', 'Roadshow management', 'Account planning & budgeting'],
    capabilities: [
      { title: 'Readership Intelligence', desc: 'Connect content distribution to client engagement.' },
      { title: 'Roadshow Management', desc: 'Plan, schedule and track investor access.' },
      { title: 'Account Planning', desc: 'Budget and prioritize coverage by client value.' },
    ],
    outcomes: ['Higher-value client coverage', 'Streamlined roadshows', 'Data-driven account planning'],
  },
  {
    slug: 'institutional-asset-management', name: 'Institutional Asset Management', shortName: 'Asset Management',
    headline: 'Grow AUM with sharper investor engagement',
    subhead: 'Support AUM growth, investor engagement, relationship tracking and institutional prospecting.',
    painPoints: ['Fragmented view of investor relationships and mandates', 'Hard to track engagement across a long sales cycle', 'Prospecting effort not tied to pipeline'],
    helps: ['Track every investor relationship and mandate centrally', 'Map engagement across long institutional cycles', 'Connect prospecting activity to AUM pipeline'],
    workflows: ['Investor relationship tracking', 'Mandate pipeline', 'Institutional prospecting', 'Engagement reporting'],
    capabilities: [
      { title: 'Customer Intelligence', desc: 'A single trusted view of every investor.' },
      { title: 'Prospecting Lifecycle', desc: 'Manage institutional prospecting to mandate.' },
      { title: 'Dashboards', desc: 'Track AUM pipeline and engagement at a glance.' },
    ],
    outcomes: ['Stronger investor relationships', 'Clearer mandate pipeline', 'Accountable prospecting'],
  },
  {
    slug: 'private-equity-venture-capital', name: 'Private Equity / Venture Capital', shortName: 'Private Equity',
    headline: 'Source, diligence and track deals in one place',
    subhead: 'Support deal sourcing, due diligence, portfolio tracking and fundraising workflows.',
    painPoints: ['Deal sourcing relationships live in personal networks', 'Diligence and portfolio data siloed', 'Fundraising engagement hard to coordinate'],
    helps: ['Centralize sourcing relationships and proprietary deal flow', 'Track diligence and portfolio engagement', 'Coordinate LP and fundraising outreach'],
    workflows: ['Deal sourcing', 'Due diligence tracking', 'Portfolio engagement', 'Fundraising / LP relations'],
    capabilities: [
      { title: 'Relationship Intelligence', desc: 'Unlock the firm\'s collective network.' },
      { title: 'Prospecting Lifecycle', desc: 'Manage proprietary sourcing pipelines.' },
      { title: 'Account Planning', desc: 'Coordinate LP and portfolio engagement.' },
    ],
    outcomes: ['More proprietary deal flow', 'Coordinated diligence', 'Stronger LP relationships'],
  },
  {
    slug: 'private-wealth-management', name: 'Private Wealth Management', shortName: 'Private Wealth',
    headline: 'Advisor productivity, powered by client intelligence',
    subhead: 'Support advisor productivity, client intelligence, personalized engagement and onboarding.',
    painPoints: ['Advisors lack a complete client picture', 'Onboarding is manual and slow', 'Engagement is hard to personalize at scale'],
    helps: ['Give advisors a complete, trusted client view', 'Streamline onboarding workflows', 'Personalize engagement with relationship intelligence'],
    workflows: ['Client onboarding', 'Advisor productivity', 'Personalized engagement', 'Household & relationship tracking'],
    capabilities: [
      { title: 'Customer Intelligence', desc: 'A full picture of every client household.' },
      { title: 'Customizable Workflows', desc: 'Onboarding and servicing tailored to your firm.' },
      { title: 'Native Mobile App', desc: 'Advisor tools on the move.' },
    ],
    outcomes: ['More productive advisors', 'Faster onboarding', 'Personalized client engagement'],
  },
];

export const getMarket = (slug: string) => MARKETS.find((m) => m.slug === slug);
