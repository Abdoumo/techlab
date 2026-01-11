import Layout from "@/components/Layout";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t("pages:about.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              TechLab is a modern technology laboratory specialized in building, securing, automating, and scaling digital systems for businesses, startups, and institutions.
            </p>
          </section>

          {/* Mission */}
          <section className="mb-20 bg-card rounded-lg p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("pages:about.mission")}</h2>
            <p className="text-lg text-muted-foreground mb-4">
              We bring together software development, cybersecurity, AI, DevOps, cloud infrastructure, IoT, and 3D prototyping under one roof to deliver complete end-to-end tech solutions.
            </p>
            <p className="text-lg text-muted-foreground">
              Transform ideas into reliable, secure, and scalable digital products. From simple business websites to full enterprise infrastructures, we design systems that are fast, robust, and future-ready.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">What Makes TechLab Different</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "All-in-One Tech Lab",
                  description: "Web, Mobile, AI, Cybersecurity, Cloud, IoT, Automation & 3D Prototyping"
                },
                {
                  title: "Security First",
                  description: "Ethical hacking, red team operations, firewall & SIEM monitoring"
                },
                {
                  title: "Open-Source Power",
                  description: "We deploy reliable open-source infrastructure to reduce cost and increase freedom"
                },
                {
                  title: "Scalable by Design",
                  description: "Everything we build is ready to grow with your business"
                },
                {
                  title: "Training & Consulting",
                  description: "We don't just build — we teach, guide, and modernize teams"
                },
                {
                  title: "Long-Term Partnerships",
                  description: "We don't just sell services — we build long-term technological partnerships"
                }
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors">
                  <h3 className="text-xl font-semibold text-primary mb-3">✅ {item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who We Serve */}
          <section className="mb-20 bg-card rounded-lg p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Serve</h2>
            <p className="text-lg text-muted-foreground mb-6">We work with:</p>
            <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
              {[
                "Startups & Entrepreneurs",
                "SMEs & Large Enterprises",
                "Schools & Training Centers",
                "Industrial & Manufacturing Businesses",
                "E-commerce & Digital Brands"
              ].map((client, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>{client}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Vision */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("pages:about.vision")}</h2>
            <p className="text-lg text-muted-foreground">
              To become a leading technology innovation hub in Algeria and North Africa, providing world-class digital solutions using open technologies, artificial intelligence, and cybersecurity excellence.
            </p>
          </section>

          {/* Core Values */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">{t("pages:about.values")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "🔒", title: "Security & Trust", desc: "Building systems you can rely on" },
                { icon: "⚡", title: "Performance & Reliability", desc: "Fast and robust solutions" },
                { icon: "🧠", title: "Innovation & Learning", desc: "Constantly evolving with technology" },
                { icon: "🤝", title: "Transparency & Partnership", desc: "Open communication and collaboration" }
              ].map((value, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
