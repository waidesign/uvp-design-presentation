"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, 
  UserPlus, FileText, Activity, AlertCircle
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Warranty Data ──────────────────────────────────────────────────────────
const WARRANTY_TYPES = [
  { icon: <ShieldCheck size={26} />, title: 'Bumper-to-Bumper', desc: 'Comprehensive coverage for almost every component on the vehicle, from infotainment to sensors.' },
  { icon: <Settings size={26} />, title: 'Powertrain', desc: 'Long-term protection for the engine, transmission, and drive axles—the most expensive parts to repair.' },
  { icon: <Activity size={26} />, title: 'Emissions', desc: 'Federally mandated coverage for the catalytic converter, ECM, and other exhaust system parts.' },
  { icon: <UserPlus size={26} />, title: 'Roadside Assist', desc: '24/7 emergency support for towing, fuel delivery, and lockouts provided by the manufacturer.' }
];

export default function WarrantyByVINPage() {
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
                🛡️ Active Protection Check
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Check <span className="wavy-underline" style={{ color: '#0EB075' }}>Warranty by VIN</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Is your car still covered? Verify the current status of the bumper-to-bumper, powertrain, and emissions warranties in seconds. Avoid paying for repairs that should be free.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="warranty-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter 17-digit VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-warranty-check-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Lookup Coverage
                  </button>
                </div>
              </div>
            </motion.div>

            {/* WARRANTY STATUS MOCKUP */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
               className="hidden md:block relative bg-white p-10"
               style={{ border: '3px solid #004B22', borderRadius: '2px', boxShadow: '16px 16px 0 0 rgba(14, 176, 117, 0.15)' }}
            >
               <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-dashed border-[#c8dfc8]">
                  <div>
                    <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px' }}>Warranty Certificate</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#94a3b8' }}>VIN: 1HGCP2F83BA0XXXXX</p>
                  </div>
                  <div className="px-3 py-1 bg-[#0EB075] text-white text-[10px] rounded font-bold uppercase tracking-wider">Active</div>
               </div>
               
               <div className="space-y-6">
                  {[
                    { l: 'Original In-Service Date', v: 'Jan 15, 2021', c: 'text-slate-400' },
                    { l: 'Bumper-to-Bumper', v: 'Expired (3yr/36k)', c: 'text-red-500' },
                    { l: 'Powertrain', v: 'Active (5yr/60k)', c: 'text-[#0EB075]' },
                    { l: 'Corrosion', v: 'Active (5yr/Unlimited)', c: 'text-[#0EB075]' }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-end border-b border-slate-100 pb-3">
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#3D4A41' }}>{row.l}</span>
                       <span className={row.c} style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', fontWeight: 700 }}>{row.v}</span>
                    </div>
                  ))}
               </div>
               
               <div className="mt-10 p-4 bg-[#F5FDF9] border border-[#0EB075]/20 rounded text-[11px]" style={{ fontFamily: '"Space Mono", monospace', color: '#2d4a38' }}>
                  <Info size={14} className="inline mr-2 mb-1" /> Estimated 1 year 2 months remaining on Powertrain protection.
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ COVERAGE GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                    Understand Your <span className="wavy-underline" style={{ color: '#0EB075' }}>Protection</span>
                 </h2>
                 <p className="mt-4" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                    Most modern vehicles come with these four layers of factory coverage.
                 </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                 {WARRANTY_TYPES.map((type, i) => (
                    <div key={i} className="p-8 group transition-all hover:-translate-y-1" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
                       <div className="mb-6 text-[#0EB075]">{type.icon}</div>
                       <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{type.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{type.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ TRANSFERABILITY ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                 <div className="relative order-2 md:order-1">
                    <img 
                       src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop" 
                       alt="Service Dept" 
                       className="rounded border-2 border-[#004B22]"
                       style={{ boxShadow: '-12px 12px 0 0 #0EB075' }}
                    />
                    <div className="absolute -bottom-6 -right-6 bg-white p-4" style={{ border: '2px solid #004B22', boxShadow: '4px 4px 0 0 #004B22' }}>
                       <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>Certified Coverage</p>
                    </div>
                 </div>
                 <div className="order-1 md:order-2">
                    <h2 className="mb-8" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                       Does the Warranty <span className="wavy-underline" style={{ color: '#0EB075' }}>Transfer?</span>
                    </h2>
                    <p className="mb-8 leading-relaxed" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                       One of the biggest advantages of buying a late-model used car is the remaining factory warranty. But not all coverages follow the car to a second owner.
                    </p>
                    <div className="space-y-4">
                       {[
                         'Second Owner Rights: Most powertrain warranties (e.g., Hyundai/Kia) reduce from 10 years to 5 years for the second owner.',
                         'Administrative Fees: Some brands require a small transfer fee to move the roadside assistance or extended service plan.',
                         'Maintenance Proof: You may need records of past service to honor the remaining warranty if a major failure occurs.'
                       ].map((item, i) => (
                          <div key={i} className="flex gap-3">
                             <div className="shrink-0 mt-1"><CheckCircle size={16} className="text-[#0EB075]" /></div>
                             <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>{item}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Warranty <span style={{ color: '#0EB075' }}>Intel</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "What voids a vehicle warranty?", a: "Contrary to myth, doing your own oil change doesn't void it. However, installing non-factory engine tunes, major lift kits, or ignoring recommended maintenance can lead to denied claims." },
                   { q: "How is the 'In-Service Date' calculated?", a: "This is the day the car was first sold to its original owner, or the day it was put into service as a dealer demo vehicle. All warranty countdowns start here." },
                   { q: "Can I check for extended warranties?", a: "Our lookup primarily identifies manufacturer factory warranties. Third-party extended plans are often private and don't show up in factory VIN indexers." }
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
                 Fix it for <span style={{ color: '#0EB075' }}>Free?</span>
              </h2>
              <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                 Verify your coverage status before you pay for repairs. Fast, official data for any make or model.
              </p>
              <button className="primary-button px-12 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                 Start Warranty Check
              </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
