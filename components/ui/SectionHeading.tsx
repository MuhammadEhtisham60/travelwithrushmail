"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-8 sm:mb-12 md:mb-16 px-1 sm:px-0 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-2xl"} ${className}`}
    >
      <span
        className={`inline-block text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] sm:tracking-[0.2em] uppercase mb-2.5 sm:mb-3 px-3 py-1 sm:px-3.5 sm:py-1 rounded-full ${
          dark
            ? "text-sky-300 bg-sky-950/60 border border-sky-500/20"
            : "text-sky-600 bg-sky-50 border border-sky-200/60"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-serif text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] sm:leading-tight ${
          dark ? "text-white" : "text-[#0b3a5c]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2.5 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed ${
            dark ? "text-sky-100/75" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
