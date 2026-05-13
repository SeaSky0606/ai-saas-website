import { Hero, Features, Stats, Testimonials, CTASection } from '@/components/sections';

export function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTASection />
    </div>
  );
}
