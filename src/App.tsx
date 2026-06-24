import { useState } from 'react';
import { Cursor } from './components/Cursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemStatement } from './components/ProblemStatement';
import { ProductShowcase } from './components/ProductShowcase';
import { Engines } from './components/Engines';
import { AriaFeature } from './components/AriaFeature';
import { CompetitorComparison } from './components/CompetitorComparison';
import { ComingSoon } from './components/ComingSoon';
import { Metrics } from './components/Metrics';
import { Pricing } from './components/Pricing';
import { SocialChannels } from './components/SocialChannels';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr'>('en');

  return (
    <>
      <Cursor />
      <Navigation lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <ProblemStatement lang={lang} />
        <ProductShowcase lang={lang} />
        <Engines lang={lang} />
        <AriaFeature lang={lang} />
        <CompetitorComparison lang={lang} />
        <ComingSoon lang={lang} />
        <Metrics lang={lang} />
        <Pricing lang={lang} />
        <SocialChannels lang={lang} />
        <FAQ lang={lang} />
        <FinalCTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}

