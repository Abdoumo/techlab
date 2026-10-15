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
  iconName: string;
  description: string;
  weeks: ModuleWeek[];
  price?: string;
}

export interface FormationBenefit {
  iconName: string;
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
  category: "ai" | "security" | "network" | "devops" | "web" | "soc" | "pentest";
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

  const text = `Bonjour CYBERLYMPH,\n\nJe souhaite réserver ma place pour la formation :\n*${formationTitle}*\n\n- Formule choisie : ${option}${price && price !== "Sur devis" ? ` (${price})` : ""}${nameLine}${phoneLine}${paymentLine}\n- Lieu : Présentiel (Annaba) / En ligne\n\nMerci de m'indiquer la démarche pour confirmer mon inscription.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export const formationsData: Formation[] = [
  {
    "id": "zero-to-ai",
    "slug": "de-zero-a-ia-appliquee",
    "title": "De Zéro à l'IA Appliquée",
    "shortTitle": "Zero2AI",
    "tagline": "Python 101 · AI Essentials · n8n Automatisation · Chatbot Telegram",
    "category": "ai",
    "categoryLabel": "Intelligence Artificielle & Automatisation",
    "badge": "Inscriptions Ouvertes — Places Limitées",
    "badgeType": "hot",
    "partner": "AIC — Annaba Innovation Center",
    "duration": "48 heures · 12 semaines",
    "totalHours": 48,
    "modulesCount": 3,
    "projectsCount": 12,
    "prerequisites": "0 prérequis — Accessible à tous les débutants",
    "location": "Présentiel à Annaba & Accès En Ligne",
    "level": "Tous niveaux",
    "summary": "Formation intensive pour maîtriser Python, concevoir vos propres modèles de Machine Learning et déployer un Chatbot Telegram intelligent autonome avec n8n.",
    "description": "Un cursus complet orienté 100% pratique pour maîtriser l'intelligence artificielle appliquée. Vous développez un portfolio de 12 projets concrets et concevez un chatbot Telegram autonome doté de mémoire conversationnelle et synchronisé avec Google Sheets.",
    "accentGradient": "from-cyan-400 via-blue-500 to-indigo-500",
    "glowColor": "rgba(6, 182, 212, 0.25)",
    "tags": [
      "Python 3",
      "Machine Learning",
      "Scikit-Learn",
      "LLMs",
      "Gemini API",
      "n8n",
      "Telegram Bot"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Grand Projet Final Réalisé par Chaque Participant ⭐",
      "title": "Chatbot Telegram IA avec Mémoire Conversationnelle & Google Sheets",
      "description": "Vous construisez et déployez de bout en bout un bot Telegram interactif propulsé par des modèles LLM (Gemini / OpenAI), capable de comprendre le langage naturel, d'exécuter des workflows automatisés n8n et de consigner automatiquement les requêtes dans Google Sheets.",
      "tags": [
        "Python",
        "Google Gemini API",
        "n8n Workflows",
        "Telegram Bot API",
        "Google Sheets DB"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Python 101 : Fondations & Automatisation",
        "duration": "16 heures · 4 semaines",
        "iconName": "code",
        "description": "Maîtrisez les fondamentaux essentiels de la programmation en Python : variables, flux conditionnels, fonctions modulaires, scraping et automatisation de fichiers.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Variables, Types de Données & Structures",
            "topic": "Introduction, variables, types et structures de données",
            "project": "Calculatrice interactive avec gestion d'erreurs"
          },
          {
            "week": "Semaine 2",
            "title": "Logique Conditionnelle, Boucles & Fonctions",
            "topic": "Conditions, boucles itératives et fonctions réutilisables",
            "project": "Générateur sécurisé de mots de passe"
          },
          {
            "week": "Semaine 3",
            "title": "Manipulation de Fichiers, Collections & Requêtes APIs",
            "topic": "Manipulation de fichiers, listes, dictionnaires & requêtes HTTP",
            "project": "Web Scraper automatisé + gestionnaire de contacts"
          },
          {
            "week": "Semaine 4",
            "title": "Librairies Fondamentales & Automatisation de Flux",
            "topic": "Librairies fondamentales & automatisation avancée",
            "project": "Automatisation de flux de fichiers & analyseur de données"
          }
        ]
      },
      {
        "number": "02",
        "title": "AI Essentials & Machine Learning",
        "duration": "16 heures · 4 semaines",
        "iconName": "brain",
        "description": "Comprenez et appliquez le Machine Learning, le Deep Learning et les LLMs modernes. Créez vos premiers modèles d'analyse et de prédiction.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Panorama de l'IA Moderne & Datasets",
            "topic": "Écosystème de l'IA, préparation et nettoyage de données",
            "project": "Pipeline d'ingestion et nettoyage de données réelles"
          },
          {
            "week": "Semaine 6",
            "title": "Apprentissage Supervisé & Régression Linéaire",
            "topic": "Modèles prédictifs, régression et classification avec Scikit-Learn",
            "project": "Modèle prédictif de scoring immobilier / commercial"
          },
          {
            "week": "Semaine 7",
            "title": "Classification & Évaluation de Modèles",
            "topic": "Arbres de décision, Random Forest et métriques d'évaluation",
            "project": "Classificateur de churn client & détection de fraudes"
          },
          {
            "week": "Semaine 8",
            "title": "Introduction aux LLMs & Prompt Engineering Avancé",
            "topic": "Architectures Transformers, tokens, context window et prompt crafting",
            "project": "Système de synthèse documentaire propulsé par Gemini"
          }
        ]
      },
      {
        "number": "03",
        "title": "Automatisation n8n & Chatbot Telegram Autonome",
        "duration": "16 heures · 4 semaines",
        "iconName": "zap",
        "description": "Connectez vos modèles à des systèmes du monde réel. Orchestrez des workflows d'automatisation sans code et code avec n8n et déployez un agent Telegram interactif.",
        "weeks": [
          {
            "week": "Semaine 9",
            "title": "Introduction à n8n & Déclencheurs Événementiels",
            "topic": "Concepts de nœuds n8n, webhooks, triggers et transformation de JSON",
            "project": "Flux de veille automatisée d'actualités tech vers Discord"
          },
          {
            "week": "Semaine 10",
            "title": "Intégration d'APIs d'IA dans les Workflows n8n",
            "topic": "Appels aux APIs OpenAI / Gemini au sein de pipelines de traitement",
            "project": "Générateur automatique de comptes-rendus d'e-mails"
          },
          {
            "week": "Semaine 11",
            "title": "Création du Bot Telegram & Gestion de Session",
            "topic": "BotFather, Telegram API, gestion de l'état utilisateur et mémoire",
            "project": "Agent Telegram interactif connecté à Google Sheets"
          },
          {
            "week": "Semaine 12",
            "title": "Déploiement en Production & Soutenance Finale",
            "topic": "Hébergement cloud 24/7, monitoring d'erreurs et soutenance",
            "project": "Soutenance publique du Grand Projet Final"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "48 heures intensives · 12 semaines",
        "features": [
          "12 Projets réels dans votre portfolio",
          "Mentorat direct en présentiel / ligne",
          "Certificat CYBERLYMPH Certified AI Developer",
          "Accès à vie aux ressources et communauté"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certificat Professionnel",
        "desc": "Attestation certifiante valorisable sur LinkedIn et CV"
      },
      {
        "iconName": "terminal",
        "title": "100% Orienté Pratique",
        "desc": "Vous codez dès la première heure sur des cas concrets d'entreprise"
      },
      {
        "iconName": "coffee",
        "title": "Espace de Coworking Inclus",
        "desc": "Environnement propice au travail collaboratif et au networking"
      },
      {
        "iconName": "users",
        "title": "Réseau d'Ingénieurs",
        "desc": "Rejoignez une communauté d'apprenants et de professionnels du numérique"
      }
    ],
    "faqs": [
      {
        "q": "Faut-il savoir programmer avant de commencer ?",
        "a": "Non, le cursus commence à la racine avec Python 101. Il est conçu pour les débutants motivés."
      },
      {
        "q": "Quel matériel est requis ?",
        "a": "Un ordinateur portable avec au moins 8 Go de RAM et une connexion Internet."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*De%20Z%C3%A9ro%20%C3%A0%20l'IA%20Appliqu%C3%A9e%20(Zero2AI)*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "soc-level-1",
    "slug": "soc-analyst-level-1-defense-et-detection",
    "title": "SOC Analyst Level 1 : Triage & Détection d'Incidents SIEM",
    "shortTitle": "SOC Level 1",
    "tagline": "Architecture SOC · Splunk · Wireshark · Zeek · Snort · Phishing & Alert Triage",
    "category": "soc",
    "categoryLabel": "Défense Cyber & Centre Opérationnel (SOC)",
    "badge": "Formation Professionnelle",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Cyber Defense Center",
    "duration": "45 heures · 9 semaines",
    "totalHours": 45,
    "modulesCount": 5,
    "projectsCount": 14,
    "prerequisites": "Notions de base sur les réseaux IP (TCP/UDP, DNS, HTTP) et les systèmes d'exploitation",
    "location": "Présentiel & SOC Lab Virtuel",
    "level": "Intermédiaire",
    "summary": "Devenez analyste SOC junior opérationnel. Apprenez à surveiller les alertes, trier les faux positifs, analyser les flux réseau et investiguer les tentatives d'intrusion avec Splunk et Wireshark.",
    "description": "Ce cursus forme les futurs analystes de sécurité de niveau 1. Plongé dans un environnement de SOC virtuel, vous traitez des alertes d'intrusion réelles, manipulez les logs de serveurs et pare-feu, menez des analyses d'e-mails d'hameçonnage et appliquez les procédures standardisées d'escalade d'incidents.",
    "accentGradient": "from-blue-600 via-cyan-500 to-teal-400",
    "glowColor": "rgba(14, 165, 233, 0.25)",
    "tags": [
      "SOC Operations",
      "Splunk",
      "Elastic SIEM",
      "Wireshark",
      "Zeek",
      "Suricata",
      "Phishing Triage",
      "Incident Escalation"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Grand Projet de Fin de Cursus SOC ⭐",
      "title": "Gestion Complète d'une Campagne de Cyberattaque Multi-Vecteurs en Environnement SIEM",
      "description": "Face à une attaque coordonnée simulant une infiltration par e-mail malveillant et mouvement latéral interne, vous triez les alertes dans Splunk, isolez les flux suspects dans Wireshark, déterminez les postes compromis et rédigez le rapport officiel d'escalade d'incident.",
      "tags": [
        "Splunk SIEM",
        "Packet Analysis",
        "IOC Extraction",
        "IR Playbook",
        "Incident Report"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Fondations du SOC & Modèles de Défense",
        "duration": "9 heures",
        "iconName": "shield",
        "description": "Comprenez l'organisation d'un Security Operations Center, la triade CIA, les niveaux d'analystes, le cycle de vie de l'incident (NIST/SANS) et la taxonomie des cybermenaces.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Organisation d'un SOC & Modèle de Responsabilité",
            "topic": "Rôles L1/L2/L3, métriques MTTD/MTTR et cadre réglementaire",
            "project": "Cartographie des processus d'un SOC d'entreprise"
          },
          {
            "week": "Semaine 2",
            "title": "Modélisation des Cyberattaques & Frameworks",
            "topic": "Cyber Kill Chain de Lockheed Martin et matrice MITRE ATT&CK",
            "project": "Reconstitution d'une intrusion via MITRE ATT&CK"
          }
        ]
      },
      {
        "number": "02",
        "title": "Analyse de Logs & SIEM Opérationnel (Splunk / Elastic)",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Collectez, indexez et corrélez les événements de sécurité à grande échelle. Écrivez des requêtes SPL expertes et concevez des règles de détection d'anomalies.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Architecture SIEM & Ingestion d'Événements",
            "topic": "Syslog, Event Logs Windows, forwarders et indexation Splunk",
            "project": "Configuration d'un forwarder et tableau de bord Splunk"
          },
          {
            "week": "Semaine 4",
            "title": "Recherche SPL & Corrélation d'Alertes",
            "topic": "Commandes de recherche Splunk (stats, eval, transaction, lookup)",
            "project": "Détection automatisée d'attaques par force brute RDP/SSH"
          }
        ]
      },
      {
        "number": "03",
        "title": "Surveillance & Analyse du Trafic Réseau",
        "duration": "10 heures",
        "iconName": "network",
        "description": "Inspectez les trames réseau jusqu'aux octets. Détectez les balises C2, les exfiltrations de données DNS et les attaques par déni de service.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Inspection Profonde de Paquets avec Wireshark",
            "topic": "Filtres d'affichage, flux TCP stream, extraction d'objets HTTP",
            "project": "Extraction d'un binaire malveillant depuis un fichier PCAP"
          },
          {
            "week": "Semaine 6",
            "title": "NIDS & Analyseurs de Trafic (Zeek / Suricata)",
            "topic": "Règles Suricata/Snort, métadonnées de connexion Zeek et alertes",
            "project": "Mise en place de règles de détection de scans Nmap"
          }
        ]
      },
      {
        "number": "04",
        "title": "Sécurité des Endpoints & Analyse Sysmon",
        "duration": "8 heures",
        "iconName": "terminal",
        "description": "Surveillez les postes de travail et serveurs. Traquez les créations de processus suspects, les connexions réseau furtives et les modifications du registre.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Télémétrie Sysmon & Événements Critiques",
            "topic": "Process Creation (Event ID 1), Network Connections, Registry modifications",
            "project": "Détection d'exécution PowerShell obfusquée via Sysmon"
          }
        ]
      },
      {
        "number": "05",
        "title": "Triage de Phishing, Threat Intelligence & Escalade",
        "duration": "8 heures",
        "iconName": "lock",
        "description": "Analysez les en-têtes d'e-mails, décodez les pièces jointes suspectes, vérifiez les indicateurs de compromission (IOCs) sur VirusTotal/AlienVault et rédigez des rapports de triage.",
        "weeks": [
          {
            "week": "Semaine 8",
            "title": "Analyse d'E-mails d'Hameçonnage (Phishing)",
            "topic": "En-têtes MIME, SPF/DKIM/DMARC, émulation de liens et sandboxing",
            "project": "Démantèlement complet d'une campagne de phishing ciblée"
          },
          {
            "week": "Semaine 9",
            "title": "Threat Intel & Procédures d'Escalade L2",
            "topic": "Plateformes MISP, feeds d'IOCs, scoring de criticité et playbooks",
            "project": "Simulation d'escalade d'incident de sécurité critique"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "45 heures · 9 semaines",
        "features": [
          "Labs pratiques sur machines virtuelles dédiées",
          "Scénarios réels de SIEM Splunk et PCAP",
          "Certificat CYBERLYMPH Certified SOC Analyst L1",
          "Accompagnement vers les carrières en cybersécurité"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certificat SOC Analyst L1",
        "desc": "Reconnaissance de vos compétences en défense et détection opérationnelle"
      },
      {
        "iconName": "shield",
        "title": "SOC Lab Collaboratif",
        "desc": "Entraînez-vous sur des données d'attaques d'entreprises réelles"
      }
    ],
    "faqs": [
      {
        "q": "Cette formation permet-elle de postuler comme Analyste SOC Junior ?",
        "a": "Oui, le cursus couvre exactement les compétences techniques et méthodologiques requises lors des entretiens d'embauche en SOC L1."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*SOC%20Analyst%20Level%201*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "soc-level-2",
    "slug": "soc-analyst-level-2-threat-hunting-malware-analysis",
    "title": "SOC Analyst Level 2 : Threat Hunting & Analyse de Menaces Avancées",
    "shortTitle": "SOC Level 2",
    "tagline": "Chasse aux Menaces · Analyse de Malware · Active Directory Forensics · Volatility · Détection C2",
    "category": "soc",
    "categoryLabel": "Défense Cyber & Investigation Avancée (SOC L2)",
    "badge": "Cursus Spécialisé",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Incident Response Unit",
    "duration": "50 heures · 10 semaines",
    "totalHours": 50,
    "modulesCount": 5,
    "projectsCount": 15,
    "prerequisites": "Avoir suivi le SOC Level 1 ou posséder de solides bases en analyse de logs et protocoles réseau",
    "location": "Présentiel & Cyber Range Privé",
    "level": "Intermédiaire à Avancé",
    "summary": "Montez d'un cran : devenez analyste SOC de niveau 2. Maîtrisez la chasse proactive aux menaces (Threat Hunting), l'analyse statique et dynamique de malwares, la rétro-ingénierie et l'analyse de mémoire vive avec Volatility.",
    "description": "Le rôle de l'analyste SOC L2 ne se limite pas à trier des alertes : il s'agit d'investiguer des incidents complexes, de désosser des binaires malveillants pour comprendre leur logique, de débusquer les attaquants dissimulés dans Active Directory et de concevoir des règles de détection prédictives (YARA / Sigma).",
    "accentGradient": "from-indigo-600 via-sky-600 to-cyan-500",
    "glowColor": "rgba(2, 132, 199, 0.25)",
    "tags": [
      "Threat Hunting",
      "Malware Analysis",
      "Ghidra",
      "Volatility 3",
      "Sigma Rules",
      "Active Directory Security",
      "C2 Detection",
      "YARA"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Grand Projet d'Investigation SOC L2 ⭐",
      "title": "Autopsie d'une Attaque APT Ciblée : Reverse de Charge Utile & Chasse Proactive AD",
      "description": "Vous enquêtez sur une intrusion avancée attribuée à un groupe étatique : extraction du malware en mémoire, désassemblage dans Ghidra, identification du protocole C2 chiffré, détection des mouvements latéraux Kerberos et publication de règles Sigma pour immuniser l'entreprise.",
      "tags": [
        "Malware Reverse Engineering",
        "Ghidra",
        "Memory Forensics",
        "Active Directory",
        "Sigma Rules"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Méthodologie de Threat Hunting & Matrice ATT&CK",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Passez de la défense réactive à la traque proactive. Formulez des hypothèses de chasse, exploitez le cadre MITRE ATT&CK et écrivez des règles de détection Sigma et YARA.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Hypothèses de Chasse & Télémétrie Avancée",
            "topic": "Construction de scénarios de menace, logs Endpoint et réseau",
            "project": "Campagne de chasse aux techniques de persistance par tâche planifiée"
          },
          {
            "week": "Semaine 2",
            "title": "Ingénierie de Détection avec Sigma & YARA",
            "topic": "Syntaxe Sigma, conversion vers Splunk/Elastic et création de signatures YARA",
            "project": "Création d'un catalogue de règles Sigma contre les outils de dump LSASS"
          }
        ]
      },
      {
        "number": "02",
        "title": "Fondements de l'Analyse de Malware (Statique & Dynamique)",
        "duration": "10 heures",
        "iconName": "shield",
        "description": "Désossez les logiciels malveillants en toute sécurité dans un environnement isolé. Analysez les en-têtes PE, débusquez l'obfuscation et observez le comportement en sandbox.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Analyse Statique & Structure du Format Portable Executable",
            "topic": "Sections PE, tables d'importation (IAT), hachages flous (SSDEEP) et chaînes",
            "project": "Triage statique de 5 échantillons de ransomwares récents"
          },
          {
            "week": "Semaine 4",
            "title": "Analyse Dynamique & Désobfuscation avec Ghidra",
            "topic": "Surveillance des appels système (Procmon, Regshot, Fiddler) et initiation à Ghidra",
            "project": "Rétro-ingénierie d'un dropper malveillant et extraction de l'URL C2"
          }
        ]
      },
      {
        "number": "03",
        "title": "Détection des Attaques sur Active Directory",
        "duration": "10 heures",
        "iconName": "lock",
        "description": "Comprenez comment les attaquants prennent le contrôle d'un domaine d'entreprise et apprenez à détecter les attaques Kerberos et les escalades de privilèges.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Attaques Kerberos : Kerberoasting & AS-REP Roasting",
            "topic": "Protocole Kerberos, tickets TGT/TGS et détection des demandes anormales",
            "project": "Détection et corrélation d'une attaque Kerberoasting dans les Event Logs"
          },
          {
            "week": "Semaine 6",
            "title": "Mouvements Latéraux & Abus de Droits DCSync",
            "topic": "WMI, PsExec, réplication malveillante DCSync et détection avec BloodHound",
            "project": "Identification d'un chemin d'escalade d'attaque Active Directory complexe"
          }
        ]
      },
      {
        "number": "04",
        "title": "Forensics Mémoire avec Volatility 3",
        "duration": "10 heures",
        "iconName": "terminal",
        "description": "Plongez dans les dumps de mémoire vive (RAM). Repérez les injections de code DLL, les hooks de noyau et les processus cachés introuvables sur le disque.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Collecte & Analyse d'Artefacts Mémoire",
            "topic": "Plugins Volatility 3 (pslist, pstree, malfind, dlllist, netscan)",
            "project": "Recherche d'injection de code furtive de type Process Hollowing"
          },
          {
            "week": "Semaine 8",
            "title": "Extraction de Secrets & Clés de Chiffrement en Mémoire",
            "topic": "Extraction de mots de passe LSASS et analyse de connexions C2 en RAM",
            "project": "Résolution complète d'un challenge de forensic mémoire forensic CTF"
          }
        ]
      },
      {
        "number": "05",
        "title": "Orchestration & Réponse aux Incidents Majeurs (SOAR)",
        "duration": "10 heures",
        "iconName": "zap",
        "description": "Automatisez la neutralisation des menaces. Concevez des playbooks de réponse SOAR pour bloquer instantanément les IP malveillantes et isoler les postes infectés.",
        "weeks": [
          {
            "week": "Semaine 9",
            "title": "Playbooks SOAR & Automatisation de la Réponse",
            "topic": "Intégration SIEM + SOAR, enrichissement d'alertes et actions de confinement",
            "project": "Conception d'un playbook d'isolation automatique d'un hôte compromis"
          },
          {
            "week": "Semaine 10",
            "title": "Gestion de Crise Cyber & Rapport d'Incident L2",
            "topic": "Coordination de cellule de crise, communication managériale et remédiation",
            "project": "Soutenance de l'enquête d'incident d'attaque APT simulée"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "50 heures · 10 semaines",
        "features": [
          "Laboratoire d'analyse de malwares hautement sécurisé",
          "Dumps de mémoire vive réels (Volatility)",
          "Certificat CYBERLYMPH Certified SOC Analyst L2",
          "Entraînement orienté scénarios d'équipes d'élite"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Professionnelle SOC L2",
        "desc": "Prouve votre aptitude à mener des enquêtes cyber de haute complexité"
      },
      {
        "iconName": "terminal",
        "title": "Reverse Engineering Réel",
        "desc": "Apprenez à manipuler les outils utilisés par les laboratoires d'analyse étatiques"
      }
    ],
    "faqs": [
      {
        "q": "Quelles sont les opportunités professionnelles après ce cursus ?",
        "a": "Ce programme ouvre l'accès aux postes d'Analyste SOC Confirmé (L2), Incident Responder, Threat Hunter et Spécialiste Détection."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*SOC%20Analyst%20Level%202*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "advanced-endpoint-investigations",
    "slug": "advanced-endpoint-investigations-forensics-edr",
    "title": "Advanced Endpoint Investigations : Forensics & Détection EDR",
    "shortTitle": "Endpoint Investigations",
    "tagline": "Windows Internals · MFT & USN Journal · Mémoire RAM · Process Injection · Velociraptor · KAPE",
    "category": "soc",
    "categoryLabel": "Forensics Numérique & Détection Endpoint",
    "badge": "Investigation de Pointe",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Digital Forensics Lab",
    "duration": "40 heures · 8 semaines",
    "totalHours": 40,
    "modulesCount": 4,
    "projectsCount": 12,
    "prerequisites": "Compréhension du fonctionnement des systèmes d'exploitation Windows et des architectures de sécurité",
    "location": "Ateliers Forensics Présentiel / En Ligne",
    "level": "Intermédiaire à Avancé",
    "summary": "Devenez un enquêteur expert des systèmes terminaux. Maîtrisez la collecte et l'analyse approfondie des artefacts Windows (MFT, Registry, Prefetch, Shimcache) et la détection d'intrusions avec les solutions EDR modernes.",
    "description": "Sur un poste compromis, les attaquants s'efforcent d'effacer leurs traces. Ce cursus vous enseigne les techniques avancées de police scientifique numérique pour exhumer les preuves invisibles : fichiers effacés, processus injectés en mémoire vive, clés de registre de persistance et mécanismes d'évasion de surveillance.",
    "accentGradient": "from-sky-500 via-indigo-600 to-blue-700",
    "glowColor": "rgba(56, 189, 248, 0.25)",
    "tags": [
      "Endpoint Forensics",
      "Velociraptor",
      "KAPE",
      "Windows Internals",
      "MFT Analysis",
      "Process Injection",
      "EDR Telemetry"
    ],
    "isFeatured": false,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Enquête Forensics Complète ⭐",
      "title": "Reconstitution Numérique Forensics d'une Exfiltration de Données via Endpoint",
      "description": "Vous recevez l'image disque brute et la capture mémoire d'un poste cadre dirigeant suspecté de compromission. Vous retracez seconde par seconde l'attaque : vecteur d'accès initial, contournement d'EDR, exfiltration de propriété intellectuelle et effacement des journaux.",
      "tags": [
        "KAPE",
        "Velociraptor",
        "MFT Explorer",
        "Timeline Analysis",
        "Forensic Evidence"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Windows Internals & Artefacts du Système de Fichiers",
        "duration": "10 heures",
        "iconName": "terminal",
        "description": "Comprenez les structures internes de Windows et le fonctionnement du système NTFS : Master File Table ($MFT), $LogFile et Journal USN.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Architecture NTFS & Artefacts de Fichiers Cachés",
            "topic": "Attributs $STANDARD_INFORMATION vs $FILE_NAME, Timestomping",
            "project": "Détection d'anti-forensics par falsification d'horodatage"
          },
          {
            "week": "Semaine 2",
            "title": "Analyse des Journaux de Transactions NTFS",
            "topic": "Reconstitution des suppressions et déplacements de fichiers via USN Journal",
            "project": "Récupération des traces de suppression d'outils d'attaque"
          }
        ]
      },
      {
        "number": "02",
        "title": "Artefacts d'Exécution & Preuves de Persistance",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Prouvez qu'un exécutable a tourné sur la machine, même s'il a été supprimé : Shimcache, Amcache, Prefetch, UserAssist et persistance dans le registre.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Preuves d'Exécution : Prefetch & Shimcache",
            "topic": "Structure des fichiers .pf, Application Compatibility Cache (Shimcache)",
            "project": "Reconstitution de la liste des binaires pirates exécutés par l'intrus"
          },
          {
            "week": "Semaine 4",
            "title": "Mécanismes de Persistance & WMI Subscriptions",
            "topic": "Run keys, services Windows, scheduled tasks et événements WMI furtifs",
            "project": "Découverte et neutralisation d'un implant persistant sans fichier (Fileless)"
          }
        ]
      },
      {
        "number": "03",
        "title": "Chasse en Mémoire & Techniques d'Injection de Processus",
        "duration": "10 heures",
        "iconName": "shield",
        "description": "Traquez les menaces qui ne touchent jamais le disque dur. Détectez les injections DLL, le Process Hollowing, le Reflective DLL Loading et le Shellcode Injection.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Techniques d'Injection de Processus & Évasion EDR",
            "topic": "Mécanismes VirtualAllocEx, WriteProcessMemory, CreateRemoteThread",
            "project": "Détection en direct d'une injection de balise C2 dans svchost.exe"
          },
          {
            "week": "Semaine 6",
            "title": "Analyse de la Mémoire Vive & Dump Processus",
            "topic": "Outils Process Hacker, Sysinternals, extraction de mémoire de processus",
            "project": "Extraction de la configuration d'un agent de Command & Control"
          }
        ]
      },
      {
        "number": "04",
        "title": "Triage à l'Échelle de Milliers d'Endpoints (Velociraptor / KAPE)",
        "duration": "10 heures",
        "iconName": "zap",
        "description": "Apprenez à déployer des requêtes VQL avec Velociraptor et à automatiser la collecte d'artefacts sur un parc entier en quelques minutes.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Collecte Rapide d'Artefacts avec KAPE",
            "topic": "Targets & Modules KAPE, création de packages de collecte de preuves",
            "project": "Collecte complète d'artefacts d'un poste compromis en moins de 5 minutes"
          },
          {
            "week": "Semaine 8",
            "title": "Chasse d'Entreprise avec Velociraptor (VQL)",
            "topic": "Syntaxe VQL, déploiement d'artefacts de chasse et neutralisation à distance",
            "project": "Recherche en direct d'un hachage malveillant sur un parc de 50 serveurs"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "40 heures · 8 semaines",
        "features": [
          "Images disques d'enquêtes médico-légales authentiques",
          "Maîtrise d'outils professionnels (KAPE, Velociraptor)",
          "Certificat CYBERLYMPH Certified Endpoint Investigator",
          "Accompagnement méthodologique rigoureux"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Endpoint Forensics",
        "desc": "Validez votre capacité à conduire des enquêtes numériques judiciaires et d'entreprise"
      }
    ],
    "faqs": [
      {
        "q": "Quelles compétences acquiert-on dans ce cursus ?",
        "a": "Vous saurez analyser un système compromis de A à Z, comprendre comment un attaquant a contourné les défenses et constituer un dossier de preuves recevable."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Advanced%20Endpoint%20Investigations*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "defending-azure",
    "slug": "defending-azure-cloud-security-et-microsoft-sentinel",
    "title": "Defending Azure : Sécurité Cloud & Microsoft Sentinel",
    "shortTitle": "Defending Azure",
    "tagline": "Microsoft Entra ID · Defender for Cloud · Microsoft Sentinel · KQL · Zero Trust Cloud",
    "category": "soc",
    "categoryLabel": "Sécurité Cloud & Surveillance Azure",
    "badge": "Cloud Security",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Cloud Defense Practice",
    "duration": "40 heures · 8 semaines",
    "totalHours": 40,
    "modulesCount": 4,
    "projectsCount": 12,
    "prerequisites": "Bases des services cloud et principes fondamentaux de sécurité",
    "location": "Laboratoire Cloud Azure Dédié",
    "level": "Intermédiaire",
    "summary": "Sécurisez les environnements cloud Microsoft Azure. Protégez les identités Entra ID, configurez Defender for Cloud et menez des investigations de sécurité avancées dans Microsoft Sentinel avec le langage KQL.",
    "description": "Alors que les entreprises migrent massivement vers le cloud de Microsoft, la sécurisation des architectures Azure est devenue prioritaire. Ce cursus pratique vous apprend à verrouiller les abonnements Azure, détecter les compromissions d'accès privilégiés, surveiller les conteneurs et orchestrer la réponse aux cybermenaces avec Microsoft Sentinel.",
    "accentGradient": "from-blue-500 via-sky-500 to-indigo-600",
    "glowColor": "rgba(59, 130, 246, 0.25)",
    "tags": [
      "Microsoft Azure",
      "Entra ID",
      "Microsoft Sentinel",
      "KQL",
      "Defender for Cloud",
      "Cloud Security",
      "Conditional Access"
    ],
    "isFeatured": false,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Architecture & Détection Cloud ⭐",
      "title": "Déploiement & Sécurisation d'un SIEM/SOAR Microsoft Sentinel en Environnement Hybride",
      "description": "Vous configurez de bout en bout l'architecture de défense d'une entreprise dans Azure : règles d'accès conditionnel Entra ID, ingestion de logs multi-sources, écriture de règles de détection analytiques en KQL et automatisation de blocage d'utilisateurs compromis avec des Logic Apps.",
      "tags": [
        "Microsoft Sentinel",
        "KQL Queries",
        "Entra ID PIM",
        "Security Playbooks",
        "Cloud IR"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Identités Cloud & Microsoft Entra ID (Azure AD)",
        "duration": "10 heures",
        "iconName": "lock",
        "description": "Maîtrisez le cœur de la sécurité Azure : gestion des identités, politiques d'accès conditionnel, protection contre le vol de jetons et Privileged Identity Management (PIM).",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Architecture Entra ID & Contrôle d'Accès RBAC",
            "topic": "Rôles intégrés Azure RBAC vs rôles Entra ID, principe de moindre privilège",
            "project": "Audit de sécurité des rôles administrateurs globaux et assainissement"
          },
          {
            "week": "Semaine 2",
            "title": "Conditional Access & Authentification Forte Phishing-Resistant",
            "topic": "MFA sans mot de passe, conformité d'appareil et protection des identités",
            "project": "Implémentation d'une politique d'accès conditionnel basée sur le risque"
          }
        ]
      },
      {
        "number": "02",
        "title": "Posture de Sécurité & Microsoft Defender for Cloud",
        "duration": "10 heures",
        "iconName": "shield",
        "description": "Gérez la posture de sécurité cloud (CSPM) et protégez les charges de travail (CWPP) : machines virtuelles, stockage Azure Storage et clusters AKS.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Gestion de Posture (CSPM) & Secure Score",
            "topic": "Recommandations Azure Security Benchmark, remédiation des failles",
            "project": "Augmentation du score de sécurité Azure de 35% à plus de 85%"
          },
          {
            "week": "Semaine 4",
            "title": "Protection des Charges de Travail (Defender for Servers/Storage)",
            "topic": "Détection d'activités suspectes sur machines virtuelles et conteneurs",
            "project": "Simulation et blocage d'une attaque par exfiltration sur Azure Blob Storage"
          }
        ]
      },
      {
        "number": "03",
        "title": "Microsoft Sentinel & Investigations avec le Langage KQL",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Devenez un virtuose du Kusto Query Language (KQL). Interrogez des milliards de lignes de logs, écrivez des règles de détection et créez des classeurs analytiques.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Syntaxe KQL Avancée & Opérateurs Fondamentaux",
            "topic": "Where, summarize, extend, join, parse-json et visualisations graphiques",
            "project": "Création de 10 requêtes KQL de détection des techniques MITRE ATT&CK"
          },
          {
            "week": "Semaine 6",
            "title": "Règles Analytiques & Gestion des Incidents Sentinel",
            "topic": "Configuration de connecteurs de données, règles d'alerte et enquête visuelle",
            "project": "Investigation d'une attaque par force brute suivie d'un accès illégitime"
          }
        ]
      },
      {
        "number": "04",
        "title": "Sécurité Réseau Cloud & Automatisation SOAR",
        "duration": "10 heures",
        "iconName": "zap",
        "description": "Verrouillez le périmètre réseau Azure (NSG, Azure Firewall) et construisez des flux de réponse automatisés avec les Logic Apps de Microsoft Sentinel.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Sécurisation Réseau Azure & Endpoints Privés",
            "topic": "Network Security Groups (NSG), Azure Firewall, Application Gateway WAF",
            "project": "Architecture réseau Zero-Trust avec Private Link et DMZ sécurisée"
          },
          {
            "week": "Semaine 8",
            "title": "Automatisation de la Réponse avec Azure Logic Apps",
            "topic": "Conception de playbooks de remédiation instantanée lors d'alertes critiques",
            "project": "Déploiement d'un playbook de révocation de sessions et notification SOC"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "40 heures · 8 semaines",
        "features": [
          "Souscription Azure de laboratoire fournie",
          "Maîtrise complète de Microsoft Sentinel et KQL",
          "Certificat CYBERLYMPH Certified Azure Defense Specialist",
          "Préparation directe aux certifications cloud sécurité"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Azure Security Specialist",
        "desc": "Atteste de votre expertise sur l'écosystème cloud de sécurité Microsoft"
      }
    ],
    "faqs": [
      {
        "q": "Les crédits Azure sont-ils inclus ?",
        "a": "Oui, un environnement Azure dédié vous est mis à disposition pour exécuter tous les travaux pratiques sans coût additionnel."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Defending%20Azure*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "windows-incident-response",
    "slug": "windows-incident-response-and-forensics",
    "title": "Windows Incident Response & Forensics : Analyse Post-Intrusion",
    "shortTitle": "Windows Forensics",
    "tagline": "Méthodologie IR · NIST SP 800-61 · Artefacts Windows · Timeline Analysis · Chasse au Ransomware",
    "category": "soc",
    "categoryLabel": "Réponse aux Incidents & Forensics Numérique",
    "badge": "Investigation & Enquête",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Incident Response Unit",
    "duration": "40 heures · 8 semaines",
    "totalHours": 40,
    "modulesCount": 4,
    "projectsCount": 12,
    "prerequisites": "Bonne compréhension de Windows et des concepts de base de la sécurité des systèmes",
    "location": "Laboratoire Numérique Forensics",
    "level": "Intermédiaire",
    "summary": "Intervenez d'urgence en cas d'attaque informatique. Apprenez à contenir une intrusion active, préserver les preuves selon les normes médico-légales, reconstituer la chronologie exacte des événements et éradiquer la menace.",
    "description": "Quand un ransomware frappe ou qu'un pirate s'infiltre dans le réseau d'une organisation, les équipes d'Incident Response sont appelées sur le front. Ce cursus immersif vous apprend la conduite d'enquête post-mortem : collecte à chaud de la mémoire, analyse des journaux d'événements, reconstitution de chronologie (Timeline Analysis) et rédaction de rapports techniques officiels.",
    "accentGradient": "from-blue-600 via-indigo-700 to-purple-800",
    "glowColor": "rgba(79, 70, 229, 0.25)",
    "tags": [
      "Incident Response",
      "Windows Forensics",
      "Timeline Analysis",
      "NIST Framework",
      "Plaso",
      "FTK Imager",
      "Chain of Custody"
    ],
    "isFeatured": false,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Scénario Réel d'Incident Response ⭐",
      "title": "Enquête Complète sur une Infection Ransomware d'Entreprise : Du Phishing à l'Extorsion",
      "description": "Vous êtes dépêché auprès d'une entreprise victime d'un chiffrement massif : vous saisissez les preuves, identifiez le point d'entrée initial, suivez le cheminement de propagation de l'intrus sur le réseau, découvrez le malware utilisé et établissez le plan de remédiation définitif.",
      "tags": [
        "Ransomware Investigation",
        "Live IR",
        "Registry Forensics",
        "Evidence Chain",
        "Remediation Plan"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Méthodologie d'Incident Response & Préservation de Preuves",
        "duration": "10 heures",
        "iconName": "shield",
        "description": "Maîtrisez les standards internationaux d'intervention (NIST SP 800-61, SANS PICERL), l'ordre de volatilité des données et la chaîne de traçabilité des preuves (Chain of Custody).",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Cycle de Vie d'un Incident & Premiers Gestes de Préservation",
            "topic": "Préparation, détection, confinement, éradication, récupération et retour d'expérience",
            "project": "Élaboration d'une trousse d'intervention d'urgence (IR Triage Toolkit)"
          },
          {
            "week": "Semaine 2",
            "title": "Acquisition Médico-Légale (Forensic Imaging)",
            "topic": "FTK Imager, acquisition de mémoire vive et calcul de hachages d'intégrité",
            "project": "Création et validation conforme d'une image disque forensique brute"
          }
        ]
      },
      {
        "number": "02",
        "title": "Analyse des Événements & Artefacts Système Windows",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Exploitez les trésors cachés des journaux Windows Event Logs (Sécurité, Système, PowerShell, Sysmon) et les registres système.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Détection des Connexions & Authentifications Suspectes",
            "topic": "Event ID 4624 (Logon Types), 4625, 4720 (User Creation) et 4776",
            "project": "Détection d'une connexion anormale par vol de session RDP"
          },
          {
            "week": "Semaine 4",
            "title": "Analyse des Ruches du Registre (Registry Forensics)",
            "topic": "Ruches SYSTEM, SOFTWARE, SAM, NTUSER.DAT : clés USB, MRU, réseaux récents",
            "project": "Preuve de branchement d'une clé USB pirate ayant servi au vol de données"
          }
        ]
      },
      {
        "number": "03",
        "title": "Reconstitution Chronologique (Super Timeline Analysis)",
        "duration": "10 heures",
        "iconName": "terminal",
        "description": "Fusionnez toutes les sources de données en une chronologie unifiée pour comprendre à la seconde près les actions entreprises par l'attaquant.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Génération de Super Timelines avec Plaso / log2timeline",
            "topic": "Extraction et agrégation des horodatages MFT, logs, cache navigateur et registre",
            "project": "Génération d'une timeline d'intrusion sur une période de 48 heures"
          },
          {
            "week": "Semaine 6",
            "title": "Filtrage & Corrélation Événementielle",
            "topic": "Élimination du bruit de fond de Windows et isolation des micro-activités de l'attaquant",
            "project": "Isolement de la seconde exacte du téléchargement du malware"
          }
        ]
      },
      {
        "number": "04",
        "title": "Éradication, Remédiation & Restitution d'Enquête",
        "duration": "10 heures",
        "iconName": "zap",
        "description": "Concluez l'enquête : assurez-vous qu'aucun accès pirate résiduel ne subsiste, remettez les systèmes en production et rédigez les rapports technique et exécutif.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Éradication Complète & Durcissement Post-Incident",
            "topic": "Réinitialisation des secrets Kerberos, élimination de portes dérobées",
            "project": "Protocole de remise en service sécurisée du domaine d'entreprise"
          },
          {
            "week": "Semaine 8",
            "title": "Rédaction du Rapport d'Incident & Présentation Direction",
            "topic": "Structure d'un rapport professionnel, chronologie visuelle et recommandations",
            "project": "Rédaction et soutenance du rapport officiel d'incident d'attaque"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "40 heures · 8 semaines",
        "features": [
          "Scénarios d'attaques d'entreprises complètes",
          "Outils d'enquête standard de l'industrie",
          "Certificat CYBERLYMPH Certified Incident Responder",
          "Méthodologie conforme aux référentiels judiciaires"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Incident Response",
        "desc": "Atteste de votre capacité à diriger et exécuter des opérations de réponse à incident"
      }
    ],
    "faqs": [
      {
        "q": "Ce cours forme-t-il aux cyberattaques réelles ?",
        "a": "Absolument. Les exercices sont basés sur des cas réels de compromissions (ransomwares, vols d'identités, attaques internes)."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Windows%20Incident%20Response%20%26%20Forensics*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "junior-penetration-tester",
    "slug": "junior-penetration-tester-pentest-pratique",
    "title": "Junior Penetration Tester : Méthodologie & Pratique Offensive",
    "shortTitle": "Jr. Penetration Tester",
    "tagline": "Méthodologie Pentest · Nmap · Burp Suite · Metasploit · Élévation de Privilèges Linux & Windows",
    "category": "pentest",
    "categoryLabel": "Test d'Intrusion & Sécurité Offensive (Pentest)",
    "badge": "Cursus Essentiel Pentest",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Offensive Security Lab",
    "duration": "50 heures · 10 semaines",
    "totalHours": 50,
    "modulesCount": 5,
    "projectsCount": 16,
    "prerequisites": "Bases en réseaux informatiques et utilisation de base de la ligne de commande Linux",
    "location": "Présentiel & Cyber Range Privé",
    "level": "Intermédiaire",
    "summary": "Apprenez à hacker éthiquement comme un professionnel. Maîtrisez la reconnaissance, le scan de vulnérabilités, l'exploitation de systèmes et l'élévation de privilèges sous Linux et Windows.",
    "description": "Le test d'intrusion est l'art d'évaluer la sécurité d'un système d'information en simulant les actions d'un attaquant malveillant. Ce cursus pratique vous apprend la méthodologie rigoureuse du pentest : de la reconnaissance initiale jusqu'à la compromission totale et la rédaction du rapport d'audit.",
    "accentGradient": "from-rose-500 via-red-600 to-amber-600",
    "glowColor": "rgba(225, 29, 72, 0.25)",
    "tags": [
      "Penetration Testing",
      "Ethical Hacking",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "Privilege Escalation",
      "Linux PrivEsc",
      "Windows PrivEsc"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Épreuve Finale Pratique (Challenge CTF d'Entreprise) ⭐",
      "title": "Test d'Intrusion Complet d'une Infrastructure d'Entreprise en Boîte Noire",
      "description": "Vous recevez une adresse IP cible sans aucune information préalable. Vous identifiez les services exposés, exploitez une vulnérabilité applicative pour obtenir un accès initial, contournez les restrictions locales, élevez vos privilèges vers root / Administrateur et extrayez la preuve d'audit.",
      "tags": [
        "Black-Box Pentest",
        "Nmap Scan",
        "Web Exploitation",
        "Privilege Escalation",
        "Executive Audit Report"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Méthodologie du Pentest, Éthique & Environnement",
        "duration": "8 heures",
        "iconName": "shield",
        "description": "Comprenez les cadres légaux (droit pénal, conventions d'audit), les méthodologies standard (PTES, OWASP) et configurez votre machine d'attaque Kali Linux.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Cadre Juridique & Méthodologie d'Audit",
            "topic": "Règles d'engagement, périmètre d'audit et déontologie de l'auditeur",
            "project": "Rédaction d'une convention de pentest conforme aux normes"
          },
          {
            "week": "Semaine 2",
            "title": "Arsenal de l'Auditeur & Personnalisation de Kali",
            "topic": "Zsh, tunnels SSH, proxychains, alias d'attaque et scripts d'automatisation",
            "project": "Configuration complète d'un environnement de pentest opérationnel"
          }
        ]
      },
      {
        "number": "02",
        "title": "Reconnaissance & Énumération Avancée",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Apprenez à cartographier une cible sans déclencher les alertes : OSINT, DNS recon, cartographie Nmap furtive et énumération de services.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Reconnaissance Passive & OSINT d'Entreprise",
            "topic": "Recon-ng, theHarvester, Shodan, crt.sh et cartographie d'actifs exposés",
            "project": "Cartographie de surface d'attaque externe d'une société cible"
          },
          {
            "week": "Semaine 4",
            "title": "Scan Actif de Ports & Énumération Réseau avec Nmap",
            "topic": "Scripts NSE, scans SYN/ACK/UDP, évasion IDS et identification de versions",
            "project": "Énumération complète de 10 serveurs hétérogènes"
          }
        ]
      },
      {
        "number": "03",
        "title": "Exploitation de Vulnérabilités & Metasploit Framework",
        "duration": "10 heures",
        "iconName": "terminal",
        "description": "Exploitez les failles identifiées. Maîtrisez le framework Metasploit, comprenez le fonctionnement des payloads et manipulez les reverse shells.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Architecture Metasploit & Génération de Payloads",
            "topic": "Exploits, payloads stageless vs staged, msfvenom et handlers",
            "project": "Exploitation d'un serveur vulnérable et établissement d'une session Meterpreter"
          },
          {
            "week": "Semaine 6",
            "title": "Établissement & Stabilisation de Reverse Shells",
            "topic": "Netcat, socat, shells interactifs TTY, bypass de pare-feu sortants",
            "project": "Création et stabilisation de sessions d'accès distant résilientes"
          }
        ]
      },
      {
        "number": "04",
        "title": "Élévation de Privilèges sous Linux (Linux PrivEsc)",
        "duration": "11 heures",
        "iconName": "lock",
        "description": "Passez d'un compte utilisateur restreint aux droits root absolus sur les serveurs Linux.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Failles de Configuration Sudo & Binaires SUID",
            "topic": "GTFOBins, abus de droits sudo sans mot de passe, binaires SUID mal sécurisés",
            "project": "Élévation root par exploitation de binaires SUID personnalisés"
          },
          {
            "week": "Semaine 8",
            "title": "Tâches Cron, Capabilities & Exploits Kernel",
            "topic": "Injections dans les tâches planifiées, Linux Capabilities et failles du noyau",
            "project": "Compromission complète de 4 machines cibles Linux"
          }
        ]
      },
      {
        "number": "05",
        "title": "Élévation de Privilèges sous Windows (Windows PrivEsc)",
        "duration": "11 heures",
        "iconName": "zap",
        "description": "Prenez le contrôle total de machines Windows en exploitant les failles de services et de configurations locales.",
        "weeks": [
          {
            "week": "Semaine 9",
            "title": "Unquoted Service Paths & Droits de Fichiers Abusifs",
            "topic": "Chemins de service non cités, permissions faibles sur exécutables de services",
            "project": "Remplacement malveillant de service Windows pour obtenir SYSTEM"
          },
          {
            "week": "Semaine 10",
            "title": "Token Impersonation & Rédaction du Rapport de Pentest",
            "topic": "Attaques RottenPotato/PrintSpoofer, vol de jetons et structure de rapport d'audit",
            "project": "Rédaction finale du rapport d'audit de sécurité technique et managérial"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "50 heures · 10 semaines",
        "features": [
          "Cyber range avec cibles réelles Windows et Linux",
          "Préparation directe aux certifications professionnelles de pentest",
          "Certificat CYBERLYMPH Certified Junior Penetration Tester",
          "Méthodologie standardisée d'audit de sécurité"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Pentester Junior",
        "desc": "Atteste de votre capacité à conduire un audit technique offensif et à rédiger le rapport"
      },
      {
        "iconName": "terminal",
        "title": "Cyber Range Réaliste",
        "desc": "Attaquez de véritables infrastructures d'entreprises hébergées sur notre réseau de test"
      }
    ],
    "faqs": [
      {
        "q": "Le hacking enseigné est-il légal ?",
        "a": "100% légal. Toutes les attaques sont réalisées dans des laboratoires privés autorisés et encadrées par une convention éthique stricte."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Junior%20Penetration%20Tester*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "web-app-pentesting",
    "slug": "web-application-pentesting-owasp-top-10",
    "title": "Web Application Pentesting : Audit & Failles Applicatives OWASP",
    "shortTitle": "Web Pentesting",
    "tagline": "Burp Suite Pro · OWASP Top 10 · Injections SQL · XSS · SSRF · Insecure Deserialization · APIs",
    "category": "pentest",
    "categoryLabel": "Sécurité Applicative Web & OWASP",
    "badge": "Spécialisation Web",
    "badgeType": "hot",
    "partner": "CYBERLYMPH AppSec Lab",
    "duration": "45 heures · 9 semaines",
    "totalHours": 45,
    "modulesCount": 5,
    "projectsCount": 15,
    "prerequisites": "Compréhension du fonctionnement des applications web (HTML/JS/PHP/Node) et du protocole HTTP",
    "location": "Laboratoire Web Applicatif Dédié",
    "level": "Intermédiaire",
    "summary": "Spécialisez-vous dans la recherche et l'exploitation des failles de sécurité des sites et APIs modernes selon le standard OWASP Top 10.",
    "description": "La majorité des intrusions débutent par une vulnérabilité sur une application web exposée sur Internet. Ce cursus de référence vous transforme en auditeur d'applications web capable d'identifier, d'exploiter et de corriger les failles critiques : Injections SQL, Cross-Site Scripting (XSS), Server-Side Request Forgery (SSRF) et brèches d'authentification.",
    "accentGradient": "from-amber-500 via-orange-600 to-rose-600",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "tags": [
      "Web Pentest",
      "Burp Suite",
      "OWASP Top 10",
      "SQL Injection",
      "XSS",
      "SSRF",
      "IDOR",
      "JWT Security",
      "API Pentest"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Audit de Sécurité Applicative Réel ⭐",
      "title": "Audit de Sécurité d'une Plateforme Bancaire Web Moderne (API REST, JWT & Microservices)",
      "description": "Vous réalisez le test d'intrusion complet d'une application de gestion financière en boîte grise : contournement des filtres d'authentification JWT, exploitation d'une SSRF vers le cloud sous-jacent et extraction de la base de données via une injection aveugle.",
      "tags": [
        "Burp Suite Pro",
        "Blind SQLi",
        "SSRF Exploitation",
        "JWT Bypass",
        "OWASP Remediation"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Maîtrise de Burp Suite & Cartographie Applicative",
        "duration": "8 heures",
        "iconName": "search",
        "description": "Domptez l'outil roi du pentest web : Proxy, Repeater, Intruder, Match and Replace, extensions BApp et cartographie complète de surface d'attaque.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Interception & Manipulation de Requêtes avec Burp",
            "topic": "Certificats SSL, analyse des en-têtes HTTP, gestion des sessions et historique",
            "project": "Audit des cookies et en-têtes de sécurité d'un site d'e-commerce"
          },
          {
            "week": "Semaine 2",
            "title": "Fuzzing & Découverte de Paramètres avec Intruder",
            "topic": "Attaques Sniper/Battering Ram, listes Seclists et détection d'erreurs cachées",
            "project": "Découverte de paramètres d'administration dissimulés"
          }
        ]
      },
      {
        "number": "02",
        "title": "Injections de Données : SQLi, Blind SQLi & Command Injection",
        "duration": "10 heures",
        "iconName": "code",
        "description": "Comprenez et exploitez les injections de code côté serveur : Injections SQL basées sur les erreurs, union, aveugles (temps/booléen) et injections de commandes OS.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Injections SQL Classiques & UNION-Based",
            "topic": "Bypass d'authentification SQL, découverte du nombre de colonnes et dump de schéma",
            "project": "Extraction complète de la base de données utilisateurs d'une boutique"
          },
          {
            "week": "Semaine 4",
            "title": "Injections SQL Aveugles (Blind SQLi) & sqlmap Avancé",
            "topic": "Injections conditionnelles par délai temporel, scripts Python et usage expert de sqlmap",
            "project": "Automatisation scriptée de l'extraction de mot de passe administrateur"
          }
        ]
      },
      {
        "number": "03",
        "title": "Failles Côté Client : XSS, CSRF & CORS",
        "duration": "9 heures",
        "iconName": "shield",
        "description": "Maîtrisez les attaques ciblant les utilisateurs finaux : XSS Reflected, Stored et DOM, vol de cookies de session et falsification de requêtes (CSRF).",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Cross-Site Scripting (XSS) & Vol de Sessions",
            "topic": "Payloads XSS, contournement de filtres de caractères, vol de tokens de session",
            "project": "Prise de contrôle de compte administrateur via une faille XSS stockée"
          },
          {
            "week": "Semaine 6",
            "title": "CSRF & Mauvaises Configurations CORS",
            "topic": "Jetons anti-CSRF, contournement SameSite et exploitation de politiques CORS permissives",
            "project": "Changement de mot de passe forcé via une attaque CSRF"
          }
        ]
      },
      {
        "number": "04",
        "title": "Failles Côté Serveur : SSRF, XXE & Insecure Deserialization",
        "duration": "9 heures",
        "iconName": "terminal",
        "description": "Exploitez les fonctionnalités serveur pour accéder aux ressources internes protégées : Server-Side Request Forgery, entités externes XML et désérialisation.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Server-Side Request Forgery (SSRF) & Métadonnées Cloud",
            "topic": "Piratage des métadonnées AWS/Azure via SSRF, contournement de filtres de bouclage",
            "project": "Récupération des clés IAM cloud depuis une faille SSRF"
          }
        ]
      },
      {
        "number": "05",
        "title": "Sécurité des APIs, Tokens JWT & Contrôle d'Accès (IDOR)",
        "duration": "9 heures",
        "iconName": "lock",
        "description": "Auditez les architectures modernes : APIs REST, GraphQL, tokens JWT (signature bypass, algorithme none) et failles d'autorisation IDOR/BOLA.",
        "weeks": [
          {
            "week": "Semaine 8",
            "title": "Contrôle d'Accès Défaillant : IDOR & BOLA",
            "topic": "Manipulation d'identifiants directs, énumération d'enregistrements privés",
            "project": "Consultation des profils confidentiels de tous les clients d'une application"
          },
          {
            "week": "Semaine 9",
            "title": "Attaques sur les Tokens JSON Web Tokens (JWT)",
            "topic": "Falsification de signatures JWT, attaques par clé publique/privée et brute force",
            "project": "Escalade vers le rôle Super-Admin par falsification de token JWT"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "45 heures · 9 semaines",
        "features": [
          "Environnement de laboratoire web dédié",
          "Scénarios OWASP Top 10 réalistes et modernes",
          "Certificat CYBERLYMPH Certified Web App Pentester",
          "Accompagnement méthodologique et rédaction de rapports"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Web Pentest",
        "desc": "Attestation certifiante attestant de votre capacité à auditer des applications web complexes"
      }
    ],
    "faqs": [
      {
        "q": "Ce cours couvre-t-il les APIs modernes ?",
        "a": "Oui, un module entier est dédié aux vulnérabilités d'APIs REST, GraphQL et à la manipulation des tokens JWT."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Web%20Application%20Pentesting*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "web-app-red-teaming",
    "slug": "web-application-red-teaming-waf-evasion",
    "title": "Web Application Red Teaming : Évasion WAF & Exploitation Avancée",
    "shortTitle": "Web Red Teaming",
    "tagline": "Évasion WAF · Bypasses Cloudflare · Attaques SSO/SAML · Prototype Pollution · RCE Chaining",
    "category": "pentest",
    "categoryLabel": "Opérations Web Offensives Avancées",
    "badge": "Niveau Avancé",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Red Team Practice",
    "duration": "45 heures · 9 semaines",
    "totalHours": 45,
    "modulesCount": 5,
    "projectsCount": 14,
    "prerequisites": "Maîtrise préalable du pentest web classique (OWASP Top 10) et de Burp Suite",
    "location": "Laboratoire Red Team Avancé",
    "level": "Intermédiaire à Avancé",
    "summary": "Dépassez les audits web traditionnels. Apprenez à contourner les Web Application Firewalls (Cloudflare, ModSecurity), attaquer les fédérations d'identités (SAML, OAuth 2.0) et enchaîner les failles pour obtenir une exécution de code (RCE) à travers des défenses renforcées.",
    "description": "Sur des cibles hautement protégées par des WAF et des EDR, les payloads standards sont immédiatement bloqués. Ce cursus d'élite vous forme aux techniques d'évasion d'auditeurs chevronnés : encodages exotiques, pollution de requêtes HTTP, manipulation de parseurs JSON et exploitation de micro-architectures distribuées.",
    "accentGradient": "from-red-600 via-rose-700 to-purple-800",
    "glowColor": "rgba(225, 29, 72, 0.25)",
    "tags": [
      "WAF Evasion",
      "Web Red Team",
      "Cloudflare Bypass",
      "SAML Injection",
      "OAuth Exploitation",
      "Prototype Pollution",
      "HTTP Request Smuggling"
    ],
    "isFeatured": false,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Opération Red Team Web Réelle ⭐",
      "title": "Compromission Furtive d'un Portail Corporate Protégé par WAF & SSO avec Pivot Interne",
      "description": "Face à une cible protégée par Cloudflare et un SSO d'entreprise : vous contournez le filtre WAF par injection de requêtes HTTP décalées (Request Smuggling), détournez un flux OAuth 2.0 pour voler le compte administrateur et exécutez du code distant sur le serveur applicatif.",
      "tags": [
        "HTTP Smuggling",
        "WAF Bypass",
        "OAuth Hijacking",
        "RCE Weaponization",
        "Network Pivot"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Évasion de Pare-feu Applicatifs (WAF Evasion)",
        "duration": "9 heures",
        "iconName": "shield",
        "description": "Comprenez comment fonctionnent les moteurs de détection de WAF (ModSecurity, Cloudflare, AWS WAF) et développez des payloads obfusqués capables de tromper les regex.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Mécanismes de Détection WAF & Analyse de Regex",
            "topic": "Analyse lexicale, normalisation d'URL, encodages imbriqués (Unicode, Double URL, Hex)",
            "project": "Bypass complet d'un ensemble de règles ModSecurity CRS standard"
          },
          {
            "week": "Semaine 2",
            "title": "Payload Crafting & Dissimulation Sémantique",
            "topic": "Manipulation de requêtes multipart, découpage de payloads SQL et techniques JSON/XML",
            "project": "Exécution réussie d'une injection SQL à travers un pare-feu Cloudflare"
          }
        ]
      },
      {
        "number": "02",
        "title": "Attaques sur les Fédérations d'Identités (SAML & OAuth 2.0)",
        "duration": "9 heures",
        "iconName": "lock",
        "description": "Attaquez les systèmes de Single Sign-On modernes : altération de signatures SAML (XML Signature Wrapping), usurpation de tokens OAuth et vols de codes d'autorisation.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Attaques sur les Assertions SAML",
            "topic": "Structure SAML, XML Signature Wrapping (XSW), falsification d'assertions d'identité",
            "project": "Usurpation de compte sans mot de passe via injection XSW sur un fournisseur SAML"
          },
          {
            "week": "Semaine 4",
            "title": "Détournement de Flux OAuth 2.0 & OpenID Connect",
            "topic": "Redirect_uri manipulation, fuite de code d'autorisation, échange de jetons illégitime",
            "project": "Vol de compte utilisateur par redirection malveillante d'authentification OAuth"
          }
        ]
      },
      {
        "number": "03",
        "title": "Désynchronisation de Requêtes HTTP (Request Smuggling)",
        "duration": "9 heures",
        "iconName": "zap",
        "description": "Exploitez les divergences d'interprétation entre reverse proxies et serveurs backend : attaques CL.TE, TE.CL et TE.TE pour empoisonner les requêtes des autres clients.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Fondements du HTTP Request Smuggling (CL.TE & TE.CL)",
            "topic": "Différences de traitement Content-Length vs Transfer-Encoding, pipeline HTTP/1.1",
            "project": "Désynchronisation de proxy et capture de requêtes d'utilisateurs connectés"
          },
          {
            "week": "Semaine 6",
            "title": "Exploitation Avancée : Vol de Cookies & Bypass de Contrôles",
            "topic": "Empoisonnement de cache web, injection d'en-têtes et contournement de routes privées",
            "project": "Accès non autorisé à la console d'administration interne via HTTP Smuggling"
          }
        ]
      },
      {
        "number": "04",
        "title": "Attaques Modernes JavaScript : Prototype Pollution & Node.js RCE",
        "duration": "9 heures",
        "iconName": "code",
        "description": "Attaquez les backends JavaScript modernes : pollution d'objets globaux, escalade vers l'exécution de commandes système et évasion de sandbox.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Prototype Pollution Côté Client & Côté Serveur",
            "topic": "Fusion récursive d'objets, modification de Object.prototype et vecteurs d'attaque",
            "project": "Exploitation d'une pollution de prototype pour obtenir une RCE sous Node.js"
          }
        ]
      },
      {
        "number": "05",
        "title": "Chaining de Failles Web pour RCE & Mouvement Latéral",
        "duration": "9 heures",
        "iconName": "terminal",
        "description": "Combinez plusieurs vulnérabilités mineures pour provoquer un impact critique : saut du contexte web vers le système d'exploitation et pivot réseau.",
        "weeks": [
          {
            "week": "Semaine 8",
            "title": "De la Faille Web à l'Accès Shell Système",
            "topic": "Téléversement de fichiers malveillants, désérialisation Java/PHP et contournement d'antivirus",
            "project": "Chaînage d'une faille CSRF + upload arbitraire pour un shell interactif"
          },
          {
            "week": "Semaine 9",
            "title": "Pivot depuis la Machine Web vers le Réseau Interne",
            "topic": "Chisel, ligolo-ng, tunnels SSH et cartographie des services d'entreprise privés",
            "project": "Pivot d'attaque réussi depuis le serveur DMZ vers l'Active Directory interne"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "45 heures · 9 semaines",
        "features": [
          "Laboratoire avec reverse-proxies et WAF réels",
          "Scénarios avancés d'équipes d'attaque Red Team",
          "Certificat CYBERLYMPH Certified Web Red Teamer",
          "Entraînement sur des techniques d'intrusion non conventionnelles"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Web Red Teaming",
        "desc": "Atteste de votre capacité à auditer et compromettre des applications sous haute protection"
      }
    ],
    "faqs": [
      {
        "q": "En quoi ce cours diffère-t-il du Pentest Web classique ?",
        "a": "Le pentest classique teste les failles OWASP évidentes. Le Web Red Teaming se concentre sur l'évasion des protections actives (WAF, EDR), les chaînages complexes et les protocoles avancés."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Web%20Application%20Red%20Teaming*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "red-teaming",
    "slug": "red-teaming-adversary-emulation-et-active-directory",
    "title": "Red Teaming : Simulation d'Adversaires & Opérations Spéciales",
    "shortTitle": "Red Teaming",
    "tagline": "Infrastructures C2 · Active Directory Attacks · Évasion EDR · Mouvement Latéral · Cobalt Strike / Sliver",
    "category": "pentest",
    "categoryLabel": "Opérations Red Team & Emulation de Menaces",
    "badge": "Cursus d'Élite",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Advanced Offensive Division",
    "duration": "55 heures · 11 semaines",
    "totalHours": 55,
    "modulesCount": 5,
    "projectsCount": 16,
    "prerequisites": "Solide maîtrise du pentest système/réseau et des environnements Windows / Active Directory",
    "location": "Cyber Range Red Team Sécurisé",
    "level": "Intermédiaire à Avancé",
    "summary": "Le sommet de la sécurité offensive. Apprenez à concevoir une infrastructure d'attaque résiliente (C2), cartographier et compromettre des domaines Active Directory entiers et contourner les EDR modernes comme un groupe d'attaque APT.",
    "description": "Les opérations de Red Team simulent de véritables campagnes d'espionnage et de sabotage informatique pour tester la résilience globale d'une organisation (technologies, personnes, processus). Vous manipulez les arsenaux d'attaque professionnels, concevez des redirecteurs furtifs, menez des attaques Kerberos dévastatrices et extrayez les drapeaux sans vous faire repérer.",
    "accentGradient": "from-rose-600 via-red-700 to-slate-900",
    "glowColor": "rgba(225, 29, 72, 0.3)",
    "tags": [
      "Red Teaming",
      "Command & Control",
      "Active Directory",
      "BloodHound",
      "Kerberoasting",
      "DCSync",
      "EDR Bypass",
      "Sliver C2"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Opération Red Team d'Envergure ⭐",
      "title": "Simulation Complète d'un Groupe APT : Infiltration, Domination Active Directory & Exfiltration",
      "description": "Sur une infrastructure d'entreprise virtualisée de 40 serveurs avec forêt Active Directory : déploiement d'une infrastructure C2 furtive, accès initial, élévation, prise de contrôle du Domain Controller via DCSync, extraction de la base NTDS.dit et exfiltration de données sans alerte SOC.",
      "tags": [
        "Full Red Team Campaign",
        "C2 Infrastructure",
        "Domain Admin Compromise",
        "DCSync Attack",
        "Executive Red Team Briefing"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Ingénierie d'Infrastructures de Commande & Contrôle (C2)",
        "duration": "11 heures",
        "iconName": "server",
        "description": "Construisez une infrastructure d'attaque distribuée et intraçable : serveurs C2 (Sliver, Havoc), redirecteurs Nginx/Apache, certificats TLS légitimes et DNS domain fronting.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Architecture d'Infrastructure Red Team Moderne",
            "topic": "Cloaking, redirecteurs fonctionnels vs d'évitement, rotation d'IP",
            "project": "Déploiement d'un cluster de serveurs de commande Sliver C2 avec redirecteurs"
          },
          {
            "week": "Semaine 2",
            "title": "Profilage Malléable de Trafic C2 (Malleable C2)",
            "topic": "Camouflage du trafic C2 en flux HTTP/S bénins (trafic Amazon, Google, Microsoft)",
            "project": "Création d'un profil de communication C2 indétectable par inspection réseau"
          }
        ]
      },
      {
        "number": "02",
        "title": "Reconnaissance & Cartographie Avancée d'Active Directory",
        "duration": "11 heures",
        "iconName": "search",
        "description": "Maîtrisez la cartographie relationnelle d'entreprises : énumération furtive LDAP, collecte BloodHound / SharpHound et identification des chemins d'attaque les plus courts.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Collecte de Données Active Directory avec SharpHound",
            "topic": "Sessions utilisateurs, relations de confiance inter-domaines et permissions d'objets",
            "project": "Cartographie complète d'une forêt Active Directory de 1 000 utilisateurs"
          },
          {
            "week": "Semaine 4",
            "title": "Analyse Cypher & Modélisation de Chemins d'Attaque",
            "topic": "Requêtes Neo4j, droits GenericAll, WriteDacl et délégation sans contrainte",
            "project": "Découverte d'un chemin d'escalade vers Domain Admin en 3 rebonds discrets"
          }
        ]
      },
      {
        "number": "03",
        "title": "Attaques Critiques Active Directory & Persistance de Domaine",
        "duration": "11 heures",
        "iconName": "lock",
        "description": "Exécutez les attaques les plus dévastatrices de l'écosystème Windows : Kerberoasting, AS-REP Roasting, attaques par certificat AD CS et extraction de secrets DCSync.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Attaques sur les Protocoles d'Authentification Windows",
            "topic": "Extraction de hachages NTLM, relais SMB (ntlmrelayx), attaque Kerberoasting",
            "project": "Compromission de comptes de service à privilèges élevés par Kerberoasting"
          },
          {
            "week": "Semaine 6",
            "title": "Abus de Services de Certificats (AD CS) & Golden Tickets",
            "topic": "Vulnérabilités ESC1 à ESC8, forgeage de Golden & Silver Tickets avec Mimikatz",
            "project": "Création d'un Golden Ticket garantissant 10 ans de persistance administrative"
          }
        ]
      },
      {
        "number": "04",
        "title": "Évasion de Détection EDR & Techniques Anti-Forensics",
        "duration": "11 heures",
        "iconName": "shield",
        "description": "Désamorcez les défenses des postes de travail : contournement de l'AMSI (Antimalware Scan Interface), Process Injection furtive et désactivation de l'ETW (Event Tracing).",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Contournement de l'AMSI & Détection de Scripts",
            "topic": "Patching mémoire de l'AMSI en PowerShell et C#, obfuscation de charge utile",
            "project": "Exécution réussie de scripts offensifs sur machine protégée par Windows Defender"
          },
          {
            "week": "Semaine 8",
            "title": "Appels Système Directs (Direct Syscalls) & Évasion EDR",
            "topic": "Bypass des hooks API utilisateurs placés par les EDR, outils SysWhispers",
            "project": "Exécution de code en mémoire sans déclencher l'EDR de test"
          }
        ]
      },
      {
        "number": "05",
        "title": "Mouvement Latéral, Conduite d'Opération & Restitution",
        "duration": "11 heures",
        "iconName": "zap",
        "description": "Déplacez-vous de serveur en serveur sans mot de passe : Pass-the-Hash, Overpass-the-Hash, WMI, DCOM et clôture professionnelle d'un engagement Red Team.",
        "weeks": [
          {
            "week": "Semaine 9",
            "title": "Techniques de Mouvement Latéral Indolores",
            "topic": "WMI Win32_Process, WinRM sans alerte, DCOM et détournement de sessions RDP",
            "project": "Propagation latérale à travers 6 sous-réseaux d'entreprise segmentés"
          },
          {
            "week": "Semaine 10",
            "title": "Débriefing Red Team vs Blue Team (Purple Teaming)",
            "topic": "Rapprochement des actions offensives avec les alertes défensives enregistrées",
            "project": "Animation d'un atelier Purple Team et rédaction du plan de durcissement"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "55 heures · 11 semaines",
        "features": [
          "Cyber range d'entreprise de 40 machines interconnectées",
          "Arsenal offensif de pointe (Sliver, BloodHound, Mimikatz)",
          "Certificat CYBERLYMPH Certified Red Team Operator",
          "Encadrement par des opérateurs d'intrusion chevronnés"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification Red Team Operator",
        "desc": "La certification la plus exigeante attestant de votre compétence en simulation d'adversaires"
      },
      {
        "iconName": "terminal",
        "title": "Opérations sur Réseau Vivant",
        "desc": "Testez vos attaques sur des forêts Active Directory complexes et supervisées"
      }
    ],
    "faqs": [
      {
        "q": "Ce programme s'adresse-t-il aux débutants ?",
        "a": "Non, c'est un cursus avancé exigeant des connaissances solides préalables en pentest et systèmes Windows/Linux."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Red%20Teaming%20%3A%20Simulation%20d'Adversaires*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "security-engineer",
    "slug": "security-engineer-architecture-et-ingenierie",
    "title": "Security Engineer : Architecture & Ingénierie Cyber",
    "shortTitle": "Security Engineer",
    "tagline": "Threat Modeling · Cryptographie & PKI · IAM & OAuth · DevSecOps · Zero Trust",
    "category": "security",
    "categoryLabel": "Ingénierie & Architecture de Sécurité",
    "badge": "Cursus d'Ingénierie",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Engineering Lab",
    "duration": "50 heures · 10 semaines",
    "totalHours": 50,
    "modulesCount": 4,
    "projectsCount": 12,
    "prerequisites": "Bases en développement logiciel, administration système ou réseaux",
    "location": "Présentiel & Ateliers Cloud",
    "level": "Débutant",
    "summary": "Concevez des architectures sécurisées by design. Maîtrisez la modélisation de menaces (STRIDE), la cryptographie moderne (PKI, TLS 1.3), l'IAM d'entreprise (OAuth 2.0, OIDC, Zero-Trust) et le DevSecOps.",
    "description": "Le rôle de l'ingénieur de sécurité est d'anticiper et éliminer les failles avant même le déploiement des applications et des infrastructures. Ce cursus vous forme aux méthodologies de modélisation de menaces (STRIDE/PASTA), à l'implémentation de la cryptographie (PKI d'entreprise, coffres-forts HashiCorp Vault), à la gestion d'identités et aux architectures Zero-Trust.",
    "accentGradient": "from-indigo-500 via-purple-600 to-pink-600",
    "glowColor": "rgba(99, 102, 241, 0.25)",
    "tags": [
      "Threat Modeling",
      "STRIDE",
      "Cryptography",
      "PKI",
      "IAM",
      "OAuth 2.0",
      "DevSecOps",
      "Zero Trust"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Grand Projet d'Ingénierie de Sécurité ⭐",
      "title": "Conception & Sécurisation d'une Plateforme Cloud Distribuée (Architecture Zero-Trust)",
      "description": "Vous concevez l'architecture technique complète d'une fintech : modélisation de menaces avec STRIDE, mise en place d'une autorité de certification (PKI), gestion centralisée des secrets avec HashiCorp Vault et contrôle d'accès Zero-Trust.",
      "tags": [
        "Zero Trust Architecture",
        "PKI Infrastructure",
        "Vault Secrets",
        "STRIDE Modeling",
        "Cloud Security"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Modélisation des Menaces & Principes d'Ingénierie",
        "duration": "12 heures",
        "iconName": "shield",
        "description": "Anticipez les risques dès la conception. Maîtrisez les méthodologies STRIDE et DREAD et concevez des architectures résilientes respectant le principe de défense en profondeur.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Méthodologie STRIDE & Analyse des Flux de Données",
            "topic": "Création de Data Flow Diagrams (DFD) et cartographie des menaces",
            "project": "Modélisation complète des menaces d'un système de paiement en ligne"
          },
          {
            "week": "Semaine 2",
            "title": "Défense en Profondeur & Principes de Conception Sécurisée",
            "topic": "Moindre privilège, surface d'attaque minimale, gestion des défaillances sûres",
            "project": "Revue critique d'architecture et plan de remédiation technique"
          }
        ]
      },
      {
        "number": "02",
        "title": "Cryptographie Appliquée & Infrastructure PKI",
        "duration": "13 heures",
        "iconName": "lock",
        "description": "Implémentez les mécanismes cryptographiques modernes : chiffrement symétrique/asymétrique, hachage sécurisé, déploiement d'une PKI d'entreprise et gestion des certificats TLS.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Algorithmes Cryptographiques & Protocoles Modernes",
            "topic": "AES-GCM, RSA, courbes elliptiques (ECDSA, Ed25519) et protocole TLS 1.3",
            "project": "Implémentation d'un canal de communication sécurisé et vérifié"
          },
          {
            "week": "Semaine 4",
            "title": "Déploiement d'une Autorité de Certification (PKI)",
            "topic": "Root CA, Intermediate CA, révocation CRL/OCSP et rotation de certificats",
            "project": "Mise en place d'une PKI d'entreprise avec OpenSSL et gestion automatisée"
          }
        ]
      },
      {
        "number": "03",
        "title": "Gestion des Identités (IAM) & Fédérations d'Accès",
        "duration": "13 heures",
        "iconName": "users",
        "description": "Contrôlez qui a accès à quoi. Implémentez l'authentification moderne (OAuth 2.0, OpenID Connect) et déployez des architectures d'accès Zero-Trust.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Protocoles d'Authentification Moderne (OAuth 2.0 / OIDC)",
            "topic": "Flux d'autorisation, validation des jetons JWT et serveurs d'autorisation",
            "project": "Intégration d'un serveur d'authentification centralisé (Keycloak)"
          },
          {
            "week": "Semaine 6",
            "title": "Architecture Zero-Trust & Micro-Segmentation",
            "topic": "Vérification explicite, segmentation réseau et accès basé sur le contexte",
            "project": "Conception d'une passerelle d'accès Zero-Trust pour employés distants"
          }
        ]
      },
      {
        "number": "04",
        "title": "Sécurité Logicielle, Conteneurs & Gestion des Secrets",
        "duration": "12 heures",
        "iconName": "terminal",
        "description": "Éliminez les secrets en clair dans le code. Déployez HashiCorp Vault, durcissez les conteneurs Docker et appliquez la sécurité dans le cycle de développement.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Gestion Centralisée des Secrets avec HashiCorp Vault",
            "topic": "Moteurs de secrets dynamiques, rotation automatique de mots de passe de bases de données",
            "project": "Déploiement et sécurisation d'un cluster HashiCorp Vault"
          },
          {
            "week": "Semaine 8",
            "title": "Sécurisation des Conteneurs Docker & Pipelines DevSecOps",
            "topic": "Création d'images Docker minimales, scans de vulnérabilités et sécurité Kubernetes",
            "project": "Automatisation de scans de vulnérabilités dans une chaîne CI/CD"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "50 heures · 10 semaines",
        "features": [
          "Travaux pratiques sur architectures cloud et conteneurs",
          "Déploiement réel d'une PKI et de HashiCorp Vault",
          "Certificat CYBERLYMPH Certified Security Engineer",
          "Compétences très recherchées en architecture d'entreprise"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certificat Security Engineer",
        "desc": "Titre certifiant votre maîtrise de l'architecture et de l'ingénierie cyber"
      },
      {
        "iconName": "terminal",
        "title": "Laboratoires d'Architecture",
        "desc": "Mettez en œuvre concrètement des serveurs de secrets et d'identités"
      }
    ],
    "faqs": [
      {
        "q": "Quelle est la différence entre un Pentester et un Security Engineer ?",
        "a": "Le Pentester recherche et exploite les failles sur des systèmes déjà en place (approche offensive). Le Security Engineer conçoit et implémente les défenses, l'authentification et les architectures pour empêcher l'apparition de failles (approche ingénierie et préventive)."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Security%20Engineer%20%3A%20Architecture%20%26%20Ing%C3%A9nierie%20Cyber*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "devsecops",
    "slug": "devsecops-securisation-cicd-conteneurs-kubernetes",
    "title": "DevSecOps : Sécurisation CI/CD, Conteneurs & Kubernetes",
    "shortTitle": "DevSecOps",
    "tagline": "Pipelines CI/CD · SAST/DAST · Sécurité Docker · Kubernetes RBAC · OPA Gatekeeper · Supply Chain",
    "category": "security",
    "categoryLabel": "Ingénierie DevSecOps & Sécurité Cloud Native",
    "badge": "Cloud Native",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Cloud Native Security Unit",
    "duration": "45 heures · 9 semaines",
    "totalHours": 45,
    "modulesCount": 5,
    "projectsCount": 15,
    "prerequisites": "Notions sur Docker, Git et les principes fondamentaux de développement logiciel ou d'intégration continue",
    "location": "Laboratoire CI/CD Cloud Privé",
    "level": "Intermédiaire à Avancé",
    "summary": "Automatisez la sécurité logicielle à la vitesse du DevOps. Intégrez des scans SAST/DAST/SCA dans vos pipelines GitHub Actions / GitLab CI, durcissez vos conteneurs Docker et verrouillez vos clusters Kubernetes.",
    "description": "Le DevSecOps est l'intégration systématique et continue des contrôles de sécurité à chaque étape du cycle de développement logiciel. Ce cursus intensif vous apprend à automatiser l'analyse de code source (SAST), la détection de dépendances vulnérables (SCA), la conformité des conteneurs et la politique de gouvernance des clusters Kubernetes.",
    "accentGradient": "from-cyan-500 via-blue-600 to-indigo-700",
    "glowColor": "rgba(6, 182, 212, 0.25)",
    "tags": [
      "DevSecOps",
      "CI/CD Security",
      "Docker Security",
      "Kubernetes RBAC",
      "Semgrep",
      "Trivy",
      "OPA Gatekeeper",
      "SBOM"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Projet Industriel DevSecOps ⭐",
      "title": "Pipeline CI/CD 100% Automatisé avec Blocage des Failles & Déploiement Kubernetes Durci",
      "description": "Vous construisez une chaîne d'intégration continue de bout en bout : tests unitaires, analyse SAST avec Semgrep, scan de conteneurs avec Trivy, signature cryptographique avec Cosign et déploiement sous Kubernetes avec politiques de sécurité OPA Gatekeeper bloquant toute tentative de pod privilégié.",
      "tags": [
        "GitHub Actions",
        "Semgrep SAST",
        "Trivy Container Scan",
        "Cosign Signature",
        "Kubernetes Admission Controller"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Culture DevSecOps & Intégration dans les Pipelines CI/CD",
        "duration": "9 heures",
        "iconName": "zap",
        "description": "Comprenez le Shift-Left de la sécurité. Configurez vos pipelines GitHub Actions et GitLab CI pour exécuter des contrôles de sécurité automatisés sans ralentir les développeurs.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Principes du Shift-Left & Modélisation des Pipelines",
            "topic": "Intégration continue, déclencheurs d'événements et barrières de qualité (Quality Gates)",
            "project": "Construction d'un pipeline d'intégration continue avec alertes de sécurité"
          },
          {
            "week": "Semaine 2",
            "title": "Détection des Secrets dans le Code (GitLeaks)",
            "topic": "Recherche de clés API, mots de passe et certificats commités par erreur dans Git",
            "project": "Mise en place de hooks de pre-commit bloquant les secrets avant commit"
          }
        ]
      },
      {
        "number": "02",
        "title": "Tests Automatisés : SAST, DAST & Dépendances (SCA)",
        "duration": "9 heures",
        "iconName": "code",
        "description": "Déployez l'analyse statique (SAST), l'analyse dynamique (DAST) et la sécurité des dépendances tierces (SCA) : Semgrep, SonarQube, OWASP ZAP et Snyk.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Analyse Statique du Code (SAST) avec Semgrep",
            "topic": "Écriture de règles Semgrep personnalisées, détection de failles OWASP dans le code",
            "project": "Automatisation de l'audit statique avec blocage des Pull Requests vulnérables"
          },
          {
            "week": "Semaine 4",
            "title": "Sécurité des Dépendances (SCA) & Inventaire SBOM",
            "topic": "Vulnérabilités de librairies tierces, génération de SBOM (CycloneDX / SPDX)",
            "project": "Audit automatisé des dépendances npm/pip et génération de rapport SBOM"
          }
        ]
      },
      {
        "number": "03",
        "title": "Sécurité des Conteneurs Docker & Registres d'Images",
        "duration": "9 heures",
        "iconName": "server",
        "description": "Construisez des conteneurs imperméables. Rédigez des Dockerfiles sécurisés, utilisez des images de base minimales (Distroless), scannez avec Trivy et signez avec Cosign.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Durcissement de Dockerfile & Exécution Non-Root",
            "topic": "Images multi-stages, suppression des outils superflus et gestion d'utilisateurs sans privilèges",
            "project": "Réécriture et optimisation sécurisée de 5 Dockerfiles vulnérables"
          },
          {
            "week": "Semaine 6",
            "title": "Scan de Vulnérabilités & Signature Cryptographique",
            "topic": "Analyse d'images avec Trivy, signature avec Sigstore/Cosign et validation de registre",
            "project": "Pipeline interdisant le déploiement de tout conteneur non signé cryptographiquement"
          }
        ]
      },
      {
        "number": "04",
        "title": "Sécurité des Clusters Kubernetes (KubeSec)",
        "duration": "9 heures",
        "iconName": "shield",
        "description": "Verrouillez l'orchestration de conteneurs : contrôle d'accès RBAC, Network Policies d'isolation, sécurité des Service Accounts et gestion des Secrets Kubernetes.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Contrôle d'Accès RBAC & Isolation Réseau Kubernetes",
            "topic": "Rôles, RoleBindings, ClusterRoles et politiques réseau (NetworkPolicies Calico/Cilium)",
            "project": "Conception d'une politique d'isolation réseau stricte entre microservices"
          }
        ]
      },
      {
        "number": "05",
        "title": "Gouvernance par le Code avec OPA Gatekeeper & Kyverno",
        "duration": "9 heures",
        "iconName": "lock",
        "description": "Appliquez la politique de sécurité sous forme de code (Policy-as-Code). Bloquez les conteneurs root, imposez des limites de ressources et auditez la conformité en temps réel.",
        "weeks": [
          {
            "week": "Semaine 8",
            "title": "Admission Controllers & Politiques avec Kyverno / OPA",
            "topic": "Validation Webhooks, politiques Rego, interdiction de conteneurs privilégiés",
            "project": "Déploiement de 10 politiques d'admission Kyverno bloquant les dérives de sécurité"
          },
          {
            "week": "Semaine 9",
            "title": "Surveillance Runtime des Conteneurs avec Falco",
            "topic": "Détection en direct d'exécutions suspectes au niveau du noyau (eBPF) avec Falco",
            "project": "Détection en temps réel d'un shell interactif lancé dans un conteneur en production"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "45 heures · 9 semaines",
        "features": [
          "Pipelines CI/CD cloud configurés et opérationnels",
          "Environnement de test Kubernetes dédié",
          "Certificat CYBERLYMPH Certified DevSecOps Professional",
          "Aligné sur les meilleures pratiques de l'industrie Cloud Native"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification DevSecOps",
        "desc": "Atteste de votre capacité à industrialiser et automatiser la sécurité applicative"
      }
    ],
    "faqs": [
      {
        "q": "Faut-il être développeur pour suivre ce cours ?",
        "a": "Non, le cours s'adresse aux développeurs, administrateurs système et ingénieurs DevOps désireux de maîtriser la sécurité logicielle automatisée."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*DevSecOps*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "defending-aws",
    "slug": "defending-aws-cloud-security-et-detection",
    "title": "Defending AWS : Sécurité Cloud & Détection d'Attaques",
    "shortTitle": "Defending AWS",
    "tagline": "AWS IAM · CloudTrail · GuardDuty · AWS Security Hub · VPC Security · Remédiation Lambda",
    "category": "security",
    "categoryLabel": "Sécurité Cloud & Surveillance Amazon Web Services",
    "badge": "AWS Security",
    "badgeType": "hot",
    "partner": "CYBERLYMPH Cloud Defense Practice",
    "duration": "40 heures · 8 semaines",
    "totalHours": 40,
    "modulesCount": 4,
    "projectsCount": 12,
    "prerequisites": "Connaissances de base sur les services cloud Amazon Web Services (EC2, S3, IAM)",
    "location": "Laboratoire AWS Cloud Dédié",
    "level": "Intermédiaire",
    "summary": "Sécurisez et surveillez les infrastructures Amazon Web Services. Maîtrisez le durcissement d'IAM, l'analyse des journaux CloudTrail et la détection d'intrusions avec Amazon GuardDuty et Security Hub.",
    "description": "AWS héberge une part colossale des applications critiques mondiales. Ce cursus pratique vous apprend à protéger une infrastructure cloud AWS contre les vols de clés d'accès, les mauvaises configurations de compartiments S3, les élévations de privilèges IAM et les attaques réseau avec AWS WAF et GuardDuty.",
    "accentGradient": "from-amber-500 via-orange-600 to-indigo-700",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "tags": [
      "AWS Security",
      "AWS IAM",
      "CloudTrail",
      "Amazon GuardDuty",
      "Security Hub",
      "S3 Security",
      "VPC Security"
    ],
    "isFeatured": false,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Opération de Sécurité Cloud AWS ⭐",
      "title": "Audit & Déploiement d'une Architecture de Détection Automatisée sur Multi-Comptes AWS",
      "description": "Vous configurez la sécurité d'une infrastructure AWS d'entreprise : politiques IAM avec conditions strictes, centralisation des logs CloudTrail/VPC Flow dans un compte de sécurité dédié, règles de détection d'anomalies GuardDuty et isolation automatique d'instances compromises.",
      "tags": [
        "AWS Organizations",
        "GuardDuty Alerts",
        "CloudTrail Centralization",
        "Lambda Remediation",
        "AWS WAF"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Sécurité des Identités AWS IAM & Politiques Avancées",
        "duration": "10 heures",
        "iconName": "lock",
        "description": "Maîtrisez la gestion des accès sous AWS : politiques basées sur l'identité vs politiques basées sur les ressources (S3 bucket policies), rôles IAM, Service Control Policies (SCP) et accès temporaires STS.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Structure des Politiques JSON & Évaluation IAM",
            "topic": "Effets Deny/Allow, éléments Principal/Action/Resource et blocs Condition",
            "project": "Correction de politiques IAM trop permissives (suppression des privilèges AdministratorAccess)"
          },
          {
            "week": "Semaine 2",
            "title": "Fédération d'Identité & Sécurisation des Rôles IAM",
            "topic": "AssumeRole, jetons temporaires AWS STS, fédération SAML et clés d'accès temporaires",
            "project": "Mise en place d'un accès sécurisé basé sur les rôles avec MFA obligatoire"
          }
        ]
      },
      {
        "number": "02",
        "title": "Surveillance, Journaux & Détection (CloudTrail & GuardDuty)",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Enregistrez et analysez chaque action exécutée sur votre infrastructure AWS. Exploitez AWS CloudTrail, VPC Flow Logs et le moteur d'intelligence artificielle Amazon GuardDuty.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Centralisation & Intégrité des Logs CloudTrail",
            "topic": "Validation d'intégrité de fichiers journaux, stockage sécurisé S3 et analyse Athena",
            "project": "Requêtes SQL avec Amazon Athena pour tracer une compromission de clé d'API"
          },
          {
            "week": "Semaine 4",
            "title": "Détection des Menaces avec Amazon GuardDuty",
            "topic": "Détection de minage de cryptomonnaie, exfiltration S3 et connexions depuis des relais Tor",
            "project": "Simulation d'attaque sur instance EC2 et analyse des alertes GuardDuty"
          }
        ]
      },
      {
        "number": "03",
        "title": "Sécurité Réseau VPC & Protection des Données S3",
        "duration": "10 heures",
        "iconName": "shield",
        "description": "Verrouillez l'architecture réseau cloud : Security Groups, Network ACLs, VPC Endpoints privés et chiffrement de données avec AWS KMS.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Sécurité Réseau : VPC Endpoints & AWS WAF",
            "topic": "Élimination des passerelles Internet pour les services internes via PrivateLink",
            "project": "Déploiement d'un AWS WAF protégeant une application contre les attaques SQLi"
          },
          {
            "week": "Semaine 6",
            "title": "Protection des Données S3 & Gestion des Clés KMS",
            "topic": "Chiffrement SSE-KMS, politiques de compartiments S3 et blocage d'accès public",
            "project": "Sécurisation étanche d'un compartiment de stockage de données bancaires sensibles"
          }
        ]
      },
      {
        "number": "04",
        "title": "Automatisation de la Réponse aux Incidents (Lambda & EventBridge)",
        "duration": "10 heures",
        "iconName": "zap",
        "description": "Réagissez en temps réel aux attaques. Déployez des fonctions AWS Lambda déclenchées par Amazon EventBridge pour révoquer des identifiants compromis et isoler des serveurs.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Orchestration d'Événements avec Amazon EventBridge",
            "topic": "Règles d'événements déclenchées par GuardDuty et AWS Config",
            "project": "Création d'un flux d'alerte en temps réel sur Discord / Slack pour alertes critiques"
          },
          {
            "week": "Semaine 8",
            "title": "Remédiation Automatisée avec AWS Lambda",
            "topic": "Scripts Lambda de confinement d'instance EC2 (changement de Security Group) et révocation IAM",
            "project": "Déploiement d'une remédiation automatique neutralisant une clé d'API compromise en 15 secondes"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "40 heures · 8 semaines",
        "features": [
          "Environnement de laboratoire AWS dédié",
          "Mise en œuvre des services natifs de sécurité AWS",
          "Certificat CYBERLYMPH Certified AWS Defense Specialist",
          "Aligné sur les exigences de sécurité cloud mondiales"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification AWS Security Specialist",
        "desc": "Atteste de votre capacité à concevoir et surveiller des environnements cloud Amazon hautement sécurisés"
      }
    ],
    "faqs": [
      {
        "q": "Les laboratoires AWS sont-ils compris dans le cursus ?",
        "a": "Oui, un compte AWS sandbox est fourni à chaque participant pour réaliser l'ensemble des travaux pratiques."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Defending%20AWS*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "ai-security",
    "slug": "securite-de-ia-et-prompt-injection",
    "title": "AI Security & LLM Red Teaming : Sécurité Offensive & Défensive de l'IA",
    "shortTitle": "AI Security",
    "tagline": "LLM Red Teaming · Prompt Injection · Jailbreaking · OWASP Top 10 for LLMs · Data Poisoning · Guardrails",
    "category": "ai",
    "categoryLabel": "Sécurité Offensive & Défensive de l'IA",
    "badge": "Cursus d'Élite IA & Cyber",
    "badgeType": "hot",
    "partner": "CYBERLYMPH AI Security Lab",
    "duration": "55 heures · 11 semaines",
    "totalHours": 55,
    "modulesCount": 6,
    "projectsCount": 18,
    "prerequisites": "Notions de base en informatique, web ou utilisation de modèles de langage (LLMs)",
    "location": "Laboratoire de Pentest IA & Plateforme Interactive",
    "level": "Intermédiaire à Avancé",
    "summary": "Le cursus le plus complet du secteur sur la sécurité de l'intelligence artificielle. Maîtrisez le Red Teaming de modèles de langage (LLMs), l'injection de prompts (directe et indirecte), le jailbreak, la compromission de bases vectorielles RAG et le déploiement de défenses avec Guardrails.",
    "description": "Alors que les entreprises déploient massivement des LLMs et des agents autonomes dans leurs infrastructures, l'IA Red Teaming et la défense des systèmes d'IA sont devenues les compétences les plus recherchées du secteur. Ce cursus intensif en 6 modules vous forme à auditer, attaquer, modéliser et défendre les applications d'intelligence artificielle en combinant théorie rigoureuse et travaux pratiques sur des environnements d'entraînement dédiés.",
    "accentGradient": "from-purple-500 via-pink-500 to-rose-600",
    "glowColor": "rgba(236, 72, 153, 0.25)",
    "tags": [
      "AI Red Teaming",
      "Prompt Injection",
      "Jailbreak",
      "OWASP LLM Top 10",
      "BankGPT",
      "Data Poisoning",
      "RAG Security",
      "AI Guardrails",
      "NeMo Guardrails",
      "Llama Guard"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Grand Projet d'Audit & Sécurisation IA ⭐",
      "title": "Compromission Black-Box & Durcissement Complet d'un Agent IA d'Entreprise (Challenge BankGPT / HealthGPT)",
      "description": "Sur une infrastructure d'agent conversationnel bancaire virtualisée : exfiltration du System Prompt, contournement des règles de sécurité par Prompt Injection indirecte, injection de données empoisonnées dans la base vectorielle RAG, puis implémentation complète des défenses correctives avec NeMo Guardrails et Llama Guard.",
      "tags": [
        "BankGPT CTF",
        "Indirect Prompt Injection",
        "System Prompt Extraction",
        "RAG Defense",
        "NeMo Guardrails",
        "Llama Guard"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Fondamentaux des Architectures LLMs & Risques Spécifiques",
        "duration": "9 heures",
        "iconName": "brain",
        "description": "Comprenez en profondeur le fonctionnement des Transformers, des fenêtres de contexte, des mécanismes d'attention et la nature stochastique des LLMs qui rend les attaques par langage naturel si difficiles à contrer.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Architecture des Transformers & Traitement du Langage",
            "topic": "Mécanismes d'attention, tokens, embeddings, température et pipeline d'inférence",
            "project": "Analyse des probabilités de sortie et manipulation de tokens sur modèle open-source"
          },
          {
            "week": "Semaine 2",
            "title": "Surface d'Attaque de l'IA & Paradigme Offensive AI",
            "topic": "Différence entre sécurité logicielle classique et sécurité probabiliste de l'IA",
            "project": "Cartographie de la surface d'attaque d'une application d'entreprise connectée à un LLM"
          }
        ]
      },
      {
        "number": "02",
        "title": "Techniques d'Injection de Prompts (Directes & Indirectes)",
        "duration": "10 heures",
        "iconName": "terminal",
        "description": "Maîtrisez l'arme maîtresse du hacking de LLMs : injections directes pour détourner les instructions, et injections indirectes logées dans des documents ou pages web consultés par l'agent IA.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Injections de Prompts Directes & Débordement de Contexte",
            "topic": "Techniques d'oubli d'instructions, délimiteurs spéciaux et encodages Unicode",
            "project": "Bypass des filtres de modération d'un assistant d'entreprise"
          },
          {
            "week": "Semaine 4",
            "title": "Injections de Prompts Indirectes (IPI) & Fichiers Piégés",
            "topic": "Attaques via e-mails, PDFs, pages web explorées et données de base vectorielle",
            "project": "Exfiltration automatique de données confidentielles via injection indirecte dans un PDF"
          }
        ]
      },
      {
        "number": "03",
        "title": "Jailbreaking Avancé & Exfiltration de Prompts Système",
        "duration": "9 heures",
        "iconName": "lock",
        "description": "Apprenez les techniques des chercheurs en sécurité pour contourner les garde-fous d'alignement des modèles (RLHF) et extraire les instructions système secrètes (System Prompts).",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Jailbreaks Multimodaux & Jeux de Rôles Complexes",
            "topic": "Scénarios DAN, induction cognitive, encodage multi-langues et attaques adversariales",
            "project": "Jailbreak réussi d'un modèle d'IA commercial en environnement de test"
          },
          {
            "week": "Semaine 6",
            "title": "Exfiltration & Reconstitution de System Prompts",
            "topic": "Extraction de variables secrètes, clés d'API et logique interne d'agents IA",
            "project": "Extraction à 100% du prompt système d'une application de support client"
          }
        ]
      },
      {
        "number": "04",
        "title": "Vulnérabilités OWASP Top 10 for LLMs & Applications RAG",
        "duration": "9 heures",
        "iconName": "shield",
        "description": "Auditez méthodiquement les applications exploitant des bases vectorielles (Retrieval-Augmented Generation) et des outils externes (Function Calling / Agents).",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "OWASP Top 10 for LLMs & Insecure Output Handling",
            "topic": "Gestion non sécurisée des sorties du modèle (XSS via LLM, exécution de code)",
            "project": "Exploitation d'une faille XSS et RCE générée par la sortie d'un modèle d'IA"
          },
          {
            "week": "Semaine 8",
            "title": "Sécurité des Architectures RAG & Bases Vectorielles",
            "topic": "Empoisonnement d'embeddings, injection vectorielle et divulgation de documents privés",
            "project": "Empoisonnement de base vectorielle Pinecone / ChromaDB pour altérer les réponses"
          }
        ]
      },
      {
        "number": "05",
        "title": "Empoisonnement de Données & Supply Chain de l'IA",
        "duration": "9 heures",
        "iconName": "search",
        "description": "Découvrez les menaces pesant sur les modèles open-source : backdoors intégrées dans les poids de modèles, modèles malveillants sur HuggingFace (Pickle exploits) et empoisonnement de jeux d'entraînement.",
        "weeks": [
          {
            "week": "Semaine 9",
            "title": "Exploits Pickle & Modèles Malveillants sur HuggingFace",
            "topic": "Sérialisation Pickle, exécution de code lors du chargement de poids de modèles",
            "project": "Création et détection d'une porte dérobée dans un modèle de langage open-source"
          }
        ]
      },
      {
        "number": "06",
        "title": "Défense d'IA, Guardrails & Surveillance Continue",
        "duration": "9 heures",
        "iconName": "zap",
        "description": "Implémentez les contre-mesures de niveau entreprise : NeMo Guardrails de NVIDIA, Llama Guard de Meta, filtres d'entrées/sorties et détection de dérive comportementale.",
        "weeks": [
          {
            "week": "Semaine 10",
            "title": "Déploiement de NeMo Guardrails & Llama Guard",
            "topic": "Rails d'entrée, rails de sortie, classification d'intentions et blocage temps réel",
            "project": "Sécurisation complète d'un agent IA d'entreprise avec NeMo Guardrails"
          },
          {
            "week": "Semaine 11",
            "title": "Audit de Conformité IA & Soutenance de Projet",
            "topic": "Référentiels de sécurité IA (NIST AI RMF, ISO 42001, EU AI Act) et soutenance",
            "project": "Soutenance finale du Grand Projet d'Audit et Sécurisation IA"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "55 heures · 11 semaines",
        "features": [
          "Environnement complet de Red Teaming d'IA",
          "Modèles open-source et APIs d'évaluation fournies",
          "Certificat CYBERLYMPH Certified AI Security Specialist",
          "Pionnier sur les compétences de sécurité les plus demandées"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certification AI Security Specialist",
        "desc": "Titre d'avant-garde certifiant votre maîtrise du Red Teaming et de la sécurisation des LLMs"
      },
      {
        "iconName": "brain",
        "title": "Laboratoire d'IA Privé",
        "desc": "Entraînez-vous sur des modèles et architectures d'agents réels en toute sécurité"
      }
    ],
    "faqs": [
      {
        "q": "Pourquoi la sécurité de l'IA est-elle devenue cruciale ?",
        "a": "Toutes les grandes entreprises intègrent aujourd'hui des LLMs dans leurs processus critiques. Savoir auditer et protéger ces systèmes est l'une des compétences les plus rares et les mieux rémunérées de la tech."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*AI%20Security%20%26%20LLM%20Red%20Teaming*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "pre-security",
    "slug": "pre-security-fondamentaux-cybersecurite",
    "title": "Pre Security : Fondamentaux de la Cybersécurité & Réseaux",
    "shortTitle": "Pre Security",
    "tagline": "Architecture Ordinateur · Réseaux IP · Modèle OSI · Fondations Web · Cryptographie de Base",
    "category": "security",
    "categoryLabel": "Fondations de la Cybersécurité",
    "badge": "Idéal pour Débutants",
    "badgeType": "open",
    "partner": "CYBERLYMPH Foundations Academy",
    "duration": "30 heures · 6 semaines",
    "totalHours": 30,
    "modulesCount": 3,
    "projectsCount": 10,
    "prerequisites": "Aucun prérequis technique — Ouvert à tous",
    "location": "Présentiel & Plateforme Interactive",
    "level": "Débutant",
    "summary": "Le point de départ parfait. Découvrez comment fonctionnent les réseaux, les systèmes d'exploitation, Internet et les principes fondamentaux de la sécurité numérique.",
    "description": "Avant d'apprendre à défendre ou attaquer un système, il est indispensable de comprendre comment il fonctionne sous le capot. Ce cursus accessible vous donne les bases solides en informatique, réseaux, fonctionnement du web et cybersécurité pour aborder les spécialisations professionnelles avec sérénité.",
    "accentGradient": "from-teal-400 via-emerald-500 to-cyan-600",
    "glowColor": "rgba(16, 185, 129, 0.25)",
    "tags": [
      "Cyber Foundations",
      "Networking Basics",
      "OSI Model",
      "TCP/IP",
      "Web Basics",
      "Security Principles"
    ],
    "isFeatured": false,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Projet de Synthèse Débutant ⭐",
      "title": "Analyse & Sécurisation d'un Réseau Domestique / Petite Entreprise",
      "description": "Vous configurez et analysez un réseau local complet : adressage IP, règles de pare-feu de base, sécurisation Wi-Fi et audit des services exposés.",
      "tags": [
        "Network Setup",
        "Packet Capture",
        "Wireshark Basics",
        "Firewall Rules"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Fondations des Réseaux & Protocoles IP",
        "duration": "10 heures",
        "iconName": "network",
        "description": "Comprenez le trajet des données sur Internet : adresses IP, masques de sous-réseau, modèle OSI et protocoles TCP/UDP.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Le Modèle OSI & Adressage IP",
            "topic": "Couches 1 à 7, adresses IPv4 privées vs publiques et routage",
            "project": "Conception d'un plan d'adressage IP pour 3 départements d'entreprise"
          },
          {
            "week": "Semaine 2",
            "title": "Protocoles Essentiels : DNS, DHCP & ARP",
            "topic": "Résolution de noms de domaine, attribution d'adresses et inspection",
            "project": "Capture et analyse d'échanges DNS et DHCP dans Wireshark"
          }
        ]
      },
      {
        "number": "02",
        "title": "Fonctionnement du Web & Navigateurs",
        "duration": "10 heures",
        "iconName": "code",
        "description": "Comprenez ce qui se passe quand vous tapez une URL : requêtes HTTP/S, serveurs web, cookies, sessions et code client/serveur.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Le Protocole HTTP & En-Têtes Réseau",
            "topic": "Méthodes GET/POST, codes de statut (200, 301, 404, 500) et requêtes",
            "project": "Inspection des flux HTTP et décodage des requêtes web"
          },
          {
            "week": "Semaine 4",
            "title": "Cookies, Sessions & Chiffrement SSL/TLS",
            "topic": "Gestion de l'état de connexion et bases du chiffrement asymétrique",
            "project": "Observation de sessions web et analyse de certificats HTTPS"
          }
        ]
      },
      {
        "number": "03",
        "title": "Principes de la Sécurité Numérique & Menaces Courantes",
        "duration": "10 heures",
        "iconName": "shield",
        "description": "Découvrez les piliers de la sécurité : triade CIA, ingénierie sociale, malwares courants et bonnes pratiques de protection.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "La Triade CIA & Ingénierie Sociale",
            "topic": "Confidentialité, Intégrité, Disponibilité et techniques de manipulation humaine",
            "project": "Audit de sensibilisation et détection de tentatives de phishing"
          },
          {
            "week": "Semaine 6",
            "title": "Panorama des Menaces & Hygiène Numérique",
            "topic": "Virus, vers, chevaux de Troie, ransomwares et configuration d'antivirus/pare-feu",
            "project": "Mise en place d'une politique de sécurité personnelle et professionnelle"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "30 heures · 6 semaines",
        "features": [
          "Accessible sans aucun prérequis mathématique ou informatique",
          "Exercices interactifs et visuels",
          "Certificat CYBERLYMPH Cyber Foundations",
          "Passerelle idéale vers les filières SOC ou Pentest"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certificat Pre Security",
        "desc": "Atteste de l'acquisition des bases indispensables en réseaux et cybersécurité"
      }
    ],
    "faqs": [
      {
        "q": "Est-ce adapté si je n'ai jamais fait d'informatique ?",
        "a": "Oui, c'est précisément le but de ce programme : tout expliquer avec des analogies simples et des démonstrations pratiques."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Pre%20Security*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "linux-fundamentals",
    "slug": "linux-fundamentals-administration-et-terminal",
    "title": "Linux Fundamentals : Administration Système & Ligne de Commande",
    "shortTitle": "Linux Fundamentals",
    "tagline": "Terminal Bash · Système de Fichiers · Permissions & Droits · Processus · Réseau Linux",
    "category": "network",
    "categoryLabel": "Administration Système Linux & Shell",
    "badge": "Compétence Fondamentale",
    "badgeType": "open",
    "partner": "CYBERLYMPH Open Source Academy",
    "duration": "30 heures · 6 semaines",
    "totalHours": 30,
    "modulesCount": 3,
    "projectsCount": 10,
    "prerequisites": "Aucun prérequis — Accessible à tous",
    "location": "Présentiel & Lab Linux en Ligne",
    "level": "Débutant",
    "summary": "Linux est le système qui propulse Internet, le cloud et la cybersécurité. Apprenez à maîtriser le terminal, naviguer dans le système de fichiers, gérer les permissions, manipuler les processus et écrire des scripts Bash.",
    "description": "Plus de 90% des serveurs cloud, des outils de hacking et des environnements d'entreprise tournent sous Linux. Ce cursus pratique vous affranchit de la souris : vous apprenez à tout contrôler en ligne de commande avec aisance et rapidité, préparant le terrain pour les métiers du cloud, du DevOps et de la cybersécurité.",
    "accentGradient": "from-amber-400 via-orange-500 to-red-600",
    "glowColor": "rgba(245, 158, 11, 0.25)",
    "tags": [
      "Linux",
      "Bash",
      "Terminal",
      "System Administration",
      "File Permissions",
      "Shell Scripting",
      "CompTIA Linux+"
    ],
    "isFeatured": false,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Projet d'Administration Linux ⭐",
      "title": "Déploiement & Sécurisation d'un Serveur Linux de Production (Debian / Ubuntu Server)",
      "description": "Vous installez et durcissez de zéro un serveur Linux : configuration réseau, utilisateurs sans privilèges avec sudo, restriction SSH par clés cryptographiques, pare-feu UFW et script Bash d'automatisation de sauvegarde quotidienne.",
      "tags": [
        "Linux Server",
        "Bash Automation",
        "SSH Keys",
        "UFW Firewall",
        "Systemd Services"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Navigation, Commandes Fondamentales & Manipulation de Fichiers",
        "duration": "10 heures",
        "iconName": "terminal",
        "description": "Prenez en main le shell Bash : déplacement dans l'arborescence, création, copie, déplacement et recherche efficace de fichiers avec grep et find.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Le Terminal & l'Arborescence Linux (/etc, /var, /home)",
            "topic": "Commandes cd, ls, pwd, mkdir, rm, touch, cat, less et nano",
            "project": "Organisation et gestion d'une arborescence de fichiers complexe"
          },
          {
            "week": "Semaine 2",
            "title": "Filtres, Redirections & Recherche (Grep, Find, Pipes)",
            "topic": "Flux standards (stdin, stdout, stderr), tubes (|) et expressions régulières",
            "project": "Extraction rapide d'erreurs critiques dans un fichier de logs de 50 000 lignes"
          }
        ]
      },
      {
        "number": "02",
        "title": "Gestion des Utilisateurs, Permissions & Droits d'Accès",
        "duration": "10 heures",
        "iconName": "lock",
        "description": "Maîtrisez le modèle de sécurité Linux : lecture, écriture, exécution (rwx), permissions numériques (chmod 755), propriété (chown) et privilèges sudo.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Utilisateurs, Groupes & Permissions Numériques",
            "topic": "Fichiers /etc/passwd et /etc/shadow, chmod, chown et umask",
            "project": "Création d'un espace collaboratif partagé avec permissions strictes"
          },
          {
            "week": "Semaine 4",
            "title": "Privilèges Sudo & Sécurité des Accès",
            "topic": "Configuration sécurisée du fichier sudoers, binaires SUID et audit des droits",
            "project": "Configuration d'un utilisateur administrateur restreint sans mot de passe root"
          }
        ]
      },
      {
        "number": "03",
        "title": "Gestion des Processus, Réseau & Initiation aux Scripts Bash",
        "duration": "10 heures",
        "iconName": "code",
        "description": "Contrôlez les programmes en cours d'exécution, gérez les services systemd, analysez les connexions réseau et écrivez vos premiers scripts d'automatisation.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Gestion des Processus & Services Systemd",
            "topic": "Commandes ps, top, kill, systemctl (start, stop, enable, status) et crontab",
            "project": "Automatisation d'une tâche de maintenance planifiée avec Cron"
          },
          {
            "week": "Semaine 6",
            "title": "Commandes Réseau & Écriture de Scripts Bash",
            "topic": "Outils ip, ss, ping, curl, variables Bash, boucles for et conditions if/else",
            "project": "Script Bash de surveillance de serveur avec alerte automatique par e-mail"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "30 heures · 6 semaines",
        "features": [
          "Accès à un serveur Linux dédié par étudiant",
          "100% pratique en ligne de commande",
          "Certificat CYBERLYMPH Certified Linux Administrator",
          "Compétence tremplin indispensable pour toute carrière tech"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certificat Linux Fundamentals",
        "desc": "Attestation certifiante validant votre maîtrise opérationnelle de Linux"
      }
    ],
    "faqs": [
      {
        "q": "Quelle distribution Linux est utilisée ?",
        "a": "Ubuntu Server et Debian, qui représentent la majorité des serveurs professionnels dans le monde."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Linux%20Fundamentals*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "cisco-ccna-1",
    "slug": "cisco-ccna-1-introduction-aux-reseaux",
    "title": "Cisco CCNA 1 : Introduction aux Réseaux (ITN)",
    "shortTitle": "Cisco CCNA 1",
    "tagline": "Programme Officiel Cisco Networking Academy · Packet Tracer · Commutation · Routage IP",
    "category": "network",
    "categoryLabel": "Réseaux d'Entreprise Cisco (Certifié)",
    "badge": "Programme Officiel Cisco",
    "badgeType": "hot",
    "partner": "Cisco Networking Academy",
    "duration": "45 heures · 9 semaines",
    "totalHours": 45,
    "modulesCount": 3,
    "projectsCount": 12,
    "prerequisites": "Intérêt pour les réseaux informatiques — Aucun prérequis préalable",
    "location": "Présentiel (Laboratoire Cisco Annaba) & Simulateur Packet Tracer",
    "level": "Débutant",
    "summary": "La certification réseau la plus prestigieuse au monde. Apprenez à concevoir, câbler, configurer et dépanner des commutateurs (switches) et routeurs Cisco réels.",
    "description": "Le cursus officiel Cisco CCNA 1 (Introduction to Networks) constitue la référence internationale absolue en matière d'ingénierie réseau. Vous acquérez les compétences indispensables pour configurer des équipements Cisco, concevoir des plans d'adressage IPv4/IPv6 d'entreprise et sécuriser les accès de gestion d'infrastructure.",
    "accentGradient": "from-blue-600 via-sky-500 to-cyan-400",
    "glowColor": "rgba(14, 165, 233, 0.25)",
    "tags": [
      "Cisco CCNA",
      "Packet Tracer",
      "IPv4 Subnetting",
      "IPv6",
      "Switch Configuration",
      "Router Setup",
      "Cisco IOS"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Examen Pratique Cisco Packet Tracer ⭐",
      "title": "Conception & Configuration Complète d'une Infrastructure Réseau d'Entreprise Multi-Sites",
      "description": "Vous concevez et déployez l'infrastructure réseau d'une société sur 3 étages : segmentation VLAN, routage inter-VLAN sur routeur Cisco, sous-réseaux IPv4/IPv6 optimisés, serveurs DHCP et sécurisation des accès console et SSH.",
      "tags": [
        "Cisco Packet Tracer",
        "VLAN Segmentation",
        "Inter-VLAN Routing",
        "IPv4 Subnetting",
        "SSH Hardening"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Communication Réseau, Protocoles & Médias Physiques",
        "duration": "15 heures",
        "iconName": "network",
        "description": "Découvrez les principes de communication réseau : modèle OSI, modèle TCP/IP, normes Ethernet, médias cuivre (paires torsadées RJ45) et fibre optique.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Réseaux Aujourd'hui & Modèles en Couches",
            "topic": "Réseaux LAN/WAN, protocoles et standards ouverts de communication",
            "project": "Modélisation de la topologie réseau d'un campus universitaire"
          },
          {
            "week": "Semaine 2",
            "title": "Couche Physique & Commutation Ethernet",
            "topic": "Trames Ethernet, adresses MAC et fonctionnement d'un commutateur",
            "project": "Câblage et inspection des tables d'adresses MAC dans Packet Tracer"
          }
        ]
      },
      {
        "number": "02",
        "title": "Adressage Réseau IPv4, IPv6 & Découpage en Sous-Réseaux",
        "duration": "15 heures",
        "iconName": "terminal",
        "description": "Maîtrisez le calcul de sous-réseaux (VLSM), la conversion binaire/décimale et la transition vers le protocole moderne IPv6.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Adressage IPv4 & Découpage VLSM",
            "topic": "Masques de sous-réseau, calcul de plages IP et masques à longueur variable",
            "project": "Découpage VLSM d'une plage réseau pour 5 départements distincts"
          },
          {
            "week": "Semaine 4",
            "title": "Adressage IPv6 : Unicast, Multicast & Configuration",
            "topic": "Structure d'une adresse IPv6, types d'adresses et configuration sur équipement",
            "project": "Configuration d'un réseau IPv6 complet avec routage local"
          }
        ]
      },
      {
        "number": "03",
        "title": "Configuration & Sécurisation des Routeurs et Commutateurs Cisco",
        "duration": "15 heures",
        "iconName": "shield",
        "description": "Prenez les commandes de Cisco IOS : modes utilisateur, privilégié et configuration globale, mots de passe chiffrés, accès SSH et interfaces réseau.",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Navigation dans Cisco IOS & Configuration Initiale",
            "topic": "Bannières, noms d'hôtes, interfaces réseau et sauvegarde de running-config",
            "project": "Configuration initiale sécurisée de 2 switches et 1 routeur Cisco"
          },
          {
            "week": "Semaine 6",
            "title": "Sécurisation des Accès de Gestion (SSH / Console)",
            "topic": "Chiffrement des mots de passe (secret), génération de clés RSA et SSH v2",
            "project": "Élimination de Telnet et activation de l'administration distante SSH"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "45 heures · 9 semaines",
        "features": [
          "Accès officiel à la plateforme Cisco NetAcad",
          "Laboratoires réels et simulations Packet Tracer",
          "Certificat officiel Cisco Networking Academy",
          "Préparation directe à la certification mondiale CCNA"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Certificat Officiel Cisco NetAcad",
        "desc": "Reconnaissance internationale délivrée directement par Cisco Networking Academy"
      },
      {
        "iconName": "network",
        "title": "Matériel Réseau Professionnel",
        "desc": "Manipulez de véritables switches et routeurs Cisco en laboratoire"
      }
    ],
    "faqs": [
      {
        "q": "Ce cours donne-t-il droit à un certificat Cisco officiel ?",
        "a": "Oui, la formation se déroule sous l'égide du programme Cisco Networking Academy avec délivrance du badge numérique officiel Cisco."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Cisco%20CCNA%201%20%3A%20Introduction%20aux%20R%C3%A9seaux*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  },
  {
    "id": "cisco-ethical-hacking",
    "slug": "cisco-ethical-hacker-pentesting",
    "title": "Ethical Hacker : Pentesting Réseau & Infrastructure (Programme Officiel Cisco)",
    "shortTitle": "Cisco Ethical Hacker",
    "tagline": "Programme Officiel Cisco NetAcad · Reconnaissance · Infiltration Réseau · Sécurité Wi-Fi · IoT & Cloud",
    "category": "pentest",
    "categoryLabel": "Sécurité Offensive Certifiée Cisco",
    "badge": "Certification Cisco Officielle",
    "badgeType": "hot",
    "partner": "Cisco Networking Academy",
    "duration": "50 heures · 10 semaines",
    "totalHours": 50,
    "modulesCount": 5,
    "projectsCount": 16,
    "prerequisites": "Bonnes bases en réseaux (niveau CCNA 1 recommandé) et aisance avec la ligne de commande",
    "location": "Laboratoire Cisco Présentiel & Cyber Range Virtuel",
    "level": "Intermédiaire à Avancé",
    "summary": "Le nouveau cursus offensif officiel de Cisco Networking Academy. Apprenez à évaluer la posture de sécurité d'infrastructures d'entreprises complètes : réseaux locaux, réseaux sans fil Wi-Fi, services cloud et objets connectés (IoT).",
    "description": "Développé par les experts de Cisco, ce programme prépare les professionnels à endosser le rôle d'auditeur de sécurité éthique. Vous combinez la rigueur méthodologique des architectures réseau Cisco avec les techniques d'intrusion les plus modernes pour identifier les vulnérabilités avant qu'elles ne soient exploitées par des cybercriminels.",
    "accentGradient": "from-sky-500 via-indigo-600 to-purple-600",
    "glowColor": "rgba(14, 165, 233, 0.25)",
    "tags": [
      "Cisco Certified",
      "Ethical Hacking",
      "Network Pentesting",
      "Wi-Fi Security",
      "Cloud Security",
      "IoT Hacking",
      "Vulnerability Assessment"
    ],
    "isFeatured": true,
    "isOpenForRegistration": true,
    "capstoneProject": {
      "highlightLabel": "Grand Projet d'Audit Certifié Cisco ⭐",
      "title": "Audit de Sécurité Complet d'une Infrastructure Entreprise Cisco Hybride (LAN, Wi-Fi & Cloud)",
      "description": "Vous menez un test d'intrusion autorisé de bout en bout : cartographie réseau, exploitation de failles de commutation (VLAN Hopping, ARP Spoofing), audit de sécurité du réseau Wi-Fi d'entreprise (WPA2/WPA3 Enterprise) et préconisations de remédiation conformes au référentiel Cisco SAFE.",
      "tags": [
        "Cisco SAFE Framework",
        "VLAN Hopping",
        "WPA3 Audit",
        "Arp Poisoning",
        "Official Cisco Audit Report"
      ]
    },
    "modules": [
      {
        "number": "01",
        "title": "Fondations de l'Ethical Hacking selon Cisco",
        "duration": "10 heures",
        "iconName": "shield",
        "description": "Comprenez la vision Cisco de la sécurité offensive : framework Cisco SAFE, cadre réglementaire d'audit, méthodologies d'évaluation des menaces et mise en place de la machine d'attaque.",
        "weeks": [
          {
            "week": "Semaine 1",
            "title": "Méthodologie de Test d'Intrusion & Architecture Cisco SAFE",
            "topic": "Périmètre d'audit, types de tests (Black/White/Gray box) et conformité légale",
            "project": "Élaboration d'une convention d'audit pour une infrastructure Cisco"
          },
          {
            "week": "Semaine 2",
            "title": "Cartographie Passive & Découverte de Cible",
            "topic": "Collecte d'informations d'infrastructure, énumération DNS et empreinte d'adresses IP",
            "project": "Cartographie de la surface d'attaque externe d'une organisation partenaire"
          }
        ]
      },
      {
        "number": "02",
        "title": "Analyse de Vulnérabilités & Infiltration Réseau",
        "duration": "10 heures",
        "iconName": "search",
        "description": "Scannez et identifiez les failles des équipements réseau et serveurs : scanners de vulnérabilités, exploitation de failles de protocoles réseau et usurpation d'identité.",
        "weeks": [
          {
            "week": "Semaine 3",
            "title": "Scans de Vulnérabilités Réseau avec Nessus & OpenVAS",
            "topic": "Configuration de scans authentifiés, élimination des faux positifs et analyse de risques",
            "project": "Rapport d'audit de vulnérabilités sur 15 commutateurs et serveurs"
          },
          {
            "week": "Semaine 4",
            "title": "Attaques sur la Couche Liaison de Données (Couche 2)",
            "topic": "ARP Poisoning, usurpation de passerelle, attaques DHCP Starvation et VLAN Hopping",
            "project": "Démonstration d'interception de trafic non chiffré par attaque Man-in-the-Middle"
          }
        ]
      },
      {
        "number": "03",
        "title": "Sécurité des Réseaux Sans Fil (Wi-Fi Pentesting)",
        "duration": "10 heures",
        "iconName": "network",
        "description": "Auditez la sécurité des réseaux sans fil : analyse des trames 802.11, capture de handshakes WPA/WPA2, failles d'implémentation WPA3 et points d'accès malveillants (Rogue APs).",
        "weeks": [
          {
            "week": "Semaine 5",
            "title": "Protocoles Wi-Fi & Capture de Handshake WPA2",
            "topic": "Trames de désauthentification, capture du 4-way handshake et cassage par dictionnaire",
            "project": "Audit de résistance d'un réseau Wi-Fi d'entreprise face au cassage de mot de passe"
          },
          {
            "week": "Semaine 6",
            "title": "Points d'Accès Pirates (Evil Twin) & Sécurité WPA3",
            "topic": "Attaques Evil Twin, portails captifs malveillants et analyse des limites de WPA3",
            "project": "Déploiement d'un laboratoire de détection de points d'accès non autorisés"
          }
        ]
      },
      {
        "number": "04",
        "title": "Sécurité Cloud, Conteneurs & Objets Connectés (IoT)",
        "duration": "10 heures",
        "iconName": "server",
        "description": "Explorez les nouveaux vecteurs d'attaque : failles d'équipements IoT (caméras, capteurs), sécurité des environnements cloud hybrides et conteneurs virtuels.",
        "weeks": [
          {
            "week": "Semaine 7",
            "title": "Attaques sur les Objets Connectés (IoT)",
            "topic": "Mots de passe d'usine, protocoles MQTT/CoAP vulnérables et micrologiciels non sécurisés",
            "project": "Audit de sécurité d'un équipement IoT connecté au réseau local"
          },
          {
            "week": "Semaine 8",
            "title": "Sécurité des Déploiements Cloud Hybrides",
            "topic": "Ponts de connexion réseau VPN / DirectConnect entre réseau local et cloud public",
            "project": "Identification d'une faille de configuration de passerelle VPN Cloud"
          }
        ]
      },
      {
        "number": "05",
        "title": "Rédaction du Rapport d'Audit & Certification Cisco",
        "duration": "10 heures",
        "iconName": "award",
        "description": "Consolidez vos compétences d'auditeur certifié : rédaction du rapport d'audit technique et managérial selon les exigences Cisco et passage de l'évaluation finale.",
        "weeks": [
          {
            "week": "Semaine 9",
            "title": "Plan de Remédiation selon les Directives Cisco SAFE",
            "topic": "Priorisation des corrections, remédiations par ACLs, segmentation et chiffrement",
            "project": "Élaboration du plan d'action de sécurité pour l'équipe réseau d'entreprise"
          },
          {
            "week": "Semaine 10",
            "title": "Examen Final & Délivrance du Badge Cisco",
            "topic": "Passage de l'examen théorique et pratique officiel sur la plateforme Cisco NetAcad",
            "project": "Obtention du titre officiel Cisco Certified Ethical Hacker"
          }
        ]
      }
    ],
    "pricing": {
      "packComplet": {
        "price": "Sur devis",
        "durationLabel": "50 heures · 10 semaines",
        "features": [
          "Cursus officiel Cisco Networking Academy",
          "Accès aux simulateurs et matériels Cisco",
          "Badge numérique mondial Cisco Certified Ethical Hacker",
          "Double compétence réseau et cybersécurité très valorisée"
        ]
      }
    },
    "benefits": [
      {
        "iconName": "award",
        "title": "Badge Numérique Officiel Cisco",
        "desc": "Titre délivré directement par Cisco Networking Academy et vérifiable sur Credly"
      },
      {
        "iconName": "shield",
        "title": "Crédibilité Industrielle Maximale",
        "desc": "Associez votre expertise en sécurité au nom le plus respecté des réseaux mondiaux"
      }
    ],
    "faqs": [
      {
        "q": "Ce cours prépare-t-il à un titre reconnu à l'international ?",
        "a": "Oui, le badge Cisco Certified Ethical Hacker est émis directement par Cisco sur la plateforme internationale Credly, reconnu par les employeurs du monde entier."
      }
    ],
    "registrationUrl": "https://wa.me/213699326406?text=Bonjour%20CYBERLYMPH%2C%0A%0AJe%20souhaite%20r%C3%A9server%20ma%20place%20pour%20la%20formation%20%3A%0A*Cisco%20Ethical%20Hacker*%0A%0A-%20Formule%20choisie%20%3A%20Pack%20Complet%0A-%20Lieu%20%3A%20Pr%C3%A9sentiel%20(Annaba)%20%2F%20En%20ligne%0A%0AMerci%20de%20m'indiquer%20la%20d%C3%A9marche%20pour%20confirmer%20mon%20inscription."
  }
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
