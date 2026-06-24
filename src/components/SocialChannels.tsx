import { Instagram, Facebook, Youtube, ArrowUpRight, ShieldCheck, Heart, Sparkles, Tv, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useIsIntersecting } from '../hooks/useAnimations';

interface SocialChannelsProps {
  lang: 'en' | 'fr';
}

export function SocialChannels({ lang }: SocialChannelsProps) {
  const { ref, isIntersecting } = useIsIntersecting();

  const t = {
    badge: lang === 'en' ? "Connect With Us" : "Rejoignez-nous",
    h2Line1: lang === 'en' ? "Join the Forge AI community." : "Rejoignez la communauté Forge AI.",
    h2Line2: lang === 'en' ? "Real advice. No fluff." : "De vrais conseils. Zéro blabla.",
    sub: lang === 'en'
      ? "Follow our journeys, get real-time kitchen operational tips, and see how independent owners are reclaiming their free time with AI."
      : "Suivez nos aventures, recevez des conseils en temps réel et découvrez comment les restaurateurs indépendants retrouvent du temps libre grâce à l'IA.",
    
    visitBtn: lang === 'en' ? "Visit Page" : "Visiter",
    youtubeTitle: "YouTube",
    youtubeSub: lang === 'en' ? "Weekly Video Guides" : "Guides vidéos hebdomadaires",
    youtubeDesc: lang === 'en'
      ? "Recipe costing tutorials, live automation setups, and interviews with successful restaurateurs."
      : "Tutoriels sur le coût des recettes, configurations en direct et interviews de restaurateurs.",
    youtubeStats: "14.2K",
    youtubeLabel: lang === 'en' ? "Subscribers" : "Abonnés",

    instagramTitle: "Instagram",
    instagramSub: lang === 'en' ? "Behind The Scenes" : "Dans les coulisses",
    instagramDesc: lang === 'en'
      ? "Quick daily tips, kitchen hacks, motivational stories, and interactive Q&As with our engineering team."
      : "Conseils quotidiens, astuces en cuisine, récits inspirants et sessions de questions-réponses.",
    instagramStats: "28.5K",
    instagramLabel: lang === 'en' ? "Followers" : "Abonnés",

    facebookTitle: "Facebook",
    facebookSub: lang === 'en' ? "Restaurateur Groups" : "Groupes de restaurateurs",
    facebookDesc: lang === 'en'
      ? "A private network of 8,000+ restaurant owners exchanging menu advice, supplier lists, and tactics."
      : "Un réseau privé de plus de 8 000 propriétaires partageant des conseils, fournisseurs et tactiques.",
    facebookStats: "8.9K",
    facebookLabel: lang === 'en' ? "Community Members" : "Membres de la communauté",
    
    verified: lang === 'en' ? "Verified Account" : "Compte vérifié",
    featuredPost: lang === 'en' ? "Featured Story" : "À la une",
    postText1: lang === 'en' ? "How Chef Marc saved 18 hours per week with smart menu optimization." : "Comment le Chef Marc a économisé 18h par semaine en optimisant sa carte.",
    postText2: lang === 'en' ? "New Guide: The Exact Checklist to Stop Profit Leaks in Independent Bistros." : "Nouveau guide : La checklist ultime pour stopper les pertes financières.",
    postText3: lang === 'en' ? "Watch: Aria answering customer queries live in French & English." : "En vidéo : Aria répondant aux clients en direct en français et anglais."
  };

  return (
    <section className="bg-ink-deep py-24 px-4 relative overflow-hidden border-t border-white/5" id="community">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-6">
            <span className="font-jakarta font-black text-[11px] tracking-[3px] text-amber-primary uppercase">
              {t.badge}
            </span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl md:text-5xl text-white mb-4 leading-tight">
            {t.h2Line1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-black">
              {t.h2Line2}
            </span>
          </h2>
          <p className="font-dm text-sm sm:text-base text-zinc-400 max-w-2xl text-balance mt-2">
            {t.sub}
          </p>
        </div>

        {/* High-fidelity Bento Grid of Social Platforms */}
        <div 
          ref={ref} 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform-style-3d transition-all duration-1000 ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
        >
          {/* YouTube Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-[28px] p-8 flex flex-col justify-between group hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 blur-2xl rounded-full group-hover:bg-red-600/10 transition-colors duration-300"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-red-600/15 border border-red-500/20 flex items-center justify-center text-red-500">
                    <Youtube className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white group-hover:text-red-400 transition-colors duration-200">
                      {t.youtubeTitle}
                    </h3>
                    <p className="font-geist text-[10px] font-bold text-red-500 uppercase tracking-wider">
                      {t.youtubeSub}
                    </p>
                  </div>
                </div>
                
                <span className="flex items-center gap-1.5 bg-neutral-950 border border-white/5 px-2.5 py-1 rounded-full text-[10px] text-zinc-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                  {t.verified}
                </span>
              </div>

              {/* Description */}
              <p className="font-dm text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {t.youtubeDesc}
              </p>

              {/* Live Preview Snippet (Mini Mock Widget) */}
              <div className="bg-neutral-950 border border-white/5 rounded-2xl p-4 mb-8">
                <p className="font-geist text-[9px] font-bold text-red-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Tv className="w-3 h-3" />
                  {t.featuredPost}
                </p>
                <p className="font-dm text-xs text-white/90 font-medium leading-normal mb-1">
                  {t.postText3}
                </p>
                <span className="font-dm text-[10px] text-zinc-500">2.1K views • 2 days ago</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="font-geist font-bold text-lg text-white leading-none">{t.youtubeStats}</span>
                <span className="font-dm text-[10px] text-zinc-500">{t.youtubeLabel}</span>
              </div>
              
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-red-600 hover:bg-red-500 text-white font-jakarta font-black text-xs px-5 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                {t.visitBtn}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Instagram Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-[28px] p-8 flex flex-col justify-between group hover:border-pink-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 blur-2xl rounded-full group-hover:bg-pink-500/10 transition-colors duration-300"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-yellow-500/10 via-pink-500/10 to-purple-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500">
                    <Instagram className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white group-hover:text-pink-400 transition-colors duration-200">
                      {t.instagramTitle}
                    </h3>
                    <p className="font-geist text-[10px] font-bold text-pink-500 uppercase tracking-wider">
                      {t.instagramSub}
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 bg-neutral-950 border border-white/5 px-2.5 py-1 rounded-full text-[10px] text-zinc-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-pink-500" />
                  {t.verified}
                </span>
              </div>

              {/* Description */}
              <p className="font-dm text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {t.instagramDesc}
              </p>

              {/* Live Preview Snippet (Mini Mock Widget) */}
              <div className="bg-neutral-950 border border-white/5 rounded-2xl p-4 mb-8">
                <p className="font-geist text-[9px] font-bold text-pink-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  {t.featuredPost}
                </p>
                <p className="font-dm text-xs text-white/90 font-medium leading-normal mb-1">
                  {t.postText1}
                </p>
                <span className="font-dm text-[10px] text-zinc-500 flex items-center gap-1">
                  <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                  542 likes • 5 hours ago
                </span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="font-geist font-bold text-lg text-white leading-none">{t.instagramStats}</span>
                <span className="font-dm text-[10px] text-zinc-500">{t.instagramLabel}</span>
              </div>
              
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-jakarta font-black text-xs px-5 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                {t.visitBtn}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="bg-neutral-900 border border-white/10 rounded-[28px] p-8 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 blur-2xl rounded-full group-hover:bg-blue-600/10 transition-colors duration-300"></div>
            
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Facebook className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white group-hover:text-blue-400 transition-colors duration-200">
                      {t.facebookTitle}
                    </h3>
                    <p className="font-geist text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      {t.facebookSub}
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 bg-neutral-950 border border-white/5 px-2.5 py-1 rounded-full text-[10px] text-zinc-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  {t.verified}
                </span>
              </div>

              {/* Description */}
              <p className="font-dm text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                {t.facebookDesc}
              </p>

              {/* Live Preview Snippet (Mini Mock Widget) */}
              <div className="bg-neutral-950 border border-white/5 rounded-2xl p-4 mb-8">
                <p className="font-geist text-[9px] font-bold text-blue-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Users className="w-3 h-3" />
                  {t.featuredPost}
                </p>
                <p className="font-dm text-xs text-white/90 font-medium leading-normal mb-1">
                  {t.postText2}
                </p>
                <span className="font-dm text-[10px] text-zinc-500">89 replies • Active now</span>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="font-geist font-bold text-lg text-white leading-none">{t.facebookStats}</span>
                <span className="font-dm text-[10px] text-zinc-500">{t.facebookLabel}</span>
              </div>
              
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-jakarta font-black text-xs px-5 py-2.5 rounded-xl transition-all hover:scale-105 active:scale-95"
              >
                {t.visitBtn}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
