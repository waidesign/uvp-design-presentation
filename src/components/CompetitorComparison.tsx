"use client";
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function CompetitorComparison() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Carfax */}
      <div className="p-6 sketch-border bg-white flex flex-col items-center text-center opacity-80 grayscale-[0.5]">
        <div className="font-hand text-red-500 mb-2" style={{ fontFamily: '"Kalam", cursive' }}>The &quot;Big Guy&quot;</div>
        <img src="https://www.google.com/s2/favicons?domain=carfax.com&sz=64" className="w-12 h-12 mb-4" alt="Carfax" />
        <h4 className="text-xl mb-1" style={{ fontFamily: '"Gochi Hand", cursive' }}>CARFAX</h4>
        <div className="text-2xl font-bold mb-4" style={{ fontFamily: '"Kalam", cursive' }}>$44.99</div>
        <p className="font-body italic" style={{ fontFamily: '"Space Mono", monospace' }}>&quot;Has a selective memory when it comes to those &apos;minor&apos; accidents.&quot;</p>
      </div>

      {/* UsedVehiclePro */}
      <div className="p-6 sketch-border bg-[#F5FDF9] border-[#004B22] flex flex-col items-center text-center sketch-shadow scale-105 relative z-10 border-4">
        <div className="absolute -top-5 inline-flex items-center gap-1.5 bg-[#0EB075] text-[#ffffff] px-4 py-1.5 rounded-sm border-2 border-[#004B22]">
          <Sparkles size={16} strokeWidth={2.5} color="#ffffff" />
          <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', letterSpacing: '0.5px', color: '#ffffff', lineHeight: 1 }}>Best Value!</span>
        </div>
        <div className="font-hand text-[#0EB075] mb-2" style={{ fontFamily: '"Kalam", cursive' }}>The Full Truth</div>
        <div className="h-12 flex items-center mb-4">
           {/* Simple placeholder for logo in context */}
           <div className="bg-[#0EB075] text-white px-3 py-1 rounded font-bold">UVP</div>
        </div>
        <h4 className="text-xl mb-1" style={{ fontFamily: '"Gochi Hand", cursive' }}>UsedVehiclePro</h4>
        <div className="text-3xl font-bold mb-4 text-[#0EB075]" style={{ fontFamily: '"Kalam", cursive' }}>$19.99</div>
        <p className="font-body font-bold" style={{ fontFamily: '"Space Mono", monospace' }}>100% Transparency. 330M Records. Instant Results.</p>
      </div>

      {/* AutoCheck */}
      <div className="p-6 sketch-border bg-white flex flex-col items-center text-center opacity-80 grayscale-[0.5]">
        <div className="font-hand text-blue-500 mb-2" style={{ fontFamily: '"Kalam", cursive' }}>The Checklist</div>
        <img src="https://www.google.com/s2/favicons?domain=autocheck.com&sz=64" className="w-12 h-12 mb-4" alt="AutoCheck" />
        <h4 className="text-xl mb-1" style={{ fontFamily: '"Gochi Hand", cursive' }}>AutoCheck</h4>
        <div className="text-2xl font-bold mb-4" style={{ fontFamily: '"Kalam", cursive' }}>$29.99</div>
        <p className="font-body italic" style={{ fontFamily: '"Space Mono", monospace' }}>&quot;Checks the basics, but misses the skeletons in the trunk.&quot;</p>
      </div>
    </div>
  );
}
