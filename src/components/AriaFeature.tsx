import { useState } from 'react';
import { useIsIntersecting } from '../hooks/useAnimations';
import { Sparkles } from 'lucide-react';

interface AriaFeatureProps {
  lang: 'en' | 'fr';
}

export function AriaFeature({ lang }: AriaFeatureProps) {
  const [activeMode, setActiveMode] = useState<'customer' | 'owner'>('customer');
  const { ref, isIntersecting } = useIsIntersecting();

  const t = {
    badge: lang === 'en' ? "Star Feature" : "Fonctionnalité phare",
    h2Line1: lang === 'en' ? "Meet Aria." : "Rencontrez Aria.",
    h2Line2: lang === 'en' ? "Your AI restaurant assistant." : "L'assistante IA de votre restaurant.",
    body: lang === 'en'
      ? "The first AI agent that responds to guest inquiries via WhatsApp AND manages your inventory and cost alerts in real-time. Train on your menu and supplier list in minutes."
      : "Le premier agent IA qui répond aux questions des clients via WhatsApp ET gère vos stocks et alertes de coûts en temps réel. Formation sur votre menu et votre liste de fournisseurs en quelques minutes.",
    
    statusActive: lang === 'en' ? "Aria is active" : "Aria est active",
    toggleGuestChat: lang === 'en' ? "Guest Chat" : "Chat client",
    toggleManagerBrief: lang === 'en' ? "Manager Brief" : "Message du responsable",
    
    // Chat Mode
    userIcon: "U",
    ariaIcon: "AR",
    userMsg: lang === 'en'
      ? "Hi, can I book a table for 4 tonight at 8 PM? Do you have gluten-free options?"
      : "Bonjour, puis-je réserver une table pour 4 ce soir à 20h ? Proposez-vous des options sans gluten ?",
    ariaMsg: lang === 'en'
      ? "Yes! We have a beautiful booth open at 8 PM, and our entire hand-made pasta line can be made gluten-free. Shall I hold this table under your name?"
      : "Oui ! Nous avons une belle table disponible à 20h, et toute notre gamme de pâtes artisanales peut être préparée sans gluten. Puis-je réserver cette table à votre nom ?",
    ariaTyping: lang === 'en' ? "Aria is typing..." : "Aria est en train d'écrire…",
    
    // Brief Mode
    briefTitle: lang === 'en' ? "Morning Shift Briefing" : "Briefing de la matinée",
    briefSub: lang === 'en'
      ? "Good morning Chef! Here are 3 things needing your attention today:"
      : "Bonjour Chef ! Voici 3 points qui requièrent votre attention aujourd'hui :",
    brief1: lang === 'en'
      ? "Fresh sea bass fillet stock is critically low (2kg left). Supplier reorder draft is ready."
      : "Le stock de filets de bar frais est critique (2 kg restants). Le bon de commande fournisseur est prêt.",
    brief2: lang === 'en'
      ? "Olive oil supplier increased their crate cost by +18%. I've flagged this in food margins."
      : "Le fournisseur d'huile d'olive a augmenté son tarif de +18 %. J'ai ajusté cela dans les marges de vos plats.",
    brief3: lang === 'en'
      ? "4 regulars haven't visited in 30 days. I have prepared a win-back campaign draft for review."
      : "4 clients réguliers ne sont pas venus depuis 30 jours. J'ai préparé un brouillon de campagne de fidélisation.",
    
    // Pills
    pills: lang === 'en'
      ? ['Talks to customers 24/7', 'Learns your business', 'Escalates when needed', 'Available on WhatsApp', 'Zero coding required']
      : ['Discussion avec les clients 24h/24 et 7j/7', 'Apprentissage de votre activité', 'Gestion des problèmes en cas de besoin', 'Disponible sur WhatsApp', 'Aucune programmation requise']
  };

  return (
    <section className="bg-ink-deep py-24 px-4 relative overflow-hidden">
      
      {/* Background glow specific to this section to make it pop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-grad-glow rounded-full mix-blend-lighten blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        
        {/* Made Star Feature badge highly visible with solid contrasting colors */}
        <div className="bg-amber-primary text-black font-jakarta font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-8 shadow-xl">
          {t.badge}
        </div>

        {/* Heading sizes scaled down to be incredibly modern and elegant */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white text-center leading-[1.1] mb-6 select-none">
          {t.h2Line1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 font-black">{t.h2Line2}</span>
        </h2>

        <p className="font-dm text-sm sm:text-base text-zinc-300 font-medium text-center max-w-[600px] mb-16 text-balance leading-relaxed">
          {t.body}
        </p>

        {/* Interactive ARIA Showcase */}
        <div 
          ref={ref}
          className={`w-full max-w-[1000px] bg-white/5 border border-white/10 rounded-[28px] md:rounded-[40px] p-2 md:p-4 shadow-2xl overflow-hidden transform-style-3d transition-all duration-1000 ${isIntersecting ? 'translate-y-0 opacity-100 rotate-x-0' : 'translate-y-20 opacity-0 rotate-x-6'}`}
        >
          <div className="w-full bg-neutral-950/90 backdrop-blur-xl rounded-[24px] md:rounded-[36px] overflow-hidden border border-white/5 grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
            
            {/* Left side: Avatar */}
            <div className="flex flex-col items-center justify-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 relative">
              <div className="relative mb-8">
                {/* Avatar Glow Ring */}
                <div className="absolute inset-[-20%] rounded-full border border-amber-primary/30 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-10%] rounded-full border border-amber-primary/10 animate-[spin_6s_linear_infinite_reverse]" />
                <div className="absolute inset-0 rounded-full bg-amber-primary/20 blur-xl animate-pulse" />
                
                {/* The Avatar */}
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-amber-primary bg-zinc-950 relative z-10 p-1">
                   <div className="w-full h-full rounded-full bg-[linear-gradient(135deg,#2C2218,#120E09)] relative flex items-center justify-center overflow-hidden">
                      <div className="absolute bottom-[-10%] w-3/4 h-3/4 bg-amber-primary/20 rounded-[100px_100px_0_0]"></div>
                      <div className="absolute top-[30%] w-16 h-16 bg-white/10 rounded-full"></div>
                   </div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 bg-neutral-900 border border-white/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-amber-primary" />
                <span className="font-geist text-xs text-white/80">{t.statusActive}</span>
              </div>
            </div>

            {/* Right side: Dynamic Content based on toggle */}
            <div className="flex flex-col h-full bg-neutral-900/20 p-6 md:p-10 relative">
              
               {/* Toggle controls embedded in UI */}
               <div className="absolute top-6 right-6 flex bg-neutral-950 border border-white/10 rounded-xl p-1 z-20">
                  <button 
                    onClick={() => setActiveMode('customer')}
                    className={`px-4 py-1.5 rounded-lg font-jakarta text-xs font-bold transition-all ${activeMode === 'customer' ? 'bg-amber-primary/20 text-amber-primary' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    {t.toggleGuestChat}
                  </button>
                  <button 
                    onClick={() => setActiveMode('owner')}
                    className={`px-4 py-1.5 rounded-lg font-jakarta text-xs font-bold transition-all ${activeMode === 'owner' ? 'bg-amber-primary/20 text-amber-primary' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    {t.toggleManagerBrief}
                  </button>
               </div>

               {/* Layout for content */}
               <div className="flex-1 flex flex-col justify-end mt-16 pb-8">
                 {activeMode === 'customer' ? (
                   <div className="space-y-4">
                     <div className="flex items-start gap-3 max-w-[85%]">
                       <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">{t.userIcon}</div>
                       <div className="bg-white/5 border border-white/5 text-white/90 font-dm text-sm p-3.5 rounded-2xl rounded-tl-none leading-relaxed">
                         {t.userMsg}
                       </div>
                     </div>
                     <div className="flex items-start gap-3 max-w-[85%] self-end flex-row-reverse float-right">
                       <div className="w-8 h-8 rounded-full bg-amber-primary flex-shrink-0 flex items-center justify-center text-black font-black text-xs">{t.ariaIcon}</div>
                       <div className="bg-amber-primary/10 border border-amber-primary/30 text-white font-dm text-sm p-3.5 rounded-2xl rounded-tr-none leading-relaxed">
                         {t.ariaMsg}
                       </div>
                     </div>
                     <div className="clear-both"></div>
                     <div className="flex items-center gap-2 text-zinc-500 text-xs ml-11 font-dm italic pt-2">
                       <div className="w-1.5 h-1.5 bg-amber-primary rounded-full animate-pulse"></div>
                       {t.ariaTyping}
                     </div>
                   </div>
                 ) : (
                   <div className="space-y-4">
                     <div className="bg-neutral-900 border border-white/5 rounded-2xl p-5">
                       <p className="font-jakarta text-amber-primary font-bold text-xs uppercase tracking-wider mb-2">{t.briefTitle}</p>
                       <p className="font-dm text-zinc-300 text-sm mb-4">
                         {t.briefSub}
                       </p>
                       <ul className="space-y-3">
                         <li className="flex items-start gap-3">
                           <div className="w-5 h-5 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 text-[10px] mt-0.5 border border-rose-500/30 font-bold">1</div>
                           <span className="font-dm text-xs sm:text-sm text-zinc-400 leading-relaxed">{t.brief1}</span>
                         </li>
                         <li className="flex items-start gap-3">
                           <div className="w-5 h-5 rounded bg-amber-primary/20 flex items-center justify-center text-amber-primary text-[10px] mt-0.5 border border-amber-primary/30 font-bold">2</div>
                           <span className="font-dm text-xs sm:text-sm text-zinc-400 leading-relaxed">{t.brief2}</span>
                         </li>
                         <li className="flex items-start gap-3">
                           <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-[10px] mt-0.5 border border-emerald-500/30 font-bold">3</div>
                           <span className="font-dm text-xs sm:text-sm text-zinc-400 leading-relaxed">{t.brief3}</span>
                         </li>
                       </ul>
                     </div>
                   </div>
                 )}
               </div>

            </div>

          </div>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-12 max-w-3xl">
          {t.pills.map(pill => (
            <div key={pill} className="bg-white/5 border border-white/10 text-zinc-400 font-jakarta text-xs font-semibold px-4 py-2 rounded-full tracking-wide hover:border-amber-primary/30 hover:text-white transition-colors cursor-default">
              {pill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
