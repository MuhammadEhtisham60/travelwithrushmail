"use client";

import Link from "next/link";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

// Custom simple SVGs for Social Icons
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#072a44] text-slate-300 border-t border-sky-950">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1: Brand & Socials (4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <Link href="#hero" className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Travel with <span className="text-[#38bdf8]">Rushmile</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-sky-100/70 leading-relaxed max-w-sm">
              Premium curated tours and private expeditions through Northern
              Pakistan. Experience Khunjerab Pass, Baosar Top, Skardu, and Hunza
              Valley with comfort and trusted local hospitality.
            </p>

            {/* Social Icons with 44px touch targets */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Follow Rushmile on Facebook"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-sky-400/30 text-white flex items-center justify-center hover:bg-[#38bdf8] hover:border-[#38bdf8] hover:text-[#072a44] transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Follow Rushmile on Instagram"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-sky-400/30 text-white flex items-center justify-center hover:bg-[#38bdf8] hover:border-[#38bdf8] hover:text-[#072a44] transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Watch Rushmile on YouTube"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-sky-400/30 text-white flex items-center justify-center hover:bg-[#38bdf8] hover:border-[#38bdf8] hover:text-[#072a44] transition-all duration-300"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Rushmile on WhatsApp"
                className="w-11 h-11 sm:w-10 sm:h-10 rounded-full border border-sky-400/30 text-white flex items-center justify-center hover:bg-[#38bdf8] hover:border-[#38bdf8] hover:text-[#072a44] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#destinations"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="#tours"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#experiences"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (3 cols) */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#about"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  Contact & Bookings
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-sky-300 transition-colors py-1 inline-block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-400">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}
                className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-semibold">{COMPANY_INFO.phonePrimary}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`}
                className="flex items-center gap-3 text-sky-100 hover:text-white transition-colors py-1"
              >
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="font-semibold">{COMPANY_INFO.phoneSecondary}</span>
              </a>

              <div className="flex items-center gap-3 text-sky-200/70 pt-0.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>

              <div className="flex items-center gap-3 text-sky-200/70">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sky-900/60 py-5 sm:py-6 text-center text-xs text-sky-200/60">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <p>© {currentYear} Travel with Rushmile. All rights reserved.</p>
          <p className="text-sky-300/60">
            Crafted for Northern Pakistan Expeditions
          </p>
        </div>
      </div>
    </footer>
  );
}
