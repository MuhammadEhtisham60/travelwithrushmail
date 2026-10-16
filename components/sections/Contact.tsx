"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/lib/data";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    destination: "Hunza Valley",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = "Please enter your valid name.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone / WhatsApp number is required.";
    } else if (formData.phone.trim().length < 7) {
      errs.phone = "Please enter a valid phone number.";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = "Please enter a valid email address.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    setSuccessMessage("");

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      setSuccessMessage(data.message || "Thank you! We will contact you shortly.");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        destination: "Hunza Valley",
        message: "",
      });
      setErrors({});
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us.";
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-24 lg:py-32 bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CONTACT US"
          title="Let's Plan Your Journey"
          subtitle="Tell us your dream destination and we will create the perfect itinerary."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: Info Card (Dark blue gradient, white text) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#072a44] to-[#0b3a5c] rounded-[22px] p-6 sm:p-8 lg:p-10 text-white shadow-2xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-sky-400 block mb-2">
                Fast Response
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight mb-2 sm:mb-3">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed mb-6 sm:mb-8">
                Our team replies quickly on phone and WhatsApp. Have questions about road conditions, weather, or custom family plans? Speak directly to our trip specialists.
              </p>

              {/* Contact Items */}
              <div className="space-y-4 sm:space-y-6">
                {/* Phone 1 */}
                <a
                  href={`tel:${COMPANY_INFO.phonePrimaryRaw}`}
                  className="flex items-center gap-3.5 sm:gap-4 group p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 group-hover:bg-[#0ea5e9] border border-white/15 flex items-center justify-center text-white shrink-0 transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-sky-300/80 block">
                      Primary Phone / WhatsApp
                    </span>
                    <span className="text-sm xs:text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                      {COMPANY_INFO.phonePrimary}
                    </span>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href={`tel:${COMPANY_INFO.phoneSecondaryRaw}`}
                  className="flex items-center gap-3.5 sm:gap-4 group p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 group-hover:bg-[#0ea5e9] border border-white/15 flex items-center justify-center text-white shrink-0 transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-sky-300/80 block">
                      Secondary Contact
                    </span>
                    <span className="text-sm xs:text-base sm:text-lg font-bold text-white group-hover:text-sky-200 transition-colors">
                      {COMPANY_INFO.phoneSecondary}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 sm:gap-4 p-2 -ml-2">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-sky-300/80 block">
                      Operating Base
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      Pakistan
                    </span>
                  </div>
                </div>

                {/* Working hours */}
                <div className="flex items-center gap-3.5 sm:gap-4 p-2 -ml-2">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-sky-300" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase tracking-wider text-sky-300/80 block">
                      Working Hours
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {COMPANY_INFO.workingHours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat on WhatsApp Button */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/15">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-[#072a44] bg-[#38bdf8] hover:bg-sky-300 shadow-lg shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Form Card (White, rounded, shadow) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-[22px] p-6 sm:p-8 lg:p-10 shadow-xl border border-sky-100 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b3a5c] mb-2">
                Inquire About a Custom Tour
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6">
                Fill out the quick form below and our journey planners will create a customized package with hotel options, private transport, and schedule.
              </p>

              {/* Success Notification */}
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-sm">Message Sent!</h4>
                      <p className="text-xs sm:text-sm mt-0.5">{successMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Server Error Notification */}
              <AnimatePresence>
                {serverError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm">{serverError}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-fullname"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-fullname"
                      type="text"
                      placeholder="e.g. Tariq Malik"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-xl border bg-slate-50/50 text-[#0b3a5c] text-base sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.fullName
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-slate-200 focus:border-sky-500 focus:ring-sky-200"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-rose-500 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Phone / WhatsApp <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="e.g. 0321 1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-xl border bg-slate-50/50 text-[#0b3a5c] text-base sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.phone
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-slate-200 focus:border-sky-500 focus:ring-sky-200"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-xs text-rose-500 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="tariq@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-3.5 sm:px-4 py-3 rounded-xl border bg-slate-50/50 text-[#0b3a5c] text-base sm:text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.email
                          ? "border-rose-400 focus:ring-rose-200"
                          : "border-slate-200 focus:border-sky-500 focus:ring-sky-200"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-rose-500 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Destination */}
                  <div>
                    <label
                      htmlFor="contact-destination"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Target Destination
                    </label>
                    <select
                      id="contact-destination"
                      value={formData.destination}
                      onChange={(e) =>
                        setFormData({ ...formData, destination: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[#0b3a5c] text-base sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="Hunza Valley">Hunza Valley</option>
                      <option value="Skardu">Skardu</option>
                      <option value="Khunjerab Pass">Khunjerab Pass</option>
                      <option value="Baosar Top">Baosar Top</option>
                      <option value="Custom Tour">Custom Tour / Multiple Destinations</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5"
                  >
                    Your Requirements & Travel Dates
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell us about the number of travelers, preferred dates, vehicle requirements, and any special requests..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[#0b3a5c] text-base sm:text-sm focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0ea5e9] shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 active:scale-[0.99] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed min-h-[50px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Your Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
