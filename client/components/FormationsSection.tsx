import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Flame,
  Clock,
  Layers,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Star,
  CheckCircle2,
} from "lucide-react";
import { formationsData } from "@/data/formations";
import { soundManager } from "@/utils/soundManager";

export default function FormationsSection() {
  const navigate = useNavigate();
  const zeroToAi = formationsData.find((f) => f.id === "zero-to-ai") || formationsData[0];
  const otherFormations = formationsData.filter((f) => f.id !== zeroToAi.id);

  return (
    <section id="formations" className="py-24 bg-slate-950 relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm shadow-cyan-500/20">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Pôle Formation & Académie Technologique</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Nos <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Formations</span> Certifiantes
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Développez des compétences de pointe directement applicables. Des cursus intensifs animés par des ingénieurs experts avec projets réels et encadrement en présentiel.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span>Cliquez sur une formation pour consulter son programme complet</span>
            <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>

        {/* Featured Formation Hero Card: De Zéro à l'IA Appliquée */}
        <div
          onClick={() => {
            soundManager.playTransitionSound(600, 900);
            navigate(`/formation/${zeroToAi.id}`);
          }}
          className="mb-12 bg-gradient-to-b from-slate-900/95 via-slate-900 to-indigo-950/40 border-2 border-cyan-400/80 hover:border-cyan-400 rounded-3xl p-8 sm:p-12 cursor-pointer shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/25 transition-all duration-300 relative group transform hover:-translate-y-1"
        >
          {/* Top highlight ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-black tracking-wider uppercase shadow-md">
                <Star className="w-3.5 h-3.5 fill-slate-950" />
                Formation Phare
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold animate-pulse">
                <Flame className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                Inscriptions Ouvertes
              </span>
            </div>

            {zeroToAi.partner && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/90 border border-slate-800 text-slate-300 text-xs font-medium">
                <span>🏛️ En partenariat avec</span>
                <strong className="text-cyan-400">{zeroToAi.partner}</strong>
              </div>
            )}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white group-hover:text-cyan-400 transition-colors mb-3">
                {zeroToAi.title}
              </h3>
              <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                {zeroToAi.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
                {zeroToAi.summary}
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-t border-b border-slate-800/80 mb-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>{zeroToAi.duration}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>{zeroToAi.modulesCount} modules</strong> (Python, IA, n8n)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>12 projets</strong> pratiques</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span><strong>0 prérequis</strong> (débutants)</span>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {zeroToAi.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-950/80 text-slate-300 text-xs font-medium border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Card Action / Callout */}
            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end bg-slate-950/70 border border-slate-800 rounded-2xl p-6">
              <span className="text-xs font-semibold text-slate-400 mb-1">Formule Pack Complet</span>
              <div className="text-3xl font-black text-cyan-400 mb-1">
                {zeroToAi.pricing.packComplet.price}
              </div>
              <span className="text-xs text-emerald-400 font-medium mb-6">
                {zeroToAi.pricing.packComplet.savings || "Tarif spécial"}
              </span>

              <div className="w-full space-y-2.5">
                <button
                  type="button"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-black text-sm shadow-lg shadow-cyan-400/25 group-hover:shadow-cyan-400/50 flex items-center justify-center gap-2 transition-all"
                >
                  <span>Consulter le programme complet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={zeroToAi.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    soundManager.playSuccessSound();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Lien direct inscription (Zero2AI)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Formations in the Catalog */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-xl font-bold text-white">Autres cursus au catalogue</h4>
            <Link
              to="/formations"
              className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold flex items-center gap-1"
            >
              <span>Voir tout le catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherFormations.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  soundManager.playTransitionSound(600, 900);
                  navigate(`/formation/${item.id}`);
                }}
                className="bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h5 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {item.title}
                  </h5>
                  <p className="text-xs font-semibold text-slate-300 mb-3">{item.tagline}</p>
                  <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Modules Content Titles */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1.5">
                      Modules au programme :
                    </span>
                    <div className="space-y-1">
                      {item.modules.slice(0, 4).map((mod) => (
                        <div key={mod.number} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <span className="text-cyan-400 font-bold shrink-0">M{mod.number}.</span>
                          <span className="font-semibold text-slate-200 line-clamp-1">{mod.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.duration}</span>
                  </div>
                  <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Découvrir <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA to catalog */}
        <div className="text-center pt-8 border-t border-slate-800/80">
          <Link
            to="/formations"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700 hover:border-cyan-400/60 bg-slate-900 text-slate-200 hover:text-white font-bold text-sm transition-all"
          >
            <span>Accéder au catalogue complet des formations</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
