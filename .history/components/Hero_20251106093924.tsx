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
    <section ref={containerRef} className="relative h-screen w-full">
      <div className="absolute w-full h-full">
        <video 
          src="/vids/prill-bg.mp4"
          className="w-full h-full object-cover brightness-70"
          //autoPlay
          muted
          loop  
        >            
        </video>
      </div>  
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex items-center 
        justify-center text-white text-5xl font-bold font-serif
        uppercase"
      >
        Prill <br/>Porsche<br/> Classics
      </motion.div>
    </section>
  );
};

export default Hero;