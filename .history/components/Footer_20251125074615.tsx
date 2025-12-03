"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="z-10 relative w-full bg-green-950 text-white py-20 
    px-8 flex flex-col items-center justify-center space-y-5 
    text-center border-t border-white/10">
      {/* Logo */}
      <img
        src="/imgs/logo.png"
        alt="Prill Porsche Classics Logo"
        className="w-20 sm:w-24 opacity-90 mb-5"
      />

      <h4 className="text-sm md:text-base tracking-widest uppercase text-white/70 font-mono">
        address
      </h4>

      <p className="text-xs md:text-sm text-white/40 max-w-md leading-relaxed font-mono uppercase">
        1A The Garages Coppock Close Battersea SW11 2LE
      </p>

      <div className="flex space-x-6 pt-4 uppercase">
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
        <a
          href="#"
          className="text-white/40 hover:text-white transition-colors duration-300 text-sm"
        >
          Inventory
        </a>
      </div>

      <p className="text-[10px] text-white/30 pt-6 font-mono">
        © {new Date().getFullYear()} Graeme Hunt Ltd. — Practiced with Precision
      </p>
    </footer>
  );
}