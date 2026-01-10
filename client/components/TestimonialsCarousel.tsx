import { useState } from "react";
import { Star } from "lucide-react";
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

  const handleSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-full lg:basis-1/2"
                  onLoad={handleSelect}
                >
                  <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-cyan-400/50 transition-colors h-full">
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-cyan-400 text-cyan-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-slate-300 mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div>
                      <p className="text-white font-semibold">{testimonial.author}</p>
                      <p className="text-slate-400 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  api?.scrollTo(index);
                  setCurrent(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-6 bg-cyan-400"
                    : "w-2 bg-slate-600 hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
