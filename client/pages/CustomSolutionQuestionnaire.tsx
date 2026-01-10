import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ConfirmationPage from "@/components/ConfirmationPage";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface CustomSolutionFormData {
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  problemStatement: string;
  desiredSolution: string;
  currentSituation: string;
  requiredFeatures: string[];
  integrations: string;
  scalability: string;
  budget: string;
  timeline: string;
  teamSize: string;
  supportLevel: string;
  additionalNotes: string;
}

export default function CustomSolutionQuestionnaire() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<CustomSolutionFormData>({
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    problemStatement: "",
    desiredSolution: "",
    currentSituation: "",
    requiredFeatures: [],
    integrations: "",
    scalability: "",
    budget: "",
    timeline: "",
    teamSize: "",
    supportLevel: "",
    additionalNotes: "",
  });

  const handleInputChange = (
    field: keyof CustomSolutionFormData,
    value: any
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: keyof CustomSolutionFormData, value: string) => {
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
      !formData.businessType ||
      !formData.problemStatement ||
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
          serviceName="Custom Software Solution"
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
              <h1 className="text-3xl font-bold text-white">Custom Software Solution</h1>
              <span className="text-cyan-400 font-semibold">Step {step} of 4</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Company Information */}
          {step === 1 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Company Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    placeholder="Your company name"
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
                      placeholder="contact@company.com"
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
                    Business Type/Industry *
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleInputChange("businessType", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance & Banking</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="logistics">Logistics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Problem & Solution */}
          {step === 2 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Problem & Solution
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    What problem are you trying to solve? *
                  </label>
                  <textarea
                    value={formData.problemStatement}
                    onChange={(e) => handleInputChange("problemStatement", e.target.value)}
                    placeholder="Describe the problem in detail..."
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Describe your ideal solution
                  </label>
                  <textarea
                    value={formData.desiredSolution}
                    onChange={(e) => handleInputChange("desiredSolution", e.target.value)}
                    placeholder="What would your perfect solution look like?"
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Current Situation
                  </label>
                  <textarea
                    value={formData.currentSituation}
                    onChange={(e) => handleInputChange("currentSituation", e.target.value)}
                    placeholder="How are you currently handling this? What systems do you use?"
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Technical Requirements */}
          {step === 3 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Technical Requirements
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-3">
                    Key Features Needed
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "user-management", label: "User Management & Roles" },
                      { value: "reporting", label: "Reporting & Analytics" },
                      { value: "notifications", label: "Notifications & Alerts" },
                      { value: "mobile", label: "Mobile App" },
                      { value: "offline", label: "Offline Functionality" },
                      { value: "api", label: "REST/GraphQL API" },
                    ].map((feature) => (
                      <label
                        key={feature.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.requiredFeatures.includes(feature.value)}
                          onChange={() =>
                            handleCheckboxChange("requiredFeatures", feature.value)
                          }
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-cyan-400"
                        />
                        <span className="text-slate-300">{feature.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Third-party Integrations Needed
                  </label>
                  <textarea
                    value={formData.integrations}
                    onChange={(e) => handleInputChange("integrations", e.target.value)}
                    placeholder="e.g., Stripe, Salesforce, SAP, etc."
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Scalability Needs
                  </label>
                  <select
                    value={formData.scalability}
                    onChange={(e) => handleInputChange("scalability", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select scalability level</option>
                    <option value="small">Small (&lt; 100 users)</option>
                    <option value="medium">Medium (100-1K users)</option>
                    <option value="large">Large (1K-100K users)</option>
                    <option value="enterprise">Enterprise (100K+ users)</option>
                  </select>
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
                      <option value="150-300">150,000 – 300,000 DZD</option>
                      <option value="300-600">300,000 – 600,000 DZD</option>
                      <option value="600-1000">600,000 – 1,000,000 DZD</option>
                      <option value="1000+">1,000,000+ DZD</option>
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
                      <option value="3-6">3-6 Months</option>
                      <option value="6-9">6-9 Months</option>
                      <option value="9-12">9-12 Months</option>
                      <option value="12+">12+ Months</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Your Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => handleInputChange("teamSize", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select team size</option>
                      <option value="1-5">1-5 People</option>
                      <option value="5-20">5-20 People</option>
                      <option value="20-50">20-50 People</option>
                      <option value="50+">50+ People</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">
                      Support Level Needed
                    </label>
                    <select
                      value={formData.supportLevel}
                      onChange={(e) => handleInputChange("supportLevel", e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select support level</option>
                      <option value="basic">Basic (Email only)</option>
                      <option value="standard">Standard (8/5 support)</option>
                      <option value="premium">Premium (24/7 support)</option>
                      <option value="dedicated">Dedicated Team</option>
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
