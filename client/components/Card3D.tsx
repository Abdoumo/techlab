import { useRef, useState, useEffect } from "react";
import { soundManager } from "@/utils/soundManager";

interface Card3DProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: "cyan" | "blue" | "purple";
  items?: string[];
  onClick?: () => void;
  delay?: number;
}

const colorGradients = {
  cyan: "from-cyan-500/20 to-blue-500/20",
  blue: "from-blue-500/20 to-cyan-500/20",
  purple: "from-purple-500/20 to-pink-500/20",
};

const colorGlows = {
  cyan: "group-hover:shadow-cyan-400/20",
  blue: "group-hover:shadow-blue-400/20",
  purple: "group-hover:shadow-purple-400/20",
};

const colorBorders = {
  cyan: "group-hover:border-cyan-400/50",
  blue: "group-hover:border-blue-400/50",
  purple: "group-hover:border-purple-400/50",
};

export default function Card3D({
  title,
  description,
  icon,
  color = "cyan",
  items = [],
  onClick,
  delay = 0,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate rotation based on mouse position relative to card center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateY = ((x - centerX) / centerX) * 15;
      const rotateX = ((centerY - y) / centerY) * 15;

      setTransform(
        `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
      );
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      soundManager.playHoverSound(900);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClick = () => {
    soundManager.playClickSound();
    onClick?.();
  };

  return (
    <div
      style={{
        animation: `slideUp 0.6s cubic-bezier(0.23, 1, 0.320, 1) ${delay}ms forwards`,
        opacity: 0,
      }}
    >
      <div
        ref={cardRef}
        onClick={handleClick}
        className="group relative bg-white dark:bg-slate-800/50 backdrop-blur border border-slate-200 dark:border-slate-700 rounded-xl p-6 cursor-pointer overflow-hidden h-full transition-all duration-300 shadow-md hover:shadow-xl dark:shadow-none"
        style={{
          transform: transform,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 20px 50px rgba(34, 197, 238, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 10px 25px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Animated background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorGradients[color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          style={{
            animation: isHovered ? "shimmer 3s infinite" : "none",
          }}
        />

        {/* Light reflection effect */}
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            animation: isHovered ? "float 6s ease-in-out infinite" : "none",
          }}
        />

        {/* Content wrapper with z-index */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div
            className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-700/50 group-hover:bg-slate-200 dark:group-hover:bg-slate-600 border border-slate-200/80 dark:border-transparent transition-all duration-300"
            style={{
              transform: isHovered ? "scale(1.1) rotateZ(5deg)" : "scale(1)",
              animation: isHovered ? "pulse 2s ease-in-out infinite" : "none",
            }}
          >
            {icon}
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-transparent dark:group-hover:bg-clip-text dark:group-hover:bg-gradient-to-r dark:group-hover:from-cyan-400 dark:group-hover:to-blue-500 transition-all duration-300"
            style={{
              transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-slate-600 dark:text-slate-400 text-sm mb-4 group-hover:text-slate-900 dark:group-hover:text-slate-300 transition-colors duration-300 flex-1"
            style={{
              transform: isHovered ? "translateZ(15px)" : "translateZ(0)",
            }}
          >
            {description}
          </p>

          {/* Items list */}
          {items.length > 0 && (
            <ul
              className="space-y-1.5 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                transform: isHovered ? "translateZ(10px)" : "translateZ(0)",
              }}
            >
              {items.map((item) => (
                <li key={item} className="text-xs font-medium text-slate-700 dark:text-slate-400 group-hover:text-slate-950 dark:group-hover:text-slate-300">
                  • {item}
                </li>
              ))}
            </ul>
          )}

          {/* Border glow */}
          <div
            className={`absolute inset-0 rounded-xl border border-transparent ${colorBorders[color]} transition-all duration-300`}
            style={{
              opacity: isHovered ? 1 : 0,
              boxShadow: isHovered ? `0 0 20px rgba(34, 197, 238, 0.3) inset` : "none",
            }}
          />
        </div>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
          style={{
            width: isHovered ? "100%" : "0%",
          }}
        />
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
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

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
