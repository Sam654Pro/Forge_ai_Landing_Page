import { useIsIntersecting } from '../hooks/useAnimations';
import { HeartHandshake, ChefHat, TrendingDown, ShieldAlert } from 'lucide-react';

interface ProductShowcaseProps {
  lang: 'en' | 'fr';
}

export function ProductShowcase({ lang }: ProductShowcaseProps) {
  const { ref, isIntersecting } = useIsIntersecting({ threshold: 0.2 });

  const t = {
    badge: lang === 'en' ? "The Platform" : "La Plateforme",
    title: lang === 'en' ? "Meet Forge AI" : "Découvrez Forge AI",
    subtitle: lang === 'en' 
      ? "Three engines. One dashboard. Built with Gemini 2.0 Flash."
      : "Trois moteurs. Un tableau de bord. Développée avec Gemini 2.0 Flash.",
    liveData: lang === 'en' ? "Live Data" : "Données en direct",
    builtOn: lang === 'en' ? "Built on Gemini" : "✨ Basé sur Gemini",
    
    // Dashboard mockup
    dashboard: lang === 'en' ? "🍽️ Dashboard" : "🍽️ Tableau de bord",
    tabs: lang === 'en' 
      ? ['Guests', 'Kitchen Stock', 'Costs & P&L', 'Aria AI', 'Settings']
      : ['Clients', 'Stocks cuisine', 'Coûts et compte de résultat', 'Aria AI', 'Paramètres'],
    
    healthScore: lang === 'en' ? "Restaurant Health Score" : "Score de santé du restaurant",
    statusExcellent: lang === 'en' ? "Excellent" : "Excellent",
    revenueRisk: lang === 'en' ? "Revenue at Risk" : "Chiffre d'affaires à risque",
    viewRiskGuests: lang === 'en' ? "View at-risk guests" : "Voir les clients à risque",
    
    // Engine small cards
    c1Title: lang === 'en' ? "Guest Win-Back" : "Réactivation des clients",
    c1Desc: lang === 'en'
      ? "Aria follows up automatically via WhatsApp with quiet guests."
      : "Aria contacte automatiquement les clients inactifs via WhatsApp.",
    
    c2Title: lang === 'en' ? "Kitchen Stock Sense" : "Gestion des stocks cuisine",
    c2Desc: lang === 'en'
      ? "Predicts ingredient depletion and auto-drafts supplier orders."
      : "Prévoit les ruptures de stock et passe automatiquement les commandes fournisseurs.",
    
    c3Title: lang === 'en' ? "Food Cost Guard" : "Protection des coûts alimentaires",
    c3Desc: lang === 'en'
      ? "Audits supplier pricing and detects portion cost drift early."
      : "Analyse des prix fournisseurs et détection précoce des variations du coût des portions."
  };

  return (
    <section className="bg-cream-white relative py-20 md:py-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <p className="font-jakarta font-semibold text-[11px] tracking-[3px] text-amber-primary/80 mb-4 uppercase text-center">
          {t.badge}
        </p>

        {/* Heading sizes scaled down to be much sleeker */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-ink-black text-center mb-4">
          {t.title}
        </h2>

        <p className="font-dm text-sm sm:text-base text-zinc-400 text-center mb-16 max-w-2xl text-balance">
          {t.subtitle}
        </p>

        {/* Browser Mockup */}
        <div 
          ref={ref}
          className={`w-full max-w-[1200px] relative transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isIntersecting ? 'translate-y-0 opacity-100 rotate-x-0' : 'translate-y-[60px] opacity-0 rotate-x-6'} perspective-1000`}
        >
          {/* Main Shadow under mockup */}
          <div className="absolute -bottom-10 left-[5%] right-[5%] h-10 bg-ink-black/20 blur-2xl rounded-[100%] transition-opacity duration-700"></div>

          {/* Floating Badges (Visible on desktop) */}
          <div className="hidden lg:flex absolute -left-6 top-[20%] items-center gap-2 bg-neutral-900/90 backdrop-blur border border-white/10 px-4 py-2 rounded-full shadow-lg z-20">
            <div className="w-2 h-2 rounded-full bg-emerald-custom"></div>
            <span className="font-jakarta text-xs font-bold text-white">{t.liveData}</span>
          </div>
          
          <div className="hidden lg:flex absolute -right-6 top-[40%] items-center gap-2 bg-neutral-900/90 backdrop-blur border border-white/10 px-4 py-2 rounded-full shadow-lg z-20">
            <span className="text-xs">✨</span>
            <span className="font-jakarta text-xs font-bold tracking-wide text-amber-primary">{t.builtOn}</span>
          </div>

          <div className="rounded-2xl md:rounded-[28px] overflow-hidden border border-cream-border/60 bg-neutral-950 shadow-2xl relative z-10 transform-style-3d">
            
            {/* Chrome Bar */}
            <div className="h-12 bg-neutral-900 border-b border-white/5 flex items-center px-4 md:px-6 gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-primary"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-custom"></div>
              </div>
              <div className="flex-1 max-w-sm mx-auto h-7 bg-black rounded-md border border-white/5 flex items-center justify-center font-dm text-[11px] text-zinc-400">
                forge-ai.app/dashboard
              </div>
            </div>

            {/* Simulated Dashboard UI */}
            <div className="bg-neutral-900/40 p-4 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[400px] md:min-h-[600px]">
              
              {/* Sidebar rough skeleton */}
              <div className="hidden md:flex flex-col gap-3 col-span-3 lg:col-span-2">
                <div className="w-full h-10 bg-amber-primary/15 border border-amber-primary/30 rounded-lg flex items-center justify-center font-jakarta font-bold text-[11px] text-amber-primary whitespace-nowrap">
                  <span>{t.dashboard}</span>
                </div>
                {t.tabs.map((tab, i) => (
                  <div key={i} className="w-full h-8 px-3 flex items-center font-dm text-xs text-zinc-400 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition-all">
                    {tab}
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="col-span-1 md:col-span-9 lg:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Top Row: Health & Revenue */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-6 col-span-1 md:col-span-2 flex flex-col justify-between">
                   <div className="flex justify-between items-center mb-4">
                     <p className="font-jakarta text-xs font-bold text-zinc-300 uppercase tracking-wide">{t.healthScore}</p>
                     <span className="text-[10px] font-dm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full font-bold">{t.statusExcellent}</span>
                   </div>
                   <div className="w-full h-32 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 border border-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
                     <span className="font-geist font-bold text-5xl text-emerald-400 relative z-10">92</span>
                   </div>
                </div>

                <div className="bg-black rounded-xl border border-white/10 p-6 col-span-1 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-primary" />
                    <p className="font-jakarta text-xs font-bold text-zinc-400 uppercase tracking-wide">{t.revenueRisk}</p>
                  </div>
                  <p className="font-geist font-bold text-4xl text-amber-primary mt-2">€420</p>
                  <button className="mt-4 w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-dm text-xs transition-colors">{t.viewRiskGuests}</button>
                </div>

                {/* Bottom Row: Three Engines abstract representation */}
                <div className="bg-neutral-900 border border-white/10 rounded-xl p-5 hover:border-amber-primary/40 transition-all duration-300">
                   <div className="w-9 h-9 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-primary mb-3">
                     <HeartHandshake className="w-5 h-5" />
                   </div>
                   <p className="font-jakarta font-bold text-xs text-white mb-1.5">{t.c1Title}</p>
                   <p className="font-dm text-[11px] text-zinc-400 leading-relaxed">{t.c1Desc}</p>
                </div>

                <div className="bg-neutral-900 border border-white/10 rounded-xl p-5 hover:border-emerald-custom/40 transition-all duration-300">
                   <div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-custom mb-3">
                     <ChefHat className="w-5 h-5" />
                   </div>
                   <p className="font-jakarta font-bold text-xs text-white mb-1.5">{t.c2Title}</p>
                   <p className="font-dm text-[11px] text-zinc-400 leading-relaxed">{t.c2Desc}</p>
                </div>

                <div className="bg-neutral-900 border border-white/10 rounded-xl p-5 hover:border-blue-500/40 transition-all duration-300">
                   <div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                     <TrendingDown className="w-5 h-5" />
                   </div>
                   <p className="font-jakarta font-bold text-xs text-white mb-1.5">{t.c3Title}</p>
                   <p className="font-dm text-[11px] text-zinc-400 leading-relaxed">{t.c3Desc}</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
