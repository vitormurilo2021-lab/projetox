import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { Problem } from '@/components/landing/problem';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Offer } from '@/components/landing/offer';
import { Transformation } from '@/components/landing/transformation';
import { Guarantee } from '@/components/landing/guarantee';
import { Closing } from '@/components/landing/closing';
import { EconomyPreview } from '@/components/landing/economy-preview';
import { Faq } from '@/components/landing/faq';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <EconomyPreview />
        <HowItWorks />
        <Offer />
        <Transformation />
        <Faq />
        <Guarantee />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
