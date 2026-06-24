import { useIsIntersecting } from '../hooks/useAnimations';
import { 
  HeartHandshake, HeartCrack, MailCheck, Crown, BellOff,
  ChefHat, PackageX, ClipboardList, Trash2, Thermometer,
  Calculator, Tag, TrendingUp, Receipt, CreditCard
} from 'lucide-react';

interface EnginesProps {
  lang: 'en' | 'fr';
}

export function Engines({ lang }: EnginesProps) {
  const t = {
    badge: lang === 'en' ? "Core Features" : "Fonctionnalités principales",
    
    // Engine 1
    e1Badge: lang === 'en' ? "GUEST RETENTION ENGINE" : "FIDÉLISATION DES CLIENTS",
    e1Head: lang === 'en' ? (
      <>
        Keep every guest <br />
        you worked hard <br />
        to acquire.
      </>
    ) : (
      <>
        Conservez chaque client <br />
        que vous avez <br />
        patiemment acquis.
      </>
    ),
    e1Body: lang === 'en' 
      ? "Forge AI monitors customer dining frequencies in real-time. When a guest goes quiet, Aria follows up via WhatsApp automatically. When churn is likely, you win them back before they forget you."
      : "Forge AI surveille la fréquence de visite des clients en temps réel. Lorsqu'un client devient inactif, Aria le contacte automatiquement via WhatsApp. En cas de risque de départ, vous le reconquérez avant qu'il ne vous oublie.",
    e1F1: lang === 'en' ? "Guest churn prediction before they forget you" : "Prédiction du désabonnement des clients avant qu'ils ne vous oublient",
    e1F2: lang === 'en' ? "AI-powered follow-ups & win-back messages via WhatsApp" : "Relances et messages de reconquête automatisés par IA via WhatsApp",
    e1F3: lang === 'en' ? "Guest loyalty & health score (0-100)" : "Score de fidélité et de satisfaction client (0-100)",
    e1F4: lang === 'en' ? "VIP guest dining alert to kitchen" : "Alerte cuisine pour les clients VIP",
    e1F5: lang === 'en' ? "Silent guest notifications & trigger list" : "Notifications discrètes et liste de déclenchement",
    e1Callout: lang === 'en'
      ? "Restaurants using Forge AI retain 94% of first-time guests vs 67% industry average."
      : "Les restaurants utilisant Forge AI fidélisent 94 % de leurs nouveaux clients, contre 67 % en moyenne dans le secteur.",

    // Engine 2
    e2Badge: lang === 'en' ? "KITCHEN & STOCK SENSE" : "GESTION DES STOCKS ET DE LA CUISINE",
    e2Head: lang === 'en' ? (
      <>
        Never lose a cover <br />
        because you ran out <br />
        of key ingredients.
      </>
    ) : (
      <>
        Ne perdez plus jamais un couvert <br />
        faute d'ingrédients <br />
        essentiels.
      </>
    ),
    e2Body: lang === 'en'
      ? "StockSense predicts dish popularity and stock depletion. Cash-aware supplier recommendations mean you never overorder perishables and bleed food waste."
      : "StockSense prédit la popularité des plats et l'épuisement des stocks. Grâce aux recommandations fournisseurs optimisées pour votre trésorerie, vous évitez les surcommandes de produits périssables et le gaspillage alimentaire.",
    e2F1: lang === 'en' ? "AI dish & ingredient demand forecasting" : "Prévisions de la demande pour les plats et les ingrédients (IA)",
    e2F2: lang === 'en' ? "Portion drift & food waste tracking" : "Suivi des variations de portions et du gaspillage alimentaire",
    e2F3: lang === 'en' ? "One-click supplier reorder suggestions" : "Suggestions de réapprovisionnement en un clic",
    e2F4: lang === 'en' ? "Stock running low alerts for high-margin dishes" : "Alertes de stock faible pour les plats à forte marge",
    e2F5: lang === 'en' ? "Ingredient shelf-life & spoilage alerts" : "Alertes de durée de conservation et de détérioration des ingrédients",
    e2Callout: lang === 'en'
      ? "Reduce food waste by 18% and avoid costly recipe stockouts during busy service hours."
      : "Réduisez le gaspillage alimentaire de 18 % et évitez les ruptures de stock coûteuses pendant les heures de pointe.",

    // Engine 3
    e3Badge: lang === 'en' ? "FOOD COST INTELLIGENCE" : "ANALYSE DES COÛTS ALIMENTAIRES",
    e3Head: lang === 'en' ? (
      <>
        Stop bleeding profit <br />
        you don't know <br />
        you're losing.
      </>
    ) : (
      <>
        Cessez de perdre de l'argent <br />
        sans vous en <br />
        rendre compte.
      </>
    ),
    e3Body: lang === 'en'
      ? "CostGuard acts as your virtual restaurant financial auditor. It flags supplier price creep, portion drifts, and subscription leaks before they destroy your margins."
      : "CostGuard agit comme votre auditeur financier virtuel pour votre restaurant. Il signale les hausses de prix des fournisseurs, les variations de portions et les fuites d'abonnements avant qu'elles n'affectent vos marges.",
    e3F1: lang === 'en' ? "Automatic recipe food cost % calculation" : "Calcul automatique du coût des ingrédients en pourcentage des recettes",
    e3F2: lang === 'en' ? "Audit supplier pricing creep live" : "Vérification en temps réel des hausses de prix des fournisseurs",
    e3F3: lang === 'en' ? "Flag portion cost drift on active shifts" : "Signalement les variations de coût des portions pendant les services",
    e3F4: lang === 'en' ? "Daily restaurant P&L summary" : "Résumé quotidien du compte de résultat du restaurant",
    e3F5: lang === 'en' ? "Discover and cancel ghost subscriptions" : "Détection et résiliation des abonnements fantômes",
    e3Callout: lang === 'en'
      ? "Average independent restaurants find €340 in monthly losses in their first week."
      : "En moyenne, les restaurants indépendants constatent 340 € de pertes mensuelles dès leur première semaine."
  };

  return (
    <section id="features" className="bg-cream-white py-20 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <p className="font-jakarta font-semibold text-[11px] tracking-[3px] text-zinc-500 mb-16 uppercase text-center">
          {t.badge}
        </p>

        {/* Engine 1: RetainFlow */}
        <EngineSection 
          badgeColor="text-amber-primary"
          badgeBg="bg-amber-500/10 border border-amber-500/20"
          badgeText={t.e1Badge}
          headline={t.e1Head}
          body={t.e1Body}
          features={[
            { text: t.e1F1, icon: HeartCrack },
            { text: t.e1F2, icon: MailCheck },
            { text: t.e1F3, icon: HeartHandshake },
            { text: t.e1F4, icon: Crown },
            { text: t.e1F5, icon: BellOff }
          ]}
          callout={t.e1Callout}
          imagePlaceholderBg="bg-amber-500/5"
          imagePlaceholderBorder="border-amber-primary/20"
          reverse={false}
        />

        {/* Engine 2: StockSense */}
        <EngineSection 
          badgeColor="text-emerald-400"
          badgeBg="bg-emerald-500/10 border border-emerald-500/20"
          badgeText={t.e2Badge}
          headline={t.e2Head}
          body={t.e2Body}
          features={[
            { text: t.e2F1, icon: ChefHat },
            { text: t.e2F2, icon: Trash2 },
            { text: t.e2F3, icon: ClipboardList },
            { text: t.e2F4, icon: PackageX },
            { text: t.e2F5, icon: Thermometer }
          ]}
          callout={t.e2Callout}
          imagePlaceholderBg="bg-emerald-500/5"
          imagePlaceholderBorder="border-emerald-custom/20"
          reverse={true}
        />

        {/* Engine 3: CostGuard */}
        <EngineSection 
          badgeColor="text-blue-400"
          badgeBg="bg-blue-500/10 border border-blue-500/20"
          badgeText={t.e3Badge}
          headline={t.e3Head}
          body={t.e3Body}
          features={[
            { text: t.e3F1, icon: Calculator },
            { text: t.e3F2, icon: Tag },
            { text: t.e3F3, icon: TrendingUp },
            { text: t.e3F4, icon: Receipt },
            { text: t.e3F5, icon: CreditCard }
          ]}
          callout={t.e3Callout}
          imagePlaceholderBg="bg-blue-500/5"
          imagePlaceholderBorder="border-blue-500/20"
          reverse={false}
        />

      </div>
    </section>
  );
}

function EngineSection({ badgeColor, badgeBg, badgeText, headline, body, features, callout, reverse, imagePlaceholderBg, imagePlaceholderBorder }: any) {
  const { ref, isIntersecting } = useIsIntersecting({ threshold: 0.15 });

  return (
    <div ref={ref} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 lg:gap-24 mb-28 ${isIntersecting ? 'reveal visible' : 'reveal'}`}>
      
      {/* Text Side */}
      <div className="flex-1 w-full">
        <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-jakarta font-bold tracking-wider uppercase mb-6 ${badgeBg} ${badgeColor}`}>
          {badgeText}
        </div>
        
        {/* Adjusted headline sizes to be extremely professional and not too large */}
        <h3 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink-black leading-[1.1] mb-6">
          {headline}
        </h3>
        
        <p className="font-dm text-sm sm:text-base text-zinc-400 leading-[1.6] mb-8 max-w-[500px]">
          {body}
        </p>

        <ul className="space-y-4 mb-10">
          {features.map((item: any, i: number) => {
            const IconComponent = item.icon;
            return (
              <li key={i} className="flex items-start gap-3">
                <div className={`p-1 rounded-md ${badgeBg} ${badgeColor} flex-shrink-0 mt-0.5`}>
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span className="font-dm text-sm sm:text-[15px] text-zinc-200">{item.text}</span>
              </li>
            );
          })}
        </ul>

        {callout && (
          <div className="border-l-4 border-amber-primary bg-amber-500/5 border border-white/5 p-4 rounded-r-lg max-w-[500px]">
            <p className="font-dm text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
              {callout}
            </p>
          </div>
        )}
      </div>

      {/* Visual Side (Abstract premium dark glass representation) */}
      <div className="flex-1 w-full relative">
        <div className="w-full aspect-square md:aspect-[4/3] rounded-[24px] border border-white/10 shadow-2xl overflow-hidden bg-neutral-950 relative top-0 hover:-top-2 transition-all duration-500">
          <div className="h-10 border-b border-white/5 bg-neutral-900 flex items-center px-4 gap-2">
             <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
          </div>
          <div className={`w-full h-full p-8 ${imagePlaceholderBg}`}>
             {/* Abstract UI composition in gorgeous dark glassmorphism */}
             <div className={`w-2/3 h-12 bg-neutral-900 rounded-lg border ${imagePlaceholderBorder} shadow-sm mb-4`}></div>
             <div className={`w-full h-24 bg-neutral-900/60 rounded-lg border ${imagePlaceholderBorder} mb-4 flex p-4 gap-4`}>
                <div className="w-12 h-12 rounded-full bg-white/5"></div>
                <div className="flex-1">
                   <div className="w-1/2 h-3 bg-white/10 rounded mb-2"></div>
                   <div className="w-3/4 h-2 bg-white/5 rounded"></div>
                </div>
             </div>
             <div className={`w-1/2 h-40 bg-neutral-900 rounded-lg border ${imagePlaceholderBorder} shadow-sm relative left-1/3 top-[-20px]`}></div>
          </div>
        </div>
      </div>

    </div>
  );
}
