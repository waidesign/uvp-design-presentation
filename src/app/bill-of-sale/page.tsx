"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Download, ChevronDown, CheckCircle, 
  ShieldCheck, Gavel, Scale, History, MousePointer2,
  Lock, FileDigit, FileSignature
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── States ──────────────────────────────────────────────────────────────────
const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
  'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
  'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
  'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
  'Wisconsin', 'Wyoming'
];

export default function BillOfSalePage() {
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
                📄 Free Transaction Templates
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Legally Binding <span className="wavy-underline" style={{ color: '#0EB075' }}>Bill of Sale</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Protect yourself during vehicle transactions. Download a professional, state-specific bill of sale template to document ownership transfers for free.
              </p>

              <div className="flex flex-wrap gap-4">
                 <button 
                   className="primary-button group flex items-center gap-3 px-8 py-4 transition-all active:scale-95"
                   style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                 >
                    <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                    Download Free Template
                 </button>
                 <div className="flex items-center gap-2" style={{ fontFamily: '"Gochi Hand", cursive', color: '#0EB075', fontSize: '20px' }}>
                    <CheckCircle size={20} /> Legal in all 50 States
                 </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
               className="hidden md:block relative px-12"
            >
               {/* Paper mockup */}
               <div className="bg-white p-10 transform rotate-2 relative" style={{ 
                 border: '2px solid #004B22', borderRadius: '2px',
                 boxShadow: '16px 16px 0 0 #004B22'
               }}>
                  <div className="w-16 h-1 w-full bg-slate-100 mb-8" />
                  <h3 className="mb-6 uppercase text-center" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, letterSpacing: '2px' }}>VEHICLE BILL OF SALE</h3>
                  
                  <div className="space-y-4 mb-4 opacity-40">
                    <div className="h-6 w-full bg-slate-50 border-b border-dashed border-slate-200" />
                    <div className="h-6 w-full bg-slate-50 border-b border-dashed border-slate-200" />
                    <div className="h-6 w-3/4 bg-slate-50 border-b border-dashed border-slate-200" />
                  </div>

                  <div className="mt-12 flex justify-between gap-10">
                     <div className="w-1/2">
                        <div className="h-px w-full bg-slate-300 mb-2" />
                        <div className="text-[10px] text-slate-400 font-bold uppercase" style={{ fontFamily: '"Space Mono", monospace' }}>Seller Signature</div>
                        <div className="absolute -mt-10 ml-4 font-script text-2xl" style={{ fontFamily: '"Gochi Hand", cursive', color: '#0EB075' }}>John Doe</div>
                     </div>
                     <div className="w-1/2">
                        <div className="h-px w-full bg-slate-300 mb-2" />
                        <div className="text-[10px] text-slate-400 font-bold uppercase" style={{ fontFamily: '"Space Mono", monospace' }}>Buyer Signature</div>
                     </div>
                  </div>
               </div>

               {/* Stamp icon */}
               <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-[#0EB075] rounded-full flex items-center justify-center text-white transform -rotate-12 border-4 border-white shadow-lg">
                  <div className="text-center font-bold text-xs" style={{ fontFamily: '"Space Mono", monospace' }}>
                    CERTIFIED<br/>TEMPLATE
                  </div>
               </div>

               {/* Hand-drawn arrow */}
               <div className="absolute top-0 -left-16 hidden lg:block">
                  <svg width="120" height="80" viewBox="0 0 120 80" fill="none" className="text-[#0EB075]">
                    <path d="M10 10C30 5 80 5 100 60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5" />
                    <path d="M90 55L100 60L105 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  <p className="whitespace-nowrap -mt-6 -ml-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#0EB075' }}>100% Secure</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ BENEFITS GRID ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                 {[
                   { icon: <ShieldCheck size={28} />, title: 'Proof of Ownership', desc: 'Officially documents the moment equity in the vehicle moves from seller to buyer.' },
                   { icon: <Scale size={28} />, title: 'Seller Protection', desc: 'Relieves the seller of liability for accidents or tickets incurred after the sale.' },
                   { icon: <FileSignature size={28} />, title: 'Legal Requirement', desc: 'Many states require a signed bill of sale for the buyer to register the vehicle.' },
                   { icon: <MousePointer2 size={28} />, title: 'Terms Clarification', desc: 'Documents the price, odometer reading, and "As-Is" condition of the vehicle.' }
                 ].map((item, i) => (
                    <div key={i} className="group p-8 transition-all hover:-translate-y-2" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
                       <div className="mb-6 text-[#0EB075]">{item.icon}</div>
                       <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>{item.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ STATE DIRECTORY ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem', color: '#111827' }}>
                   State-Specific <span className="wavy-underline" style={{ color: '#0EB075' }}>Requirements</span>
                 </h2>
                 <p className="mt-4" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
                    Select your state to download required forms and view local DMV mandates.
                 </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                 {US_STATES.map((state, i) => (
                    <div key={i} 
                      className="bg-white py-3 px-4 flex items-center justify-between group cursor-pointer hover:bg-[#F5FDF9] transition-colors"
                      style={{ border: '1px solid #e5e7eb', borderRadius: '4px' }}
                    >
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', fontWeight: 700 }}>{state}</span>
                       <Download size={14} className="text-[#0EB075] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
             <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                Transaction <span style={{ color: '#0EB075' }}>Knowledge Base</span>
             </h2>

             <div className="space-y-4">
               {[
                 { q: "Is a bill of sale the same as a vehicle title?", a: "No. While both document the sale, the title is the official government-issued record of ownership. The bill of sale is a contract between two private parties that supports the title transfer process." },
                 { q: "Does a bill of sale need to be notarized?", a: "It depends on your state. Maryland, Louisiana, and Nebraska require notarization, while most others just require signatures from both parties." },
                 { q: "What happens if I sell a car without one?", a: "You remain liable. If the buyer never registers the car and gets in an accident or is caught for a crime, the vehicle will still be tied to your name in DMV records." },
                 { q: "Can I use this for motorcycles or trailers?", a: "Yes. Our standard template includes fields for VIN, serial numbers, and specific identifiers for all motor vehicle types." }
               ].map((faq, idx) => (
                <div key={idx} style={{ 
                  border: '2px solid #004B22', borderRadius: '4px', 
                  backgroundColor: '#fff', boxShadow: '3px 3px 0 0 #004B22',
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
        <section className="py-24" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="relative p-12 overflow-hidden bg-white" style={{ border: '4px solid #0EB075', borderRadius: '4px', boxShadow: '12px 12px 0 0 #0EB075' }}>
                 <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div>
                       <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '42px', color: '#111827', marginBottom: '20px' }}>
                          Ready to Sell?
                       </h2>
                       <p style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563', marginBottom: '32px' }}>
                          Don&apos;t leave your liability to chance. Secure your transaction with a verified template in under 60 seconds.
                       </p>
                       <div className="flex gap-4">
                          <button className="primary-button px-10 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                             Get Template Now
                          </button>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 text-center bg-[#F5FDF9]" style={{ border: '2px dashed #0EB075', borderRadius: '4px' }}>
                          <Lock size={32} className="text-[#0EB075] mx-auto mb-2" />
                          <div className="text-[10px] uppercase font-bold text-slate-500" style={{ fontFamily: '"Space Mono", monospace' }}>Privacy Protected</div>
                       </div>
                       <div className="p-6 text-center bg-[#F5FDF9]" style={{ border: '2px dashed #004B22', borderRadius: '4px' }}>
                          <History size={32} className="text-[#004B22] mx-auto mb-2" />
                          <div className="text-[10px] uppercase font-bold text-slate-500" style={{ fontFamily: '"Space Mono", monospace' }}>Lifetime Access</div>
                       </div>
                    </div>
                 </div>
                 
                 {/* Decorative background shape */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EB075]/10 rounded-full -mr-32 -mt-32 pointer-events-none" />
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
