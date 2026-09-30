"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_LINK =
  "https://wa.me/919867904334?text=Hi%20DO%20Originals,%20I'm%20interested%20in%20discussing%20a%20video%20project";

const HEADLINE_LINES = [
  "What Vikrant does",
  "for you and",
  "your business.",
];

const emptySubscribe = () => () => {};

export default function Hero() {
  const isClient = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  // Scroll cue fades out after ~600px of scroll
  const scrollCueOpacity = useTransform(scrollY, [0, 200, 600], [1, 0.7, 0]);
  const scrollCueY = useTransform(scrollY, [0, 600], [0, 30]);

  return (
    <section
      id="top"
      suppressHydrationWarning
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-ink pt-36 sm:pt-40 md:pt-48 lg:pt-44 pb-20 md:pb-24"
    >
      {/* Background Video: High Opacity with Subtle Soft Blur */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1.05, 1.0, 1.05],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-full w-full will-change-transform"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1920&q=80"
            className="h-full w-full object-cover filter blur-[3px] scale-105 opacity-70 md:opacity-80"
          >
            <source src="/reel.mp4" type="video/mp4" />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-cinematographer-operating-a-camera-with-a-monitor-40098-large.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Ambient Dark Gradient Overlays - Balanced for punchy visibility & text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* Main Composition: Left Content + Right Phone Reel Showcase */}
      <div className="portfolio-grid-container relative z-10 w-full pt-6 pb-8 sm:pt-10 sm:pb-12 lg:pt-12 lg:pb-16">
        <div className="grid grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Headline & CTA (spans 7 cols) */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7 space-y-6 md:space-y-8">

            {/* Staggered Clip-Path Wipe Headline (Animates on Page Load) */}
            <h1 className="headline-display text-paper">
              {HEADLINE_LINES.map((line, idx) => (
                <span key={idx} className="block overflow-hidden py-0.5">
                  <motion.span
                    suppressHydrationWarning
                    initial={
                      !isClient || shouldReduceMotion
                        ? { opacity: 0 }
                        : { clipPath: "inset(100% 0% 0% 0%)", y: "30%", opacity: 0 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { clipPath: "inset(0% 0% 0% 0%)", y: "0%", opacity: 1 }
                    }
                    transition={{
                      duration: 0.9,
                      delay: 0.2 + idx * 0.1,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                    className={`block ${
                      idx === 2 ? "italic font-light text-paper" : "font-normal"
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* One-line Supporting Copy */}
            <motion.p
              suppressHydrationWarning
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="max-w-md text-base sm:text-lg text-paper-dim leading-relaxed"
            >
              High-impact reels and promotional videos that help local businesses build trust, attract customers, and grow sales.
            </motion.p>

            {/* WhatsApp MagneticButton CTA */}
            <motion.div
              suppressHydrationWarning
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.65, 0, 0.35, 1] }}
              className="pt-2"
            >
              <MagneticButton
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border border-paper/40 bg-paper/5 px-7 py-3.5 text-xs sm:text-sm uppercase tracking-[0.16em] font-medium text-paper transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-paper"
              >
                <FaWhatsapp className="text-base sm:text-lg text-emerald-400 group-hover:scale-115 transition-transform duration-200" />
                <span>Chat on WhatsApp</span>
                <span className="text-emerald-400 group-hover:translate-x-1 transition-transform duration-200">
                  ↗
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Hero Image Showcase */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              suppressHydrationWarning
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.65, 0, 0.35, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-[310px] md:max-w-[330px] lg:max-w-[360px]"
            >
              {/* Subtle ambient backlight glow matching photo tones */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-accent/20 blur-2xl opacity-40 -z-10 animate-pulse duration-[4000ms]" />

              {/* White Framed Vertical Image Container */}
              <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] sm:rounded-[2.3rem] border-[4px] border-white/90 bg-ink p-0.5 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9),0_0_25px_rgba(255,255,255,0.12)] select-none transition-all duration-300 hover:border-white hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.95),0_0_35px_rgba(214,17,108,0.25)]">
                {/* Inner Image Clipping Area */}
                <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] sm:rounded-[2rem] bg-black">
                  <Image
                    src="/hero_section.png"
                    alt="Vikrant Nalawade on set with cinema camera"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 310px, (max-width: 1024px) 330px, 360px"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  {/* Subtle dark bottom gradient for visual contrast & depth */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Clean floating badges */}
                  <div className="pointer-events-none absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] tracking-wide font-medium text-white/90">
                      Vikrant Nalawade
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/90 backdrop-blur-md text-[10px] uppercase tracking-wider font-mono text-white font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      On Set
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Center Scroll Cue (Fades out past ~600px of scroll) */}
      <motion.div
        suppressHydrationWarning
        style={{
          opacity: scrollCueOpacity,
          y: scrollCueY,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5 pointer-events-none select-none"
      >
        <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-paper-dim/70">
          Scroll
        </span>
        <div className="relative h-10 w-[1px] bg-line overflow-hidden">
          <motion.span
            animate={{
              y: ["-100%", "200%"],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="absolute top-0 left-0 w-full h-4 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
