'use client';
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Ultra-luxury, cinematic animated vehicle detail page inspired by Audemars Piguet 150 years site

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
    { src: "/imgs/sc-front.jpg", alt: "McLaren F1 front" },
    { src: "/imgs/mclaren-2.jpg", alt: "Interior" },
    { src: "/imgs/mclaren-3.jpg", alt: "Engine" },
    { src: "/imgs/mclaren-4.jpg", alt: "Rear" }
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
// Fixed Framer Motion Variants (correct typing)
// -----------------------------

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } }
};

const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }
};

// -----------------------------
// Lightbox with cinematic effect
// -----------------------------

function Lightbox({ images, startIndex, onClose }: { images: Image[]; startIndex: number; onClose: () => void }) {
  const [index, setIndex] = useState(startIndex);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="max-w-[1200px] w-full relative rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <button onClick={onClose} className="absolute right-6 top-6 text-white text-sm tracking-widest uppercase z-10">Close</button>
          <motion.img
            key={images[index].src}
            src={images[index].src}
            alt={images[index].alt}
            className="w-full max-h-[70vh] object-contain"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          />
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
    <main className="min-h-screen bg-neutral-950 text-neutral-100 py-12 px-6 lg:px-20 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto space-y-12">

        {/* Hero Gallery + Info */}
        <motion.section variants={fadeIn} initial="hidden" animate="show" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.div whileHover={{ scale: 1.02 }} className="rounded-3xl overflow-hidden shadow-2xl bg-neutral-900">
              <img src={data.images[active].src} alt={data.images[active].alt} className="w-full h-[60vh] object-cover" />
            </motion.div>
            <div className="flex gap-3 mt-4 overflow-x-auto scrollbar-hide pb-3">
              {data.images.map((img, i) => (
                <motion.button key={img.src} onClick={() => setActive(i)} whileHover={{ scale: 1.05 }}
                  className={`flex-none rounded-xl overflow-hidden border ${i === active ? "border-neutral-300" : "border-neutral-700"}`}
                >
                  <img src={img.src} alt={img.alt} className="w-32 h-20 object-cover" />
                </motion.button>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.03 }} onClick={() => setLightboxOpen(true)}
              className="mt-4 px-5 py-3 border rounded-full text-sm tracking-wide hover:bg-neutral-800 transition"
            >Expand Gallery</motion.button>
          </div>

          <motion.div variants={fadeUpFast} initial="hidden" animate="show" className="space-y-6">
            <h1 className="text-5xl font-serif tracking-tight">{data.title}</h1>
            <p className="mt-3 text-neutral-400 text-lg">{data.subtitle}</p>
            <div className="text-4xl font-light tracking-tight">{data.price ?? "Price on request"}</div>
            <div className="text-neutral-400">{data.manufacturer} • {data.year} • {data.exterior} exterior</div>
            <p className="text-neutral-300 leading-relaxed max-w-xl">{data.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-neutral-500">Mileage</span><br />{data.mileage}</div>
              <div><span className="text-neutral-500">Transmission</span><br />{data.transmission}</div>
              <div><span className="text-neutral-500">Engine</span><br />{data.engine}</div>
              <div><span className="text-neutral-500">VIN</span><br />{data.vin}</div>
            </div>

            <motion.button whileHover={{ scale: 1.03 }} className="px-6 py-4 bg-neutral-100 text-neutral-900 rounded-full font-medium mt-6">
              Enquire Privately
            </motion.button>
          </motion.div>
        </motion.section>

      </div>

      {lightboxOpen && <Lightbox images={data.images} startIndex={active} onClose={() => setLightboxOpen(false)} />}
    </main>
  );
}
