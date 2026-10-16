"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO, DESTINATIONS_DATA, TOURS_DATA } from "@/lib/data";

const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Destinations", href: "#destinations" },
  { name: "Tours", href: "#tours" },
  { name: "Experiences", href: "#experiences" },
  { name: "Gallery", href: "#gallery" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  // Close search with ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredItems = searchQuery.trim()
    ? [
        ...DESTINATIONS_DATA.filter((d) =>
          d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          d.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((d) => ({ title: d.title, category: "Destination", href: "#destinations" })),
        ...TOURS_DATA.filter((t) =>
          t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          t.description.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((t) => ({ title: t.title, category: "Tour Package", href: "#tours" })),
      ]
    : [];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#072a44]/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-sky-400/20"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-3.5 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Left: Logo */}
            <Link
              href="#hero"
              className="group flex items-center gap-1.5 sm:gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg min-w-0"
            >
              <span className="font-serif text-lg xs:text-xl sm:text-2xl font-bold tracking-tight text-white transition-colors duration-300 truncate">
                Travel with{" "}
                <span className="text-[#38bdf8] drop-shadow-sm group-hover:text-sky-300 transition-colors">
                  Rushmile
                </span>
              </span>
            </Link>

            {/* Center: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-slate-100/90 hover:text-white transition-colors py-1 group"
                >
                  {link.name}
                  {/* Underline hover animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-sky-400 to-sky-300 transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Search Icon Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search destinations and tours"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Book a Journey Pill Button (Desktop & Tablet) */}
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                Book a Journey
              </Link>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#072a44] text-white flex flex-col justify-between p-5 sm:p-8 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside overlay */}
            <div className="flex items-center justify-between border-b border-sky-900/60 pb-4 shrink-0">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-white">
                Travel with <span className="text-[#38bdf8]">Rushmile</span>
              </span>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="my-auto py-6 flex flex-col gap-2" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.25 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-2xl sm:text-3xl text-slate-100 hover:text-sky-400 active:text-sky-300 transition-colors flex items-center justify-between py-3 px-3 rounded-xl hover:bg-white/5 active:bg-white/10 min-h-[48px]"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-5 h-5 text-sky-400/60" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Contact inside Mobile Drawer */}
            <div className="pt-5 border-t border-sky-900/60 space-y-3 shrink-0">
              {/* Quick direct phone / WhatsApp pills */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15 transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-500/30 transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] shadow-lg shadow-sky-500/25 active:scale-98 min-h-[48px]"
              >
                Book a Journey
              </Link>
              <div className="text-center text-[11px] text-sky-200/70">
                <p>Hotline: {COMPANY_INFO.phonePrimary}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl bg-[#072a44] border border-sky-400/30 rounded-2xl shadow-2xl p-4 sm:p-6 text-white max-h-[85dvh] flex flex-col"
            >
              <div className="flex items-center gap-3 border-b border-sky-500/30 pb-3 sm:pb-4 shrink-0">
                <Search className="w-5 h-5 text-sky-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search destinations (Hunza, Skardu, Khunjerab)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-base sm:text-lg"
                />
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                  className="text-slate-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-3 sm:mt-4 flex-1 overflow-y-auto divide-y divide-sky-900/40">
                {searchQuery.trim() === "" ? (
                  <div className="py-6 text-xs sm:text-sm text-sky-200/60 text-center">
                    Type a destination, pass or tour name to quickly jump to it.
                  </div>
                ) : filteredItems.length > 0 ? (
                  filteredItems.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setIsSearchOpen(false)}
                      className="py-3 px-2 flex items-center justify-between hover:bg-white/5 rounded-lg transition-colors min-h-[44px]"
                    >
                      <div>
                        <div className="font-medium text-white text-sm sm:text-base">{item.title}</div>
                        <span className="text-xs text-sky-400">{item.category}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-sky-400 shrink-0 ml-2" />
                    </Link>
                  ))
                ) : (
                  <div className="py-6 text-sm text-center text-slate-400">
                    No matching destinations found for &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
