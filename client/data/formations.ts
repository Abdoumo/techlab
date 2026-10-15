export interface ModuleWeek {
  week: string;
  title: string;
  topic: string;
  project: string;
}

export interface FormationModule {
  number: string;
  title: string;
  duration: string;
  iconName: "code" | "brain" | "zap" | "shield" | "server" | "layers" | "network" | "terminal" | "search" | "lock";
  description: string;
  weeks: ModuleWeek[];
  price?: string;
}

export interface FormationBenefit {
  iconName: "coffee" | "award" | "book" | "users" | "building" | "layers" | "terminal" | "shield" | "zap" | "server" | "lock";
  title: string;
  desc: string;
}

export interface FormationFaq {
  q: string;
  a: string;
}

export interface Formation {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: "ai" | "security" | "network" | "devops" | "web";
  categoryLabel: string;
  badge: string;
  badgeType: "hot" | "open" | "upcoming";
  partner?: string;
  duration: string;
  totalHours: number;
  modulesCount: number;
  projectsCount: number;
  prerequisites: string;
  location: string;
  level: "Débutant" | "Intermédiaire" | "Tous niveaux" | "Intermédiaire à Avancé" | "Avancé";
  summary: string;
  description: string;
  accentGradient: string;
  glowColor: string;
  tags: string[];
  capstoneProject?: {
    title: string;
    description: string;
    tags: string[];
    highlightLabel: string;
  };
  modules: FormationModule[];
  pricing: {
    packComplet: {
      price: string;
      originalPrice?: string;
      savings?: string;
      durationLabel: string;
      features: string[];
    };
    earlyBird?: {
      price: string;
      originalPrice?: string;
      discountText?: string;
      seatsLeft?: number;
      totalSeats?: number;
    };
    individualModules?: {
      fromPrice: string;
      periodLabel: string;
      items: { name: string; price: string }[];
    };
  };
  benefits: FormationBenefit[];
  faqs: FormationFaq[];
  registrationUrl: string;
  externalRegistrationUrl?: string;
  isFeatured?: boolean;
  isOpenForRegistration: boolean;
  en?: {
    title?: string;
    shortTitle?: string;
    tagline?: string;
    categoryLabel?: string;
    badge?: string;
    duration?: string;
    level?: string;
    prerequisites?: string;
    location?: string;
    summary?: string;
    description?: string;
  };
}

export function getWhatsAppReservationUrl(
  formationTitle: string,
  option: string = "Pack Complet",
  price?: string,
  clientName?: string,
  clientPhone?: string,
  paymentMethod?: string
): string {
  const phone = "213699326406";
  const nameLine = clientName ? `\n- Nom & Prénom : ${clientName}` : "";
  const phoneLine = clientPhone ? `\n- Téléphone : ${clientPhone}` : "";
  const paymentLine = paymentMethod ? `\n- Modalité de paiement : ${paymentMethod}` : "";

  const text = `Bonjour CYBERLYMPH,\n\nJe souhaite réserver ma place pour la formation :\n*${formationTitle}*\n\n- Formule choisie : ${option}${price ? ` (${price})` : ""}${nameLine}${phoneLine}${paymentLine}\n- Lieu : Présentiel (Annaba) / En ligne\n\nMerci de m'indiquer la démarche pour confirmer mon inscription.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const formationsData: Formation[] = [
  // 1. DE ZERO A L'IA APPLIQUEE (Zero2AI)
  {
    id: "zero-to-ai",
    slug: "de-zero-a-ia-appliquee",
    title: "De Zéro à l'IA Appliquée",
    shortTitle: "Zero2AI",
    tagline: "Python 101 · AI Essentials · n8n Automatisation · Chatbot Telegram",
    category: "ai",
    categoryLabel: "Intelligence Artificielle & Automatisation",
    badge: "Inscriptions Ouvertes — Places Limitées",
    badgeType: "hot",
    partner: "AIC — Annaba Innovation Center",
    duration: "48 heures · 12 semaines",
    totalHours: 48,
    modulesCount: 3,
    projectsCount: 12,
    prerequisites: "0 prérequis — Accessible à tous les débutants",
    location: "Présentiel à Annaba (AIC Innovation Center)",
    level: "Tous niveaux",
    summary:
      "Formation intensive de 48h pour maîtriser Python, concevoir vos propres modèles de Machine Learning et déployer un Chatbot Telegram intelligent autonome avec n8n.",
    description:
      "Un cursus complet orienté 100% pratique pour les étudiants, professionnels et créateurs de projets souhaitant maîtriser l'intelligence artificielle appliquée. Vous développez un portfolio de 12 projets concrets et concevez un chatbot Telegram autonome doté de mémoire conversationnelle et synchronisé avec Google Sheets.",
    accentGradient: "from-cyan-400 via-blue-500 to-indigo-500",
    glowColor: "rgba(6, 182, 212, 0.25)",
    tags: ["Python 3", "Machine Learning", "Scikit-Learn", "LLMs", "Gemini API", "n8n", "Telegram Bot"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Grand Projet Final Réalisé par Chaque Participant ⭐",
      title: "Chatbot Telegram IA avec Mémoire Conversationnelle & Google Sheets",
      description:
        "Vous construisez et déployez de bout en bout un bot Telegram interactif propulsé par des modèles LLM (Gemini / OpenAI), capable de comprendre le langage naturel, de conserver l'historique d'échange, d'exécuter des workflows automatisés n8n et de consigner automatiquement les requêtes et commandes dans Google Sheets.",
      tags: ["Python", "Google Gemini API", "n8n Workflows", "Telegram Bot API", "Google Sheets DB"],
    },
    modules: [
      {
        number: "01",
        title: "Python 101",
        duration: "16 heures · 4 semaines",
        iconName: "code",
        description:
          "Maîtrisez les fondamentaux essentiels de la programmation en Python : variables, flux conditionnels, fonctions modulaires, scraping et automatisation de fichiers.",
        weeks: [
          {
            week: "Semaine 1",
            title: "Variables, Types de Données & Structures Fondamentales",
            topic: "Introduction, variables, types et structures de données",
            project: "Calculatrice interactive avec gestion d'erreurs",
          },
          {
            week: "Semaine 2",
            title: "Logique Conditionnelle, Boucles & Fonctions Réutilisables",
            topic: "Conditions, boucles itératives et fonctions réutilisables",
            project: "Jeu de devinettes + générateur sécurisé de mots de passe",
          },
          {
            week: "Semaine 3",
            title: "Manipulation de Fichiers, Collections & Requêtes APIs",
            topic: "Manipulation de fichiers, listes, dictionnaires & APIs",
            project: "Web Scraper automatisé + gestionnaire de contacts",
          },
          {
            week: "Semaine 4",
            title: "Librairies Fondamentales & Automatisation de Flux",
            topic: "Librairies fondamentales & automatisation avancée",
            project: "Automatisation de flux de fichiers & analyseur de données",
          },
        ],
        price: "30,000 DA",
      },
      {
        number: "02",
        title: "AI Essentials",
        duration: "16 heures · 4 semaines",
        iconName: "brain",
        description:
          "Comprenez et appliquez le Machine Learning, le Deep Learning et les LLMs modernes. Créez vos premiers modèles d'analyse et de prédiction.",
        weeks: [
          {
            week: "Semaine 5",
            title: "Fondamentaux du Machine Learning & Deep Learning",
            topic: "Fondamentaux IA, ML vs Deep Learning, cas d'usage réels",
            project: "Analyse exploratoire sur un dataset d'entreprise",
          },
          {
            week: "Semaine 6",
            title: "Data Science avec NumPy, Pandas & Feature Engineering",
            topic: "NumPy, Pandas, nettoyage et préparation de données (Feature Engineering)",
            project: "Modèle de régression pour la prédiction de prix",
          },
          {
            week: "Semaine 7",
            title: "Classification Supervisée & Évaluation Scikit-Learn",
            topic: "Scikit-Learn: classification supervisée, métriques & tuning",
            project: "Analyse automatique de sentiments NLP + classificateur",
          },
          {
            week: "Semaine 8",
            title: "LLMs, API Google Gemini / OpenAI & Prompt Engineering",
            topic: "LLMs, API Google Gemini & OpenAI, Prompt Engineering et RAG",
            project: "Chatbot IA personnalisé avec l'API Gemini",
          },
        ],
        price: "35,000 DA",
      },
      {
        number: "03",
        title: "n8n & Automatisation",
        duration: "16 heures · 4 semaines",
        iconName: "zap",
        description:
          "Passez à la vitesse supérieure en connectant vos solutions IA au monde réel grâce à l'orchestration de workflows n8n et la création d'agents autonomes.",
        weeks: [
          {
            week: "Semaine 9",
            title: "Architecture n8n, Déploiement & Premiers Workflows",
            topic: "Introduction à n8n, architecture, installation locale & cloud",
            project: "Workflows de déclenchement emails & alertes webhook",
          },
          {
            week: "Semaine 10",
            title: "Intégration Telegram Bot API & Feuilles Google Sheets",
            topic: "Intégration multi-plateformes: Telegram Bot API & Google Sheets",
            project: "Bot Telegram interactif connecté à une feuille de calcul",
          },
          {
            week: "Semaine 11",
            title: "Workflows Intelligents, Agents IA Autonomes & Mémoire",
            topic: "Workflows intelligents: intégration LLMs, agents autonomes & mémoire",
            project: "Bot Telegram avec agent IA et réponses contextuelles",
          },
          {
            week: "Semaine 12",
            title: "Projet de Clôture : Chatbot IA Complet & Déploiement",
            topic: "Projet de clôture & déploiement en production",
            project: "Chatbot Telegram IA complet avec mémoire + synchronisation Sheets",
          },
        ],
        price: "50,000 DA",
      },
    ],
    pricing: {
      packComplet: {
        price: "90,000 DA",
        originalPrice: "115,000 DA",
        savings: "Économisez 25,000 DA",
        durationLabel: "48 heures · Les 3 modules complets",
        features: [
          "Les 3 modules complets (Python + AI + n8n)",
          "48 heures de formation intensive en présentiel",
          "Chatbot Telegram IA fonctionnel déployé en projet final",
          "Certificat officiel AIC Annaba × CYBERLYMPH",
          "12 projets réels intégrables à votre CV & GitHub",
          "Pause café offerte à chaque session ☕",
          "Supports complets (slides, notebooks Jupyter, codes sources)",
          "Groupe WhatsApp privé & mentorat continu",
        ],
      },
      earlyBird: {
        price: "85,000 DA",
        originalPrice: "90,000 DA",
        discountText: "Réduction exclusive de 5,000 DA pour les 10 premières inscriptions",
        seatsLeft: 4,
        totalSeats: 10,
      },
      individualModules: {
        fromPrice: "30,000 DA",
        periodLabel: "par module de 16h",
        items: [
          { name: "🐍 Module 01: Python 101", price: "30,000 DA" },
          { name: "🤖 Module 02: AI Essentials", price: "35,000 DA" },
          { name: "⚡ Module 03: n8n & Projets", price: "50,000 DA" },
        ],
      },
    },
    benefits: [
      { iconName: "coffee", title: "Pause Café Offerte", desc: "Moments d'échange conviviaux inclus à chaque session de formation" },
      { iconName: "award", title: "Certificat Reconnu", desc: "Co-délivré avec l'AIC Annaba Innovation Center pour attester de vos acquis" },
      { iconName: "book", title: "Supports & Notebooks", desc: "Accès illimité aux notebooks interactifs, diapositives et corrections" },
      { iconName: "users", title: "Mentorat Continu", desc: "Assistance directe entre les sessions via un canal privé dédié" },
      { iconName: "building", title: "Lieu Premium (AIC)", desc: "Espace moderne et connecté au cœur d'Annaba pour apprendre dans les meilleures conditions" },
      { iconName: "layers", title: "12 Projets Concrets", desc: "Des réalisations palpables qui font la différence lors d'un entretien ou appel d'offres" },
    ],
    faqs: [
      {
        q: "Faut-il des prérequis techniques pour suivre cette formation ?",
        a: "Non ! La formation Zero2AI a été spécialement pensée pour les débutants complets. Vous n'avez besoin que d'un ordinateur portable et de motivation. Nous reprenons tous les fondamentaux depuis le début avec Python 101 avant de monter en puissance.",
      },
      {
        q: "Puis-je m'inscrire à un seul module individuel ?",
        a: "Oui, chaque module (Python 101, AI Essentials, ou n8n Automatisation) peut être suivi de manière indépendante. Cependant, nous recommandons vivement le Pack Complet (3 modules) pour bénéficier de la continuité pédagogique, du projet final Chatbot Telegram et d'une réduction de 25,000 DA.",
      },
      {
        q: "Quels sont les modes de paiement acceptés ?",
        a: "Nous acceptons les règlements en espèces sur place, par virement CCP et via BaridiMob. Pour le Pack Complet, le règlement peut être échelonné en 2 tranches.",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("De Zéro à l'IA Appliquée", "Pack Complet (3 modules)", "90,000 DA"),
    externalRegistrationUrl: "https://inscription-zero2-ai.vercel.app/",
  },

  // 2. PRE SECURITY
  {
    id: "pre-security",
    slug: "pre-security-fondamentaux-cybersecurite",
    title: "Pre Security : Fondamentaux de la Cybersécurité",
    shortTitle: "Pre Security",
    tagline: "Introduction Cyber · Réseaux TCP/IP · Fonctionnement du Web · Linux & Windows Basics",
    category: "security",
    categoryLabel: "Fondamentaux de la Cybersécurité",
    badge: "Idéal pour Débuter — 0 Prérequis",
    badgeType: "hot",
    partner: "CYBERLYMPH Cyber Academy",
    duration: "32 heures · 6 semaines",
    totalHours: 32,
    modulesCount: 4,
    projectsCount: 10,
    prerequisites: "0 prérequis — Accessible à toute personne motivée",
    location: "Présentiel & Plateforme Pratique",
    level: "Débutant",
    summary:
      "Le point d'entrée incontournable dans le monde de la sécurité informatique. Comprenez le fonctionnement d'Internet, des réseaux, des systèmes d'exploitation et du Web avant d'apprendre à les défendre.",
    description:
      "Pour attaquer ou défendre un système informatique, il faut d'abord comprendre comment il fonctionne en profondeur. Ce programme pose les fondations absolues de la cybersécurité : le modèle de menace (CIA Triad), les protocoles réseau (TCP/IP, DNS, DHCP), l'architecture du Web (HTTP, requêtes, cookies), la maîtrise de la ligne de commande Linux et les mécanismes internes de Windows.",
    accentGradient: "from-emerald-400 via-teal-500 to-cyan-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
    tags: ["Pre Security", "Networking Basics", "Linux Terminal", "Windows Security", "Web Fundamentals", "TCP/IP"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Projet de Synthèse Pre-Security ⭐",
      title: "Analyse Complète d'un Réseau d'Entreprise & Première Détection d'Attaque",
      description:
        "Dans un environnement virtualisé simulant une PME : inspection des flux réseau en direct avec Wireshark, audit des droits d'accès sur machines Linux et Windows, détection d'une transmission en clair de mots de passe sur HTTP et rédaction de vos premières recommandations de sécurité.",
      tags: ["Wireshark", "Linux Permissions", "Windows Logs", "HTTP vs HTTPS", "Threat Analysis"],
    },
    modules: [
      {
        number: "01",
        title: "Introduction à la Cybersécurité & Modèle de Menace",
        duration: "8 heures · Semaine 1",
        iconName: "shield",
        description:
          "Les piliers de la cybersécurité, la triade CIA (Confidentialité, Intégrité, Disponibilité), l'état d'esprit offensif vs défensif et les métiers du secteur.",
        weeks: [
          {
            week: "Semaine 1",
            title: "Les Piliers de la Sécurité Numérique & Triade CIA",
            topic: "Les fondements de la sécurité numérique, la triade CIA et les motivations des attaquants",
            project: "Analyse d'un scénario de cyberattaque réelle et identification des failles",
          },
        ],
      },
      {
        number: "02",
        title: "Fondamentaux des Réseaux Informatiques & Modèle TCP/IP",
        duration: "8 heures · Semaines 2 à 3",
        iconName: "network",
        description:
          "Comment les ordinateurs communiquent : adresses IP, masques de sous-réseaux, adresses MAC, routeurs, switches, paquets et analyse de trames.",
        weeks: [
          {
            week: "Semaine 2",
            title: "Topologies Réseau, Modèles OSI / TCP-IP & Encapsulation",
            topic: "Topologies réseau, modèles OSI et TCP/IP, encapsulation et routage de paquets",
            project: "Capture et décodage de paquets réseau avec Wireshark",
          },
          {
            week: "Semaine 3",
            title: "Adresses IP, Masques, DNS, DHCP & Analyse Wireshark",
            topic: "Protocoles clés de communication : DNS, DHCP, ARP, TCP vs UDP et ports d'écoute",
            project: "Simulation et diagnostic de pannes réseau sur un mini-LAN",
          },
        ],
      },
      {
        number: "03",
        title: "Comment Fonctionne le Web (Architecture & Protocoles)",
        duration: "8 heures · Semaine 4",
        iconName: "zap",
        description:
          "La mécanique interne du Web : requêtes et réponses HTTP/HTTPS, en-têtes, verbes (GET, POST), cookies de session et chiffrement TLS.",
        weeks: [
          {
            week: "Semaine 4",
            title: "Cycle Requête-Réponse HTTP/HTTPS, Headers & Cookies",
            topic: "Cycle requête-réponse, analyse d'en-têtes HTTP, inspection du trafic avec les DevTools et gestion des cookies",
            project: "Inspection approfondie d'une session web et compréhension des failles de transmission non chiffrée",
          },
        ],
      },
      {
        number: "04",
        title: "Maîtrise des Systèmes Linux & Windows",
        duration: "8 heures · Semaines 5 à 6",
        iconName: "terminal",
        description:
          "Commandes indispensables en terminal Linux, gestion des permissions, utilisateurs, observateur d'événements Windows et PowerShell.",
        weeks: [
          {
            week: "Semaine 5",
            title: "Ligne de Commande Linux & Gestion des Permissions (chmod/chown)",
            topic: "Terminal Linux : arborescence, navigation, manipulation de fichiers, utilisateurs et droits d'accès (chmod/chown)",
            project: "Script bash d'audit automatisé des permissions de fichiers sensibles",
          },
          {
            week: "Semaine 6",
            title: "Architecture Windows, Services, Registre & Journaux d'Événements",
            topic: "Architecture Windows : gestionnaire de tâches, registre Windows, services et journaux d'événements (Event Viewer)",
            project: "Investigation d'un compte utilisateur suspect via les logs Windows",
          },
        ],
      },
    ],
    pricing: {
      packComplet: {
        price: "35,000 DA",
        originalPrice: "45,000 DA",
        savings: "Programme idéal pour démarrer",
        durationLabel: "32 heures de formation pratique",
        features: [
          "Tous les ateliers pratiques sur environnements Linux & Windows",
          "Accès aux laboratoires d'analyse réseau Wireshark",
          "Certificat de réussite CYBERLYMPH Pre-Security",
          "Accompagnement et mentorat pour choisir sa spécialisation",
          "Pause café offerte ☕ à chaque session",
        ],
      },
      earlyBird: {
        price: "29,000 DA",
        originalPrice: "35,000 DA",
        discountText: "Tarif spécial débutants pour les 8 premiers inscrits",
        seatsLeft: 5,
        totalSeats: 15,
      },
    },
    benefits: [
      { iconName: "award", title: "Certificat Pre-Security", desc: "Attestation validant vos bases indispensables en cybersécurité" },
      { iconName: "terminal", title: "Pratique en Ligne de Commande", desc: "Familiarisation immédiate avec le terminal Linux et PowerShell" },
      { iconName: "coffee", title: "Pause Café Incluse", desc: "Cadre convivial propice à l'apprentissage et au networking" },
      { iconName: "users", title: "Orientation Carrière Dédiée", desc: "Conseils personnalisés pour s'orienter vers le Pentest ou le SOC" },
    ],
    faqs: [
      {
        q: "Faut-il avoir des connaissances préalables en informatique ?",
        a: "Non, absolument aucune. Le cours démarre de zéro et explique chaque concept avec des analogies concrètes et des travaux pratiques guidés.",
      },
      {
        q: "Vers quelles formations puis-je continuer après Pre-Security ?",
        a: "Pre-Security est le tremplin parfait vers le parcours Junior Penetration Tester (Offensive), le cursus SOC Level 1 (Défensive) ou Cisco CCNA 1.",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("Pre Security : Fondamentaux de la Cybersécurité", "Pack Complet", "35,000 DA"),
  },

  // 3. JUNIOR PENETRATION TESTER
  {
    id: "junior-penetration-tester",
    slug: "junior-penetration-tester-pentest-pratique",
    title: "Junior Penetration Tester : Test d'Intrusion Pratique",
    shortTitle: "Jr Pentester",
    tagline: "Reconnaissance Nmap · Metasploit · Burp Suite · OWASP Top 10 · Élévation de Privilèges",
    category: "security",
    categoryLabel: "Test d'Intrusion & Sécurité Offensive",
    badge: "100% Pratique — Offensive Security",
    badgeType: "hot",
    partner: "CYBERLYMPH Offensive Lab",
    duration: "48 heures · 10 semaines",
    totalHours: 48,
    modulesCount: 4,
    projectsCount: 15,
    prerequisites: "Bases des réseaux (TCP/IP) et manipulation basique de Linux",
    location: "Laboratoire de Pentest & Sandbox Virtuelle",
    level: "Intermédiaire",
    summary:
      "Devenez Pentester junior opérationnel. Maîtrisez la reconnaissance avec Nmap, l'exploitation réseau avec Metasploit, le pentest web avec Burp Suite et l'élévation de privilèges sous Linux et Windows.",
    description:
      "Le métier de Penetration Tester (hacker éthique) consiste à éprouver la résistance des systèmes d'information en utilisant les mêmes tactiques que les attaquants malveillants. Ce programme intensif vous guide de la phase de reconnaissance (OSINT, Nmap) à l'exploitation de vulnérabilités web (OWASP Top 10), jusqu'à l'élévation de privilèges (Root/Admin), le pivoting interne et la rédaction de rapports professionnels.",
    accentGradient: "from-red-500 via-orange-500 to-amber-500",
    glowColor: "rgba(239, 68, 68, 0.25)",
    tags: ["Burp Suite", "Metasploit", "Nmap", "OWASP Top 10", "Privilege Escalation", "Pivoting", "SQLi", "XSS"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Test d'Intrusion Final sur Machine Cible ⭐",
      title: "Pentest Black-Box Complet : Brèche Initiale, Élévation de Privilèges & Rapport CVSS",
      description:
        "Sur une infrastructure cible inconnue : scanning initial de ports avec Nmap, découverte et exploitation d'une faille web avec Burp Suite, obtention d'un shell distant, élévation locale de privilèges (Linux SUID/Capabilities) vers Root, et rédaction d'un rapport de pentest professionnel client-ready.",
      tags: ["Black-Box Pentest", "Reverse Shell", "Burp Suite Pro", "Linux Root Escalation", "CVSS v3.1"],
    },
    modules: [
      {
        number: "01",
        title: "Méthodologie du Pentest & Reconnaissance Active / Passive",
        duration: "12 heures · Semaines 1 à 2",
        iconName: "search",
        description:
          "Règles d'engagement, éthique, collecte d'informations OSINT, scanning avancé Nmap, scripts NSE et énumération de services réseau (SMB, SSH, FTP).",
        weeks: [
          {
            week: "Semaine 1",
            title: "Méthodologie du Test d'Intrusion & Reconnaissance Passive (OSINT)",
            topic: "Les phases d'un test d'intrusion, reconnaissance passive (OSINT, Shodan, dorks) et périmètres autorisés",
            project: "Dossier de renseignement et surface d'attaque d'une entreprise virtuelle",
          },
          {
            week: "Semaine 2",
            title: "Scanning Réseau Actif avec Nmap & Scripts NSE",
            topic: "Scanning réseau en profondeur avec Nmap : techniques de furtivité, détection de versions et scripts NSE",
            project: "Cartographie et énumération complète des services ouverts sur une cible",
          },
        ],
      },
      {
        number: "02",
        title: "Recherche de Vulnérabilités & Exploitation avec Metasploit",
        duration: "12 heures · Semaines 3 à 4",
        iconName: "terminal",
        description:
          "Exploitation de failles connues avec Exploit-DB, SearchSploit, architecture du Metasploit Framework, payloads Meterpreter et handlers.",
        weeks: [
          {
            week: "Semaine 3",
            title: "Recherche de Failles Publiques, Analyse de CVEs & Searchsploit",
            topic: "Recherche et vérification d'exploits publics, analyse de CVEs et compilation de PoC (Proof of Concept)",
            project: "Exploitation d'un serveur applicatif obsolète non corrigé",
          },
          {
            week: "Semaine 4",
            title: "Maîtrise de Metasploit Framework & Payloads Meterpreter",
            topic: "Maîtrise de Metasploit Framework : modules d'exploit, auxiliary scanners, payloads staged vs non-staged et sessions Meterpreter",
            project: "Obtention d'un shell distant via Metasploit et collecte d'informations système",
          },
        ],
      },
      {
        number: "03",
        title: "Test d'Intrusion Web & OWASP Top 10",
        duration: "12 heures · Semaines 5 à 7",
        iconName: "zap",
        description:
          "Utilisation du proxy Burp Suite, interception de requêtes, Injections SQL manuelles et automatisées (SQLmap), XSS, IDOR et failles d'authentification.",
        weeks: [
          {
            week: "Semaine 5",
            title: "Proxy Burp Suite : Interception & Manipulation de Requêtes HTTP",
            topic: "Prise en main du proxy Burp Suite : interception, Repeater, Intruder et manipulation de paramètres HTTP",
            project: "Contournement de formulaires d'authentification avec Burp Suite",
          },
          {
            week: "Semaine 6",
            title: "Injections SQL Manuelles & Exploitation Automatique avec SQLmap",
            topic: "Failles d'injection : SQL Injection (in-band, blind, time-based) et exploitation automatique avec SQLmap",
            project: "Extraction de base de données via injection SQL sur application vulnérable",
          },
          {
            week: "Semaine 7",
            title: "Cross-Site Scripting (XSS), IDOR & Failles de Contrôle d'Accès",
            topic: "Cross-Site Scripting (XSS réfléchi/stocké), Broken Access Control et IDOR (Insecure Direct Object References)",
            project: "Vol de cookie de session administrateur par payload XSS",
          },
        ],
      },
      {
        number: "04",
        title: "Élévation de Privilèges, Pivoting & Rapport de Mission",
        duration: "12 heures · Semaines 8 à 10",
        iconName: "shield",
        description:
          "Passer d'un utilisateur restreint à administrateur Root/SYSTEM (SUID, sudo, tâches cron), pivoting réseau et rédaction du rapport client avec score CVSS.",
        weeks: [
          {
            week: "Semaine 8",
            title: "Élévation de Privilèges sous Linux (SUID, Sudo & Noyau)",
            topic: "Élévation de privilèges sous Linux : binaires SUID mal configurés, droits sudo excessifs et exploits noyau",
            project: "Élévation de privilèges vers Root sur machine Linux d'entraînement",
          },
          {
            week: "Semaine 9",
            title: "Élévation Windows & Pivoting Réseau (Tunnels SSH)",
            topic: "Bases de l'élévation de privilèges sous Windows et pivoting réseau (rebond interne avec tunnels SSH)",
            project: "Pivoting vers un segment réseau interne non exposé à Internet",
          },
          {
            week: "Semaine 10",
            title: "Grand Test d'Intrusion Black-Box & Rapport d'Audit CVSS v3.1",
            topic: "Rédaction d'un rapport de test d'intrusion professionnel, cotation CVSS et plan de remédiation technique",
            project: "Grand Test d'Intrusion Black-Box final et livraison du rapport d'audit",
          },
        ],
      },
    ],
    pricing: {
      packComplet: {
        price: "52,000 DA",
        originalPrice: "75,000 DA",
        savings: "Cursus pratique complet de 48 heures",
        durationLabel: "48 heures · 10 semaines de laboratoire offensif",
        features: [
          "Accès aux machines cibles virtuelles de pentest dédiées",
          "Licences d'outils et environnements Kali Linux configurés",
          "Ateliers pratiques sur Nmap, Metasploit, Burp Suite et SQLmap",
          "Méthodologie d'élévation de privilèges Linux/Windows",
          "Certificat CYBERLYMPH Junior Penetration Tester",
          "Templates de rapports d'audit de sécurité professionnels",
        ],
      },
      earlyBird: {
        price: "45,000 DA",
        originalPrice: "52,000 DA",
        discountText: "Tarif spécial pour les 6 premiers inscrits",
        seatsLeft: 3,
        totalSeats: 12,
      },
    },
    benefits: [
      { iconName: "award", title: "Certificat Jr Penetration Tester", desc: "Attestation de vos capacités réelles à exécuter un audit offensif" },
      { iconName: "terminal", title: "Machines Vulnérables Réelles", desc: "Entraînement sur des cibles configurées avec des vulnérabilités authentiques" },
      { iconName: "book", title: "Méthodologie Professionnelle", desc: "Normes PTES et conformité aux règles déontologiques" },
      { iconName: "coffee", title: "Pause Café Incluse", desc: "Sessions conviviales et partage de techniques entre passionnés" },
      { iconName: "users", title: "Mentorat de Pentesters Actifs", desc: "Formateurs exerçant en cabinet d'audit et cybersécurité offensive" },
    ],
    faqs: [
      {
        q: "Ce cours prépare-t-il à des certifications de pentest reconnues ?",
        a: "Oui ! Le programme couvre toutes les compétences pratiques attendues pour des certifications d'entrée en pentest comme l'eJPT, le CEH Practical ou le PJPT.",
      },
      {
        q: "Faut-il savoir coder pour devenir Pentester ?",
        a: "Il n'est pas nécessaire d'être un développeur expert, mais être capable de lire du code HTML/PHP/Python et de comprendre la structure d'un script d'exploit est indispensable et enseigné pendant le cursus.",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("Junior Penetration Tester : Test d'Intrusion Pratique", "Pack Complet", "52,000 DA"),
  },

  // 4. SOC LEVEL 1 (Security Operations Center Analyst)
  {
    id: "soc-level-1",
    slug: "soc-analyst-level-1-defense-et-detection",
    title: "SOC Analyst Level 1 : Défense & Détection d'Incidents",
    shortTitle: "SOC Level 1",
    tagline: "SIEM (Splunk / Elastic) · Wireshark · Triage d'Alertes · MITRE ATT&CK · EDR",
    category: "security",
    categoryLabel: "Défense Opérationnelle (Blue Team)",
    badge: "Métier Très Demandé — Blue Team",
    badgeType: "hot",
    partner: "CYBERLYMPH Defense Operations",
    duration: "45 heures · 9 semaines",
    totalHours: 45,
    modulesCount: 4,
    projectsCount: 14,
    prerequisites: "Connaissances de base des réseaux (TCP/IP) et des systèmes d'exploitation",
    location: "Centre Opérationnel de Sécurité Virtuel (SOC Lab)",
    level: "Intermédiaire",
    summary:
      "Devenez Analyste SOC opérationnel. Apprenez à trier des alertes de sécurité en temps réel, analyser des logs sur SIEM (Splunk, Elastic), enquêter sur des captures PCAP Wireshark et neutraliser des malwares.",
    description:
      "Le SOC (Security Operations Center) est la tour de contrôle de la sécurité des entreprises. En tant qu'analyste niveau 1, vous êtes en première ligne pour surveiller les flux, distinguer les faux positifs des vraies intrusions, analyser les attaques de phishing, enquêter sur les indicateurs de compromission (IoCs) et déclencher la réponse aux incidents selon le cadre MITRE ATT&CK.",
    accentGradient: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "rgba(59, 130, 246, 0.25)",
    tags: ["SOC Analyst", "Splunk", "Elastic SIEM", "Wireshark", "MITRE ATT&CK", "EDR", "Phishing Analysis"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Simulation d'Attaque en Temps Réel en Environnement SOC ⭐",
      title: "Investigation Complète d'une Brèche Réseau d'Entreprise sur SIEM Splunk",
      description:
        "Analyse d'un flux d'alertes simultanées : détection d'une campagne de spear-phishing, analyse de trafic malveillant avec Wireshark/Zeek, corrélation de journaux Windows Event Logs dans Splunk, identification des machines compromises et rédaction du rapport d'escalade d'incident.",
      tags: ["Splunk SPL", "PCAP Forensics", "IoC Hunting", "Incident Report", "MITRE Matrix"],
    },
    modules: [
      {
        number: "01",
        title: "Opérations en SOC & Cadres de Cyberdéfense",
        duration: "10 heures · Semaines 1 à 2",
        iconName: "shield",
        description:
          "Rôle et responsabilités de l'analyste N1, cycle de vie des alertes, gestion des faux/vrais positifs, matrice MITRE ATT&CK et Cyber Kill Chain.",
        weeks: [
          {
            week: "Semaine 1",
            title: "Organisation d'un SOC, Rôle Analyste N1 & Triage d'Alertes",
            topic: "Organisation d'un SOC, outillage de l'analyste, ticketing d'incidents et flux de travail opérationnel",
            project: "Triage et qualification d'un premier jeu d'alertes de sécurité",
          },
          {
            week: "Semaine 2",
            title: "Framework MITRE ATT&CK, Cyber Kill Chain & Pyramide de la Douleur",
            topic: "Les frameworks d'analyse de menaces : MITRE ATT&CK, Unified Kill Chain et cartographie de tactiques TTPs",
            project: "Mapping d'un rapport de cyberattaque sur la matrice MITRE ATT&CK",
          },
        ],
      },
      {
        number: "02",
        title: "Analyse de Trafic Réseau & Détection de Menaces",
        duration: "12 heures · Semaines 3 à 4",
        iconName: "network",
        description:
          "Inspection de paquets avec Wireshark et Tcpdump, analyse de protocoles suspects (DNS tunneling, requêtes HTTP anomales) et sondes NIDS (Snort/Suricata).",
        weeks: [
          {
            week: "Semaine 3",
            title: "Analyse Forensique de Paquets avec Wireshark & Filtres d'Affichage",
            topic: "Wireshark pour l'analyste SOC : filtres d'affichage avancés, suivi de flux TCP et extraction d'objets malveillants",
            project: "Enquête sur une capture PCAP contenant un malware téléchargé en clair",
          },
          {
            week: "Semaine 4",
            title: "Sondes NIDS Snort & Détection de Flux Suspects / C2",
            topic: "Systèmes de détection d'intrusion (NIDS) : règles Snort/Suricata, détection de scans et de balises C2 (Command & Control)",
            project: "Création de règles de détection personnalisées Snort",
          },
        ],
      },
      {
        number: "03",
        title: "SIEM & Analyse de Logs (Splunk & Elastic SIEM)",
        duration: "12 heures · Semaines 5 à 7",
        iconName: "server",
        description:
          "Architecture SIEM, ingestion de journaux, requêtes de recherche complexes (Splunk SPL / KQL), détection d'anomalies et création de dashboards de surveillance.",
        weeks: [
          {
            week: "Semaine 5",
            title: "Architecture SIEM & Maîtrise du Langage de Requêtes SPL (Splunk)",
            topic: "Introduction à Splunk : indexation de logs, syntaxe du langage de recherche SPL (Search Processing Language) et commandes de base",
            project: "Recherche et corrélation d'événements de connexion anormaux sur Splunk",
          },
          {
            week: "Semaine 6",
            title: "Détection d'Attaques Active Directory & Logs Windows (Event IDs)",
            topic: "Détection d'attaques sur Active Directory et serveurs Windows : échecs d'authentification massifs, création de comptes non autorisée",
            project: "Investigation d'une attaque par force brute et propagation latérale dans Splunk",
          },
          {
            week: "Semaine 7",
            title: "Tableaux de Bord de Surveillance & Alertes Automatiques en Temps Réel",
            topic: "Création de tableaux de bord de monitoring temps réel et configuration d'alertes automatiques",
            project: "Conception d'un dashboard de sécurité opérationnel pour l'équipe Blue Team",
          },
        ],
      },
      {
        number: "04",
        title: "Sécurité des Postes Clients (EDR) & Réponse aux Incidents",
        duration: "11 heures · Semaines 8 à 9",
        iconName: "terminal",
        description:
          "Analyse d'emails de phishing, extraction d'en-têtes, outils EDR, chasse aux indicateurs de compromission (IoCs) et procédures de confinement.",
        weeks: [
          {
            week: "Semaine 8",
            title: "Analyse Forensique d'Emails de Phishing & Extraction d'IoCs",
            topic: "Investigation de phishing : décodage d'en-têtes d'emails, analyse de pièces jointes suspectes et réputation d'URLs",
            project: "Analyse forensique complète d'un email de spear-phishing ciblé",
          },
          {
            week: "Semaine 9",
            title: "Agents EDR, Isolement de Postes & Procédure de Réponse à Incident (SANS)",
            topic: "Introduction aux agents EDR, isolement de machines infectées, collecte d'artefacts et cycle de réponse à incident (SANS/NIST)",
            project: "Grand exercice de simulation d'incident SOC et rédaction du rapport d'escalade",
          },
        ],
      },
    ],
    pricing: {
      packComplet: {
        price: "48,000 DA",
        originalPrice: "65,000 DA",
        savings: "Formation Blue Team certifiante",
        durationLabel: "45 heures · 9 semaines de formation pratique",
        features: [
          "Accès au laboratoire virtuel SIEM Splunk & Elastic dédié",
          "Ateliers pratiques sur PCAP Forensics avec Wireshark",
          "Scénarios réels d'analyse de phishing et de détection d'intrusions",
          "Maîtrise de la matrice d'attaque MITRE ATT&CK",
          "Certificat CYBERLYMPH Certified SOC Analyst Level 1",
          "Pause café offerte ☕ à chaque session",
        ],
      },
      earlyBird: {
        price: "42,000 DA",
        originalPrice: "48,000 DA",
        discountText: "Tarif préférentiel pour les 6 premiers inscrits",
        seatsLeft: 4,
        totalSeats: 12,
      },
    },
    benefits: [
      { iconName: "award", title: "Certificat SOC Analyst Level 1", desc: "Attestation de compétences pour intégrer une équipe de surveillance Blue Team" },
      { iconName: "server", title: "Laboratoire SIEM Splunk Réel", desc: "Pratique sur des jeux de données d'entreprises authentiques" },
      { iconName: "book", title: "Playbooks d'Investigation", desc: "Guides méthodologiques pour trier et traiter chaque type d'alerte" },
      { iconName: "coffee", title: "Pause Café Incluse", desc: "Accueil convivial à chaque session de formation" },
      { iconName: "users", title: "Formateurs Analysts Seniors", desc: "Accompagnement par des professionnels exerçant en centre de surveillance" },
    ],
    faqs: [
      {
        q: "Quelles sont les opportunités d'emploi pour un analyste SOC L1 ?",
        a: "Le rôle d'Analyste SOC N1 est l'un des postes les plus ouverts aux nouveaux diplômés en cybersécurité, au sein des banques, des opérateurs télécoms, des MSP et des centres de services managés.",
      },
      {
        q: "Quels outils apprendrai-je à utiliser ?",
        a: "Vous manipulerez concrètement le SIEM Splunk, Elastic SIEM, Wireshark, des sondes Snort/Suricata, des outils d'analyse d'emails de phishing et des plateformes de Threat Intelligence.",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("SOC Analyst Level 1 : Défense & Détection d'Incidents", "Pack Complet", "48,000 DA"),
  },

  // 5. SECURITY ENGINEER
  {
    id: "security-engineer",
    slug: "security-engineer-architecture-et-ingenierie",
    title: "Security Engineer : Architecture & Ingénierie Cyber",
    shortTitle: "Security Engineer",
    tagline: "Threat Modeling · Cryptographie & PKI · IAM & OAuth · DevSecOps · Zero Trust",
    category: "security",
    categoryLabel: "Ingénierie & Architecture de Sécurité",
    badge: "Cursus Avancé — Ingénierie",
    badgeType: "hot",
    partner: "CYBERLYMPH Engineering Lab",
    duration: "50 heures · 10 semaines",
    totalHours: 50,
    modulesCount: 4,
    projectsCount: 12,
    prerequisites: "Bases en développement logiciel, administration système ou réseaux",
    location: "Présentiel & Ateliers Cloud",
    level: "Débutant",
    summary:
      "Concevez des architectures sécurisées by design. Maîtrisez la modélisation de menaces (STRIDE), la cryptographie moderne (PKI, TLS 1.3), l'IAM d'entreprise (OAuth 2.0, OIDC, Zero-Trust) et le DevSecOps.",
    description:
      "Le rôle de l'ingénieur de sécurité est d'anticiper et éliminer les failles avant même le déploiement des applications et des infrastructures. Ce cursus de haut niveau vous forme aux méthodologies de modélisation de menaces (STRIDE/PASTA), à l'implémentation de la cryptographie (PKI d'entreprise, coffres-forts HashiCorp Vault), à la gestion d'identités (IAM cloud, fédération SSO) et aux pipelines DevSecOps automatisés.",
    accentGradient: "from-indigo-500 via-purple-600 to-pink-600",
    glowColor: "rgba(99, 102, 241, 0.25)",
    tags: ["Threat Modeling", "STRIDE", "Cryptography", "PKI", "IAM", "OAuth 2.0", "DevSecOps", "Zero Trust"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Grand Projet d'Ingénierie de Sécurité ⭐",
      title: "Conception & Sécurisation d'une Plateforme Cloud Distribuée (Architecture Zero-Trust)",
      description:
        "Modélisation des menaces avec STRIDE, mise en place d'une autorité de certification (PKI) interne avec HashiCorp Vault, configuration de l'authentification forte OIDC/MFA et sécurisation d'un pipeline CI/CD avec scans SAST/DAST automatisés.",
      tags: ["Threat Dragon", "HashiCorp Vault", "OIDC SSO", "Zero-Trust", "GitHub Actions CI/CD"],
    },
    modules: [
      {
        number: "01",
        title: "Threat Modeling & Principes de Conception Sécurisée",
        duration: "12 heures · Semaines 1 à 3",
        iconName: "shield",
        description:
          "Principes fondamentaux de sécurité logicielle (Defense-in-Depth, Least Privilege), méthodologie STRIDE, diagrammes de flux de données (DFD) et architecture Zero-Trust.",
        weeks: [
          {
            week: "Semaine 1",
            title: "Architecture Zero Trust (ZTA) & Principes du Moindre Privilège",
            topic: "Principes de conception sécurisée, surface d'attaque et philosophie Zero-Trust (ZTA)",
            project: "Analyse d'architecture et identification des points uniques de compromission",
          },
          {
            week: "Semaine 2",
            title: "Modélisation des Menaces STRIDE avec OWASP Threat Dragon",
            topic: "Modélisation des menaces avec la méthode STRIDE (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation)",
            project: "Modélisation des menaces d'une application de paiement avec OWASP Threat Dragon",
          },
          {
            week: "Semaine 3",
            title: "Évaluation Quantitative des Risques CVSS v3.1 & Remédiation",
            topic: "Évaluation quantitative des risques avec les métriques CVSS v3.1 et élaboration de contre-mesures d'architecture",
            project: "Rédaction d'une matrice de mitigation des risques d'architecture",
          },
        ],
      },
      {
        number: "02",
        title: "Cryptographie Appliquée & Infrastructure PKI",
        duration: "13 heures · Semaines 4 à 5",
        iconName: "lock",
        description:
          "Algorithmes symétriques/asymétriques (AES, RSA, ECC), hachage cryptographique, protocole TLS 1.3, certificats X.509 et gestion de secrets d'entreprise avec HashiCorp Vault.",
        weeks: [
          {
            week: "Semaine 4",
            title: "Primitives Cryptographiques (AES, RSA, ECC, Hachage & TLS 1.3)",
            topic: "Primitives cryptographiques : AES-GCM, RSA vs Courbes Elliptiques (ECC), SHA-256, HMAC et dérivation de clés (Argon2/bcrypt)",
            project: "Implémentation d'un module de chiffrement/déchiffrement sécurisé de données au repos",
          },
          {
            week: "Semaine 5",
            title: "Infrastructure à Clés Publiques (PKI) & Gestion de Secrets avec HashiCorp Vault",
            topic: "Infrastructure à clés publiques (PKI), gestion de certificats TLS/SSL et déploiement d'un coffre-fort de secrets HashiCorp Vault",
            project: "Déploiement d'une autorité de certification (CA) interne et rotation automatique des clés d'API",
          },
        ],
      },
      {
        number: "03",
        title: "Identity & Access Management (IAM) & Fédération d'Identités",
        duration: "13 heures · Semaines 6 à 7",
        iconName: "zap",
        description:
          "Authentification forte vs autorisation, protocoles OAuth 2.0, OpenID Connect (OIDC), SAML 2.0 pour le SSO, modèles RBAC/ABAC et sécurisation IAM Multi-Cloud.",
        weeks: [
          {
            week: "Semaine 6",
            title: "Protocoles d'Authentification Moderne : OAuth 2.0, JWT & OpenID Connect",
            topic: "Protocoles d'authentification moderne : OAuth 2.0 (flux d'autorisation, JWT), OpenID Connect et SAML 2.0 pour l'entreprise",
            project: "Mise en place d'un serveur d'authentification centralisé (Keycloak / OIDC) avec support MFA",
          },
          {
            week: "Semaine 7",
            title: "Contrôle d'Accès Granulaire (RBAC/ABAC) & Politiques Cloud IAM",
            topic: "Contrôle d'accès granulaire : RBAC (Role-Based), ABAC (Attribute-Based) et durcissement des politiques IAM cloud (AWS/Azure)",
            project: "Configuration de politiques IAM cloud strictes selon le principe du moindre privilège",
          },
        ],
      },
      {
        number: "04",
        title: "Sécurité Logicielle, Conteneurs & DevSecOps",
        duration: "12 heures · Semaines 8 à 10",
        iconName: "terminal",
        description:
          "Intégration de la sécurité dans les pipelines CI/CD : analyse statique (SAST), analyse dynamique (DAST), scan de dépendances (SCA) et durcissement Docker/Kubernetes.",
        weeks: [
          {
            week: "Semaine 8",
            title: "Pipelines DevSecOps Automatisés (SAST Semgrep, DAST & GitHub Actions)",
            topic: "Méthodologie DevSecOps : automatisation des tests de sécurité dans les pipelines CI/CD (GitHub Actions / GitLab CI)",
            project: "Intégration de scanners de code statique (Semgrep, SonarQube) bloquant les vulnérabilités au push",
          },
          {
            week: "Semaine 9",
            title: "Sécurité des Conteneurs Docker & Scans de Vulnérabilités Trivy",
            topic: "Sécurité des conteneurs : création d'images Docker minimales, scans de vulnérabilités (Trivy) et sécurité Kubernetes",
            project: "Audit et durcissement complet d'une image Docker de production",
          },
          {
            week: "Semaine 10",
            title: "Soutenance Finale d'Architecture Sécurisée & Zero-Trust",
            topic: "Grand projet d'intégration : architecture Zero-Trust complète et revue de code de sécurité",
            project: "Soutenance du grand projet d'architecture sécurisée",
          },
        ],
      },
    ],
    pricing: {
      packComplet: {
        price: "55,000 DA",
        originalPrice: "80,000 DA",
        savings: "Cursus d'ingénierie de haut niveau",
        durationLabel: "50 heures · 10 semaines de spécialisation",
        features: [
          "Formation complète en Threat Modeling, PKI, IAM et DevSecOps",
          "Laboratoires pratiques sur HashiCorp Vault, Keycloak et Docker",
          "Modèles d'architecture Zero-Trust d'entreprises réutilisables",
          "Certificat CYBERLYMPH Certified Security Engineer",
          "Pause café offerte ☕ et mentorat technique individuel",
        ],
      },
      earlyBird: {
        price: "48,000 DA",
        originalPrice: "55,000 DA",
        discountText: "Tarif spécial pour les 6 premiers inscrits",
        seatsLeft: 4,
        totalSeats: 12,
      },
    },
    benefits: [
      { iconName: "award", title: "Certificat Security Engineer", desc: "Titre certifiant votre maîtrise de l'architecture et de l'ingénierie cyber" },
      { iconName: "lock", title: "Technologies Industrielles", desc: "Mise en œuvre réelle de HashiCorp Vault, Keycloak OIDC et SonarQube" },
      { iconName: "book", title: "Templates d'Architecture", desc: "Bibliothèque de patterns de sécurité Zero-Trust prêts au déploiement" },
      { iconName: "coffee", title: "Pause Café Incluse", desc: "Cadre convivial propice aux échanges techniques de haut niveau" },
      { iconName: "users", title: "Architectes Cyber Chevronnés", desc: "Formateurs certifiés CISSP et Cloud Security Architects" },
    ],
    faqs: [
      {
        q: "Quelle est la différence entre un Pentester et un Security Engineer ?",
        a: "Le Pentester recherche et exploite les failles sur des systèmes déjà en place (approche offensive). Le Security Engineer conçoit et implémente les défenses, l'authentification et les architectures pour empêcher l'apparition de failles (approche ingénierie et préventive).",
      },
      {
        q: "Le cours aborde-t-il la sécurité dans le Cloud ?",
        a: "Oui, les modules d'IAM, de gestion de secrets et de DevSecOps s'appliquent directement aux environnements modernes multi-cloud (AWS, Azure, GCP).",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("Security Engineer : Architecture & Ingénierie Cyber", "Pack Complet", "55,000 DA"),
  },

  // 6. CISCO CCNA 1 (ITN v7.02)
  {
    id: "cisco-ccna-1",
    slug: "cisco-ccna-1-introduction-aux-reseaux",
    title: "Cisco CCNA 1 : Introduction aux Réseaux (ITN)",
    shortTitle: "CCNA 1 (ITN)",
    tagline: "Programme Officiel Cisco Networking Academy · Packet Tracer & Équipements Réels",
    category: "network",
    categoryLabel: "Réseaux & Télécommunications Cisco",
    badge: "Programme Officiel Cisco NetAcad",
    badgeType: "open",
    partner: "Cisco Networking Academy",
    duration: "60 heures · 10 semaines",
    totalHours: 60,
    modulesCount: 4,
    projectsCount: 15,
    prerequisites: "Aucun prérequis spécifique — Maîtrise basique de l'informatique",
    location: "Laboratoire Réseau & Simulation Cisco Packet Tracer",
    level: "Débutant",
    summary:
      "Premier volet de la certification mondiale Cisco CCNA 200-301. Maîtrisez l'architecture des réseaux, l'adressage IPv4/IPv6, le routage et la configuration des switchs et routeurs Cisco IOS.",
    description:
      "Ce cursus officiel Cisco Networking Academy vous plonge dans les couches du modèle OSI et TCP/IP. Vous apprendrez à configurer en CLI des commutateurs (switches) et des routeurs Cisco, à calculer des sous-réseaux IPv4 (VLSM) et IPv6, et à diagnostiquer des infrastructures réseau d'entreprise.",
    accentGradient: "from-sky-400 via-blue-600 to-indigo-700",
    glowColor: "rgba(14, 165, 233, 0.25)",
    tags: ["Cisco CCNA", "Packet Tracer", "IPv4 Subnetting", "IPv6", "Cisco IOS", "Switching", "Routing"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Épreuve Pratique Finale de Synthèse Réseau Cisco ⭐",
      title: "Déploiement d'une Infrastructure d'Entreprise Multi-Sites avec Cisco IOS",
      description:
        "Configuration complète sous Packet Tracer et sur racks Cisco réels (Catalyst 2960 & Routeurs 2901/4000) : découpage VLSM de sous-réseaux IPv4/IPv6, routage inter-VLANs, sécurisation SSH/Console, restriction de ports (Port Security) et mise en place de serveurs DHCP/DNS.",
      tags: ["Cisco CLI", "VLANs", "Inter-VLAN Routing", "IPv4/IPv6", "Port Security", "Packet Tracer"],
    },
    modules: [
      {
        number: "01",
        title: "Fondamentaux des Réseaux & Modèles OSI / TCP-IP",
        duration: "15 heures · Semaines 1 à 3",
        iconName: "network",
        description:
          "Exploration des architectures LAN/WAN, protocoles réseau, encapsulation de données, modèles de référence OSI (7 couches) et TCP/IP.",
        weeks: [
          {
            week: "Semaine 1",
            title: "Topologies Réseau, Composants LAN/WAN & Représentations",
            topic: "Le réseau aujourd'hui : composants, topologies LAN/WAN, supports et représentations",
            project: "Atelier Packet Tracer : Cartographie et schéma d'un réseau local",
          },
          {
            week: "Semaine 2",
            title: "Protocoles & Modèles de Communication (OSI 7 Couches vs TCP/IP)",
            topic: "Protocoles et modèles : suites de communication, standardisation OSI vs TCP/IP",
            project: "Analyse de trames et encapsulation avec Cisco Packet Tracer",
          },
          {
            week: "Semaine 3",
            title: "Couche Physique & Liaison de Données (Câblage, Ethernet 802.3 & Adresses MAC)",
            topic: "Couche Physique et Liaison de Données : câblage UTP/Fibre, trame Ethernet 802.3 et adresses MAC",
            project: "Création et test de câbles RJ45 droits/croisés + inspection de table MAC",
          },
        ],
      },
      {
        number: "02",
        title: "Adressage Réseau : IPv4 Subnetting (VLSM) & IPv6",
        duration: "15 heures · Semaines 4 à 5",
        iconName: "terminal",
        description:
          "Calcul binaire, classes d'adresses, masques sous-réseaux à longueur variable (VLSM), types d'adresses IPv6 (Unicast, Multicast, Anycast) et autoconfiguration SLAAC.",
        weeks: [
          {
            week: "Semaine 4",
            title: "Structure IPv4, Masques de Sous-Réseau & Calcul Binaire",
            topic: "Structure des adresses IPv4, classes d'adresses, masques CIDR et segmentation binaire",
            project: "Exercices intensifs de calcul de sous-réseaux et optimisation d'espace d'adressage",
          },
          {
            week: "Semaine 5",
            title: "Sous-Réseaux à Longueur Variable (VLSM) & Adressage Global IPv6",
            topic: "Découpage avancé VLSM & Transition IPv6 : notation hexadécimale, Link-Local et Global Unicast",
            project: "Plan d'adressage complet IPv4/IPv6 pour une entreprise multi-départements",
          },
        ],
      },
      {
        number: "03",
        title: "Configuration Initiale des Switchs & Routeurs Cisco (IOS)",
        duration: "15 heures · Semaines 6 à 7",
        iconName: "server",
        description:
          "Prise en main du système d'exploitation Cisco IOS, modes d'exécution, configuration de base, sécurisation des accès (Console, VTY, Enable Secret) et interfaces de gestion.",
        weeks: [
          {
            week: "Semaine 6",
            title: "Navigation CLI Cisco IOS & Configuration Initiale des Switchs Catalyst",
            topic: "Navigation Cisco IOS CLI, fichiers de configuration (running-config / startup-config) et nommage",
            project: "Configuration initiale complète d'un commutateur Catalyst 2960",
          },
          {
            week: "Semaine 7",
            title: "Configuration d'Interfaces Routeurs, Passerelle par Défaut & Accès Sécurisé SSH",
            topic: "Configuration d'interfaces réseau sur routeurs Cisco, passerelle par défaut et accès distant SSH",
            project: "Configuration et sécurisation d'un routeur Cisco avec SSH v2 et bannières MOTD",
          },
        ],
      },
      {
        number: "04",
        title: "Couches Transport & Application, Services IP & Sécurité",
        duration: "15 heures · Semaines 8 à 10",
        iconName: "shield",
        description:
          "Protocoles TCP vs UDP, numéros de ports, protocoles applicatifs (DNS, DHCP, HTTP, FTP) et principes fondamentaux de sécurité des périphériques réseau.",
        weeks: [
          {
            week: "Semaine 8",
            title: "Protocoles de Transport : Fiabilité TCP (3-Way Handshake) vs Vitesse UDP",
            topic: "Couche Transport : fiabilité TCP (3-Way Handshake) vs rapidité UDP, ports connus et éphémères",
            project: "Capture et analyse des sessions TCP/UDP avec Packet Tracer",
          },
          {
            week: "Semaine 9",
            title: "Services IP Fondamentaux : Configuration DHCP, DNS & Requêtes ARP",
            topic: "Services réseau critiques : configuration de serveur DHCP, résolution DNS et requêtes ARP",
            project: "Déploiement d'une infrastructure avec adressage automatique DHCP",
          },
          {
            week: "Semaine 10",
            title: "Sécurisation des Ports de Switch (Port Security) & Synthèse CCNA ITN",
            topic: "Sécurisation des ports de switch (Port Security), désactivation des ports inutilisés et évaluation finale",
            project: "Grand Lab de Synthèse Cisco CCNA ITN Skills Assessment",
          },
        ],
      },
    ],
    pricing: {
      packComplet: {
        price: "45,000 DA",
        originalPrice: "60,000 DA",
        savings: "Tarif promotionnel de lancement",
        durationLabel: "60 heures · 10 semaines intensives",
        features: [
          "Programme officiel Cisco Networking Academy CCNA 1 (ITN)",
          "Accès officiel à la plateforme Cisco NetAcad & matériels de cours",
          "Travaux pratiques sur simulateur Packet Tracer & switches réels",
          "Préparation aux examens officiels Cisco CCNA 200-301",
          "Badge numérique Cisco certifié & Certificat de réussite NetAcad",
          "Pause café & support continu d'instructeurs certifiés Cisco",
        ],
      },
      earlyBird: {
        price: "39,000 DA",
        originalPrice: "45,000 DA",
        discountText: "Tarif préférentiel pour les 8 premières inscriptions",
        seatsLeft: 5,
        totalSeats: 15,
      },
    },
    benefits: [
      { iconName: "award", title: "Certificat Cisco NetAcad", desc: "Badge officiel Cisco Networking Academy reconnu mondialement" },
      { iconName: "terminal", title: "Labs Cisco Réels & Virtuels", desc: "Pratique sur commutateurs Catalyst, routeurs et Packet Tracer" },
      { iconName: "book", title: "Accès Cisco Learning Network", desc: "Supports interactifs officiels, quiz de chapitre et évaluations" },
      { iconName: "coffee", title: "Pause Café Incluse", desc: "Accueil convivial à chaque session de laboratoire" },
      { iconName: "users", title: "Instructeurs Certifiés", desc: "Formateurs certifiés Cisco CCNA / CCNP" },
      { iconName: "building", title: "Laboratoire Réseau Dédié", desc: "Espace équipé avec baies de brassage et consoles Cisco" },
    ],
    faqs: [
      {
        q: "Ce cours prépare-t-il au nouvel examen Cisco CCNA 200-301 ?",
        a: "Oui ! Le cours CCNA 1 (Introduction to Networks - ITN) constitue le premier des trois modules indispensables pour se présenter à l'examen de certification mondial Cisco Certified Network Associate (CCNA 200-301).",
      },
      {
        q: "Faut-il savoir coder pour faire du CCNA ?",
        a: "Non, aucune compétence en programmation n'est requise. Le cours aborde les protocoles réseau, le calcul binaire pour les sous-réseaux et la syntaxe CLI Cisco IOS pas à pas.",
      },
      {
        q: "Obtiendrai-je un certificat à la fin ?",
        a: "Oui, les étudiants validant les examens de chapitre et l'examen final sur la plateforme Cisco NetAcad reçoivent un certificat officiel Cisco Networking Academy ainsi qu'un badge numérique officiel à partager sur LinkedIn.",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("Cisco CCNA 1 : Introduction aux Réseaux (ITN)", "Pack Complet", "45,000 DA"),
  },

  // 7. ETHICAL HACKING (Official Cisco NetAcad Ethical Hacker Curriculum)
  {
    id: "cisco-ethical-hacking",
    slug: "cisco-ethical-hacker-pentesting",
    title: "Ethical Hacker (Programme Officiel Cisco)",
    shortTitle: "Cisco Ethical Hacker",
    tagline: "Programme Officiel Cisco Networking Academy · Kali Linux · OWASP · Pentesting",
    category: "security",
    categoryLabel: "Cybersécurité Offensive Officielle",
    badge: "Programme Officiel Cisco NetAcad",
    badgeType: "hot",
    partner: "Cisco Networking Academy",
    duration: "70 heures · 12 semaines",
    totalHours: 70,
    modulesCount: 5,
    projectsCount: 16,
    prerequisites: "Notions en réseaux (CCNA recommandé) ou administration système de base",
    location: "Laboratoire Virtuel Kali Linux & Sandbox d'Entraînement Cisco",
    level: "Intermédiaire à Avancé",
    summary:
      "Cursus officiel Cisco Networking Academy de 70 heures. Maîtrisez les 10 modules Cisco d'audit offensif, de reconnaissance OSINT, d'exploitation réseau/web et de rédaction de rapports de pentest professionnels.",
    description:
      "Basé sur le programme officiel Cisco 'Ethical Hacker' de la Networking Academy, ce cursus vous forme aux règles d'engagement professionnelles, aux attaques sur réseaux câblés et sans-fil, à l'exploitation des failles applicatives OWASP Top 10 et aux techniques de post-exploitation sous Kali Linux.",
    accentGradient: "from-red-500 via-rose-600 to-amber-600",
    glowColor: "rgba(225, 29, 72, 0.25)",
    tags: ["Cisco NetAcad", "Ethical Hacking", "Kali Linux", "Metasploit", "OWASP Top 10", "Nmap", "Wi-Fi Hacking"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Examen Pratique & CTF Cisco Ethical Hacker ⭐",
      title: "Test d'Intrusion Complet d'une Infrastructure d'Entreprise & Rapport d'Audit",
      description:
        "Sur une infrastructure réseau d'entreprise virtualisée (environnements Kali Linux) : reconnaissance passive/active (OSINT & Nmap), identification des failles de configuration, exploitation de serveurs vulnérables, pivoting réseau, compromission de base de données et rédaction d'un rapport de restitution professionnel conforme aux normes Cisco.",
      tags: ["Kali Linux", "Metasploit", "Privilege Escalation", "Pivoting", "Audit Report", "Cisco CTF"],
    },
    modules: [
      {
        number: "01",
        title: "Introduction au Hacking Éthique, Législation & Scoping (Modules Cisco 1-2)",
        duration: "14 heures · Semaines 1 à 2",
        iconName: "shield",
        description:
          "Cadre juridique du test d'intrusion, déontologie, règles d'engagement (Rules of Engagement), scoping et posture de l'attaquant selon les standards Cisco.",
        weeks: [
          {
            week: "Semaine 1",
            title: "Typologie des Hackers, Cadre Légal & Conformité",
            topic: "Module 1 Cisco : Introduction au hacking éthique, typologie des hackers, lois et conformité légale",
            project: "Élaboration d'un contrat de pentest et règles d'engagement conformes aux standards Cisco",
          },
          {
            week: "Semaine 2",
            title: "Cadrage, Scoping & Règles d'Engagement (Rules of Engagement)",
            topic: "Module 2 Cisco : Planification et définition du périmètre (Scoping, Black/Grey/White box testing)",
            project: "Cadrage technique et définition de matrice de risques pour un audit client",
          },
        ],
      },
      {
        number: "02",
        title: "Reconnaissance, Footprinting & Ingénierie Sociale (Modules Cisco 3-4)",
        duration: "14 heures · Semaines 3 à 5",
        iconName: "terminal",
        description:
          "Collecte d'informations passive (OSINT, Shodan, Whois), scans actifs avec Nmap/Nessus, et attaques par ingénierie sociale (Phishing, Pretexting).",
        weeks: [
          {
            week: "Semaine 3",
            title: "Techniques OSINT & Footprinting Passif (theHarvester, Shodan)",
            topic: "Module 3 Cisco : Collecte d'informations et footprinting passif avec outils OSINT, theHarvester et Shodan",
            project: "Dossier de renseignement et cartographie de cibles réelles",
          },
          {
            week: "Semaine 4",
            title: "Scanning Réseau Actif & Détection de Failles (Nmap, Nessus)",
            topic: "Balayage de réseau et détection de vulnérabilités avec Nmap, scripts NSE et scanners Nessus/OpenVAS",
            project: "Audit de vulnérabilités automatisé d'un sous-réseau complet",
          },
          {
            week: "Semaine 5",
            title: "Ingénierie Sociale, Vecteurs de Phishing & Facteur Humain",
            topic: "Module 4 Cisco : Attaques d'ingénierie sociale (Phishing, simulation d'usurpation d'identité et défenses)",
            project: "Simulation de campagne d'évaluation de la vigilance des employés",
          },
        ],
      },
      {
        number: "03",
        title: "Exploitation des Réseaux Filaire & Sans-Fil (Module Cisco 5)",
        duration: "14 heures · Semaines 6 à 7",
        iconName: "network",
        description:
          "Attaques sur les protocoles de commutation et routage, interception de trafic (Sniffing, ARP Poisoning), et cassage de sécurité Wi-Fi (WPA2/WPA3).",
        weeks: [
          {
            week: "Semaine 6",
            title: "Attaques Réseaux Locaux (Man-in-the-Middle & Usurpation ARP)",
            topic: "Attaques sur réseaux filaires : écoute illicite (Man-in-the-Middle), usurpation ARP et attaques DHCP Starvation",
            project: "Lab d'interception de communications chiffrées/non-chiffrées sous Kali",
          },
          {
            week: "Semaine 7",
            title: "Audit de Sécurité Wi-Fi (802.11, Handshake WPA/WPA2 & Failles WPA3)",
            topic: "Attaques sans-fil : analyse des trames 802.11, Evil Twin, capture de Handshake WPA/WPA2 et failles WPA3",
            project: "Audit de sécurité Wi-Fi et audit de robustesse de mots de passe",
          },
        ],
      },
      {
        number: "04",
        title: "Exploitation Applicative & Cloud/IoT (Modules Cisco 6-7)",
        duration: "14 heures · Semaines 8 à 9",
        iconName: "code",
        description:
          "Attaques web basées sur l'OWASP Top 10 (Injections SQL, XSS, CSRF, authentification cassée) et spécificités de la sécurité Cloud et IoT.",
        weeks: [
          {
            week: "Semaine 8",
            title: "Exploitation Web OWASP Top 10 (SQLi, XSS, Broken Auth & SQLmap)",
            topic: "Module 6 Cisco : Failles applicatives web (SQL Injection avec SQLmap, XSS réfléchi/stocké et Broken Auth)",
            project: "Compromission d'une application web vulnérable avec extraction de base de données",
          },
          {
            week: "Semaine 9",
            title: "Sécurité Cloud, Conteneurs Docker & Objets Connectés (IoT)",
            topic: "Module 7 Cisco : Sécurité du Cloud, des environnements conteneurisés et des objets connectés (IoT)",
            project: "Audit d'API cloud non sécurisée et analyse de firmware IoT",
          },
        ],
      },
      {
        number: "05",
        title: "Post-Exploitation, Rapport d'Audit & CTF Cisco (Modules Cisco 8-10)",
        duration: "14 heures · Semaines 10 à 12",
        iconName: "zap",
        description:
          "Élévation de privilèges Linux/Windows, mouvements latéraux (Pivoting), dissimulation de traces, rédaction de rapports professionnels et CTF final Cisco.",
        weeks: [
          {
            week: "Semaine 10",
            title: "Post-Exploitation, Élévation de Privilèges & Persistance",
            topic: "Module 8 Cisco : Post-exploitation, élévation de privilèges (Linux SUID / Windows tokens) et maintien d'accès",
            project: "Prise de contrôle Root/Admin d'un serveur après brèche initiale",
          },
          {
            week: "Semaine 11",
            title: "Rapport de Pentest Professionnel & Recommandations de Remédiation",
            topic: "Module 9 Cisco : Rédaction d'un rapport de pentest professionnel, matrice CVSS et préconisations de remédiation",
            project: "Rédaction d'un rapport d'audit technique et exécutif complet",
          },
          {
            week: "Semaine 12",
            title: "Capture The Flag (CTF) Cisco Networking Academy & Certification",
            topic: "Module 10 Cisco : Analyse de code et outils offensifs + Challenge CTF Cisco U.",
            project: "Participation au Capture The Flag (CTF) Cisco final sur machines cibles",
          },
        ],
      },
    ],
    pricing: {
      packComplet: {
        price: "60,000 DA",
        originalPrice: "85,000 DA",
        savings: "Cursus officiel 70 heures",
        durationLabel: "70 heures · 10 modules Cisco complets",
        features: [
          "Programme officiel Cisco Networking Academy Ethical Hacker",
          "Couverture des 10 modules officiels Cisco NetAcad",
          "Accès aux laboratoires virtuels d'entraînement sous Kali Linux",
          "Accès aux défis Capture The Flag (CTF) exclusifs Cisco U.",
          "Préparation au Cisco Certificate in Ethical Hacking",
          "Pause café offerte ☕ et accompagnement continu",
        ],
      },
      earlyBird: {
        price: "52,000 DA",
        originalPrice: "60,000 DA",
        discountText: "Tarif spécial pour les 6 premiers inscrits",
        seatsLeft: 3,
        totalSeats: 12,
      },
    },
    benefits: [
      { iconName: "award", title: "Certificat Cisco Ethical Hacker", desc: "Attestation officielle reconnue par l'écosystème mondial Cisco" },
      { iconName: "terminal", title: "Laboratoires Virtuels Kali Linux", desc: "Machine d'entraînement dédiée avec Metasploit, Nmap et suites d'exploitation" },
      { iconName: "book", title: "Accès Cisco U. & NetAcad", desc: "Documentation officielle complète et exercices pratiques guidés" },
      { iconName: "coffee", title: "Pause Café Offerte", desc: "Ambiance de travail chaleureuse et collaborative à chaque session" },
      { iconName: "users", title: "Instructeurs Cybersécurité Certifiés", desc: "Professionnels du pentest certifiés Cisco et OSCP" },
      { iconName: "building", title: "Centre d'Innovation Partenaire", desc: "Infrastructure de pointe pour les simulations d'attaque et CTF" },
    ],
    faqs: [
      {
        q: "Ce cursus utilise-t-il le programme officiel de Cisco ?",
        a: "Oui ! La formation suit fidèlement le cursus officiel 'Ethical Hacker' de 70 heures de la Cisco Networking Academy, structuré en 10 modules couvrant toute la chaîne du test d'intrusion.",
      },
      {
        q: "Est-ce légal d'apprendre ces techniques ?",
        a: "Absolument. La formation insiste rigoureusement sur le cadre légal et déontologique (Module 1 & 2 Cisco). Toutes les attaques sont exécutées exclusivement dans un environnement de bac à sable (sandbox) isolé et autorisé.",
      },
      {
        q: "Puis-je passer la certification Cisco à la fin ?",
        a: "Oui, la formation prépare directement au 'Cisco Certificate in Ethical Hacking' et donne accès aux épreuves Capture The Flag (CTF) sur la plateforme officielle Cisco U.",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("Ethical Hacker (Programme Officiel Cisco)", "Pack Complet", "60,000 DA"),
  },

  // 8. AI SECURITY & LLM RED TEAMING
  // 8. AI SECURITY & LLM RED TEAMING (5 MODULES)
  {
    id: "ai-security",
    slug: "securite-de-ia-et-prompt-injection",
    title: "AI Security & LLM Red Teaming",
    shortTitle: "AI Security",
    tagline: "AI Fundamentals · Attacking LLMs · Secure AI Systems · Data Poisoning · Defending AI",
    category: "security",
    categoryLabel: "Sécurité Offensive & Défensive de l'IA",
    badge: "Cursus Complet en 5 Modules",
    badgeType: "hot",
    partner: "CYBERLYMPH AI Security Lab",
    duration: "55 heures · 11 semaines",
    totalHours: 55,
    modulesCount: 5,
    projectsCount: 16,
    prerequisites: "Notions de base en informatique, web ou utilisation de modèles IA",
    location: "Laboratoire de Pentest IA & Plateforme Interactive",
    level: "Intermédiaire à Avancé",
    summary:
      "Cursus complet en 5 modules couvrant l'intégralité du cycle de sécurité de l'IA : Fondamentaux AI/ML, Attaque des LLMs (Prompt Injection & Jailbreak), Architecture Sécurisée & OWASP, Empoisonnement de Données & Supply Chain, et Défense avec Guardrails.",
    description:
      "Alors que les entreprises déploient massivement des LLMs et des agents autonomes dans leurs infrastructures, l'IA Red Teaming et la défense des systèmes d'IA sont devenues les compétences les plus recherchées du secteur. Ce cursus intensif en 5 modules vous forme à auditer, attaquer, modéliser et défendre les applications d'intelligence artificielle en combinant théorie rigoureuse et travaux pratiques sur des environnements d'entraînement dédiés.",
    accentGradient: "from-purple-500 via-pink-500 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.25)",
    tags: ["AI Red Teaming", "Prompt Injection", "Jailbreak", "OWASP LLM Top 10", "BankGPT", "Data Poisoning", "RAG Security", "AI Guardrails"],
    isFeatured: true,
    isOpenForRegistration: true,
    capstoneProject: {
      highlightLabel: "Grand Projet d'Audit & Sécurisation IA ⭐",
      title: "Compromission Black-Box & Durcissement Complet d'un Agent IA d'Entreprise (Challenge BankGPT / HealthGPT)",
      description:
        "Sur une infrastructure d'agent conversationnel bancaire virtualisée : exfiltration du System Prompt, contournement des règles de sécurité par Prompt Injection indirecte, injection de données empoisonnées dans la base vectorielle RAG, puis implémentation complète des défenses correctives avec NeMo Guardrails et Llama Guard.",
      tags: ["BankGPT CTF", "Indirect Prompt Injection", "System Prompt Extraction", "RAG Defense", "NeMo Guardrails", "Llama Guard"],
    },
    modules: [
      {
        number: "01",
        title: "AI Fundamentals (Fondamentaux de l'IA & Surfaces de Menaces)",
        duration: "10 heures · Semaines 1 à 2",
        iconName: "brain",
        description:
          "Comprendre comment les modèles probabilistes diffèrent du code traditionnel, l'architecture des Transformers, les fenêtres de contexte et la cartographie des vulnérabilités de l'IA.",
        weeks: [
          {
            week: "Semaine 1",
            title: "Introduction aux Menaces AI/ML & Décalage des Paradigmes de Sécurité",
            topic: "Comment pensent les modèles d'IA, limites des garanties déterministes, taxonomie des menaces et risques systémiques",
            project: "Cartographie complète de la surface d'attaque d'une solution d'intelligence artificielle",
          },
          {
            week: "Semaine 2",
            title: "Modèles d'IA, Cycle de Vie des Données & Réseaux Transformers",
            topic: "Architecture interne des Transformers, embeddings vectoriels, tokenisation, gestion du contexte et forensics des artefacts d'IA",
            project: "Analyse forensique et détection de contenus / prompts générés par IA",
          },
        ],
        price: "20,000 DA",
      },
      {
        number: "02",
        title: "Attacking LLMs (Prompt Injection, Jailbreaking & Challenge BankGPT)",
        duration: "15 heures · Semaines 3 à 5",
        iconName: "zap",
        description:
          "Toutes les techniques offensives modernes ciblant les modèles de langage : Direct/Indirect Prompt Injection, Jailbreaking avancé, fuite de System Prompt et exploitation applicative.",
        weeks: [
          {
            week: "Semaine 3",
            title: "Direct Prompt Injection, Jailbreaking Avancé (DAN) & System Prompt Leakage",
            topic: "Techniques de contournement des politiques éthiques (jailbreaking par persona, multi-shot, obfuscation Base64) et exfiltration du System Prompt secret",
            project: "Extraction des règles secrètes et clés API cachées d'un assistant RH sécurisé",
          },
          {
            week: "Semaine 4",
            title: "Indirect Prompt Injection & Exploitation en Environnement Réel",
            topic: "Injections indirectes via sites web piégés, documents PDF malveillants et emails analysés par des agents IA autonomes",
            project: "Prise de contrôle d'un bot d'analyse de documents via un PDF contenant un payload invisible",
          },
          {
            week: "Semaine 5",
            title: "Insecure Output Handling, XSS via LLM & Challenge CTF BankGPT",
            topic: "Exploitation des sorties LLM non assainies transmises à des backends (XSS, SSRF, injection SQL) et résolution du challenge CTF BankGPT",
            project: "Challenge BankGPT : contournement de filtres bancaires pour déclencher un virement frauduleux",
          },
        ],
        price: "25,000 DA",
      },
      {
        number: "03",
        title: "Secure AI Systems (Architecture Sécurisée, OWASP LLM & Modélisation ATLAS)",
        duration: "10 heures · Semaines 6 à 7",
        iconName: "shield",
        description:
          "Concevoir des architectures IA résilientes en appliquant les référentiels internationaux OWASP Top 10 for LLMs, MITRE ATLAS et la modélisation de menaces STRIDE.",
        weeks: [
          {
            week: "Semaine 6",
            title: "Cartographie d'Architecture d'Entreprise & Frontières de Confiance (Trust Boundaries)",
            topic: "Modélisation des flux de données dans les architectures d'assistants d'entreprise, isolation des contextes et gestion des identités de service",
            project: "Conception du diagramme de flux de données sécurisé d'un agent IA d'entreprise",
          },
          {
            week: "Semaine 7",
            title: "Modélisation de Menaces IA (OWASP Top 10 for LLMs, MITRE ATLAS & STRIDE)",
            topic: "Application des frameworks de référence : Excessive Agency (LLM08), Insecure Plugin Design (LLM07) et matrice MITRE ATLAS",
            project: "Matrice d'évaluation des risques et Threat Model complet d'une intégration LLM",
          },
        ],
        price: "20,000 DA",
      },
      {
        number: "04",
        title: "Data Poisoning & AI Supply Chain Security (Empoisonnement RAG & Modèles)",
        duration: "10 heures · Semaines 8 à 9",
        iconName: "server",
        description:
          "Attaques ciblant les données d'entraînement, le fine-tuning, les bases vectorielles (RAG Poisoning) et l'intégrité de la supply chain des modèles open-source.",
        weeks: [
          {
            week: "Semaine 8",
            title: "Empoisonnement de Données d'Entraînement & Backdoors dans les Checkpoints",
            topic: "Techniques d'injection de données biaisées ou malveillantes lors du fine-tuning, backdoors dormantes déclenchées par triggers spécifiques",
            project: "Détection d'un comportement déviant injecté par empoisonnement dans un modèle de classification",
          },
          {
            week: "Semaine 9",
            title: "Sécurité de la Supply Chain IA & Vulnérabilités RAG (Vector DBs)",
            topic: "Empoisonnement de bases de données vectorielles (RAG Poisoning), risques sur les dépôts de modèles ouverts (HuggingFace Hub) et vérification d'intégrité",
            project: "Attaque par injection de faux documents dans un pipeline RAG et audit de base vectorielle",
          },
        ],
        price: "20,000 DA",
      },
      {
        number: "05",
        title: "Defending AI (Garde-fous, NeMo Guardrails & Détection d'Attaques Adversaires)",
        duration: "10 heures · Semaines 10 à 11",
        iconName: "lock",
        description:
          "Déployer des mécanismes défensifs en production : filtrage sémantique, garde-fous (NeMo Guardrails, Llama Guard), MLSecOps et détection d'attaques adverses.",
        weeks: [
          {
            week: "Semaine 10",
            title: "Validation des Entrées, Filtrage Sémantique & Implémentation de Guardrails",
            topic: "Mise en place de garde-fous stricts : NeMo Guardrails de NVIDIA, Llama Guard de Meta et validation d'entrées/sorties avec classificateurs dédiés",
            project: "Déploiement d'un proxy défensif NeMo Guardrails bloquant les injections de prompt en temps réel",
          },
          {
            week: "Semaine 11",
            title: "AI Forensics, Détection d'Attaques Adversaires & Blue Teaming Assisté par IA",
            topic: "Surveillance et observabilité des LLMs (MLSecOps), détection d'attaques adversaires d'évasion et utilisation de l'IA pour le Threat Hunting Blue Team",
            project: "Grand CTF d'évaluation pratique finale : audit offensif puis sécurisation complète d'une infrastructure IA",
          },
        ],
        price: "25,000 DA",
      },
    ],
    pricing: {
      packComplet: {
        price: "70,000 DA",
        originalPrice: "90,000 DA",
        savings: "Cursus complet 5 modules certifiant",
        durationLabel: "55 heures · 11 semaines intensives",
        features: [
          "Les 5 modules complets : AI Fundamentals, Attacking LLMs, Secure AI, Data Poisoning & Defending AI",
          "Accès aux laboratoires interactifs d'entraînement et CTF BankGPT",
          "Couverture exhaustive de l'OWASP Top 10 for LLMs et MITRE ATLAS",
          "Ateliers pratiques sur Prompt Injection, RAG Poisoning et NeMo Guardrails",
          "Certificat officiel CYBERLYMPH AI Security Specialist",
          "Pause café offerte ☕ à chaque session et mentorat dédié",
        ],
      },
      earlyBird: {
        price: "60,000 DA",
        originalPrice: "70,000 DA",
        discountText: "Réduction de 10,000 DA pour les 6 premiers inscrits",
        seatsLeft: 4,
        totalSeats: 12,
      },
      individualModules: {
        fromPrice: "20,000 DA",
        periodLabel: "par module individuel",
        items: [
          { name: "M01 : AI Fundamentals", price: "20,000 DA" },
          { name: "M02 : Attacking LLMs (Prompt Injection & CTF)", price: "25,000 DA" },
          { name: "M03 : Secure AI Systems & OWASP", price: "20,000 DA" },
          { name: "M04 : Data Poisoning & RAG Security", price: "20,000 DA" },
          { name: "M05 : Defending AI & Guardrails", price: "25,000 DA" },
        ],
      },
    },
    benefits: [
      { iconName: "terminal", title: "Laboratoire de Pentest IA Dédié", desc: "Pratique sur des scénarios réels d'attaque et d'évasion de modèles LLM" },
      { iconName: "award", title: "Certificat AI Security Specialist", desc: "Attestation de compétences sur la nouvelle frontière de la cybersécurité" },
      { iconName: "book", title: "Playbooks & Payloads Prêts à l'Emploi", desc: "Payloads d'injection, configurations de guardrails et templates de Threat Modeling" },
      { iconName: "coffee", title: "Pause Café Offerte", desc: "Échanges techniques et retours d'expérience à chaque séance" },
      { iconName: "users", title: "Encadrement par des AI Red Teamers", desc: "Formateurs spécialisés en sécurité des modèles et audit d'agents IA" },
      { iconName: "server", title: "Environnements Sandboxed", desc: "Instances dédiées pour tester sans risque les exploits de modèles" },
    ],
    faqs: [
      {
        q: "Quels sont les 5 modules abordés dans cette formation ?",
        a: "Le cursus est découpé en 5 grands modules progressifs : 1) AI Fundamentals, 2) Attacking LLMs, 3) Secure AI Systems, 4) Data Poisoning & AI Supply Chain Security, et 5) Defending AI.",
      },
      {
        q: "Qu'est-ce que le Prompt Injection exactement ?",
        a: "Le Prompt Injection est une faille où un attaquant manipule les entrées textuelles fournies à un modèle d'IA pour lui faire ignorer ses consignes de sécurité, divulguer des données confidentielles ou exécuter des actions non autorisées.",
      },
      {
        q: "Qu'est-ce que le RAG Poisoning abordé dans le Module 4 ?",
        a: "Le RAG (Retrieval-Augmented Generation) Poisoning consiste à insérer des documents malicieux ou corrompus dans la base de données vectorielle d'une entreprise pour tromper l'assistant IA et lui faire diffuser des informations erronées ou voler des données sensibles.",
      },
      {
        q: "Comment réserver sa place pour cette formation ?",
        a: "Vous pouvez réserver directement depuis cette page via WhatsApp en cliquant sur 'Réserver ma place via WhatsApp'. Notre équipe vous confirmera immédiatement les prochaines dates de session et les modalités de paiement (BaridiMob, CCP, espèces sur place).",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("AI Security & LLM Red Teaming", "Pack Complet (5 modules)", "70,000 DA"),
  },
  {
    id: "linux-fundamentals",
    slug: "linux-fundamentals",
    title: "Linux Fundamentals : Administration & Ligne de Commande (CompTIA Linux+)",
    shortTitle: "Linux Fundamentals",
    tagline: "Maîtrisez le terminal Linux, la gestion des utilisateurs, les permissions, les processus et l'automatisation bash selon les standards officiels CompTIA Linux+ (XK0-005).",
    category: "security",
    categoryLabel: "Systèmes & Administration Linux",
    badge: "1 Semaine Intensive",
    badgeType: "open",
    partner: "CompTIA Linux+ (XK0-005)",
    duration: "1 semaine intensive",
    totalHours: 15,
    modulesCount: 1,
    projectsCount: 5,
    prerequisites: "Aucun prérequis technique nécessaire. Cursus ouvert aux débutants souhaitant acquérir les bases indispensables de Linux.",
    location: "En présentiel (Bab Ezzouar / Alger) ou Hybride interactif",
    level: "Débutant",
    summary: "Une formation intensive d'une semaine axée sur les fondamentaux incontournables de Linux tirés du programme officiel CompTIA Linux+ : maîtrise du shell Bash, arborescence FHS, gestion des droits et utilisateurs, paquets, processus et introduction au scripting.",
    description: "Linux est le système d'exploitation fondamental qui propulse le Cloud, l'infrastructure Internet, le DevOps et la Cybersécurité mondiale. Cette formation intensive d'une semaine vous enseigne les compétences essentielles de la certification internationale CompTIA Linux+ (XK0-005). De la prise en main du terminal Bash à l'administration des utilisateurs, la gestion des droits chmod/chown, la supervision des processus systemd, la gestion des paquets logiciels et l'écriture de scripts Bash avec automatisation Cron, chaque session combine explications ciblées et ateliers pratiques sur machine virtuelle dédiée.",
    accentGradient: "from-amber-400 via-orange-500 to-yellow-500",
    glowColor: "rgba(245, 158, 11, 0.4)",
    tags: ["Linux", "CompTIA Linux+", "Bash", "Terminal", "Ubuntu", "Debian", "FHS", "Permissions", "SSH", "Crontab", "Administration"],
    capstoneProject: {
      title: "Déploiement et Sécurisation Complète d'un Serveur Linux de Production",
      description: "Configuration d'une instance Linux headless : arborescence FHS organisée, création d'utilisateurs restreints avec privilèges sudoers, durcissement du service OpenSSH avec clés asymétriques, règles de pare-feu UFW, et déploiement d'un script Bash de sauvegarde automatique chiffrée orchestré par crontab.",
      tags: ["Ubuntu Server", "Bash Automation", "SSH Keys", "UFW Firewall", "Crontab", "Sudoers"],
      highlightLabel: "Projet Pratique de Fin de Session",
    },
    modules: [
      {
        number: "M01",
        title: "CompTIA Linux+ : Les Fondamentaux du Système et de la Ligne de Commande",
        duration: "1 semaine · 5 sessions intensives (15h)",
        iconName: "terminal",
        description: "Programme accéléré couvrant les objectifs fondamentaux du CompTIA Linux+ (XK0-005) : navigation, gestion des fichiers, droits d'accès, gestion des packages et processus, et automatisation Bash.",
        weeks: [
          {
            week: "Jour 1 (Session 1)",
            title: "Prise en main du Shell Bash et Arborescence FHS (Navigation & Fichiers)",
            topic: "Architecture du noyau Linux, terminal et shell Bash, arborescence standard FHS (/etc, /var, /bin, /home), commandes de navigation (ls, cd, pwd), manipulation de fichiers et dossiers (cp, mv, rm, mkdir, touch), et recherche rapide avec find et locate.",
            project: "Navigation complète en terminal et organisation méthodique d'un système de fichiers d'entreprise sous Debian/Ubuntu",
          },
          {
            week: "Jour 2 (Session 2)",
            title: "Édition de Texte, Filtres et Redirections de Flux (Vim, Nano, Grep, Pipes)",
            topic: "Éditeurs de texte en ligne de commande (Nano et bases de Vim), flux standards (stdin, stdout, stderr), redirections (> , >> , 2>&1) et tubes (pipes |). Filtrage et manipulation de données textuelles avec grep, sort, uniq, cut, head, tail et wc.",
            project: "Extraction et filtrage de données précises à partir de logs systèmes bruts avec grep, awk et redirections",
          },
          {
            week: "Jour 3 (Session 3)",
            title: "Gestion des Utilisateurs, Groupes et Droits d'Accès (Chmod, Chown, Sudo, SUID)",
            topic: "Modèle de sécurité Linux : comptes utilisateurs (/etc/passwd), mots de passe (/etc/shadow), et groupes (/etc/group). Commandes useradd, usermod, groupadd. Droits d'accès rwx (lecture, écriture, exécution) en notation symbolique et octale (chmod, chown). Droits spéciaux (SUID, SGID, Sticky Bit) et privilèges administratifs avec sudo et /etc/sudoers.",
            project: "Configuration d'un environnement multi-utilisateurs cloisonné avec groupes de travail et privilèges restreints",
          },
          {
            week: "Jour 4 (Session 4)",
            title: "Gestion des Processus, Services Systemd et Gestionnaires de Paquets (APT & DNF)",
            topic: "Cycle de vie des processus Linux : identification (ps, top, htop, pgrep), signaux et interruption (kill, pkill, killall). Démarrage et contrôle des services avec systemd et systemctl (status, start, stop, restart, enable). Gestion des paquets logiciels avec APT (Debian/Ubuntu) et DNF (RHEL/Fedora) : installation, mise à jour et suppression propre.",
            project: "Installation, surveillance et gestion d'un service web (Nginx) avec analyse des ressources CPU/RAM et systemctl",
          },
          {
            week: "Jour 5 (Session 5)",
            title: "Fondamentaux Réseau, Connexion SSH Sécurisée et Scripting Bash Automatisé",
            topic: "Vérification des interfaces réseau et connectivité (ip, ping, ss, curl, netstat). Configuration et durcissement du serveur OpenSSH (génération de clés RSA/Ed25519, désactivation du login root par mot de passe). Introduction aux scripts Bash : variables, conditions if/else, boucles, et planification de tâches récurrentes avec Cron / Crontab.",
            project: "Déploiement d'un script Bash de sauvegarde automatique chiffrée avec planification crontab et accès SSH par clés",
          },
        ],
        price: "20,000 DA",
      },
    ],
    pricing: {
      packComplet: {
        price: "20,000 DA",
        savings: "Tarif unique tout inclus · 1 semaine intensive",
        durationLabel: "1 semaine intensive · 15 heures de pratique (5 sessions de 3h)",
        features: [
          "Formation complète 100% pratique basée sur CompTIA Linux+ (XK0-005)",
          "Accès aux machines virtuelles de TP Linux (Debian / Ubuntu)",
          "Aide-mémoires et cheat sheets des commandes essentielles du terminal",
          "Scripts Bash et modèles de configuration prêts à l'emploi",
          "Attestation officielle de réussite CYBERLYMPH Linux Fundamentals",
          "Pause café offerte ☕ à chaque séance en présentiel et assistance formateur",
        ],
      },
    },
    benefits: [
      { iconName: "terminal", title: "Pratique 100% en Terminal Bash", desc: "Apprentissage direct en ligne de commande sur des distributions réelles (Debian / Ubuntu)" },
      { iconName: "award", title: "Attestation Linux Fundamentals", desc: "Validez vos compétences selon les objectifs officiels du CompTIA Linux+" },
      { iconName: "book", title: "Cheat Sheet & Scripts Inclus", desc: "Répertoire exhaustif des commandes indispensables et templates de scripts Bash" },
      { iconName: "coffee", title: "Pause Café Offerte", desc: "Moments conviviaux et échanges entre passionnés à chaque session" },
      { iconName: "users", title: "Accompagnement par des Admins Système", desc: "Des formateurs chevronnés pour vous guider pas-à-pas et débloquer chaque exercice" },
      { iconName: "server", title: "Environnements Sandboxed", desc: "Pratique sans risque sur machines virtuelles préconfigurées" },
    ],
    faqs: [
      {
        q: "À qui s'adresse cette formation Linux Fundamentals ?",
        a: "Cette formation s'adresse aux débutants, étudiants, développeurs et futurs spécialistes en cybersécurité ou devops qui souhaitent acquérir une maîtrise solide et rapide de l'environnement Linux en ligne de commande.",
      },
      {
        q: "Quel est le programme abordé au cours de cette semaine ?",
        a: "Le cursus se déroule sur 5 sessions intensives couvrant l'arborescence FHS, la manipulation de fichiers, les éditeurs (Vim/Nano), les filtres et pipes (grep, awk), la gestion des utilisateurs et droits (chmod, sudo), les processus (systemd), les paquets (APT) et les scripts Bash.",
      },
      {
        q: "Cette formation prépare-t-elle à la certification CompTIA Linux+ ?",
        a: "Oui, elle couvre l'intégralité du socle fondamental des compétences requises pour l'examen officiel CompTIA Linux+ (XK0-005), constituant le tremplin idéal pour la certification.",
      },
      {
        q: "Comment s'inscrire et quelles sont les modalités de paiement ?",
        a: "L'inscription se fait directement via WhatsApp en 1 clic. Le tarif est fixé à 10,000 DA tout inclus pour la semaine. Les paiements sont acceptés par BaridiMob, virement CCP ou en espèces sur place.",
      },
    ],
    registrationUrl: getWhatsAppReservationUrl("Linux Fundamentals : CompTIA Linux+", "Pack Complet", "10,000 DA"),
    isOpenForRegistration: true,
  },
];

export function getFormationById(idOrSlug: string): Formation | undefined {
  return formationsData.find(
    (f) => f.id.toLowerCase() === idOrSlug.toLowerCase() || f.slug.toLowerCase() === idOrSlug.toLowerCase()
  );
}

export function getAllFormations(): Formation[] {
  return formationsData;
}

export function getLocalizedFormation(f: Formation, lang: string): Formation {
  if (lang === "en" && f.en) {
    return {
      ...f,
      title: f.en.title || f.title,
      shortTitle: f.en.shortTitle || f.shortTitle,
      tagline: f.en.tagline || f.tagline,
      categoryLabel: f.en.categoryLabel || f.categoryLabel,
      badge: f.en.badge || f.badge,
      duration: f.en.duration || f.duration,
      level: (f.en.level || f.level) as any,
      prerequisites: f.en.prerequisites || f.prerequisites,
      location: f.en.location || f.location,
      summary: f.en.summary || f.summary,
      description: f.en.description || f.description,
    };
  }
  return f;
}
