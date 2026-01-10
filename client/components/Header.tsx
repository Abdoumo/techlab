import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <img
            src="/logo.png"
            alt="TechLab Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/our-projects"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-slate-300 hover:text-cyan-400 transition-colors"
          >
            Contact
          </Link>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow">
            Get Started
          </button>
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
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/our-projects"
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-slate-300 hover:text-cyan-400 py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-shadow">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
