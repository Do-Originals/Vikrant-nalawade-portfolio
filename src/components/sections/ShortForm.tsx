"use client";

import React, { useRef, useState, useEffect } from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaVolumeHigh, FaVolumeXmark, FaPlay } from "react-icons/fa6";

interface ReelItem {
  id: string;
  category: "Politics" | "Face" | "Info";
  categoryCode: string;
  title: string;
  hook: string;
  metrics: string;
  duration: string;
  videoSrc: string;
  fallbackSrc: string;
  poster: string;
  startOffset?: number;
}

const REELS: ReelItem[] = [
  {
    id: "politics-1",
    category: "Politics",
    categoryCode: "01",
    title: "Election Momentum & Rhetoric",
    hook: "Punchy ideological contrast and sound design built to capture swing voters in 3 seconds.",
    metrics: "2.4M Views",
    duration: "0:35",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video_fu8hyn.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video_fu8hyn.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_1,w_800,q_auto,f_auto/politics_video_fu8hyn.jpg",
    startOffset: 1,
  },
  {
    id: "politics-2",
    category: "Politics",
    categoryCode: "02",
    title: "Rally Breakdown & Crowd Pulse",
    hook: "High-octane rally cuts synced to crowd reaction surges and hard-hitting sound effects.",
    metrics: "1.8M Views",
    duration: "0:30",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video1_najt9y.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video1_najt9y.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/politics_video1_najt9y.jpg",
  },
  {
    id: "politics-3",
    category: "Politics",
    categoryCode: "03",
    title: "Campaign Surge & Strategic Narrative",
    hook: "High-impact narrative editing with relentless pacing, audio design, and broadcast color grading.",
    metrics: "2.7M Views",
    duration: "0:36",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQNTNy7hTceCtyA3s0l1Rm-OFlMcStC2Lej8O9C-xBaiBshPWdjl7xvded-371R_19sBtbRZPyn-nvXB9o7hN6JXRRfGb6a81Vaxhe4_kcscbp.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQNTNy7hTceCtyA3s0l1Rm-OFlMcStC2Lej8O9C-xBaiBshPWdjl7xvded-371R_19sBtbRZPyn-nvXB9o7hN6JXRRfGb6a81Vaxhe4_kcscbp.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/AQNTNy7hTceCtyA3s0l1Rm-OFlMcStC2Lej8O9C-xBaiBshPWdjl7xvded-371R_19sBtbRZPyn-nvXB9o7hN6JXRRfGb6a81Vaxhe4_kcscbp.jpg",
  },
  {
    id: "politics-4",
    category: "Politics",
    categoryCode: "04",
    title: "Public Mandate & Ground Impact",
    hook: "High-energy field coverage cut with dramatic pacing and hard-hitting narrative sound design.",
    metrics: "2.5M Views",
    duration: "0:34",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQN8sC20iC-7dbx_u9KN6W4ztUEvUWupjq8RI6WA4ekdvSJp-MItOyhwKuYg79YWiWJK3_9W1RxtuS9WQeOOvb5RVM2LPFTB40QEqpc_ygpvt4.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQN8sC20iC-7dbx_u9KN6W4ztUEvUWupjq8RI6WA4ekdvSJp-MItOyhwKuYg79YWiWJK3_9W1RxtuS9WQeOOvb5RVM2LPFTB40QEqpc_ygpvt4.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/AQN8sC20iC-7dbx_u9KN6W4ztUEvUWupjq8RI6WA4ekdvSJp-MItOyhwKuYg79YWiWJK3_9W1RxtuS9WQeOOvb5RVM2LPFTB40QEqpc_ygpvt4.jpg",
  },
  {
    id: "politics-5",
    category: "Politics",
    categoryCode: "05",
    title: "Keynote Delivery & Crowd Ignition",
    hook: "Electrifying stage delivery with precision sync, emotional swell, and viral retention pacing.",
    metrics: "3.2M Views",
    duration: "0:38",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQMNsyF4KuLDF9r89tvlCYG_1vPq8Qm1To9iFRCWotuK1ujGKME-pEphrHPaG3zpT7NWfwUhR4mwuL8p-E3URMZuPopgV7_2Xw2hz_k_ybboga.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQMNsyF4KuLDF9r89tvlCYG_1vPq8Qm1To9iFRCWotuK1ujGKME-pEphrHPaG3zpT7NWfwUhR4mwuL8p-E3URMZuPopgV7_2Xw2hz_k_ybboga.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/AQMNsyF4KuLDF9r89tvlCYG_1vPq8Qm1To9iFRCWotuK1ujGKME-pEphrHPaG3zpT7NWfwUhR4mwuL8p-E3URMZuPopgV7_2Xw2hz_k_ybboga.jpg",
  },
  {
    id: "politics-6",
    category: "Politics",
    categoryCode: "06",
    title: "Opposition Critique & Tactical Debate",
    hook: "Fast-tempo point-counterpoint cut crafted for maximum comment debate and shareability.",
    metrics: "2.8M Views",
    duration: "0:42",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQMQ5mES1cLs0lRvVS89jjJnyY-OrHkPr58xwyhsxcpLwgUyqQCcnkHPEPJRN3H9bjcfRmlu8FXsiDJYciaWSP7I3LTgR0TX147toq4_qem4l0.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/AQMQ5mES1cLs0lRvVS89jjJnyY-OrHkPr58xwyhsxcpLwgUyqQCcnkHPEPJRN3H9bjcfRmlu8FXsiDJYciaWSP7I3LTgR0TX147toq4_qem4l0.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/AQMQ5mES1cLs0lRvVS89jjJnyY-OrHkPr58xwyhsxcpLwgUyqQCcnkHPEPJRN3H9bjcfRmlu8FXsiDJYciaWSP7I3LTgR0TX147toq4_qem4l0.jpg",
  },
  {
    id: "politics-7",
    category: "Politics",
    categoryCode: "07",
    title: "Policy Debate & Live Fact-Check",
    hook: "Fast-turnaround kinetic motion graphics deconstructing key manifesto promises.",
    metrics: "3.1M Views",
    duration: "0:45",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video2_qizcpu.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video2_qizcpu.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_1,w_800,q_auto,f_auto/politics_video2_qizcpu.jpg",
    startOffset: 1,
  },
  {
    id: "politics-8",
    category: "Politics",
    categoryCode: "08",
    title: "Leader Profile & Vision Arc",
    hook: "Cinematic portrait storytelling framed to project decisive authority and public resonance.",
    metrics: "2.1M Views",
    duration: "0:40",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video3_jgedmf.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video3_jgedmf.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/politics_video3_jgedmf.jpg",
  },
  {
    id: "politics-9",
    category: "Politics",
    categoryCode: "09",
    title: "Voter Turnout & Grassroots Movement",
    hook: "Dynamic pacing engineered to mobilize regional youth and community voter engagement.",
    metrics: "1.5M Views",
    duration: "0:32",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video4_toyc8q.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video4_toyc8q.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_1,w_800,q_auto,f_auto/politics_video4_toyc8q.jpg",
    startOffset: 1,
  },
  {
    id: "politics-10",
    category: "Politics",
    categoryCode: "10",
    title: "Viral Soundbite & Debate Clash",
    hook: "Unfiltered confrontation editing with kinetic typography driving massive cross-platform shares.",
    metrics: "2.9M Views",
    duration: "0:38",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video5_j4w1u6.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/politics_video5_j4w1u6.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/politics_video5_j4w1u6.jpg",
  },
  {
    id: "face-1",
    category: "Face",
    categoryCode: "01",
    title: "Founder Authority & Direct Hook",
    hook: "Direct-to-camera storytelling crafted for high organic reach and trust.",
    metrics: "1.2M Views",
    duration: "0:45",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video_ucsi91.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video_ucsi91.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/face_video_ucsi91.jpg",
  },
  {
    id: "face-2",
    category: "Face",
    categoryCode: "02",
    title: "Expert Insight & Dynamic Cuts",
    hook: "Punchy visual transitions and kinetic type holding viewer attention.",
    metrics: "850K Views",
    duration: "0:28",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video1_o5ebcr.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video1_o5ebcr.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/face_video1_o5ebcr.jpg",
  },
  {
    id: "face-3",
    category: "Face",
    categoryCode: "03",
    title: "Strategic Storytelling & Trust",
    hook: "Engaging personal brand narrative built to turn viewers into warm leads.",
    metrics: "1.6M Views",
    duration: "0:35",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video2_mve5k9.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video2_mve5k9.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/face_video2_mve5k9.jpg",
  },
  {
    id: "face-4",
    category: "Face",
    categoryCode: "04",
    title: "High-Retention Knowledge Drop",
    hook: "Educational reel framed to establish instant authority in your niche.",
    metrics: "920K Views",
    duration: "0:32",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/Face_video3_tk6xv4.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/Face_video3_tk6xv4.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_1.5,w_800,q_auto,f_auto/Face_video3_tk6xv4.jpg",
    startOffset: 1,
  },
  {
    id: "info-1",
    category: "Info",
    categoryCode: "01",
    title: "Brand Vision & Call to Action",
    hook: "Polished dialogue editing engineered to drive direct customer inquiries.",
    metrics: "2.1M Views",
    duration: "0:52",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video4_f2pu5z.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/face_video4_f2pu5z.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/face_video4_f2pu5z.jpg",
  },
  {
    id: "info-2",
    category: "Info",
    categoryCode: "02",
    title: "Visual Essay & Information Density",
    hook: "Kinetic infographic pacing structured to hold watch time above 110%.",
    metrics: "3.4M Views",
    duration: "0:45",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video_u2qj0f.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video_u2qj0f.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/info_video_u2qj0f.jpg",
  },
  {
    id: "info-3",
    category: "Info",
    categoryCode: "03",
    title: "Data Breakdown & Analytical Cut",
    hook: "Bespoke animated charts and rapid text overlays translating complex insights instantly.",
    metrics: "1.9M Views",
    duration: "0:38",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video1_oc6zs8.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video1_oc6zs8.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/info_video1_oc6zs8.jpg",
  },
  {
    id: "info-4",
    category: "Info",
    categoryCode: "04",
    title: "Deep Dive Systems & Modern Frameworks",
    hook: "Layered sound staging and micro-animations guiding viewers through high-retention concepts.",
    metrics: "2.7M Views",
    duration: "0:42",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video2_cntvyd.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video2_cntvyd.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_1,w_800,q_auto,f_auto/info_video2_cntvyd.jpg",
    startOffset: 1,
  },
  {
    id: "info-5",
    category: "Info",
    categoryCode: "05",
    title: "Narrative Explainer & Fact Breakdown",
    hook: "Documentary-grade investigative rhythm engineered for seamless engagement and retention.",
    metrics: "1.6M Views",
    duration: "0:36",
    videoSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video3_ueawtv.mp4",
    fallbackSrc: "https://res.cloudinary.com/akjttfwt/video/upload/info_video3_ueawtv.mp4",
    poster: "https://res.cloudinary.com/akjttfwt/video/upload/so_0,w_800,q_auto,f_auto/info_video3_ueawtv.jpg",
  },
];

// Short-Form Categories: Politics, Face, Info
const CATEGORIES = ["Politics", "Face", "Info"] as const;

const CATEGORY_COUNTS: Record<string, number> = {
  Politics: REELS.filter((r) => r.category === "Politics").length,
  Face: REELS.filter((r) => r.category === "Face").length,
  Info: REELS.filter((r) => r.category === "Info").length,
};

function ReelTile({ item }: { item: ReelItem }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(cardRef, { amount: 0.6 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Set initial seek to startOffset once metadata loads so video frame isn't black
  const handleLoadedMetadata = () => {
    if (videoRef.current && item.startOffset) {
      videoRef.current.currentTime = item.startOffset;
    }
  };

  // Mobile: Autoplay when tile is >60% in view
  useEffect(() => {
    const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
    if (isTouch && videoRef.current) {
      if (isInView) {
        if (item.startOffset && videoRef.current.currentTime < item.startOffset) {
          videoRef.current.currentTime = item.startOffset;
        }
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView, item.startOffset]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      if (item.startOffset && videoRef.current.currentTime < item.startOffset) {
        videoRef.current.currentTime = item.startOffset;
      }
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = item.startOffset || 0;
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        if (item.startOffset && videoRef.current.currentTime < item.startOffset) {
          videoRef.current.currentTime = item.startOffset;
        }
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <div
      ref={cardRef}
      onClick={togglePlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-[9/16] w-[240px] sm:w-[265px] md:w-[285px] shrink-0 snap-start overflow-hidden rounded-[2rem] sm:rounded-[2.2rem] border-[3.5px] border-white/85 bg-ink p-0.5 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.08)] transition-all duration-500 ease-out hover:scale-[1.03] hover:border-white hover:shadow-[0_25px_65px_rgba(0,0,0,0.95),0_0_35px_rgba(214,17,108,0.3)] cursor-pointer select-none"
    >
      {/* Inner Video Clipping Area */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] sm:rounded-[1.9rem] bg-black">
        {/* Video Preview */}
        <video
          ref={videoRef}
          muted={isMuted}
          loop
          playsInline
          poster={item.poster}
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        >
          <source src={item.videoSrc} type="video/mp4" />
          <source src={item.fallbackSrc} type="video/mp4" />
        </video>

        {/* Subtle dark bottom gradient for high-contrast control visibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Prominent Middle Play Button (When Stopped / Initial Load) */}
        {/* Middle Play Button (Fades out after tapping/playing) */}
        {!isPlaying && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/35 backdrop-blur-[1px] transition-all duration-300">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-black/80 group-hover:text-accent">
              <FaPlay className="ml-1 text-lg sm:text-xl" />
            </div>
          </div>
        )}

        {/* Mute / Unmute Button in Bottom Right (Matching Hero) */}
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute reel" : "Mute reel"}
          className="absolute bottom-3 right-3 sm:bottom-3.5 sm:right-3.5 z-30 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white backdrop-blur-md shadow-lg transition-all duration-200 hover:scale-105 hover:bg-black/70 hover:border-white/60 active:scale-95"
        >
          {isMuted ? (
            <FaVolumeXmark className="text-xs text-white" />
          ) : (
            <FaVolumeHigh className="text-xs text-accent animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
}

export default function ShortForm() {
  const [activeCategory, setActiveCategory] = useState<string>("Politics");
  const railRef = useRef<HTMLDivElement>(null);

  const filteredReels = REELS.filter((r) => r.category === activeCategory);

  const scrollRail = (direction: "left" | "right") => {
    if (railRef.current) {
      const scrollAmount = 340;
      railRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="reels" className="relative w-full border-b border-line py-28 md:py-36 bg-ink overflow-hidden">
      <RevealWrapper>
        {/* Header Row: 12-column grid */}
        <div className="portfolio-grid-container mb-12">
          <div className="grid grid-cols-12 gap-6 items-end">
            {/* Heading spanning 7 cols */}
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-accent">SHORT FORM & REELS</span>
                <span className="h-px w-8 bg-accent/40" />
              </div>
              <h2 className="headline-display text-paper">
                Reels that get your business{" "}
                <span className="italic font-light text-paper">noticed.</span>
              </h2>
            </div>

            {/* Right-aligned supporting line spanning 5 cols */}
            <div className="col-span-12 lg:col-span-5 lg:text-right space-y-4">
              <p className="max-w-md lg:ml-auto text-sm sm:text-base text-paper-dim leading-relaxed">
                Short, high-impact videos designed to capture local attention, build trust, and turn everyday viewers into loyal customers.
              </p>
            </div>
          </div>

          {/* Category Tabs & Manual Scroll Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-10 border-t border-line mt-10">
            {/* Category Filter Pills (No 'All' tab - tap to reveal videos) */}
            <div className="flex flex-wrap items-center gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    suppressHydrationWarning
                    onClick={() => setActiveCategory(cat)}
                    className={`eyebrow px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isSelected
                        ? "border-accent bg-accent/20 text-paper shadow-[0_0_20px_rgba(214,17,108,0.3)] scale-105"
                        : "border-line bg-paper/[0.02] text-paper-dim hover:border-paper/40 hover:text-paper"
                    }`}
                  >
                    <span>{cat}</span>
                    <span suppressHydrationWarning className="text-[10px] font-mono text-paper-dim/70">
                      {`(${CATEGORY_COUNTS[cat] ?? 0})`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Rail Arrows (Only visible when a category is selected) */}
            {activeCategory && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollRail("left")}
                  aria-label="Scroll left"
                  className="flex h-9 w-9 items-center justify-center border border-line text-paper-dim transition-colors hover:border-accent hover:text-accent cursor-pointer"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollRail("right")}
                  aria-label="Scroll right"
                  className="flex h-9 w-9 items-center justify-center border border-line text-paper-dim transition-colors hover:border-accent hover:text-accent cursor-pointer"
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Video Appearance Area (Appears on Tab Tap/Click) */}
        <AnimatePresence mode="wait">
          {!activeCategory ? (
            <motion.div
              key="prompt"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="portfolio-grid-container py-14 md:py-20"
            >
              <div className="flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-2xl border border-dashed border-line bg-paper/[0.015] max-w-xl mx-auto">
                <div className="h-12 w-12 rounded-full border border-accent/40 bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <span className="text-xl">▶</span>
                </div>
                <h3 className="font-display text-lg sm:text-xl text-paper mb-2">
                  Select a category to view reels
                </h3>
                <p className="text-xs sm:text-sm text-paper-dim max-w-sm">
                  Click on any tab above (Politics, Face, Info) to see the reels.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
              className="pt-2"
            >
              {/* Horizontal-Scroll Rail: Vertical 9:16 Video Preview Tiles */}
              <div
                ref={railRef}
                className="flex gap-6 overflow-x-auto px-[clamp(1.5rem,5vw,6rem)] pb-8 pt-2 scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:thin] [scrollbar-color:rgba(237,234,227,0.2)_transparent]"
              >
                {filteredReels.map((reel) => (
                  <ReelTile key={reel.id} item={reel} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </RevealWrapper>
    </section>
  );
}
