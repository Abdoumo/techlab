import { useState, useRef } from "react";
import { Star } from "lucide-react";
import { soundManager } from "@/utils/soundManager";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Testimonial } from "@/data/testimonials";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px)");

  const handleSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    soundManager.playHoverSound(800);
  };

  const handleCardMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    );
  };

  const handleCardMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");
  };

  return (
    <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slideInUp">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their business with TechLab
          </p>
        </div>

        <div className="relative px-12">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="py-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-full lg:basis-1/2"
                  onLoad={handleSelect}
                >
                  <div
                    ref={index === current ? cardRef : null}
                    className="group relative bg-slate-800/50 backdrop-blur rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 h-full overflow-hidden"
                    style={{
                      transform: index === current ? transform : "perspective(1000px)",
                      transformStyle: "preserve-3d",
                      boxShadow:
                        index === current
                          ? "0 20px 50px rgba(34, 197, 238, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                          : "0 10px 25px rgba(0, 0, 0, 0.3)",
                    }}
                    onMouseMove={index === current ? handleCardMouseMove : undefined}
                    onMouseLeave={index === current ? handleCardMouseLeave : undefined}
                    onMouseEnter={() => {
                      setHoveredCard(index);
                      soundManager.playHoverSound(900);
                    }}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Light reflection */}
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Stars with animation */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-cyan-400 text-cyan-400 transition-transform duration-300 hover:scale-125"
                            style={{
                              animation: hoveredCard === index ? `bounce 0.5s ease-in-out ${i * 0.05}s infinite` : "none",
                            }}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-300 mb-6 leading-relaxed italic group-hover:text-slate-200 transition-colors">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="relative z-10">
                        <p className="text-white font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                          {testimonial.author}
                        </p>
                        <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{
                        width: hoveredCard === index ? "100%" : "0%",
                        transition: "width 0.5s ease-out",
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="left-0 hover:bg-cyan-400/20 hover:text-cyan-400"
              onClick={() => soundManager.playHoverSound(700)}
            />
            <CarouselNext
              className="right-0 hover:bg-cyan-400/20 hover:text-cyan-400"
              onClick={() => soundManager.playHoverSound(1000)}
            />
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  setCurrent(index);
                  soundManager.playClickSound();
                }}
                onMouseEnter={() => soundManager.playHoverSound(600 + index * 100)}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-6 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <style>{`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-30px);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
