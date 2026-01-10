export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform Redesign",
    description: "Complete redesign and modernization of a large-scale e-commerce platform with improved user experience and 50% faster load times.",
    image: "https://images.unsplash.com/photo-1460925895917-aaf4ffe91b3f?w=500&h=300&fit=crop",
    category: "E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: "project-2",
    title: "Mobile Banking Application",
    description: "Secure mobile banking app serving 500K+ users with real-time transactions, biometric authentication, and advanced security features.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    category: "Mobile App",
    technologies: ["React Native", "Firebase", "TypeScript", "Security APIs"],
    link: "#",
  },
  {
    id: "project-3",
    title: "AI-Powered Analytics Dashboard",
    description: "Enterprise analytics platform leveraging AI/ML to provide predictive insights and real-time data visualization for 100+ companies.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    link: "#",
  },
  {
    id: "project-4",
    title: "Cloud Infrastructure Migration",
    description: "Successfully migrated a company's legacy infrastructure to cloud with zero downtime, reducing operational costs by 35%.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    category: "Cloud Services",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    link: "#",
  },
  {
    id: "project-5",
    title: "SaaS Management Platform",
    description: "B2B SaaS platform connecting businesses with enterprise solutions, serving 50+ partners and 10K+ end users.",
    image: "https://images.unsplash.com/photo-1516321318423-f06a0b1a51d0?w=500&h=300&fit=crop",
    category: "Web App",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Vercel"],
    link: "#",
  },
  {
    id: "project-6",
    title: "Cybersecurity Audit Platform",
    description: "Comprehensive security audit tool helping organizations identify and remediate vulnerabilities with detailed reporting and recommendations.",
    image: "https://images.unsplash.com/photo-1557555187-23d42a30724d?w=500&h=300&fit=crop",
    category: "Security",
    technologies: ["Python", "Flask", "PostgreSQL", "OpenSSL"],
    link: "#",
  },
];
