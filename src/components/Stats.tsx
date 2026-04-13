"use client";
import React from 'react';

export default function Stats() {
  const stats = [
    { label: "Cars we've grilled", value: '4.7M+' },
    { label: 'Lying odometers found', value: '142K' },
    { label: 'Bent bumpers detected', value: '1.9M+' },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="relative max-w-[960px] mx-auto bg-white px-12 py-16 sm:px-20 sm:py-24 sketch-border sketch-shadow"
        >
          <div className="text-center mb-16 sm:mb-24 max-w-2xl mx-auto">
            <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              The Full Truth in Numbers
            </h2>
            <p className="font-body leading-relaxed" style={{ fontSize: '13px', color: '#4B5563', fontFamily: '"Space Mono", monospace' }}>
              {"We dug through the dusty archives so you don't have to."}<br className="hidden sm:block"/>
              {"Accidents, title drama, mileage tricks-we find 'em all in seconds."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div 
                  className="mb-4 leading-none" 
                  style={{ 
                    fontFamily: '"Kalam", cursive', 
                    fontSize: '48px',
                    color: '#0EB075',
                    fontWeight: 700
                  }}
                >
                  {stat.value}
                </div>
                <div 
                  className="font-body" 
                  style={{ 
                    fontSize: '13px',
                    fontFamily: '"Space Mono", monospace',
                    color: '#4B5563'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
