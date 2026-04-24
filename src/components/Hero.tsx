"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ArrowDown } from 'lucide-react';

export default function Hero() {
  const [vin, setVin] = useState('');

  return (
    <section className="relative pt-16 pb-20 md:pt-24 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column – copy + search */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="leading-tight mb-6"
              style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#111827', fontWeight: 600 }}
            >
              {"Don't buy a"}{' '}
              <span className="wavy-underline-red" style={{ color: '#EA4335', textDecorationColor: '#EA4335' }}>Lemon!</span><br />
              Get the{' '}
              <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#00A38D' }}>Real Story!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body mb-10 leading-relaxed"
              style={{ fontSize: '20px', color: '#4B5563', fontFamily: '"Space Mono", monospace', maxWidth: '610px' }}
            >
              {"We dug through the dusty archives so you don't have to."}
              {"Accidents, title drama, mileage tricks—we find 'em all in seconds."}
            </motion.p>

            {/* VIN Search Box */}
            <motion.div
              id="vin-search-section"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative mb-6"
              style={{
                backgroundColor: '#F9FEFB',
                border: '2px solid #004B22',
                borderRadius: '2px',
                padding: '24px',
                maxWidth: '694px',
                boxShadow: '2px 2px 0 0 #004B22'
              }}
            >
              {/* "Type it here!" label */}
              <div
                className="absolute -top-4 left-4 px-3 py-1 font-body text-sm flex items-center gap-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '2px solid #004B22',
                  borderRadius: '6px',
                  transform: 'rotate(-2deg)',
                  fontFamily: '"Gochi Hand", cursive',
                  color: '#004B22'
                }}
              >
                Type it here! <ArrowDown size={14} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-1">
                <div
                  className="flex-grow flex items-center px-4 py-3 gap-3"
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}
                >
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="vin-input-hero"
                    className="bg-transparent border-none outline-none w-full font-body text-sm placeholder-slate-300"
                    placeholder="Paste that 17-digit VIN..."
                    type="text"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                    style={{ fontSize: '14px', fontFamily: '"Space Mono", monospace' }}
                  />
                </div>
                <button
                  id="check-vin-hero"
                  className="primary-button font-body text-sm px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    fontFamily: '"Space Mono", monospace'
                  }}
                >
                  Check VIN
                </button>
              </div>
            </motion.div>

            {/* Helper links */}
            <div className="flex items-center justify-between max-w-[694px] mb-10 px-2">
              <a
                href="#"
                className="font-body"
                style={{
                  color: '#191C1E',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '1.125rem',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.75rem',
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationSkipInk: 'auto',
                  textDecorationColor: '#000',
                  textDecorationThickness: 'auto',
                  textUnderlineOffset: 'auto',
                  textUnderlinePosition: 'from-font'
                }}
              >
                Where can I find the VIN?
              </a>
              <a
                href="#"
                className="font-body"
                style={{
                  color: '#191C1E',
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '1.125rem',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '1.75rem',
                  textDecorationLine: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationSkipInk: 'auto',
                  textDecorationColor: '#000',
                  textDecorationThickness: 'auto',
                  textUnderlineOffset: 'auto',
                  textUnderlinePosition: 'from-font'
                }}
              >
                View sample
              </a>
            </div>

            {/* Vehicle type support */}
            <div
              className="flex flex-wrap items-center gap-y-3 gap-x-4 font-body"
              style={{ color: '#111827', fontFamily: '"Space Mono", monospace', fontWeight: 600 }}
            >
              <span className="opacity-60 uppercase tracking-widest text-[12px]" style={{ fontFamily: '"Space Mono", monospace' }}>We support:</span>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#4B5563]">
                <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-slate-300 last:after:content-none whitespace-nowrap">Cars</span>
                <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-slate-300 last:after:content-none whitespace-nowrap">Motorcycles</span>
                <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-slate-300 last:after:content-none whitespace-nowrap">Trucks</span>
                <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-slate-300 last:after:content-none whitespace-nowrap">RVs</span>
                <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-slate-300 last:after:content-none whitespace-nowrap">ATVs</span>
                <span className="relative after:content-['•'] after:absolute after:-right-2.5 after:text-slate-300 last:after:content-none whitespace-nowrap">Trailers</span>
                <span className="whitespace-nowrap">&amp; Heavy Duty</span>
              </div>
            </div>
          </div>

          {/* Right column – Hero Video Graphic */}
          <div className="flex items-center justify-center relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative w-full max-w-[640px]"
            >
              <video
                src="/hero-vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ display: 'block' }}
              />

              {/* Decorative elements to match the sketchy vibe */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-[#0EB075]/10 rounded-full blur-2xl -z-10"
              />
              <div 
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#EA4335]/5 rounded-full blur-3xl -z-10"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
