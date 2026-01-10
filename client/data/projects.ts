export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

// Helper function to encode UTF-8 strings to base64
const utf8ToBase64 = (str: string): string => {
  return btoa(unescape(encodeURIComponent(str)));
};

// Helper function to generate sophisticated SVG placeholders with icons
const generatePlaceholderSVG = (color: string, icon: string): string => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="300">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color}cc;stop-opacity:1" />
      </linearGradient>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
      </filter>
    </defs>
    <rect width="500" height="300" fill="url(#grad)"/>
    <g filter="url(#shadow)">
      <text x="50%" y="50%" font-size="120" font-weight="bold" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" opacity="0.9">${icon}</text>
    </g>
  </svg>`;

  return `data:image/svg+xml;base64,${utf8ToBase64(svg)}`;
};

// Map categories to color gradients and icons
const categoryColorMap: Record<string, { bg: string; icon: string }> = {
  "E-Commerce": { bg: "#a855f7", icon: "🛍️" },
  "Mobile App": { bg: "#0ea5e9", icon: "📱" },
  "AI/ML": { bg: "#10b981", icon: "🤖" },
  "Web Applications": { bg: "#6366f1", icon: "🌐" },
  "Security": { bg: "#ef4444", icon: "🔐" },
  "Data Management": { bg: "#f97316", icon: "📊" },
  "Document Management": { bg: "#14b8a6", icon: "📄" },
  "Cloud Services": { bg: "#06b6d4", icon: "☁️" },
  "Storage Solutions": { bg: "#8b5cf6", icon: "💾" },
  "Automation": { bg: "#16a34a", icon: "⚙️" },
  "Healthcare": { bg: "#dc2626", icon: "🏥" },
  "Communication": { bg: "#ec4899", icon: "💬" },
  "Content Management": { bg: "#d946ef", icon: "📝" },
  "Analytics": { bg: "#b45309", icon: "📈" },
  "Development Tools": { bg: "#2563eb", icon: "⚛️" },
  "Monitoring": { bg: "#059669", icon: "📡" },
  "Backup & Recovery": { bg: "#7c2d12", icon: "💾" },
  "Media Management": { bg: "#ea580c", icon: "🎬" },
  "Productivity": { bg: "#64748b", icon: "✅" },
  "Knowledge Base": { bg: "#0284c7", icon: "📚" },
};

const getProjectImage = (category: string): string => {
  const colors = categoryColorMap[category];
  if (colors) {
    return generatePlaceholderSVG(colors.bg, colors.icon);
  }
  return generatePlaceholderSVG("#6366f1", "📦");
};

export const projectsData: Project[] = [
  // E-Commerce Projects
  {
    id: "ecommerce-1",
    title: "Modern E-Commerce Platform",
    description: "A complete e-commerce solution featuring product catalog, shopping cart, secure checkout with multiple payment methods, inventory management, and customer analytics. Built for scalability to handle millions of transactions.",
    image: getProjectImage("E-Commerce"),
    category: "E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    link: "#",
  },
  {
    id: "ecommerce-2",
    title: "Multi-Vendor Marketplace",
    description: "Enterprise marketplace platform enabling multiple sellers to list and manage products. Features vendor dashboard, commission tracking, dispute resolution system, and advanced search with AI recommendations.",
    image: getProjectImage("E-Commerce"),
    category: "E-Commerce",
    technologies: ["Next.js", "PostgreSQL", "TypeScript", "Elasticsearch"],
    link: "#",
  },
  {
    id: "ecommerce-3",
    title: "Social Commerce Platform",
    description: "Shopping experience integrated with social features including live shopping events, influencer collaborations, user reviews, and social sharing. Real-time inventory sync across multiple channels.",
    image: getProjectImage("E-Commerce"),
    category: "E-Commerce",
    technologies: ["React", "Firebase", "AWS Lambda", "Webhooks"],
    link: "#",
  },

  // Mobile App Projects
  {
    id: "mobile-1",
    title: "Banking & Financial Management App",
    description: "Secure mobile banking application with biometric authentication, real-time transaction tracking, bill payments, money transfers, and investment portfolio management for 500K+ users.",
    image: getProjectImage("Mobile App"),
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "TypeScript", "OpenSSL"],
    link: "#",
  },
  {
    id: "mobile-2",
    title: "Fitness & Health Tracking App",
    description: "Comprehensive health tracking app with wearable device integration, AI-powered workout recommendations, nutrition planning, social challenges, and progress analytics.",
    image: getProjectImage("Mobile App"),
    category: "Mobile App",
    technologies: ["Flutter", "Dart", "Firebase", "Google Fit API"],
    link: "#",
  },
  {
    id: "mobile-3",
    title: "On-Demand Service Platform",
    description: "Real-time service marketplace connecting users with professionals. Features GPS tracking, live chat, payment processing, rating system, and automated scheduling.",
    image: getProjectImage("Mobile App"),
    category: "Mobile App",
    technologies: ["React Native", "Node.js", "Socket.io", "Mapbox"],
    link: "#",
  },

  // AI/ML Projects
  {
    id: "aiml-1",
    title: "Predictive Analytics Engine",
    description: "Enterprise analytics platform leveraging machine learning to predict customer behavior, market trends, and operational insights. Provides actionable recommendations with 95%+ accuracy.",
    image: getProjectImage("AI/ML"),
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "PyTorch", "PostgreSQL"],
    link: "#",
  },
  {
    id: "aiml-2",
    title: "Natural Language Processing System",
    description: "Advanced NLP solution for sentiment analysis, chatbots, document classification, and text summarization. Supports 50+ languages with real-time processing capabilities.",
    image: getProjectImage("AI/ML"),
    category: "AI/ML",
    technologies: ["Python", "NLTK", "spaCy", "OpenAI API"],
    link: "#",
  },
  {
    id: "aiml-3",
    title: "Computer Vision Platform",
    description: "AI-powered image recognition system for object detection, facial recognition, quality control automation, and autonomous inspection systems.",
    image: getProjectImage("AI/ML"),
    category: "AI/ML",
    technologies: ["Python", "OpenCV", "YOLOv8", "TensorFlow"],
    link: "#",
  },

  // Web Applications
  {
    id: "web-1",
    title: "Project Management Suite",
    description: "Comprehensive project management solution with Gantt charts, Kanban boards, resource allocation, time tracking, and team collaboration. Integrates with popular business tools.",
    image: getProjectImage("Web Applications"),
    category: "Web Applications",
    technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    link: "#",
  },
  {
    id: "web-2",
    title: "Customer Relationship Management System",
    description: "Enterprise CRM platform for managing customer interactions, sales pipelines, lead scoring, email automation, and performance analytics for sales teams.",
    image: getProjectImage("Web Applications"),
    category: "Web Applications",
    technologies: ["Next.js", "GraphQL", "MongoDB", "Redux"],
    link: "#",
  },
  {
    id: "web-3",
    title: "Collaborative Design Platform",
    description: "Real-time collaborative design tool for teams. Features vector editing, version control, asset management, and integration with design workflows.",
    image: getProjectImage("Web Applications"),
    category: "Web Applications",
    technologies: ["React", "WebGL", "Canvas API", "Operational Transform"],
    link: "#",
  },

  // Security Projects
  {
    id: "security-1",
    title: "Enterprise Security Audit Platform",
    description: "Comprehensive security vulnerability scanner with automated penetration testing, compliance checking, and detailed remediation recommendations for enterprise environments.",
    image: getProjectImage("Security"),
    category: "Security",
    technologies: ["Python", "Flask", "PostgreSQL", "OpenSSL"],
    link: "#",
  },
  {
    id: "security-2",
    title: "Zero Trust Access Control System",
    description: "Modern access management platform implementing zero trust architecture. Features multi-factor authentication, device verification, and continuous security monitoring.",
    image: getProjectImage("Security"),
    category: "Security",
    technologies: ["Node.js", "JWT", "OAuth2", "LDAP"],
    link: "#",
  },
  {
    id: "security-3",
    title: "Incident Response & Threat Management",
    description: "Real-time threat detection and incident response platform with SIEM integration, alert management, and automated response workflows.",
    image: getProjectImage("Security"),
    category: "Security",
    technologies: ["Python", "Elasticsearch", "Kafka", "Machine Learning"],
    link: "#",
  },

  // Data Management
  {
    id: "data-1",
    title: "Data Warehouse & Analytics Hub",
    description: "Enterprise data warehouse for consolidating data from multiple sources. Features ETL pipelines, data quality monitoring, and advanced analytics with BI tools.",
    image: getProjectImage("Data Management"),
    category: "Data Management",
    technologies: ["SQL", "Apache Spark", "Hadoop", "Tableau"],
    link: "#",
  },
  {
    id: "data-2",
    title: "Real-Time Analytics Dashboard",
    description: "Live analytics dashboard displaying real-time KPIs, metrics, and business intelligence. Customizable reports with drill-down capabilities and data export features.",
    image: getProjectImage("Data Management"),
    category: "Data Management",
    technologies: ["React", "D3.js", "PostgreSQL", "WebSocket"],
    link: "#",
  },
  {
    id: "data-3",
    title: "Data Privacy & Compliance Manager",
    description: "GDPR and compliance management platform for data governance, access controls, and audit trails. Automates data subject requests and retention policies.",
    image: getProjectImage("Data Management"),
    category: "Data Management",
    technologies: ["Node.js", "PostgreSQL", "Encryption", "Audit APIs"],
    link: "#",
  },

  // Document Management
  {
    id: "docs-1",
    title: "Digital Document Management Service",
    description: "Paperless document management system with OCR, automatic categorization, full-text search, and workflow automation. Eliminates physical document handling.",
    image: getProjectImage("Document Management"),
    category: "Document Management",
    technologies: ["React", "OCR Engine", "Elasticsearch", "Python"],
    link: "#",
  },
  {
    id: "docs-2",
    title: "Electronic Signature & Approval Platform",
    description: "Legal document management with e-signature integration, approval workflows, and audit trails. Compliant with global electronic signature standards.",
    image: getProjectImage("Document Management"),
    category: "Document Management",
    technologies: ["Node.js", "PDF.js", "Digital Signatures", "AWS"],
    link: "#",
  },
  {
    id: "docs-3",
    title: "Knowledge Base & Wiki Service",
    description: "Internal knowledge management platform for documenting processes, best practices, and institutional knowledge. Features search, versioning, and collaborative editing.",
    image: getProjectImage("Document Management"),
    category: "Document Management",
    technologies: ["React", "Markdown", "PostgreSQL", "Elasticsearch"],
    link: "#",
  },

  // Cloud Services
  {
    id: "cloud-1",
    title: "Containerized Application Platform",
    description: "Container orchestration and management platform for deploying microservices. Auto-scaling, load balancing, and multi-region deployment support.",
    image: getProjectImage("Cloud Services"),
    category: "Cloud Services",
    technologies: ["Kubernetes", "Docker", "Helm", "etcd"],
    link: "#",
  },
  {
    id: "cloud-2",
    title: "Serverless Function Platform",
    description: "Function-as-a-Service platform enabling developers to deploy code without managing servers. Auto-scaling and event-driven architecture support.",
    image: getProjectImage("Cloud Services"),
    category: "Cloud Services",
    technologies: ["Node.js", "AWS Lambda", "API Gateway", "DynamoDB"],
    link: "#",
  },
  {
    id: "cloud-3",
    title: "Infrastructure as Code Management",
    description: "IaC platform for managing cloud infrastructure through code. Version control, drift detection, and automated deployment pipelines.",
    image: getProjectImage("Cloud Services"),
    category: "Cloud Services",
    technologies: ["Terraform", "CloudFormation", "Ansible", "Git"],
    link: "#",
  },

  // Storage Solutions
  {
    id: "storage-1",
    title: "Network Storage Service (NAS Equivalent)",
    description: "Self-hosted network storage solution for centralized file management, automatic backups, and redundant data protection. RAID support with multi-user access control.",
    image: getProjectImage("Storage Solutions"),
    category: "Storage Solutions",
    technologies: ["Linux", "ZFS", "RAID", "SMB/NFS", "Web UI"],
    link: "#",
  },
  {
    id: "storage-2",
    title: "Cloud Backup & Archive Service",
    description: "Automated backup solution with incremental backups, encryption, and point-in-time recovery. Supports multiple storage destinations and compression.",
    image: getProjectImage("Storage Solutions"),
    category: "Storage Solutions",
    technologies: ["Python", "rsync", "Encryption", "S3-compatible"],
    link: "#",
  },
  {
    id: "storage-3",
    title: "Object Storage Management",
    description: "S3-compatible object storage service for storing unstructured data. Features versioning, lifecycle policies, and object tagging.",
    image: getProjectImage("Storage Solutions"),
    category: "Storage Solutions",
    technologies: ["Go", "Distributed Storage", "HTTP API", "Replication"],
    link: "#",
  },

  // Automation
  {
    id: "auto-1",
    title: "Workflow Automation Engine",
    description: "No-code/low-code automation platform for connecting business applications. Visual workflow builder with conditional logic and integrations.",
    image: getProjectImage("Automation"),
    category: "Automation",
    technologies: ["Node.js", "REST APIs", "Webhooks", "JavaScript"],
    link: "#",
  },
  {
    id: "auto-2",
    title: "Business Process Automation",
    description: "RPA platform for automating repetitive business processes. Bot designer, process mining, and performance monitoring.",
    image: getProjectImage("Automation"),
    category: "Automation",
    technologies: ["Python", "Selenium", "Computer Vision", "ML"],
    link: "#",
  },
  {
    id: "auto-3",
    title: "CI/CD Automation Platform",
    description: "Continuous integration and deployment platform with automated testing, build optimization, and deployment pipelines.",
    image: getProjectImage("Automation"),
    category: "Automation",
    technologies: ["Go", "Jenkins", "Docker", "Git"],
    link: "#",
  },

  // Healthcare
  {
    id: "health-1",
    title: "Patient Management System",
    description: "Comprehensive healthcare platform for patient records, appointment scheduling, prescription management, and telemedicine. HIPAA compliant.",
    image: getProjectImage("Healthcare"),
    category: "Healthcare",
    technologies: ["React", "Node.js", "PostgreSQL", "FHIR Standard"],
    link: "#",
  },
  {
    id: "health-2",
    title: "Medical Imaging Platform",
    description: "DICOM viewer and management system for medical images. Features annotation tools, AI-assisted diagnostics, and secure sharing.",
    image: getProjectImage("Healthcare"),
    category: "Healthcare",
    technologies: ["React", "WebGL", "DICOM.js", "Python"],
    link: "#",
  },
  {
    id: "health-3",
    title: "Telemedicine & Remote Care",
    description: "Video consultation platform for remote healthcare. Features appointment scheduling, secure messaging, prescription delivery, and medical records.",
    image: getProjectImage("Healthcare"),
    category: "Healthcare",
    technologies: ["React", "WebRTC", "Node.js", "PostgreSQL"],
    link: "#",
  },

  // Communication
  {
    id: "comm-1",
    title: "Team Communication Platform",
    description: "Enterprise messaging platform with channels, direct messages, file sharing, and search. Integrates with productivity tools.",
    image: getProjectImage("Communication"),
    category: "Communication",
    technologies: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    link: "#",
  },
  {
    id: "comm-2",
    title: "Video Conferencing System",
    description: "Scalable video conferencing platform with screen sharing, recording, and meeting analytics. Supports hundreds of participants.",
    image: getProjectImage("Communication"),
    category: "Communication",
    technologies: ["WebRTC", "Go", "Redis", "Janus"],
    link: "#",
  },
  {
    id: "comm-3",
    title: "Customer Support Platform",
    description: "Omnichannel customer support system handling email, chat, phone, and social media. Features ticketing, knowledge base, and AI chatbot.",
    image: getProjectImage("Communication"),
    category: "Communication",
    technologies: ["React", "Node.js", "PostgreSQL", "NLP"],
    link: "#",
  },

  // Content Management
  {
    id: "content-1",
    title: "Headless CMS Platform",
    description: "Decoupled content management system for managing content across multiple platforms. Features version control, content scheduling, and multi-language support.",
    image: getProjectImage("Content Management"),
    category: "Content Management",
    technologies: ["Node.js", "GraphQL", "PostgreSQL", "Git"],
    link: "#",
  },
  {
    id: "content-2",
    title: "Blog & Publishing Platform",
    description: "Content publishing platform with WYSIWYG editor, SEO optimization, and distribution scheduling. Multi-author support with approval workflows.",
    image: getProjectImage("Content Management"),
    category: "Content Management",
    technologies: ["React", "Node.js", "Markdown", "Elasticsearch"],
    link: "#",
  },
  {
    id: "content-3",
    title: "Digital Asset Management",
    description: "Media library management with tagging, versioning, and usage tracking. Optimized image delivery with multiple format support.",
    image: getProjectImage("Content Management"),
    category: "Content Management",
    technologies: ["React", "Node.js", "ImageMagick", "S3"],
    link: "#",
  },

  // Analytics
  {
    id: "analytics-1",
    title: "Web Analytics Platform",
    description: "Comprehensive web analytics tracking user behavior, conversion funnels, and traffic sources. Privacy-focused alternative to traditional analytics.",
    image: getProjectImage("Analytics"),
    category: "Analytics",
    technologies: ["Go", "ClickHouse", "React", "WebSocket"],
    link: "#",
  },
  {
    id: "analytics-2",
    title: "Business Intelligence Platform",
    description: "Self-service BI platform for creating custom reports and dashboards. Features drag-and-drop query builder and scheduled report delivery.",
    image: getProjectImage("Analytics"),
    category: "Analytics",
    technologies: ["React", "PostgreSQL", "D3.js", "Python"],
    link: "#",
  },
  {
    id: "analytics-3",
    title: "User Behavior Analytics",
    description: "Product analytics platform tracking user interactions, retention metrics, and feature adoption. Cohort analysis and funnels.",
    image: getProjectImage("Analytics"),
    category: "Analytics",
    technologies: ["React", "Node.js", "Kafka", "ClickHouse"],
    link: "#",
  },

  // Development Tools
  {
    id: "devtools-1",
    title: "Low-Code Development Platform",
    description: "Visual development platform for building applications without extensive coding. Drag-and-drop components with backend integration.",
    image: getProjectImage("Development Tools"),
    category: "Development Tools",
    technologies: ["React", "Node.js", "TypeScript", "Webhooks"],
    link: "#",
  },
  {
    id: "devtools-2",
    title: "API Gateway & Management",
    description: "API gateway for managing microservices, rate limiting, authentication, and API analytics. Developer portal with API documentation.",
    image: getProjectImage("Development Tools"),
    category: "Development Tools",
    technologies: ["Go", "Lua", "PostgreSQL", "OpenAPI"],
    link: "#",
  },
  {
    id: "devtools-3",
    title: "Code Repository & Version Control",
    description: "Self-hosted Git platform with code review, CI/CD integration, and security scanning. Issue tracking and project management.",
    image: getProjectImage("Development Tools"),
    category: "Development Tools",
    technologies: ["Go", "Git", "React", "PostgreSQL"],
    link: "#",
  },

  // Monitoring
  {
    id: "monitor-1",
    title: "Infrastructure Monitoring Service",
    description: "Real-time monitoring of servers, networks, and applications. Alerting, historical data, and performance analysis.",
    image: getProjectImage("Monitoring"),
    category: "Monitoring",
    technologies: ["Go", "Prometheus", "Grafana", "InfluxDB"],
    link: "#",
  },
  {
    id: "monitor-2",
    title: "Application Performance Monitoring",
    description: "APM solution tracking application performance, errors, and user experience. Distributed tracing and performance profiling.",
    image: getProjectImage("Monitoring"),
    category: "Monitoring",
    technologies: ["Go", "OpenTelemetry", "Elasticsearch", "React"],
    link: "#",
  },
  {
    id: "monitor-3",
    title: "Log Management & Analysis",
    description: "Centralized logging platform for collecting and analyzing logs from multiple sources. Advanced search and alerting.",
    image: getProjectImage("Monitoring"),
    category: "Monitoring",
    technologies: ["Go", "Elasticsearch", "Kibana", "Logstash"],
    link: "#",
  },

  // Backup & Recovery
  {
    id: "backup-1",
    title: "Backup & Disaster Recovery",
    description: "Enterprise backup solution with point-in-time recovery, ransomware protection, and cross-region replication.",
    image: getProjectImage("Backup & Recovery"),
    category: "Backup & Recovery",
    technologies: ["Go", "Encryption", "Deduplication", "Replication"],
    link: "#",
  },
  {
    id: "backup-2",
    title: "Database Backup Service",
    description: "Automated database backup with incremental snapshots, PITR, and cross-region failover support.",
    image: getProjectImage("Backup & Recovery"),
    category: "Backup & Recovery",
    technologies: ["Python", "PostgreSQL", "WAL", "S3"],
    link: "#",
  },
  {
    id: "backup-3",
    title: "System Recovery Platform",
    description: "Bare-metal recovery solution for disaster recovery scenarios. Full system restoration from backups.",
    image: getProjectImage("Backup & Recovery"),
    category: "Backup & Recovery",
    technologies: ["C", "Linux", "PXE Boot", "Imaging"],
    link: "#",
  },

  // Media Management
  {
    id: "media-1",
    title: "Video Streaming Platform",
    description: "Video hosting and streaming platform with adaptive bitrate streaming, content protection, and analytics.",
    image: getProjectImage("Media Management"),
    category: "Media Management",
    technologies: ["Go", "FFmpeg", "HLS/DASH", "PostgreSQL"],
    link: "#",
  },
  {
    id: "media-2",
    title: "Media Transcoding Service",
    description: "Batch video/audio transcoding service supporting multiple formats and quality levels. Distributed processing.",
    image: getProjectImage("Media Management"),
    category: "Media Management",
    technologies: ["Go", "FFmpeg", "Queue System", "Distributed"],
    link: "#",
  },
  {
    id: "media-3",
    title: "Photo Gallery & Management",
    description: "Photo organization platform with face detection, automatic tagging, and sharing capabilities.",
    image: getProjectImage("Media Management"),
    category: "Media Management",
    technologies: ["React", "Node.js", "Computer Vision", "PostgreSQL"],
    link: "#",
  },

  // Productivity
  {
    id: "prod-1",
    title: "Note Taking & Organization",
    description: "Personal knowledge management tool for notes, tasks, and project planning. Hierarchical organization with rich formatting.",
    image: getProjectImage("Productivity"),
    category: "Productivity",
    technologies: ["React", "Node.js", "PostgreSQL", "Markdown"],
    link: "#",
  },
  {
    id: "prod-2",
    title: "Calendar & Scheduling Service",
    description: "Unified calendar platform supporting multiple calendars, meeting scheduling, and calendar sharing.",
    image: getProjectImage("Productivity"),
    category: "Productivity",
    technologies: ["React", "Node.js", "PostgreSQL", "iCalendar"],
    link: "#",
  },
  {
    id: "prod-3",
    title: "Password & Secrets Management",
    description: "Secure password manager for teams with encryption, access control, and audit logging.",
    image: getProjectImage("Productivity"),
    category: "Productivity",
    technologies: ["React", "Node.js", "Encryption", "PostgreSQL"],
    link: "#",
  },

  // Knowledge Base
  {
    id: "kb-1",
    title: "Internal Wiki & Documentation",
    description: "Self-hosted documentation platform for internal knowledge sharing. Full-text search and collaborative editing.",
    image: getProjectImage("Knowledge Base"),
    category: "Knowledge Base",
    technologies: ["React", "Node.js", "Markdown", "Elasticsearch"],
    link: "#",
  },
  {
    id: "kb-2",
    title: "Public Knowledge Base",
    description: "Customer-facing knowledge base for self-service support. AI-powered search and recommendations.",
    image: getProjectImage("Knowledge Base"),
    category: "Knowledge Base",
    technologies: ["React", "Node.js", "NLP", "PostgreSQL"],
    link: "#",
  },
  {
    id: "kb-3",
    title: "API Documentation Platform",
    description: "Interactive API documentation with request/response examples, SDK generation, and version management.",
    image: getProjectImage("Knowledge Base"),
    category: "Knowledge Base",
    technologies: ["React", "Node.js", "OpenAPI", "Markdown"],
    link: "#",
  },
];
