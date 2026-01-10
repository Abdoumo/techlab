import { Link } from "react-router-dom";
import { CheckCircle, Mail, Home } from "lucide-react";

interface ConfirmationPageProps {
  serviceName: string;
  formData: Record<string, any>;
  email?: string;
}

export default function ConfirmationPage({
  serviceName,
  formData,
  email,
}: ConfirmationPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse" />
            <CheckCircle className="w-24 h-24 text-cyan-400 relative" />
          </div>
        </div>

        {/* Main Message */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Request Received!
          </h1>
          <p className="text-xl text-slate-300 mb-2">
            Thank you for choosing <span className="text-cyan-400 font-semibold">{serviceName}</span>
          </p>
          <p className="text-slate-400">
            We've received your inquiry and will review it shortly.
          </p>
        </div>

        {/* Email Notification */}
        {email && (
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3 mb-3">
              <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white mb-1">Confirmation Email</p>
                <p className="text-slate-400 text-sm">
                  A confirmation email has been sent to{" "}
                  <span className="text-cyan-400 font-medium">{email}</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Submitted Information */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
          <h2 className="text-lg font-semibold text-white mb-6">
            Submitted Information
          </h2>

          <div className="space-y-4">
            {Object.entries(formData).map(([key, value]) => {
              if (!value || key.startsWith("_")) return null;

              const displayKey = key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());

              const displayValue =
                Array.isArray(value) ? value.join(", ") : String(value);

              return (
                <div key={key} className="pb-4 border-b border-slate-700 last:border-0">
                  <p className="text-sm font-medium text-slate-400 mb-1">
                    {displayKey}
                  </p>
                  <p className="text-slate-100">{displayValue}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-8 mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="bg-cyan-400 text-slate-950 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                1
              </span>
              <span className="text-slate-300">
                Our team will review your inquiry within 24-48 hours
              </span>
            </li>
            <li className="flex gap-3">
              <span className="bg-cyan-400 text-slate-950 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                2
              </span>
              <span className="text-slate-300">
                We'll send you a detailed proposal and timeline
              </span>
            </li>
            <li className="flex gap-3">
              <span className="bg-cyan-400 text-slate-950 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                3
              </span>
              <span className="text-slate-300">
                Schedule a consultation call to discuss your project
              </span>
            </li>
            <li className="flex gap-3">
              <span className="bg-cyan-400 text-slate-950 font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">
                4
              </span>
              <span className="text-slate-300">
                Begin development and stay updated on progress
              </span>
            </li>
          </ol>
        </div>

        {/* Contact Info */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
          <p className="text-slate-300 text-center">
            Need to reach us? Contact us at{" "}
            <span className="text-cyan-400 font-semibold">bedoushop@gmail.com</span> or call{" "}
            <span className="text-cyan-400 font-semibold">+213699326406</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-lg transition-colors border border-slate-700"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            to="/services"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow"
          >
            Explore More Services
          </Link>
        </div>
      </div>
    </div>
  );
}
