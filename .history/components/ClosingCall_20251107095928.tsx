"use client"
import React from "react";
import { motion } from "framer-motion";

export default function ClosingCall() {
  return (
    <section
      aria-label="Closing Call — The Invitation"
      className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-24 px-6 md:px-16 bg-white text-black"
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-2xl shadow-lg"
      >
        <img
          src="/imgs/Walter.jpg"
          alt="Inside view of the workshop"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-6 max-w-md mx-auto text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-light leading-tight">
          Arrange a <br />
          <i>Visit</i>
        </h2>

        <p className="text-base md:text-lg text-neutral-600">
          We invite you to experience our workshop — to witness the craft, precision, and passion that define every restoration.
        </p>

        <div>
          <a
            href="/contact"
            className="inline-block border-b border-black pb-1 text-lg tracking-wide hover:opacity-60 transition-opacity"
          >
            Discover the Workshop
          </a>
        </div>
      </motion.div>
    </section>
  );
}