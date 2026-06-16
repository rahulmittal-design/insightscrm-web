import Button from './Button';
import { Eyebrow } from './Section';

export default function DemoCTA({ market }: { market?: string }) {
  const href = market ? `/request-demo?interest=${encodeURIComponent(market)}` : '/request-demo';
  return (
    <div className="bg-primary-900 rounded-xl px-8 py-12 text-center">
      <Eyebrow>Ready when you are</Eyebrow>
      <h2 className="text-3xl font-bold text-white max-w-2xl mx-auto">See InsightsCRM on your own workflows</h2>
      <p className="mt-3 text-primary-200 max-w-xl mx-auto">Book a tailored walkthrough with our capital-markets team.</p>
      <div className="mt-7 flex justify-center gap-4 flex-wrap">
        <Button href={href} variant="accent" size="lg">Request a Demo</Button>
        <Button href="/solutions" variant="outline" size="lg" className="!bg-transparent !text-white !border-white/40 hover:!bg-white/10">Explore Solutions</Button>
      </div>
    </div>
  );
}
