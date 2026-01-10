import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import HeroParallax from "@/components/HeroParallax";
import Card3D from "@/components/Card3D";
import { testimonialsData } from "@/data/testimonials";
import { soundManager } from "@/utils/soundManager";
import {
  Globe,
  Code2,
  Brain,
  Shield,
  Database,
  Box,
  Wifi,
  BookOpen,
  ChevronRight,
  Zap,
  BarChart3,
  Cog,
} from "lucide-react";

const services = [
  {
    category: "Web & Hosting",
    icon: Globe,
    description: "Build powerful web solutions",
    items: ["Website Creation", "E-commerce", "Web Hosting", "Domain Reg."],
  },
  {
    category: "Software & Dev",
    icon: Code2,
    description: "Custom development solutions",
    items: ["MVP Creation", "App Development", "Custom Software", "APIs"],
  },
  {
    category: "AI / LLM",
    icon: Brain,
    description: "Advanced AI integration",
    items: ["LLM Integration", "ML Training", "Data Analysis", "AI Models"],
  },
  {
    category: "Cybersecurity",
    icon: Shield,
    description: "Protect your business",
    items: ["Security Audit", "Pen Testing", "Red Team", "Firewall Setup"],
  },
  {
    category: "Data Services",
    icon: Database,
    description: "Manage your data",
    items: ["Data Recovery", "Backups", "Disaster Recovery", "Solutions"],
  },
  {
    category: "3D & Hardware",
    icon: Box,
    description: "Hardware innovation",
    items: ["3D Printing", "CAD Modeling", "Prototyping", "Hardware Design"],
  },
  {
    category: "IoT & Embedded",
    icon: Wifi,
    description: "Connected devices",
    items: ["IoT Dev", "Predictive Maint.", "Microcontroller", "Embedded"],
  },
  {
    category: "Consulting",
    icon: BookOpen,
    description: "Expert guidance",
    items: ["Tech Guidance", "Training", "Digital Transform.", "Consulting"],
  },
];

const infrastructureServices = [
  {
    title: "Cloud & Virtualization",
    icon: Cog,
    items: [
      "Proxmox Server Setup",
      "HA Cluster (2-3 Nodes)",
      "Nextcloud Deployment",
      "Docker / Portainer",
    ],
  },
  {
    title: "Infrastructure & Monitoring",
    icon: BarChart3,
    items: [
      "TrueNAS Installation",
      "Backup Automation",
      "Prometheus + Grafana",
      "Email Server Setup",
    ],
  },
  {
    title: "DevOps & Automation",
    icon: Zap,
    items: [
      "GitLab / Gitea Server",
      "Jenkins CI/CD",
      "n8n Automation",
      "Ansible Automation",
    ],
  },
];

export default function Index() {
  useEffect(() => {
    // Enable audio context on first interaction
    const enableAudio = () => {
      soundManager.playSuccessSound();
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("mousemove", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("mousemove", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("mousemove", enableAudio);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <HeroParallax />

      {/* Services Grid with 3D Cards */}
      <section className="bg-slate-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions across every aspect of your tech stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorMap: Array<"cyan" | "blue" | "purple"> = ["cyan", "blue", "purple", "cyan"];
              return (
                <Card3D
                  key={service.category}
                  title={service.category}
                  description={service.description}
                  icon={<Icon className="w-6 h-6 text-cyan-400" />}
                  color={colorMap[index % colorMap.length]}
                  items={service.items}
                  delay={index * 100}
                  onClick={() => soundManager.playTransitionSound(600, 1000)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Section with 3D Cards */}
      <section className="bg-slate-950 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Infrastructure & DevOps
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure solutions and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructureServices.map((service, index) => {
              const Icon = service.icon;
              const colorMap: Array<"cyan" | "blue" | "purple"> = ["blue", "purple", "cyan"];
              return (
                <Card3D
                  key={service.title}
                  title={service.title}
                  description="Enterprise-grade solutions for modern infrastructure"
                  icon={<Icon className="w-8 h-8 text-blue-400" />}
                  color={colorMap[index % colorMap.length]}
                  items={service.items}
                  delay={400 + index * 100}
                  onClick={() => soundManager.playSuccessSound()}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel testimonials={testimonialsData} />

      {/* CTA Section with Interactive Effects */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 sm:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"
            style={{ animation: "float 6s ease-in-out infinite" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
            style={{ animation: "float 8s ease-in-out infinite 1s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6 animate-fadeIn"
            style={{ animation: "slideInUp 0.8s ease-out" }}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto animate-fadeIn"
            style={{ animation: "slideInUp 0.8s ease-out 0.2s forwards", opacity: 0 }}
          >
            Let's discuss how TechLab can help you achieve your technology goals.
          </p>
          <button
            onMouseEnter={() => soundManager.playSuccessSound()}
            onClick={() => soundManager.playClickSound()}
            className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 text-lg transform hover:scale-110 active:scale-95"
            style={{ animation: "slideInUp 0.8s ease-out 0.4s forwards", opacity: 0 }}
          >
            Schedule a Consultation
          </button>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-30px);
            }
          }

          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </Layout>
  );
}
