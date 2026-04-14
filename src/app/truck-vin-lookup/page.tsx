"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, History,
  FileText, BarChart3, Construction
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Commercial Specs ────────────────────────────────────────────────────────
const COMMERCIAL_SPECS = [
  { label: 'GVWR Class', desc: 'Determine the Gross Vehicle Weight Rating class (Class 1-8).' },
  { label: 'Axle Config', desc: 'Confirm 4x2, 6x4, or specialized heavy-haul setups.' },
  { label: 'Engine Series', desc: 'Identify Cummins, Detroit, or Cat engine model and specs.' },
  { label: 'Brake Type', desc: 'Air brakes vs. hydraulic specifications for compliance.' },
  { label: 'Wheelbase', desc: 'Accurate measurements for flatbed or box fitting.' },
  { label: 'Cab Type', desc: 'Daycab vs. sleeper configurations as built by factory.' },
];

// ─── Brands ──────────────────────────────────────────────────────────────────
const TRUCK_BRANDS = [
  'Freightliner', 'Peterbilt', 'Kenworth', 'Volvo', 'Mack',
  'International', 'Western Star', 'Hino', 'Isuzu', 'Ford Heavy Duty'
];

export default function TruckVINLookupPage() {
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
                  <Truck size={20} /> Commercial Vehicle Hub
                </div>
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Heavy & Semi Truck <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN Lookup</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Access full history and specs for commercial vehicles. From Class 8 semis to heavy equipment—verify DOT compliance, ownership history, and factory builds instantly.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="truck-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter Truck VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-truck-check-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Check Fleet
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
                 backgroundImage: 'url("https://detailedvehiclehistory.com/blog/wp-content/uploads/2023/10/how-to-do-motorcycle-vin-check-1024x585.jpg")',
                 backgroundSize: 'cover', backgroundPosition: 'center',
                 transform: 'rotate(2deg)'
               }}>
                  {/* Overlay for Truck theme since I used a generic image */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
                     <Truck size={80} className="text-[#0EB075]" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent p-4 text-white text-xs">
                     <div className="flex items-center gap-2" style={{ fontFamily: '"Space Mono", monospace' }}>
                        <CheckCircle size={14} className="text-[#0EB075]" /> Commercial Database Connected
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ SPEC GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                    Commercial <span className="wavy-underline" style={{ color: '#0EB075' }}>Insight Dashboard</span>
                 </h2>
                 <p className="mt-4" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                    Our decoder goes beyond basic data to provide the specs fleet managers need.
                 </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                 {COMMERCIAL_SPECS.map((spec, i) => (
                    <div key={i} className="p-6 transition-all hover:-translate-y-1" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                       <div className="flex items-center gap-3 mb-3">
                          <Settings size={18} className="text-[#0EB075]" />
                          <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px' }}>{spec.label}</h4>
                       </div>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>{spec.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ WHY CHECK BLOCK ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8 text-white">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="mb-8" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3.5rem' }}>
                       Protect Your <span style={{ color: '#0EB075' }}>Business Assets</span>
                    </h2>
                    <div className="space-y-8">
                       <div className="flex gap-4">
                          <div className="shrink-0 w-12 h-12 bg-[#0EB075] rounded-full flex items-center justify-center font-bold text-2xl">1</div>
                          <div>
                             <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>Avoid Mechanical Failures</h4>
                             <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', opacity: 0.8 }}>View historical service logs and recall data to ensure your new fleet addition isn&apos;t a liability.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="shrink-0 w-12 h-12 bg-[#0EB075] rounded-full flex items-center justify-center font-bold text-2xl">2</div>
                          <div>
                             <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>Compliance & Safety</h4>
                             <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', opacity: 0.8 }}>Verify DOT records and state inspection history to remain compliant with federal regulations.</p>
                          </div>
                       </div>
                       <div className="flex gap-4">
                          <div className="shrink-0 w-12 h-12 bg-[#0EB075] rounded-full flex items-center justify-center font-bold text-2xl">3</div>
                          <div>
                             <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>Equity Verification</h4>
                             <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', opacity: 0.8 }}>Confirm ownership history and check for active liens that could lead to repossession of your equipment.</p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-8 bg-white/5 rounded-lg border border-white/10 text-center">
                       <BarChart3 size={40} className="text-[#0EB075] mx-auto mb-4" />
                       <div className="text-2xl font-bold" style={{ fontFamily: '"Space Mono", monospace' }}>850k+</div>
                       <div className="text-xs opacity-60" style={{ fontFamily: '"Space Mono", monospace' }}>FLEET TRUCKS ADDED</div>
                    </div>
                    <div className="p-8 bg-white/5 rounded-lg border border-white/10 text-center">
                       <Construction size={40} className="text-[#0EB075] mx-auto mb-4" />
                       <div className="text-2xl font-bold" style={{ fontFamily: '"Space Mono", monospace' }}>CLASS 1-8</div>
                       <div className="text-xs opacity-60" style={{ fontFamily: '"Space Mono", monospace' }}>FULL WEIGHT COVERAGE</div>
                    </div>
                    <div className="p-8 bg-white/5 rounded-lg border border-white/10 text-center col-span-2">
                       <div className="flex justify-center gap-8 opacity-60">
                          {TRUCK_BRANDS.slice(0, 4).map((b, i) => (
                             <span key={i} style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px' }}>{b.toUpperCase()}</span>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ VIN LOCATOR ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="mb-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Where To Find <span className="wavy-underline" style={{ color: '#0EB075' }}>Truck VINs</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                 <div className="bg-white p-6" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                    <h4 className="flex items-center gap-2 mb-3" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px' }}>
                       <div className="w-2 h-2 rounded-full bg-[#0EB075]" /> Door Pillar
                    </h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       Commonly found on a metal plate or sticker on the driver-side door jamb or pillar.
                    </p>
                 </div>
                 <div className="bg-white p-6" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                    <h4 className="flex items-center gap-2 mb-3" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px' }}>
                       <div className="w-2 h-2 rounded-full bg-[#0EB075]" /> Chassis Rail
                    </h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       On many semi-trucks, the VIN is stamped directly into the frame rail, usually near the front suspension.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F5FDF9' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Commercial <span style={{ color: '#0EB075' }}>QA</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "How long is a truck VIN?", a: "Standard commercial truck VINs produced since 1981 are 17 characters long. Pre-1981 trucks and specialized heavy equipment may have shorter serial numbers." },
                   { q: "Do you provide maintenance records?", a: "Yes, our reports include historical service data from dealership networks and authorized repair centers across the US and Canada." },
                   { q: "Can I check multi-axle configurations?", a: "Absolutely. Our heavy-duty decoder provides detailed axle ratings, gear ratios, and suspension types as delivered from the factory." }
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
           <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="p-12 text-center" style={{ backgroundColor: '#fff', border: '3px solid #004B22', borderRadius: '4px', boxShadow: '10px 10px 0 0 #0EB075' }}>
                 <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3.5rem' }}>
                    Maximize Fleet <span style={{ color: '#0EB075' }}>Operational Safety</span>
                 </h2>
                 <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                    Access the industry&apos;s most reliable heavy-duty dataset. Protect your business from bad acquisitions.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="primary-button px-10 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                       Check Truck VIN
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
