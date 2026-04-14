"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, History,
  Clipboard, Hammer, Palette, Cog, LayoutList
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Build Sheet Data ────────────────────────────────────────────────────────
const BUILD_COMPONENTS = [
  { icon: <Cog size={24} />, title: 'RPO Option Codes', desc: 'Every Regular Production Option (RPO) code listed, identifying exactly which engine, transmission, and suspension was installed.' },
  { icon: <Palette size={24} />, title: 'Paint & Trim', desc: 'Original factory paint codes and interior trim configurations. Essential for verifying "matching numbers" restorations.' },
  { icon: <History size={24} />, title: 'Production Date', desc: 'The precise day and shift your vehicle was manufactured, including the assembly plant location.' },
  { icon: <LayoutList size={24} />, title: 'Technical Specs', desc: 'Axle ratios, spring rates, alternator output, and specialized hardware codes used by factory mechanics.' }
];

export default function BuildSheetByVINPage() {
  const [vin, setVin] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #004B22 0px, transparent 1px, transparent 40px)',
          }} />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                📋 Factory DNA Decoder
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Vehicle <span className="wavy-underline" style={{ color: '#0EB075' }}>Build Sheet</span> Lookup
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                The most detailed technical record available. Discover every factory option code, mechanical specification, and production detail directly from the manufacturer database.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="build-sheet-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter 17-digit VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-build-sheet-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Get Build Sheet
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
               className="hidden md:block relative pl-12"
            >
               {/* Blueprint mockup */}
               <div className="bg-[#1e3a8a] p-10 transform -rotate-1 relative overflow-hidden" style={{ 
                 border: '2px solid #fff', borderRadius: '2px',
                 boxShadow: '16px 16px 0 0 #004B22'
               }}>
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  
                  <div className="relative z-10 text-white border-white/20 border-b pb-4 mb-8">
                     <h3 style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, letterSpacing: '4px', fontSize: '12px' }}>FACTORY PRODUCTION SHEET</h3>
                  </div>

                  <div className="space-y-4 mb-4 relative z-10">
                    <div className="flex justify-between text-[10px] text-white/60 font-mono">
                       <span>COMPONENT ID</span>
                       <span>STATUS</span>
                    </div>
                    <div className="h-px w-full bg-white/20" />
                    <div className="flex justify-between text-[11px] text-white font-mono">
                       <span>ENGINE: L8T 6.6L V8</span>
                       <span className="text-[#0EB075]">MATCHED</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-white font-mono">
                       <span>TRANS: ALLISON 10SPD</span>
                       <span className="text-[#0EB075]">MATCHED</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-white font-mono">
                       <span>AXLE: 3.73 RATIO</span>
                       <span className="text-[#0EB075]">MATCHED</span>
                    </div>
                  </div>

                  <div className="mt-12 opacity-30">
                     <svg viewBox="0 0 200 100" className="w-full h-24 stroke-white fill-none">
                        <path d="M10,90 L40,80 L70,85 L100,60 L130,65 L160,30 L190,35" strokeWidth="1" strokeDasharray="4 4" />
                        <rect x="10" y="20" width="180" height="60" strokeWidth="0.5" />
                     </svg>
                  </div>
               </div>

               {/* Hand-drawn annotation */}
               <div className="absolute -bottom-8 -left-8 hidden lg:block">
                  <p className="whitespace-nowrap" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#0EB075' }}>Pure Factory Intel</p>
                  <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="text-[#0EB075]">
                    <path d="M10 5 Q 50 40 90 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M85 15L90 5L80 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ COMPONENTS GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                    What&apos;s Inside a <span className="wavy-underline" style={{ color: '#0EB075' }}>Build Sheet</span>
                 </h2>
                 <p className="mt-4" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                    While a window sticker is for buyers, the build sheet is the master record for the factory and mechanics.
                 </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                 {BUILD_COMPONENTS.map((item, i) => (
                    <div key={i} className="p-8 group transition-all hover:-translate-y-1" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
                       <div className="mb-6 text-[#0EB075]">{item.icon}</div>
                       <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{item.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ STICKER VS BUILD SHEET ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Retail vs. <span style={{ color: '#0EB075' }}>Factory Data</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '10px 10px 0 0 #004B22' }}>
                 <div className="bg-white p-10 border-r-2 border-[#004B22]">
                    <h4 className="mb-6 text-center" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px' }}>Window Sticker</h4>
                    <p className="text-xs mb-8 text-center uppercase tracking-widest text-slate-400" style={{ fontFamily: '"Space Mono", monospace' }}>Marketing Document</p>
                    <ul className="space-y-4" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       <li className="flex gap-2"><span>✓</span> MSRP Pricing</li>
                       <li className="flex gap-2"><span>✓</span> Fuel Economy Ratings</li>
                       <li className="flex gap-2"><span>✓</span> Safety Star Ratings</li>
                       <li className="flex gap-2"><span>✓</span> Standard Feature Summary</li>
                    </ul>
                 </div>
                 <div className="bg-[#F5FDF9] p-10">
                    <h4 className="mb-6 text-center" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px' }}>Build Sheet</h4>
                    <p className="text-xs mb-8 text-center uppercase tracking-widest text-[#0EB075]" style={{ fontFamily: '"Space Mono", monospace' }}>Production Blueprint</p>
                    <ul className="space-y-4" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#2d4a38' }}>
                       <li className="flex gap-2 font-bold text-[#004B22]"><span>✓</span> RPO Option Codes</li>
                       <li className="flex gap-2 font-bold text-[#004B22]"><span>✓</span> Precise Build Date</li>
                       <li className="flex gap-2 font-bold text-[#004B22]"><span>✓</span> Mechanical Part IDs</li>
                       <li className="flex gap-2 font-bold text-[#004B22]"><span>✓</span> Factory Sequence #</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Technical <span style={{ color: '#0EB075' }}>QA</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "Where can I find my physical build sheet?", a: "Manufacturers often hid build sheets in the springs of seats, under the carpet, or on top of the fuel tank during assembly. Our digital lookup finds the cloud-based equivalent instantly." },
                   { q: "What is an RPO code?", a: "RPO stands for Regular Production Option. These are 3-character codes (like Z71 or LS3) that tell the factory exactly which components to bolt onto your specific frame." },
                   { q: "Does every car have a build sheet record?", a: "Most vehicles from 1990 onwards have digital records that we can access. For classic cars, records vary by manufacturer and assembly plant heritage." }
                 ].map((faq, idx) => (
                    <div key={idx} style={{ 
                      border: '2px solid #004B22', borderRadius: '4px', 
                      backgroundColor: '#fff', boxShadow: '2px 2px 0 0 #004B22',
                    }}>
                      <button 
                        className="w-full flex justify-between items-center text-left px-8 py-6"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      >
                        <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.4rem' }}>{faq.q}</span>
                        <ChevronDown size={22} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
                      </button>
                      <AnimatePresence>
                        {openFaq === idx && (
                          <motion.div 
                            initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-6 border-t pt-4" style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', lineHeight: '1.7', color: '#4B5563' }}>
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ FINAL CTA ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center p-12" style={{ backgroundColor: '#fff', border: '3px solid #004B22', borderRadius: '4px', boxShadow: '12px 12px 0 0 #0EB075' }}>
              <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Get the <span style={{ color: '#0EB075' }}>Full Blueprint</span>
              </h2>
              <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                 Verify your vehicle&apos;s authenticity and mechanical specifications in seconds. The most trusted source for technical build data.
              </p>
              <button className="primary-button px-12 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                 Retrieve Build Sheet
              </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
