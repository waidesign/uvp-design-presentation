"use client";
import { useState } from 'react';
const imgLeft = '/assets/image1.png';  // What they show you (Clean)
const imgRight = '/assets/image2.png'; // The real truth (Crashed)

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

      {/* Left side car (Image 1) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img 
          src={imgLeft} 
          alt="What They Show You" 
          className="w-full h-full object-contain p-4"
        />
      </div>

      {/* Vertical Divider Line */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-[#004B22]"
        style={{ left: `${sliderPos}%` }}
      />

      {/* Right side car (Image 2) */}
      <div 
        className="absolute inset-0 z-0"
        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
      >
        <img 
          src={imgRight} 
          alt="The Real Truth" 
          className="w-full h-full object-contain p-4"
        />
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
