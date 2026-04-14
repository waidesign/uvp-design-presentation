"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, Search, ChevronDown, CheckCircle, Shield, 
  Info, ArrowRight, Database, Settings, 
  Wrench, Calendar, Gauge, MapPin, AlertCircle
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Service Entry Mockup ───────────────────────────────────────────────────
const SERVICE_TIMELINE = [
  { date: 'Oct 12, 2023', miles: '45,201 mi', loc: 'San Francisco, CA', type: 'Major Service', desc: 'Brake pad replacement, rotor resurfacing, and brake fluid flush performed by certified technician.' },
  { date: 'May 04, 2023', miles: '38,150 mi', loc: 'Oakland, CA', type: 'Routine Maintenance', desc: 'Oil & filter change, tire rotation, and multi-point safety inspection.' },
  { date: 'Nov 20, 2022', miles: '31,005 mi', loc: 'San Jose, CA', type: 'Repair', desc: 'Warranty replacement of infotainment head unit. Software updated to latest version.' },
  { date: 'Jun 15, 2022', miles: '24,500 mi', loc: 'Fremont, CA', type: 'Routine Maintenance', desc: 'Engine air filter and cabin air filter replaced. Battery health check performed.' }
];

export default function ServiceRecordsByVINPage() {
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
                  <Wrench size={20} /> Maintenance History Lookup
                </div>
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Service <span className="wavy-underline" style={{ color: '#0EB075' }}>Records by VIN</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Access the complete health history of any vehicle. From dealership maintenance to independent shop repairs—know exactly how well a car was cared for.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="service-records-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter 17-digit VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-service-records-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Check History
                  </button>
                </div>
              </div>
            </motion.div>

            {/* TIMELINE PREVIEW */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
               className="hidden md:block relative bg-white p-8"
               style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '12px 12px 0 0 rgba(0,75,34,0.1)' }}
            >
               <div className="mb-8 border-b-2 border-dashed border-[#c8dfc8] pb-4">
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>Maintenance Timeline</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#94a3b8' }}>VIN: 1FA6P8CF9L5XXXXXX</p>
               </div>
               
               <div className="space-y-8 relative">
                  {/* Vertical line */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-[#0EB075] opacity-20" />
                  
                  {SERVICE_TIMELINE.map((item, i) => (
                     <div key={i} className="relative pl-10">
                        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#004B22] flex items-center justify-center z-10">
                           <div className="w-2 h-2 rounded-full bg-[#0EB075]" />
                        </div>
                        <div className="flex justify-between items-start mb-1">
                           <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', fontWeight: 700, color: '#0EB075' }}>{item.date}</span>
                           <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#94a3b8' }}>{item.miles}</span>
                        </div>
                        <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', marginBottom: '4px' }}>{item.type}</h4>
                        <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#4B5563', lineHeight: '1.4' }}>{item.desc}</p>
                     </div>
                  ))}
               </div>
               
               {/* Hand-drawn underline */}
               <div className="mt-8 flex justify-center">
                  <div className="h-1 w-24 bg-[#0EB075] rounded-full opacity-30" />
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ VALUE SECTION ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12">
                 <div className="text-center">
                    <div className="w-16 h-16 bg-[#F5FDF9] rounded-full flex items-center justify-center text-[#0EB075] mx-auto mb-6 border-2 border-[#004B22]">
                       <History size={28} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px' }}>Service Continuity</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>Verify consistent oil changes and major interval maintenance to ensure engine longevity.</p>
                 </div>
                 <div className="text-center">
                    <div className="w-16 h-16 bg-[#F5FDF9] rounded-full flex items-center justify-center text-[#0EB075] mx-auto mb-6 border-2 border-[#004B22]">
                       <Shield size={28} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px' }}>Recall Verification</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>Confirm that critical safety recalls were actually performed by authorized dealers.</p>
                 </div>
                 <div className="text-center">
                    <div className="w-16 h-16 bg-[#F5FDF9] rounded-full flex items-center justify-center text-[#0EB075] mx-auto mb-6 border-2 border-[#004B22]">
                       <Gauge size={28} />
                    </div>
                    <h3 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px' }}>Mileage Validation</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>Cross-reference odometer readings from multiple service visits to detect rollbacks.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ DATA SOURCES ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center text-white">
              <h2 className="mb-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Tapping Into <span style={{ color: '#0EB075' }}>30,000+ Records</span>
              </h2>
              <p className="text-xl mb-16 opacity-80" style={{ fontFamily: '"Space Mono", monospace' }}>
                 We aggregate data from the most trusted service networks in North America.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 {[
                   { t: 'New Car Dealers', d: 'Manufacturer-authorized service departments.' },
                   { t: 'Service Chains', d: 'Major national maintenance and tire retailers.' },
                   { t: 'Independent Shops', d: 'Local repair centers reporting to major databases.' },
                   { t: 'Collision Labs', d: 'Structural repair and body work history.' }
                 ].map((source, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded">
                       <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#0EB075', marginBottom: '8px' }}>{source.t}</h4>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', opacity: 0.6 }}>{source.d}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Common <span style={{ color: '#0EB075' }}>Queries</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "Do all shops report service history?", a: "While not every small shop reports to central databases, over 30,000 service centers including major chains and all franchised dealerships do. We aggregate the most comprehensive data available." },
                   { q: "Can I use service records to negotiate price?", a: "Absolutely. A vehicle with missing service history or overdue major maintenance (like a timing belt) is a significant negotiation point for buyers." },
                   { q: "Is the owner information included?", a: "For privacy reasons, personal names and contact info are scrubbed, but you will see exactly when and where the services were performed." }
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
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center p-12" style={{ backgroundColor: '#fff', border: '3px solid #004B22', borderRadius: '4px', boxShadow: '12px 12px 0 0 #0EB075' }}>
              <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Ready to <span style={{ color: '#0EB075' }}>Review?</span>
              </h2>
              <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563' }}>
                 Get the full maintenance log and buy or sell with complete peace of mind.
              </p>
              <button className="primary-button px-12 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                 Retrieve Service History
              </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
