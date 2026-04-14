"use client";
import { Search, ThumbsUp, Clock, Mail } from 'lucide-react';
import React from 'react';

export default function FinalCTA() {
  return (
    <section className="py-20" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-[960px] mx-auto px-6">
        <div 
          className="relative w-full bg-[#0eb075] px-8 sm:px-16 py-20 text-center sketch-border overflow-hidden flex flex-col items-center gap-16"
          style={{ 
            borderRadius: '4px',
            boxShadow: '4px 4px 0px 0px #004b22'
          }}
        >
          {/* Header Container */}
          <div className="flex flex-col gap-4 text-center">
            <h2 
              style={{ 
                fontFamily: '"Gochi Hand", cursive', 
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', 
                color: '#fff',
                lineHeight: '1.1'
              }}
            >
              Ready to unmask that car?
            </h2>
            <p 
              className="p-color-light"
              style={{ 
                fontFamily: '"Space Mono", monospace', 
                fontSize: '18px', 
              }}
            >
              {"Stop guessing. Start knowing. Let's do this!"}
            </p>
          </div>

          {/* Search Container */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-4 bg-[#f9fff7] p-2 pr-2 pl-4 sm:pr-2 sm:pl-6 w-full max-w-[576px] mx-auto sketch-border"
          >
             <Search size={22} color="#3d4a41" className="hidden sm:block shrink-0" />
             <input 
                type="text"
                placeholder="Paste that VIN here."
                className="bg-transparent border-none outline-none w-full placeholder-[#3d4a41]"
                style={{ fontFamily: '"Gochi Hand", cursive', color: '#3d4a41', fontSize: '20px' }}
             />
             <button 
                className="primary-button flex shrink-0 items-center justify-center px-8 py-3 w-full sm:w-auto mt-2 sm:mt-0"
             >
                <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#fff' }}>Check VIN</span>
             </button>
          </div>

          {/* Stats Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full pt-4">
             <div className="flex flex-col items-center gap-4">
                <ThumbsUp size={48} color="#fff" strokeWidth={1.5} />
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '40px', color: '#fff', lineHeight: 1 }}>97%</div>
                <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1', lineHeight: 1.5 }}>Satisfaction rate</div>
             </div>
             <div className="flex flex-col items-center gap-4">
                <Clock size={48} color="#fff" strokeWidth={1.5} />
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '40px', color: '#fff', lineHeight: 1 }}>24/7</div>
                <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1', lineHeight: 1.5 }}>Always available</div>
             </div>
             <div className="flex flex-col items-center gap-4">
                <Mail size={48} color="#fff" strokeWidth={1.5} />
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '40px', color: '#fff', lineHeight: 1 }}>12-24h</div>
                <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1', lineHeight: 1.5 }}>Avg. response time</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
