import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Testimonial } from "@/data/testimonials";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("pages:testimonials.heading")}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t("pages:testimonials.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-cyan-400/50 transition-colors"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
