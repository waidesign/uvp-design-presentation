"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Banknote, Settings, Info, Gauge, Download, FileText, X } from 'lucide-react';

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
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

          {/* Right Side: Sticker Video */}
          <div
            className="relative z-10 max-w-xl mx-auto overflow-hidden group cursor-pointer order-1 lg:order-2"
            onClick={() => setSelectedVideo('/sticker-vid.mp4')}
          >
            <video
              src="/sticker-vid.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            />

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-[#0EB075] rounded-full flex items-center justify-center sketch-shadow border-2 border-[#004B22]"
              >
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1.5"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Video Modal */}
    <AnimatePresence>
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video bg-black sketch-border sketch-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#0EB075] transition-colors flex items-center gap-2 font-mono"
            >
              <X size={24} />
              <span>CLOSE</span>
            </button>
            
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
