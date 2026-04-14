"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShieldCheck, AlertCircle, FileText, ChevronRight, ArrowDown, Car, Flag } from 'lucide-react';
import { CarIcon, MotorcycleIcon, TruckIcon, RVIcon } from './VehicleIcons';

const damagedCarImg = '/assets/damaged_car_sketch.png';
const heroFrame = '/assets/hero_frame.svg';

export default function Hero() {
  const [vin, setVin] = useState('');
  const [isPeeled, setIsPeeled] = useState(false);

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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative mb-6"
              style={{
                backgroundColor: '#F9FEFB',
                border: '2px solid #004B22',
                borderRadius: '12px',
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
              className="flex items-center gap-4 font-body"
              style={{ fontSize: '16px', color: '#111827', fontFamily: '"Space Mono", monospace', fontWeight: 600 }}
            >
              <span>We support:</span>
              <div className="flex items-center gap-4" style={{ color: '#4B5563' }}>
                <CarIcon />
                <MotorcycleIcon />
                <TruckIcon />
                <RVIcon />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full max-w-[480px] relative cursor-pointer group"
              onClick={() => setIsPeeled(!isPeeled)}
              style={{ aspectRatio: '1/1' }}
            >
              {/* The Sketchy Frame SVG */}
              <img 
                src={heroFrame} 
                className="absolute inset-0 w-full h-full z-0 block pointer-events-none" 
                alt="Frame"
              />

              {/* Inner Content Area (where the magic happens) */}
              <div className="absolute inset-[6%] overflow-hidden z-10">
                {/* Hidden (Revealed) Side - Damaged Car */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#e8e8e8]">
                  <img 
                    src={damagedCarImg} 
                    alt="Damaged Car" 
                    className="w-full h-full object-contain grayscale brightness-90 relative z-0 p-8"
                  />
                </div>

                {/* Top Layer - "Good" Car / Placeholder */}
                <motion.div
                  className="absolute inset-0 z-20 bg-white flex items-center justify-center p-8 origin-bottom-left"
                  animate={{ 
                    rotate: isPeeled ? -95 : 0,
                    x: isPeeled ? -20 : 0,
                    y: isPeeled ? 20 : 0,
                    opacity: isPeeled ? 0 : 1
                  }}
                  transition={{ type: 'spring', stiffness: 60, damping: 15 }}
                >
                  <div className="text-center">
                    <div className="mb-3 flex justify-center text-[#0EB075]">
                      <Car size={72} />
                    </div>
                    <div className="font-body" style={{ fontSize: '14px', color: '#004B22', fontWeight: 700, fontFamily: '"Space Mono", monospace' }}>Vehicle History Report</div>
                    <div className="font-body mt-2" style={{ fontSize: '11px', color: '#666', fontFamily: '"Space Mono", monospace' }}>ID: 1G1RC6E40BU123456</div>
                  </div>
                </motion.div>
              </div>

              {/* The "Check this!🚩" Badge - Top Left */}
              <div 
                className="absolute -top-2 -left-6 z-30 pointer-events-none"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <div 
                  className="bg-white px-6 py-2 border border-[#EA4335] rounded-[4px] flex items-center gap-2"
                  style={{ 
                    boxShadow: '2px 2px 0px 0px #EA4335',
                    color: '#EA4335',
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: '16px',
                    fontWeight: 400
                  }}
                >
                  Check this! <Flag size={18} fill="#EA4335" />
                </div>
              </div>
            </motion.div>

            {/* "Click to reveal" label */}
            {!isPeeled && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                className="absolute -bottom-10 right-0 font-body text-xs flex items-center gap-2"
                style={{ color: '#0EB075', fontFamily: '"Kalam", cursive' }}
                transition={{ scale: { repeat: Infinity, duration: 2 }, opacity: { duration: 0.5 } }}
              >
                <span style={{ fontSize: '16px' }}>Click to reveal the truth!</span>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
