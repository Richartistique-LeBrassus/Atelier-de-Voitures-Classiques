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
      <div className="font-medium text-neutral-950">{k}</div>
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
    <div className="min-h-screen bg-white text-neutral-950 uppercase py-24 md:py-44">
      {/* Hero / gallery */}
      <motion.header
        style={{ translateY }}
        className="relative overflow-hidden"
        aria-hidden
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-10 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={heroVariants}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden ring-1 ring-white/6 shadow-2xl">
                <div className="relative aspect-16/10 w-full">
                  {/* layered background glow */}
                  <motion.div
                    style={{ filter: blur }}
                    className="absolute inset-0 -z-10 "
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
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="sticky top-6 uppercase text-neutral-950 sm:shadow sm:p-4 
                mt-6 p-1 md:py-12"
              >
                <div className="flex items-center justify-between pb-5">
                  <div className="h-fit space-y-4">
                    <h1 className="text-5xl 
                    font-bold tracking-tighter font-mono pb-4">{demo.title}</h1>
                    <p className="mt-5">{demo.subtitle}</p>
                    <div className="text-xl sm:text-2xl font-bold font-mono">{demo.price}</div>
                    <div className="text-xs sm:text-sm">{demo.location}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button className="py-3 px-4 uppercase border bg-black text-green-50
                  font-semibold cursor-pointer">
                    Book Viewing
                  </button>
                  <button className="py-3 px-4 text-neutral-950 font-semibold uppercase cursor-pointer shadow-sm
                  ">
                    Request Finance
                  </button>
                </div>

                <div className="mt-6 sm:p-4 bg-white/2 border 
                border-white/6 backdrop-blur-md">
                  <div className="flex gap-3 items-center my-9">
                    <div className="text-sm font-bold">VIN</div>
                    <div className="font-mono text-sm ">{demo.vin}</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="text-sm font-bold">Fuel</div>
                    <div className="text-sm ">{demo.fuel}</div>
                    <div className="text-sm font-bold">Transmission</div>
                    <div className="text-sm ">{demo.transmission}</div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-6 sm:p-4"
                >
                  <div className="text-sm font-bold">Highlights</div>
                  <ul className="mt-3 grid grid-cols-2 gap-2 italic font-mono">
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
      <main className="max-w-[1400px] 
      mx-auto sm:px-6 lg:px-10 py-12 lg:py-20 uppercase">
        <motion.section
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <article className="lg:col-span-2 bg-white/2 
          p-6 border border-white/6 sm:shadow-xs">
            <h2 className="text-xl font-extrabold font-mono">STORY & HISTORY</h2>
            <p className="mt-4 leading-relaxed line-clamp-5 text-sm font-mono">{demo.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold">Gallery</h3>
              <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3">
                {demo.gallery.map((g, i) => (
                  <motion.div
                    key={g.src + i}
                    className="overflow-hidden aspect-3/2 relative"
                  >
                    <Image src={g.src} alt={g.alt ?? "gallery"} fill 
                      className="object-cover hover:brightness-75 transition-all duration-700 cursor-pointer" 
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </article>

          <aside className="bg-linear-to-b py-4 px-5 sm:shadow-xs">
            <h3 className="text-lg font-semibold">Technical Specs</h3>
            <div className="mt-4 text-neutral-950">
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
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 
        py-8 flex flex-col md:flex-row justify-between items-center gap-4">
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

const SAMPLE_VEHICLE: Vehicle = {
  id: "porsche-macan-4",
  title: "1960 Aston Martin DB4 GT Zagato Spec",
  subtitle: "5 speed • 395 Bhp • 4.7 litre",
  price: "€1,418,000",
  mileage: "28,400 km",
  year: "2021",
  fuel: "95-98 Octane (Optimal)",
  transmission: "7-speed PDK",
  location: "London - Graeme Hunt LTD.",
  vin: "WP1AA2A59LDA00000",
  description:
    "Fashioned in the spirit of the legendary DB4GT Zagato, this no-expense-spared build recreates one of the 1960s’ most coveted designs. Only 19 originals were produced between 1961–63, raced by icons like Salvadori and Moss, and today they command tens of millions. Even the later factory-approved Sanction II/III cars are rare and costly, leaving most enthusiasts far from reach. To meet demand, some have converted DB4s, DB5s and DB6s into Zagato-style cars. This example began life as a 1960 DB4 supplied to Canada. In the late 1990s a Scottsdale collector commissioned Andy Palmer of Sun Valley—an acclaimed master panel-beater—to craft a full aluminium Zagato body. His bare-metal work is documented in numerous photos. In 2005 a UK buyer flew to Arizona to purchase the car, later registering it with the DVLA and making further upgrades: Perspex sliding windows, a bespoke interior patterned after the famous 63 PH car, and a rebuilt 4.0-litre DBS engine with extensive new components. Suspension, brakes, fuel system and electrics were all renewed, and the car gained power steering and gas-strut panels. After minimal road use (219 miles), it was displayed inside his home. Later sold to a Canadian enthusiast, it underwent another major transformation: conversion back to LHD, full repaint, green leather retrim, chromed window surrounds, a 5-speed gearbox, and a 4.7-litre twin-plug engine producing 395 bhp—plus air-conditioning. Over $500,000 was invested in these works, completed to show-winning standards by Richard & Nic Grenon of DrivingTheBest. The result is a spectacular, near-factory-spec Zagato recreation—visually, mechanically and dynamically evoking the originals—ready to enjoy immediately.",
  gallery: [
    { src: "/imgs/dbfront.jpg", alt: "Macan front" },
    { src: "/imgs/dbhinterlinks.jpg", alt: "Macan side" },
    { src: "/imgs/graeme-bg.jpg", alt: "Macan interior" },
    { src: "/imgs/dbnose.jpg", alt: "Macan rear" },
    { src: "/imgs/dbinnenraum.jpg", alt: "Macan interior" },
    { src: "/imgs/dbplate.jpg", alt: "Macan rear" }      
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