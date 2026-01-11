import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { soundManager } from "@/utils/soundManager";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    soundManager.playHoverSound(900);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavHover = () => {
    soundManager.playHoverSound(800 + Math.random() * 200);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800/50 shadow-lg shadow-cyan-400/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <img
            src="/logo.png"
            alt="TechLab Logo"
            className="h-10 w-auto group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-400/50 transition-all"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            onMouseEnter={handleNavHover}
            className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
          >
            {t("nav.home")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="/services"
            onMouseEnter={handleNavHover}
            className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
          >
            {t("nav.services")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="/our-projects"
            onMouseEnter={handleNavHover}
            className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
          >
            {t("nav.projects")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="/about"
            onMouseEnter={handleNavHover}
            className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
          >
            {t("nav.about")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="/contact"
            onMouseEnter={handleNavHover}
            className="text-slate-300 hover:text-cyan-400 transition-colors relative group"
          >
            {t("nav.contact")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
          </Link>
          <button
            onMouseEnter={handleNavHover}
            onClick={() => soundManager.playClickSound()}
            className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {t("nav.getStarted")}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur border-t border-slate-800 animate-slideInUp">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              onMouseEnter={handleNavHover}
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors relative group"
              onClick={() => {
                soundManager.playTransitionSound(600, 900);
                setMobileMenuOpen(false);
              }}
            >
              {t("nav.home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/services"
              onMouseEnter={handleNavHover}
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors relative group"
              onClick={() => {
                soundManager.playTransitionSound(600, 900);
                setMobileMenuOpen(false);
              }}
            >
              {t("nav.services")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/our-projects"
              onMouseEnter={handleNavHover}
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors relative group"
              onClick={() => {
                soundManager.playTransitionSound(600, 900);
                setMobileMenuOpen(false);
              }}
            >
              {t("nav.projects")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/about"
              onMouseEnter={handleNavHover}
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors relative group"
              onClick={() => {
                soundManager.playTransitionSound(600, 900);
                setMobileMenuOpen(false);
              }}
            >
              {t("nav.about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/contact"
              onMouseEnter={handleNavHover}
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors relative group"
              onClick={() => {
                soundManager.playTransitionSound(600, 900);
                setMobileMenuOpen(false);
              }}
            >
              {t("nav.contact")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
            <button
              onMouseEnter={handleNavHover}
              onClick={() => {
                soundManager.playClickSound();
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {t("nav.getStarted")}
            </button>
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
