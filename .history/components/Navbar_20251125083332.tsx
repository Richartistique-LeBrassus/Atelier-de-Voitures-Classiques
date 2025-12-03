"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll past first viewport height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock/unlock scroll when drawer opens/closes
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-7 py-5 md:py-8 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-md bg-white/30"
            : "bg-transparent backdrop-blur-0"
        }`}
      >
        {/* Burger Menu */}
        <button
          aria-label="Toggle menu"
          className={`z-50 py-2 transition-colors duration-500 ${
            isScrolled ? "text-black" : "text-neutral-100"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6 transition-all duration-300 hover:cursor-pointer" />
        </button>

        {/* Center Logo (appears after 100vh scroll) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: isScrolled ? 1 : 0,
            y: isScrolled ? 0 : -20,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-1/2 -translate-x-1/2 select-none pointer-events-none ml-1.5"
        >
          <div
            className="flex  font-mono w-full sm:w-[140px] md:w-40
            text-lg sm:text-2xl md:text-3xl font-extrabold text-black uppercase
            text-center"
          >
            <p
              className="relative tracking-[0.92rem] md:tracking-[1rem]
              text-center
              "
            >
              GRAEME HUNT 
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
            className="fixed top-0 left-0 h-full w-3/4 lg:w-1/3 bg-neutral-50 
            text-neutral-900 z-50 flex flex-col justify-center px-5 sm:px-12 space-y-12"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.45, ease: "easeOut" }}
          >
            <nav className="space-y-6">
              {["Home", "Atelier", "For sale", "new", "services", "contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase text-neutral-800 relative group"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-px bg-neutral-800 transition-all duration-500 group-hover:w-full"></span>
                  </motion.a>
                )
              )}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}