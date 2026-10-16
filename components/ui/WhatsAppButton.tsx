"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.aside
      aria-label="Contact via WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:bottom-6 right-3.5 sm:right-6 z-40 flex items-center group"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#072a44]/90 text-white shadow-lg backdrop-blur-md border border-sky-400/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-2 group-hover:translate-x-0">
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] text-white shadow-xl shadow-sky-500/35 hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-glow"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow" />
      </a>
    </motion.aside>
  );
}
