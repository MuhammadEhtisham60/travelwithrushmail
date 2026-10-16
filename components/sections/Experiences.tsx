"use client";

import { motion } from "framer-motion";
import { Compass, Car, Building2, Headset } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCES_DATA } from "@/lib/data";

const iconMap = {
  Compass,
  Car,
  Building2,
  Headset,
};

export default function Experiences() {
  return (
    <section
      id="experiences"
      className="relative py-14 sm:py-24 lg:py-32 bg-gradient-to-b from-[#072a44] to-[#0b3a5c] text-white overflow-hidden"
    >
      {/* Soft sky-blue radial glow in the top-right corner */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          dark
          eyebrow="WHY CHOOSE US"
          title="More Than Just a Trip"
          subtitle="Local expertise, safe transport and warm hospitality on every mile."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {EXPERIENCES_DATA.map((item, idx) => {
            const Icon = iconMap[item.iconName];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/[0.06] backdrop-blur-md border border-sky-400/20 hover:border-sky-400/70 rounded-[20px] sm:rounded-[22px] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-500/15 group flex flex-col justify-between"
              >
                <div>
                  {/* Sky-gradient icon box */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#0ea5e9] to-[#38bdf8] flex items-center justify-center text-white shadow-lg shadow-sky-500/30 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-sky-100/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle indicator bar */}
                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-white/10">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-sky-400 group-hover:text-sky-300 flex items-center gap-1.5">
                    Rushmile Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
