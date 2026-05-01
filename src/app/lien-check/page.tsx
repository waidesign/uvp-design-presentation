"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, Shield, AlertTriangle, Info, 
  CheckCircle, FileText, Ban, HelpCircle, ArrowRight,
  Car, Wallet, BarChart3, Lock, Clock, ArrowDown, OctagonAlert
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How Can I Check if a Vehicle Has a Lien?',
    a: 'The easiest way is to run a VIN Lien Check with UsedVehiclePro. Simply enter the 17-digit VIN, and our report will search over 330M+ records to identify any active liens, financial obligations, or undisclosed loans tied to the vehicle.',
  },
  {
    q: 'Where Can I Find the Lienholder on a Vehicle?',
    a: 'Lienholder information is typically found in the "Lien" section of an official Vehicle History Report. It includes the name of the financial institution or individual who holds the lien, along with filing dates and locations.',
  },
  {
    q: 'Should I Buy a Vehicle that Has a Lien?',
    a: 'Ideally, no. If you do, ensure the lien is paid off at the time of purchase and you receive an official "Lien Release" document. Buying a car with an active lien means you are legally responsible for the debt until it is cleared.',
  },
  {
    q: 'What Happens If I Buy a Car with a Lien?',
    a: 'You inherit the debt. The lienholder retains a legal right to repossess the vehicle if the balance isn\'t paid. Additionally, you will likely face significant delays or refusals when trying to transfer the title into your name.',
  },
  {
    q: 'How Does UsedVehiclePro Help with VIN Lien Check?',
    a: 'Our tool cross-references DMV records, bank filings, and insurance data to flag active liens instantly. We provide the peace of mind needed to avoid inheriting someone else\'s debt.',
  },
];

// ─── Risks of Buying with Lien ────────────────────────────────────────────────
const LIEN_RISKS = [
  { 
    icon: <Wallet size={24} color="#ef4444" />, 
    title: 'You Inherit the Debt', 
    desc: 'The lien stays with the vehicle, not the person. If you buy the car, you are technically responsible for ensuring the lienholder gets paid.' 
  },
  { 
    icon: <Ban size={24} color="#ef4444" />, 
    title: 'Potential Repossession', 
    desc: 'If the previous owner misses payments, the bank can repossess the car directly from your driveway, even if you paid the seller in full.' 
  },
  { 
    icon: <FileText size={24} color="#ef4444" />, 
    title: 'Title Transfer Problems', 
    desc: 'State DMVs will not allow a title transfer if there is an active lien. You won\'t be able to legally register the car in your name.' 
  },
];

// ─── Tips for Purchasing ──────────────────────────────────────────────────────
const LIEN_TIPS = [
  { text: 'Demand a "Lien Release" document from the seller before handing over any cash.' },
  { text: 'Pay the lienholder directly as part of the purchase to ensure the debt is settled.' },
  { text: 'Verify the lien status independently—do not rely solely on the seller\'s word.' },
];

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: <Shield size={22} />, title: 'Financial Protection', desc: 'Avoid getting tied up with undisclosed loans that could cost you thousands.' },
  { icon: <Lock size={22} />, title: 'Title Security', desc: 'Ensure you can actually own and register the vehicle you are paying for.' },
  { icon: <BarChart3 size={22} />, title: '330M+ Records', desc: 'We scan nationwide databases to find liens that other basic tools might miss.' },
  { icon: <Clock size={22} />, title: 'Instant Verification', desc: 'Enter the VIN and get results in under 60 seconds with our lightning-fast engine.' },
];

export default function LienCheckPage() {
  const [vin, setVin] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
          {/* Grid background effect */}

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
              <Link href="/" className="hover:text-[#0EB075] transition-colors">Home</Link>
              <span>/</span>
              <span style={{ color: '#0EB075' }}>Lien Check</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Badge */}
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                <div className="flex items-center gap-2">
                  <OctagonAlert size={18} /> Don&apos;t Inherit Someone Else&apos;s Debt
                </div>
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Lien Check by <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN</span>
              </h1>

              <p className="mb-10 mx-auto leading-relaxed" style={{ 
                fontFamily: '"Space Mono", monospace', fontSize: '17px', 
                color: '#3D4A41', maxWidth: '620px',
              }}>
                Undisclosed loans are a trap for used car buyers. We scan nationwide records to ensure the title is free, clear, and ready to be yours.
              </p>
            </motion.div>

            {/* VIN search input */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mx-auto mt-4" 
              style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '28px', maxWidth: '700px', boxShadow: '5px 5px 0 0 #004B22' }}
            >
              <div className="absolute -top-4 left-5 px-3 py-1 flex items-center gap-1" style={{ 
                backgroundColor: '#FFF9C4', border: '2px solid #004B22', borderRadius: '4px', 
                transform: 'rotate(-2deg)', fontFamily: '"Gochi Hand", cursive', color: '#004B22', fontSize: '14px',
              }}>
                Enter VIN here <ArrowDown size={14} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input 
                    id="lien-check-input"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="Enter 17-digit vehicle VIN..." 
                    type="text" 
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase())}
                    maxLength={17}
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '1px' }}
                  />
                </div>
                <button 
                  id="run-lien-check-btn"
                  className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', fontWeight: 700 }}
                >
                  Check Lien Status
                </button>
              </div>
              <div className="flex justify-start gap-4 mt-4" style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>
                <span className="flex items-center gap-1"><CheckCircle size={14} className="text-[#0EB075]" /> Instant Results</span>
                <span className="flex items-center gap-1"><CheckCircle size={14} className="text-[#0EB075]" /> Official Records</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ RISKS SECTION ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                What Happens If I Buy a Car <span style={{ color: '#ef4444' }}>With a Lien?</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '540px', margin: '0 auto' }}>
                Buying a car with an undisclosed lien is one of the most expensive mistakes a used car buyer can make.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {LIEN_RISKS.map((risk, i) => (
                <div key={i} style={{ 
                  backgroundColor: '#F5FDF9', border: '2px solid #004B22', 
                  borderRadius: '4px', padding: '32px', boxShadow: '4px 4px 0 0 #004B22',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'
                }}>
                  <div className="mb-4 p-4 bg-white" style={{ border: '2px solid #004B22', borderRadius: '50%', boxShadow: '3px 3px 0 0 #004B22' }}>
                    {risk.icon}
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827', marginBottom: '12px' }}>{risk.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7' }}>{risk.desc}</p>
                </div>
              ))}
            </div>

            {/* Tips sub-section */}
            <div className="mt-16 p-8" style={{ backgroundColor: '#F9F7F2', border: '2px solid #004B22', borderRadius: '4px', boxShadow: '5px 5px 0 0 #004B22' }}>
              <div className="flex items-center gap-3 mb-6">
                <Info size={24} className="text-[#0EB075]" />
                <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#111827' }}>Expert Tips for Safe Buying</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {LIEN_TIPS.map((tip, i) => (
                  <div key={i} className="flex gap-3">
                    <CheckCircle size={18} className="text-[#0EB075] shrink-0 mt-1" />
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{tip.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ FEATURES ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#004B22' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '20px' }}>
                  Secure Your Title with <span style={{ color: '#0EB075' }}>UsedVehiclePro</span>
                </h2>
                <p style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '32px' }}>
                  Our lien check is powered by data partnerships with leading financial institutions and DMVs nationwide. We don&apos;t just decdoe your VIN; we audit its history.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {FEATURES.map((f, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#0EB075]" style={{ borderRadius: '2px', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <div style={{ color: '#fff' }}>{f.icon}</div>
                      </div>
                      <div>
                        <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#fff', marginBottom: '4px' }}>{f.title}</div>
                        <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                {/* Mock display of a lien report section */}
                <div style={{ 
                  backgroundColor: '#fff', border: '2px solid #0EB075', borderRadius: '4px', 
                  padding: '24px', boxShadow: '10px 10px 0 0 #0EB075', transform: 'rotate(1deg)'
                }}>
                  <div className="flex justify-between items-center mb-6 pb-4 border-b border-dashed border-slate-200">
                    <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertTriangle size={20} /> Financial Risk Detected
                    </div>
                    <div style={{ backgroundColor: '#ef4444', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontFamily: '"Space Mono", monospace' }}>ACTIVE LIEN</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#6B7280' }}>Lienholder</span>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#111827', fontWeight: 700 }}>CHASE BANK, N.A.</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#6B7280' }}>Filing Date</span>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#111827', fontWeight: 700 }}>OCT 14, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#6B7280' }}>Status</span>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#ef4444', fontWeight: 700 }}>UNSATISFIED</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-red-50" style={{ border: '1px solid #fca5a5', borderRadius: '2px' }}>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#991b1b', lineHeight: '1.6' }}>
                      NOTICE: This vehicle is currently collateral for an outstanding loan. Ownership cannot be transferred until this balance is paid in full.
                    </p>
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
              Frequently Asked <span style={{ color: '#0EB075' }}>Questions</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Everything you need to know about checking vehicle liens
            </p>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ 
                  border: '2px solid #004B22', borderRadius: '2px', 
                  backgroundColor: '#fff', overflow: 'hidden', boxShadow: '2px 2px 0 0 #004B22',
                }}>
                  <button id={`lien-faq-${idx}`}
                    className="w-full flex justify-between items-center text-left px-6 py-5 gap-4"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.1rem', color: '#111827' }}>{faq.q}</span>
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
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div style={{ 
              backgroundColor: '#FFF9C4', border: '2px solid #004B22', borderRadius: '4px', 
              padding: '60px 40px', boxShadow: '8px 8px 0 0 #004B22', textAlign: 'center'
            }}>
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '36px', color: '#111827', marginBottom: '16px' }}>
                Verify the Title in Seconds
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#3D4A41', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
                Don&apos;t risk your life savings on a car that isn&apos;t theirs to sell. Enter the VIN below and get the real financial status instantly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  id="final-cta-vin"
                  className="flex-grow px-4 py-3"
                  placeholder="Enter 17-digit VIN..."
                  style={{ border: '2px solid #004B22', borderRadius: '2px', fontFamily: '"Space Mono", monospace', fontSize: '14px' }}
                />
                <button className="primary-button px-10 py-3" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                  Start Check
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
