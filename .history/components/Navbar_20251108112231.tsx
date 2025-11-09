"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md bg-white/30"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        {/* Burger Menu */}
        <button
          aria-label="Toggle menu"
          className={`z-50 p-2 transition-colors duration-500 ${
            isScrolled ? "text-black" : "text-neutral-100"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu
            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 transition-all duration-300"
          />
        </button>

        {/* Center Logo (only visible after scroll) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isScrolled ? 1 : 0,
            y: isScrolled ? 0 : -20,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 select-none pointer-events-none"
        >
          {/*<h1 className="text-lg md:text-xl font-light tracking-widest text-black uppercase">
            Prill Porsche Classics
          </h1>*/}
          <div className="flex flex-col font-mono w-[120px]
          text-lg md:text-xl font-bold text-black uppercase">
            <p className="tracking-[0.9rem] underline underline-offset-3 w-full">
              Prill  
            </p>
            <p className="flex flex-col text-xs">
              Porsche Classics  
            </p>
          </div>
        </motion.div>
      </nav>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className="fixed top-0 left-0 h-full w-3/4 sm:w-1/3 bg-white text-black z-50 flex flex-col items-start justify-center space-y-8 px-10"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            <nav className="space-y-6 text-lg font-light tracking-wide">
              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                The Atelier
              </a>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                Heritage
              </a>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                Restorations
              </a>
              <a
                href="#"
                className="hover:opacity-70 transition-opacity duration-300"
              >
                Contact
              </a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
