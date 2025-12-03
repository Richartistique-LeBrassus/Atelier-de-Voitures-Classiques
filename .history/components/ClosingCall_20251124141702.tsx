"use client"
import React from "react";
import { motion } from "framer-motion";

export default function ClosingCall() {
  return (
    <section 
      aria-label="Closing Call — The Invitation"
      className="relative h-fit z-30 
      w-full px-auto bg-white px-5 md:px-7
      py-7  md:py-16 lg:py-28"
    >
      <div
        className="w-full mx-auto h-fit
        grid grid-cols-1 2xl:gap-1 2xl:grid-cols-2
        xl:align-bottom
        items-center text-neutral-950 md:px-20 py-20
        "
      >  
        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6  mx-auto items w-full flex flex-col 
          text-start justify-start 2xl:pr-12"
        >
          <h2 
            className="uppercase font-bold text-4xl md:text-5xl tracking-[0.3rem]
            mb-10 xl:mb-10"
          >
            Arrange <br /><span className="font-bold font-mono">a <br />
            Visit</span>
          </h2>
  
          <p className="font-bold font-mono uppercase leading-9 sm:leading-8 
          underline underline-offset-6">
            DISCALIMER: VISITS BY APPOINTMENT ONLY
          </p>
  
          <p className="text-base lg:text-lg lg:mb-16
          leading-9 sm:leading-8 font-mono text-left indent-4
          my-10 xl:max-w-[560px] max-w-[570px]">
            We invite you to <span className="font-bold">experience our workshop</span> — to witness the craft, 
            precision, and passion that define every restoration.
          </p>
  
          <div className="flex flex-col gap-7 xl:gap-10 font-mono mb-16 xl:mb-20 2xl:mb-0
             2xl:max-w-[300px]"
          >
            <p className="inline-block border-b border-neutral-950 pb-1 text-xl uppercase
              tracking-wide font-bold"
            >
              the Essex Workshop  
            </p>  
            <a
              href="/contact"
              className="inline-block border border-neutral-950 p-3 md:p-5 text-xl uppercase
              transition-colors tracking-[0.3rem] duration-200
              bg-neutral-950 text-white hover:bg-white hover:text-neutral-950 font-bold"
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
          className="overflow-hidden w-full h-[80vw] 2xl:h-[40vw]"
        >
          <img
            src="/imgs/visit.webp"
            alt="Inside view of the workshop"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>       
      </div>
    </section>    
  );
}