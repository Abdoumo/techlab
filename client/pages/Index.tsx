import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { testimonialsData } from "@/data/testimonials";
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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Enterprise Tech
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              From web development and cloud infrastructure to AI integration and
              cybersecurity, TechLab delivers cutting-edge solutions for modern
              businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow">
                Get Started
              </button>
              <Link
                to="/services"
                className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                Explore Services <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Feature Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <p className="text-slate-400">Services & Solutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-slate-400">Expert Support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <p className="text-slate-400">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-slate-900 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions across every aspect of your tech stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.category}
                  className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg group-hover:from-cyan-400/30 group-hover:to-blue-500/30 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.category}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.items.map((item) => (
                      <li key={item} className="text-xs text-slate-500">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="bg-slate-950 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Infrastructure & DevOps
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure solutions and automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructureServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300"
                >
                  <div className="mb-6 inline-block p-3 bg-gradient-to-br from-blue-400/20 to-cyan-500/20 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="text-slate-400 flex items-start gap-3">
                        <span className="text-blue-400 mt-1">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <TestimonialsCarousel testimonials={testimonialsData} />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how TechLab can help you achieve your technology goals.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow text-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </Layout>
  );
}
