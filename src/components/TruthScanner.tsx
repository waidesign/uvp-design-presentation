"use client";
import { useState } from 'react';
const cleanCarImg = '/assets/clean_car_sketch.png';
const damagedCarImg = '/assets/damaged_car_sketch.png';

export default function TruthScanner() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden sketch-border sketch-shadow bg-[#F9F7F2]" style={{ aspectRatio: '16/10' }}>
      {/* Label: Clean View */}
      <div className="absolute top-4 left-4 z-20 bg-white/90 px-3 py-1 sketch-border-sm text-[10px]" style={{ transform: 'rotate(-2deg)', fontFamily: '"Space Mono", monospace' }}>
        WHAT THEY SHOW YOU ✨
      </div>
      
      {/* Label: Real Truth */}
      <div className="absolute top-4 right-4 z-20 bg-red-100 px-3 py-1 sketch-border-sm border-red-500 text-red-500 text-[10px]" style={{ transform: 'rotate(2deg)', fontFamily: '"Space Mono", monospace' }}>
        THE REAL TRUTH 🚩
      </div>

      {/* Clean Car (Base Layer) */}
      <img 
        src={cleanCarImg} 
        alt="Clean Car" 
        className="absolute inset-0 w-full h-full object-contain p-4"
      />

      {/* Damaged Car (Reveal Layer) */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none z-10"
        style={{ width: `${sliderPos}%`, borderRight: '2px solid #004B22' }}
      >
        <div className="absolute inset-0" style={{ width: 'calc(100% * (100 / ' + sliderPos + '))' }}>
           <img 
            src={damagedCarImg} 
            alt="Damaged Car" 
            className="absolute inset-0 w-full h-full object-contain p-4"
            style={{ width: '100%' }}
          />
        </div>
      </div>


      {/* Custom Slider Overlay */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPos}
        onChange={(e) => setSliderPos(parseInt(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />
      
      {/* Handle */}
      <div 
        className="absolute top-0 bottom-0 pointer-events-none z-20 flex items-center justify-center"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#004B22] shadow-lg flex items-center justify-center -ml-4">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-[#004B22]/30"></div>
            <div className="w-0.5 h-3 bg-[#004B22]/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
