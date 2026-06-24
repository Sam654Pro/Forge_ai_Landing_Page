import { useState, ReactNode, FormEvent } from 'react';
import { MessageSquare, Instagram, Facebook, Calendar, Receipt, Truck, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MagneticButton } from './MagneticButton';

interface FeatureCardProps {
  icon: ReactNode;
  iconBg: string;
  status: 'In development' | 'Planned' | 'Roadmap' | 'En développement' | 'Planifié' | 'Feuille de route';
  title: string;
  description: string;
  eta: string;
}

interface ComingSoonProps {
  lang: 'en' | 'fr';
}

export function ComingSoon({ lang }: ComingSoonProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const t = {
    badge: lang === 'en' ? "What's coming next" : "Bientôt disponible",
    title1: lang === 'en' ? "The platform keeps growing" : "La plateforme s'enrichit",
    title2: lang === 'en' ? "— here's what's next" : "— voici nos prochains lancements",
    sub: lang === 'en'
      ? "Core features are live now. These are launching soon — join the waitlist to get early access when they do."
      : "Les fonctionnalités principales sont déjà disponibles. Ces nouveautés arrivent bientôt — rejoignez la liste d'attente pour y accéder en avant-première.",
    
    waitlistTitle: lang === 'en' ? "Want early access when these launch?" : "Accéder à la liste d'attente ?",
    waitlistSub: lang === 'en'
      ? "Get notified the exact minute we release these restaurant operational tools."
      : "Soyez informé dès que ces nouveaux outils opérationnels pour votre restaurant sont en ligne.",
    placeholder: lang === 'en' ? "Enter your email address" : "Entrez votre adresse email",
    btnJoin: lang === 'en' ? "Join the waitlist" : "Rejoindre la liste d'attente",
    successTitle: lang === 'en' ? "You are on the list!" : "Vous êtes inscrit !",
    successSub: lang === 'en' ? "We'll email you once development completes." : "Nous vous enverrons un email dès que le développement sera terminé.",
    footerNote: lang === 'en'
      ? "No spam. One email when your requested feature goes live."
      : "Pas de spam. Un seul email dès que la fonctionnalité est disponible.",
  };

  const features: FeatureCardProps[] = lang === 'en' ? [
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      status: 'In development',
      title: 'WhatsApp Business Automation',
      description: 'Send win-back messages, refill reminders, and booking confirmations automatically. Owner approves before anything sends.',
      eta: 'Coming Q3 2025'
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      iconBg: 'bg-pink-500/10 border-pink-500/20',
      status: 'In development',
      title: 'Instagram DM Integration',
      description: 'Manage all your Instagram customer messages in one unified inbox alongside email — no switching apps.',
      eta: 'Coming Q3 2025'
    },
    {
      icon: <Facebook className="w-6 h-6 text-blue-500" />,
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      status: 'Planned',
      title: 'Facebook Messenger',
      description: 'Connect your Facebook page and handle all customer messages from a single conversations hub.',
      eta: 'Coming Q4 2025'
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      iconBg: 'bg-orange-500/10 border-orange-500/20',
      status: 'Planned',
      title: 'Table & Reservation Management',
      description: 'Full booking calendar, no-show tracking, automatic confirmation messages, and TheFork integration.',
      eta: 'Coming Q4 2025'
    },
    {
      icon: <Receipt className="w-6 h-6 text-amber-primary" />,
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      status: 'Roadmap',
      title: 'POS Integration',
      description: "Connect Lightspeed, Zelty, and L'Addition — your sales data automatically updates stock levels and customer records.",
      eta: 'Coming 2026'
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-400" />,
      iconBg: 'bg-blue-400/10 border-blue-400/20',
      status: 'Roadmap',
      title: 'Delivery Platform Tracking',
      description: 'See your real margin after Uber Eats and Deliveroo commissions. All revenue sources in one dashboard.',
      eta: 'Coming 2026'
    }
  ] : [
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" />,
      iconBg: 'bg-emerald-500/10 border-emerald-500/20',
      status: 'En développement',
      title: 'Automatisation WhatsApp',
      description: 'Envoyez des relances de fidélisation, des rappels de stocks et des confirmations de réservation de manière automatisée.',
      eta: 'Prévu pour le T3 2025'
    },
    {
      icon: <Instagram className="w-6 h-6 text-pink-500" />,
      iconBg: 'bg-pink-500/10 border-pink-500/20',
      status: 'En développement',
      title: 'Messagerie Instagram',
      description: 'Gérez tous les messages de vos clients sur Instagram directement depuis une boîte de réception unifiée.',
      eta: 'Prévu pour le T3 2025'
    },
    {
      icon: <Facebook className="w-6 h-6 text-blue-500" />,
      iconBg: 'bg-blue-500/10 border-blue-500/20',
      status: 'Planifié',
      title: 'Messagerie Facebook',
      description: "Connectez votre page Facebook et gérez tous les messages de vos clients à partir d'un seul hub centralisé.",
      eta: 'Prévu pour le T4 2025'
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-500" />,
      iconBg: 'bg-orange-500/10 border-orange-500/20',
      status: 'Planifié',
      title: 'Réservations et tables',
      description: 'Calendrier complet de réservations, suivi des absences, confirmation automatique et intégration avec TheFork.',
      eta: 'Prévu pour le T4 2025'
    },
    {
      icon: <Receipt className="w-6 h-6 text-amber-primary" />,
      iconBg: 'bg-amber-500/10 border-amber-500/20',
      status: 'Feuille de route',
      title: 'Intégrations caisse (POS)',
      description: "Connectez Lightspeed, Zelty ou l'Addition pour synchroniser automatiquement vos ventes avec vos stocks.",
      eta: 'Prévu pour 2026'
    },
    {
      icon: <Truck className="w-6 h-6 text-blue-400" />,
      iconBg: 'bg-blue-400/10 border-blue-400/20',
      status: 'Feuille de route',
      title: 'Suivi des plateformes',
      description: 'Calculez votre marge réelle après déduction des commissions Uber Eats et Deliveroo sur un seul écran.',
      eta: 'Prévu pour 2026'
    }
  ];

  return (
    <section className="bg-cream-light py-20 px-4 border-t border-b border-cream-border" id="coming-soon">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Section Label */}
        <p className="font-jakarta font-semibold text-[11px] tracking-[3px] text-amber-primary mb-6 uppercase text-center">
          {t.badge}
        </p>

        {/* Headline scaled down for professional precision */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-ink-black text-center leading-tight mb-4 max-w-4xl text-balance">
          {t.title1} <span className="text-amber-primary block md:inline">{t.title2}</span>
        </h2>

        {/* Subheadline */}
        <p className="font-dm text-sm sm:text-base text-zinc-400 text-center mb-16 max-w-2xl text-balance">
          {t.sub}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-16">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-neutral-900/60 border border-white/10 p-8 rounded-2xl transition-all duration-300 hover:border-amber-primary/40 group flex flex-col h-full relative"
            >
              {/* Status Badge */}
              <div className="absolute top-6 right-6">
                <StatusBadge status={feature.status} />
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-full border ${feature.iconBg} flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300`}>
                {feature.icon}
              </div>

              {/* Title & ETA */}
              <h3 className="font-syne font-bold text-lg text-white mb-1 group-hover:text-amber-primary transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="font-geist text-[10px] font-bold text-amber-primary mb-4 uppercase tracking-wider">{feature.eta}</p>

              {/* Description */}
              <p className="font-dm text-xs sm:text-sm text-zinc-400 leading-relaxed mt-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Waitlist Signup */}
        <div className="w-full max-w-2xl bg-neutral-900 border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden text-center flex flex-col items-center">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-primary/5 blur-3xl rounded-full"></div>
          
          <h4 className="font-syne font-bold text-xl text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-primary animate-pulse" />
            {t.waitlistTitle}
          </h4>
          <p className="font-dm text-xs sm:text-sm text-zinc-400 mb-6">
            {t.waitlistSub}
          </p>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md relative z-10"
              >
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.placeholder}
                  className="bg-neutral-950 border border-white/10 rounded-xl px-4 py-3.5 font-dm text-sm text-white outline-none focus:border-amber-primary/50 transition-colors w-full"
                />
                <MagneticButton className="bg-amber-primary text-black font-jakarta font-black text-sm px-6 py-3.5 rounded-xl hover:bg-amber-warm transition-colors whitespace-nowrap cursor-pointer">
                  {t.btnJoin}
                </MagneticButton>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/30 py-4 px-6 rounded-xl flex items-center gap-3 max-w-md relative z-10 text-emerald-400"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-black">
                  <Check className="w-4 h-4 font-black" />
                </div>
                <div className="text-left">
                  <p className="font-jakarta font-bold text-sm text-white">{t.successTitle}</p>
                  <p className="font-dm text-xs text-zinc-400">{t.successSub}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="font-dm text-[11px] text-zinc-500 mt-4">
            {t.footerNote}
          </p>
        </div>

      </div>
    </section>
  );
}

function StatusBadge({ status }: { status: string }) {
  let styles = '';
  switch (status) {
    case 'In development':
    case 'En développement':
      styles = 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400';
      break;
    case 'Planned':
    case 'Planifié':
      styles = 'bg-amber-primary/10 border-amber-primary/20 text-amber-primary';
      break;
    case 'Roadmap':
    case 'Feuille de route':
      styles = 'bg-white/5 border-white/10 text-zinc-500';
      break;
  }

  return (
    <span className={`text-[9px] font-geist font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${styles}`}>
      {status}
    </span>
  );
}
