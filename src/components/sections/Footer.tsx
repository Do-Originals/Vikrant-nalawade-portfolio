"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RevealWrapper from "@/components/ui/RevealWrapper";
import MagneticButton from "@/components/ui/MagneticButton";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "dooriginals08@gmail.com";
  const whatsappNumber = "+91 98679 04334";
  const whatsappLink = "https://wa.me/919867904334?text=Hi%20DO%20Originals,%20I'm%20interested%20in%20working%20together";

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(whatsappNumber.replace(/\s+/g, ""));
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2400);
    }
  };

  return (
    <footer id="contact" className="relative w-full border-t border-line bg-ink pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-48 right-0 h-96 w-96 rounded-full bg-accent/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-72 w-72 rounded-full bg-accent/5 blur-[100px]" />

      <div className="portfolio-grid-container relative z-10 space-y-20 md:space-y-28">
        {/* Contact Hero & Booking Section */}
        <RevealWrapper className="space-y-12">
          {/* Top row: Section Eyebrow + Live Availability Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-accent">04 / DIRECT CONTACT & BOOKING</span>
              <span className="h-px w-8 bg-accent/40" />
            </div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/[0.03] px-3.5 py-1.5 backdrop-blur-sm self-start sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-paper-dim">
                Accepting select projects for Q2 / Q3 2026
              </span>
            </div>
          </div>

          {/* Big Editorial Headline */}
          <div className="max-w-4xl space-y-4">
            <h2 className="headline-display text-paper">
              Let&apos;s cut something{" "}
              <span className="italic font-light text-paper">remarkable.</span>
            </h2>
            <p className="text-base sm:text-lg text-paper-dim max-w-2xl font-light leading-relaxed">
              Have a commercial reel, podcast series, or long-form documentary that needs relentless pacing and cinematic grade? Reach out directly—no forms, no friction.
            </p>
          </div>

          {/* Primary Display Phone / WhatsApp Callout */}
          <div className="group relative inline-block pt-2">
            <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-paper transition-colors duration-300 group-hover:text-accent relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full"
                aria-label={`Chat on WhatsApp with ${whatsappNumber}`}
              >
                {whatsappNumber}
              </a>

              <span className="font-display text-2xl sm:text-4xl lg:text-5xl text-accent transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2">
                ↗
              </span>
            </div>

            {/* Quick Copy Action */}
            <div className="flex items-center gap-3 pt-3">
              <button
                type="button"
                onClick={handleCopyPhone}
                className="font-mono text-[11px] uppercase tracking-widest text-paper-dim/80 hover:text-paper transition-colors flex items-center gap-1.5 focus:outline-none"
              >
                <span>{copiedPhone ? "✓ Copied phone number" : "Click to copy number"}</span>
              </button>
            </div>
          </div>

          {/* Secondary Direct Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10 border-t border-line/60">
            {/* Direct Email */}
            <div className="space-y-3">
              <span className="eyebrow text-paper-dim text-[11px]">Direct Email</span>
              <p className="font-display text-xl text-paper font-light break-all sm:break-normal">{email}</p>
              <div className="pt-1">
                <MagneticButton
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-2.5 border border-line bg-paper/5 px-4 py-2 text-xs uppercase tracking-[0.14em] font-medium text-paper transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                >
                  <FiMail className="text-sm text-accent group-hover:scale-110 transition-transform duration-200" />
                  <span>Send an Email</span>
                  <span className="text-accent group-hover:translate-x-1 transition-transform duration-200">
                    ↗
                  </span>
                </MagneticButton>
              </div>
            </div>

            {/* Studio Location */}
            <div className="space-y-3">
              <span className="eyebrow text-paper-dim text-[11px]">Studio Location</span>
              <p className="font-display text-xl text-paper font-light">Dombivli, Mumbai</p>
              <p className="text-xs text-paper-dim font-mono uppercase tracking-wider">
                IST (UTC+5:30) • Operating Worldwide
              </p>
            </div>

            {/* Turnaround & Inquiries */}
            <div className="space-y-3">
              <span className="eyebrow text-paper-dim text-[11px]">Response Time</span>
              <p className="font-display text-xl text-paper font-light">&lt; 24 Hour Replies</p>
              <p className="text-xs text-paper-dim font-mono uppercase tracking-wider">
                Direct Line to Lead Editor &amp; Colorist
              </p>
            </div>
          </div>
        </RevealWrapper>

        {/* Bottom hairline separator and Final Footer Row */}
        <div className="border-t border-line/70 pt-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
            {/* Left: Wordmark / Logo + Copyright line */}
            <div className="space-y-3">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="group inline-flex items-center transition-all duration-300 select-none cursor-pointer"
                aria-label="DO Originals Home"
              >
                <Image
                  src="/logo-cutout.png"
                  alt="DO Originals"
                  width={140}
                  height={106}
                  className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="font-mono text-[11px] uppercase tracking-wider text-paper-dim/80">
                © {new Date().getFullYear()} DO Originals. All rights reserved.
              </p>
            </div>

            {/* Right: Instagram + YouTube with react-icons */}
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-body text-xs sm:text-sm uppercase tracking-[0.16em] text-paper-dim transition-colors duration-200 hover:text-paper relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                aria-label="Follow DO Originals on Instagram"
              >
                <FaInstagram className="text-base text-paper-dim transition-all duration-300 group-hover:text-accent group-hover:scale-115" />
                <span>Instagram</span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-body text-xs sm:text-sm uppercase tracking-[0.16em] text-paper-dim transition-colors duration-200 hover:text-paper relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                aria-label="Subscribe to DO Originals on YouTube"
              >
                <FaYoutube className="text-base text-paper-dim transition-all duration-300 group-hover:text-accent group-hover:scale-115" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
