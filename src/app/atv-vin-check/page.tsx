"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Tractor, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, History,
  Droplets, AlertTriangle, Zap, Map
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Off-Road Specs ─────────────────────────────────────────────────────────
const OFF_ROAD_SPECS = [
  { icon: <Zap size={22} />, title: 'Engine Output', desc: 'Confirm displacement (CC), cylinder count, and fuel induction type.' },
  { icon: <Settings size={22} />, title: 'Drivetrain', desc: 'Check for selectable 4x4, differential locks, and transmission type.' },
  { icon: <Database size={22} />, title: 'Factory Build', desc: 'Identify original color, trim level, and power steering options.' },
  { icon: <Search size={22} />, title: 'Series Check', desc: 'Verify frame series and manufacturing year for recalls.' }
];

export default function ATVVINCheckPage() {
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
                🏎️ Off-Road Reliability
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                ATV & UTV <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN Check</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Built for the trail, verified for the buyer. Don&apos;t get stuck with a stolen rig or a flooded machine. Verify specs, accidents, and theft records for all off-road vehicles.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="atv-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter ATV VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-atv-check-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Check Rig
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
               className="hidden md:block relative pl-12"
            >
               <div style={{ 
                 aspectRatio: '16/10', backgroundColor: '#fff', 
                 border: '2px solid #004B22', borderRadius: '8px',
                 boxShadow: '12px 12px 0 0 rgba(0,75,34,0.1)',
                 backgroundImage: 'url("https://images.unsplash.com/photo-1547447608-2782e584f004?q=80&w=2070&auto=format&fit=crop")',
                 backgroundSize: 'cover', backgroundPosition: 'center',
                 transform: 'rotate(2deg)'
               }}>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-xs">
                     <div className="flex items-center gap-2 mb-1" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                        <Tractor size={16} className="text-[#0EB075]" /> Polaris RZR XP 1000
                     </div>
                     <div style={{ fontFamily: '"Space Mono", monospace', opacity: 0.7 }}>
                        Verified: No Flood Damage • Clean Theft Record
                     </div>
                  </div>
               </div>
               
               {/* Mud splatter decoration */}
               <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="#004B22">
                     <path d="M20,20 Q40,10 60,30 T90,50 Q70,70 50,90 T10,60 Q10,40 20,20" />
                  </svg>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ SPEC GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                 {OFF_ROAD_SPECS.map((item, i) => (
                    <div key={i} className="group p-8 transition-all hover:-translate-y-1" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
                       <div className="mb-6 text-[#0EB075]">{item.icon}</div>
                       <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{item.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ ABUSE INDICATORS ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="mb-8" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem', color: '#111827' }}>
                       Identify <span className="wavy-underline" style={{ color: '#0EB075' }}>Terrain Abuse</span>
                    </h2>
                    <p className="mb-10" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                       Off-road vehicles live hard lives. Our reports flag red-flags that a local inspection might miss.
                    </p>
                    <div className="space-y-6">
                       <div className="flex gap-4 p-4 bg-white rounded border-2 border-[#004B22]" style={{ boxShadow: '4px 4px 0 0 #004B22' }}>
                          <Droplets size={24} className="text-[#0EB075] shrink-0" />
                          <div>
                             <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>Flood/Submersion History</h4>
                             <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', opacity: 0.7 }}>We track insurance and auction logs for vehicles labeled with water intrusion or marsh submersion.</p>
                          </div>
                      </div>
                      <div className="flex gap-4 p-4 bg-white rounded border-2 border-[#004B22]" style={{ boxShadow: '4px 4px 0 0 #004B22' }}>
                          <AlertTriangle size={24} className="text-red-500 shrink-0" />
                          <div>
                             <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>Frame Stress Reports</h4>
                             <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', opacity: 0.7 }}>Identify salvage titles from rollovers or structural damage caused by extreme off-road use.</p>
                          </div>
                      </div>
                    </div>
                 </div>
                 <div className="relative p-10 bg-[#004B22] rounded-lg" style={{ boxShadow: '12px 12px 0 0 #0EB075' }}>
                    <div className="text-white space-y-6">
                       <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px' }}>Supported Manufacturers</h3>
                       <div className="grid grid-cols-2 gap-4">
                          {['Polaris', 'Can-Am', 'Honda', 'Yamaha', 'Kawasaki', 'Arctic Cat'].map((brand, i) => (
                             <div key={i} className="flex items-center gap-2 text-sm" style={{ fontFamily: '"Space Mono", monospace' }}>
                                <CheckCircle size={14} className="text-[#0EB075]" /> {brand}
                             </div>
                          ))}
                       </div>
                       <div className="mt-8 pt-8 border-t border-white/10">
                          <p className="text-xs italic" style={{ fontFamily: '"Space Mono", monospace', opacity: 0.6 }}>
                             *Data covers 1995 to present day models for major US brands.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ VIN LOCATOR ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#fff' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="mb-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Locate Your <span className="wavy-underline" style={{ color: '#0EB075' }}>ATV VIN</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-8 text-left">
                 <div className="p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                    <h4 className="flex items-center gap-3 mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px' }}>
                       <div className="w-8 h-8 rounded-full bg-[#0EB075] flex items-center justify-center font-bold text-lg text-white">1</div>
                       Front Frame Rail
                    </h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       Most popular on Polaris and Can-Am. Look behind the front left wheel on the vertical frame support.
                    </p>
                 </div>
                 <div className="p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                    <h4 className="flex items-center gap-3 mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px' }}>
                       <div className="w-8 h-8 rounded-full bg-[#0EB075] flex items-center justify-center font-bold text-lg text-white">2</div>
                       Rear Spar / Subframe
                    </h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       Common on Japanese brands (Honda, Yamaha). Stamped into the lower frame tube near the footpegs or rear axle.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F5FDF9' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Off-Road <span style={{ color: '#0EB075' }}>FAQ</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "Do ATVs follow the 17-character VIN standard?", a: "Yes. All modern off-road vehicles (post-1981) sold in North America use a 17-digit VIN, just like cars and trucks." },
                   { q: "Can I check if an ATV was used for racing?", a: "While we don't have private track logs, our reports flag frequent ownership changes and mechanical repairs that often indicate heavy competitive use." },
                   { q: "Is a title search included?", a: "Yes. Many ATVs are sold with 'Bill of Sale' only, but we check if a legal title exists which is crucial for proving the seller actually owns the rig." }
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
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center p-12" style={{ backgroundColor: '#fff', border: '3px solid #004B22', borderRadius: '4px', boxShadow: '12px 12px 0 0 rgba(14, 176, 117, 0.2)' }}>
              <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Hit the Trail <span style={{ color: '#0EB075' }}>Safely</span>
              </h2>
              <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                 Access specialized theft and abuse data for your next off-road purchase. 100% Secure.
              </p>
              <button className="primary-button px-12 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                 Run ATV Search
              </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
