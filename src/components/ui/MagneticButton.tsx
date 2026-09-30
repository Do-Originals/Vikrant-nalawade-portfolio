"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  radius?: number;
  strength?: number;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  radius = 120,
  strength = 0.35,
  type = "button",
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 180, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const distance = Math.hypot(deltaX, deltaY);

    if (distance < radius) {
      mouseX.set(deltaX * strength);
      mouseY.set(deltaY * strength);
    } else {
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const motionStyle = shouldReduceMotion
    ? {}
    : {
        x: springX,
        y: springY,
      };

  const content = (
    <motion.div
      ref={ref}
      style={motionStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-100 ease-out will-change-transform"
    >
      {href ? (
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={className}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          aria-label={ariaLabel}
          className={className}
        >
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
