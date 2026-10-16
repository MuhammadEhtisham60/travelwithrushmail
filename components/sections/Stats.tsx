"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS_DATA } from "@/lib/data";

function CounterItem({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="text-center px-3 py-5 sm:px-4 sm:py-6 bg-white/[0.05] sm:bg-transparent rounded-2xl sm:rounded-none border border-white/10 sm:border-none shadow-sm sm:shadow-none"
    >
      <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {count.toLocaleString()}
        <span className="text-[#38bdf8] ml-1">{suffix}</span>
      </div>
      <div className="mt-1.5 sm:mt-2 text-[10px] xs:text-xs sm:text-sm font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-sky-100">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0b3a5c] via-[#072a44] to-[#0284c7] text-white overflow-hidden shadow-inner">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/15 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:divide-x lg:divide-white/15"
        >
          {STATS_DATA.map((item, idx) => (
            <CounterItem
              key={idx}
              value={item.value}
              suffix={item.suffix}
              label={item.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
