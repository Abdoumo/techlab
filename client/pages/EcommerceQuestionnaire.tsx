import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import ConfirmationPage from "@/components/ConfirmationPage";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface EcommerceFormData {
  businessName: string;
  email: string;
  phone: string;
  websiteType: string;
  productType: string;
  productCount: string;
  budget: string;
  timeline: string;
  features: string[];
  paymentMethods: string[];
  shippingOptions: string[];
  targetMarket: string;
  competitorAnalysis: string;
  additionalNotes: string;
}

export default function EcommerceQuestionnaire() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<EcommerceFormData>({
    businessName: "",
    email: "",
    phone: "",
    websiteType: "",
    productType: "",
    productCount: "",
    budget: "",
    timeline: "",
    features: [],
    paymentMethods: [],
    shippingOptions: [],
    targetMarket: "",
    competitorAnalysis: "",
    additionalNotes: "",
  });

  const handleInputChange = (
    field: keyof EcommerceFormData,
    value: any
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: keyof EcommerceFormData, value: string) => {
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
      !formData.websiteType ||
      !formData.productType ||
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
          serviceName="E-commerce Website"
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
              <h1 className="text-3xl font-bold text-white">E-commerce Website Setup</h1>
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
                      Email Address *
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
                      Phone Number *
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
                    What type of e-commerce platform? *
                  </label>
                  <select
                    value={formData.websiteType}
                    onChange={(e) => handleInputChange("websiteType", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select platform type</option>
                    <option value="custom">Custom Built (Recommended)</option>
                    <option value="shopify">Shopify</option>
                    <option value="woocommerce">WooCommerce</option>
                    <option value="magento">Magento</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Product Information */}
          {step === 2 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Product Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    What are you selling? *
                  </label>
                  <select
                    value={formData.productType}
                    onChange={(e) => handleInputChange("productType", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select product type</option>
                    <option value="physical">Physical Products</option>
                    <option value="digital">Digital Products</option>
                    <option value="services">Services</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="mixed">Mixed (Multiple types)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    How many products will you have? *
                  </label>
                  <select
                    value={formData.productCount}
                    onChange={(e) => handleInputChange("productCount", e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10 Products</option>
                    <option value="11-50">11-50 Products</option>
                    <option value="51-200">51-200 Products</option>
                    <option value="200+">200+ Products</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-3">
                    Key Features Needed *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "cart", label: "Shopping Cart" },
                      { value: "wishlists", label: "Wishlists" },
                      { value: "reviews", label: "Customer Reviews" },
                      { value: "recommendations", label: "Product Recommendations" },
                      { value: "search", label: "Advanced Search/Filters" },
                      { value: "inventory", label: "Inventory Management" },
                    ].map((feature) => (
                      <label
                        key={feature.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature.value)}
                          onChange={() => handleCheckboxChange("features", feature.value)}
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-cyan-400"
                        />
                        <span className="text-slate-300">{feature.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Business Requirements */}
          {step === 3 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Business Requirements
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-3">
                    Payment Methods *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "credit-card", label: "Credit Card" },
                      { value: "paypal", label: "PayPal" },
                      { value: "stripe", label: "Stripe" },
                      { value: "bank-transfer", label: "Bank Transfer" },
                      { value: "crypto", label: "Cryptocurrency" },
                    ].map((method) => (
                      <label
                        key={method.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.paymentMethods.includes(method.value)}
                          onChange={() =>
                            handleCheckboxChange("paymentMethods", method.value)
                          }
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-cyan-400"
                        />
                        <span className="text-slate-300">{method.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-3">
                    Shipping Options *
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: "standard", label: "Standard Shipping" },
                      { value: "express", label: "Express Shipping" },
                      { value: "international", label: "International Shipping" },
                      { value: "local-pickup", label: "Local Pickup" },
                      { value: "digital-only", label: "Digital Only (No Shipping)" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.shippingOptions.includes(option.value)}
                          onChange={() =>
                            handleCheckboxChange("shippingOptions", option.value)
                          }
                          className="w-4 h-4 rounded border-slate-700 bg-slate-800 text-cyan-400"
                        />
                        <span className="text-slate-300">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

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
                    <option value="80-150">80,000 – 150,000 DZD</option>
                    <option value="150-250">150,000 – 250,000 DZD</option>
                    <option value="250-300">250,000 – 300,000 DZD</option>
                    <option value="300+">300,000+ DZD</option>
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
                    <option value="asap">ASAP (2-4 weeks)</option>
                    <option value="normal">Normal (4-8 weeks)</option>
                    <option value="relaxed">Relaxed (8+ weeks)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Additional Information */}
          {step === 4 && (
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                <CheckCircle className="inline-block w-6 h-6 mr-3 text-cyan-400" />
                Additional Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Target Market
                  </label>
                  <textarea
                    value={formData.targetMarket}
                    onChange={(e) => handleInputChange("targetMarket", e.target.value)}
                    placeholder="Who are your target customers? Where are they located?"
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-2">
                    Competitor Analysis
                  </label>
                  <textarea
                    value={formData.competitorAnalysis}
                    onChange={(e) =>
                      handleInputChange("competitorAnalysis", e.target.value)
                    }
                    placeholder="Any competitors we should know about? What makes your store different?"
                    rows={3}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                  />
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
                Complete Setup
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
