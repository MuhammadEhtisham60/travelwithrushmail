"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ABOUT_DATA } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-24 lg:py-32 bg-sky-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Two Overlapping Rounded Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative h-[320px] xs:h-[380px] sm:h-[460px] lg:h-[520px] w-full max-w-lg mx-auto lg:max-w-none"
          >
            {/* Large image (top-left) */}
            <div className="absolute top-0 left-0 w-[82%] h-[80%] rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-2xl border-4 border-white" style={{ position: "absolute" }}>
              <Image
                src={ABOUT_DATA.images.primary}
                alt="Exploring Northern Pakistan Valleys"
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 45vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Smaller overlapping image (bottom-right) */}
            <div className="absolute bottom-0 right-0 w-[54%] h-[56%] rounded-[18px] sm:rounded-[22px] overflow-hidden shadow-2xl border-4 border-white/90" style={{ position: "absolute" }}>
              <Image
                src={ABOUT_DATA.images.secondary}
                alt="Local Guide and Travelers in Northern Pakistan"
                fill
                sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 25vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-3 right-1 xs:top-4 xs:right-2 sm:top-8 sm:right-6 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-2.5 xs:p-3 sm:p-4 shadow-xl border border-sky-100 flex items-center gap-2.5 sm:gap-3 z-10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm sm:text-lg shrink-0">
                10+
              </div>
              <div className="text-[10px] xs:text-xs">
                <div className="font-bold text-[#0b3a5c]">Years of Trust</div>
                <div className="text-slate-500 hidden xs:block">Across Gilgit-Baltistan</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-4 sm:space-y-6"
          >
            {/* Eyebrow */}
            <span className="inline-block text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 bg-sky-100/70 border border-sky-200 px-3.5 py-1 rounded-full">
              {ABOUT_DATA.eyebrow}
            </span>

            {/* Title */}
            <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b3a5c] leading-[1.2] sm:leading-tight">
              {ABOUT_DATA.title}
            </h2>

            {/* Paragraphs */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              {ABOUT_DATA.paragraph1}
            </p>

            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
              {ABOUT_DATA.paragraph2}
            </p>

            {/* Checklist with sky check icons */}
            <div className="space-y-2.5 sm:space-y-3.5 pt-1 sm:pt-2">
              {ABOUT_DATA.checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                  <div className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-sky-600 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm lg:text-base font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Plan Your Trip CTA */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 min-h-[48px]"
              >
                <span>Plan Your Trip</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
