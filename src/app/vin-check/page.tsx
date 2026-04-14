"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search, ChevronDown, CheckCircle, AlertTriangle, Shield,
  FileText, Clock, Users, Wrench, Building2, Car, ArrowRight,
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'How long can I access my reports?',
    a: 'Once purchased, your reports are stored in your account and accessible indefinitely. Check our VIN Check packages page for credit bundle options.',
  },
  {
    q: 'What information will a VIN lookup show me?',
    a: 'A full VIN check surfaces accident history, title brands (salvage, flood, lemon), odometer readings, lien records, ownership count, recall status, auction data, and more. View a sample record to see the full breakdown.',
  },
  {
    q: 'Can a vehicle\'s VIN ever be changed?',
    a: 'Yes, but only legally under specific circumstances: major rebuilds after extensive damage, restoring a classic car, or a police-recovered vehicle used in a crime. Any other VIN change is a serious red flag for fraud.',
  },
  {
    q: 'How often do you update your database?',
    a: 'Our database is continuously updated with new records from insurance companies, auction houses, DMVs, police reports, and dealerships. New incidents are typically reflected within 30–90 days of filing.',
  },
  {
    q: 'What\'s the difference between a VIN check and a VIN decoder?',
    a: 'A VIN decoder reads the embedded codes in the 17-character string to show manufacturer specs (make, model, engine, plant). A VIN check cross-references live databases to reveal historical events—accidents, titles, ownership, recalls.',
  },
  {
    q: 'Do I need to create an account to run a VIN check?',
    a: 'No sign-up required for a basic lookup. Full history reports require a one-time credit purchase, with no subscription enforced.',
  },
];

// ─── What the report covers ───────────────────────────────────────────────────
const REPORT_SECTIONS = [
  { icon: <AlertTriangle size={26} color="#ef4444" />, title: 'Accident & Damage History', desc: 'Every reported collision, airbag deployment, and structural damage, with police report numbers, dates, and tow records.' },
  { icon: <Shield size={26} color="#0EB075" />, title: 'Title Brands & Status', desc: 'Salvage, flood, fire, lemon, rebuilt, or junk title designations—visible the moment a report is generated.' },
  { icon: <FileText size={26} color="#0EB075" />, title: 'Ownership History', desc: 'Number of previous owners, how long each owned it, and whether it was personal, fleet, rental, or lease.' },
  { icon: <Clock size={26} color="#0EB075" />, title: 'Odometer Readings', desc: 'Timestamped odometer snapshots that flag potential rollback fraud across the vehicle\'s entire life.' },
  { icon: <CheckCircle size={26} color="#0EB075" />, title: 'Lien & Loan Records', desc: 'Outstanding loans that could follow you after the sale. Know before you sign—and demand a lien release.' },
  { icon: <Car size={26} color="#0EB075" />, title: 'Recall Status', desc: 'All open and closed NHTSA safety recalls, with affected components and whether each was addressed.' },
  { icon: <Building2 size={26} color="#0EB075" />, title: 'Auction & Insurance History', desc: 'Insurance total-loss events, salvage auction sales with photos, and insurance claim references.' },
  { icon: <Wrench size={26} color="#0EB075" />, title: 'Service & Maintenance Records', desc: 'Reported service visits, oil changes, and repairs from dealerships and shops that file with our data partners.' },
];

// ─── Who uses a VIN ───────────────────────────────────────────────────────────
const VIN_USERS = [
  { icon: <Users size={22} color="#0EB075" />, role: 'Private Buyers', desc: 'Verify a vehicle\'s real history before handing over cash. Spot hidden accidents, title brands, and unpaid loans in seconds.' },
  { icon: <Car size={22} color="#0EB075" />, role: 'Dealerships', desc: 'Audit trade-ins and lot inventory instantly. Stay compliant, protect margins, and give buyers full confidence.' },
  { icon: <Wrench size={22} color="#0EB075" />, role: 'Mechanics', desc: 'Confirm exact model, engine type, and production year to order correct parts and keep accurate service records.' },
  { icon: <Shield size={22} color="#0EB075" />, role: 'Insurance Companies', desc: 'Check accident history, stolen records, and salvage status before pricing coverage or processing a claim.' },
  { icon: <Building2 size={22} color="#0EB075" />, role: 'Law Enforcement', desc: 'Identify stolen vehicles, match police reports, and confirm vehicle identity hasn\'t been tampered with.' },
  { icon: <FileText size={22} color="#0EB075" />, role: 'DMV / BMV Offices', desc: 'Power registration, title transfers, and legal documentation with verified vehicle identification data.' },
];

// ─── Without vs With VIN check ────────────────────────────────────────────────
const WITHOUT = [
  { flag: '🚨', issue: 'Rear-end accident — never mentioned', detail: 'Police report filed July 2022 in Upland, CA. Vehicle was towed from the scene.' },
  { flag: '🚨', issue: 'Salvage title — not clean', detail: 'Transferred to an insurance company after the accident, then sold at salvage auction for $5,250.' },
  { flag: '🚨', issue: 'Two active liens on the vehicle', detail: 'Someone else has a legal claim. You could buy the car and still lose it.' },
  { flag: '🚨', issue: '10 recalls — transmission, steering, seats', detail: 'None of the 10 open NHTSA recalls had been addressed.' },
];

const WITH = [
  { flag: '✅', issue: 'Full accident record surfaced instantly', detail: 'Police report number, date, location, and tow are all documented.' },
  { flag: '✅', issue: 'Salvage title flagged, with auction photos', detail: 'You see the real damage condition before speaking to the seller.' },
  { flag: '✅', issue: 'Both liens visible, with dates and sources', detail: 'You know to demand a lien release before any money changes hands.' },
  { flag: '✅', issue: 'All 10 recalls listed with components and status', detail: 'You walk away — or negotiate $4,000 off for unaddressed safety issues.' },
];

// ─── Where to find VIN ────────────────────────────────────────────────────────
const VIN_LOCATIONS_BODY = [
  { label: 'Dashboard', desc: 'Visible through the windshield on the driver\'s side. The most common location.' },
  { label: 'Driver\'s Door Jamb', desc: 'Inside the door post on a Federal Safety Certification Label.' },
  { label: 'Under the Spare Tire', desc: 'In the trunk area, under the spare. May need to lift the tire.' },
  { label: 'Front Frame', desc: 'Stamped under the hood near the windshield washer container, driver\'s side.' },
];
const VIN_LOCATIONS_DOCS = [
  { label: 'Title Document', desc: 'Printed on the first page alongside make, model, and body type.' },
  { label: 'Registration Card', desc: 'Appears on the front of your registration card or DMV replacement.' },
  { label: 'Owner\'s Manual', desc: 'Usually in the manual for new cars. Used cars may not have the original.' },
  { label: 'Insurance Documents', desc: 'Appears on your insurance card or policy papers after verification.' },
];

// ─── States ───────────────────────────────────────────────────────────────────
const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado',
  'Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho',
  'Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
  'Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi',
  'Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma',
  'Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming',
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  { name: 'Ha Duong', stars: 5, text: 'Found a salvage title on a car priced as clean. Saved me from a $14,000 mistake. Worth every penny.' },
  { name: 'Donnie', stars: 5, text: 'Two active liens showed up that the seller "forgot" to mention. I walked away with my money in my pocket.' },
  { name: 'Vanessa', stars: 5, text: 'Odometer was rolled back 43,000 miles. The timestamped readings in the report proved it instantly.' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function VinCheckPage() {
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

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
              <a href="/" className="hover:text-[#0EB075] transition-colors">Home</a>
              <span>/</span>
              <span style={{ color: '#0EB075' }}>VIN Check</span>
            </div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              {/* Badge */}
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-1.5deg)',
              }}>
                🔍 See the Real Story Behind Any Vehicle
              </div>

              <h1 className="leading-tight mb-6"
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                VIN Check —{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>Vehicle History Report</span>
              </h1>

              <p className="mb-10 mx-auto leading-relaxed" style={{
                fontFamily: '"Space Mono", monospace', fontSize: '17px',
                color: '#3D4A41', maxWidth: '620px',
              }}>
                Enter any 17-digit VIN to instantly pull accidents, title brands, liens, odometer history, recalls, auction records, and ownership — all in one report.
              </p>
            </motion.div>

            {/* VIN search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mx-auto"
              style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', padding: '28px', maxWidth: '700px', boxShadow: '5px 5px 0 0 #004B22' }}
            >
              <div className="absolute -top-4 left-5 px-3 py-1" style={{
                backgroundColor: '#FFF9C4', border: '2px solid #004B22', borderRadius: '4px',
                transform: 'rotate(-2deg)', fontFamily: '"Gochi Hand", cursive', color: '#004B22', fontSize: '14px',
              }}>
                Paste VIN here 👇
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <div className="flex-grow flex items-center px-4 py-3 gap-3"
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}>
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="vin-check-input"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="Enter 17-digit VIN number..."
                    type="text"
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase())}
                    maxLength={17}
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '1px' }}
                  />
                </div>
                <button
                  id="run-vin-check-btn"
                  className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', fontWeight: 700 }}
                >
                  Check VIN
                </button>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4" style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>
                <a href="/license-plate-lookup" className="hover:text-[#0EB075] underline transition-colors">No VIN? Use license plate →</a>
                <a href="#" className="hover:text-[#0EB075] underline transition-colors">View sample report →</a>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-5 mt-10"
              style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41' }}
            >
              {['✅ No Sign-Up Required', '⚡ Instant Results', '🔒 100% Private', '📋 330M+ Records', '🌍 International VINs'].map((b) => (
                <span key={b} className="px-4 py-2 bg-white" style={{ border: '1.5px solid #004B22', borderRadius: '4px' }}>{b}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ WITHOUT vs WITH ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#004B22' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
              The Same Car. Two Very <span style={{ color: '#0EB075' }}>Different Realities.</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 48px' }}>
              A listing says &ldquo;clean title, one owner, never in an accident.&rdquo; Here&apos;s what running the VIN actually showed.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Without */}
              <div style={{ backgroundColor: 'rgba(239,68,68,0.08)', border: '2px solid rgba(239,68,68,0.4)', borderRadius: '4px', padding: '28px' }}>
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#ef4444', marginBottom: '20px' }}>😵 Without a VIN Check</div>
                {WITHOUT.map((item, i) => (
                  <div key={i} className="mb-5">
                    <div className="flex items-start gap-3 mb-1">
                      <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.flag}</span>
                      <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '17px', color: '#fca5a5' }}>{item.issue}</p>
                    </div>
                    <p className="pl-7" style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.6' }}>{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* With */}
              <div style={{ backgroundColor: 'rgba(14,176,117,0.1)', border: '2px solid #0EB075', borderRadius: '4px', padding: '28px' }}>
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#0EB075', marginBottom: '20px' }}>🛡️ With a VIN Check</div>
                {WITH.map((item, i) => (
                  <div key={i} className="mb-5">
                    <div className="flex items-start gap-3 mb-1">
                      <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.flag}</span>
                      <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '17px', color: '#6ee7b7' }}>{item.issue}</p>
                    </div>
                    <p className="pl-7" style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.6' }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="mt-12 flex flex-wrap justify-center gap-10">
              {[
                { emoji: '💰', val: '$4,000+', label: 'Negotiated off asking price' },
                { emoji: '⏱️', val: '60 sec', label: 'Time to run the check' },
                { emoji: '💡', val: '100%', label: 'Informed decision made' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div style={{ fontSize: '32px', marginBottom: '4px' }}>{s.emoji}</div>
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#0EB075' }}>{s.val}</div>
                  <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.65)', maxWidth: '130px' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ WHAT THE REPORT COVERS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                What Your VIN Check{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>Report Covers</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '540px', margin: '0 auto' }}>
                One report. Eight categories of data. Everything you need before signing a thing.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {REPORT_SECTIONS.map((s, i) => (
                <div key={i} style={{
                  backgroundColor: '#F5FDF9', border: '2px solid #004B22',
                  borderRadius: '4px', padding: '24px', boxShadow: '4px 4px 0 0 #004B22',
                }}>
                  <div style={{ marginBottom: '14px' }}>{s.icon}</div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '19px', color: '#111827', marginBottom: '8px' }}>{s.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.7' }}>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="#" className="primary-button inline-flex items-center gap-2 px-10 py-4"
                style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', fontWeight: 700 }}>
                Run a VIN Check <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════ WHERE TO FIND THE VIN ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Where to Find the{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>17-Digit VIN</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '500px', margin: '0 auto' }}>
                On the vehicle&apos;s body or in the paperwork — it&apos;s always exactly 17 characters.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* On the body */}
              <div style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', overflow: 'hidden', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div style={{ backgroundColor: '#004B22', padding: '14px 24px' }}>
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#fff' }}>🚗 On the Vehicle&apos;s Body</div>
                </div>
                <div style={{ padding: '24px' }}>
                  {VIN_LOCATIONS_BODY.map((loc, i) => (
                    <div key={i} className="flex items-start gap-4 mb-5">
                      <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
                        style={{ border: '2px solid #0EB075', borderRadius: '2px', fontFamily: '"Gochi Hand", cursive', fontSize: '14px', color: '#0EB075' }}>
                        {i + 1}
                      </div>
                      <div>
                        <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '17px', color: '#111827', marginBottom: '4px' }}>{loc.label}</div>
                        <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.6' }}>{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* In the paperwork */}
              <div style={{ backgroundColor: '#fff', border: '2px solid #004B22', borderRadius: '4px', overflow: 'hidden', boxShadow: '5px 5px 0 0 #004B22' }}>
                <div style={{ backgroundColor: '#004B22', padding: '14px 24px' }}>
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#fff' }}>📄 In the Paperwork</div>
                </div>
                <div style={{ padding: '24px' }}>
                  {VIN_LOCATIONS_DOCS.map((loc, i) => (
                    <div key={i} className="flex items-start gap-4 mb-5">
                      <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
                        style={{ border: '2px solid #0EB075', borderRadius: '2px', fontFamily: '"Gochi Hand", cursive', fontSize: '14px', color: '#0EB075' }}>
                        {i + 1}
                      </div>
                      <div>
                        <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '17px', color: '#111827', marginBottom: '4px' }}>{loc.label}</div>
                        <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.6' }}>{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ WHO USES A VIN ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Who Uses a{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>VIN Check?</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '500px', margin: '0 auto' }}>
                From private buyers to law enforcement — every stakeholder in a vehicle transaction relies on VIN data.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VIN_USERS.map((u, i) => (
                <div key={i} style={{
                  backgroundColor: '#F5FDF9', border: '2px solid #004B22',
                  borderRadius: '4px', padding: '24px', boxShadow: '4px 4px 0 0 #004B22',
                }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ color: '#0EB075' }}>{u.icon}</div>
                    <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827' }}>{u.role}</h3>
                  </div>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.7' }}>{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              What Our Customers{' '}
              <span style={{ color: '#0EB075' }}>Are Saying</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Trusted by drivers, dealers, and mechanics across the U.S.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} style={{
                  backgroundColor: '#fff', border: '2px solid #004B22',
                  borderRadius: '4px', padding: '28px', boxShadow: '4px 4px 0 0 #004B22',
                }}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, si) => <span key={si} style={{ fontSize: '18px' }}>⭐</span>)}
                  </div>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7', marginBottom: '16px', fontStyle: 'italic' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '17px', color: '#004B22' }}>— {t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ RUN BY STATE ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              Run VIN Check in Any{' '}
              <span className="wavy-underline" style={{ color: '#0EB075' }}>U.S. State</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              State-specific title, registration, and history data for all 50 states
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {US_STATES.map((s) => (
                <a key={s} href="#"
                  style={{
                    fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#004B22',
                    padding: '7px 14px', border: '1.5px solid #004B22', borderRadius: '4px',
                    backgroundColor: '#F5FDF9', transition: 'all 0.15s ease', textDecoration: 'none', display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = '#0EB075';
                    el.style.color = '#fff';
                    el.style.boxShadow = '3px 3px 0 0 #004B22';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.backgroundColor = '#F5FDF9';
                    el.style.color = '#004B22';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}>
              Burning <span style={{ color: '#0EB075' }}>Questions?</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Everything you need to know about VIN checks
            </p>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} style={{
                  border: '2px solid #004B22', borderRadius: '2px',
                  backgroundColor: '#fff', overflow: 'hidden', boxShadow: '2px 2px 0 0 #004B22',
                }}>
                  <button id={`vc-faq-${idx}`}
                    className="w-full flex justify-between items-center text-left px-6 py-5 gap-4"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.1rem', color: '#1a1a1a' }}>{faq.q}</span>
                    <ChevronDown size={20} style={{
                      color: '#004B22', flexShrink: 0,
                      transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
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
                          color: '#3D4A41', borderTop: '1px solid #e5e7eb', lineHeight: '1.7',
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
            <div className="inline-block mb-6 px-4 py-2" style={{
              backgroundColor: '#0EB075', border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '4px', fontFamily: '"Gochi Hand", cursive', color: '#fff', fontSize: '16px',
            }}>
              🔍 Run Your VIN Check — No Sign-Up
            </div>
            <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px' }}>
              The Real Story is One{' '}
              <span style={{ color: '#0EB075' }}>VIN Away.</span>
            </h2>
            <p style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', lineHeight: '1.7' }}>
              Don&apos;t walk into a deal blind. Enter the VIN and get the full vehicle history report in seconds — accidents, titles, liens, recalls, and more.
            </p>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '4px', padding: '24px', boxShadow: '5px 5px 0 0 rgba(255,255,255,0.15)',
            }}>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow flex items-center px-4 py-3 gap-3 bg-white" style={{ borderRadius: '2px' }}>
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="vin-check-cta-input"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="Enter 17-digit VIN..."
                    type="text"
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '1px' }}
                  />
                </div>
                <button id="vin-check-cta-btn" className="primary-button px-8 py-3 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', fontWeight: 700 }}>
                  Check VIN Now
                </button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8"
              style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>
              <span>🔒 100% Private</span>
              <span>⚡ Instant Report</span>
              <span>📋 330M+ Records</span>
              <span>🌍 International Support</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
