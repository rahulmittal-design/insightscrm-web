import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#05080F',
        ink: { 950:'#05080F', 900:'#0A0F1C', 800:'#0E1424', 700:'#131C30', 600:'#1B2540', 500:'#27324F' },
        brand: { 50:'#EAF2FF',100:'#CFE0FF',300:'#7FB1FF',400:'#4F93FF',500:'#2E7BF6',600:'#1F66E0',700:'#1A52B8' },
        cyan: { 400:'#36C5F0', 500:'#1FB6E8' },
        spark: { 400:'#FF6A6F', 500:'#FF4D57', 600:'#E5252C' },
        violet: { 400:'#8B7BFF', 500:'#6F5CFF' },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Georgia', 'serif'],
      },
      maxWidth: { container:'1200px', reading:'720px' },
      borderRadius: { xl:'16px', '2xl':'22px', '3xl':'30px' },
      keyframes: {
        floaty: { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-10px)' } },
        shimmer: { '0%':{ backgroundPosition:'0% 50%' }, '100%':{ backgroundPosition:'200% 50%' } },
        pulseGlow: { '0%,100%':{ opacity:'0.5' }, '50%':{ opacity:'0.9' } },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
