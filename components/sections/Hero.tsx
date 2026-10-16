"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, MapPin, ArrowRight, X, Calendar, Users, Wallet } from "lucide-react";

// Editable Hero Background Constant
const HERO_IMAGE = "/images/hero.jpg";

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [destination, setDestination] = useState("Hunza Valley");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState("2");
  const [budget, setBudget] = useState("Comfort");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Smooth scroll down to tours or contact
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col justify-between pt-24 xs:pt-28 pb-8 sm:pb-14 overflow-hidden"
    >
      {/* Fallback sky-blue gradient under image */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0369a1] via-[#38bdf8] to-[#bae6fd] -z-20" />

      {/* Hero Background Image with Ken Burns Zoom */}
      <div className="absolute inset-0 -z-10 overflow-hidden" style={{ position: "absolute" }}>
        <div className="relative w-full h-full animate-ken-burns" style={{ position: "relative" }}>
          <Image
            src={HERO_IMAGE}
            alt="Majestic Karakoram Peaks in Northern Pakistan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Multi-stop Gradient Overlay for readability */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,42,68,0.94) 0%, rgba(7,42,68,0.88) 35%, rgba(3,105,161,0.6) 70%, rgba(56,189,248,0.3) 100%)",
        }}
      />
      {/* Soft vignette at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#072a44]/80 to-transparent -z-10" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-4 xs:py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Tagline, CTAs */}
          <div className="lg:col-span-8 text-white space-y-4 sm:space-y-6">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-sky-400/30 text-sky-200 text-[10px] xs:text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
            >
              EXPLORE — EXPERIENCE — BELONG
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-serif text-3xl xs:text-4xl sm:text-6xl lg:text-[5.2rem] font-bold tracking-tight leading-[1.12] sm:leading-[1.08] text-white"
            >
              Discover the{" "}
              <span className="italic font-serif font-light text-[#38bdf8] drop-shadow-md">
                Northern
              </span>{" "}
              Peaks of Pakistan
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-sm xs:text-base sm:text-lg lg:text-xl text-sky-50/90 max-w-2xl leading-relaxed font-light"
            >
              Curated journeys through Khunjerab, Baosar Top, Skardu and
              Gilgit-Baltistan. We craft unforgettable stories you will carry for
              a lifetime.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full xs:w-auto"
            >
              <Link
                href="#destinations"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] shadow-xl shadow-sky-500/30 hover:shadow-sky-400/50 hover:scale-105 active:scale-95 transition-all duration-300 min-h-[48px]"
              >
                <span>Explore Destinations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-medium text-white hover:text-sky-300 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 transition-all duration-300 group min-h-[48px]"
              >
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#0b3a5c] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                </span>
                <span>Watch Guide</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: 2 Floating Cards (Desktop only) */}
          <div className="hidden lg:block lg:col-span-4 relative h-[420px]" style={{ position: "relative" }}>
            {/* Floating Card 1: Hunza Valley */}
            <div className="absolute top-4 right-0 w-64 bg-white/95 backdrop-blur-md rounded-[22px] p-3.5 shadow-2xl border border-white/60 animate-float-1" style={{ position: "absolute" }}>
              <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3" style={{ position: "relative" }}>
                <Image
                  src="/images/hunza.jpg"
                  alt="Hunza Valley"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0ea5e9] text-white">
                  Featured
                </span>
              </div>
              <div className="px-1.5 pb-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-bold text-base text-[#0b3a5c]">Hunza Valley</h2>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Apricot blooms & Baltit fort</p>
                <div className="mt-2 text-[11px] text-sky-600 font-medium">1.2K reviews from guests</div>
              </div>
            </div>

            {/* Floating Card 2: Khunjerab Pass */}
            <div className="absolute bottom-6 left-2 w-64 bg-white/95 backdrop-blur-md rounded-[22px] p-3.5 shadow-2xl border border-white/60 animate-float-2" style={{ position: "absolute" }}>
              <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3" style={{ position: "relative" }}>
                <Image
                  src="/images/khunjerab.jpg"
                  alt="Khunjerab Pass"
                  fill
                  sizes="250px"
                  className="object-cover"
                />
                <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#072a44] text-sky-300">
                  China Border
                </span>
              </div>
              <div className="px-1.5 pb-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-bold text-base text-[#0b3a5c]">Khunjerab Pass</h2>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>4.8</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">4,693m international crossing</p>
                <div className="mt-2 text-[11px] text-sky-600 font-medium">860 reviews from guests</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Glass Search Bar at the bottom of Hero */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 w-full mt-4 sm:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-white/20 backdrop-blur-xl border border-white/40 shadow-2xl p-2.5 sm:p-4 rounded-[22px] sm:rounded-[26px]"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 items-center"
          >
            {/* Field 1: Destination */}
            <div className="bg-white rounded-[16px] sm:rounded-[18px] px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-sm border border-slate-100 flex flex-col justify-center min-h-[50px]">
              <label
                htmlFor="search-destination"
                className="text-[10px] font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5"
              >
                <MapPin className="w-3 h-3" /> Destination
              </label>
              <select
                id="search-destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-transparent text-base sm:text-sm font-semibold text-[#0b3a5c] focus:outline-none cursor-pointer mt-0.5"
              >
                <option value="Hunza Valley">Hunza Valley</option>
                <option value="Skardu">Skardu</option>
                <option value="Khunjerab Pass">Khunjerab Pass</option>
                <option value="Baosar Top">Baosar Top</option>
                <option value="Fairy Meadows">Fairy Meadows</option>
              </select>
            </div>

            {/* Field 2: Travel Date */}
            <div className="bg-white rounded-[16px] sm:rounded-[18px] px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-sm border border-slate-100 flex flex-col justify-center min-h-[50px]">
              <label
                htmlFor="search-travel-date"
                className="text-[10px] font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5"
              >
                <Calendar className="w-3 h-3" /> Travel Date
              </label>
              <input
                id="search-travel-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-base sm:text-sm font-semibold text-[#0b3a5c] focus:outline-none cursor-pointer mt-0.5"
              />
            </div>

            {/* Field 3: Travelers */}
            <div className="bg-white rounded-[16px] sm:rounded-[18px] px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-sm border border-slate-100 flex flex-col justify-center min-h-[50px]">
              <label
                htmlFor="search-travelers"
                className="text-[10px] font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5"
              >
                <Users className="w-3 h-3" /> Travelers
              </label>
              <select
                id="search-travelers"
                value={travelers}
                onChange={(e) => setTravelers(e.target.value)}
                className="w-full bg-transparent text-base sm:text-sm font-semibold text-[#0b3a5c] focus:outline-none cursor-pointer mt-0.5"
              >
                <option value="1">1 Solo Traveler</option>
                <option value="2">2 Travelers (Couple)</option>
                <option value="3-5">3 – 5 Family / Group</option>
                <option value="6+">Group 6+ People</option>
              </select>
            </div>

            {/* Field 4: Budget */}
            <div className="bg-white rounded-[16px] sm:rounded-[18px] px-3.5 sm:px-4 py-2 sm:py-2.5 shadow-sm border border-slate-100 flex flex-col justify-center min-h-[50px]">
              <label
                htmlFor="search-budget"
                className="text-[10px] font-bold uppercase tracking-wider text-sky-600 flex items-center gap-1.5"
              >
                <Wallet className="w-3 h-3" /> Budget
              </label>
              <select
                id="search-budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent text-base sm:text-sm font-semibold text-[#0b3a5c] focus:outline-none cursor-pointer mt-0.5"
              >
                <option value="Any">Any Budget</option>
                <option value="Economy">Economy</option>
                <option value="Comfort">Comfort</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full h-full min-h-[48px] sm:min-h-[52px] rounded-[16px] sm:rounded-[18px] bg-[#072a44] hover:bg-[#0b3a5c] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg hover:shadow-sky-500/20 active:scale-98 transition-all duration-300"
            >
              <span>Search Tours</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Video Guide Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#072a44] border border-sky-400/30 rounded-[22px] overflow-hidden shadow-2xl p-4 sm:p-6 text-white"
            >
              <div className="flex items-center justify-between pb-4 border-b border-sky-900/60">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">
                    Northern Pakistan Expedition Preview
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-300">
                    Hunza • Skardu • Khunjerab • Fairy Meadows
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(false)}
                  aria-label="Close video preview"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Embed or Interactive Reel */}
              <div className="mt-4 relative aspect-video rounded-xl overflow-hidden bg-slate-900">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/5a2d_74g59A?autoplay=1&mute=0"
                  title="Discover Pakistan Karakoram Highway & Northern Areas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-sky-100/80">
                <span>Want a personalized video or custom route plan?</span>
                <Link
                  href="#contact"
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium hover:brightness-110 transition-all"
                >
                  Inquire Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
