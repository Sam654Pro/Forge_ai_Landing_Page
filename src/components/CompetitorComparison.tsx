import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { useIsIntersecting } from '../hooks/useAnimations';
import { FlameLogo } from './FlameLogo';

interface CompetitorComparisonProps {
  lang: 'en' | 'fr';
}

export function CompetitorComparison({ lang }: CompetitorComparisonProps) {
  const { ref, isIntersecting } = useIsIntersecting();

  const t = {
    badge: lang === 'en' ? "Why Forge AI" : "Pourquoi Forge AI ?",
    h2Line1: lang === 'en' ? (
      <>
        Built for owners <br />
        doing everything <br />
        on their own.
      </>
    ) : (
      <>
        Conçu pour les propriétaires <br />
        qui gèrent tout <br />
        eux-mêmes.
      </>
    ),
    h2Line2: lang === 'en' ? "Not for agencies. Not for enterprises. For you." : "Pas pour les agences. Pas pour les grandes entreprises. Pour vous.",
    tableHeaderFeature: lang === 'en' ? "Operational Feature" : "Fonctionnalités opérationnelles",
    recommendedBadge: lang === 'en' ? "⭐ Recommended" : "⭐ Recommandé",
    
    // Conclusion text
    conc1: lang === 'en' 
      ? "Toast POS and Lightspeed cost over €100/month and do not offer guest marketing automation. Generic WhatsApp tools offer no menu, ingredient, or recipe costing intelligence."
      : "Toast POS et Lightspeed coûtent plus de 100 €/mois et n'offrent pas d'automatisation de fidélisation client. Les outils WhatsApp génériques ne proposent aucun suivi des stocks ou des coûts.",
    conc2: lang === 'en'
      ? "Forge AI does all of it starting at just €49/month. Toast POS and Lightspeed are fully compatible."
      : "Forge AI fait tout cela à partir de seulement 49 €/mois. Toast POS et Lightspeed sont compatibles.",
    
    // Features translating list
    features: [
      { 
        name: lang === 'en' ? "Guest win-back automation" : "Automatisation de la reconquête client", 
        states: ["grey", "grey", "grey", "green"] 
      },
      { 
        name: lang === 'en' ? "Ingredient stock alerts" : "Alertes de stock d'ingrédients", 
        states: ["green", "green", "grey", "green"] 
      },
      { 
        name: lang === 'en' ? "Food cost % per dish" : "Pourcentage du coût des aliments par plat", 
        states: ["green", "grey", "grey", "green"] 
      },
      { 
        name: lang === 'en' ? "Supplier reorder automation" : "Automatisation des commandes auprès des fournisseurs", 
        states: ["grey", "grey", "grey", "green"] 
      },
      { 
        name: lang === 'en' ? "Daily P&L summary" : "Résumé quotidien du compte de résultat", 
        states: ["amber", "amber", "grey", "green"] 
      },
      { 
        name: lang === 'en' ? "WhatsApp customer messaging" : "Messageries client WhatsApp", 
        states: ["grey", "grey", "green", "green"] 
      },
      { 
        name: lang === 'en' ? "Works for independent restaurants" : "Idéal pour les restaurants indépendants", 
        states: ["grey", "grey", "amber", "green"] 
      },
      { 
        name: lang === 'en' ? "Pricing" : "Tarifs", 
        states: lang === 'en' 
          ? ["€120+/mo", "€100+/mo", "Free", "€49/mo"]
          : ["120 €/mois et plus", "100 €/mois et plus", "Gratuit", "49 €/mois"], 
        isText: true 
      },
    ]
  };

  const getIcon = (state: string, isForge: boolean) => {
    if (isForge) {
      switch(state) {
        case "green": return <CheckCircle2 className="w-6 h-6 text-amber-primary fill-amber-primary/10 stroke-[2.5]" />;
        case "grey": return <XCircle className="w-5.5 h-5.5 text-zinc-800" />;
        case "amber": return <AlertTriangle className="w-5.5 h-5.5 text-amber-primary" />;
        default: return null;
      }
    } else {
      switch(state) {
        case "green": return <CheckCircle2 className="w-5 h-5 text-emerald-400 stroke-[2]" />;
        case "grey": return <XCircle className="w-4.5 h-4.5 text-zinc-800" />;
        case "amber": return <AlertTriangle className="w-4.5 h-4.5 text-amber-500" />;
        default: return null;
      }
    }
  };

  return (
    <section className="bg-cream-light py-20 px-4 overflow-hidden" id="how-it-works">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <p className="font-jakarta font-semibold text-[11px] tracking-[3px] text-amber-primary mb-6 uppercase text-center">
          {t.badge}
        </p>

        {/* Heading sizes scaled down to look extremely modern and elegant */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-ink-black text-center leading-tight mb-4">
          {t.h2Line1}
        </h2>

        <p className="font-dm text-sm sm:text-base text-zinc-400 text-center mb-16 max-w-xl">
          {t.h2Line2}
        </p>

        {/* Comparison Table with dark themed visual styling to make all contents 100% visible */}
        <div ref={ref} className={`w-full overflow-x-auto pb-8 ${isIntersecting ? 'reveal visible' : 'reveal'}`}>
          <div className="min-w-[800px] w-full border border-white/10 rounded-[24px] bg-neutral-900 overflow-hidden shadow-2xl">
            
            {/* Header row */}
            <div className="grid grid-cols-5 border-b border-white/10 bg-neutral-950">
              <div className="col-span-1 p-6 flex flex-col justify-end">
                <span className="font-jakarta text-[10px] font-bold text-zinc-400 uppercase tracking-wider">{t.tableHeaderFeature}</span>
              </div>
              <div className="col-span-1 p-6 text-center flex flex-col items-center justify-center gap-2">
                <span className="font-syne font-bold text-sm text-zinc-200">Toast POS</span>
              </div>
              <div className="col-span-1 p-6 text-center flex flex-col items-center justify-center gap-2 border-l border-white/5">
                <span className="font-syne font-bold text-sm text-zinc-200">Lightspeed</span>
              </div>
              <div className="col-span-1 p-6 text-center flex flex-col items-center justify-center gap-2 border-l border-white/5">
                <span className="font-syne font-bold text-sm text-zinc-200">Generic WhatsApp</span>
              </div>
              
              {/* Recommended Column Header */}
              <div className="col-span-1 p-6 bg-neutral-900 text-center flex flex-col items-center justify-center relative shadow-lg">
                <div className="absolute -top-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[9px] uppercase font-black tracking-wider px-3.5 py-1 rounded-full whitespace-nowrap shadow-md z-20">
                  {t.recommendedBadge}
                </div>
                <div className="flex items-center gap-1.5 justify-center mt-2">
                  <FlameLogo className="w-5 h-5 text-amber-primary" />
                  <span className="font-syne font-extrabold text-base text-amber-primary">Forge AI</span>
                </div>
              </div>
            </div>

            {/* Rows list */}
            {t.features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-5 border-b border-white/5 hover:bg-white/5 transition-colors ${idx === t.features.length - 1 ? 'border-b-0' : ''}`}
              >
                {/* Feature Name - dark contrasting light-grey text */}
                <div className="col-span-1 p-4.5 px-6 flex items-center">
                  <span className="font-dm font-medium text-sm text-zinc-200">{feature.name}</span>
                </div>

                {/* States / Metrics Columns */}
                {feature.isText ? (
                  <>
                    <div className="col-span-1 border-l border-white/5 p-4.5 flex items-center justify-center font-geist text-xs text-zinc-400 font-semibold">
                       {feature.states[0]}
                    </div>
                    <div className="col-span-1 border-l border-white/5 p-4.5 flex items-center justify-center font-geist text-xs text-zinc-400 font-semibold">
                       {feature.states[1]}
                    </div>
                    <div className="col-span-1 border-l border-white/5 p-4.5 flex items-center justify-center font-geist text-xs text-zinc-400 font-semibold">
                       {feature.states[2]}
                    </div>
                    {/* Forge AI Column */}
                    <div className="col-span-1 p-4.5 flex items-center justify-center bg-amber-500/5 border-l border-amber-500/20">
                       <span className="font-geist text-xs text-amber-primary bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full font-black">
                         {feature.states[3]}
                       </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-1 border-l border-white/5 p-4.5 flex items-center justify-center">
                       {getIcon(feature.states[0], false)}
                    </div>
                    <div className="col-span-1 border-l border-white/5 p-4.5 flex items-center justify-center">
                       {getIcon(feature.states[1], false)}
                    </div>
                    <div className="col-span-1 border-l border-white/5 p-4.5 flex items-center justify-center">
                       {getIcon(feature.states[2], false)}
                    </div>
                    {/* Forge AI Column */}
                    <div className="col-span-1 p-4.5 flex items-center justify-center bg-amber-500/5 border-l border-amber-500/20">
                       {getIcon(feature.states[3], true)}
                    </div>
                  </>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Conclusion block below table */}
        <div className="mt-12 text-center max-w-3xl px-4">
          <p className="font-jakarta font-medium text-sm sm:text-base text-zinc-400 mb-4 leading-relaxed">
            {t.conc1}
          </p>
          <p className="font-syne font-extrabold text-lg sm:text-xl text-zinc-200">
            {t.conc2}
          </p>
        </div>

      </div>
    </section>
  );
}
