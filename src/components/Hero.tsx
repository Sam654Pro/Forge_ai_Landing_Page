import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MagneticButton } from './MagneticButton';
import { useTextScramble } from '../hooks/useTextScramble';
import { Play, TrendingUp, AlertCircle, MessageSquare, HeartHandshake, PackageX, Sparkles, ChefHat } from 'lucide-react';
import { useCounter } from '../hooks/useAnimations';

interface HeroProps {
  lang: 'en' | 'fr';
}

export function Hero({ lang }: HeroProps) {
  const line2Scrambled = useTextScramble(lang === 'en' ? 'One platform.' : 'Une seule plateforme.', 1500);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const retainedCounter = useCounter(47, 2000);

  // Translation Map
  const t = {
    h1Line1: lang === 'en' ? "Every problem." : "Tous les problèmes.",
    subheadline: lang === 'en' 
      ? "Forge AI handles guest win-back, kitchen stock alerts, and ingredient cost creep monitoring — so you can focus on actually running your kitchen."
      : "Forge AI gère la fidélisation client, les alertes stock cuisine et le suivi de l'inflation des prix des ingrédients — pour que vous puissiez vous concentrer sur la gestion de votre cuisine.",
    btnTrial: lang === 'en' ? "Start Free Trial" : "Essai gratuit",
    btnDemo: lang === 'en' ? "Watch Demo" : "Voir la démo",
    trustLine: lang === 'en'
      ? "Trusted by independent restaurant owners in Paris · Free for 3 days · No credit card needed · Cancel anytime"
      : "Approuvé par des restaurateurs indépendants à Paris · 3 jours d'essai gratuit · Aucune carte de crédit requise · Annulation possible à tout moment",
    retainedBy: lang === 'en' ? "Trusted by 500+ restaurant owners" : "Plus de 500 restaurateurs nous font confiance",
    countries: lang === 'en' ? "Across 15 countries" : "Dans 15 pays",
    availableIn: lang === 'en' ? "Now available for restaurant owners in:" : "Disponible dès maintenant pour les restaurateurs à :",
    comingSoon: lang === 'en' ? "More cities coming" : "D'autres villes bientôt disponibles",
    scrollExplore: lang === 'en' ? "Scroll to explore" : "Faites défiler pour explorer",
    
    // Cards
    cardRetainedTitle: lang === 'en' ? "Guest Retained" : "Fidélisation client",
    cardRetainedBody: lang === 'en' 
      ? "✓ Maria hasn't visited in 34 days — win-back sent"
      : "✓ Maria n'est pas venue depuis 34 jours — relance envoyée",
    
    cardCostTitle: lang === 'en' ? "Cost Fluctuation Alert" : "Alerte fluctuation des coûts",
    cardCostBody: lang === 'en' 
      ? "Electricity +34% flagged"
      : "Électricité : +34% signalée",
    
    cardAriaTitle: lang === 'en' ? "Aria Notification" : "Notification Aria",
    cardAriaBody: lang === 'en'
      ? "Aria handled 12 customer messages while you were in service"
      : "Aria a traité 12 messages clients pendant votre service",
    
    cardStockTitle: lang === 'en' ? "Kitchen Stock Alert" : "Alerte stock cuisine",
    cardStockBody: lang === 'en'
      ? "Olive oil: 2L remaining — reorder sent to supplier ✓"
      : "Huile d'olive : 2 L restants — nouvelle commande envoyée au fournisseur ↓"
  };

  return (
    <section className="relative min-h-screen bg-cream-white overflow-hidden pt-36 pb-28 flex items-center justify-center">
      {/* Background Layers */}
      
      {/* Layer 1: Dot grid with extreme subtle parallax */}
      <div 
        className="absolute inset-0 z-0 select-none hidden md:block"
        style={{
          backgroundImage: 'radial-gradient(rgba(245,158,11,0.08) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`
        }}
      />

      {/* Layer 2: Ambient glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-grad-glow rounded-full mix-blend-multiply blur-3xl z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-grad-glow rounded-full mix-blend-multiply blur-3xl z-0" />

      {/* Layer 3: Floating metric cards with improved color grading and glassmorphism */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block" style={{ transform: `translate(${mousePos.x * -35}px, ${mousePos.y * -35}px)` }}>
        
        {/* Card A: Top Right (Green themed) */}
        <motion.div 
          className="absolute top-[20%] right-[10%] w-[250px] bg-neutral-900/90 backdrop-blur-md border border-emerald-500/30 rounded-2xl p-4.5 shadow-[0_10px_35px_rgba(16,185,129,0.12)] animate-float-1"
        >
          <div className="flex items-center gap-1.5 mb-2.5">
            <HeartHandshake className="w-4 h-4 text-emerald-400" />
            <p className="text-[10px] font-dm text-zinc-400 uppercase tracking-wider font-bold">{t.cardRetainedTitle}</p>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-geist font-semibold text-[11px] text-zinc-300">{t.cardRetainedBody}</span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="font-geist font-bold text-lg text-emerald-400">+{retainedCounter}%</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
          <div className="w-full h-8 mt-2 flex items-end gap-1">
            {[30, 40, 25, 50, 70, 85, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </motion.div>

        {/* Card B: Left Side (Amber themed) */}
        <motion.div 
          className="absolute top-[45%] left-[5%] xl:left-[10%] w-[230px] bg-neutral-900/90 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4.5 shadow-[0_10px_35px_rgba(245,158,11,0.12)] animate-float-2"
        >
          <div className="flex items-center gap-1.5 mb-2.5">
            <TrendingUp className="w-4 h-4 text-amber-400" />
            <p className="text-[10px] font-dm text-zinc-400 uppercase tracking-wider font-bold text-balance">{t.cardCostTitle}</p>
          </div>
          <p className="font-jakarta font-bold text-xs text-amber-400">{t.cardCostBody}</p>
          <p className="text-[11px] font-dm text-emerald-400 mt-1.5 border border-emerald-500/20 bg-emerald-500/10 rounded-full px-2.5 py-0.5 inline-block">89 € → 120 €</p>
        </motion.div>

        {/* Card C: Bottom Right (Blue themed) */}
        <motion.div 
          className="absolute bottom-[25%] right-[15%] w-[250px] bg-neutral-900/90 backdrop-blur-md border border-blue-500/30 rounded-2xl p-4.5 shadow-[0_10px_35px_rgba(59,130,246,0.12)] animate-float-1"
          style={{ animationDelay: '1.5s' }}
        >
          <div className="flex items-center gap-3 mb-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-[1px]">
               <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center">
                 <Sparkles className="w-3.5 h-3.5 text-blue-400" />
               </div>
            </div>
            <p className="text-[10px] font-dm text-zinc-400 uppercase tracking-wider font-bold">{t.cardAriaTitle}</p>
          </div>
          <p className="font-jakarta text-[11px] text-zinc-200 font-medium">{t.cardAriaBody}</p>
        </motion.div>

        {/* Card D: Top Left (Red/Ruby themed) */}
        <motion.div 
          className="absolute top-[15%] left-[15%] w-[230px] bg-neutral-900/90 backdrop-blur-md border border-rose-500/30 rounded-2xl p-4.5 shadow-[0_10px_35px_rgba(244,63,94,0.12)] animate-float-2"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex items-center gap-2 mb-2.5">
            <PackageX className="w-4 h-4 text-rose-400" />
            <p className="text-[10px] font-dm text-zinc-400 uppercase tracking-wider font-bold">{t.cardStockTitle}</p>
          </div>
          <p className="font-jakarta text-[11px] font-semibold text-zinc-200 leading-relaxed">{t.cardStockBody}</p>
        </motion.div>

      </div>

      {/* Layer 4: Main Content */}
      <motion.div style={{ y }} className="relative z-20 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl pt-14">
        
        {/* Title Spacer */}
        <div className="h-6" />

        {/* Headline - Significantly reduced sizing to be extremely sleek */}
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.03em] text-ink-black mb-6 select-none">
          <span className="block mb-2">{t.h1Line1}</span>
          <span className="inline-flex justify-center flex-wrap text-amber-primary">
            {line2Scrambled.map((item, idx) => (
              <span key={idx} className="relative inline-block">
                <span className="opacity-0 pointer-events-none select-none">{item.finalChar === ' ' ? '\u00A0' : item.finalChar}</span>
                <span className="absolute inset-0 flex items-center justify-center">{item.currentChar === ' ' ? '\u00A0' : item.currentChar}</span>
              </span>
            ))}
          </span>
        </h1>

        {/* Subheadline - Reduced sizing and sleek font */}
        <p className="font-dm text-sm sm:text-base leading-[1.6] text-ink-medium max-w-[620px] mx-auto mb-10 text-balance">
          {t.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <MagneticButton 
            href="https://remix-forge-ai-184760636045.europe-west2.run.app"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-8 bg-grad-amber text-black font-jakarta font-extrabold text-[15px] rounded-xl shadow-[0_8px_32px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.4)] group flex items-center justify-center gap-2 w-full sm:w-auto transition-transform duration-300"
          >
            {t.btnTrial}
            <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">→</span>
          </MagneticButton>
          
          <MagneticButton className="h-14 px-8 bg-white border-[1.5px] border-cream-border text-zinc-200 font-jakarta font-bold text-[15px] rounded-xl hover:border-amber-primary hover:bg-amber-ultra transition-all group flex items-center justify-center gap-3 w-full sm:w-auto">
            <div className="w-7 h-7 rounded-full bg-grad-amber flex items-center justify-center">
              <Play className="w-[10px] h-[10px] text-black fill-current ml-[2px]" />
            </div>
            {t.btnDemo}
          </MagneticButton>
        </div>

        {/* Trust Line */}
        <p className="font-dm text-[12px] text-zinc-400 mb-10 max-w-xl text-balance">
          {t.trustLine}
        </p>

        {/* Social Proof with Flags Icons */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-12">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-9 h-9 rounded-full border-2 border-cream-white" />
            ))}
            <div className="w-9 h-9 rounded-full border-2 border-cream-white bg-amber-primary font-geist text-[11px] font-bold text-black flex items-center justify-center shadow-lg">
              +500
            </div>
          </div>
          <div className="text-left flex flex-col justify-center">
            <p className="font-dm text-[13px] font-semibold text-zinc-200">{t.retainedBy}</p>
            <p className="font-dm text-[11px] text-zinc-400 flex items-center gap-1.5">
              <span>{t.countries}</span>
              <span className="text-base leading-none">🇺🇸 🇬🇧 🇪🇺</span>
            </p>
          </div>
        </div>

        {/* City/Market Badges */}
        <div className="w-full border-t border-b border-cream-border/60 py-4 mb-12 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <span className="font-dm text-[11px] font-extrabold text-zinc-400 uppercase tracking-wider">{t.availableIn}</span>
          <div className="flex flex-wrap justify-center gap-2">
            {(lang === 'en' ? ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'London'] : ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Londres']).map((city) => (
              <span key={city} className="bg-white/5 border border-cream-border/50 px-3 py-1 rounded-full text-xs font-dm font-medium text-ink-black hover:border-amber-primary/40 transition-colors">
                {city}
              </span>
            ))}
            <span className="bg-amber-ultra px-3 py-1 border border-dashed border-amber-primary/20 rounded-full text-xs font-dm font-medium text-amber-primary/80">
              {t.comingSoon}
            </span>
          </div>
        </div>



      </motion.div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <span className="font-dm text-[9px] uppercase tracking-widest text-zinc-400">{t.scrollExplore}</span>
        <div className="w-4 h-6 border-2 border-amber-primary rounded-full flex justify-center p-1">
            <div className="w-1 h-1 bg-amber-primary rounded-full animate-[ping_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
}
