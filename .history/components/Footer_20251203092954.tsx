"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="z-10 relative w-full bg-green-950 text-white py-20 
    px-8 flex flex-col items-center justify-center space-y-5 
    text-center border-t border-white/10">
      {/* Logo */}
      {/*<img
        src="/imgs/member.png"
        alt="Prill Porsche Classics Logo"
        className="w-20 sm:w-24 opacity-90 mb-5"
      />*/}
      <p className="text-white text-3xl uppercase">
        Richartistique
      </p>

      <h4 className="text-sm md:text-base tracking-widest uppercase text-white/70 font-mono leading-9">
        No affiliation <br/>with Graeme Hunt <br/> Entirely Original<br/> Concept/ Design.
      </h4>

      <div className="flex flex-wrap justify-between align-center
       space-x-6 pt-4 uppercase"
      >
        <a
          href="#"
          className="text-white/40 hover:text-white transition-colors duration-300 text-sm"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-white/40 hover:text-white transition-colors duration-300 text-sm"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-white/40 hover:text-white transition-colors duration-300 text-sm"
        >
          Instagram
        </a>
      </div>

      <p className="text-[10px] text-white/30 pt-6 font-mono">
        © {new Date().getFullYear()} Graeme Hunt Ltd. — Practiced with Precision
      </p>
    </footer>
  );
}