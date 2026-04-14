"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, History,
  Box, Anchor, Scale, AlertCircle
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Trailer Types ───────────────────────────────────────────────────────────
const TRAILER_TYPES = [
  { icon: <Truck size={24} />, title: 'Utility Trailers', desc: 'Flatbeds, car haulers, and open cargo trailers.' },
  { icon: <Box size={24} />, title: 'Enclosed Cargo', desc: 'Secure box trailers and mobile workshops.' },
  { icon: <Anchor size={24} />, title: 'Boat Trailers', desc: 'Single and multi-axle marine transport units.' },
  { icon: <Scale size={24} />, title: 'Heavy Duty', desc: 'Dump trailers, livestock haulers, and goosenecks.' }
];

export default function TrailerVINLookupPage() {
  const [vin, setVin] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                <div className="flex items-center gap-2">
                  <Truck size={18} /> Utility & Cargo Verification
                </div>
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Trailer <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN Lookup</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Quickly verify specs, title status, and theft history for any trailer. From utility haulers to luxury boat trailers—get the data you need before you tow.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="trailer-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter Trailer VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-trailer-check-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Lookup Trailer
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
               className="hidden md:block relative"
            >
               <div style={{ 
                 aspectRatio: '16/10', backgroundColor: '#fff', 
                 border: '2px solid #004B22', borderRadius: '8px',
                 boxShadow: '12px 12px 0 0 rgba(0,75,34,0.1)',
                 backgroundImage: 'url("https://images.unsplash.com/photo-1537160352796-768a4e8e199d?q=80&w=2070&auto=format&fit=crop")',
                 backgroundSize: 'cover', backgroundPosition: 'center',
                 transform: 'rotate(2deg)'
               }}>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-xs">
                     <div className="flex items-center gap-2" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                        <CheckCircle size={14} className="text-[#0EB075]" /> Verified: 7,000lb Axle Rating
                     </div>
                  </div>
               </div>

               {/* Hand-drawn arrow */}
               <div className="absolute top-0 -left-20 hidden lg:block">
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-[#0EB075]">
                    <path d="M10 10C40 20 80 40 90 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                    <path d="M80 85L90 90L95 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <p className="whitespace-nowrap -mt-6 -ml-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#0EB075' }}>Industrial Access</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ TYPE GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                    Full <span className="wavy-underline" style={{ color: '#0EB075' }}>Coverage Matrix</span>
                 </h2>
                 <p className="mt-4" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                    Our data encompasses over 12 million trailer records across North America.
                 </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                 {TRAILER_TYPES.map((type, i) => (
                    <div key={i} className="p-8 text-center transition-all hover:-translate-y-1" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
                       <div className="w-16 h-16 bg-[#F5FDF9] rounded-full flex items-center justify-center text-[#0EB075] mx-auto mb-6 border-2 border-[#004B22]">
                          {type.icon}
                       </div>
                       <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{type.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#4B5563', lineHeight: '1.6' }}>{type.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ THEFT PROTECTION ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-5xl mx-auto px-6 lg:px-8 text-white text-center">
              <div className="inline-block p-4 mb-8 bg-red-600/20 border border-red-600/30 rounded" style={{ boxShadow: '4px 4px 0 0 rgba(220, 38, 38, 0.4)' }}>
                 <AlertCircle size={32} className="text-red-500 mx-auto mb-2" />
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '2.5rem' }}>Theft Recovery Protection</h2>
              </div>
              <p className="text-xl mb-12 mx-auto max-w-2xl" style={{ fontFamily: '"Space Mono", monospace', opacity: 0.9 }}>
                 Trailers are the #1 stolen vehicle category in the US. We scan specialized police indices that standard car reports often miss.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                 <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#0EB075', marginBottom: '16px' }}>Stolen Record Search</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', opacity: 0.7 }}>Immediate checks against the NICB (National Insurance Crime Bureau) and local law enforcement theft logs.</p>
                 </div>
                 <div className="bg-white/5 p-8 rounded-lg border border-white/10">
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#0EB075', marginBottom: '16px' }}>Ownership History</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', opacity: 0.7 }}>Verify past registrants to ensure the person selling you the trailer is the legal owner.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ VIN LOCATOR ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Locating Your <span className="wavy-underline" style={{ color: '#0EB075' }}>Trailer VIN</span>
              </h2>
              <div className="space-y-6">
                 {[
                   { t: 'Front A-Frame / Tongue', d: 'The most common location. Look for a metal plate or stamp on the left-hand side of the hitch assembly.' },
                   { t: 'Exterior Side Wall', d: 'Often found on a sticker near the front left corner of the trailer body, common for enclosed cargo units.' },
                   { t: 'Chassis Rail', d: 'Check the frame rail behind the left tire. Manufacturers often stamp the VIN directly into the metal for durability.' }
                 ].map((loc, i) => (
                    <div key={i} className="bg-white p-6 flex gap-6 items-start" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                       <div className="shrink-0 w-8 h-8 rounded-full bg-[#0EB075] flex items-center justify-center font-bold text-white shrink-0">{i+1}</div>
                       <div>
                          <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', marginBottom: '4px' }}>{loc.t}</h4>
                          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>{loc.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ FINAL CTA ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center p-12" style={{ backgroundColor: '#fff', border: '3px solid #004B22', borderRadius: '4px', boxShadow: '12px 12px 0 0 rgba(14, 176, 117, 0.2)' }}>
              <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Tow with <span style={{ color: '#0EB075' }}>Confidence</span>
              </h2>
              <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                 Get the full story on your trailer before you hit the road. Fast, accurate, and industry-trusted.
              </p>
              <button className="primary-button px-12 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                 Run Trailer Check
              </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
