"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, CheckCircle, Shield, 
  AlertTriangle, History, Flag, Database, Gavel, 
  Wallet, ShieldAlert, ArrowRight, FileText
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Can a VIN Number be traced if its stolen?',
    a: 'Absolutely. Law enforcement agencies use the 17-digit VIN to flag vehicles in the National Crime Information Center (NCIC). When a VIN is checked during a traffic stop or sale, it immediately pops up as stolen.',
  },
  {
    q: 'What are the odds of finding a stolen car?',
    a: 'According to NHTSA, nearly 50% of stolen vehicles are eventually recovered, but many are found in "stripped" condition. Checking the VIN before you buy ensures you arent the one holding a stolen asset when the police track it down.',
  },
  {
    q: 'How often are cars stolen in the US?',
    a: 'A motor vehicle is stolen every 35 seconds in the United States. This makes VIN verification an essential step for any private-party purchase.',
  },
  {
    q: 'Which databases do you check for theft?',
    a: 'We scan nationwide records from the NICB, FBI\'s NCIC, NMVTIS, and state-level law enforcement databases to ensure no theft record is missed.',
  },
];

// ─── Theft Rates ──────────────────────────────────────────────────────────────
const THEFT_RATES = [
  { model: 'Ford F-150', rate: '1,815' },
  { model: 'Hyundai Elantra', rate: '1,296' },
  { model: 'Chevy Silverado', rate: '1,207' },
  { model: 'Hyundai Sonata', rate: '1,060' },
  { model: 'Honda Civic', rate: '921' },
  { model: 'Kia Optima', rate: '719' },
  { model: 'Honda Accord', rate: '296' },
  { model: 'Kia Soul', rate: '271' },
];

export default function StolenVINCheckPage() {
  const [vin, setVin] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
              <a href="/" className="hover:text-[#0EB075] transition-colors">Home</a>
              <span>/</span>
              <span style={{ color: '#0EB075' }}>Stolen VIN Check</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                <div className="flex items-center gap-2">
                  <ShieldAlert size={20} /> Instant Police Record Scan
                </div>
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Stolen VIN Check — Verify <span className="wavy-underline" style={{ color: '#0EB075' }}>Theft Records</span>
              </h1>

              <p className="mb-10 mx-auto leading-relaxed" style={{ 
                fontFamily: '"Space Mono", monospace', fontSize: '17px', 
                color: '#3D4A41', maxWidth: '620px',
              }}>
                Every 35 seconds, a car is stolen. Don&apos;t accidentally buy one. We scan 330M+ records to find theft dates, recovery status, and police markings.
              </p>
            </motion.div>

            {/* VIN search */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mx-auto mt-4" 
              style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '28px', maxWidth: '700px', boxShadow: '5px 5px 0 0 #004B22' }}
            >
              <div className="absolute -top-4 left-5 px-3 py-1" style={{ 
                backgroundColor: '#FFF9C4', border: '2px solid #004B22', borderRadius: '4px', 
                transform: 'rotate(-2deg)', fontFamily: '"Gochi Hand", cursive', color: '#004B22', fontSize: '14px',
              }}>
                Scan Police Database
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input 
                    id="stolen-check-input"
                    className="bg-transparent border-none outline-none w-full uppercase"
                    placeholder="Enter 17-digit VIN..." 
                    type="text" 
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase())}
                    maxLength={17}
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '1px' }}
                  />
                </div>
                <button 
                  id="run-stolen-check-btn"
                  className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', fontWeight: 700 }}
                >
                  Verify Now
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ THEFT STATS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                 <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                    Most <span className="wavy-underline" style={{ color: '#0EB075' }}>Stolen Vehicles</span>
                 </h2>
                 <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '600px', margin: '0 auto' }}>
                    Theft rates are skyrocketing. Here are the models most targeted by thieves in the last 24 months.
                 </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {THEFT_RATES.map((item, i) => (
                    <div key={i} className="p-6 text-center" style={{ 
                      backgroundColor: '#F5FDF9', border: '2px solid #004B22', borderRadius: '4px',
                      boxShadow: '4px 4px 0 0 #004B22'
                    }}>
                       <div className="text-xs text-slate-500 mb-1" style={{ fontFamily: '"Space Mono", monospace' }}>THEFT FREQUENCY</div>
                       <div className="text-xl font-bold text-[#0EB075]" style={{ fontFamily: '"Space Mono", monospace' }}>{item.rate}</div>
                       <div className="mt-2" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>{item.model}</div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ RISK FACTORS ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                 <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6" style={{ border: '2px solid #ef4444' }}>
                       <Gavel className="text-red-600" size={32} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px' }}>Legal Issues</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.7' }}>
                       Buying a stolen car is a crime, even if you didn&apos;t know. You risk being charged with &ldquo;Receiving Stolen Property&rdquo; if you can&apos;t prove due diligence.
                    </p>
                 </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6" style={{ border: '2px solid #3b82f6' }}>
                       <Wallet className="text-blue-600" size={32} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px' }}>Total Loss</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.7' }}>
                       If the insurance company or original owner claims the car, it will be seized by police. You lose both the car and the money you paid for it.
                    </p>
                 </div>
                 <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6" style={{ border: '2px solid #f59e0b' }}>
                       <ShieldAlert className="text-yellow-600" size={32} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px' }}>Safety Risks</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.7' }}>
                       Stolen cars are often involved in high-speed chases, dangerous overloads, or &ldquo;chop shop&rdquo; tampering that leaves the structural integrity compromised.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ DATABASES ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="p-12" style={{ backgroundColor: '#004B22', borderRadius: '4px', border: '3px solid #0EB075', boxShadow: '10px 10px 0 0 #0EB075' }}>
                 <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                       <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '42px', color: '#fff', marginBottom: '20px' }}>
                          Official Records Linked
                       </h2>
                       <p className="text-white opacity-80 mb-8" style={{ fontFamily: '"Space Mono", monospace' }}>
                          We don&apos;t just check one database. We aggregate theft records from the most authoritative sources in the country.
                       </p>
                       <ul className="space-y-4">
                          {[
                            'National Insurance Crime Bureau (NICB)',
                            'FBI\'s National Crime Information Center (NCIC)',
                            'National Motor Vehicle Title Info System (NMVTIS)',
                            'State & Local Law Enforcement Databases'
                          ].map((d, i) => (
                             <li key={i} className="flex items-center gap-3 text-white" style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px' }}>
                                <BadgeCheck size={18} className="text-[#0EB075]" /> {d}
                             </li>
                          ))}
                       </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-white/5 p-6 rounded border border-white/10 text-center">
                          <Database size={32} className="text-[#0EB075] mx-auto mb-2" />
                          <div className="text-[#0EB075] font-bold text-lg" style={{ fontFamily: '"Space Mono", monospace' }}>330M+</div>
                          <div className="text-white/60 text-[10px]" style={{ fontFamily: '"Space Mono", monospace' }}>RECORDS SCANNED</div>
                       </div>
                       <div className="bg-white/5 p-6 rounded border border-white/10 text-center">
                          <History size={32} className="text-[#0EB075] mx-auto mb-2" />
                          <div className="text-[#0EB075] font-bold text-lg" style={{ fontFamily: '"Space Mono", monospace' }}>REAL-TIME</div>
                          <div className="text-white/60 text-[10px]" style={{ fontFamily: '"Space Mono", monospace' }}>DB COUPLING</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              Stolen Check <span style={{ color: '#0EB075' }}>FAQs</span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ 
                  border: '2px solid #004B22', borderRadius: '2px', 
                  backgroundColor: '#fff', overflow: 'hidden', boxShadow: '2px 2px 0 0 #004B22',
                }}>
                  <button 
                    className="w-full flex justify-between items-center text-left px-6 py-5 gap-4"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.2rem', color: '#111827' }}>{faq.q}</span>
                    <ChevronDown size={20} style={{ 
                      color: '#004B22', flexShrink: 0,
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease'
                    }} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="px-6 pb-5" style={{ 
                          fontFamily: '"Space Mono", monospace', fontSize: '13px', 
                          color: '#3D4A41', borderTop: '1px solid #e5e7eb', lineHeight: '1.7'
                        }}>
                          <div className="pt-4">{faq.a}</div>
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
        <section className="py-20" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px' }}>
                Verify Possession <span style={{ color: '#0EB075' }}>Instantly</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>
                Every second counts. Run your VIN through the National Crime Information Center via our gateway.
              </p>
              <div style={{ backgroundColor: '#fff', border: '2px solid #0EB075', borderRadius: '4px', padding: '32px', boxShadow: '6px 6px 0 0 #0EB075' }}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      id="footer-stolen-check-input"
                      className="flex-grow px-4 py-3 uppercase" 
                      placeholder="Enter vehicle VIN..." 
                      style={{ border: '2px solid #004B22', borderRadius: '2px', fontFamily: '"Space Mono", monospace', fontSize: '14px' }}
                    />
                    <button className="primary-button px-10 py-3 whitespace-nowrap" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                      Run Theft Check
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

function BadgeCheck({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
