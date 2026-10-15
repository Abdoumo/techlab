import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { soundManager } from "@/utils/soundManager";
import { useTranslation } from "react-i18next";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { i18n } = useTranslation();
  const isEn = i18n.language === "en";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-xl bg-slate-900/60 border border-slate-800/80 ${className}`} />
    );
  }

  const isDark = theme !== "light";

  const toggleTheme = () => {
    soundManager.playClickSound();
    const nextTheme = isDark ? "light" : "dark";
    setTheme(nextTheme);

    // Update meta theme-color tag dynamically for mobile browser address bars
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", nextTheme === "dark" ? "#0f172a" : "#f8fafc");
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 focus:outline-none cursor-pointer group ${
        isDark
          ? "bg-slate-900/80 text-amber-300 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-800/80 hover:shadow-lg hover:shadow-amber-500/10"
          : "bg-white text-indigo-600 border border-slate-200 hover:border-indigo-400/50 hover:bg-slate-50 hover:shadow-lg hover:shadow-indigo-500/10 shadow-sm"
      } ${className}`}
      aria-label={
        isDark
          ? isEn
            ? "Switch to Light Mode"
            : "Passer en mode clair"
          : isEn
          ? "Switch to Dark Mode"
          : "Passer en mode sombre"
      }
      title={
        isDark
          ? isEn
            ? "Switch to Light Mode"
            : "Passer en mode clair"
          : isEn
          ? "Switch to Dark Mode"
          : "Passer en mode sombre"
      }
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-300 group-hover:rotate-45 group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-600 group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>
    </button>
  );
}
