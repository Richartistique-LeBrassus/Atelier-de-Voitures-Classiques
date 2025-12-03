"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export type Vehicle = {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  mileage?: string;
  year?: string;
  fuel?: string;
  transmission?: string;
  location?: string;
  vin?: string;
  description?: string;
  gallery: { src: string; alt?: string }[];
  features?: string[];
  specs?: Record<string, string>;
};

// --- Variants & animation helpers -------------------------------------------------
const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageCard = {
  hover: { scale: 1.03, rotate: 0.5, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Reusable small components --------------------------------------------------
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/8 backdrop-blur-md border border-white/6">
      {children}
    </span>
  );
}

function SpecRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between py-2 text-sm border-b border-white/6">
      <div className="font-medium text-slate-200">{k}</div>
      <div className="text-slate-300">{v}</div>
    </div>
  );
}

// --- Main product page component -------------------------------------------------
export default function ProductDetails({ vehicle }: { vehicle: Vehicle }) {
  // fallback demo vehicle if none passed (makes this drop-in friendly)
  const demo = vehicle ?? SAMPLE_VEHICLE;
  const [selected, setSelected] = useState(0);

  // scroll-linked accent (header parallax)
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 240], [0, 8]);
  const translateY = useTransform(scrollY, [0, 360], [0, -36]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-200 via-slate-400 to-black text-white">
      {/* Hero / gallery */}
      <motion.header
        style={{ translateY }}
        className="relative overflow-hidden"
        aria-hidden
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={heroVariants}
              className="lg:col-span-7"
            >
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/6 shadow-2xl">
                {/* big image area with parallax layers */}
                <div className="relative aspect-[16/10] w-full">
                  {/* layered background glow */}
                  <motion.div
                    style={{ filter: blur }}
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  />

                  <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1.02 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                  >
                    <Image
                      src={demo.gallery[selected].src}
                      alt={demo.gallery[selected].alt ?? demo.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* floating badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="absolute left-6 top-6 flex gap-3"
                  >
                    <Tag>{demo.year}</Tag>
                    <Tag>{demo.mileage}</Tag>
                  </motion.div>

                  {/* mini thumbnails */}
                  <div className="absolute -bottom-6 left-6 right-6">
                    <div className="flex gap-3 overflow-x-auto py-4 px-2">
                      {demo.gallery.map((g, i) => (
                        <motion.button
                          key={g.src + i}
                          onClick={() => setSelected(i)}
                          whileHover="hover"
                          variants={imageCard}
                          className={`shrink-0 rounded-xl ring-1 ring-white/6 overflow-hidden w-28 h-16 md:w-36 md:h-20 transition-shadow ${
                            i === selected ? "ring-amber-400/30 shadow-2xl" : ""
                          }`}
                          aria-label={`Show image ${i + 1}`}
                        >
                          <Image src={g.src} alt={g.alt ?? "thumb"} fill className="object-cover" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="sticky top-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{demo.title}</h1>
                    <p className="text-slate-300 mt-1">{demo.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold">{demo.price}</div>
                    <div className="text-sm text-slate-400">{demo.location}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold hover:scale-[1.01] transition-transform">
                    Book Viewing
                  </button>
                  <button className="py-3 px-4 rounded-2xl bg-white/6 border border-white/8 text-white/90 font-semibold hover:scale-[1.01] transition-transform">
                    Request Finance
                  </button>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-white/2 border border-white/6 backdrop-blur-md">
                  <div className="flex gap-3 items-center">
                    <div className="text-sm text-slate-300">VIN</div>
                    <div className="font-mono text-sm text-slate-100">{demo.vin}</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="text-sm text-slate-300">Fuel</div>
                    <div className="text-sm text-slate-100">{demo.fuel}</div>
                    <div className="text-sm text-slate-300">Transmission</div>
                    <div className="text-sm text-slate-100">{demo.transmission}</div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-amber-900/10 to-amber-700/6 border border-amber-500/8"
                >
                  <div className="text-sm text-slate-300">Highlights</div>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {(demo.features ?? []).map((f) => (
                      <li key={f} className="text-sm text-slate-100">• {f}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Details & specs section */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-20">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <article className="lg:col-span-2 bg-white/2 p-6 rounded-2xl border border-white/6 shadow-lg">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="mt-4 text-slate-200 leading-relaxed">{demo.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold">Gallery</h3>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                {demo.gallery.map((g, i) => (
                  <motion.div
                    key={g.src + i}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-xl overflow-hidden aspect-[3/2] relative"
                  >
                    <Image src={g.src} alt={g.alt ?? "gallery"} fill className="object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </article>

          <aside className="bg-gradient-to-b from-slate-900/40 to-black/40 p-6 rounded-2xl border border-white/6">
            <h3 className="text-lg font-semibold">Technical Specs</h3>
            <div className="mt-4">
              {Object.entries(demo.specs ?? {}).map(([k, v]) => (
                <SpecRow key={k} k={k} v={v} />
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm text-slate-300">Finance calculator</h4>
              <div className="mt-3 flex gap-3">
                <input
                  type="number"
                  defaultValue={demo.price.replace(/[^0-9]/g, "")}
                  className="w-full rounded-lg bg-white/5 p-2 text-white/90 placeholder:text-slate-400"
                />
                <button className="px-4 py-2 rounded-lg bg-amber-500 text-black font-semibold">Calculate</button>
              </div>
            </div>
          </aside>
        </motion.section>
      </main>

      {/* Call to action footer */}
      <footer className="border-t border-white/6 mt-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-sm text-slate-300">Ready to take the next step?</div>
            <div className="text-xl font-semibold">Contact our sales team — viewings available daily</div>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 bg-amber-400 rounded-2xl font-semibold">Call</button>
            <button className="px-6 py-3 bg-white/6 rounded-2xl">Send inquiry</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Sample vehicle used if none supplied --------------------------------------
const SAMPLE_VEHICLE: Vehicle = {
  id: "porsche-macan-4",
  title: "Porsche Macan 4S",
  subtitle: "2.9 V6 Turbo • 440 PS • Exceptional condition",
  price: "€64,900",
  mileage: "28,400 km",
  year: "2021",
  fuel: "Petrol",
  transmission: "7-speed PDK",
  location: "Paris - Charles Pozzi",
  vin: "WP1AA2A59LDA00000",
  description:
    "A stunning Porsche Macan 4S finished in Jet Black Metallic with a full leather interior. Carefully maintained with full service history; perfect balance of performance and everyday usability.",
  gallery: [
    { src: "/vehicles/porsche-macan-1.jpg", alt: "Macan front" },
    { src: "/vehicles/porsche-macan-2.jpg", alt: "Macan side" },
    { src: "/vehicles/porsche-macan-3.jpg", alt: "Macan interior" },
    { src: "/vehicles/porsche-macan-4.jpg", alt: "Macan rear" },
  ],
  features: ["Full service history", "Approved pre-owned", "Sports chrono package", "Burmester audio"],
  specs: {
    Power: "440 PS",
    Engine: "2.9 V6 twin-turbo",
    "0-100 km/h": "4.5 s",
    TopSpeed: "270 km/h",
    Weight: "1,870 kg",
  },
};


/*
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
    { src: "/imgs/dbfront.jpg", alt: "McLaren F1 front" },
    { src: "/imgs/dbhinterlinks.jpg", alt: "Interior" },
    { src: "/imgs/graeme-bg.jpg", alt: "Engine" },
    { src: "/imgs/dbnose.jpg", alt: "Rear" }
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
*/