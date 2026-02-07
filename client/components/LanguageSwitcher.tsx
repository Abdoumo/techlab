import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const handleLanguageChange = (langCode: string) => {
    console.log("Changing language to:", langCode);
    localStorage.setItem("i18nextLng", langCode);
    i18n.changeLanguage(langCode).then(() => {
      console.log("Language changed successfully to:", i18n.language);
      setIsOpen(false);
    }).catch((err) => {
      console.error("Error changing language:", err);
    });
  };

  const currentLang = languages.find((l) => l.code === i18n.language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-slate-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-800"
        title={`Current language: ${currentLang?.name}`}
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{currentLang?.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-slate-900 border border-slate-700 rounded-lg shadow-lg z-50 min-w-max">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`block w-full text-left px-4 py-2 hover:bg-slate-800 transition-colors ${
                i18n.language === lang.code
                  ? "bg-slate-700 text-cyan-400"
                  : "text-slate-300"
              } ${lang.code === "ar" ? "text-right" : ""}`}
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
