import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'InsightsCRM', short_name: 'InsightsCRM',
    description: 'The specialized CRM for capital-markets professionals.',
    start_url: '/', display: 'standalone', background_color: '#062E57', theme_color: '#0B5CAB',
    icons: [{ src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }],
  };
}
