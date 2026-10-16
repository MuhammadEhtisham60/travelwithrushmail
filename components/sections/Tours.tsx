"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Mountain, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { TOURS_DATA } from "@/lib/data";

export default function Tours() {
  return (
    <section id="tours" className="py-14 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR PACKAGES"
          title="Signature Northern Tours"
          subtitle="Every package is customized for families, couples, groups and adventure travelers."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TOURS_DATA.map((tour, idx) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="bg-sky-50/70 border border-sky-100 rounded-[22px] overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Card Image with Badge */}
              <div>
                <div className="relative h-48 xs:h-56 sm:h-60 w-full overflow-hidden" style={{ position: "relative" }}>
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Sky-blue badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white shadow-md">
                      {tour.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-7">
                  {/* Duration and Difficulty */}
                  <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold text-sky-800/80 mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{tour.duration}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-sky-300" />
                    <div className="flex items-center gap-1.5">
                      <Mountain className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                      <span>{tour.difficulty}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3a5c] group-hover:text-sky-700 transition-colors mb-2.5 sm:mb-3">
                    {tour.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-5">
                    {tour.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4 sm:mb-6 border-t border-sky-100 pt-3.5 sm:pt-4">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0ea5e9] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-3 flex items-center justify-between gap-3 border-t border-sky-100/80">
                <div>
                  <span className="block text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Pricing
                  </span>
                  <span className="text-sm xs:text-base font-bold text-[#0b3a5c]">
                    {tour.priceText}
                  </span>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 xs:gap-2 px-4 xs:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#072a44] hover:bg-[#0b3a5c] shadow-md hover:shadow-sky-500/20 active:scale-95 transition-all duration-300 min-h-[44px]"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
