"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slight scale + fade to simulate scroll "slide-over" transition
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex items-center 
        justify-center text-white text-5xl font-bold"
      >
        Hero Section
      </motion.div>
    </section>
  );
};

export default Hero;