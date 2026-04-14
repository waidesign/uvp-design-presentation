"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, CheckCircle, Shield, 
  Bike, AlertTriangle, Info, ArrowRight,
  Database, Gauge, Settings, History, HelpCircle
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'Where is the VIN on a motorcycle?',
    a: 'The VIN is typically located on the steering head (headtube) or the frame below the handlebars. It can also be found on the engine case, though the frame VIN is the official legal identifier.',
  },
  {
    q: 'Do all bikes have 17-digit VINs?',
    a: 'Motorcycles manufactured after 1981 follow the 17-digit international standard. Older vintage bikes may have shorter serial numbers, which we also support through our classic decoder engine.',
  },
  {
    q: 'Can I check for salvage titles?',
    a: 'Yes. Our reports identify if a bike has ever been declared a total loss by an insurance company, which is critical for safety and resale value.',
  },
];

// ─── Brands ──────────────────────────────────────────────────────────────────
const BRANDS = [
  'Harley-Davidson', 'Honda', 'Yamaha', 'Kawasaki', 'Suzuki', 
  'Ducati', 'BMW Motorrad', 'Triumph', 'KTM', 'Indian', 'Aprilia'
];

export default function MotorcycleVINLookupPage() {
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

          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                🏍️ Rider Protection Hub
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Motorcycle <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN Lookup</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Verify specs, accidents, and theft records for any bike. Protect your ride and your wallet from hidden salvage titles and mechanical red flags.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="moto-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter Motorcycle VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-moto-check-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Run Check
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
                 backgroundImage: 'url("https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop")',
                 backgroundSize: 'cover', backgroundPosition: 'center',
                 transform: 'rotate(2deg)'
               }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 rounded-lg">
                     <div className="text-white">
                        <div className="font-bold flex items-center gap-2 mb-1">
                           <Bike size={16} /> Heritage Softail
                        </div>
                        <div className="text-xs opacity-80" style={{ fontFamily: '"Space Mono", monospace' }}>
                           Verified: Clean Title • 2 Owners
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ DATA GRID ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                 {[
                   { icon: <Settings size={28} />, title: 'Full Specs', desc: 'Confirm engine displacement, cylinder count, and factory equipment.' },
                   { icon: <AlertTriangle size={28} />, title: 'Theft Reports', desc: 'We scan police databases to identify bikes currently reported as stolen.' },
                   { icon: <Gauge size={28} />, title: 'Mileage Check', desc: 'Detect "odometer rollbacks" through historical service and title logs.' },
                   { icon: <History size={28} />, title: 'Accident History', desc: 'Identify salvage titles, minor crashes, and major structural repairs.' }
                 ].map((item, i) => (
                    <div key={i} className="p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                       <div className="mb-4 text-[#0EB075]">{item.icon}</div>
                       <h3 className="mb-3" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{item.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41' }}>{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ VIN LOCATOR ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center text-white">
              <h2 className="mb-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Where&apos;s my <span style={{ color: '#0EB075' }}>VIN Number?</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative group p-4 bg-white/5 rounded-lg border border-white/10">
                    <Bike size={240} className="mx-auto text-white" />
                    <div className="absolute top-1/4 left-3/4 animate-pulse">
                        <div className="w-4 h-4 rounded-full bg-[#0EB075] border-2 border-white shadow-lg" />
                    </div>
                    <div className="absolute bottom-1/4 left-1/4 animate-pulse">
                        <div className="w-4 h-4 rounded-full bg-[#0EB075] border-2 border-white shadow-lg" />
                    </div>
                 </div>
                 <div className="text-left space-y-6">
                    <div className="flex gap-4">
                       <div className="shrink-0 w-8 h-8 rounded-full bg-[#0EB075] flex items-center justify-center font-bold">1</div>
                       <div>
                          <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>The Headtube</h4>
                          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', opacity: 0.7 }}>Check the side of the steering head directly behind the front forks. The most common location.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="shrink-0 w-8 h-8 rounded-full bg-[#0EB075] flex items-center justify-center font-bold">2</div>
                       <div>
                          <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>Engine Case</h4>
                          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', opacity: 0.7 }}>Stamped on the engine block near the bottom or side. Usually matches the frame VIN on post-1981 bikes.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ BRANDS ═══════════════ */}
        <section className="py-20 bg-white border-y border-slate-100">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40">
                 {BRANDS.map((b, i) => (
                    <div key={i} style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, fontSize: '14px' }}>
                       {b.toUpperCase()}
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F5FDF9' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Motorcycle <span style={{ color: '#0EB075' }}>FAQ</span>
              </h2>
              <div className="space-y-4">
                 {FAQ_ITEMS.map((faq, i) => (
                    <div key={i} style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', boxShadow: '2px 2px 0 0 #004B22' }}>
                       <button 
                         className="w-full flex justify-between items-center text-left px-6 py-5"
                         onClick={() => setOpenFaq(openFaq === i ? null : i)}
                       >
                          <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.2rem' }}>{faq.q}</span>
                          <ChevronDown size={20} style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
                       </button>
                       <AnimatePresence>
                          {openFaq === i && (
                             <motion.div 
                               initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                               className="overflow-hidden"
                             >
                                <div className="px-6 pb-6 pt-2 border-t" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
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
        <section className="py-20 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="p-12 text-center" style={{ backgroundColor: '#fff', border: '3px solid #004B22', borderRadius: '4px', boxShadow: '10px 10px 0 0 #0EB075' }}>
                 <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                    Protect Your Ride <span style={{ color: '#0EB075' }}>Today</span>
                 </h2>
                 <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                    Join 45,000+ riders who verified their bikes before completing a private-party purchase.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="primary-button px-10 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                       Check Bike VIN
                    </button>
                    <button className="px-10 py-4" style={{ 
                      border: '2px solid #004B22', borderRadius: '4px', 
                      fontFamily: '"Space Mono", monospace', fontWeight: 700,
                      backgroundColor: '#fff'
                    }}>
                       View Sample Report
                    </button>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
