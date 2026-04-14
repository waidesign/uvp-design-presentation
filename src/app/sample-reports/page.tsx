"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Shield, ChevronRight, CheckCircle, Car,
  Bike, Truck, Tractor, Database
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Data Arrays ────────────────────────────────────────────────────────────
const SAMPLE_REPORTS = [
  {
    category: 'Car History Report',
    desc: 'Comprehensive history and details of your sedans, convertibles, SUVs, sports cars, crossovers, and more.',
    items: [
      { year: '2014', make: 'Chevrolet', model: 'Sonic', vin: '1G1JA5SH4E415XXXX', style: '4 Door Sedan', engine: '1.8L L4 DOHC 16V' },
      { year: '2017', make: 'Ford', model: 'Fusion', vin: '3FA6P0RU9HR30XXXX', style: '4 Door Sedan', engine: '2.0L L4 DOHC 16V' },
    ]
  },
  {
    category: 'Classic Car History Report',
    desc: 'Our tool accurately decodes the VINs of classic vehicles and provides detailed information about their pasts.',
    items: [
      { year: '1967', make: 'Pontiac', model: 'Catalina Series 25200', vin: '2W87S5N55XXXX', style: 'Hardtop', engine: 'V8' },
      { year: '1972', make: 'Oldsmobile', model: 'Cutlass V8', vin: '3F03F225XXXX', style: '4 Door Sedan', engine: 'V8' },
    ]
  },
  {
    category: 'Motorcycle History Report',
    desc: 'Harley Davidson, Kawasaki, Yamaha, you name it. Check out these report samples and see how much data we have.',
    items: [
      { year: '2017', make: 'Harley Davidson', model: 'FLHX Street Glide', vin: '1HD1KRC10HB62XXXX', style: 'Bagger', engine: '107ci V-Twin' },
      { year: '2022', make: 'Triumph', model: 'Speed Twin', vin: 'SMTD54HFXNTBAXXXX', style: 'Standard', engine: '1200cc Parallel Twin' },
    ]
  },
  {
    category: 'Heavy Duty Trucks History Report',
    desc: 'Find accurate historical information on used commercial or heavy-duty trucks. Here are some samples to check.',
    items: [
      { year: '2013', make: 'Freightliner', model: 'Cascadia', vin: '1FUGGBDV1DLBYXXXX', style: 'Sleeper Tractor', engine: 'Cummins ISX15' },
      { year: '2012', make: 'Kenworth', model: 'T3 Series', vin: '2NKHHN6X6CM32XXXX', style: 'Day Cab', engine: 'Paccar PX-8' },
    ]
  },
  {
    category: 'ATV History Report',
    desc: 'Buying a used ATV? Our VIN check tool can point you in the right direction. Find out historical records and specifications.',
    items: [
      { year: '2021', make: 'Polaris', model: 'Sportsman 570', vin: '4XASEA57XFA22XXXX', style: 'Utility ATV', engine: '567cc ProStar' },
      { year: '2018', make: 'Honda', model: 'TRX350te', vin: '478TE24402A21XXXX', style: 'Utility ATV', engine: '329cc Air-Cooled' },
    ]
  },
];

const MAKE_LIST = [
  'Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 
  'Dodge', 'Ferrari', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 
  'Jaguar', 'Jeep', 'KIA', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 
  'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'RAM', 'Subaru', 'Tesla', 'Toyota', 
  'Volkswagen', 'Volvo'
];

export default function SampleReportsPage() {
  const [activeTab, setActiveTab] = useState<'history' | 'sticker'>('history');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-32 pb-16 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Sample <span style={{ color: '#0EB075' }}>Vehicle History Reports</span> <br/>
                and Window Stickers
              </h1>
              <p className="mx-auto text-lg mb-12" style={{ 
                fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '600px',
              }}>
                Browse our history reports and window stickers for various makes and models to see exactly what you get.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ TABS ═══════════════ */}
        <section className="pb-12 border-b-2 border-dashed border-[#c8dfc8] mb-12">
           <div className="max-w-2xl mx-auto px-6 text-center">
              <h2 className="mb-8" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '2rem' }}>
                 What Do You Want to <span className="wavy-underline">See?</span>
              </h2>
              
              <div className="flex bg-white p-2" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '6px 6px 0 0 rgba(0,75,34,0.1)' }}>
                 <button 
                   onClick={() => setActiveTab('history')}
                   className="flex-1 py-4 transition-all"
                   style={{ 
                     fontFamily: '"Space Mono", monospace', fontWeight: 700,
                     backgroundColor: activeTab === 'history' ? '#004B22' : 'transparent',
                     color: activeTab === 'history' ? '#fff' : '#111827',
                     borderRadius: '2px'
                   }}
                 >
                    Vehicle History Report
                 </button>
                 <button 
                   onClick={() => setActiveTab('sticker')}
                   className="flex-1 py-4 transition-all"
                   style={{ 
                     fontFamily: '"Space Mono", monospace', fontWeight: 700,
                     backgroundColor: activeTab === 'sticker' ? '#004B22' : 'transparent',
                     color: activeTab === 'sticker' ? '#fff' : '#111827',
                     borderRadius: '2px'
                   }}
                 >
                    Window Sticker
                 </button>
              </div>
           </div>
        </section>

        {/* ═══════════════ MAIN CONTENT GRID ═══════════════ */}
        <section className="pb-24">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
                 
                 {/* LEFT: Report Listings */}
                 <div className="space-y-16">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-16"
                      >
                         {activeTab === 'history' ? (
                           // Iterating through categories
                           SAMPLE_REPORTS.map((category, catIdx) => (
                              <div key={catIdx}>
                                 <h3 className="mb-2" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#111827' }}>
                                    {category.category}
                                 </h3>
                                 <p className="mb-6" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>
                                    {category.desc}
                                 </p>
                                 <div className="grid sm:grid-cols-2 gap-6">
                                    {category.items.map((item, itemIdx) => (
                                       <div key={itemIdx} className="bg-white p-4 group cursor-pointer hover:-translate-y-1 transition-transform" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '4px 4px 0 0 rgba(0,75,34,0.1)' }}>
                                          <div className="flex gap-4">
                                             <div className="w-20 h-24 bg-slate-100 border border-slate-200 rounded shrink-0 flex items-center justify-center p-2 relative overflow-hidden">
                                                <div className="absolute top-0 w-full h-4 bg-[#004B22]" />
                                                <FileText size={24} className="text-slate-300" />
                                                <div className="absolute bottom-2 left-2 right-2 h-1 bg-slate-200 mt-2" />
                                                <div className="absolute bottom-4 left-2 right-4 h-1 bg-slate-200" />
                                             </div>
                                             <div>
                                                <h4 className="group-hover:text-[#0EB075] transition-colors" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', lineHeight: 1.2, marginBottom: '6px' }}>
                                                   {item.year} {item.make} {item.model}
                                                </h4>
                                                <div className="space-y-1">
                                                   <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#64748b' }}>
                                                      <span className="font-bold text-slate-700">VIN:</span> {item.vin}
                                                   </p>
                                                   <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#64748b' }}>
                                                      <span className="font-bold text-slate-700">Style:</span> {item.style}
                                                   </p>
                                                   <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#64748b' }}>
                                                      <span className="font-bold text-slate-700">Engine:</span> {item.engine}
                                                   </p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           ))
                         ) : (
                           // Window Sticker Placeholders
                           <div className="text-center py-20 bg-white" style={{ border: '2px dashed #004B22', borderRadius: '4px' }}>
                             <FileText size={48} className="text-[#0EB075] mx-auto mb-4" />
                             <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px' }}>Window Sticker Samples</h3>
                             <p style={{ fontFamily: '"Space Mono", monospace', color: '#64748b' }}>Select modern vehicles to view raw factory Monroney label data.</p>
                           </div>
                         )}
                      </motion.div>
                    </AnimatePresence>
                 </div>

                 {/* RIGHT: Sidebar */}
                 <div className="space-y-8 sticky top-24">
                    {/* Make List Grid */}
                    <div className="bg-white p-6" style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '6px 6px 0 0 #004B22' }}>
                       <h3 className="mb-6 pb-4 border-b-2 border-dashed border-[#c8dfc8]" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px' }}>
                          Get Report by Make
                       </h3>
                       <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                          {MAKE_LIST.map((make, i) => (
                             <a key={i} href="#" className="flex justify-between items-center group">
                                <span className="group-hover:text-[#0EB075] transition-colors truncate" style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#4B5563' }}>
                                   {make}
                                </span>
                                <ChevronRight size={14} className="text-slate-300 group-hover:text-[#0EB075]" />
                             </a>
                          ))}
                       </div>
                    </div>

                    {/* Support Box */}
                    <div className="bg-[#E6F4EA] p-6 text-center" style={{ border: '2px solid #004B22', borderRadius: '4px' }}>
                       <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#004B22]">
                          <Database size={20} className="text-[#0EB075]" />
                       </div>
                       <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', marginBottom: '8px' }}>We&apos;re here to help!</h4>
                       <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#4B5563' }}>
                          If you can&apos;t find your specific vehicle configuration in our samples, reach out to our team.
                       </p>
                    </div>
                 </div>

              </div>
           </div>
        </section>

        {/* ═══════════════ FINAL CTA ═══════════════ */}
        <section className="py-24 bg-white border-t-2 border-[#0EB075]">
           <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
              <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Get Your <span className="wavy-underline" style={{ color: '#0EB075' }}>Reports</span> Now!
              </h2>
              <p className="mb-10 mx-auto max-w-lg" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563', lineHeight: 1.6 }}>
                 Are you in the used car market for a reliable vehicle? Make informed decisions and access our premium vehicle history reports instantly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="primary-button px-8 py-4" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                    Get Vehicle History Report
                 </button>
                 <button className="px-8 py-4 bg-white transition-all active:scale-95 whitespace-nowrap" style={{ 
                   fontFamily: '"Space Mono", monospace', fontWeight: 700,
                   border: '2px solid #004B22', color: '#004B22',
                   boxShadow: '4px 4px 0 0 #004B22'
                 }}>
                    Get Window Sticker
                 </button>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
