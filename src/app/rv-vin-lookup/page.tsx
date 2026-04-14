"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Caravan, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, History,
  Droplets, AlertTriangle, Home, Map
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Leisure Specs ──────────────────────────────────────────────────────────
const LEISURE_SPECS = [
  { icon: <Settings size={22} />, title: 'Coach Specs', desc: 'Confirm Class A/B/C, chassis manufacturer, and original build weight.' },
  { icon: <Home size={22} />, title: 'Floor Plans', desc: 'Identify factory sleeping capacity, slide-out count, and layout codes.' },
  { icon: <Droplets size={22} />, title: 'Tank Capacities', desc: 'View original freshwater, greywater, and blackwater tank sizes.' },
  { icon: <Database size={22} />, title: 'Appliance Inventory', desc: 'List factory-installed generators, HVAC units, and water heaters.' }
];

export default function RVVINLookupPage() {
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
                <div className="flex items-center gap-2">
                  <Caravan size={18} /> Home on Wheels History
                </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                RV & Motorhome <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN Lookup</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Don&apos;t risk your life savings on a lemon. Verify floor plans, factory specs, water damage history, and market value for campers, 1-ton towables, and luxury motorhomes.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="rv-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter RV VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-rv-check-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Check Value
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
                 backgroundImage: 'url("https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop")',
                 backgroundSize: 'cover', backgroundPosition: 'center',
                 transform: 'rotate(2deg)'
               }}>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent p-6 text-white text-xs">
                     <div className="flex items-center gap-2 mb-1" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                        <Caravan size={16} className="text-[#0EB075]" /> Winnebago Adventurer
                     </div>
                     <div style={{ fontFamily: '"Space Mono", monospace', opacity: 0.7 }}>
                        Class A Diesel • 42,000 Miles • Clean Title
                     </div>
                  </div>
               </div>
               
               {/* Post-it Badge */}
               <div className="absolute -top-6 -right-2 bg-[#FFF9C4] p-4 text-sm" style={{ 
                 border: '2px solid #004B22', borderRadius: '2px', transform: 'rotate(5deg)',
                 boxShadow: '4px 4px 0 0 rgba(0,0,0,0.1)', maxWidth: '160px'
               }}>
                  <p style={{ fontFamily: '"Gochi Hand", cursive', color: '#004B22', lineHeight: '1.2' }}>
                    &ldquo;Saved $8,500 on a hidden rebuild!&rdquo;
                  </p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ SPEC GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                 {LEISURE_SPECS.map((item, i) => (
                    <div key={i} className="group p-8 transition-all hover:-translate-y-1" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
                       <div className="mb-6 text-[#0EB075]">{item.icon}</div>
                       <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{item.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ SCAM PREVENTION ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem', color: '#111827' }}>
                    Avoid Common <span className="wavy-underline" style={{ color: '#0EB075' }}>RV Scams</span>
                 </h2>
                 <p className="mt-4" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                    Used RV sales are high-risk. Don&apos;t be a victim of undisclosed damage.
                 </p>
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                 <div className="bg-white p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '8px 8px 0 0 rgba(239, 68, 68, 0.1)' }}>
                    <div className="text-red-600 mb-6 flex items-center gap-2">
                       <AlertTriangle size={20} />
                       <span style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, fontSize: '14px' }}>DANGER #1</span>
                    </div>
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', marginBottom: '12px' }}>Hidden Water Damage</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       Sellers often mask roof leaks and floor rot with cosmetic fixes. We check insurance logs for structural claims.
                    </p>
                 </div>
                 <div className="bg-white p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '8px 8px 0 0 rgba(239, 68, 68, 0.1)' }}>
                    <div className="text-red-600 mb-6 flex items-center gap-2">
                       <AlertTriangle size={20} />
                       <span style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, fontSize: '14px' }}>DANGER #2</span>
                    </div>
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', marginBottom: '12px' }}>Salvage "Washing"</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       Totaled RVs moved across state lines to "wash" a salvage title. We track original title brands nationwide.
                    </p>
                 </div>
                 <div className="bg-white p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '8px 8px 0 0 rgba(239, 68, 68, 0.1)' }}>
                    <div className="text-red-600 mb-6 flex items-center gap-2">
                       <AlertTriangle size={20} />
                       <span style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, fontSize: '14px' }}>DANGER #3</span>
                    </div>
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', marginBottom: '12px' }}>Odometer Fraud</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                       Motorhomes are easy targets for mileage rollbacks. Our data scans years of registration and service history.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ IDENTITY GUIDE ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-5xl mx-auto px-6 lg:px-8 text-white">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Locate Your <span style={{ color: '#0EB075' }}>RV Identity</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                 <div className="p-8 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="flex items-center gap-3 mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>
                       <div className="w-8 h-8 rounded-full bg-[#0EB075] flex items-center justify-center font-bold text-lg">1</div>
                       Motorhomes (Class A/B/C)
                    </h4>
                    <ul className="space-y-4 ml-11" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                       <li>• Driver&apos;s side dashboard plate</li>
                       <li>• Steering column assembly</li>
                       <li>• Passenger side door jamb</li>
                    </ul>
                 </div>
                 <div className="p-8 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="flex items-center gap-3 mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>
                       <div className="w-8 h-8 rounded-full bg-[#0EB075] flex items-center justify-center font-bold text-lg">2</div>
                       Towables (Travel Trailers/5ths)
                    </h4>
                    <ul className="space-y-4 ml-11" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                       <li>• A-Frame or Drawbar (left side)</li>
                       <li>• Exterior left front corner</li>
                       <li>• Inside cabinet doors (secondary tag)</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F5FDF9' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 RV Buyer <span style={{ color: '#0EB075' }}>Questions</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "What should I look for in an RV history report?", a: "Priority should be title brands (Salvage/Flood), active liens (financial debt), and recall history which can affect gas safety and appliance functionality." },
                   { q: "Can you provide a market valuation?", a: "Yes. Our reports include fair market value estimates based on recent auction sales and regional dealer data." },
                   { q: "Do you check for recalls on appliances?", a: "We provide factory build data which allows owners to check specific oven, water heater, and HVAC serial numbers against manufacturer recall databases." }
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
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="p-12 text-center" style={{ backgroundColor: '#fff', border: '3px solid #004B22', borderRadius: '4px', boxShadow: '10px 10px 0 0 #0EB075' }}>
                 <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                    Adventure <span style={{ color: '#0EB075' }}>Awaits</span>
                 </h2>
                 <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                    Don&apos;t let a hidden history ruin your retirement or family vacation. Check the VIN now.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button className="primary-button px-10 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                       Run RV Report
                    </button>
                    <button className="px-10 py-4" style={{ border: '2px solid #004B22', borderRadius: '4px', fontFamily: '"Space Mono", monospace', fontWeight: 700, backgroundColor: '#fff' }}>
                       View RV Sample
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
