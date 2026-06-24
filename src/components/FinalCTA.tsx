import { MagneticButton } from './MagneticButton';
import { Play } from 'lucide-react';

interface FinalCTAProps {
  lang: 'en' | 'fr';
}

export function FinalCTA({ lang }: FinalCTAProps) {
  const t = {
    badge: lang === 'en' ? "Get Started Today" : "Commencez dès aujourd'hui",
    h2: lang === 'en' 
      ? "Your business deserves better than spreadsheets." 
      : "Votre établissement mérite mieux que des tableurs.",
    sub: lang === 'en'
      ? "Join hundreds of small business owners who stopped losing customers, running out of stock, and missing profit leaks."
      : "Rejoignez les centaines de restaurateurs qui ont arrêté de perdre des clients, d'être en rupture de stock ou d'avoir des pertes financières.",
    
    btnTrial: lang === 'en' ? "Start Free Trial →" : "Essai gratuit →",
    btnDemo: lang === 'en' ? "Watch Demo" : "Voir la démo",
    
    orLabel: lang === 'en' ? "or" : "ou",
    footerText: lang === 'en'
      ? "No credit card · Setup in 5 min · Cancel anytime"
      : "Sans carte de crédit · Installation en 5 min · Sans engagement"
  };

  return (
    <section className="bg-ink-deep py-24 px-4 relative overflow-hidden">
      
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-grad-glow rounded-full blur-[100px] pointer-events-none opacity-50" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        
        <p className="font-jakarta font-bold text-xs tracking-[4px] text-amber-primary mb-6 uppercase">
          {t.badge}
        </p>

        {/* Scaled down heading */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white leading-[1.1] mb-8 text-balance">
          {t.h2}
        </h2>

        <p className="font-dm text-sm sm:text-base text-zinc-400 mb-12 max-w-2xl text-balance leading-relaxed">
          {t.sub}
        </p>

        <div className="flex flex-col items-center gap-6 w-full mb-10">
          <MagneticButton className="h-[52px] px-8 bg-amber-primary text-black font-jakarta font-black text-sm rounded-xl shadow-[0_4px_20px_rgba(245,158,11,0.25)] hover:shadow-[0_4px_30px_rgba(245,158,11,0.4)] transition-all w-full sm:w-auto cursor-pointer">
            {t.btnTrial}
          </MagneticButton>

          <span className="font-dm text-xs text-zinc-500 italic">{t.orLabel}</span>

          <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors font-jakarta font-bold text-sm group cursor-pointer">
            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:border-amber-primary/50 transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            {t.btnDemo}
          </button>
        </div>

        <p className="font-dm text-xs text-zinc-500">
           {t.footerText}
        </p>

      </div>
    </section>
  );
}
