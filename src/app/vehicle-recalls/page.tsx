"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  AlertTriangle, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, 
  Bell, Phone, MapPin, FileText
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Recall Data ────────────────────────────────────────────────────────────
const RECALL_TYPES = [
  { icon: <AlertTriangle size={24} />, title: 'Safety Recalls', desc: 'Critical mechanical or structural issues that could cause injury or fire. Must be fixed immediately.' },
  { icon: <Settings size={24} />, title: 'Compliance Recalls', desc: 'Vehicles that fail to meet federal safety, bumper, or theft protection standards.' },
  { icon: <Shield size={24} />, title: 'Emissions Recalls', desc: 'Faulty catalytic converters, sensors, or ECUs that cause the vehicle to exceed pollution limits.' },
  { icon: <Bell size={24} />, title: 'Service Campaigns', desc: 'Non-safety technical improvements recommended by the manufacturer to improve reliability.' }
];

export default function VehicleRecallsPage() {
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
                color: '#EF4444', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                ⚠️ Critical Safety Alerts
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Vehicle <span className="wavy-underline" style={{ color: '#EF4444' }}>Recall Check</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Is your car safe to drive? Check for open safety recalls from the NHTSA and manufacturers. Verify if your vehicle needs urgent repairs before you hit the road.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="recall-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter 17-digit VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-recall-check-btn"
                    className="primary-button bg-[#EF4444] hover:bg-[#DC2626] border-[#EF4444] px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, boxShadow: '5px 5px 0 0 #7F1D1D' }}
                  >
                    Check for Recalls
                  </button>
                </div>
              </div>
            </motion.div>

            {/* RECALL ALERT BANNER */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
               className="hidden md:block relative p-10 bg-white"
               style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '12px 12px 0 0 rgba(239, 68, 68, 0.1)' }}
            >
               <div className="mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 border-2 border-red-600">
                     <AlertTriangle size={24} />
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#EF4444' }}>Recalls are FREE</h3>
               </div>
               
               <p className="mb-8" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', lineHeight: '1.7' }}>
                  By federal law, all safety-related recall repairs must be provided by the manufacturer at <strong>zero cost</strong> to the owner, regardless of the vehicle&apos;s age or warranty status.
               </p>
               
               <div className="space-y-4">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded flex gap-4 items-start">
                     <Info size={18} className="text-[#0EB075] shrink-0 mt-1" />
                     <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#64748b' }}>Includes repairs for steering, brakes, airbags, seatbelts, and fuel systems.</p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded flex gap-4 items-start">
                     <Info size={18} className="text-[#0EB075] shrink-0 mt-1" />
                     <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#64748b' }}>Valid at any manufacturer-authorized dealership in the United States.</p>
                  </div>
               </div>
               
               {/* Sketchy arrow */}
               <div className="absolute -top-10 -right-4 hidden lg:block">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-red-500 transform rotate-12">
                     <path d="M10 50 Q 30 10 55 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                     <path d="M45 10L55 15L52 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ RECALL TYPES GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                    Types of <span className="wavy-underline" style={{ color: '#EF4444' }}>Recalls</span>
                 </h2>
                 <p className="mt-4" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                    Understanding the severity level of your vehicle alert.
                 </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                 {RECALL_TYPES.map((type, i) => (
                    <div key={i} className="p-8 group transition-all hover:-translate-y-1" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
                       <div className="mb-6 text-[#EF4444]">{type.icon}</div>
                       <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{type.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{type.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ RECALL RESOLUTION ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="mb-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 What To Do If <span className="wavy-underline" style={{ color: '#EF4444' }}>Open Recall</span> Found
              </h2>
              
              <div className="space-y-6 text-left">
                 {[
                   { t: 'Check Recall Details', d: 'Read the specific failure description to understand the risk (e.g., "Park outside due to fire risk").', icon: <Search size={20} /> },
                   { t: 'Contact Authorized Dealer', d: 'Call your local manufacturer-authorized dealership. Have your VIN ready.', icon: <Phone size={20} /> },
                   { t: 'Schedule FREE Repair', d: 'The dealership will order the parts and perform the fix at no cost to you.', icon: <CheckCircle size={20} /> },
                   { t: 'Keep Documentation', d: 'Save the service record showing the recall was closed to maintain your vehicle value.', icon: <FileText size={20} /> }
                 ].map((step, i) => (
                    <div key={i} className="bg-white p-6 flex gap-6 items-start" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                       <div className="shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0">
                          {step.icon}
                       </div>
                       <div>
                          <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', marginBottom: '4px' }}>{step.t}</h4>
                          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>{step.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Recall <span style={{ color: '#EF4444' }}>QA</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "Do vehicle recalls expire?", a: "Safety recalls do not expire. They follow the vehicle until the repair is completed, even if the car is 20 years old and has had multiple owners." },
                   { q: "Can a dealer refuse to do a recall?", a: "No. Federal law requires authorized dealers to perform safety recall repairs for free. If they refuse, you should report the dealership to the manufacturer and the NHTSA." },
                   { q: "What if I already paid for the repair?", a: "If you paid for a repair that was later mandated as a recall, you are often eligible for a full reimbursement from the manufacturer. Save your receipts!" }
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
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center p-12" style={{ backgroundColor: '#fff', border: '3px solid #EF4444', borderRadius: '4px', boxShadow: '12px 12px 0 0 rgba(239, 68, 68, 0.1)' }}>
              <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem', color: '#EF4444' }}>
                 Safety First
              </h2>
              <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                 Don&apos;t take chances with your safety. Check your VIN against the latest recall databases instantly.
              </p>
              <button className="primary-button bg-[#EF4444] border-[#EF4444] px-12 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, boxShadow: '8px 8px 0 0 #7F1D1D' }}>
                 Run Safety Check
              </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
