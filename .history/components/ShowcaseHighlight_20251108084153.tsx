"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
    { src: "/imgs/rot.webp", caption: "Porsche 356 • 1958" },
    { src: "/imgs/workshop-detail.jpg", caption: "Engine Rebuild • 2024" },
  ],
}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Adjust -200% for number of slides (n - 1) * -100%
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section
      ref={ref}
      aria-label="Showcase Highlight"
      className="relative h-fit bg-black text-white"
    >
      {/* Sticky container so horizontal scroll feels 'pinned' */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          style={{ x }}
          className="flex w-[300vw] h-full will-change-transform"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="relative w-screen h-full flex-shrink-0 overflow-hidden"
            >
              <motion.img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover object-center brightness-75"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
              <figcaption className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm md:text-base tracking-wide uppercase text-white/80">
                {item.caption}
              </figcaption>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}