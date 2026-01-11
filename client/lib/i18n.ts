import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enCommon from "../locales/en/common.json";
import enForms from "../locales/en/forms.json";
import enPages from "../locales/en/pages.json";
import enServices from "../locales/en/services.json";
import frCommon from "../locales/fr/common.json";
import frForms from "../locales/fr/forms.json";
import frPages from "../locales/fr/pages.json";
import frServices from "../locales/fr/services.json";
import arCommon from "../locales/ar/common.json";
import arForms from "../locales/ar/forms.json";
import arPages from "../locales/ar/pages.json";
import arServices from "../locales/ar/services.json";

const resources = {
  en: {
    common: enCommon,
    forms: enForms,
    pages: enPages,
    services: enServices,
  },
  fr: {
    common: frCommon,
    forms: frForms,
    pages: frPages,
    services: frServices,
  },
  ar: {
    common: arCommon,
    forms: arForms,
    pages: arPages,
    services: arServices,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "ar"],
    defaultNS: "common",
    ns: ["common", "forms", "pages", "services"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
