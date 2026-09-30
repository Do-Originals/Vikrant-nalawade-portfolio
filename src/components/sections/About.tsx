"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { FaWhatsapp } from "react-icons/fa6";
import {
  FiMail,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiTrendingUp,
  FiAward,
  FiClock,
  FiCheckCircle,
  FiArrowUpRight,
  FiSliders,
  FiFilm,
  FiLayers,
  FiVolume2,
} from "react-icons/fi";

const DISCIPLINE_ICONS = {
  film: FiFilm,
  sliders: FiSliders,
  layers: FiLayers,
  volume: FiVolume2,
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline: string;
  specialty: string;
  bio: string;
  longBio: string;
  image: string;
  objectPosition?: string;
  tools: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  workflows: string[];
  signatureStyle: string;
  disciplineIcon: "film" | "sliders" | "layers" | "volume";
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "vikrant-nalawade",
    name: "Vikrant Nalawade",
    role: "Creative Director & Visual Lead",
    tagline: "Director & Visual Architect",
    specialty: "Visual Direction • Cinematic Framing • Narrative Architecture",
    bio: "Architect of the visual identity. Curates mood, framing, and narrative tone to ensure every project commands visual authority and emotional gravitas.",
    longBio:
      "With over half a decade directing visual narratives for high-profile creators and forward-thinking brands, Vikrant oversees the creative integrity of DO Originals. From the initial storyboard and treatment deck to the final color grading approval, he ensures that every frame communicates intention, depth, and cinematic sophistication.",
    image: "/team/vikrant.jpg",
    objectPosition: "object-top",
    tools: ["DaVinci Resolve Studio", "Sony FX Cinema", "Premiere Pro", "Lightroom"],
    metrics: [
      { label: "Views Directed", value: "100M+" },
      { label: "Visual Treatments", value: "350+" },
      { label: "Craft Experience", value: "5+ Yrs" },
    ],
    workflows: [
      "Treatment deck and visual tone curation",
      "Cinematic framing & lighting continuity audits",
      "Scene pacing analysis & narrative compression",
      "Executive directorial sign-off on final deliverables",
    ],
    signatureStyle: "Moody contrast ratios, deliberate stillness, and high-impact framing.",
    disciplineIcon: "film",
  },
  {
    id: "omkar-potphode",
    name: "Omkar Potphode",
    role: "Founder & Lead Editor",
    tagline: "Retention Architect",
    specialty: "Editorial Pacing • Retention Architecture • Micro-Cutting",
    bio: "Pioneers retention-obsessed cuts engineered to seize attention in the opening 2 seconds and sustain viewer momentum until the closing frame.",
    longBio:
      "Omkar founded DO Originals with a single obsession: eliminating timeline bloat and creating footage that viewers physically cannot click away from. Having scaled 150+ creator channels and corporate brand campaigns, Omkar dissects audience drop-off points down to the single frame, orchestrating cuts that convert casual scrollers into loyal followers.",
    image: "/team/omkar.jpg",
    objectPosition: "object-center",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Descript"],
    metrics: [
      { label: "Avg 3s Retention", value: "85%+" },
      { label: "Brands Scaled", value: "150+" },
      { label: "Masterclass Students", value: "4,000+" },
    ],
    workflows: [
      "2-Second Visual Hook engineering",
      "Dynamic timeline micro-pacing & breathing points",
      "Audience retention curve diagnostics",
      "Cross-platform aspect ratio optimization (9:16 & 16:9)",
    ],
    signatureStyle: "Aggressive rhythmic cuts paired with natural comedic and dramatic timing.",
    disciplineIcon: "sliders",
  },
  {
    id: "ravi-thorat",
    name: "Ravi Thorat",
    role: "Senior Motion Lead & 3D Artist",
    tagline: "CGI & Motion Specialist",
    specialty: "3D Motion Graphics • Kinetic Typography • VFX Compositing",
    bio: "Transforms static concepts into fluid visual spectacle through bespoke 3D modeling, kinetic typography, and seamless visual effects.",
    longBio:
      "Ravi bridges the live-action world with high-tier digital graphics. Whether sculpting photorealistic 3D product models in Blender or choreographing kinetic typography in After Effects, Ravi creates eye candy that clarifies complex ideas and elevates ordinary productions into broadcast-grade masterworks.",
    image: "/team/ravi.jpg",
    objectPosition: "object-center",
    tools: ["After Effects", "Blender 3D", "Cinema 4D", "Illustrator"],
    metrics: [
      { label: "Custom 3D Assets", value: "600+" },
      { label: "Zero-Drop Transitions", value: "99.8%" },
      { label: "VFX Production", value: "4+ Yrs" },
    ],
    workflows: [
      "Spatial typography & kinetic kinetic layout systems",
      "3D camera tracking & live-action CGI integration",
      "Seamless invisible transitions & match-cutting",
      "Procedural particle simulations and visual overlays",
    ],
    signatureStyle: "Weightless 3D camera sweeps and hyper-snappy kinetic typography.",
    disciplineIcon: "layers",
  },
  {
    id: "hitesh-mhatre",
    name: "Hitesh Mhatre",
    role: "Sound & Color Architect",
    tagline: "Atmospheric Finisher",
    specialty: "Tactile Foley • ACES Color Science • Audio Mastering",
    bio: "Crafts sensory immersion. Pairs broadcast-calibrated ACES color grading and Kodak film emulation with tactile, layered spatial audio design.",
    longBio:
      "The edit is only half the battle; how it sounds and how its tones evoke emotion determines whether it lingers. Hitesh treats sound and color as an inseparable visceral pair. Utilizing ACES color-managed pipelines and custom analog film print LUTs, alongside surgical audio cleanup and punchy sub-bass design, he gives DO Originals its unmistakable polish.",
    image: "/team/hitesh.jpg",
    objectPosition: "object-center",
    tools: ["DaVinci Resolve Studio", "Pro Tools", "iZotope RX", "Dehancer Film"],
    metrics: [
      { label: "Loudness Compliant", value: "-14 LUFS" },
      { label: "ACES Workflow", value: "100%" },
      { label: "Custom Film Profiles", value: "25+" },
    ],
    workflows: [
      "ACEScc color space transform & scene balance",
      "Custom Kodak 2383 & Fuji 3513 print emulation",
      "Multi-track tactile foley, whooshes, and sub-impacts",
      "Dialogue isolation, spectral de-noising & mastering",
    ],
    signatureStyle: "Warm analog film grain, deep shadow roll-offs, and chest-thumping sound design.",
    disciplineIcon: "volume",
  },
];

const STUDIO_METRICS = [
  {
    label: "Cumulative Views",
    value: "100M+",
    sub: "Generated across creator & brand campaigns",
    icon: FiEye,
  },
  {
    label: "Projects Delivered",
    value: "450+",
    sub: "Short-form reels, podcasts & commercials",
    icon: FiAward,
  },
  {
    label: "Avg Audience Retention",
    value: "78%",
    sub: "Sustained through editorial pacing",
    icon: FiTrendingUp,
  },
  {
    label: "First-Cut Delivery",
    value: "24-48h",
    sub: "Streamlined high-efficiency turnaround",
    icon: FiClock,
  },
];

const PIPELINE_STAGES = [
  {
    step: "01",
    title: "Vision & Creative Direction",
    lead: "Vikrant Nalawade",
    desc: "Script breakdown, treatment deck alignment, framing criteria, and establishing the visual pacing blueprint before touching the timeline.",
  },
  {
    step: "02",
    title: "Timeline & Retention Architecture",
    lead: "Omkar Potphode",
    desc: "Aggressive micro-cutting, assembling high-impact visual hooks in the first 2 seconds, and eliminating narrative drag to maximize watch time.",
  },
  {
    step: "03",
    title: "Kinetic Motion & 3D VFX",
    lead: "Ravi Thorat",
    desc: "Infusing custom 3D models, fluid kinetic typography, custom tracking markers, and invisible transitions that maintain high sensory engagement.",
  },
  {
    step: "04",
    title: "Sensory Sound & ACES Color",
    lead: "Hitesh Mhatre",
    desc: "Grading inside calibrated ACES color science with film print emulations, synchronized with custom tactile foley, riser hits, and broadcast mastering.",
  },
];

export default function About() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMember(null);
      } else if (e.key === "ArrowRight" && selectedMember) {
        const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedMember.id);
        const nextIndex = (currentIndex + 1) % TEAM_MEMBERS.length;
        setSelectedMember(TEAM_MEMBERS[nextIndex]);
      } else if (e.key === "ArrowLeft" && selectedMember) {
        const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedMember.id);
        const prevIndex = (currentIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
        setSelectedMember(TEAM_MEMBERS[prevIndex]);
      }
    };

    if (selectedMember) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMember]);

  const handleNextMember = () => {
    if (!selectedMember) return;
    const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedMember.id);
    const nextIndex = (currentIndex + 1) % TEAM_MEMBERS.length;
    setSelectedMember(TEAM_MEMBERS[nextIndex]);
  };

  const handlePrevMember = () => {
    if (!selectedMember) return;
    const currentIndex = TEAM_MEMBERS.findIndex((m) => m.id === selectedMember.id);
    const prevIndex = (currentIndex - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length;
    setSelectedMember(TEAM_MEMBERS[prevIndex]);
  };

  return (
    <section
      id="about"
      suppressHydrationWarning
      className="relative w-full border-b border-line py-20 md:py-32 bg-ink overflow-hidden"
    >
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-full max-w-5xl rounded-full bg-accent/5 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-32 right-10 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />

      <div className="portfolio-grid-container relative z-10 space-y-16 md:space-y-24">
        {/* Section Header: Eyebrow, Heading, Subheading & Quick Contact */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4 border-b border-line/60">
          <RevealWrapper className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="eyebrow text-accent">03 / THE TEAM & POST PIPELINE</span>
              <span className="h-px w-8 bg-accent/40" />
            </div>

            <h2 className="headline-display text-paper">
              The minds behind the{" "}
              <span className="italic font-light text-paper">cut.</span>
            </h2>

            <p className="text-base sm:text-lg text-paper-dim font-light leading-relaxed max-w-2xl">
              Based in Dombivli, Mumbai. We are a specialized post-production collective uniting visual direction, retention-first pacing, 3D motion design, and broadcast audio-color science.
            </p>
          </RevealWrapper>

          {/* Quick Contact & Studio Status */}
          <RevealWrapper delay={0.1} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <a
              href="mailto:dooriginals08@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
              aria-label="Email DO Originals"
            >
              <FiMail className="text-sm text-accent group-hover:scale-110 transition-transform duration-200" />
              <span>dooriginals08@gmail.com</span>
            </a>

            <a
              href="https://wa.me/919867904334?text=Hi%20DO%20Originals,%20I'm%20interested%20in%20working%20together"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-wider text-paper transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
              aria-label="WhatsApp DO Originals"
            >
              <FaWhatsapp className="text-sm text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
              <span>+91 98679 04334</span>
            </a>
          </RevealWrapper>
        </div>

        {/* Studio Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STUDIO_METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <RevealWrapper
                key={metric.label}
                delay={idx * 0.05}
                className="group relative rounded-2xl border border-line/80 bg-paper/[0.02] p-5 sm:p-6 transition-all duration-300 hover:border-accent/40 hover:bg-paper/[0.04]"
              >
                <div className="flex items-center justify-between text-paper-dim mb-3">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent/90">
                    {"0" + (idx + 1) + " // METRIC"}
                  </span>
                  <Icon className="text-base text-paper-dim/60 group-hover:text-accent transition-colors duration-200" />
                </div>
                <div className="font-display text-2xl sm:text-4xl font-bold text-paper tracking-tight mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-paper mb-1">
                  {metric.label}
                </div>
                <p className="text-[11px] sm:text-xs text-paper-dim font-light leading-snug">
                  {metric.sub}
                </p>
              </RevealWrapper>
            );
          })}
        </div>

        {/* In-Depth 4 Team Cards Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="eyebrow text-paper-dim text-xs">
              CORE SPECIALISTS • TAP CARD FOR FULL DOSSIER
            </span>
            <span className="font-mono text-[11px] text-accent tracking-widest uppercase hidden sm:inline-block">
              [ 4 PRINCIPALS ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {TEAM_MEMBERS.map((member, idx) => {
              const DisciplineIcon = DISCIPLINE_ICONS[member.disciplineIcon];
              return (
                <RevealWrapper
                  key={member.id}
                  delay={idx * 0.08}
                  className="group relative flex flex-col justify-between rounded-3xl border border-line bg-paper/[0.02] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-accent/50 hover:bg-paper/[0.04] hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(214,17,108,0.18)] cursor-pointer"
                  onClick={() => setSelectedMember(member)}
                >
                  <div>
                    {/* Top Bar on Card: Number & Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-accent font-semibold tracking-wider">
                        0{idx + 1}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-paper/[0.03] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-paper-dim group-hover:text-paper group-hover:border-accent/40 transition-colors">
                        <DisciplineIcon className="text-accent text-xs" />
                        <span>{member.tagline}</span>
                      </span>
                    </div>

                  {/* 3:4 Instagram Portrait Ratio Frame (960x1280) */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line/70 bg-paper/[0.04] shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className={`object-cover ${member.objectPosition || "object-center"} transition-transform duration-700 ease-out group-hover:scale-105`}
                      priority
                    />
                    {/* Hover Vignette Overlay with Deep Dive Action */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="w-full flex items-center justify-between text-xs font-mono text-paper bg-ink/80 backdrop-blur-md px-3 py-2 rounded-xl border border-accent/40">
                        <span className="text-accent uppercase tracking-wider">View Full Dossier</span>
                        <FiArrowUpRight className="text-accent text-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Member Name */}
                  <div className="pt-4 pb-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-pink-400 to-accent transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-paper tracking-wide pt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Specialty Bullet */}
                  <p className="text-[11px] sm:text-xs text-accent/90 font-mono tracking-wide py-1.5 line-clamp-1">
                    {member.specialty}
                  </p>

                  {/* Bio Teaser */}
                  <p className="text-xs text-paper-dim font-light leading-relaxed pt-1 pb-3 line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Bottom Tools & Stats Strip */}
                <div className="pt-3 border-t border-line/60 space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {member.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="inline-block rounded-md bg-paper/[0.04] px-2 py-0.5 text-[10px] font-mono text-paper-dim border border-line/50 group-hover:border-line"
                      >
                        {tool}
                      </span>
                    ))}
                    {member.tools.length > 3 && (
                      <span className="inline-block rounded-md bg-paper/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-paper-dim/70 border border-line/40">
                        +{member.tools.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-paper-dim">
                    <span>{member.metrics[0].label}:</span>
                    <span className="text-paper font-bold text-accent">
                      {member.metrics[0].value}
                    </span>
                  </div>
                </div>
              </RevealWrapper>
            );
          })}
          </div>
        </div>

        {/* The 4-Stage Post-Production Pipeline Breakdown */}
        <RevealWrapper className="space-y-8 pt-6 border-t border-line/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="eyebrow text-accent">THE STUDIO WORKFLOW</span>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-paper">
                The 4-stage collaborative pipeline.
              </h3>
              <p className="text-sm sm:text-base text-paper-dim font-light leading-relaxed">
                Raw footage doesn&apos;t just get spliced—it passes through four distinct craft layers to ensure maximum engagement, broadcast audio quality, and seamless color harmony.
              </p>
            </div>
            <div className="font-mono text-xs text-paper-dim/80 border border-line rounded-full px-4 py-2 bg-paper/[0.02]">
              Ingest ➔ Story ➔ Cut ➔ VFX ➔ Finish
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PIPELINE_STAGES.map((stage, idx) => (
              <div
                key={stage.step}
                className="relative rounded-2xl border border-line/70 bg-paper/[0.015] p-6 space-y-4 hover:border-accent/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-accent/80">
                    {stage.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-paper-dim bg-paper/[0.04] px-2.5 py-0.5 rounded-full border border-line/60">
                    Stage {idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display text-lg text-paper font-semibold">
                    {stage.title}
                  </h4>
                  <p className="text-xs font-mono text-accent">
                    Lead: {stage.lead}
                  </p>
                </div>

                <p className="text-xs text-paper-dim leading-relaxed font-light">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>

      {/* In-Depth Interactive Modal / Dossier */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-ink/80 backdrop-blur-xl"
              onClick={() => setSelectedMember(null)}
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-line/80 bg-ink p-6 sm:p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.8)] custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Controls: Prev / Next / Close */}
              <div className="flex items-center justify-between pb-6 border-b border-line/60">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevMember}
                    className="p-2 rounded-full border border-line bg-paper/[0.03] text-paper hover:border-accent hover:text-accent transition-colors"
                    aria-label="Previous Team Member"
                  >
                    <FiChevronLeft className="text-lg" />
                  </button>
                  <button
                    onClick={handleNextMember}
                    className="p-2 rounded-full border border-line bg-paper/[0.03] text-paper hover:border-accent hover:text-accent transition-colors"
                    aria-label="Next Team Member"
                  >
                    <FiChevronRight className="text-lg" />
                  </button>
                  <span className="font-mono text-xs text-paper-dim ml-2">
                    {TEAM_MEMBERS.findIndex((m) => m.id === selectedMember.id) + 1} of{" "}
                    {TEAM_MEMBERS.length}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-2 rounded-full border border-line bg-paper/[0.03] text-paper hover:border-accent hover:text-accent transition-colors"
                  aria-label="Close Dossier"
                >
                  <FiX className="text-xl" />
                </button>
              </div>

              {/* Main Modal Body */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6">
                {/* Left Column: Portrait & Quick Stats */}
                <div className="md:col-span-5 space-y-6">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line shadow-2xl">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className={`object-cover ${selectedMember.objectPosition || "object-center"}`}
                    />
                    <div className="absolute top-3 left-3 bg-ink/80 backdrop-blur-md px-3 py-1 rounded-full border border-line/60 font-mono text-[10px] uppercase tracking-wider text-accent flex items-center gap-1.5">
                      {React.createElement(DISCIPLINE_ICONS[selectedMember.disciplineIcon], { className: "text-accent text-xs" })}
                      <span>{selectedMember.tagline}</span>
                    </div>
                  </div>

                  {/* Impact Numbers */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl border border-line/60 bg-paper/[0.02]">
                    {selectedMember.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-1.5">
                        <div className="font-display text-lg font-bold text-accent">
                          {metric.value}
                        </div>
                        <div className="text-[10px] font-mono text-paper-dim uppercase tracking-wider">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Direct Inquiry CTA */}
                  <a
                    href={`https://wa.me/919867904334?text=Hi%20DO%20Originals,%20I'd%20like%20to%20collaborate%20with%20${encodeURIComponent(
                      selectedMember.name
                    )}%20on%20a%20project`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-accent bg-accent/10 px-4 py-3 font-mono text-xs uppercase tracking-wider text-paper transition-all duration-300 hover:bg-accent hover:text-white"
                  >
                    <FaWhatsapp className="text-sm" />
                    <span>Inquire with {selectedMember.name.split(" ")[0]}</span>
                  </a>
                </div>

                {/* Right Column: In-depth Dossier Details */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">
                      PRINCIPAL PROFILE
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold text-paper mt-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-sm sm:text-base text-accent font-medium mt-1">
                      {selectedMember.role}
                    </p>
                    <p className="text-xs font-mono text-paper-dim/80 mt-1">
                      {selectedMember.specialty}
                    </p>
                  </div>

                  {/* Deep Dive Bio */}
                  <div className="space-y-3 text-sm sm:text-base text-paper-dim font-light leading-relaxed border-t border-line/60 pt-4">
                    <p>{selectedMember.longBio}</p>
                    <div className="p-3.5 rounded-xl border border-accent/20 bg-accent/[0.04]">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-accent block mb-1">
                        Signature Aesthetic & Style:
                      </span>
                      <p className="text-xs sm:text-sm text-paper italic">
                        &quot;{selectedMember.signatureStyle}&quot;
                      </p>
                    </div>
                  </div>

                  {/* Core Workflows */}
                  <div className="space-y-3 pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-paper font-semibold block">
                      Key Timeline Contributions & Workflows:
                    </span>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedMember.workflows.map((wf) => (
                        <div key={wf} className="flex items-start gap-2.5 text-xs sm:text-sm text-paper-dim">
                          <FiCheckCircle className="text-accent text-sm shrink-0 mt-0.5" />
                          <span>{wf}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hardware & Software Toolbelt */}
                  <div className="space-y-2.5 pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-paper font-semibold block">
                      Production & Post Suite:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-line bg-paper/[0.04] px-3 py-1 font-mono text-xs text-paper"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
