"use client";

import React, { useRef, useState, useEffect } from "react";
import RevealWrapper from "@/components/ui/RevealWrapper";
import MuxVideo from "@mux/mux-video-react";
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

interface LongFormProject {
  id: string;
  category: "Podcast" | "Outdoor";
  categoryLabel: string;
  tag: string;
  title: string;
  description: string;
  deliverables: string;
  duration: string;
  videoSrc: string;
  fallbackSrc: string;
  poster: string;
  muxPlaybackId?: string;
}

const PROJECTS: LongFormProject[] = [
  {
    id: "podcast-1",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "EPISODIC & CREATOR INTERVIEW",
    title: "Creator Strategy & Audience Dynamics",
    description:
      "Deep-dive studio interview exploring growth mechanics, audience psychology, and content longevity with broadcast sound mastering and fluid multi-angle switching.",
    deliverables: "4K Multicam Master • Spatial Audio Clean • Dynamic Color Science",
    duration: "48:20 Episode",
    videoSrc:
      "https://stream.mux.com/ZjqqtdeUw02qnEjiKkUHT00QkJGYvUrPtOlYmzLVdObIg.m3u8",
    fallbackSrc:
      "https://stream.mux.com/ZjqqtdeUw02qnEjiKkUHT00QkJGYvUrPtOlYmzLVdObIg.m3u8",
    poster:
      "https://image.mux.com/ZjqqtdeUw02qnEjiKkUHT00QkJGYvUrPtOlYmzLVdObIg/thumbnail.jpg?time=2",
    muxPlaybackId: "ZjqqtdeUw02qnEjiKkUHT00QkJGYvUrPtOlYmzLVdObIg",
  },
  {
    id: "podcast-2",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "LONG-FORM DIALOGUE",
    title: "The Founder's Playbook: Unfiltered",
    description:
      "High-retention conversational podcast masterfully paced with subtle narrative reframes, dynamic graphic popups, and television-grade vocal clarity.",
    deliverables: "Multi-Angle Master • Vocal Polish • Chapter Markers",
    duration: "52:15 Episode",
    videoSrc:
      "https://stream.mux.com/T32ng02hrSBcFPUZSnbmSu00CzjuTuVXmNhtnwThxEz9M.m3u8",
    fallbackSrc:
      "https://stream.mux.com/T32ng02hrSBcFPUZSnbmSu00CzjuTuVXmNhtnwThxEz9M.m3u8",
    poster:
      "https://image.mux.com/T32ng02hrSBcFPUZSnbmSu00CzjuTuVXmNhtnwThxEz9M/thumbnail.jpg?time=2",
    muxPlaybackId: "T32ng02hrSBcFPUZSnbmSu00CzjuTuVXmNhtnwThxEz9M",
  },
  {
    id: "podcast-3",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "STUDIO BROADCAST & PODCAST",
    title: "Visionary Minds: Deep Dive Session",
    description:
      "In-depth episodic session featuring cinematic color contrast, seamless audio denoising, and continuous retention-driven visual progression.",
    deliverables: "Studio 4K Master • Denoised Audio Mix • LUT Grading",
    duration: "41:30 Episode",
    videoSrc:
      "https://stream.mux.com/cC2Mj86enWZPTaVoOn00wUWUqcJvzy4x32RGdVpJxlAI.m3u8",
    fallbackSrc:
      "https://stream.mux.com/cC2Mj86enWZPTaVoOn00wUWUqcJvzy4x32RGdVpJxlAI.m3u8",
    poster:
      "https://image.mux.com/cC2Mj86enWZPTaVoOn00wUWUqcJvzy4x32RGdVpJxlAI/thumbnail.jpg?time=2",
    muxPlaybackId: "cC2Mj86enWZPTaVoOn00wUWUqcJvzy4x32RGdVpJxlAI",
  },
  {
    id: "podcast-4",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "EPISODIC & INTERVIEW",
    title: "Executive Dialogue & Studio Master",
    description:
      "Full-length studio conversation with cinematic multi-angle framing, crystal clear audio mastering, and engaging visual pacing tailored for modern audiences.",
    deliverables: "Multi-Angle Master • Dynamic Sound Mix • Color Grading",
    duration: "45:10 Episode",
    videoSrc:
      "https://stream.mux.com/n802lAeSZ1fbAHpa7aE01OmN5P5BqbNvclWKNL025LgZOY.m3u8",
    fallbackSrc:
      "https://stream.mux.com/n802lAeSZ1fbAHpa7aE01OmN5P5BqbNvclWKNL025LgZOY.m3u8",
    poster:
      "https://image.mux.com/n802lAeSZ1fbAHpa7aE01OmN5P5BqbNvclWKNL025LgZOY/thumbnail.jpg?time=2",
    muxPlaybackId: "n802lAeSZ1fbAHpa7aE01OmN5P5BqbNvclWKNL025LgZOY",
  },
  {
    id: "podcast-5",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "STUDIO BROADCAST",
    title: "Insight Dialogue: Special Edition",
    description:
      "Television-grade multicam production with seamless switching, professional color treatment, and crisp dialogue delivery.",
    deliverables: "Multi-Angle 4K Master • Vocal Mastering • Color Grading",
    duration: "42:15 Episode",
    videoSrc:
      "https://stream.mux.com/ot5QwzVhzFjO000248jElUyvqfLPxp4ScJ5RUXMj9eg8Q.m3u8",
    fallbackSrc:
      "https://stream.mux.com/ot5QwzVhzFjO000248jElUyvqfLPxp4ScJ5RUXMj9eg8Q.m3u8",
    poster:
      "https://image.mux.com/ot5QwzVhzFjO000248jElUyvqfLPxp4ScJ5RUXMj9eg8Q/thumbnail.jpg?time=2",
    muxPlaybackId: "ot5QwzVhzFjO000248jElUyvqfLPxp4ScJ5RUXMj9eg8Q",
  },
  {
    id: "podcast-6",
    category: "Podcast",
    categoryLabel: "Podcast",
    tag: "EPISODIC & CONVERSATION",
    title: "The Creative Engine Session",
    description:
      "Long-form conversational interview cut with narrative depth, smooth multi-angle pacing, and broadcast audio mastering.",
    deliverables: "4K Master Cut • Multitrack Sound Mix • Chapter Polish",
    duration: "38:40 Episode",
    videoSrc:
      "https://stream.mux.com/oyfC401AYpQ1HbP96Kei02odzS00mIAe2DuZ006UywRvfAM.m3u8",
    fallbackSrc:
      "https://stream.mux.com/oyfC401AYpQ1HbP96Kei02odzS00mIAe2DuZ006UywRvfAM.m3u8",
    poster:
      "https://image.mux.com/oyfC401AYpQ1HbP96Kei02odzS00mIAe2DuZ006UywRvfAM/thumbnail.jpg?time=2",
    muxPlaybackId: "oyfC401AYpQ1HbP96Kei02odzS00mIAe2DuZ006UywRvfAM",
  },
  {
    id: "outdoor-1",
    category: "Outdoor",
    categoryLabel: "Outdoor & Travel Film",
    tag: "OUTDOOR & TRAVEL FILM",
    title: "Cinematic Outdoor Journey",
    description:
      "A high-impact cinematic visual expedition capturing vast natural landscapes, fluid movement, and immersive atmosphere with broadcast-grade cinematography.",
    deliverables: "Outdoor Master • Atmospheric Sound Mix • Color Grading",
    duration: "01:30 Master",
    videoSrc:
      "https://stream.mux.com/N009102f00rP4Hdkk02PSq1dhQns43Br8vEqHBNDHJemt4A.m3u8",
    fallbackSrc:
      "https://stream.mux.com/N009102f00rP4Hdkk02PSq1dhQns43Br8vEqHBNDHJemt4A.m3u8",
    poster:
      "https://image.mux.com/N009102f00rP4Hdkk02PSq1dhQns43Br8vEqHBNDHJemt4A/thumbnail.jpg?time=2",
    muxPlaybackId: "N009102f00rP4Hdkk02PSq1dhQns43Br8vEqHBNDHJemt4A",
  },
];

const CATEGORIES = ["Podcast", "Outdoor"] as const;

function parseDuration(str: string): number {
  const match = str.match(/(\d+):(\d+)/);
  if (match) {
    const mins = parseInt(match[1], 10);
    const secs = parseInt(match[2], 10);
    return mins * 60 + secs;
  }
  return 0;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || !Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

function LongFormCard({ project }: { project: LongFormProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isScrubbing, setIsScrubbing] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
    }
  }, [project.videoSrc]);

  const effectiveDuration =
    duration > 0 && Number.isFinite(duration)
      ? duration
      : parseDuration(project.duration);

  const progress =
    effectiveDuration > 0
      ? Math.min(100, Math.max(0, (currentTime / effectiveDuration) * 100))
      : 0;

  const handleTimeUpdate = () => {
    if (!isScrubbing && videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (
      videoRef.current &&
      Number.isFinite(videoRef.current.duration) &&
      videoRef.current.duration > 0
    ) {
      setDuration(videoRef.current.duration);
    }
  };

  const seekTo = (clientX: number) => {
    if (!timelineRef.current || !videoRef.current) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = clickX / rect.width;
    const targetDur =
      duration > 0 && Number.isFinite(duration)
        ? duration
        : parseDuration(project.duration);
    if (targetDur > 0) {
      const newTime = percentage * targetDur;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    seekTo(e.clientX);
  };

  const handleTimelineMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsScrubbing(true);
    seekTo(e.clientX);

    const onMouseMove = (moveEvent: MouseEvent) => {
      seekTo(moveEvent.clientX);
    };

    const onMouseUp = () => {
      setIsScrubbing(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const p = videoRef.current.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !isScrubbing) {
      videoRef.current.pause();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        const p = videoRef.current.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
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
      onClick={togglePlay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-video w-[320px] sm:w-[460px] md:w-[560px] lg:w-[620px] shrink-0 snap-start overflow-hidden rounded-[1.8rem] border-[3.5px] border-white/85 bg-ink p-0.5 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.08)] transition-all duration-500 ease-out hover:scale-[1.02] hover:border-white hover:shadow-[0_25px_65px_rgba(0,0,0,0.95),0_0_35px_rgba(214,17,108,0.3)] cursor-pointer select-none"
    >
      {/* Inner Video Clipping Area */}
      <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-black">
        {project.muxPlaybackId ? (
          <MuxVideo
            ref={videoRef}
            playbackId={project.muxPlaybackId}
            muted={isMuted}
            loop
            playsInline
            poster={project.poster}
            preload="none"
            _hlsConfig={{
              fragLoadingTimeOut: 45000,
              fragLoadingMaxRetry: 6,
              fragLoadingRetryDelay: 1000,
              manifestLoadingTimeOut: 30000,
              manifestLoadingMaxRetry: 4,
              levelLoadingTimeOut: 30000,
              lowLatencyMode: false,
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onDurationChange={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onError={() => {
              if (videoRef.current && isPlaying) {
                setTimeout(() => {
                  if (videoRef.current) {
                    videoRef.current.load();
                    videoRef.current.play().catch(() => {});
                  }
                }, 1000);
              }
            }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <video
            ref={videoRef}
            src={project.videoSrc}
            muted={isMuted}
            loop
            playsInline
            poster={project.poster}
            preload="none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onDurationChange={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onError={() => {
              if (
                videoRef.current &&
                project.fallbackSrc &&
                videoRef.current.src !== project.fallbackSrc
              ) {
                videoRef.current.src = project.fallbackSrc;
              }
            }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        )}

        {/* Ambient Dark Gradient for Contrast */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-300 group-hover:opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
          <span className="eyebrow bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] text-paper border border-white/20 rounded-full font-mono">
            {project.categoryLabel.toUpperCase()}
          </span>
          <span className="eyebrow bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] text-paper border border-white/20 font-mono rounded-full">
            {project.duration}
          </span>
        </div>

        {/* Minimal Centered Play Button (Fades out when playing) */}
        {!isPlaying && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-[1px] transition-all duration-300">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-white/40 bg-black/60 text-white backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-accent group-hover:bg-black/80 group-hover:text-accent">
              <FaPlay className="ml-1 text-lg sm:text-xl" />
            </div>
          </div>
        )}

        {/* Bottom Control Bar with Full Interactive Timeline */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-x-0 bottom-0 z-30 flex flex-col justify-end px-3.5 sm:px-4 pb-3 sm:pb-3.5 pt-8 bg-gradient-to-t from-black/95 via-black/65 to-transparent"
        >
          {/* Interactive Timeline Bar */}
          <div
            ref={timelineRef}
            onClick={handleTimelineClick}
            onMouseDown={handleTimelineMouseDown}
            className="group/timeline relative h-4 w-full flex items-center cursor-pointer select-none py-1"
          >
            {/* Background Track */}
            <div className="relative h-1.5 w-full rounded-full bg-white/25 overflow-hidden transition-all duration-200 group-hover/timeline:h-2">
              {/* Progress Bar with Vivid Accent Gradient */}
              <div
                className="h-full bg-gradient-to-r from-accent via-[#ff2d7a] to-accent rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Glowing Scrubber Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(214,17,108,0.9)] border-2 border-accent transition-transform duration-150 pointer-events-none scale-0 group-hover/timeline:scale-100 group-hover:scale-100"
              style={{
                left: `calc(${progress}% - 7px)`,
              }}
            />
          </div>

          {/* Controls & Time Metadata Row */}
          <div className="mt-1 flex items-center justify-between text-xs text-white">
            {/* Left: Play/Pause Mini Button + Timestamp */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 hover:bg-accent text-white transition-all cursor-pointer hover:scale-105 active:scale-95"
              >
                {isPlaying ? (
                  <FaPause className="text-[10px]" />
                ) : (
                  <FaPlay className="text-[10px] ml-0.5" />
                )}
              </button>

              <div className="flex items-center gap-1 font-mono text-[11px] text-paper-dim font-medium tracking-tight">
                <span className="text-white font-semibold">{formatTime(currentTime)}</span>
                <span className="text-white/40">/</span>
                <span>{formatTime(effectiveDuration)}</span>
              </div>
            </div>

            {/* Right: Badge & Mute Toggle */}
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-white/70 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                {isPlaying ? "Playing" : "Preview"}
              </span>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md shadow-md transition-all duration-200 hover:scale-105 hover:bg-black/80 hover:border-white/50 active:scale-95 cursor-pointer"
              >
                {isMuted ? (
                  <FaVolumeXmark className="text-[11px] text-white" />
                ) : (
                  <FaVolumeHigh className="text-[11px] text-accent animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LongForm() {
  const [activeCategory, setActiveCategory] = useState<string>("Podcast");
  const railRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS.filter((p) => p.category === activeCategory);

  const scrollRail = (direction: "left" | "right") => {
    if (railRef.current) {
      const scrollAmount = 600;
      railRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="work"
      suppressHydrationWarning
      className="relative w-full border-b border-line py-28 md:py-36 bg-ink overflow-hidden"
    >
      <RevealWrapper>
        {/* Header Row: 12-Column Grid */}
        <div className="portfolio-grid-container mb-12">
          <div className="grid grid-cols-12 gap-6 items-end">
            {/* Left-Aligned Headline */}
            <div className="col-span-12 lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-accent font-mono">LONG FORM & OUTDOOR</span>
                <span className="h-px w-8 bg-accent/40" />
              </div>
              <h2 className="headline-display text-paper">
                Videos that tell your{" "}
                <span className="italic font-light text-paper">business story.</span>
              </h2>
            </div>

            {/* Right-Aligned Supporting Copy */}
            <div className="col-span-12 lg:col-span-5 lg:text-right space-y-4">
              <p className="max-w-md lg:ml-auto text-sm sm:text-base text-paper-dim leading-relaxed">
                Full-length studio conversations, podcasts, and outdoor visual films cut with narrative depth, smooth pacing, and broadcast audio mastering.
              </p>
            </div>
          </div>

          {/* Category Tabs & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-10 border-t border-line mt-10">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`eyebrow px-3.5 py-1.5 rounded-full border text-xs transition-all duration-200 cursor-pointer ${
                    activeCategory === cat
                      ? "border-accent bg-accent/15 text-paper"
                      : "border-line bg-paper/[0.02] text-paper-dim hover:border-paper/40 hover:text-paper"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
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
          </div>
        </div>

        {/* Horizontal-Scroll Slider Rail: 16:9 Landscape Video Preview Tiles */}
        <div
          ref={railRef}
          className="flex gap-8 overflow-x-auto px-[clamp(1.5rem,5vw,6rem)] pb-8 pt-2 scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:thin] [scrollbar-color:rgba(237,234,227,0.2)_transparent]"
        >
          {filteredProjects.map((project) => (
            <LongFormCard key={project.id} project={project} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
