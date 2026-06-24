import { HeartCrack, PackageX, TrendingUp } from 'lucide-react';
import { useIsIntersecting } from '../hooks/useAnimations';

interface ProblemStatementProps {
  lang: 'en' | 'fr';
}

export function ProblemStatement({ lang }: ProblemStatementProps) {
  const { ref, isIntersecting } = useIsIntersecting();

  const t = {
    badge: lang === 'en' ? "The Problem" : "Découvrez le problème",
    h2: lang === 'en' ? (
      <>
        Independent restaurants <br />
        lose money <br />
        <span className="text-amber-primary">every single day.</span>
      </>
    ) : (
      <>
        Les restaurants indépendants <br />
        perdent de l'argent <br />
        <span className="text-amber-primary">chaque jour.</span>
      </>
    ),
    sub: lang === 'en' 
      ? "Not from lack of effort. From lack of right information."
      : "Non pas par manque d'efforts, mais par manque d'informations pertinentes.",
    
    // Card 1
    c1Val: lang === 'en' ? "1 in 3" : "1 client sur 3",
    c1Sub: lang === 'en' ? "restaurant customers never return after their first visit" : "ne revient jamais après sa première visite.",
    c1Quote: lang === 'en'
      ? "\"We get busy during rush hour, and we completely forget to invite first-timers back. That's a table gone forever.\""
      : "« Aux heures de pointe, on est débordés et on oublie complètement d'inviter les nouveaux clients à revenir. C'est une table perdue à jamais. »",
    c1Label: lang === 'en' ? "— Lost to zero follow-up" : "— Perte due à un manque de suivi",

    // Card 2
    c2Val: lang === 'en' ? "4-10%" : "4 à 10 %",
    c2Sub: lang === 'en' ? "of food purchases wasted every single month" : "des achats alimentaires gaspillés chaque mois",
    c2Quote: lang === 'en'
      ? "\"You think your food cost is 28%, but then you find kilograms of spoiled herbs and stock at the back of the walk-in.\""
      : "« Vous pensez que vos coûts alimentaires représentent 28 %, mais vous découvrez ensuite des kilos d'herbes et de bouillon avariés au fond de votre chambre froide. »",
    c2Label: lang === 'en' ? "— Directly off the bottom line" : "— Impact direct sur le résultat net",

    // Card 3
    c3Val: lang === 'en' ? "€200-500" : "200 à 500 €",
    c3Sub: lang === 'en' ? "lost monthly by independent restaurants to costs they don't notice" : "perdus chaque mois par les restaurants indépendants à cause de coûts qu'ils ne remarquent pas",
    c3Quote: lang === 'en'
      ? "\"Not tracking supplier price creep or portion drift — that gap is where independent restaurants bleed cash quietly.\""
      : "« Ne pas suivre l'inflation des prix des fournisseurs ni les variations de portions, c'est là que les restaurants indépendants perdent de l'argent sans le savoir. »",
    c3Label: lang === 'en' ? "— Subscriptions, supplier price creep, portion drift" : "— Abonnements, inflation des prix des fournisseurs, variations de portions",

    // Bottom
    bottom1: lang === 'en' ? "One platform solves all three." : "Une seule plateforme résout ces trois problèmes.",
    bottom2: lang === 'en' ? "at once." : "en une seule fois."
  };

  return (
    <section className="bg-ink-deep w-full py-24 px-4 border-t border-ink-rich relative overflow-hidden">
      {/* Ambient dark background rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-primary/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="font-jakarta font-semibold text-[11px] tracking-[3px] text-amber-primary mb-6 uppercase text-center">
          {t.badge}
        </p>

        {/* Reduced Heading Sizing */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white text-center leading-tight max-w-[700px] mb-6">
          {t.h2}
        </h2>

        <p className="font-dm text-base text-zinc-400 text-center mb-16 max-w-lg">
          {t.sub}
        </p>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {/* Card 1 */}
          <div className={`tilt-card bg-white/5 border border-white/10 rounded-[24px] p-8 hover:border-amber-primary/30 hover:bg-amber-primary/5 transition-all duration-300 group ${isIntersecting ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: '100ms' }}>
            <div className="w-14 h-14 rounded-full border border-amber-primary/20 bg-amber-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <HeartCrack className="w-6 h-6 text-amber-primary" />
            </div>
            <p className="font-geist font-bold text-4xl md:text-6xl text-amber-primary leading-none mb-3">{t.c1Val}</p>
            <p className="font-dm text-sm sm:text-base text-white/70 tracking-tight leading-snug mb-8 min-h-[48px]">
              {t.c1Sub}
            </p>
            
            <div className="border-l-2 border-amber-primary/40 pl-4 relative">
              <p className="font-dm italic text-[13px] text-zinc-400 leading-relaxed">
                {t.c1Quote}
              </p>
              <p className="font-dm text-[11px] text-white/30 mt-2">{t.c1Label}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={`tilt-card bg-white/5 border border-white/10 rounded-[24px] p-8 hover:border-amber-primary/30 hover:bg-amber-primary/5 transition-all duration-300 group ${isIntersecting ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: '200ms' }}>
            <div className="w-14 h-14 rounded-full border border-amber-primary/20 bg-amber-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <PackageX className="w-6 h-6 text-amber-primary" />
            </div>
            <p className="font-geist font-bold text-4xl md:text-6xl text-amber-primary leading-none mb-3">{t.c2Val}</p>
            <p className="font-dm text-sm sm:text-base text-white/70 tracking-tight leading-snug mb-8 min-h-[48px]">
              {t.c2Sub}
            </p>
            
            <div className="border-l-2 border-amber-primary/40 pl-4 relative">
              <p className="font-dm italic text-[13px] text-zinc-400 leading-relaxed">
                {t.c2Quote}
              </p>
              <p className="font-dm text-[11px] text-white/30 mt-2">{t.c2Label}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`tilt-card bg-white/5 border border-white/10 rounded-[24px] p-8 hover:border-amber-primary/30 hover:bg-amber-primary/5 transition-all duration-300 group ${isIntersecting ? 'reveal visible' : 'reveal'}`} style={{ transitionDelay: '300ms' }}>
            <div className="w-14 h-14 rounded-full border border-amber-primary/20 bg-amber-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-amber-primary" />
            </div>
            <p className="font-geist font-bold text-4xl md:text-6xl text-amber-primary leading-none mb-3">{t.c3Val}</p>
            <p className="font-dm text-sm sm:text-base text-white/70 tracking-tight leading-snug mb-8 min-h-[48px]">
              {t.c3Sub}
            </p>
            
            <div className="border-l-2 border-amber-primary/40 pl-4 relative">
              <p className="font-dm italic text-[13px] text-zinc-400 leading-relaxed">
                {t.c3Quote}
              </p>
              <p className="font-dm text-[11px] text-white/30 mt-2">{t.c3Label}</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[200px] h-[2px] bg-grad-amber mx-auto mt-20 mb-12 opacity-30"></div>

        <h3 className={`font-syne font-bold text-xl md:text-3xl text-white text-center leading-tight ${isIntersecting ? 'reveal visible' : 'reveal'}`}>
          {t.bottom1} <br />
          <span className="text-amber-primary">{t.bottom2}</span>
        </h3>

      </div>
    </section>
  );
}
