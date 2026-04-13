"use client";
import { Play } from 'lucide-react';
const videoScannerBg = '/assets/video_scanner_bg.png';

export default function VideoDemo() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className="mb-3"
          style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}
        >
          Why we do it better...
        </h2>
        <p
          className="mb-12 font-hand"
          style={{ fontSize: '1.25rem', color: '#0EB075' }}
        >
          {"Watch our \"Full Truth\" engine in action"}
        </p>

        {/* Video Player Display Container */}
        <div 
          className="relative w-full aspect-video mx-auto bg-[#e5e5e5] sketch-border group cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
          style={{ 
             boxShadow: '4px 4px 0 0 #004B22',
             maxWidth: '900px'
          }}
        >
          {/* Background image map */}
          <img 
            src={videoScannerBg} 
            alt="Scanning vehicle demonstration" 
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Centered Play Button wrapper */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
             <div 
                className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0EB075] rounded-full flex items-center justify-center sketch-shadow-solid transition-transform active:scale-95"
                style={{
                  boxShadow: '2px 2px 0 0 #004B22',
                  border: '2px solid #004B22'
                }}
             >
                <div className="w-0 h-0 border-l-[14px] border-l-white border-y-[10px] border-y-transparent ml-1"></div>
             </div>
          </div>

          {/* Bottom Left Status Label */}
          <div 
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-3 py-1.5 backdrop-blur-md bg-black/60 text-white font-body text-[10px] sm:text-xs"
            style={{ fontFamily: '"Space Mono", monospace', border: '1.5px solid #111' }}
          >
            UsedVehiclePro_Valuation_v1.mp4
          </div>

          {/* Bottom Right Live Badge */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center sketch-border-sm bg-white overflow-hidden shadow-sm font-body text-[10px] sm:text-xs text-black" style={{ fontFamily: '"Space Mono", monospace' }}>
             <div className="bg-[#EA4335] text-white font-bold px-2 py-1 flex items-center justify-center">
                 LIVE
             </div>
             <div className="px-2 py-1 bg-[#EEF2F6]">
                 04:20
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
