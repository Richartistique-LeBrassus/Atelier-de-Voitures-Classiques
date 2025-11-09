"use client"
import React from "react";
import { motion } from "framer-motion";

type ShowcaseItem = {
  src: string;
  caption: string;
};

type Props = {
  items?: ShowcaseItem[];
};

export default function ShowcaseHighlight({
  items = [
    { src: "/imgs/gelb.jpg", caption: "Porsche 911 • 1971" },
    { src: "/imgs/356-engine.jpg", caption: "Porsche 356 • 1958" },
    { src: "/imgs/workshop-detail.jpg", caption: "Engine Rebuild • 2024" },
  ],
}: Props) {
  return (
    <section
      aria-label="Showcase Highlight"
      className="relative bg-black text-white overflow-x-auto whitespace-nowrap no-scrollbar"
    >
      <div className="flex snap-x snap-mandatory">
        {items.map((item, i) => (
          <motion.figure
            key={i}
            className="relative shrink-0 w-full md:w-[90vw] h-[70vh] snap-center overflow-hidden"
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover object-center filter brightness-75"
            />

            <figcaption className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-sm md:text-base tracking-wide uppercase text-white/80">
              {item.caption}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}