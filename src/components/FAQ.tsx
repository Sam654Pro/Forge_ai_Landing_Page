import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  lang: 'en' | 'fr';
}

export function FAQ({ lang }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = lang === 'en' ? [
    {
      question: "Do I need to be technical to use this?",
      answer: "No. If you can use WhatsApp, you can use Forge AI. Setup takes under 5 minutes and we walk you through everything personally when you sign up."
    },
    {
      question: "What happens after my 3-day trial ends?",
      answer: "You choose a plan or you don't — no automatic charge, no card required during the trial. We'll remind you before it ends."
    },
    {
      question: "Does it work for my WhatsApp number?",
      answer: "WhatsApp automation is coming soon — join the waitlist above. In the meantime the platform works fully for tracking customers, managing stock, and monitoring costs."
    },
    {
      question: "Will it work in French?",
      answer: "Yes. The platform works fully in French and English. Aria can communicate with your customers in whichever language they message in."
    },
    {
      question: "What if I run more than one restaurant?",
      answer: "The Business plan supports multiple locations. Each location gets its own dashboard, and you can switch between them from one login."
    },
    {
      question: "Is my customer data safe?",
      answer: "Yes. All data is stored securely and GDPR compliant — essential for any business operating in France or the EU. You can export or delete your data at any time."
    }
  ] : [
    {
      question: "Dois-je avoir des compétences techniques ?",
      answer: "Non. Si vous savez utiliser WhatsApp, vous pouvez utiliser Forge AI. L'installation prend moins de 5 minutes et nous vous accompagnons personnellement lors de votre inscription."
    },
    {
      question: "Que se passe-t-il après la fin de mon essai gratuit ?",
      answer: "Vous choisissez de vous abonner ou non. Aucun prélèvement automatique, aucune carte de crédit n'est requise pour l'essai. Nous vous enverrons un rappel avant la fin."
    },
    {
      question: "Est-ce que cela fonctionne sur mon numéro WhatsApp ?",
      answer: "L'automatisation de WhatsApp arrive très bientôt — rejoignez la liste d'attente ci-dessus. En attendant, la plateforme est pleinement opérationnelle pour le suivi des clients, des stocks et de vos marges."
    },
    {
      question: "Est-ce que l'application est en français ?",
      answer: "Oui. La plateforme est entièrement disponible en français et en anglais. Aria communique avec vos clients dans la langue de leur choix."
    },
    {
      question: "Que se passe-t-il si je gère plusieurs restaurants ?",
      answer: "Le plan Business prend en charge la gestion multi-établissements. Chaque restaurant a son propre tableau de bord et vous pouvez passer de l'un à l'autre en un clic."
    },
    {
      question: "Mes données de clients sont-elles sécurisées ?",
      answer: "Oui. Toutes vos données sont stockées de manière sécurisée et sont 100% conformes au RGPD, ce qui est indispensable pour tout établissement en Europe. Vous pouvez exporter ou supprimer vos données à tout moment."
    }
  ];

  const t = {
    badge: "FAQ",
    h2Line1: lang === 'en' ? "Questions from" : "Des questions de",
    h2Line2: lang === 'en' ? "restaurant owners" : "restaurateurs",
  };

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-cream-white py-20 px-4 border-t border-white/10" id="faq">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Label */}
        <p className="font-jakarta font-semibold text-[11px] tracking-[3px] text-amber-primary mb-6 uppercase text-center">
          {t.badge}
        </p>

        {/* Section Headline */}
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white text-center leading-tight mb-16">
          {t.h2Line1} <span className="text-amber-primary block md:inline">{t.h2Line2}</span>
        </h2>

        {/* FAQ Items list */}
        <div className="w-full flex flex-col gap-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-neutral-900/60 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-amber-primary/30"
              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-5 h-5 text-amber-primary/60 group-hover:text-amber-primary transition-colors duration-200 flex-shrink-0" />
                    <span className="font-syne font-bold text-base md:text-lg text-white group-hover:text-amber-primary transition-colors duration-200">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-zinc-500 group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t border-white/5 font-dm text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
