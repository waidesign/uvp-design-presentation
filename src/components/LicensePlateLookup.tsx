"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, AlertCircle, FileText, Activity, Search, MapPin } from 'lucide-react';

const licensePlateContent = [
  {
    icon: <AlertCircle className="text-[#ef4444]" size={24} />,
    title: "Accident History",
    desc: "Uncover hidden collisions, structural damage, and airbag deployments."
  },
  {
    icon: <FileText className="text-[#0EB075]" size={24} />,
    title: "Title & Liens",
    desc: "Spot salvage brands, flood history, and active financial liens instantly."
  },
  {
    icon: <Activity className="text-blue-500" size={24} />,
    title: "Mileage Checks",
    desc: "Verify odometer readings against historical data to catch rollbacks."
  },
  {
    icon: <ShieldCheck className="text-purple-500" size={24} />,
    title: "Stolen Vehicle Check",
    desc: "Cross-reference police databases to ensure the car isn't hot."
  }
];

export default function LicensePlateLookup() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Visual Plate Card */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              {/* Large Video Framer with Padding */}
              <div
                className="max-w-2xl mx-auto aspect-video relative group p-2"
              >
                <div className="relative w-full h-full">
                  {/* Background Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  >
                    <source src="/plate-vid.mp4" type="video/mp4" />
                  </video>

                  {/* Magic Scanner Effect */}
                  <motion.div
                    animate={{ top: ['0%', '100%', '0%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 h-1 bg-[#0EB075]/40 shadow-[0_0_15px_rgba(14,176,117,0.5)] z-10 pointer-events-none"
                  />
                </div>
              </div>

              {/* Decorative Labels */}
              <div className="absolute -top-10 -right-6 hidden sm:block">
                <div className="bg-[#FFE5E5] border-2 border-[#ef4444] px-4 py-2 rotate-6 sketch-shadow">
                  <span className="font-hand text-[#ef4444] text-lg">Instant Lookup!</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-12 hidden sm:block">
                <div className="bg-[#E5F7EE] border-2 border-[#004B22] px-4 py-2 -rotate-3 sketch-shadow">
                  <span className="font-hand text-[#004B22] text-lg">Support All 50 States</span>
                </div>
              </div>
            </motion.div>


          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col">
            <h2
              className="mb-6 leading-tight"
              style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}
            >
              Lookup owners and any license plate in the USA with our <span className="wavy-underline-red">license plate check</span>
            </h2>

            <p
              className="font-body mb-10 leading-relaxed text-slate-600"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Don't have the VIN handy? Our nationwide lookup connects directly to state registration databases to surface the critical history Carfax often misses.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {licensePlateContent.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#111827] mb-1" style={{ fontFamily: '"Space Mono", monospace', fontSize: '1rem' }}>
                      {item.title}
                    </h4>
                    <p className="text-sm opacity-70 leading-snug" style={{ fontFamily: '"Space Mono", monospace', fontSize: '0.85rem' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="primary-button font-body text-sm px-10 py-5 w-fit flex items-center gap-3 active:scale-95 group"
              style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, textTransform: 'uppercase' }}
            >
              <Search size={18} className="group-hover:scale-110 transition-transform" />
              Start Plate Lookup — $24.99
            </button>

            <div className="mt-6 flex items-center gap-2 text-xs opacity-50 font-body uppercase tracking-widest">
              <MapPin size={12} />
              Available for all 50 U.S. States
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
