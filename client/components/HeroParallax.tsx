import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { soundManager } from "@/utils/soundManager";
import { useTranslation } from "react-i18next";

export default function HeroParallax() {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [offsetPosition, setOffsetPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setMousePosition({ x, y });

      // Calculate parallax offset - smaller for more subtle effect
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = (x - centerX) * 0.03;
      const offsetY = (y - centerY) * 0.03;

      setOffsetPosition({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleButtonHover = () => {
    soundManager.playTransitionSound(700, 1000);
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-32">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"
        style={{
          transform: `translate(${offsetPosition.x}px, ${offsetPosition.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Floating orbs with parallax */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${offsetPosition.x * 0.5}px, ${offsetPosition.y * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
        style={{
          transform: `translate(${-offsetPosition.x * 0.3}px, ${-offsetPosition.y * 0.3}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(34, 197, 238, 0.1) 25%, rgba(34, 197, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 238, 0.1) 75%, rgba(34, 197, 238, 0.1) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(34, 197, 238, 0.1) 25%, rgba(34, 197, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 238, 0.1) 75%, rgba(34, 197, 238, 0.1) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          style={{
            transform: `translateY(${offsetPosition.y * 0.05}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Enterprise Tech
            <span className="relative inline-block ml-3">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
              {/* Animated underline */}
              <div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{
                  width: "100%",
                  animation: "slideInRight 0.8s ease-out 0.2s forwards",
                  opacity: 0,
                }}
              />
            </span>
          </h1>

          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 opacity-animation"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.4s forwards",
              opacity: 0,
            }}
          >
            From web development and cloud infrastructure to AI integration and
            cybersecurity, cyberlymph delivers cutting-edge solutions for modern
            businesses.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              animation: "fadeInUp 0.8s ease-out 0.6s forwards",
              opacity: 0,
            }}
          >
            <button
              onMouseEnter={handleButtonHover}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
            <Link
              to="/services"
              onMouseEnter={handleButtonHover}
              className="px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group"
            >
              {t("pages:hero.exploreServices")}{" "}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Stats with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800">
          {[
            { value: "50+", label: t("pages:hero.stats.services"), delay: 0.8 },
            { value: "24/7", label: t("pages:hero.stats.support"), delay: 1 },
            { value: "500+", label: t("pages:hero.stats.clients"), delay: 1.2 },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer"
              onMouseEnter={() => soundManager.playHoverSound(1000 + index * 200)}
              style={{
                animation: `scaleIn 0.6s cubic-bezier(0.23, 1, 0.320, 1) ${stat.delay}s forwards`,
                opacity: 0,
              }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 100%;
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
