"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // motion transforms for the split parallax effect
  const leftY = useTransform(scrollYProgress, [0, 1], [0, 100]);   // slower drift
  const rightY = useTransform(scrollYProgress, [0, 1], [0, 200]);  // faster drift
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <video
          src="/vids/prill-bg.mp4"
          className="w-full h-full object-cover brightness-70"
          muted
          loop
          playsInline
        />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 flex items-center justify-center h-screen text-white uppercase font-bold text-5xl tracking-tight"
      >
        <div className="relative flex">
          <motion.span
            style={{ y: leftY }}
            className="inline-block font-[Hanalei_Fill]"
          >
            Prill&nbsp;Porsche
          </motion.span>
          <motion.span
            style={{ y: rightY }}
            className="inline-block font-[Hanalei_Fill] ml-3"
          >
            Classics
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
