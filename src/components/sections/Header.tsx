"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { FaWhatsapp } from "react-icons/fa6";

const NAV_LINKS = [
  { name: "Work", href: "#work", index: "01" },
  { name: "Reels", href: "#reels", index: "02" },
  { name: "About", href: "#about", index: "03" },
  { name: "Contact", href: "#contact", index: "04" },
];

const WHATSAPP_LINK =
  "https://wa.me/919867904334?text=Hi%20DO%20Originals,%20I'm%20interested%20in%20discussing%20a%20video%20project";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth continuous transition from transparent to solid translucent ink with hairline border
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(11, 11, 12, 0)", "rgba(11, 11, 12, 0.85)"]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 80],
    ["blur(0px)", "blur(16px)"]
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.header
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 w-full transition-colors will-change-transform"
      >
        <div className="portfolio-grid-container flex items-center justify-between py-5 md:py-6">
          {/* Official DO Originals Transparent Logo (No white background, increased height) */}
          <Link
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center transition-transform duration-300 hover:scale-105 select-none cursor-pointer"
            aria-label="DO Originals Home"
          >
            <Image
              src="/logo-cutout.png"
              alt="DO Originals"
              width={200}
              height={151}
              priority
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-all duration-300 drop-shadow-[0_2px_16px_rgba(214,17,108,0.25)]"
            />
          </Link>

          {/* Desktop Navigation Links inside Transparent Capsule */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full border border-line bg-paper/[0.03] backdrop-blur-md px-3.5 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-xs lg:text-sm uppercase tracking-[0.14em] text-paper-dim px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-accent/10 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Far Right: Compact MagneticButton WhatsApp CTA (Desktop) + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-block">
              <MagneticButton
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group eyebrow inline-flex items-center gap-2 rounded-full border border-line bg-paper/5 px-4 py-2 text-paper transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-paper"
              >
                <FaWhatsapp className="text-sm text-emerald-400 transition-transform duration-200 group-hover:scale-115" />
                <span>Let&apos;s talk</span>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden text-paper focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 7.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                className="block h-[1.5px] w-6 bg-paper origin-center"
              />
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-[1.5px] w-6 bg-paper origin-center"
              />
              <motion.span
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: -7.5 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.25, ease: [0.65, 0, 0.35, 1] }}
                className="block h-[1.5px] w-6 bg-paper origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink px-6 pt-28 pb-10 md:hidden"
          >
            {/* Top watermark background texture */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,17,108,0.08),transparent_50%)]" />

            {/* Nav links in large Fraunces display typography */}
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="relative z-10 flex flex-col space-y-6 pt-4"
            >
              {/* Brand Cue in Mobile Drawer (Transparent Logo) */}
              <div className="flex items-center pb-3 border-b border-line/30 mb-2">
                <Image
                  src="/logo-cutout.png"
                  alt="DO Originals Logo"
                  width={140}
                  height={106}
                  className="h-12 w-auto object-contain drop-shadow-[0_2px_12px_rgba(214,17,108,0.3)]"
                />
              </div>

              <span className="eyebrow text-paper-dim">Navigation</span>

              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
                    },
                  }}
                >
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-baseline gap-4 py-1"
                  >
                    <span className="eyebrow text-accent font-mono">
                      {link.index}
                    </span>
                    <span className="font-display text-4xl sm:text-5xl font-light tracking-tight text-paper transition-all duration-300 group-hover:italic group-hover:text-accent group-hover:translate-x-2">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
            </motion.nav>

            {/* Mobile Footer / Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="relative z-10 space-y-6 border-t border-line pt-6"
            >
              <div className="space-y-1">
                <span className="eyebrow text-paper-dim">Direct Inquiry</span>
                <a
                  href="mailto:dooriginals08@gmail.com"
                  className="block font-body text-sm text-paper hover:text-accent transition-colors"
                >
                  dooriginals08@gmail.com
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-paper-dim hover:text-emerald-400 transition-colors"
                >
                  <FaWhatsapp className="text-xs text-emerald-400" />
                  <span>+91 98679 04334</span>
                </a>
              </div>

              <div className="pt-2">
                <MagneticButton
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-full border border-emerald-500/50 bg-emerald-500/10 py-3.5 text-center text-xs uppercase tracking-[0.15em] font-medium text-paper transition-colors hover:bg-emerald-500/20"
                >
                  <FaWhatsapp className="text-base text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
