"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

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
  hover: {
    scale: 1.05,
    rotate: 1,
    transition: {
      duration: 0.5,
      ease: easeInOut, // ✅ works
    },
  },
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
      <div className="">{v}</div>
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
    <div className="min-h-screen bg-white text-neutral-950 uppercase">
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
              <div className="relative overflow-hidden ring-1 ring-white/6 shadow-2xl">
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

                  {/* mini thumbnails 
                  <div className="absolute -bottom-6 left-6 right-6">
                    <div className="flex gap-3 overflow-x-auto py-4 px-2">
                      {demo.gallery.map((g, i) => (
                        <motion.button
                          key={g.src + i}
                          onClick={() => setSelected(i)}
                          whileHover="hover"
                          variants={imageCard}
                          className={`shrink-0 ring-1 ring-white/6 overflow-hidden w-28 h-16 md:w-36 md:h-20 transition-shadow ${
                            i === selected ? "ring-amber-400/30 shadow-2xl" : ""
                          }`}
                          aria-label={`Show image ${i + 1}`}
                        >
                          <Image src={g.src} alt={g.alt ?? "thumb"} fill className="object-cover" />
                        </motion.button>
                      ))}
                    </div>
                  </div>*/}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="sticky top-6 uppercase text-neutral-950 shadow p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{demo.title}</h1>
                    <p className=" mt-1">{demo.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold">{demo.price}</div>
                    <div className="text-sm text-slate-400">{demo.location}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 uppercase border font-semibold hover:scale-[1.01] transition-transform">
                    Book Viewing
                  </button>
                  <button className="py-3 px-4  bg-white/6 border border-white/8 text-white/90 font-semibold hover:scale-[1.01] transition-transform">
                    Request Finance
                  </button>
                </div>

                <div className="mt-6 p-4  bg-white/2 border border-white/6 backdrop-blur-md">
                  <div className="flex gap-3 items-center">
                    <div className="text-sm ">VIN</div>
                    <div className="font-mono text-sm ">{demo.vin}</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="text-sm ">Fuel</div>
                    <div className="text-sm ">{demo.fuel}</div>
                    <div className="text-sm ">Transmission</div>
                    <div className="text-sm ">{demo.transmission}</div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-6 p-4"
                >
                  <div className="text-sm ">Highlights</div>
                  <ul className="mt-3 grid grid-cols-2 gap-2">
                    {(demo.features ?? []).map((f) => (
                      <li key={f} className="text-sm ">• {f}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Details & specs section */}
      <main className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12 lg:py-20 uppercase">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <article className="lg:col-span-2 bg-white/2 p-6 border border-white/6 shadow-lg">
            <h2 className="text-xl font-semibold">STORY & HISTORY</h2>
            <p className="mt-4 leading-relaxed">{demo.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold">Gallery</h3>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                {demo.gallery.map((g, i) => (
                  <motion.div
                    key={g.src + i}
                    whileHover={{ scale: 1.02 }}
                    className="overflow-hidden aspect-3/2 relative"
                  >
                    <Image src={g.src} alt={g.alt ?? "gallery"} fill className="object-cover" />
                  </motion.div>
                ))}
              </div>
            </div>
          </article>

          <aside className="bg-linear-to-b py-4 px-3 drop-shadow-2xl">
            <h3 className="text-lg font-semibold">Technical Specs</h3>
            <div className="mt-4">
              {Object.entries(demo.specs ?? {}).map(([k, v]) => (
                <SpecRow key={k} k={k} v={v} />
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm ">Finance calculator</h4>
              <div className="mt-3 flex gap-3">
                <input
                  type="number"
                  defaultValue={demo.price.replace(/[^0-9]/g, "")}
                  className="w-full bg-white/5 p-2 placeholder:text-slate-400"
                />
                <button className="px-4 py-2 font-semibold uppercase">Calculate</button>
              </div>
            </div>
          </aside>
        </motion.section>
      </main>

      {/* Call to action footer */}
      <footer className="border-t border-white/6 mt-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-sm ">Ready to take the next step?</div>
            <div className="text-xl font-semibold">Contact our sales team — viewings available daily</div>
          </div>

          <div className="flex gap-3 uppercase">
            <button className="px-6 py-3 font-semibold uppercase font-mono">Call</button>
            <button className="px-6 py-3 uppercase font-mono">Send inquiry</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Sample vehicle used if none supplied --------------------------------------
const SAMPLE_VEHICLE: Vehicle = {
  id: "porsche-macan-4",
  title: "1960 Aston Martin DB4 GT Zagato Spec",
  subtitle: "5 speed • 390 Bhp • 4.7 litre",
  price: "€64,900",
  mileage: "28,400 km",
  year: "2021",
  fuel: "Petrol",
  transmission: "7-speed PDK",
  location: "London - Graeme Hunt LTD.",
  vin: "WP1AA2A59LDA00000",
  description:
    "A stunning Porsche Macan 4S finished in Jet Black Metallic with a full leather interior. Carefully maintained with full service history; perfect balance of performance and everyday usability.",
  gallery: [
    { src: "/imgs/dbfront.jpg", alt: "Macan front" },
    { src: "/imgs/dbhinterlinks.jpg", alt: "Macan side" },
    { src: "/imgs/graeme-bg.jpg", alt: "Macan interior" },
    { src: "/imgs/dbnose.jpg", alt: "Macan rear" },
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