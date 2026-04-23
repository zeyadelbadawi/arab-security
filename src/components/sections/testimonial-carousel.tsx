import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/lib/types";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoAdvance?: boolean;
  interval?: number;
}

export function TestimonialCarousel({
  testimonials,
  autoAdvance = true,
  interval = 5000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoAdvance, interval, testimonials.length]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <ScrollReveal>
      <div className="relative max-w-3xl mx-auto">
        <Quote className="w-12 h-12 text-teal/20 mx-auto mb-6" />

        <div className="relative min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-navy">{testimonials[current].authorName}</p>
                <p className="text-gray-500 text-sm">
                  {testimonials[current].authorTitle}, {testimonials[current].authorCompany}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal hover:text-teal flex items-center justify-center transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-teal w-6" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 hover:border-teal hover:text-teal flex items-center justify-center transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
}