import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="flex-1 flex items-center justify-center bg-slate-950 py-32 px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4">
            404
          </h1>
          <p className="text-xl text-slate-400 mb-2">{t("pages:notFound.title")}</p>
          <p className="text-slate-500 mb-8">
            {t("pages:notFound.subtitle")}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow"
          >
            {t("pages:notFound.backHome")} <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}
