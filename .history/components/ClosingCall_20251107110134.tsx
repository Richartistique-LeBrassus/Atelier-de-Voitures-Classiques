"use client"
import React from "react";
import { motion } from "framer-motion";

export default function ClosingCall() {
  return (
    <section
      aria-label="Closing Call — The Invitation"
      className="w-full
      z-30 grid grid-cols-1 lg:grid-cols-2
      items-center gap-12 py-24 px-5 md:px-16 bg-neutral-100 text-neutral-950"
    >

      {/* Right Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6 max-w-md mx-auto text-left"
      >
        <h2 className="text-4xl md:text-5xl uppercase font-bold">
          Arrange a <br />
          <span className="font-bold font-mono">Visit</span>
        </h2>

        <p className="font-bold font-mono uppercase leading-9 sm:leading-8 
        underline underline-offset-6">
          DISCALIMER: VISITS BY APPOINTMENT ONLY
        </p>

        <p className="text-base md:text-lg 
        leading-9 sm:leading-8 font-mono text-left xl:indent-12">
          We invite you to <span className="font-bold">experience our workshop</span> — to witness the craft, 
          precision, and passion that define every restoration.
        </p>

        <div className="flex flex-col gap-3">
          <p className="inline-block border-b border-black pb-1 text-xl uppercase
            tracking-wide hover:opacity-60 transition-opacity font-mono"
          >
            the Essex Workshop  
          </p>  
          <a
            href="/contact"
            className="inline-block border border-black p-3 text-xl uppercase
            hover:opacity-60 transition-opacity 
            bg-neutral-950 text-white hover:bg-white hover:text-neutral-950 font-bold font-mono"
          >
            Discover
          </a>
        </div>
      </motion.div>

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden w-full h-[55.4vw]"
      >
        <img
          src="/imgs/renndienst2.webp"
          alt="Inside view of the workshop"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>    
    </section>
  );
}