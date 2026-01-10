import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import { soundManager } from "@/utils/soundManager";

interface MousePosition {
  x: number;
  y: number;
  intensity: number;
}

export default function AdvancedHeroParallax() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    intensity: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [floatingElements, setFloatingElements] = useState<
    Array<{ id: number; x: number; y: number; rotation: number }>
  >([]);

  // Initialize floating elements
  useEffect(() => {
    const elements = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }));
    setFloatingElements(elements);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Normalize coordinates to -1 to 1 range
      const normalizedX = (x / rect.width) * 2 - 1;
      const normalizedY = (y / rect.height) * 2 - 1;

      // Calculate intensity based on distance from center
      const intensity =
        Math.sqrt(normalizedX * normalizedX + normalizedY * normalizedY) / Math.sqrt(2);

      setMousePosition({
        x: normalizedX * 100,
        y: normalizedY * 100,
        intensity: Math.min(intensity, 1),
      });

      // Update floating elements to follow cursor
      setFloatingElements((prev) =>
        prev.map((el) => ({
          ...el,
          x: el.x + normalizedX * 5,
          y: el.y + normalizedY * 5,
          rotation: el.rotation + (normalizedX + normalizedY) * 2,
        }))
      );
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
      soundManager.playTransitionSound(600, 800);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
      setMousePosition({ x: 0, y: 0, intensity: 0 });
      soundManager.playTransitionSound(800, 600);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleButtonHover = () => {
    soundManager.playTransitionSound(700, 1000);
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-32 min-h-screen flex items-center"
    >
      {/* Dynamic gradient background that responds to mouse */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(
            circle at ${50 + mousePosition.x * 0.3}% ${50 + mousePosition.y * 0.3}%,
            rgba(34, 197, 238, ${0.05 + mousePosition.intensity * 0.1}) 0%,
            rgba(59, 130, 246, ${0.03 + mousePosition.intensity * 0.05}) 40%,
            transparent 70%
          )`,
        }}
      />

      {/* Static gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10" />

      {/* Animated grid that shifts with mouse */}
      <div
        className="absolute inset-0 opacity-5 transition-all duration-300"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(34, 197, 238, 0.1) 25%, rgba(34, 197, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 238, 0.1) 75%, rgba(34, 197, 238, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(34, 197, 238, 0.1) 25%, rgba(34, 197, 238, 0.1) 26%, transparent 27%, transparent 74%, rgba(34, 197, 238, 0.1) 75%, rgba(34, 197, 238, 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "50px 50px",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />

      {/* Parallax orbs - Layer 1 (furthest back) */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl transition-all duration-300"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px) scale(${
            1 + mousePosition.intensity * 0.2
          })`,
        }}
      />

      {/* Parallax orbs - Layer 2 */}
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl transition-all duration-300"
        style={{
          transform: `translate(${-mousePosition.x * 0.15}px, ${-mousePosition.y * 0.15}px) scale(${
            1 + mousePosition.intensity * 0.15
          })`,
        }}
      />

      {/* Parallax orbs - Layer 3 (center) */}
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-all duration-300 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * 0.2}px), calc(-50% + ${mousePosition.y * 0.2}px)) scale(${
            1 + mousePosition.intensity * 0.25
          })`,
        }}
      />

      {/* Floating interactive elements */}
      {floatingElements.map((el, index) => (
        <div
          key={el.id}
          className="absolute w-32 h-32 rounded-full border border-cyan-400/10 transition-all duration-100"
          style={{
            left: `${(el.x + 50) % 100}%`,
            top: `${(el.y + 50) % 100}%`,
            opacity: 0.1 + mousePosition.intensity * 0.1,
            transform: `translate(-50%, -50%) rotate(${el.rotation}deg) scale(${
              1 + mousePosition.intensity * 0.3
            })`,
            boxShadow: `0 0 ${20 + mousePosition.intensity * 30}px rgba(34, 197, 238, ${
              0.1 + mousePosition.intensity * 0.2
            })`,
          }}
        />
      ))}

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Animated text that responds to mouse */}
        <div
          className="text-center"
          style={{
            transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.05}deg) rotateY(${
              mousePosition.x * 0.05
            }deg) translateZ(${mousePosition.intensity * 20}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Animated badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-6 cursor-pointer group"
            onMouseEnter={() => soundManager.playHoverSound(900)}
            style={{
              transform: `translateY(${-mousePosition.y * 0.02}px)`,
              transition: "all 0.1s ease-out",
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400 group-hover:animate-spin" />
            <span className="text-cyan-400 text-sm font-semibold">
              Enterprise Solutions
            </span>
          </div>

          {/* Main heading with text shadow tracking */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
            style={{
              textShadow: `
                ${mousePosition.x * 0.5}px ${mousePosition.y * 0.5}px 40px rgba(34, 197, 238, ${
                  0.3 + mousePosition.intensity * 0.2
                }),
                ${-mousePosition.x * 0.3}px ${-mousePosition.y * 0.3}px 60px rgba(59, 130, 246, ${
                  0.2 + mousePosition.intensity * 0.15
                })
              `,
              transition: "text-shadow 0.1s ease-out",
            }}
          >
            Enterprise Tech
            <span className="relative inline-block ml-3">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
              {/* Dynamic underline */}
              <div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                style={{
                  width: "100%",
                  opacity: isMouseInside ? 1 : 0,
                  boxShadow: `0 0 ${20 + mousePosition.intensity * 20}px rgba(34, 197, 238, 0.6)`,
                  transition: "all 0.3s ease-out",
                }}
              />
            </span>
          </h1>

          {/* Description with fade tracking */}
          <p
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 relative"
            style={{
              opacity: isMouseInside ? 1 : 0.8,
              filter: `blur(${Math.max(0, (1 - isMouseInside ? 0.5 : 0)) * 1}px)`,
              transform: `translateY(${-mousePosition.y * 0.03}px)`,
              transition: "all 0.2s ease-out",
            }}
          >
            From web development and cloud infrastructure to AI integration and
            cybersecurity, TechLab delivers cutting-edge solutions for modern
            businesses.
          </p>

          {/* Interactive buttons with dynamic effects */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              transform: `translateY(${-mousePosition.y * 0.05}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <button
              onMouseEnter={handleButtonHover}
              onClick={() => soundManager.playClickSound()}
              className="relative px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-semibold rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/50 transform hover:scale-105 active:scale-95"
              style={{
                boxShadow: `0 0 ${20 + mousePosition.intensity * 30}px rgba(34, 197, 238, ${
                  0.3 + mousePosition.intensity * 0.3
                })`,
              }}
            >
              {/* Animated background */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  transform: `translateX(${mousePosition.x * 0.5}px)`,
                }}
              />
              <span className="relative">Get Started</span>
            </button>

            <Link
              to="/services"
              onMouseEnter={handleButtonHover}
              className="relative px-8 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 group overflow-hidden"
              style={{
                boxShadow: `0 0 ${10 + mousePosition.intensity * 20}px rgba(34, 197, 238, ${
                  mousePosition.intensity * 0.2
                })`,
              }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">
                Explore Services{" "}
                <ChevronRight className="inline-block w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        {/* Animated stats section with parallax */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 pt-16 border-t border-slate-800 transition-all duration-300"
          style={{
            transform: `translateY(${mousePosition.y * 0.08}px)`,
          }}
        >
          {[
            { value: "50+", label: "Services & Solutions", index: 0 },
            { value: "24/7", label: "Expert Support", index: 1 },
            { value: "500+", label: "Happy Clients", index: 2 },
          ].map((stat) => (
            <div
              key={stat.index}
              className="text-center group cursor-pointer relative"
              onMouseEnter={() => soundManager.playHoverSound(1000 + stat.index * 200)}
              style={{
                transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.02}deg) rotateY(${
                  mousePosition.x * 0.02
                }deg) translateY(${mousePosition.intensity * 10}px)`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  filter: `blur(${mousePosition.intensity * 10}px)`,
                }}
              />

              <div
                className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{
                  textShadow: `0 0 ${10 + mousePosition.intensity * 20}px rgba(34, 197, 238, 0.3)`,
                }}
              >
                {stat.value}
              </div>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cursor indicator - optional accent */}
      {isMouseInside && (
        <div
          className="fixed w-40 h-40 rounded-full border border-cyan-400/20 pointer-events-none"
          style={{
            left: `${mousePosition.x + 50}%`,
            top: `${mousePosition.y + 50}%`,
            transform: `translate(-50%, -50%) scale(${mousePosition.intensity})`,
            opacity: mousePosition.intensity * 0.3,
            transition: "all 0.1s ease-out",
          }}
        />
      )}

      {/* Styles */}
      <style>{`
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(34, 197, 238, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(34, 197, 238, 0.6));
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
