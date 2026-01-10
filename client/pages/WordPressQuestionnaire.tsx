import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ConfirmationPage from "@/components/ConfirmationPage";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface WordPressFormData {
  businessName: string;
  email: string;
  phone: string;
  siteType: string;
  businessCategory: string;
  currentSite: string;
  designPreference: string;
  pages: string[];
  plugins: string[];
  seoRequirements: string;
  budget: string;
  timeline: string;
  maintenanceNeeded: string;
  trainingNeeded: string;
  additionalNotes: string;
}

export default function WordPressQuestionnaire() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<WordPressFormData>({
    businessName: "",
    email: "",
    phone: "",
    siteType: "",
    businessCategory: "",
    currentSite: "",
    designPreference: "",
    pages: [],
    plugins: [],
    seoRequirements: "",
    budget: "",
    timeline: "",
    maintenanceNeeded: "",
    trainingNeeded: "",
    additionalNotes: "",
  });

  const handleInputChange = (
    field: keyof WordPressFormData,
    value: any
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: keyof WordPressFormData, value: string) => {
    const current = Array.isArray(formData[field]) ? formData[field] : [];
    const updated = current.includes(value)
      ? current.filter((v: string) => v !== value)
      : [...current, value];
    setFormData((prev) => ({ ...prev, [field]: updated }));
  };

  const handleSubmit = () => {
    if (
      !formData.businessName ||
      !formData.email ||
      !formData.phone ||
      !formData.siteType ||
      !formData.businessCategory ||
      !formData.budget ||
      !formData.timeline
    ) {
      alert("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  if (submitted) {
    return (
      <Layout>
        <ConfirmationPage
          serviceName="WordPress Website Templates"
          formData={formData}
          email={formData.email}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-white">WordPress Website Setup</h1>
              <span className="text-cyan-400 font-semibold">Step {step} of 4</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Business Information */}
          {step === 1 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Business Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    placeholder="Your business name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      placeholder="contact@business.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Phone *
                    </label>
                    <input
                      type="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                      placeholder="+213 555 123456"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Business Category *
                  </label>
                  <select
                    value={formData.businessCategory}
                    onChange={(e) => handleInputChange("businessCategory", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select category</option>
                    <option value="services">Services/Consulting</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="portfolio">Portfolio/Agency</option>
                    <option value="blog">Blog/Magazine</option>
                    <option value="nonprofit">Non-profit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Do you currently have a website?
                  </label>
                  <select
                    value={formData.currentSite}
                    onChange={(e) => handleInputChange("currentSite", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select option</option>
                    <option value="no">No, this is new</option>
                    <option value="yes-wordpress">Yes, it's WordPress</option>
                    <option value="yes-other">Yes, it's another platform</option>
                    <option value="needs-migration">Yes, need to migrate</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Design & Structure */}
          {step === 2 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Design & Structure
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    What type of website do you need? *
                  </label>
                  <select
                    value={formData.siteType}
                    onChange={(e) => handleInputChange("siteType", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select site type</option>
                    <option value="business">Business/Corporate</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="blog">Blog/Magazine</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="community">Community/Membership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Design Preference
                  </label>
                  <select
                    value={formData.designPreference}
                    onChange={(e) => handleInputChange("designPreference", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select preference</option>
                    <option value="minimal">Minimal & Clean</option>
                    <option value="modern">Modern & Bold</option>
                    <option value="colorful">Colorful & Creative</option>
                    <option value="professional">Professional & Corporate</option>
                    <option value="custom">Custom/Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-3">
                    Pages You Need
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "home", label: "Home/Landing" },
                      { value: "about", label: "About Us" },
                      { value: "services", label: "Services/Products" },
                      { value: "blog", label: "Blog" },
                      { value: "contact", label: "Contact/Forms" },
                      { value: "gallery", label: "Gallery/Portfolio" },
                      { value: "faq", label: "FAQ" },
                      { value: "testimonials", label: "Testimonials/Reviews" },
                    ].map((page) => (
                      <label
                        key={page.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.pages.includes(page.value)}
                          onChange={() => handleCheckboxChange("pages", page.value)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-cyan-400"
                        />
                        <span className="text-slate-300">{page.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Features & Plugins */}
          {step === 3 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Features & Plugins
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-3">
                    WordPress Plugins & Features
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "woocommerce", label: "WooCommerce (E-commerce)" },
                      { value: "booking", label: "Booking/Appointment System" },
                      { value: "seo", label: "SEO Optimization" },
                      { value: "backup", label: "Backup System" },
                      { value: "forms", label: "Contact/Lead Forms" },
                      { value: "multilingual", label: "Multilingual Support" },
                      { value: "analytics", label: "Analytics Integration" },
                      { value: "newsletter", label: "Newsletter/Email" },
                    ].map((plugin) => (
                      <label
                        key={plugin.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.plugins.includes(plugin.value)}
                          onChange={() => handleCheckboxChange("plugins", plugin.value)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-cyan-400"
                        />
                        <span className="text-slate-300">{plugin.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    SEO & Performance Requirements
                  </label>
                  <textarea
                    value={formData.seoRequirements}
                    onChange={(e) => handleInputChange("seoRequirements", e.target.value)}
                    placeholder="Any specific SEO or performance needs?"
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Project Details */}
          {step === 4 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Project Details
              </h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Budget Range *
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange("budget", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select budget</option>
                      <option value="20-50">20,000 – 50,000 DZD</option>
                      <option value="50-100">50,000 – 100,000 DZD</option>
                      <option value="100-150">100,000 – 150,000 DZD</option>
                      <option value="150+">150,000+ DZD</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Timeline *
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange("timeline", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2">1-2 Weeks</option>
                      <option value="2-4">2-4 Weeks</option>
                      <option value="4-8">4-8 Weeks</option>
                      <option value="8+">8+ Weeks</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Ongoing Maintenance
                    </label>
                    <select
                      value={formData.maintenanceNeeded}
                      onChange={(e) => handleInputChange("maintenanceNeeded", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select option</option>
                      <option value="none">No, just build it</option>
                      <option value="monthly">Monthly Maintenance</option>
                      <option value="quarterly">Quarterly Updates</option>
                      <option value="annual">Annual Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Training Needed
                    </label>
                    <select
                      value={formData.trainingNeeded}
                      onChange={(e) => handleInputChange("trainingNeeded", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select option</option>
                      <option value="none">No training needed</option>
                      <option value="basic">Basic WordPress Training</option>
                      <option value="advanced">Advanced Management</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                    placeholder="Any other requirements or special requests?"
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between">
            <button
              onClick={handlePrevious}
              disabled={step === 1}
              className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 hover:text-white font-semibold rounded-lg transition-colors border border-slate-700"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            {step < 4 ? (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 ml-auto px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="ml-auto px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
              >
                Submit Request
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
