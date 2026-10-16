"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { DESTINATIONS_DATA } from "@/lib/data";

export default function Destinations() {
  return (
    <section id="destinations" className="py-14 sm:py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TOP DESTINATIONS"
          title="Places That Take Your Breath Away"
          subtitle="From the world's highest paved border to glittering alpine lakes, explore the most stunning corners of the north."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DESTINATIONS_DATA.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: idx * 0.12, duration: 0.6 }}
              className="group relative h-[380px] xs:h-[420px] sm:h-[440px] rounded-[22px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110" style={{ position: "absolute" }}>
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Top Badge */}
              <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                <span className="px-3 sm:px-3.5 py-1 rounded-full text-xs font-semibold bg-[#072a44]/85 text-sky-200 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-[#38bdf8]" />
                  <span>{dest.badge || dest.altitude}</span>
                </span>
              </div>

              {/* Dark Gradient Overlay - Always positioned nicely on mobile, slides up on desktop hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#072a44] via-[#072a44]/75 to-transparent translate-y-0 md:translate-y-12 md:group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col justify-end p-5 sm:p-6 lg:p-8 text-white">
                <div className="transform transition-transform duration-500 md:group-hover:-translate-y-1">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-sky-400 block mb-1">
                    {dest.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed mb-3 sm:mb-4 line-clamp-2 md:line-clamp-2 md:group-hover:line-clamp-none transition-all">
                    {dest.description}
                  </p>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#38bdf8] hover:text-sky-300 transition-colors py-1 min-h-[40px] group/link"
                  >
                    <span>View Details & Plan</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
