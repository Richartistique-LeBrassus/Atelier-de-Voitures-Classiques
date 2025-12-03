import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Ultra‑contemporary, dramatic, luxury product detail page
// Inspired by Bugatti / Patek Philippe aesthetics
// No inline styles. Pure Tailwind + subtle animations.
// Drop‑in ready for Next.js 15

type Image = { src: string; alt?: string };

type Vehicle = {
  id: string;
  title: string;
  subtitle?: string;
  price?: string;
  images: Image[];
  manufacturer: string;
  year: number;
  mileage?: string;
  transmission?: string;
  engine?: string;
  vin?: string;
  exterior?: string;
  interior?: string;
  description?: string;
  features?: string[];
  specs?: Record<string, string>;
  history?: { year: number; text: string }[];
};

const sample: Vehicle = {
  id: "patek-bugatti-fusion",
  title: "1994 McLaren F1",
  subtitle: "Chassis R0004 — A modern myth",
  price: "€15,750,000",
  images: [
    { src: "/images/mclaren-1.jpg", alt: "McLaren F1 front" },
    { src: "/images/mclaren-2.jpg", alt: "Interior" },
    { src: "/images/mclaren-3.jpg", alt: "Engine" },
    { src: "/images/mclaren-4.jpg", alt: "Rear" }
  ],
  manufacturer: "McLaren",
  year: 1994,
  mileage: "12,340 km",
  transmission: "6-speed manual",
  engine: "6.1 L V12",
  vin: "WF0JXX...",
  exterior: "Argento Metallic",
  interior: "Tan Connolly Leather",
  description:
    "A singular McLaren F1 with flawless provenance. Its presence commands the room — a perfect balance of engineering purity and sculptural intent.",
  features: ["Concours maintained", "One-owner provenance", "Complete toolkit", "2024 major service"],
  specs: {
    Power: "627 PS",
    "0–100 km/h": "3.2 s",
    "Top Speed": "386 km/h",
    Displacement: "6064 cc"
  },
  history: [
    { year: 1994, text: "Delivered new (EU)" },
    { year: 2008, text: "Major service" },
    { year: 2024, text: "Comprehensive recommissioning" }
  ]
};

// -----------------------------
// Luxury Motion Presets
// -----------------------------

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeUpFast = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

// -----------------------------
// Lightbox
// -----------------------------

function Lightbox({ images, startIndex, onClose }: { images: Image[]; startIndex: number; onClose: () => void }) {
  const [index, setIndex] = useState(startIndex);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-w-[1200px] w-full relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <button onClick={onClose} className="absolute right-4 top-4 text-white text-sm tracking-widest uppercase">Close</button>
          <img src={images[index].src} alt={images[index].alt} className="w-full max-h-[70vh] object-contain" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// -----------------------------
// Main Component
// -----------------------------

export default function LuxuryVehicleDetail({ data = sample }: { data?: Vehicle }) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto">

        {/* Hero Gallery */}
        <motion.section variants={fadeIn} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <motion.div className="rounded-3xl overflow-hidden shadow-2xl bg-neutral-900" whileHover={{ scale: 1.01 }}>
              <img
                src={data.images[active].src}
                alt={data.images[active].alt}
                className="w-full h-[60vh] object-cover"
              />
            </motion.div>
            <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide pb-3">
              {data.images.map((img, i) => (
                <motion.button
                  key={img.src}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.05 }}
                  className={`flex-none rounded-xl overflow-hidden border ${i === active ? "border-neutral-300" : "border-neutral-700"}`}
                >
                  <img src={img.src} alt={img.alt} className="w-32 h-20 object-cover" />
                </motion.button>
              ))}
            </div>
            <button
              onClick={() => setLightboxOpen(true)}
              className="mt-4 px-5 py-3 border rounded-full text-sm tracking-wide hover:bg-neutral-800 transition"
            >
              Expand Gallery
            </button>
          </div>

          {/* Vehicle Info */}
          <motion.div variants={fadeUpFast} initial="hidden" animate="show" className="space-y-6">
            <div>
              <h1 className="text-5xl font-serif tracking-tight">{data.title}</h1>
              <p className="mt-3 text-neutral-400 text-lg">{data.subtitle}</p>
            </div>

            <div className="text-4xl font-light tracking-tight">{data.price ?? "Price on request"}</div>

            <div className="text-neutral-400">
              {data.manufacturer} • {data.year} • {data.exterior} exterior
            </div>

            <p className="text-neutral-300 leading-relaxed max-w-xl">{data.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-neutral-500">Mileage</span><br />{data.mileage}</div>
              <div><span className="text-neutral-500">Transmission</span><br />{data.transmission}</div>
              <div><span className="text-neutral-500">Engine</span><br />{data.engine}</div>
              <div><span className="text-neutral-500">VIN</span><br />{data.vin}</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              className="px-6 py-4 bg-neutral-100 text-neutral-900 rounded-full font-medium mt-6"
            >
              Enquire Privately
            </motion.button>
          </motion.div>
        </motion.section>

        {/* History + Specs */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.h2 variants={fadeIn} initial="hidden" animate="show" className="text-3xl font-serif tracking-tight">History & Provenance</motion.h2>
            <motion.div variants={fadeIn} initial="hidden" animate="show" className="mt-6 space-y-3 text-neutral-300">
              {data.history?.map((h) => (
                <div key={h.year} className="flex gap-6">
                  <div className="text-neutral-500 w-16">{h.year}</div>
                  <div>{h.text}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeIn} initial="hidden" animate="show" className="rounded-3xl bg-neutral-900 p-8 border border-neutral-800">
            <h3 className="text-xl font-serif mb-6">Technical</h3>
            <div className="space-y-4 text-neutral-300 text-sm">
              {data.specs &&
                Object.entries(data.specs).map(([k, v]) => (
                  <div key={k} className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-500">{k}</span>
                    <span>{v}</span>
                  </div>
                ))}
            </div>
          </motion.div>
        </section>
      </div>

      {lightboxOpen && (
        <Lightbox images={data.images} startIndex={active} onClose={() => setLightboxOpen(false)} />
      )}
    </main>
  );
}
