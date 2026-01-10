import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/Layout";
import ServiceForm from "@/components/ServiceForm";
import ConfirmationPage from "@/components/ConfirmationPage";
import { getServiceById } from "@/data/services";
import { ChevronLeft, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(false);

  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-screen bg-slate-950 py-20 px-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <p className="text-slate-400 mb-8">
              The service you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow"
            >
              Back to Services
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleFormSubmit = async (formData: Record<string, any>) => {
    setIsLoading(true);
    try {
      // Send the inquiry to the API
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          serviceName: service.name,
          email: formData.email,
          data: formData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Failed to submit inquiry. Please try again."
        );
      }

      // Show success toast
      toast.success("Inquiry submitted! We'll email you shortly.");

      // Store data for confirmation page
      setSubmittedData(formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to submit inquiry";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <ConfirmationPage
          serviceName={service.name}
          formData={submittedData}
          email={submittedData.email}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => navigate("/services")}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Services
          </button>

          {/* Service Header */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div>
                <p className="text-cyan-400 font-semibold text-sm mb-2 uppercase">
                  {service.category}
                </p>
                <h1 className="text-5xl font-bold text-white mb-4">{service.name}</h1>
                <p className="text-xl text-slate-300 mb-6">{service.description}</p>

                {/* Pricing Info */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 w-fit">
                  <p className="text-slate-400 text-sm mb-2">Starting Price</p>
                  <p className="text-3xl font-bold text-cyan-400">
                    {service.priceLabel}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Professional Results</h3>
                <p className="text-slate-400 text-sm">
                  Industry-standard solutions tailored to your needs
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-slate-400 text-sm">
                  Dedicated team to guide you through the process
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <TrendingUp className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">Flexible Timeline</h3>
                <p className="text-slate-400 text-sm">
                  Customized delivery schedules to fit your timeline
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Tell Us About Your Project</h2>
            <p className="text-slate-400 mb-8">
              Fill out the form below and we'll get back to you within 24-48 hours with a
              detailed proposal.
            </p>

            <ServiceForm
              fields={service.formFields}
              onSubmit={handleFormSubmit}
              isLoading={isLoading}
            />
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">How long does this service take?</h3>
                <p className="text-slate-400">
                  The timeline depends on project complexity and scope. We'll provide a detailed
                  timeline after reviewing your requirements.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">What's the price range?</h3>
                <p className="text-slate-400">
                  Prices range from {service.priceLabel}. The exact cost depends on your specific
                  requirements and customizations.
                </p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Do you provide support after delivery?</h3>
                <p className="text-slate-400">
                  Yes! We offer various support packages including training, maintenance, and
                  ongoing technical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
