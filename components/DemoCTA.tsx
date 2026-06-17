import Button from './Button';
import { Eyebrow } from './Section';

export default function DemoCTA({ market }: { market?: string }) {
  const href = market ? `/request-demo?interest=${encodeURIComponent(market)}` : '/request-demo';
  return (
    <div className="relative panel overflow-hidden px-6 sm:px-12 py-16 text-center">
      <div className="glow-blob animate-pulseGlow" style={{ width:'34rem', height:'22rem', background:'rgba(46,123,246,0.35)', top:'-8rem', left:'50%', transform:'translateX(-50%)' }} />
      <div className="glow-blob" style={{ width:'24rem', height:'16rem', background:'rgba(255,77,87,0.22)', bottom:'-8rem', left:'20%' }} />
      <div className="relative">
        <div className="flex justify-center"><Eyebrow>Ready when you are</Eyebrow></div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl mx-auto"><span className="gradient-text">See InsightsCRM on your own workflows</span></h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">Book a tailored walkthrough with our capital-markets team — live workflows, not slideware.</p>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Button href={href} variant="primary" size="lg">Request a Demo</Button>
          <Button href="/solutions" variant="glass" size="lg">Explore Solutions</Button>
        </div>
      </div>
    </div>
  );
}
