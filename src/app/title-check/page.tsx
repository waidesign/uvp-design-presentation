"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, CheckCircle, AlertTriangle, Shield, 
  FileText, Ban, Info, ArrowRight, Car, Eye, Ruler, Trash2, Zap,
  ArrowDown, AlertCircle, Caravan
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Can I register a car without a title?',
    a: 'Rules differ by state, but generally, it is extremely difficult. You may need to apply for a bonded title, check for age exemptions (some states allow registration without a title for cars over 25 years old), or contact the previous owner for a duplicate.',
  },
  {
    q: 'Is my car\'s VIN number on the title?',
    a: 'Yes, the 17-digit Vehicle Identification Number is always printed on the official state title document, matching the VIN on the vehicle\'s dashboard or door jamb.',
  },
  {
    q: 'What is a "Bonded Title"?',
    a: 'If you bought a vehicle without a title, some states allow you to get a "bonded title." You purchase a surety bond based on the vehicle\'s value, which protects the state and any future owners if the original title is ever produced by a rightful owner.',
  },
  {
    q: 'What\'s the difference between a Salvage and Rebuilt title?',
    a: 'A Salvage title is issued when an insurance company declares a vehicle a total loss. A Rebuilt title is issued after that vehicle has been repaired, inspected, and deemed roadworthy by a state agency.',
  },
  {
    q: 'Can a "Lemon" title be cleared?',
    a: 'Generally, no. A "Lemon" brand indicates the vehicle was bought back by the manufacturer due to persistent, unfixable defects. This brand stays with the car\'s VIN permanently to warn future buyers.',
  },
];

// ─── Title Brands ─────────────────────────────────────────────────────────────
const TITLE_BRANDS = [
  { icon: <Shield size={22} color="#0EB075" />, title: 'Clear Title', desc: 'The gold standard. No history of total loss, major damage, or manufacture buybacks.' },
  { icon: <AlertTriangle size={22} color="#ef4444" />, title: 'Salvage Title', desc: 'The car was deemed a total loss by insurance, usually due to damage exceeding 75% of its value.' },
  { icon: <Zap size={22} color="#ef4444" />, title: 'Flood / Fire Title', desc: 'Severe water or fire damage that impacts safety and electronic systems permanently.' },
  { icon: <Ruler size={22} color="#ef4444" />, title: 'Odometer Rollback', desc: 'The odometer was tampered with to show a lower mileage than the actual distance traveled.' },
  { icon: <Ban size={22} color="#ef4444" />, title: 'Lemon Title', desc: 'A vehicle with persistent defects that the manufacturer was legally forced to buy back.' },
  { icon: <Trash2 size={22} color="#ef4444" />, title: 'Junk / Scrap Title', desc: 'A vehicle intended only for parts or scrap metal. Not legal for road use.' },
  { icon: <Eye size={22} color="#f59e0b" />, title: 'Theft Recovery', desc: 'A vehicle previously reported stolen and later recovered. May have hidden damage.' },
  { icon: <Car size={22} color="#3b82f6" />, title: 'Rebuilt Title', desc: 'A salvaged vehicle that has been officially repaired and passes a state safety inspection.' },
];

// ─── Comparison Data ──────────────────────────────────────────────────────────
const LISTING_DATA = {
  year: '2015',
  make: 'Ford',
  model: 'F-150',
  mileage: '45,000 miles',
  title: 'Clean Title (per Seller)',
  accident: 'No accidents reported',
  price: '$28,500'
};

const REPORT_DATA = {
  actualMileage: '78,000 miles',
  titleIssue: 'Salvage Title (Rebuilt)',
  accident: 'Major accident in 2018',
  value: '$15,500 – $18,000'
};

export default function TitleCheckPage() {
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
              <Link href="/" className="hover:text-[#0EB075] transition-colors">Home</Link>
              <span>/</span>
              <span style={{ color: '#0EB075' }}>Title Check</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                <div className="flex items-center gap-2">
                  <FileText size={18} /> Verify Ownership & Title Brands
                </div>
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Vehicle Title Check — <span className="wavy-underline" style={{ color: '#0EB075' }}>Instant Report</span>
              </h1>

              <p className="mb-10 mx-auto leading-relaxed" style={{ 
                fontFamily: '"Space Mono", monospace', fontSize: '17px', 
                color: '#3D4A41', maxWidth: '620px',
              }}>
                A title hides what the seller won&apos;t tell you. Run a VIN check to see accidents, title brands, liens, theft records, and odometer fraud in seconds.
              </p>
            </motion.div>

            {/* VIN search */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mx-auto mt-4" 
              style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '28px', maxWidth: '700px', boxShadow: '5px 5px 0 0 #004B22' }}
            >
              <div className="absolute -top-4 left-5 px-3 py-1 flex items-center gap-1" style={{ 
                backgroundColor: '#FFF9C4', border: '2px solid #004B22', borderRadius: '4px', 
                transform: 'rotate(-2deg)', fontFamily: '"Gochi Hand", cursive', color: '#004B22', fontSize: '14px',
              }}>
                Check VIN here <ArrowDown size={14} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input 
                    id="title-check-input"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="Enter 17-digit VIN..." 
                    type="text" 
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase())}
                    maxLength={17}
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '1px' }}
                  />
                </div>
                <button 
                  id="run-title-check-btn"
                  className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', fontWeight: 700 }}
                >
                  Verify Title
                </button>
              </div>
              <div className="flex justify-between items-center mt-4" style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px' }}>
                 <div className="flex gap-4" style={{ color: '#6B7280' }}>
                    <span className="flex items-center gap-1"><CheckCircle size={14} className="text-[#0EB075]" /> Salvage Check</span>
                    <span className="flex items-center gap-1"><CheckCircle size={14} className="text-[#0EB075]" /> Theft Search</span>
                 </div>
                 <a href="#" className="underline text-[#004B22] hover:text-[#0EB075] transition-colors">View Sample Report</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ COMMON TITLE BRANDS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Understand Your <span className="wavy-underline" style={{ color: '#0EB075' }}>Title Brands</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '600px', margin: '0 auto' }}>
                A &ldquo;Clear Title&rdquo; can quickly turn into a nightmare once you dig into the data. Here are the brands we look for.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TITLE_BRANDS.map((brand, i) => (
                <div key={i} style={{ 
                  backgroundColor: '#F5FDF9', border: '2px solid #004B22', 
                  borderRadius: '4px', padding: '24px', boxShadow: '4px 4px 0 0 #004B22',
                  transition: 'transform 0.2s ease'
                }} className="hover:-translate-y-1">
                  <div className="mb-4">{brand.icon}</div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827', marginBottom: '8px' }}>{brand.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.7' }}>{brand.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ COMPARISON SECTION ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
               <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Listing vs. <span style={{ color: '#ef4444' }}>Reality</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '500px', margin: '0 auto' }}>
                Don&apos;t take the seller&apos;s word for it. Here is how a &ldquo;Clean Title&rdquo; car looked after our title check.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Seller Listing */}
              <div style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', overflow: 'hidden', boxShadow: '5px 5px 0 0 #004B22' }}>
                 <div style={{ backgroundColor: '#004B22', padding: '12px 24px', color: '#fff', fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>
                    Seller&apos;s Listing
                 </div>
                 <div className="p-8 space-y-4">
                    <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>Vehicle</span>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#111827', fontWeight: 700 }}>{LISTING_DATA.year} {LISTING_DATA.make} {LISTING_DATA.model}</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>Mileage</span>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#111827', fontWeight: 700 }}>{LISTING_DATA.mileage}</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>Title Status</span>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#0EB075', fontWeight: 700 }}>{LISTING_DATA.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>Price</span>
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#111827', fontWeight: 700 }}>{LISTING_DATA.price}</span>
                    </div>
                 </div>
              </div>

              {/* Title Checked Reality */}
              <div style={{ backgroundColor: '#fdf2f2', border: '2px solid #ef4444', borderRadius: '4px', overflow: 'hidden', boxShadow: '5px 5px 0 0 #ef4444' }}>
                 <div style={{ backgroundColor: '#ef4444', padding: '12px 24px', color: '#fff', fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>
                    Title Checked Result
                 </div>
                 <div className="p-8 space-y-4">
                    <div className="flex justify-between border-b border-dashed border-red-200 pb-2">
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#991b1b' }}>Actual Mileage</span>
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#ef4444', fontWeight: 700 }}>{REPORT_DATA.actualMileage} (FRAUD)</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-red-200 pb-2">
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#991b1b' }}>Actual Title Brand</span>
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#ef4444', fontWeight: 700 }}>{REPORT_DATA.titleIssue}</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-red-200 pb-2">
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#991b1b' }}>Accident Record</span>
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#ef4444', fontWeight: 700 }}>{REPORT_DATA.accident}</span>
                    </div>
                    <div className="flex justify-between">
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#991b1b' }}>Fair Market Value</span>
                       <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#ef4444', fontWeight: 700 }}>{REPORT_DATA.value}</span>
                    </div>
                 </div>
              </div>
            </div>
            <div className="mt-8 text-center flex items-center justify-center gap-2" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#b91c1c' }}>
               <AlertCircle size={20} /> You would have overpaid by <span style={{ textDecoration: 'underline font-bold' }}>$10,000+</span>
            </div>
          </div>
        </section>

        {/* ═══════════════ FEATURES GRID ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-10">
               {[
                 { title: 'Ownership History', desc: 'See how many people have owned the car, for how long, and in which states.' },
                 { title: 'Accident Reports', desc: 'Identify major collisions, airbag deployments, and structural damage filed with police.' },
                 { title: 'Liens & Records', desc: 'Check if there are any active loans that could lead to the vehicle being repossessed.' },
                 { title: 'Odometer History', desc: 'Verify timestamped mileage readings to ensure the clock hasn\'t been rolled back.' },
                 { title: 'Theft Search', desc: 'Cross-reference nationwide police records to ensure the car wasn\'t reported stolen.' },
                 { title: 'Auction Photos', desc: 'See how the car looked at salvage auctions before it was "fixed" and relisted.' },
               ].map((f, i) => (
                 <div key={i} className="flex gap-4">
                    <CheckCircle size={24} className="text-[#0EB075] shrink-0" />
                    <div>
                       <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827', marginBottom: '4px' }}>{f.title}</h3>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.6' }}>{f.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              Title Check <span style={{ color: '#0EB075' }}>FAQs</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Understand the legal status of your vehicle
            </p>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ 
                  border: '2px solid #004B22', borderRadius: '2px', 
                  backgroundColor: '#fff', overflow: 'hidden', boxShadow: '2px 2px 0 0 #004B22',
                }}>
                  <button id={`title-faq-${idx}`}
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
        <section className="py-20" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px' }}>
                Verify the Title <span style={{ color: '#0EB075' }}>Before You Buy</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>
                Don&apos;t get stuck with a salvage or lemon brand. Run a 60-second title check and know exactly what you&apos;re paying for.
              </p>
              <div style={{ backgroundColor: '#fff', border: '2px solid #0EB075', borderRadius: '4px', padding: '32px', boxShadow: '6px 6px 0 0 #0EB075' }}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      id="footer-title-check-input"
                      className="flex-grow px-4 py-3" 
                      placeholder="Enter vehicle VIN..." 
                      style={{ border: '2px solid #004B22', borderRadius: '2px', fontFamily: '"Space Mono", monospace', fontSize: '14px' }}
                    />
                    <button className="primary-button px-10 py-3 whitespace-nowrap" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                      Run Title Check
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
