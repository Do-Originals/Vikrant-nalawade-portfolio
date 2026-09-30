"use client";

import React from "react";
import Image from "next/image";
import RevealWrapper from "@/components/ui/RevealWrapper";

interface ClientLogo {
  id: string;
  name: string;
  logoSrc: string;
}

const CLIENTS: ClientLogo[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    logoSrc: "/clients/chatgpt_client.png",
  },
  {
    id: "arok",
    name: "Arok",
    logoSrc: "/clients/Arok_client.webp",
  },
  {
    id: "knox",
    name: "Knox",
    logoSrc: "/clients/knox_client.webp",
  },
  {
    id: "italian-channel",
    name: "Italian Channel",
    logoSrc: "/clients/Italian_channel_client.webp",
  },
  {
    id: "rishab-world",
    name: "Rishab World",
    logoSrc: "/clients/rishab_world_client.png",
  },
  {
    id: "vercelli",
    name: "Vercelli",
    logoSrc: "/clients/vercelli_client.webp",
  },
  {
    id: "dandj",
    name: "D&J",
    logoSrc: "/clients/dandj_client.webp",
  },
];

export default function ClientMarquee() {
  // Seamless loop by repeating the list for continuous -50% translateX marquee
  const base = [...CLIENTS, ...CLIENTS];
  const marqueeList = [...base, ...base];

  return (
    <section className="relative w-full border-y border-white/10 py-20 md:py-28 bg-gradient-to-b from-[#18191e] via-[#22242c] to-[#18191e] overflow-hidden">
      {/* Refined Dark Gray Ambient Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(140,145,165,0.12),transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_50%,rgba(255,255,255,0.035),transparent_95%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <RevealWrapper>
        {/* Centered Eyebrow Label with Accents */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-2.5 mb-12 sm:mb-14 px-4 text-center">
          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-accent/50" />
            <span className="eyebrow text-accent font-mono text-xs sm:text-sm tracking-[0.3em] uppercase">
              Trusted By Creators & Brands
            </span>
            <span className="h-px w-6 bg-accent/50" />
          </div>
          <p className="text-xs sm:text-sm text-paper-dim/70 font-light tracking-wide max-w-sm">
            Selected channels, founders, and companies we produce for
          </p>
        </div>

        {/* Edge-to-Edge Continuous Marquee Container with Gradient Mask */}
        <div className="relative w-full overflow-hidden mask-marquee py-4">
          <div className="animate-marquee items-center gap-16 sm:gap-24 lg:gap-32 py-6">
            {marqueeList.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="group flex items-center justify-center shrink-0 cursor-default select-none px-6 sm:px-10 py-3 transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={client.logoSrc}
                  alt={client.name}
                  width={380}
                  height={128}
                  className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] object-contain opacity-90 brightness-105 contrast-110 drop-shadow-[0_10px_24px_rgba(0,0,0,0.7)] transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 group-hover:drop-shadow-[0_12px_28px_rgba(214,17,108,0.35)]"
                />
              </div>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
