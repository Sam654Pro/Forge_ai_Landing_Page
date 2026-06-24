import { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton';
import { Menu, X, ChevronRight, Globe, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FlameLogo } from './FlameLogo';

interface NavigationProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export function Navigation({ lang, setLang }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = lang === 'en' ? [
    { label: 'Core Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Coming Soon', href: '#coming-soon' }
  ] : [
    { label: 'Fonctionnalités principales', href: '#features' },
    { label: 'Fonctionnement', href: '#how-it-works' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'Bientôt disponible', href: '#coming-soon' }
  ];

  const t = {
    banner: lang === 'en' 
      ? "🚀 Coming soon: WhatsApp automation, Instagram & Facebook messaging integration — Join the waitlist for early access →"
      : "🚀 Prochainement : Automatisation WhatsApp, intégration des messageries Instagram et Facebook — Inscrivez-vous sur la liste d'attente pour un accès anticipé →",
    signIn: lang === 'en' ? "Sign In" : "Se connecter",
    trial: lang === 'en' ? "Start Free Trial" : "Essai gratuit",
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full">
        {/* Announcement Banner */}
        <AnimatePresence>
          {bannerVisible && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-black py-2.5 px-6 flex items-center justify-between text-xs md:text-sm font-jakarta font-bold relative border-b border-white/10"
            >
              <a href="#coming-soon" className="mx-auto hover:underline flex items-center gap-1.5 text-center">
                <span>{t.banner}</span>
              </a>
              <button 
                onClick={() => setBannerVisible(false)}
                className="p-1 hover:bg-black/10 rounded absolute right-4 top-1/2 -translate-y-1/2 transition-colors cursor-pointer"
                aria-label="Dismiss banner"
              >
                <X className="w-4 h-4 text-black" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navbar */}
        <nav className={`transition-all duration-300 h-[72px] flex items-center ${scrolled ? 'bg-cream-white/90 backdrop-blur-xl border-b border-cream-border' : 'bg-transparent'}`}>
          <div className="w-full max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
            
            {/* Logo Group */}
            <div className="flex items-center gap-2">
              <FlameLogo className="w-9 h-9" />
              <span className="font-syne font-extrabold text-xl text-ink-black tracking-tight ml-1">
                Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 font-black">AI</span>
              </span>
            </div>

            {/* Desktop Links (Hidden on mobile) */}
            <div className="hidden lg:flex items-center gap-10 font-jakarta font-medium text-[15px] text-ink-medium">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="relative group">
                  <span className="group-hover:text-amber-primary transition-colors duration-200 block group-hover:scale-102">{link.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Action Group */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Switcher */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 rounded-full text-xs font-bold font-jakarta transition-all duration-300 ${lang === 'en' ? 'bg-amber-primary text-black' : 'text-white/60 hover:text-white'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('fr')}
                  className={`px-3 py-1 rounded-full text-xs font-bold font-jakarta transition-all duration-300 ${lang === 'fr' ? 'bg-amber-primary text-black' : 'text-white/60 hover:text-white'}`}
                >
                  FR
                </button>
              </div>

              <button className="font-jakarta font-medium text-[15px] text-ink-medium hover:text-amber-primary transition-colors">
                {t.signIn}
              </button>
              <MagneticButton 
                href="https://remix-forge-ai-184760636045.europe-west2.run.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-grad-amber text-black font-jakarta font-extrabold text-[15px] px-6 py-3 rounded-xl shadow-[0_0_40px_rgba(245,158,11,0.25)] hover:shadow-[0_0_50px_rgba(245,158,11,0.4)] group flex items-center gap-2"
              >
                {t.trial}
                <ChevronRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </MagneticButton>
            </div>

            {/* Mobile Action/Menu Row */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Language Switcher for Mobile */}
              <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5">
                <button 
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold font-jakarta transition-all duration-300 ${lang === 'en' ? 'bg-amber-primary text-black' : 'text-white/60'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('fr')}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold font-jakarta transition-all duration-300 ${lang === 'fr' ? 'bg-amber-primary text-black' : 'text-white/60'}`}
                >
                  FR
                </button>
              </div>
              
              <button className="p-2" onClick={() => setMobileOpen(true)}>
                <Menu className="w-6 h-6 text-ink-black" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-deep z-[100] flex flex-col p-6"
          >
            <div className="flex justify-between items-center h-[72px]">
              <div className="flex items-center gap-2">
                <FlameLogo className="w-8 h-8" />
                <span className="font-syne font-extrabold text-xl text-white tracking-tight ml-1">
                  Forge <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-black">AI</span>
                </span>
              </div>
              <button className="p-2" onClick={() => setMobileOpen(false)}>
                <X className="w-8 h-8 text-white" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center gap-6 px-4">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="font-syne font-bold text-3xl text-white hover:text-amber-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pb-12 w-full flex flex-col gap-4">
              <button className="w-full bg-white/5 border border-white/10 text-white font-jakarta font-bold text-base py-3.5 rounded-xl">
                {t.signIn}
              </button>
              <a 
                href="https://remix-forge-ai-184760636045.europe-west2.run.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-grad-amber text-black font-jakarta font-bold text-base py-3.5 rounded-xl text-center block"
              >
                {t.trial}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
