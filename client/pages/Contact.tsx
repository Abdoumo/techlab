import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceNeeded: "",
    projectDescription: "",
    budgetRange: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        serviceNeeded: "",
        projectDescription: "",
        budgetRange: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClassName =
    "w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors";

  return (
    <Layout>
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {t("pages:contact.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mb-4">
              {t("pages:contact.subtitle")}
            </p>
            <p className="text-lg text-primary font-semibold">
              TechLab is ready to help you.
            </p>
          </section>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t("pages:contact.location")}</h3>
                  <p className="text-muted-foreground">
                    TechLab – Technology & Innovation Lab
                  </p>
                  <p className="text-muted-foreground">
                    Algeria (On-site & Remote Services Available)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t("pages:contact.callWhatsapp")}</h3>
                  <a
                    href="tel:+213699326406"
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    +213 699 326 406
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t("pages:contact.email")}</h3>
                  <a
                    href="mailto:contact@techlab.dz"
                    className="text-primary hover:text-primary/80 block"
                  >
                    contact@techlab.dz
                  </a>
                  <a
                    href="mailto:support@techlab.dz"
                    className="text-primary hover:text-primary/80 block"
                  >
                    support@techlab.dz
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border md:col-span-3">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{t("pages:contact.businessHours")}</h3>
                  <p className="text-muted-foreground">
                    Saturday – Thursday: 9:00 – 18:00
                  </p>
                  <p className="text-muted-foreground">
                    Friday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <section className="mb-16">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Let's Talk About Your Project
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our technical team will contact you within 24 hours.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-400">
                  ✅ Thank you! We've received your message. Our team will contact you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="contact@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={inputClassName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+213 555 123456"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={inputClassName}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    required
                    className={inputClassName}
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ai-integration">AI / LLM Integration</option>
                    <option value="cloud-infrastructure">Cloud Infrastructure</option>
                    <option value="iot-devices">IoT Devices</option>
                    <option value="data-services">Data Services</option>
                    <option value="3d-printing">3D Printing & Prototyping</option>
                    <option value="consulting">Consulting & Training</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="projectDescription"
                    placeholder="Tell us about your project, goals, and requirements..."
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className={`${inputClassName} resize-none`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget Range <span className="text-muted-foreground text-xs">(Optional)</span>
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className={inputClassName}
                  >
                    <option value="">Select a budget range</option>
                    <option value="under-50k">Under 50,000 DZD</option>
                    <option value="50k-100k">50,000 – 100,000 DZD</option>
                    <option value="100k-300k">100,000 – 300,000 DZD</option>
                    <option value="300k-1m">300,000 – 1,000,000 DZD</option>
                    <option value="1m-plus">1,000,000+ DZD</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-gradient-to-r from-primary to-blue-500 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/30 rounded-lg p-8 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need a powerful tech partner?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Let's build, secure, and scale your business together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+213699326406"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="mailto:contact@techlab.dz"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-secondary/50 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Get a Free Consultation
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
