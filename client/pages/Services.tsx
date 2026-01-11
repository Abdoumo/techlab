import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { servicesData, getAllCategories } from "@/data/services";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  const categories = getAllCategories();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              {t("pages:services.title")}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Explore our complete range of technology services designed to help your business
              grow, innovate, and succeed in the digital world.
            </p>
          </div>

          {/* Services by Category */}
          {categories.map((category) => {
            const categoryServices = servicesData.filter(
              (service) => service.categoryId === category.id
            );

            return (
              <div key={category.id} className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-8">{category.name}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <Link
                      key={service.id}
                      to={
                        service.isSpecial
                          ? `/${service.specialQuestionnaire}-questionnaire`
                          : `/service/${service.id}`
                      }
                      className="group bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
                    >
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        {service.isSpecial && (
                          <span className="inline-block mt-2 px-3 py-1 bg-cyan-400/20 border border-cyan-400/30 text-cyan-400 text-xs font-semibold rounded-full">
                            Multi-Step Setup
                          </span>
                        )}
                      </div>

                      <p className="text-slate-400 text-sm mb-6">{service.description}</p>

                      <div className="bg-slate-700/50 rounded p-4 mb-6">
                        <p className="text-xs text-slate-400 mb-1">Starting From</p>
                        <p className="text-lg font-bold text-cyan-400">{service.priceLabel}</p>
                      </div>

                      <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                        <span className="text-sm font-semibold">Learn More</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t("pages:cta.title")}</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Pick any service above and fill out the inquiry form. Our team will review your
              requirements and provide a detailed proposal within 24-48 hours.
            </p>
            <Link
              to="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow"
            >
              {t("buttons.back")}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
