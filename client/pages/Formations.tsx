import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { formationsData, Formation } from "@/data/formations";
import {
  GraduationCap,
  Sparkles,
  Search,
  Clock,
  Layers,
  ArrowRight,
  ExternalLink,
  Flame,
  CheckCircle2,
  Building2,
  Users,
  Brain,
  Shield,
  Server,
} from "lucide-react";
import { soundManager } from "@/utils/soundManager";

export default function Formations() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "Toutes les formations" },
    { id: "ai", label: "IA & Automatisation", icon: Brain },
    { id: "security", label: "Cybersécurité & Hacking", icon: Shield },
    { id: "network", label: "Réseaux Cisco", icon: Server },
  ];

  const filteredFormations = useMemo(() => {
    return formationsData.filter((f) => {
      const matchesCategory = selectedCategory === "all" || f.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Header Hero */}
        <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80 overflow-hidden">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[140px]" />
            <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs sm:text-sm font-semibold mb-6">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>CYBERLYMPH Tech Academy</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Catalogue de nos <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Formations</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez nos programmes intensifs conçus pour accélérer votre carrière technologique. 
              Des cursus 100% orientés pratique animés par des ingénieurs experts avec projets concrets à la clé.
            </p>

            {/* Quick Filter & Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-6">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Rechercher une formation (ex: Python, IA, Machine Learning, Pentest...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-lg"
              />
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundManager.playHoverSound(800);
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold shadow-md shadow-cyan-400/20"
                      : "bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Formations Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {filteredFormations.length} formation{filteredFormations.length > 1 ? "s" : ""} disponible{filteredFormations.length > 1 ? "s" : ""}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation) => {
              const isHighlight = formation.isFeatured;

              return (
                <div
                  key={formation.id}
                  onClick={() => {
                    soundManager.playTransitionSound(600, 900);
                    navigate(`/formation/${formation.id}`);
                  }}
                  className={`rounded-3xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative group ${
                    isHighlight
                      ? "bg-gradient-to-b from-slate-900/95 via-slate-900 to-indigo-950/40 border-2 border-cyan-400/80 hover:border-cyan-400 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:-translate-y-1"
                      : "bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:-translate-y-1 shadow-lg"
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                        {formation.categoryLabel}
                      </span>

                      {formation.isOpenForRegistration ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold animate-pulse">
                          <Flame className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                          <span>Inscriptions Ouvertes</span>
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-xs font-medium">
                          {formation.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {formation.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-300 mb-4 line-clamp-1">
                      {formation.tagline}
                    </p>

                    {/* Partner badge if present */}
                    {formation.partner && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-xs mb-4">
                        <span>🏛️</span>
                        <span>{formation.partner}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {formation.summary}
                    </p>

                    {/* Contenu enseigné (Titres des modules) */}
                    <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3.5 mb-5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Ce que vous allez apprendre (Modules) :</span>
                      </div>
                      <div className="space-y-1.5">
                        {formation.modules.map((mod) => (
                          <div key={mod.number} className="flex items-start gap-2 text-xs">
                            <span className="text-cyan-400 font-bold shrink-0 mt-0.5">M{mod.number}.</span>
                            <span className="font-semibold text-slate-200 line-clamp-1">{mod.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Meta Highlights */}
                    <div className="grid grid-cols-2 gap-3 py-4 border-t border-b border-slate-800 mb-6 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{formation.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{formation.projectsCount} projets pratiques</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {formation.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-[11px] font-medium border border-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                      {formation.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-md bg-slate-950 text-slate-400 text-[11px] font-medium">
                          +{formation.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom / CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      {formation.pricing.packComplet?.price ? (
                        <>
                          <span className="block text-[10px] uppercase font-semibold text-slate-500">Formule pack</span>
                          <span className="font-extrabold text-white text-base">
                            {formation.pricing.packComplet.price}
                          </span>
                        </>
                      ) : (
                        <span>Sur demande</span>
                      )}
                    </div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 group-hover:bg-cyan-400 group-hover:text-slate-950 text-slate-200 font-bold text-xs transition-all">
                      <span>Découvrir</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Corporate / Customized Training Banner */}
          <div className="mt-20 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-semibold mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Formations Entreprises & Équipes</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Besoin d'une formation sur mesure pour vos collaborateurs ?
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                CYBERLYMPH conçoit des programmes intra-entreprises adaptés aux défis spécifiques de votre secteur : initiation des équipes à l'IA générative, sécurité applicative, ou déploiement d'automatisations internes.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-cyan-400/40 transition-all"
            >
              Demander un devis sur mesure
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
