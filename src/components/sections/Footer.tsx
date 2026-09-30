"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = "vikrant4334@gmail.com";
  const whatsappNumber = "+91 98679 04334";
  const whatsappLink = "https://wa.me/919867904334?text=Hi%20Vikrant,%20I'm%20an%20influencer%20interested%20in%20collaborating%20on%20content";

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
              <span className="eyebrow text-accent">03 / FOR INFLUENCERS &amp; CREATORS</span>
              <span className="h-px w-8 bg-accent/40" />
            </div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/[0.03] px-3.5 py-1.5 backdrop-blur-sm self-start sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-paper-dim">
                Accepting Select Influencers &amp; Creators
              </span>
            </div>
          </div>

          {/* Big Editorial Headline tailored for influencers */}
          <div className="max-w-4xl space-y-4">
            <h2 className="headline-display text-paper">
              Ready to scale your influence &amp;{" "}
              <span className="italic font-light text-paper">dominate the feed?</span>
            </h2>
            <p className="text-base sm:text-lg text-paper-dim max-w-2xl font-light leading-relaxed">
              You focus on filming and being the face of your brand. I&apos;ll handle the storytelling, high-retention cuts, dynamic sound design, and viral pacing that keep viewers hooked and boost your followers. Reach out directly—let&apos;s talk about your channel.
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
            <div className="space-y-2">
              <span className="eyebrow text-paper-dim text-[11px]">Direct Email</span>
              <a
                href={`mailto:${email}`}
                className="font-display text-xl sm:text-2xl text-paper font-light break-all sm:break-normal hover:text-accent transition-colors block"
              >
                {email}
              </a>
              <p className="text-xs text-paper-dim font-mono uppercase tracking-wider">
                Direct Line • No Forms, No Delay
              </p>
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
                Direct Line to Vikrant • Built for Creators
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
                aria-label="Vikrant Nalawade Home"
              >
                <Image
                  src="/logo-vikrant.png"
                  alt="Vikrant Nalawade"
                  width={180}
                  height={118}
                  className="h-[36px] sm:h-[42px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <p className="font-mono text-[11px] uppercase tracking-wider text-paper-dim/80">
                © {new Date().getFullYear()} Vikrant Nalawade. All rights reserved.
              </p>
            </div>

            {/* Right: Instagram */}
            <div className="flex items-center gap-6 sm:gap-8">
              <a
                href="https://www.instagram.com/thatjournoguy?stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-body text-xs sm:text-sm uppercase tracking-[0.16em] text-paper-dim transition-colors duration-200 hover:text-paper relative py-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                aria-label="Follow Vikrant Nalawade on Instagram (@thatjournoguy)"
              >
                <FaInstagram className="text-base text-paper-dim transition-all duration-300 group-hover:text-accent group-hover:scale-115" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
