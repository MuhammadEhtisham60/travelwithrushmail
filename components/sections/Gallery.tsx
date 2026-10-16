"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ZoomIn, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Client-editable gallery image list
const GALLERY_IMAGES = [
  {
    src: "/images/hero.jpg",
    alt: "Karakoram Mountain Peaks at Sunset",
    caption: "Golden hour glow over K2 & Karakoram giants",
  },
  {
    src: "/images/images.jpg",
    alt: "Turquoise Waters of Attabad Lake",
    caption: "Crystal turquoise glacial waters of Attabad Lake, Gojal",
  },
  {
    src: "/images/passu.jpg",
    alt: "Iconic Passu Cathedral Cones",
    caption: "Serrated needles of Passu Cones, Upper Hunza",
  },
  {
    src: "/images/camp.jpg",
    alt: "Starry Campsite under the Milky Way",
    caption: "Stargazing at Fairy Meadows with Nanga Parbat backdrop",
  },
  {
    src: "/images/skardu.jpg",
    alt: "Upper Kachura Lake Skardu",
    caption: "Pristine emerald waters of Upper Kachura Lake",
  },
  {
    src: "/images/jeep.jpg",
    alt: "4x4 Expedition on Mountain Pass",
    caption: "4x4 Safari climbing high mountain cliff roads",
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIdx]);

  // Close with Escape key and navigate with arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") {
        setActiveIdx(null);
      } else if (e.key === "ArrowRight") {
        setActiveIdx((prev) =>
          prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveIdx((prev) =>
          prev !== null
            ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || activeIdx === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold 50px
    if (diff > 50) {
      // Swiped left -> next image
      setActiveIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
    } else if (diff < -50) {
      // Swiped right -> prev image
      setActiveIdx((prev) =>
        prev !== null
          ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
          : null
      );
    }
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="py-14 sm:py-24 lg:py-32 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="GALLERY"
          title="Moments From the Mountains"
          subtitle="Click or tap any photo to view in high definition."
        />

        {/* Masonry Layout (3 desktop, 2 tablet, 1 mobile) with 16-20px gap */}
        <div className="columns-1 sm:columns-2 lg:columns-3 [column-gap:16px] sm:[column-gap:20px] space-y-4 sm:space-y-5">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.5 }}
              onClick={() => setActiveIdx(idx)}
              className="group relative break-inside-avoid rounded-[20px] sm:rounded-[22px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-slate-200"
            >
              {/* Image container with natural aspect ratio */}
              <div className="relative w-full aspect-[4/3] group-hover:scale-105 transition-transform duration-500 ease-out" style={{ position: "relative" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Desktop Hover Zoom Icon Overlay */}
              <div className="hidden md:flex absolute inset-0 bg-[#072a44]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl mb-2">
                  <ZoomIn className="w-6 h-6 text-[#38bdf8]" />
                </div>
                <p className="text-white text-xs font-semibold px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm max-w-[90%] truncate">
                  {img.caption}
                </p>
              </div>

              {/* Mobile Persistent Caption Pill */}
              <div className="md:hidden absolute bottom-2.5 left-2.5 right-2.5 bg-[#072a44]/80 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center justify-between text-white border border-white/10 shadow-sm">
                <span className="text-xs truncate font-medium text-sky-100">{img.caption}</span>
                <ZoomIn className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 ml-1.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveIdx(null)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 bg-[#072a44]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              aria-label="Close image lightbox"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-colors z-20 focus:outline-none"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx(
                  (activeIdx - 1 + GALLERY_IMAGES.length) %
                    GALLERY_IMAGES.length
                );
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors z-20 focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx((activeIdx + 1) % GALLERY_IMAGES.length);
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors z-20 focus:outline-none"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Modal Image Box */}
            <motion.div
              key={activeIdx}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center px-6 sm:px-12"
            >
              <div className="relative w-full h-[52vh] sm:h-[65vh] rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-2xl border border-sky-400/20">
                <Image
                  src={GALLERY_IMAGES[activeIdx].src}
                  alt={GALLERY_IMAGES[activeIdx].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="mt-3 sm:mt-4 text-center px-2">
                <p className="text-white text-sm sm:text-lg font-medium leading-snug">
                  {GALLERY_IMAGES[activeIdx].caption}
                </p>
                <span className="text-[11px] sm:text-xs text-sky-300 font-semibold uppercase tracking-widest mt-1 block">
                  {activeIdx + 1} of {GALLERY_IMAGES.length} (Swipe to browse)
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
