
"use client"
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  backgroundImageUrl?: string;
  copy?: string;
};

export default function HeritageEssence({
  backgroundImageUrl = 
    "/images/workshop-hero.jpg",
  copy = "For over three decades, we’ve rebuilt Stuttgart’s legends — preserving performance and purity alike.",
}: Props) {
  // Parallax: map scrollY to a smaller translateY for subtle depth
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section
      aria-label="Heritage Essence"
      className="relative h-[62vh] min-h-[420px] flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Muted background image with parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        aria-hidden
        // Tailwind does not support dynamic urls in classes, so use inline style
        style={{
          y,
          backgroundImage: `url(${backgroundImageUrl})`,
          filter: "grayscale(20%) contrast(90%) brightness(60%)",
        }}
      />

      {/* Soft overlay to ensure legibility */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black/50 pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h2 className="sr-only">The Philosophy</h2>

        <p className="mx-auto text-lg md:text-xl leading-tight font-light max-w-2xl">
          {copy}
        </p>
      </div>

      {/* Decorative subtle divider at the bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-px bg-white/20 rounded" />
    </section>
  );
}
