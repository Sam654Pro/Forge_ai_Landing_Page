import { useState } from 'react';
import { MagneticButton } from './MagneticButton';

interface PricingProps {
  lang: 'en' | 'fr';
}

export function Pricing({ lang }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const t = {
    badge: lang === 'en' ? "Pricing" : "Tarifs",
    h2Line1: lang === 'en' ? "Simple pricing." : "Des prix simples.",
    h2Line2: lang === 'en' ? "Powerful platform." : "Une plateforme puissante.",
    
    toggleMonthly: lang === 'en' ? "Monthly" : "Mensuel",
    toggleAnnual: lang === 'en' ? "Annual" : "Annuel",
    savePercent: lang === 'en' ? "Save 20%" : "Économisez 20%",
    
    trialNote: lang === 'en' 
      ? "All plans include 3-day free trial. No credit card required." 
      : "Tous les abonnements incluent 3 jours d'essai gratuit. Aucune carte de crédit requise.",
    
    // Cards
    cardCTA: lang === 'en' ? "Start 3-Day Free Trial" : "Essai gratuit",
    mostPopular: lang === 'en' ? "Most Popular" : "Le plus populaire",
    monthLabel: lang === 'en' ? "/month" : "/mois",
    
    stripeSec: lang === 'en' ? "🔒 Stripe Secure" : "🔒 Paiement sécurisé Stripe",
    gdprComp: lang === 'en' ? "🛡️ GDPR Compliant" : "🛡️ Conforme RGPD",
    rating: lang === 'en' ? "⭐ 4.9/5 Restaurant Rating" : "⭐ Note restaurateurs : 4.9/5",
    moneyBack: lang === 'en' ? "↩️ 30-day money back" : "↩️ Garantie de remboursement 30 jours",

    plans: {
      starter: {
        name: "Starter",
        desc: lang === 'en' ? "For independent restaurant owners getting started" : "Pour les restaurateurs indépendants qui démarrent",
        features: lang === 'en' ? [
          "Up to 500 contacts",
          "Aria Avatar (Basic)",
          "WhatsApp integration",
          "Weekly profit reports",
          "Email support"
        ] : [
          "Jusqu'à 500 contacts",
          "Avatar Aria (Basique)",
          "Intégration WhatsApp",
          "Rapports de bénéfices hebdomadaires",
          "Support par email"
        ]
      },
      pro: {
        name: "Pro",
        desc: lang === 'en' ? "For restaurants serious about retention and cost control" : "Pour les restaurants axés sur la fidélisation et les coûts",
        features: lang === 'en' ? [
          "Unlimited contacts",
          "Aria Avatar (Advanced)",
          "Multi-channel inbox",
          "Live cost monitoring",
          "Stock forecasting AI",
          "Priority 24/7 support"
        ] : [
          "Contacts illimités",
          "Avatar Aria (Avancé)",
          "Boîte de réception multi-canal",
          "Suivi des coûts en direct",
          "Prévision des stocks par IA",
          "Support prioritaire 24h/24 et 7j/7"
        ]
      },
      business: {
        name: "Business",
        desc: lang === 'en' ? "For restaurant groups and multi-location owners" : "Pour les groupes de restaurants et multi-établissements",
        features: lang === 'en' ? [
          "Everything in Pro",
          "Custom AI training",
          "API access",
          "Dedicated success manager",
          "Custom reporting"
        ] : [
          "Tout le plan Pro",
          "Entraînement IA personnalisé",
          "Accès API",
          "Gestionnaire de compte dédié",
          "Rapports personnalisés"
        ]
      }
    }
  };

  return (
    <section className="bg-cream-warm py-20 px-4" id="pricing">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <p className="font-jakarta font-semibold text-[11px] tracking-[3px] text-amber-primary mb-6 uppercase text-center">
          {t.badge}
        </p>

        {/* Scaled down heading */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-ink-black text-center leading-tight mb-12">
          {t.h2Line1} <br />
          <span className="text-amber-primary">{t.h2Line2}</span>
        </h2>

        {/* Toggle */}
        <div className="flex items-center gap-2 bg-neutral-900 border border-white/10 p-1.5 rounded-full mb-16 shadow-inner overflow-hidden">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 rounded-full font-jakarta text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${!isAnnual ? 'bg-amber-primary text-black shadow-md font-black' : 'text-zinc-400 hover:text-white'}`}
          >
            {t.toggleMonthly}
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 rounded-full font-jakarta text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${isAnnual ? 'bg-amber-primary text-black shadow-md font-black' : 'text-zinc-400 hover:text-white'}`}
          >
            {t.toggleAnnual}
            <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ${isAnnual ? 'bg-black text-white' : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'}`}>
              {t.savePercent}
            </span>
          </button>
        </div>

        {/* Cards container with beautiful matching premium styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl items-stretch">
          
          {/* Starter Plan */}
          <PricingCard 
             name={t.plans.starter.name}
             desc={t.plans.starter.desc}
             price={isAnnual ? "39" : "49"}
             features={t.plans.starter.features}
             isFeatured={false}
             btnText={t.cardCTA}
             monthLabel={t.monthLabel}
          />

          {/* Pro Plan */}
          <PricingCard 
             name={t.plans.pro.name}
             desc={t.plans.pro.desc}
             price={isAnnual ? "79" : "99"}
             features={t.plans.pro.features}
             isFeatured={true}
             btnText={t.cardCTA}
             popularLabel={t.mostPopular}
             monthLabel={t.monthLabel}
          />

          {/* Business Plan */}
          <PricingCard 
             name={t.plans.business.name}
             desc={t.plans.business.desc}
             price={isAnnual ? "159" : "199"}
             features={t.plans.business.features}
             isFeatured={false}
             btnText={t.cardCTA}
             monthLabel={t.monthLabel}
          />

        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="font-dm text-xs sm:text-sm text-zinc-400 mb-6">{t.trialNote}</p>
          <div className="flex flex-wrap justify-center gap-5 sm:gap-8 font-dm text-[11px] sm:text-xs font-semibold text-zinc-300">
             <span className="flex items-center gap-1.5">{t.stripeSec}</span>
             <span className="flex items-center gap-1.5">{t.gdprComp}</span>
             <span className="flex items-center gap-1.5">{t.rating}</span>
             <span className="flex items-center gap-1.5">{t.moneyBack}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function PricingCard({ name, desc, price, features, isFeatured, btnText, popularLabel, monthLabel }: any) {
  return (
    <div className={`relative w-full rounded-[24px] p-8 md:p-10 flex flex-col justify-between transition-all duration-300 ${isFeatured ? 'bg-neutral-900 text-white border-2 border-amber-primary shadow-[0_10px_40px_rgba(245,158,11,0.15)] md:scale-105 z-10' : 'bg-neutral-900/60 border border-white/10 text-white hover:border-amber-primary/30'}`}>
      
      <div>
        {isFeatured && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-primary text-black px-4 py-1 rounded-full font-jakarta text-[10px] font-black uppercase tracking-widest shadow-md">
            {popularLabel}
          </div>
        )}
   
        <h3 className={`font-syne font-bold text-xl mb-2 ${isFeatured ? 'text-amber-primary' : ''}`}>{name}</h3>
        <p className={`font-dm text-xs sm:text-sm mb-8 h-10 line-clamp-2 ${isFeatured ? 'text-zinc-300' : 'text-zinc-400'}`}>{desc}</p>
        
        <div className="flex items-baseline gap-1 mb-8">
          <span className="font-geist font-black text-4xl sm:text-5xl leading-none">€{price}</span>
          <span className={`font-dm text-xs sm:text-sm ${isFeatured ? 'text-zinc-400' : 'text-zinc-500'}`}>{monthLabel}</span>
        </div>

        <MagneticButton className={`w-full py-3.5 rounded-xl font-jakarta font-black text-sm mb-8 transition-colors ${isFeatured ? 'bg-amber-primary text-black hover:bg-amber-warm shadow-[0_4px_20px_rgba(245,158,11,0.3)]' : 'bg-neutral-950 border border-white/10 text-white hover:border-amber-primary'}`}>
          {btnText}
        </MagneticButton>

        <div className="space-y-4">
          {features.map((f: string, i: number) => (
            <div key={i} className="flex items-start gap-3">
               <span className="text-amber-primary font-bold mt-0.5 text-xs sm:text-sm leading-none flex-shrink-0">✓</span>
               <span className="font-dm text-xs sm:text-sm text-zinc-300 leading-relaxed">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
