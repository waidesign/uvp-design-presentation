"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, CheckCircle, AlertTriangle, Shield, Clock, FileSearch, MapPin, ArrowRight, CreditCard } from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Can I look up a license plate number for free?',
    a: 'Basic plate-to-VIN lookups are free. Full vehicle history reports—accidents, title brands, ownership records, liens—require a small fee to access the databases that compile that data.',
  },
  {
    q: 'Is it legal to run a license plate lookup?',
    a: 'Yes. Running a license plate lookup for personal use—like verifying a vehicle before buying—is fully legal under the Driver\'s Privacy Protection Act (DPPA). We do not provide personally identifiable owner information.',
  },
  {
    q: 'What info can I get from a license plate search?',
    a: 'You can get accident history, title brands (salvage, flood, lemon), odometer readings, stolen vehicle records, lien/loan records, number of owners, and more—all tied to the vehicle behind that plate.',
  },
  {
    q: 'Can I run a plate lookup if I only have a partial plate?',
    a: 'You need the full plate number and the state to run a successful lookup. Partial plates cannot be matched reliably across state databases.',
  },
  {
    q: 'Does every U.S. state support plate lookups?',
    a: 'Yes. Our tool covers all 50 U.S. states. Simply enter the plate number and select the state—we\'ll handle the rest.',
  },
  {
    q: 'How long does a license plate lookup take?',
    a: 'Results are instant. Once you submit the plate and state, the full vehicle history report is generated in seconds.',
  },
];

// ─── US States ────────────────────────────────────────────────────────────────
const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho',
  'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma',
  'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
  'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
];

// ─── What you'll uncover ──────────────────────────────────────────────────────
const UNCOVER_ITEMS = [
  { icon: <AlertTriangle size={26} color="#ef4444" />, title: 'Accident & Damage History', desc: 'Every reported collision, airbag deployment, and structural damage event tied to that plate.' },
  { icon: <Shield size={26} color="#0EB075" />, title: 'Title Brands & Status', desc: 'Salvage, flood, fire, lemon law, junk, or rebuilt titles—revealed before you hand over a single dollar.' },
  { icon: <CreditCard size={26} color="#0EB075" />, title: 'Lien & Loan Records', desc: 'Outstanding loans or liens that could follow you home after the sale. Know before you buy.' },
  { icon: <Clock size={26} color="#0EB075" />, title: 'Odometer Readings', desc: 'Historical odometer snapshots that flag potential rollback fraud instantly.' },
  { icon: <FileSearch size={26} color="#0EB075" />, title: 'Ownership History', desc: 'How many owners, how long each kept it, and whether it was a personal or fleet vehicle.' },
  { icon: <MapPin size={26} color="#0EB075" />, title: 'State & Registration Data', desc: 'Where the vehicle was registered, including state-specific title and registration history.' },
];

// ─── Plate Types ──────────────────────────────────────────────────────────────
const PLATE_TYPES = [
  { emoji: '🚗', name: 'Standard Plates', desc: 'Issued to most passenger vehicles. Feature state name, unique alphanumeric code, and sometimes a slogan or image.' },
  { emoji: '🚛', name: 'Commercial Plates', desc: 'For trucks and business vehicles. May include weight classifications or other commercial designations.' },
  { emoji: '🏛️', name: 'Antique/Collector Plates', desc: 'For classic or vintage vehicles. Typically come with restrictions on how the vehicle may be used.' },
  { emoji: '♿', name: 'Disability Plates', desc: 'For qualifying individuals. Grant accessible parking privileges and are issued by state DMVs.' },
  { emoji: '⭐', name: 'Specialty Plates', desc: 'Supporting causes, colleges, military service, or professions. Often personalizable for an extra fee.' },
  { emoji: '📋', name: 'Temporary Plates', desc: 'Paper or cardboard tags used while permanent registration is being processed after a sale.' },
];

// ─── How It Works steps ───────────────────────────────────────────────────────
const HOW_STEPS = [
  { num: '01', title: 'Enter the Plate & State', body: 'Type the full license plate number and select the state it was issued in. Both are required for an accurate lookup.' },
  { num: '02', title: 'Run the Search', body: 'Hit "Run Plate Lookup" and our system queries 330M+ records across accident databases, DMVs, insurance filings, and more.' },
  { num: '03', title: 'Get the Full Report', body: 'Your complete vehicle history report is ready in seconds. Download it as a PDF or share a direct link.' },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Preosha C.', text: 'Found out the car I almost bought had THREE prior accidents hidden from the listing. This tool saved me from a nightmare.', stars: 5 },
  { name: 'Wendy M.', text: 'Typed in the plate on my lunch break. Had the full report before I finished my coffee. Incredible speed and detail.', stars: 5 },
  { name: 'Will P.', text: 'The lien check is the real deal. Seller had an active loan on the car and had no idea it would affect the sale. Saved us both a headache.', stars: 5 },
  { name: 'De Los Santos Jr.', text: 'Odometer was rolled back 40k miles. The historical readings in the report made it crystal clear. Would never buy used without this.', stars: 5 },
];

// ─── Jason Story ──────────────────────────────────────────────────────────────
const JASON_ISSUES = [
  { flag: '⚠️', issue: 'Declared a total loss by insurance' },
  { flag: '⚠️', issue: 'Additional minor + major damage incident' },
  { flag: '⚠️', issue: 'Multiple collisions — possible structural damage' },
  { flag: '⚠️', issue: 'Active lien — Jason wouldn\'t fully own it' },
  { flag: '⚠️', issue: 'Major safety issues: airbags, brakes, electronics' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function LicensePlateLookupPage() {
  const [plate, setPlate] = useState('');
  const [state, setState] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
          {/* Decorative ruled lines */}
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #004B22 0px, transparent 1px, transparent 40px)',
          }} />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
              <a href="/" className="hover:text-[#0EB075] transition-colors">Home</a>
              <span>/</span>
              <span style={{ color: '#0EB075' }}>License Plate Lookup</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hand-written badge */}
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22',
                borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22',
                fontFamily: '"Gochi Hand", cursive',
                color: '#004B22',
                fontSize: '18px',
                transform: 'rotate(-1.5deg)',
              }}>
                🚗 Unlock Vehicle History in Seconds
              </div>

              <h1
                className="leading-tight mb-6"
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                License Plate{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Lookup</span>
              </h1>

              <p className="mb-10 mx-auto leading-relaxed" style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '17px',
                color: '#3D4A41',
                maxWidth: '620px',
              }}>
                Enter any U.S. license plate to instantly reveal the full vehicle history — accidents, title brands, liens, odometer fraud, stolen records, and more.
              </p>
            </motion.div>

            {/* Plate + State Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mx-auto"
              style={{
                backgroundColor: '#fff',
                border: '2px solid #004B22',
                borderRadius: '4px',
                padding: '28px',
                maxWidth: '720px',
                boxShadow: '5px 5px 0 0 #004B22',
              }}
            >
              {/* Sticky note label */}
              <div
                className="absolute -top-4 left-5 px-3 py-1"
                style={{
                  backgroundColor: '#FFF9C4',
                  border: '2px solid #004B22',
                  borderRadius: '4px',
                  transform: 'rotate(-2deg)',
                  fontFamily: '"Gochi Hand", cursive',
                  color: '#004B22',
                  fontSize: '14px',
                }}
              >
                Enter plate + state 👇
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                {/* Plate number input */}
                <div
                  className="flex-grow flex items-center px-4 py-3 gap-3"
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px', minWidth: 0 }}
                >
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="plate-input"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="License plate number..."
                    type="text"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value.toUpperCase())}
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '2px' }}
                  />
                </div>

                {/* State select */}
                <div
                  className="relative flex items-center"
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px', minWidth: '180px' }}
                >
                  <select
                    id="state-select"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full appearance-none bg-transparent border-none outline-none px-4 py-3"
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: state ? '#111827' : '#94a3b8' }}
                  >
                    <option value="" disabled>Select state...</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-3 text-slate-400 pointer-events-none" />
                </div>

                <button
                  id="run-plate-lookup-btn"
                  className="primary-button px-7 py-3 transition-all active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', fontWeight: 700 }}
                >
                  Run Plate Lookup
                </button>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4 text-sm" style={{ fontFamily: '"Space Mono", monospace', color: '#6B7280' }}>
                <a href="/window-sticker" className="hover:text-[#0EB075] underline transition-colors">No plate? Check by VIN →</a>
                <a href="#" className="hover:text-[#0EB075] underline transition-colors">View a sample report →</a>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 mt-10"
              style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}
            >
              {['✅ All 50 States', '⚡ Instant Results', '🔒 100% Private', '📋 330M+ Records', '👥 Trusted by 2M+ Users'].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-white" style={{ border: '1.5px solid #004B22', borderRadius: '4px' }}>{badge}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ WHAT YOU'LL UNCOVER ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                What a License Plate Lookup{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>Reveals</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '560px', margin: '0 auto' }}>
                One plate number unlocks the full story behind any vehicle — the truth sellers hope you never find.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {UNCOVER_ITEMS.map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#F5FDF9',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '26px',
                    boxShadow: '4px 4px 0 0 #004B22',
                  }}
                >
                  <div style={{ marginBottom: '14px' }}>{item.icon}</div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '21px', color: '#111827', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ JASON'S STORY ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#004B22' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
              Jason Almost Bought a{' '}
              <span style={{ color: '#0EB075' }}>Total-Loss Vehicle</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 48px' }}>
              The listing looked clean. The seller was charming. But the plate lookup told a completely different story.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Seller's pitch */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '4px', padding: '28px' }}>
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#ef4444', marginBottom: '16px' }}>
                  🚩 What the Seller Said
                </div>
                {[
                  '"One careful owner, never been in an accident."',
                  '"Just had a full service, runs perfect."',
                  '"Clean title, nothing to worry about."',
                ].map((claim, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <span style={{ color: '#ef4444', fontSize: '20px', flexShrink: 0 }}>✗</span>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontStyle: 'italic' }}>{claim}</p>
                  </div>
                ))}
              </div>

              {/* What the report showed */}
              <div style={{ backgroundColor: 'rgba(14,176,117,0.12)', border: '2px solid #0EB075', borderRadius: '4px', padding: '28px' }}>
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#0EB075', marginBottom: '16px' }}>
                  📋 What the Plate Lookup Found
                </div>
                {JASON_ISSUES.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '2px' }}>{item.flag}</span>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>{item.issue}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-10">
              {[
                { emoji: '🛡️', val: '100%', label: 'Avoidance of a total-loss car' },
                { emoji: '💸', val: '$0', label: 'Lost to a bad deal' },
                { emoji: '⏱️', val: '60 sec', label: 'Time to run the lookup' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div style={{ fontSize: '32px', marginBottom: '4px' }}>{stat.emoji}</div>
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#0EB075' }}>{stat.val}</div>
                  <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.65)', maxWidth: '120px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ AVOID DAMAGED / SPOT LIENS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Avoid damaged */}
              <div>
                <div
                  className="inline-block mb-5 px-4 py-2"
                  style={{ backgroundColor: '#fee2e2', border: '2px solid #ef4444', borderRadius: '4px', fontFamily: '"Gochi Hand", cursive', color: '#ef4444', fontSize: '16px' }}
                >
                  🚨 Avoid Buying Damaged Vehicles
                </div>
                <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#111827', marginBottom: '16px' }}>
                  Don&apos;t Get Stuck with Someone Else&apos;s Wreck
                </h2>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.8', marginBottom: '20px' }}>
                  A fresh coat of paint hides more than scratches. Our plate lookup cross-references insurance claims, police reports, and state records to surface every incident — even the ones the seller swears &ldquo;didn&apos;t really damage anything.&rdquo;
                </p>
                <ul className="space-y-3">
                  {['Reported collisions & airbag deployments', 'Flood & fire damage records', 'Salvage & rebuilt title flags', 'Structural damage assessments'].map((pt) => (
                    <li key={pt} className="flex items-center gap-3">
                      <CheckCircle size={16} color="#0EB075" />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spot liens */}
              <div
                style={{
                  backgroundColor: '#fff',
                  border: '2px solid #004B22',
                  borderRadius: '4px',
                  padding: '32px',
                  boxShadow: '6px 6px 0 0 #004B22',
                }}
              >
                <div
                  className="inline-block mb-5 px-4 py-2"
                  style={{ backgroundColor: '#FFF9C4', border: '2px solid #004B22', borderRadius: '4px', fontFamily: '"Gochi Hand", cursive', color: '#004B22', fontSize: '16px' }}
                >
                  🔍 Spot Lien and Loan Records
                </div>
                <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.8rem', color: '#111827', marginBottom: '14px' }}>
                  If There&apos;s a Lien, It&apos;s Your Problem Now
                </h3>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.8', marginBottom: '20px' }}>
                  When you buy a vehicle with an outstanding loan, the lender can legally repossess it — even from you. Our lookup flags active liens before the money changes hands.
                </p>
                <div
                  className="p-4"
                  style={{ backgroundColor: '#F5FDF9', border: '1.5px dashed #004B22', borderRadius: '2px' }}
                >
                  <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '17px', color: '#004B22', marginBottom: '8px' }}>Free yourself from financial traps:</p>
                  {['Outstanding auto loans', 'Mechanic\'s liens from unpaid repairs', 'Tax liens or judgement records', 'Title loan encumbrances'].map((pt) => (
                    <div key={pt} className="flex items-center gap-2 mb-2">
                      <AlertTriangle size={14} color="#ef4444" />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41' }}>{pt}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="primary-button inline-flex items-center gap-2 px-8 py-3 mt-6"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', fontWeight: 700 }}
                >
                  Run a Plate Lookup <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ HOW IT WORKS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-14" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              How the{' '}
              <span style={{ color: '#0EB075' }}>Plate Lookup Works</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {HOW_STEPS.map((step, i) => (
                <div key={i} className="relative text-center">
                  {i < HOW_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px" style={{ borderTop: '2px dashed #004B22' }} />
                  )}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 mb-5"
                    style={{
                      border: '2px solid #004B22',
                      borderRadius: '4px',
                      boxShadow: '3px 3px 0 0 #004B22',
                      backgroundColor: '#fff',
                      fontFamily: '"Gochi Hand", cursive',
                      fontSize: '24px',
                      color: '#0EB075',
                    }}
                  >
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7' }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ PLATE TYPES ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Types of{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>License Plates</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '540px', margin: '0 auto' }}>
                We support lookups for all plate types issued across all 50 U.S. states.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PLATE_TYPES.map((pt, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '24px',
                    boxShadow: '4px 4px 0 0 #004B22',
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '10px' }}>{pt.emoji}</div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827', marginBottom: '8px' }}>{pt.name}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7' }}>{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ ALL 50 STATES ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              Available in All{' '}
              <span className="wavy-underline" style={{ color: '#0EB075' }}>50 States</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Select your state to get state-specific registration and title data
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {US_STATES.map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '12px',
                    color: '#004B22',
                    padding: '7px 14px',
                    border: '1.5px solid #004B22',
                    borderRadius: '4px',
                    backgroundColor: '#F5FDF9',
                    transition: 'all 0.15s ease',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0EB075';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '3px 3px 0 0 #004B22';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5FDF9';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#004B22';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
            <div
              className="mt-10 mx-auto p-5 max-w-2xl"
              style={{ backgroundColor: '#F5FDF9', border: '2px solid #004B22', borderRadius: '4px', boxShadow: '3px 3px 0 0 #004B22' }}
            >
              <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#004B22', marginBottom: '10px' }}>What state-level data you get:</p>
              <ul className="grid grid-cols-2 gap-2">
                {[
                  'State-specific DMV records', 'Local title & registration history',
                  'Out-of-state transfer records', 'State-specific disclosure standards',
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <CheckCircle size={14} color="#0EB075" />
                    <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              What Our{' '}
              <span style={{ color: '#0EB075' }}>Customers Say</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Trusted by 2M+ vehicle buyers across the U.S.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '24px',
                    boxShadow: '4px 4px 0 0 #004B22',
                  }}
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => (
                      <span key={si} style={{ fontSize: '18px' }}>⭐</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.7', marginBottom: '16px', fontStyle: 'italic' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '16px', color: '#004B22' }}>— {t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}>
              Burning{' '}
              <span style={{ color: '#0EB075' }}>Questions?</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Everything you need to know about license plate lookups
            </p>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    border: '2px solid #004B22',
                    borderRadius: '2px',
                    backgroundColor: '#fff',
                    overflow: 'hidden',
                    boxShadow: '2px 2px 0 0 #004B22',
                  }}
                >
                  <button
                    id={`lp-faq-${idx}`}
                    className="w-full flex justify-between items-center text-left px-6 py-5 gap-4"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.1rem', color: '#1a1a1a' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{
                        color: '#004B22',
                        flexShrink: 0,
                        transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          className="px-6 pb-5"
                          style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', borderTop: '1px solid #e5e7eb', lineHeight: '1.7' }}
                        >
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
            <div
              className="inline-block mb-6 px-4 py-2"
              style={{
                backgroundColor: '#0EB075',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '4px',
                fontFamily: '"Gochi Hand", cursive',
                color: '#fff',
                fontSize: '16px',
              }}
            >
              🔍 Run a License Plate Lookup Today
            </div>
            <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px' }}>
              Get Started — Instantly.{' '}
              <span style={{ color: '#0EB075' }}>For Free.</span>
            </h2>
            <p style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', lineHeight: '1.7' }}>
              Run your first plate lookup now. Enter the plate number, select the state, and get the full vehicle history in seconds.
            </p>

            {/* Inline CTA form */}
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                border: '2px solid rgba(255,255,255,0.3)',
                borderRadius: '4px',
                padding: '24px',
                boxShadow: '5px 5px 0 0 rgba(255,255,255,0.15)',
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div
                  className="flex-grow flex items-center px-4 py-3 gap-3 bg-white"
                  style={{ borderRadius: '2px', minWidth: 0 }}
                >
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="plate-input-cta"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="License plate number..."
                    type="text"
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '2px' }}
                  />
                </div>
                <button
                  id="lookup-plate-cta"
                  className="primary-button px-8 py-3 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', fontWeight: 700 }}
                >
                  Run Plate Lookup
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
              <span>🔒 100% Secure</span>
              <span>⚡ Instant Results</span>
              <span>👥 Trusted by 2M+ Users</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
