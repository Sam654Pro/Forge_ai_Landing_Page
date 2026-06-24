import { FlameLogo } from './FlameLogo';
import { Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'fr';
}

export function Footer({ lang }: FooterProps) {
  const t = {
    tagline: lang === 'en'
      ? "The AI operations platform built for the restaurant owners doing everything alone."
      : "La plateforme d'IA opérationnelle conçue pour les restaurateurs qui gèrent tout eux-mêmes.",
    
    newsletterTitle: lang === 'en' ? "Get AI business tips weekly" : "Conseils IA pour votre restaurant",
    placeholder: lang === 'en' ? "Enter your email" : "Votre adresse email",
    btnSubscribe: lang === 'en' ? "Subscribe" : "S'abonner",
    
    col1Title: lang === 'en' ? "Platform" : "Plateforme",
    col2Title: lang === 'en' ? "Company" : "Entreprise",
    col3Title: lang === 'en' ? "Resources" : "Ressources",
    col4Title: lang === 'en' ? "Legal" : "Légal",
    
    rights: lang === 'en' ? "© 2026 Forge AI. All rights reserved." : "© 2026 Forge AI. Tous droits réservés.",
    builtFor: lang === 'en' ? "Built with ❤️ for independent restaurateurs" : "Développé avec ❤️ pour les restaurateurs indépendants"
  };

  const col1Links = lang === 'en' 
    ? ["Features", "Engines", "Aria Avatar", "Pricing", "Case Studies"]
    : ["Fonctionnalités", "Moteurs", "Avatar Aria", "Tarifs", "Études de cas"];
    
  const col2Links = lang === 'en'
    ? ["About Us", "Careers", "Blog", "Contact", "Our Story"]
    : ["À propos", "Carrières", "Blog", "Contact", "Notre histoire"];

  const col3Links = lang === 'en'
    ? ["Help Center", "API Documentation", "Community", "Free Tools", "Small Business Guide"]
    : ["Centre d'aide", "Documentation API", "Communauté", "Outils gratuits", "Guide de gestion"];

  const col4Links = lang === 'en'
    ? ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"]
    : ["Politique de confidentialité", "Conditions d'utilisation", "Politique des cookies", "RGPD", "Sécurité"];

  return (
    <footer className="bg-ink-black py-16 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top area */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FlameLogo className="w-8 h-8" />
              <span className="font-syne font-extrabold text-xl text-white tracking-tight ml-1">
                Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-black">AI</span>
              </span>
            </div>
            <p className="font-dm text-sm text-zinc-400 max-w-xs leading-relaxed">
              {t.tagline}
            </p>
          </div>

          <div className="w-full md:w-auto bg-neutral-900 border border-white/10 rounded-2xl p-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-primary/10 blur-3xl rounded-full"></div>
             <p className="font-jakarta font-bold text-xs sm:text-sm text-white mb-2 relative z-10">{t.newsletterTitle}</p>
             <div className="flex gap-2 relative z-10">
                <input 
                  type="email" 
                  placeholder={t.placeholder} 
                  className="bg-neutral-950 border border-white/10 rounded-lg px-4 py-2 font-dm text-xs sm:text-sm text-white outline-none focus:border-amber-primary/50 transition-colors w-full md:w-64"
                />
                <button className="bg-amber-primary text-black font-jakarta font-black text-xs sm:text-sm px-4 py-2 rounded-lg hover:bg-amber-warm transition-colors whitespace-nowrap cursor-pointer">
                  {t.btnSubscribe}
                </button>
             </div>
          </div>

        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-16 border-b border-white/10">
          <Column title={t.col1Title} links={col1Links} />
          <Column title={t.col2Title} links={col2Links} />
          <Column title={t.col3Title} links={col3Links} />
          <Column title={t.col4Title} links={col4Links} />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left border-t border-white/5 mt-8">
          <p className="font-dm text-[11px] sm:text-xs text-zinc-500">{t.rights}</p>
          
          {/* Social Platforms Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-pink-500 transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-blue-500 transition-colors"
              title="Facebook"
            >
              <Facebook className="w-5 h-5 stroke-[1.5]" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-red-500 transition-colors"
              title="YouTube"
            >
              <Youtube className="w-5 h-5 stroke-[1.5]" />
            </a>
          </div>

          <div className="flex items-center gap-4 text-lg select-none">
             🇺🇸 🇬🇧 🇪🇺
          </div>
          <p className="font-dm text-[11px] sm:text-xs text-zinc-500">{t.builtFor}</p>
        </div>

      </div>
    </footer>
  );
}

function Column({ title, links }: { title: string, links: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-jakarta font-bold text-xs sm:text-sm text-white uppercase tracking-wider">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((link, i) => (
          <li key={i}>
            <a href="#" className="font-dm text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
