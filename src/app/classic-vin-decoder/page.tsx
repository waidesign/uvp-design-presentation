"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, CheckCircle, Shield, 
  HelpCircle, ArrowRight, Car, History, BadgeCheck,
  Settings, PenTool, Database, Users, Gem
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Manufacturers ─────────────────────────────────────────────────────────────
const manufacturers = [
  'AC', 'Acura', 'Alfa Romeo', 'AMC', 'Amphicar', 'Aston Martin', 'Audi', 'Austin',
  'Austin Healey', 'Avanti', 'Bentley', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevy', 
  'Chrysler', 'Datsun', 'De Tomaso', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'GMC', 
  'Hudson', 'International', 'Jaguar', 'Jeep', 'Lamborghini', 'Lancia', 'Land Rover', 'Lincoln', 
  'Lotus', 'Maserati', 'Mazda', 'Mercedes-Benz', 'Mercury', 'MG', 'Mini', 'Mitsubishi', 
  'Morgan', 'Nissan', 'Oldsmobile', 'Packard', 'Plymouth', 'Pontiac', 'Porsche', 'Renault', 
  'Rolls-Royce', 'Shelby', 'Studebaker', 'Subaru', 'Toyota', 'Triumph', 'Volkswagen', 'Willys'
];

// ─── Locations ──────────────────────────────────────────────────────────────
const locations = [
  { title: 'Dashboard', desc: 'Driver’s side, stamped on a small plate visible through the windshield.' },
  { title: 'Door Jamb', desc: 'Factory-applied sticker or metal plate on the driver’s door edge.' },
  { title: 'Engine Bay', desc: 'Mounted on the firewall or inner fender alongside manufacturer codes.' },
  { title: 'Chassis Frame', desc: 'Stamps found near front suspension or along the frame rail.' },
  { title: 'Inner Cabin', desc: 'Often found beneath the steering column or on the floor pans.' },
  { title: 'Paperwork', desc: 'Check the original registration or historical insurance documents.' },
];

export default function ClassicVINDecoderPage() {
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

          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                🏎️ Pre-1980 Specialist Decoding
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Trusted Classic Car <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN Decoder</span>
              </h1>

              <p className="mb-10 leading-relaxed text-lg" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '520px',
              }}>
                Uncover the factory specifications, production records, and hidden history of vintage vehicles. Specialized for short-form pre-1980 VINs.
              </p>

              {/* VIN search */}
              <div className="relative" style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow flex items-center px-4 py-3 gap-3" 
                    style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                    <Search size={18} className="text-slate-400 shrink-0" />
                    <input 
                      id="classic-vin-input"
                      className="bg-transparent border-none outline-none w-full uppercase"
                      placeholder="Enter Classic VIN..." 
                      type="text" 
                      value={vin}
                      onChange={(e) => setVin(e.target.value)}
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                    />
                  </div>
                  <button 
                    id="run-classic-decode-btn"
                    className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                    style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  >
                    Decode VIN
                  </button>
                </div>
                <div className="mt-4 flex gap-4 overflow-x-auto no-scrollbar" style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#6B7280' }}>
                   <span>Example: 252677X172255</span>
                   <span className="text-[#0EB075] underline cursor-pointer">View Sample Report</span>
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
                 backgroundImage: 'url("https://detailedvehiclehistory.com/blog/wp-content/uploads/2023/10/pontiac-catalina-classic.jpg")',
                 backgroundSize: 'cover', backgroundPosition: 'center',
                 transform: 'rotate(2deg)'
               }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 rounded-lg">
                     <div className="text-white">
                        <div className="font-bold flex items-center gap-2 mb-1">
                           <Shield size={16} /> Pontiac Catalina
                        </div>
                        <div className="text-xs opacity-80" style={{ fontFamily: '"Space Mono", monospace' }}>
                           Successfully Decoded: Factory 400 V8
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Post-it Note */}
               <div className="absolute -bottom-6 -left-8 bg-[#FFF9C4] p-4 text-sm" style={{ 
                 border: '2px solid #004B22', borderRadius: '2px', transform: 'rotate(-5deg)',
                 boxShadow: '4px 4px 0 0 rgba(0,0,0,0.1)', maxWidth: '180px'
               }}>
                  <p style={{ fontFamily: '"Gochi Hand", cursive', color: '#004B22' }}>
                    &ldquo;David saved $13,000 using this decoder before auction!&rdquo;
                  </p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ VALUE PROPS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                 <div className="p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                    <Users size={32} className="text-[#0EB075] mb-4" />
                    <h3 className="mb-3" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>For Buyers</h3>
                    <ul className="space-y-2" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
                       <li>• Avoid overpriced "clones"</li>
                       <li>• Confirm factory engine codes</li>
                       <li>• Identity red flags early</li>
                    </ul>
                 </div>
                 <div className="p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                    <BadgeCheck size={32} className="text-[#0EB075] mb-4" />
                    <h3 className="mb-3" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>For Sellers</h3>
                    <ul className="space-y-2" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
                       <li>• Build buyer confidence</li>
                       <li>• Support accurate pricing</li>
                       <li>• Proof of factory specs</li>
                    </ul>
                 </div>
                 <div className="p-8" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                    <Gem size={32} className="text-[#0EB075] mb-4" />
                    <h3 className="mb-3" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px' }}>For Collectors</h3>
                    <ul className="space-y-2" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
                       <li>• Track production numbers</li>
                       <li>• Assist with appraisals</li>
                       <li>• Protect long-term value</li>
                    </ul>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ CASE STUDY ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-5xl mx-auto px-6 lg:px-8 bg-white" style={{ 
             border: '2px solid #0EB075', borderRadius: '4px', padding: '40px',
             boxShadow: '8px 8px 0 0 #0EB075'
           }}>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                 <div className="shrink-0">
                    <History size={64} className="text-[#0EB075]" />
                 </div>
                 <div className="flex-grow">
                    <h2 className="mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '32px', color: '#111827' }}>
                       Real Recovery: David&apos;s $13k Save
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                       <div className="text-center p-3 rounded" style={{ backgroundColor: '#f3f4f6' }}>
                          <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Asking Price</div>
                          <div className="font-bold">$22,000</div>
                       </div>
                       <div className="text-center p-3 rounded" style={{ backgroundColor: '#f3f4f6' }}>
                          <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Market Value</div>
                          <div className="font-bold">~$7,500</div>
                       </div>
                       <div className="text-center p-3 rounded" style={{ backgroundColor: '#f3f4f6' }}>
                          <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Ownership</div>
                          <div className="font-bold">6 Owners</div>
                       </div>
                       <div className="text-center p-3 rounded" style={{ backgroundColor: '#ecfdf5' }}>
                          <div className="text-[10px] uppercase text-emerald-600 font-bold mb-1">Saved</div>
                          <div className="font-bold text-[#0EB075]">~$13,000</div>
                       </div>
                    </div>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.7' }}>
                       &ldquo;The seller claimed one owner and no accidents. Our decoder revealed 6 owners across 5 states, 2 salvage auctions, and a major left-rear impact in Tennessee. David walked away from a bad deal.&rdquo;
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ LOCATIONS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Where to find <span className="wavy-underline" style={{ color: '#0EB075' }}>Classic VINs</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                 {locations.map((loc, i) => (
                    <div key={i} className="bg-white p-6" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 #004B22' }}>
                       <div className="flex items-center gap-3 mb-3">
                          <Settings size={18} className="text-[#0EB075]" />
                          <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}>{loc.title}</h4>
                       </div>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41' }}>{loc.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ MANUFACTURERS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '2.5rem' }}>
                 Manufacturers <span style={{ color: '#0EB075' }}>Covered</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                 {manufacturers.map((name, i) => (
                    <div key={i} className="text-center py-2 px-3 hover:bg-[#F5FDF9] cursor-pointer transition-colors" style={{ border: '1px solid #e5e7eb', borderRadius: '4px', fontFamily: '"Space Mono", monospace', fontSize: '11px' }}>
                       {name}
                    </div>
                 ))}
              </div>
              <div className="mt-10 text-center">
                 <button className="px-6 py-2" style={{ border: '2px solid #004B22', borderRadius: '4px', fontFamily: '"Gochi Hand", cursive', color: '#004B22' }}>
                    View Full Directory 🔎
                 </button>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-12" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
              Frequently Asked <span style={{ color: '#0EB075' }}>Questions</span>
            </h2>
            <div className="space-y-4">
               {[
                 { q: "What is a 'pre-1980' VIN?", a: "Before 1981, VIN numbers were not standardized. They vary in length (usually 5 to 13 digits) and format by manufacturer. Our system is built to parse these legacy formats." },
                 { q: "Can you decode rare muscle car options?", a: "Yes, our decoder often identifies factory engine and transmission codes, helping verify COPO cars, GTOs, and other highly valued option packages." },
                 { q: "How long until I get the report?", a: "Decoding factory specs is instant. Full history reports (title, auctions, ownership) take about 60 seconds as we scan our nationwide datalake." }
               ].map((faq, idx) => (
                <div key={idx} style={{ 
                  border: '2px solid #004B22', borderRadius: '2px', 
                  backgroundColor: '#fff', boxShadow: '2px 2px 0 0 #004B22',
                }}>
                  <button 
                    className="w-full flex justify-between items-center text-left px-6 py-5"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.2rem' }}>{faq.q}</span>
                    <ChevronDown size={20} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s' }} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                        className="overflow-hidden bg-[#fafafa]"
                      >
                        <div className="px-6 py-4 border-t" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px' }}>
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

        {/* ═══════════════ TESTIMONIAL ═══════════════ */}
        <section className="py-20 bg-white">
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="relative p-10 bg-white" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '6px 6px 0 0 #0EB075' }}>
                 <p className="italic text-lg mb-6" style={{ fontFamily: '"Space Mono", monospace', color: '#111827' }}>
                    &ldquo;Best classic car decoder I&apos;ve used. It correctly identified the rare 455 engine option in my GTO restore project when other sites just returned &lsquo;unknown&lsquo;. Literally saved me months of research.&rdquo;
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0EB075] rounded-full flex items-center justify-center text-white font-bold">L</div>
                    <div>
                       <div className="font-bold">lance hay</div>
                       <div className="text-xs text-slate-500">Verified GTO Owner</div>
                    </div>
                    <div className="ml-auto flex gap-1">
                       {[1,2,3,4,5].map(i => <Gem key={i} size={14} fill="#f59e0b" color="#f59e0b" />)}
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
