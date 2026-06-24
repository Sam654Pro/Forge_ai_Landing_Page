import { useIsIntersecting, useCounter } from '../hooks/useAnimations';

interface MetricsProps {
  lang: 'en' | 'fr';
}

export function Metrics({ lang }: MetricsProps) {
  const { ref, isIntersecting } = useIsIntersecting({ threshold: 0.5 });
  
  const retCounter = useCounter(94, 2000, isIntersecting);
  const savCounter = useCounter(340, 2000, isIntersecting);
  const stockCounter = useCounter(0, 1000, isIntersecting);
  const timeCounter = useCounter(5, 1500, isIntersecting);

  const t = {
    m1Label: lang === 'en' ? "Customer Retention Rate" : "Taux de fidélisation client",
    m1Sub: lang === 'en' ? "vs 67% industry avg" : "contre 67 % de moyenne nationale",
    
    m2Value: lang === 'en' ? `€${savCounter}` : `${savCounter} €`,
    m2Label: lang === 'en' ? "Average Monthly Cost Recovered" : "Économie mensuelle moyenne",
    m2Sub: lang === 'en' ? "from profit leak detection" : "grâce à la détection des pertes",
    
    m3Label: lang === 'en' ? "Recent Stockouts" : "Ruptures de stock récentes",
    m3Sub: lang === 'en' ? "for active users in 30 days" : "pour les restaurateurs actifs",
    
    m4Label: lang === 'en' ? "Minutes Daily to Run Operations" : "Minutes par jour de gestion",
    m4Sub: lang === 'en' ? "average time spent on tasks" : "temps moyen consacré aux tâches",
    
    note: lang === 'en' 
      ? "Based on beta users across 15 countries"
      : "Données basées sur nos utilisateurs bêta dans 15 pays"
  };

  return (
    <section className="bg-ink-black py-20 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
          
          {/* Decorative lines */}
          <div className="hidden lg:block absolute left-[25%] top-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="hidden lg:block absolute left-[50%] top-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="hidden lg:block absolute left-[75%] top-4 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          <MetricItem 
             value={`${retCounter}%`}
             label={t.m1Label}
             sub={t.m1Sub}
          />
          <MetricItem 
             value={t.m2Value}
             label={t.m2Label}
             sub={t.m2Sub}
          />
          <MetricItem 
             value={`${stockCounter}`}
             label={t.m3Label}
             sub={t.m3Sub}
          />
          <MetricItem 
             value={`${timeCounter}`}
             label={t.m4Label}
             sub={t.m4Sub}
          />
        </div>

        <p className="text-center font-dm text-[11px] text-amber-primary/70 mt-16 uppercase tracking-wider font-semibold">
          {t.note}
        </p>
      </div>
    </section>
  );
}

function MetricItem({ value, label, sub }: { value: string, label: string, sub: string }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
       <span className="font-geist font-extrabold text-5xl lg:text-6xl text-amber-primary leading-none mb-4 block">
         {value}
       </span>
       <span className="font-jakarta font-bold text-sm text-white mb-2 max-w-[200px]">{label}</span>
       <span className="font-dm text-xs text-zinc-400 bg-white/5 px-3 py-1 rounded-full">{sub}</span>
    </div>
  );
}
