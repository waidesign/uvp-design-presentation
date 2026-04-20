"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Banknote, Settings, Info, Gauge, Download, FileText } from 'lucide-react';

const stickerFeatures = [
  {
    icon: <Banknote className="text-[#0EB075]" size={24} />,
    title: "Original MSRP",
    desc: "Verify the authentic base price and total retail value when it left the factory."
  },
  {
    icon: <Settings className="text-blue-500" size={24} />,
    title: "Factory Options",
    desc: "Full list of all installed packages, standalone options, and trim specifications."
  },
  {
    icon: <Info className="text-purple-500" size={24} />,
    title: "Technical Specs",
    desc: "Detailed engine metrics, transmission type, drivetrain, and color combinations."
  },
  {
    icon: <Gauge className="text-[#ef4444]" size={24} />,
    title: "Fuel Economy",
    desc: "Original EPA mileage estimates and greenhouse gas ratings."
  }
];

export default function WindowStickerLookup() {
  return (
    <section className="py-24 bg-[#F9F7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="flex flex-col order-2 lg:order-1">
            <h2
              className="mb-6 leading-tight"
              style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}
            >
              Lookup original MSRP and factory specs for any vehicle with our <span className="wavy-underline" style={{ color: '#111827', textDecorationColor: '#0EB075' }}>Window Sticker</span> check
            </h2>

            <p
              className="font-body mb-10 leading-relaxed text-slate-600"
              style={{ fontFamily: '"Space Mono", monospace' }}
            >
              Want to know exactly what was installed in that car when it was new? Our authentic Window Sticker (Monroney Label) lookup reveals every factory detail, helping you verify equipment and negotiate with total authority.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {stickerFeatures.map((item, idx) => (
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
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Get Window Sticker — $14.99
            </button>
          </div>

          {/* Right Side: Mockup Sticker */}
          <div className="relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative z-10"
            >
              <div 
                className="max-w-md mx-auto aspect-[0.7/1] bg-white sketch-border sketch-shadow p-8 flex flex-col relative overflow-hidden group"
                style={{ backgroundColor: '#fff' }}
              >
                {/* Sticker Header */}
                <div className="border-b-2 border-slate-200 pb-4 mb-6 flex justify-between items-start">
                  <div>
                    <div className="text-[10px] font-body opacity-50 uppercase tracking-widest mb-1">Official Document</div>
                    <div className="font-headline text-2xl text-[#111827]">MONRONEY LABEL</div>
                    <div className="text-[10px] font-body text-[#0EB075] font-bold">CERTIFIED AUTHENTIC</div>
                  </div>
                  <FileText size={32} className="text-slate-200" />
                </div>

                {/* MSRP Box */}
                <div className="bg-[#F5FDF9] border border-[#004B22]/10 p-4 mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-body opacity-60">Total Vehicle Price</span>
                    <span className="font-headline text-xl text-[#0EB075]">$48,250.00</span>
                  </div>
                  <div className="w-full h-1 bg-slate-100 relative overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5 }}
                      className="absolute inset-0 bg-[#0EB075]/20"
                    />
                  </div>
                </div>

                {/* Content Skeleton */}
                <div className="space-y-4 flex-grow opacity-40">
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                    <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                  </div>
                  <div className="h-px bg-slate-100 w-full my-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded-full" />
                      <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded-full" />
                      <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                  <div className="h-px bg-slate-100 w-full my-4" />
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-100" />
                    <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-100" />
                    <div className="w-8 h-8 rounded-sm bg-slate-50 border border-slate-100" />
                  </div>
                </div>

                {/* Bottom Deco */}
                <div className="mt-8 border-t-2 border-dashed border-slate-100 pt-4 flex justify-between items-center opacity-30">
                  <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-dotted" />
                  <div className="text-[8px] font-body uppercase text-right leading-tight">
                    Information provided under<br />
                    Vehicle Information Act 15 U.S.C.
                  </div>
                </div>

                {/* Scanner effect (reuse design from Plate Lookup) */}
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                  className="absolute left-0 right-0 h-0.5 bg-[#0EB075]/10 z-0 pointer-events-none"
                />
              </div>

              {/* Decorative tags */}
              <div className="absolute -top-6 -left-6 rotate-[-12deg] z-20">
                 <div className="bg-[#0EB075] text-white font-headline px-4 py-2 sketch-shadow border-2 border-[#004B22]">
                    VERIFIED SPECS
                 </div>
              </div>

              <div className="absolute -bottom-6 -right-4 rotate-[5deg] z-20">
                 <div className="bg-white text-[#111827] font-hand text-lg px-4 py-2 sketch-shadow border-2 border-[#111827]">
                    Original MSRP included
                 </div>
              </div>
            </motion.div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#0EB075]/5 rounded-full -z-10 blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
