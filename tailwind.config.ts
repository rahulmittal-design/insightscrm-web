import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:'#EFF5FC',100:'#DCEAF9',200:'#B4D2F1',300:'#7FB1E6',400:'#4A90D9',
          500:'#1670CA',600:'#0B5CAB',700:'#0A4C8C',800:'#083E73',900:'#062E57',
        },
        accent: { 50:'#FDEEEF',100:'#FBDADB',300:'#F08A8E',500:'#E51E25',600:'#D11A20',700:'#B5141A' },
        ink: {
          50:'#F8FAFC',100:'#F1F4F8',200:'#E2E7EE',300:'#C2CAD6',400:'#8A94A6',
          500:'#5A6678',600:'#3D4A5E',700:'#2A3547',900:'#0E1726',
        },
        success:'#1E874B', warning:'#B7791F', error:'#C8201A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
      borderRadius: { sm:'6px', md:'10px', lg:'16px', xl:'24px' },
      maxWidth: { container:'1200px', reading:'760px' },
      boxShadow: {
        sm:'0 1px 2px rgba(14,23,38,.06),0 1px 3px rgba(14,23,38,.08)',
        md:'0 4px 12px rgba(14,23,38,.08),0 2px 4px rgba(14,23,38,.06)',
        lg:'0 12px 32px rgba(14,23,38,.12),0 4px 8px rgba(14,23,38,.06)',
      },
    },
  },
  plugins: [],
};
export default config;
