"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS_DATA } from "@/lib/data";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Auto-rotate every 6 seconds, pause on hover/touch
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const current = TESTIMONIALS_DATA[currentIdx];

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 45) {
      // swipe left -> next
      setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    } else if (diff < -45) {
      // swipe right -> prev
      setCurrentIdx((prev) =>
        prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
      );
    }
    setTouchStartX(null);
  };

  return (
    <section
      className="py-14 sm:py-24 lg:py-32 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Travelers Say"
          subtitle="Real reviews from explorers who trusted Rushmile to journey through Northern Pakistan."
        />

        {/* Testimonial Box */}
        <div className="relative min-h-[220px] xs:min-h-[200px] sm:min-h-[210px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center max-w-3xl mx-auto px-2 sm:px-4"
            >
              {/* Star rating */}
              <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                ))}
              </div>

              {/* Italic serif quote text */}
              <blockquote className="font-serif italic text-lg xs:text-xl sm:text-2xl lg:text-3xl text-[#0b3a5c] font-normal leading-relaxed sm:leading-relaxed mb-4 sm:mb-6">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Name & Tour */}
              <div className="space-y-1">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-sky-600 block">
                  — {current.author}, {current.location}
                </span>
                <span className="text-[11px] sm:text-xs text-slate-400 font-medium">
                  Tour: {current.tour}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls: Prev Button, Dots, Next Button */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            type="button"
            onClick={() =>
              setCurrentIdx((prev) =>
                prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
              )
            }
            aria-label="Previous testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-sky-200 text-sky-700 hover:bg-sky-50 flex items-center justify-center transition-colors focus:outline-none"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dot Indicators with generous touch targets */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                aria-label={`View testimonial ${idx + 1}`}
                className="p-2 -m-2 flex items-center justify-center focus:outline-none"
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    currentIdx === idx
                      ? "w-7 bg-sky-500 shadow-sm shadow-sky-500/30"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setCurrentIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length)
            }
            aria-label="Next testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-sky-200 text-sky-700 hover:bg-sky-50 flex items-center justify-center transition-colors focus:outline-none"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
