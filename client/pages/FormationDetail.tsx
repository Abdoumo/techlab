import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getFormationById, formationsData, getWhatsAppReservationUrl } from "@/data/formations";
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Code2,
  Brain,
  Zap,
  Shield,
  Server,
  Layers,
  Coffee,
  Award,
  BookOpen,
  Users,
  Building2,
  Star,
  Flame,
  ArrowRight,
  Clock,
  Calendar,
  MapPin,
  Check,
  Network,
  Terminal,
  Search,
  Lock,
  MessageSquare,
} from "lucide-react";
import { soundManager } from "@/utils/soundManager";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function FormationDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // WhatsApp Reservation Modal State
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState<string>("Pack Complet");
  const [selectedFormulaPrice, setSelectedFormulaPrice] = useState<string>("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("BaridiMob (instantané)");

  const formation = id ? getFormationById(id) : undefined;

  const handleOpenReservation = (formulaName: string = "Pack Complet", price?: string) => {
    soundManager.playClickSound();
    setSelectedFormula(formulaName);
    setSelectedFormulaPrice(price || formation?.pricing.packComplet.price || "");
    setIsReservationModalOpen(true);
  };

  const handleSendWhatsApp = () => {
    if (!formation) return;
    soundManager.playSuccessSound();
    const url = getWhatsAppReservationUrl(
      formation.title,
      selectedFormula,
      selectedFormulaPrice,
      clientName,
      clientPhone,
      paymentMethod
    );
    window.open(url, "_blank", "noopener,noreferrer");
    setIsReservationModalOpen(false);
  };

  const handleDirectWhatsApp = (formula: string = "Pack Complet", price?: string) => {
    if (!formation) return;
    soundManager.playSuccessSound();
    const url = getWhatsAppReservationUrl(
      formation.title,
      formula,
      price || formation.pricing.packComplet.price
    );
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!formation) {
    return (
      <Layout>
        <div className="min-h-screen bg-slate-950 py-24 px-4 flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-4">Formation non trouvée</h1>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              Le cursus que vous recherchez n'existe pas ou a été déplacé.
            </p>
            <button
              onClick={() => navigate("/formations")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:shadow-lg hover:shadow-cyan-400/40 transition-all"
            >
              Voir toutes nos formations
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case "brain":
        return <Brain className="w-6 h-6 text-blue-400" />;
      case "zap":
        return <Zap className="w-6 h-6 text-purple-400" />;
      case "shield":
        return <Shield className="w-6 h-6 text-rose-400" />;
      case "server":
        return <Server className="w-6 h-6 text-amber-400" />;
      case "network":
        return <Network className="w-6 h-6 text-sky-400" />;
      case "terminal":
        return <Terminal className="w-6 h-6 text-emerald-400" />;
      case "search":
        return <Search className="w-6 h-6 text-amber-400" />;
      case "lock":
        return <Lock className="w-6 h-6 text-violet-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "coffee":
        return <Coffee className="w-5 h-5 text-cyan-400" />;
      case "award":
        return <Award className="w-5 h-5 text-cyan-400" />;
      case "book":
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case "users":
        return <Users className="w-5 h-5 text-cyan-400" />;
      case "building":
        return <Building2 className="w-5 h-5 text-cyan-400" />;
      case "terminal":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case "server":
        return <Server className="w-5 h-5 text-cyan-400" />;
      case "lock":
        return <Lock className="w-5 h-5 text-cyan-400" />;
      case "shield":
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case "zap":
        return <Zap className="w-5 h-5 text-cyan-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const toggleFaq = (index: number) => {
    soundManager.playHoverSound(800);
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const currentModule = formation.modules[activeModuleIndex] || formation.modules[0];

  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Navigation Breadcrumb & Back */}
        <div className="bg-slate-900/60 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-xs sm:text-sm">
            <button
              onClick={() => navigate("/formations")}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Retour au catalogue des formations</span>
            </button>
            <div className="hidden sm:flex items-center gap-2 text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link to="/formations" className="hover:text-white transition-colors">Formations</Link>
              <span>/</span>
              <span className="text-slate-200 font-medium truncate max-w-xs">{formation.shortTitle}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-800/80">
          {/* Ambient Glows */}
          <div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[350px] rounded-full blur-[140px] pointer-events-none"
            style={{ backgroundColor: formation.glowColor }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  {formation.badge}
                </span>

                {formation.partner && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                    <span>🏛️</span>
                    <span>{formation.partner}</span>
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
                {formation.title}
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                {formation.tagline}
              </p>

              {/* Summary */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
                {formation.description}
              </p>

              {/* Action Buttons: WhatsApp Reservation directly from page */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleOpenReservation("Pack Complet", formation.pricing.packComplet.price)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>Réserver ma place via WhatsApp</span>
                </button>

                {formation.externalRegistrationUrl && (
                  <a
                    href={formation.externalRegistrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClickSound()}
                    className="px-5 py-4 rounded-xl border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Formulaire Web (Zero2AI)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href="#programme"
                  className="px-6 py-4 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-center text-sm transition-colors"
                >
                  Consulter le programme détaillé
                </a>
              </div>
            </div>

            {/* Quick Meta Badges */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Volume horaire</div>
                  <div className="text-sm font-bold text-white">{formation.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Programme</div>
                  <div className="text-sm font-bold text-white">{formation.modulesCount} modules · {formation.projectsCount} projets</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Lieu</div>
                  <div className="text-sm font-bold text-white">{formation.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">Prérequis</div>
                  <div className="text-sm font-bold text-white">{formation.level}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programme Section */}
        <section id="programme" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Cursus d'apprentissage</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                Programme détaillé & compétences enseignées
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Cliquez sur un module pour afficher son déroulé complet et ses ateliers pratiques.
              </p>
            </div>
          </div>

          {/* Module Switcher Buttons with full content titles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {formation.modules.map((mod, idx) => (
              <button
                key={mod.number}
                onClick={() => {
                  soundManager.playHoverSound(700 + idx * 80);
                  setActiveModuleIndex(idx);
                }}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  activeModuleIndex === idx
                    ? "bg-cyan-50/90 dark:bg-gradient-to-br dark:from-cyan-950/80 dark:via-slate-900 dark:to-blue-950/80 border-cyan-500 text-slate-900 dark:text-white shadow-md shadow-cyan-500/10 ring-1 ring-cyan-500/50"
                    : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-black uppercase tracking-wider ${
                    activeModuleIndex === idx
                      ? "bg-cyan-400 text-slate-950"
                      : "bg-slate-800 text-slate-400"
                  }`}>
                    Module {mod.number}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">{mod.duration}</span>
                </div>
                <h4 className={`text-sm sm:text-base font-bold line-clamp-2 ${
                  activeModuleIndex === idx ? "text-cyan-600 dark:text-cyan-300" : "text-slate-800 dark:text-slate-200"
                }`}>
                  {mod.title}
                </h4>
              </button>
            ))}
          </div>

          {/* Active Module Presentation */}
          <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur mb-16">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                  {getModuleIcon(currentModule.iconName)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                      Module {currentModule.number}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{currentModule.duration}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{currentModule.title}</h3>
                  <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">{currentModule.description}</p>
                </div>
              </div>

              {currentModule.price && (
                <div className="bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 flex flex-col justify-center items-start md:items-end shrink-0">
                  <span className="text-xs text-slate-400">Tarif du module seul</span>
                  <span className="text-2xl font-black text-cyan-400">{currentModule.price}</span>
                </div>
              )}
            </div>

            {/* Lessons Cards with Explicit Content Titles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentModule.weeks.map((weekItem, wIdx) => (
                <div
                  key={wIdx}
                  className="bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-6 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700">
                        {weekItem.week}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">Session Pratique</span>
                    </div>

                    {/* What they will learn as TITLE */}
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                      {weekItem.title}
                    </h4>

                    {/* Detailed syllabus topics */}
                    <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                      {weekItem.topic}
                    </p>
                  </div>

                  {/* Hands-on project / deliverable */}
                  <div className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800/90 mt-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-cyan-300">Projet concret :</strong> {weekItem.project}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Syllabus Summary of All Modules (Vue d'ensemble complète) */}
          <div className="mb-20 bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-cyan-400" />
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Sommaire exhaustif des compétences de la formation
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Vue globale de l'ensemble des modules et thématiques couvertes pour {formation.shortTitle}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {formation.modules.map((mod) => (
                <div
                  key={mod.number}
                  className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-black flex items-center justify-center shrink-0">
                        {mod.number}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {mod.title}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-400 font-semibold">{mod.duration}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 pt-3 border-t border-slate-800/60">
                    {mod.weeks.map((w, wIndex) => (
                      <div key={wIndex} className="flex items-start gap-2 text-xs">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                        <div>
                          <strong className="text-slate-200">{w.title}</strong>
                          <span className="text-slate-400 block text-[11px] mt-0.5">{w.week}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Project Showcase (if present) */}
          {formation.capstoneProject && (
            <div className="mb-20 bg-slate-50 dark:bg-gradient-to-r dark:from-slate-900 dark:via-indigo-950/50 dark:to-slate-900 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-4">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{formation.capstoneProject.highlightLabel}</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    {formation.capstoneProject.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {formation.capstoneProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    {formation.capstoneProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 border border-cyan-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex flex-col items-center sm:items-end">
                  <button
                    type="button"
                    onClick={() => handleOpenReservation("Pack Complet", formation.pricing.packComplet.price)}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    <span>Réserver ma place via WhatsApp</span>
                  </button>
                  <span className="text-xs text-slate-400 mt-2 font-medium">Validation instantanée sur WhatsApp</span>
                </div>
              </div>
            </div>
          )}

          {/* Pricing Section */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Tarification & Formules</span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-3">
                Investissez dans votre avenir professionnel
              </h3>
              <p className="text-slate-400 text-sm">
                {formation.pricing.packComplet.price === "Sur devis"
                  ? "Tarification sur mesure adaptée aux particuliers, étudiants et entreprises. Contactez nos conseillers pour recevoir votre devis personnalisé."
                  : "Règlements acceptés en espèces, virement CCP et BaridiMob (paiement possible en deux tranches)."}
              </p>
            </div>

            <div
              className={`grid gap-6 items-stretch ${
                !formation.pricing.individualModules && !formation.pricing.earlyBird
                  ? "max-w-xl mx-auto grid-cols-1"
                  : !formation.pricing.individualModules || !formation.pricing.earlyBird
                  ? "max-w-4xl mx-auto grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-3"
              }`}
            >
              {/* Individual modules (if available) */}
              {formation.pricing.individualModules && (
                <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-700 transition-all">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">À la carte</span>
                    <h4 className="text-xl font-bold text-white mt-1 mb-4">Module Individuel</h4>
                    <div className="mb-6">
                      <span className="text-xs text-slate-400">À partir de</span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-3xl font-extrabold text-white">{formation.pricing.individualModules.fromPrice}</span>
                      </div>
                      <span className="text-xs text-slate-500">{formation.pricing.individualModules.periodLabel}</span>
                    </div>

                    <ul className="space-y-3 text-sm text-slate-300 mb-8">
                      {formation.pricing.individualModules.items.map((it) => (
                        <li key={it.name} className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
                          <span className="text-slate-200">{it.name}</span>
                          <span className="font-bold text-cyan-400 shrink-0">{it.price}</span>
                        </li>
                      ))}
                      <li className="flex items-center gap-2 pt-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Supports et notebooks inclus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Certificat de module</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenReservation("Module Individuel", formation.pricing.individualModules?.fromPrice)}
                    className="w-full py-3.5 px-4 rounded-xl border border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white font-bold text-center text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Réserver un module via WhatsApp</span>
                  </button>
                </div>
              )}

              {/* Pack Complet */}
              <div className="bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/60 border-2 border-cyan-500 dark:border-cyan-400 rounded-3xl p-8 flex flex-col justify-between relative shadow-xl shadow-cyan-500/10 scale-100 md:scale-105 z-10">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 text-xs font-black tracking-wider uppercase shadow-md">
                  ⭐ Meilleure Offre · Recommandé
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Programme Intégral</span>
                  <h4 className="text-2xl font-extrabold text-white mt-1 mb-2">Pack Complet {formation.shortTitle}</h4>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        {formation.pricing.packComplet.price}
                      </span>
                    </div>
                    {formation.pricing.packComplet.savings && (
                      <div className="text-xs text-emerald-400 font-semibold mt-1">
                        {formation.pricing.packComplet.savings}
                      </div>
                    )}
                    <span className="text-xs text-slate-400">{formation.pricing.packComplet.durationLabel}</span>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-200 mb-8">
                    {formation.pricing.packComplet.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenReservation("Pack Complet", formation.pricing.packComplet.price)}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-center text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>
                    {formation.pricing.packComplet.price === "Sur devis"
                      ? "Demander un devis & Réserver sur WhatsApp"
                      : "Réserver le Pack Complet sur WhatsApp"}
                  </span>
                </button>
              </div>

              {/* Early Bird (if available) */}
              {formation.pricing.earlyBird && (
                <div className="bg-white dark:bg-slate-900/80 border border-amber-400/60 dark:border-amber-500/40 rounded-3xl p-8 flex flex-col justify-between hover:border-amber-500 transition-all relative overflow-hidden shadow-md">
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/30">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Places Limitées</span>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Offre Spéciale</span>
                    <h4 className="text-xl font-bold text-white mt-1 mb-4">Tarif Early Bird</h4>
                    <div className="mb-6">
                      <span className="text-xs text-slate-400 line-through">{formation.pricing.earlyBird.originalPrice}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-amber-400">{formation.pricing.earlyBird.price}</span>
                      </div>
                      <span className="text-xs text-amber-300/90 font-medium">
                        {formation.pricing.earlyBird.discountText}
                      </span>
                    </div>

                    <ul className="space-y-3 text-sm text-slate-300 mb-8">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Tout le contenu du Pack Complet inclus</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Accès prioritaire garanti à la promotion</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Mentorat personnalisé renforcé</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>Session de révision pré-projet offerte</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenReservation("Tarif Early Bird", formation.pricing.earlyBird?.price)}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-center text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-slate-950" />
                    <span>Profiter du Tarif Early Bird via WhatsApp</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Tout ce qui est inclus dans votre cursus
              </h3>
              <p className="text-slate-400 text-sm">
                Un environnement pensé pour votre montée en compétences et votre autonomie.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {formation.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    {getBenefitIcon(b.iconName)}
                  </div>
                  <div>
                    <h5 className="font-semibold text-white text-sm mb-1">{b.title}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          {formation.faqs.length > 0 && (
            <div className="max-w-4xl mx-auto mb-20">
              <div className="text-center mb-10">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Des questions ?</span>
                <h3 className="text-3xl font-extrabold text-white mt-1">Questions Fréquentes</h3>
              </div>

              <div className="space-y-4">
                {formation.faqs.map((faq, fIdx) => {
                  const isOpen = openFaqIndex === fIdx;
                  return (
                    <div
                      key={fIdx}
                      className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900/60 overflow-hidden transition-colors hover:border-slate-300 dark:hover:border-slate-700 shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(fIdx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-semibold text-white focus:outline-none"
                      >
                        <span className="text-base sm:text-lg">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Other Formations in the Catalog */}
          <div className="pt-12 border-t border-slate-800">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Continuez à explorer</span>
                <h4 className="text-2xl font-bold text-white mt-1">Autres formations au catalogue</h4>
              </div>
              <Link
                to="/formations"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center gap-1"
              >
                <span>Toutes les formations</span>
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formationsData
                .filter((f) => f.id !== formation.id)
                .map((otherF) => (
                  <Link
                    key={otherF.id}
                    to={`/formation/${otherF.id}`}
                    className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs text-cyan-400 font-bold uppercase">{otherF.categoryLabel}</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                          {otherF.badge}
                        </span>
                      </div>
                      <h5 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {otherF.title}
                      </h5>
                      <p className="text-xs text-slate-400 line-clamp-2 mb-4">{otherF.summary}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800">
                      <span>{otherF.duration}</span>
                      <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        Découvrir <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* WhatsApp In-Page Reservation Modal */}
        {isReservationModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsReservationModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Fermer"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Réservation Directe WhatsApp</h3>
                  <p className="text-xs text-slate-400">Confirmation immédiate sans passer par le formulaire de contact</p>
                </div>
              </div>

              {/* Course & Formula summary */}
              <div className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 mb-5">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Formation :</div>
                <div className="text-sm font-bold text-white mt-0.5">{formation.title}</div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-xs">
                  <span className="text-slate-400">Formule : <strong className="text-emerald-400">{selectedFormula}</strong></span>
                  {selectedFormulaPrice && (
                    <span className="font-extrabold text-white text-sm">{selectedFormulaPrice}</span>
                  )}
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-3.5 mb-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Votre Nom & Prénom <span className="text-slate-500 text-[11px]">(recommandé)</span>
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ex : Karim Benali"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Numéro de Téléphone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    placeholder="Ex : 06 99 32 64 06"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Mode de Règlement Préféré
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="BaridiMob (instantané)">BaridiMob (instantané)</option>
                    <option value="Virement / Versement CCP">Virement / Versement CCP</option>
                    <option value="Espèces sur place (Annaba AIC)">Espèces sur place (Annaba AIC)</option>
                    <option value="Paiement en 2 tranches">Paiement en 2 tranches</option>
                  </select>
                </div>
              </div>

              {/* Send to WhatsApp button */}
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 flex items-center justify-center gap-2.5 transition-all mb-3 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Envoyer ma réservation sur WhatsApp</span>
              </button>

              {/* 1-click bypass link */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => handleDirectWhatsApp(selectedFormula, selectedFormulaPrice)}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 hover:underline"
                >
                  <span>Ou ouvrir directement WhatsApp en 1 clic</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                {formation.externalRegistrationUrl && (
                  <a
                    href={formation.externalRegistrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-medium hover:underline flex items-center gap-1"
                  >
                    <span>Formulaire Zero2AI</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Quick-Reservation Bar */}
        <div className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-3 p-2 pl-4 bg-slate-900/95 border border-emerald-500/50 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-emerald-400">Réservation {formation.shortTitle}</span>
            <span className="text-xs font-bold text-white">{formation.pricing.packComplet.price}</span>
          </div>
          <button
            type="button"
            onClick={() => handleOpenReservation("Pack Complet", formation.pricing.packComplet.price)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>
              {formation.pricing.packComplet.price === "Sur devis"
                ? "Devis sur WhatsApp"
                : "Réserver sur WhatsApp"}
            </span>
          </button>
        </div>
      </div>
    </Layout>
  );
}
