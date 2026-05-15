"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, CheckCircle, AlertTriangle, Shield, Clock, FileSearch, 
  MapPin, ArrowRight, CreditCard, ArrowDown, Lock, ClipboardList, Users, 
  Flag, DollarSign, Bell, Truck, Building2, Accessibility, Star, Car, Zap,
  Gavel, Wrench, Settings, FileText, BadgeDollarSign
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import Link from 'next/link';

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
  { icon: <Flag size={26} color="#ef4444" />, title: 'Stolen Vehicle Records', desc: 'Cross-referenced against national stolen vehicle databases so you never unknowingly take home a hot car.' },
  { icon: <Bell size={26} color="#F59E0B" />, title: 'Open Safety Recalls', desc: 'Active NHTSA recalls tied to that VIN — critical safety issues the current owner may not even know about.' },
  { icon: <DollarSign size={26} color="#0EB075" />, title: 'Market Value Appraisal', desc: 'Current market value based on local sales data, mileage, and historical condition records.' },
  { icon: <Gavel size={26} color="#F59E0B" />, title: 'Sales & Auction History', desc: 'Previous auction sales, listing prices, and hammer prices from major dealer auction platforms.' },
  { icon: <Wrench size={26} color="#0EB075" />, title: 'Service & Maintenance', desc: 'Reported service logs from dealerships and certified shops, showing how well the vehicle was cared for.' },
  { icon: <Settings size={26} color="#0EB075" />, title: 'Detailed Build Sheet', desc: 'The original factory equipment, trim level, engine specs, and interior options installed at birth.' },
];

// ─── Plate Types ──────────────────────────────────────────────────────────────
const PLATE_TYPES = [
  { icon: <Car size={24} />, name: 'Standard Plates', desc: 'Issued to most passenger vehicles. Feature state name, unique alphanumeric code, and sometimes a slogan or image.' },
  { icon: <Truck size={24} />, name: 'Commercial Plates', desc: 'For trucks and business vehicles. May include weight classifications or other commercial designations.' },
  { icon: <Building2 size={24} />, name: 'Antique/Collector Plates', desc: 'For classic or vintage vehicles. Typically come with restrictions on how the vehicle may be used.' },
  { icon: <Accessibility size={24} />, name: 'Disability Plates', desc: 'For qualifying individuals. Grant accessible parking privileges and are issued by state DMVs.' },
  { icon: <Star size={24} />, name: 'Specialty Plates', desc: 'Supporting causes, colleges, military service, or professions. Often personalizable for an extra fee.' },
  { icon: <ClipboardList size={24} />, name: 'Temporary Plates', desc: 'Paper or cardboard tags used while permanent registration is being processed after a sale.' },
];

// ─── How It Works steps ───────────────────────────────────────────────────────


// ─── Jason Story ──────────────────────────────────────────────────────────────
const JASON_ISSUES = [
  { flag: <AlertTriangle size={16} className="text-[#ef4444]" />, issue: 'Declared a total loss by insurance' },
  { flag: <AlertTriangle size={16} className="text-[#ef4444]" />, issue: 'Additional minor + major damage incident' },
  { flag: <AlertTriangle size={16} className="text-[#ef4444]" />, issue: 'Multiple collisions — possible structural damage' },
  { flag: <AlertTriangle size={16} className="text-[#ef4444]" />, issue: 'Active lien — Jason wouldn\'t fully own it' },
  { flag: <AlertTriangle size={16} className="text-[#ef4444]" />, issue: 'Major safety issues: airbags, brakes, electronics' },
];

// ─── State Issue Data ────────────────────────────────────────────────────────
const STATE_ISSUES = [
  { state: 'FL', label: 'Florida',       titleIssue: 15.7, stolen: 8.3,  odometer: 6.1 },
  { state: 'CA', label: 'California',    titleIssue: 13.2, stolen: 7.9,  odometer: 5.4 },
  { state: 'GA', label: 'Georgia',       titleIssue: 12.4, stolen: 6.2,  odometer: 6.7 },
  { state: 'TX', label: 'Texas',         titleIssue: 12.0, stolen: 5.8,  odometer: 4.9 },
  { state: 'NC', label: 'North Carolina',titleIssue: 11.4, stolen: 5.3,  odometer: 4.2 },
  { state: 'IL', label: 'Illinois',      titleIssue: 11.1, stolen: 5.5,  odometer: 4.1 },
  { state: 'NY', label: 'New York',      titleIssue:  9.8, stolen: 5.1,  odometer: 3.9 },
  { state: 'MI', label: 'Michigan',      titleIssue:  9.0, stolen: 5.0,  odometer: 3.7 },
  { state: 'OH', label: 'Ohio',          titleIssue:  8.6, stolen: 4.6,  odometer: 3.8 },
  { state: 'PA', label: 'Pennsylvania',  titleIssue:  8.1, stolen: 4.2,  odometer: 3.5 },
];

// ─── Plate Formats ────────────────────────────────────────────────────────────
const PLATE_FORMATS = [
  { label: 'Standard Alphanumeric', example: 'ABC 1234', note: 'Most common format — 3 letters + 4 digits, used in ~30 states.' },
  { label: 'Sequential Number Only', example: '123 4567', note: 'Used in some high-volume states for commercial fleets.' },
  { label: 'Vanity / Personalized', example: 'G0 FAST', note: 'Custom combo chosen by the owner; up to 7 characters in most states.' },
  { label: 'Stacked Format', example: 'AB\n1234', note: 'Letters and numbers on separate lines — older-style plates still in circulation.' },
  { label: 'Military / Gov Plates', example: 'US ARMY', note: 'Issued to government or military vehicles — different databases apply.' },
  { label: 'Dealer / Temporary Tags', example: 'TEMP 001', note: 'Paper or digital tags issued at point of sale while permanent plates are processed.' },
];

// ─── Vehicle Registration Steps ───────────────────────────────────────────────
const REG_STEPS = [
  { num: '01', title: 'Proof of Ownership', body: 'A title or bill of sale proving you legally own the vehicle.' },
  { num: '02', title: 'Residency & ID', body: 'Most states require proof of in-state residence and a valid government-issued ID.' },
  { num: '03', title: 'Auto Insurance', body: 'All 50 states require active liability insurance before issuing registration.' },
  { num: '04', title: 'Emissions Test', body: 'Required in California, New York, Texas, Illinois, and others. Check your state\'s rules.' },
  { num: '05', title: 'Pay Registration Fees', body: 'Fees vary by state, vehicle weight, type, and sometimes fuel type or age.' },
  { num: '06', title: 'Receive Your Plates', body: 'Plates are mailed or issued at the DMV. New residents typically have 30–90 days to re-register.' },
];

// ─── Component ────────────────────────────────────────────────────────────────
// ─── Vehicle Issues Chart Component ──────────────────────────────────────────
function VehicleIssuesChart() {
  const [sortMode, setSortMode] = useState<'state' | 'issues'>('issues');

  const sorted = [...STATE_ISSUES].sort((a, b) => {
    if (sortMode === 'state') return a.label.localeCompare(b.label);
    return (b.titleIssue + b.stolen + b.odometer) - (a.titleIssue + a.stolen + a.odometer);
  });

  const maxVal = 18; // chart Y-axis ceiling

  return (
    <section className="py-24" style={{ backgroundColor: '#F9FFF7', borderTop: '1px solid #e5f0e8', borderBottom: '1px solid #e5f0e8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
            Vehicle Issues Across the{' '}
            <span className="wavy-underline" style={{ color: '#0EB075' }}>United States</span>
          </h2>
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', maxWidth: '640px', margin: '0 auto', lineHeight: '1.8' }}>
            Our data reveals significant variations in used car quality across states. Florida, Texas, and California
            consistently rank among the states with the highest rates of title problems, theft records, and odometer fraud
            — making a license plate lookup even more critical in these markets.
          </p>
        </div>

        {/* Chart card */}
        <div
          style={{
            backgroundColor: '#fff',
            border: '2px solid #004B22',
            borderRadius: '4px',
            boxShadow: '6px 6px 0 0 #004B22',
            padding: '32px',
            marginBottom: '40px',
          }}
        >
          {/* Chart header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827', marginBottom: '4px' }}>
                Used Car Issues by State
              </h3>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>
                % of used vehicles with title problems, theft history, and odometer fraud (2024)
              </p>
            </div>
            {/* Sort toggle */}
            <div
              className="flex items-center"
              style={{ border: '2px solid #004B22', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}
            >
              {(['state', 'issues'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setSortMode(mode)}
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '8px 16px',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: sortMode === mode ? '#004B22' : '#fff',
                    color: sortMode === mode ? '#fff' : '#004B22',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Sort by {mode === 'state' ? 'State' : 'Issues'}
                </button>
              ))}
            </div>
          </div>

          {/* Bar chart */}
          <div className="overflow-x-auto">
            <div style={{ minWidth: '600px' }}>
              {/* Y-axis labels + bars */}
              <div style={{ alignItems: 'flex-end', height: '240px', paddingLeft: '36px', paddingBottom: '0', position: 'relative', display: 'flex' }}>
                {/* Y-axis grid lines */}
                {[0, 4, 8, 12, 16].map((tick) => (
                  <div
                    key={tick}
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: `${(tick / maxVal) * 240}px`,
                      width: '100%',
                      borderTop: tick === 0 ? '2px solid #d1d5db' : '1px dashed #e5e7eb',
                      zIndex: 0,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '-10px',
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '10px',
                        color: '#9CA3AF',
                        transform: 'translateX(-28px)',
                        width: '24px',
                        textAlign: 'right',
                      }}
                    >
                      {tick}
                    </span>
                  </div>
                ))}

                {/* Bars */}
                {sorted.map((d) => (
                  <div
                    key={d.state}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      gap: '3px',
                      paddingLeft: '4px',
                      paddingRight: '4px',
                      height: '100%',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {/* Title Issue bar */}
                    <div
                      title={`Title Issues: ${d.titleIssue}%`}
                      style={{
                        width: '28%',
                        height: `${(d.titleIssue / maxVal) * 240}px`,
                        backgroundColor: '#004B22',
                        borderRadius: '2px 2px 0 0',
                        transition: 'height 0.4s ease',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    />
                    {/* Stolen bar */}
                    <div
                      title={`Stolen History: ${d.stolen}%`}
                      style={{
                        width: '28%',
                        height: `${(d.stolen / maxVal) * 240}px`,
                        backgroundColor: '#0EB075',
                        borderRadius: '2px 2px 0 0',
                        transition: 'height 0.4s ease',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    />
                    {/* Odometer bar */}
                    <div
                      title={`Odometer Fraud: ${d.odometer}%`}
                      style={{
                        width: '28%',
                        height: `${(d.odometer / maxVal) * 240}px`,
                        backgroundColor: '#F9FFF7',
                        border: '1px solid #004B22',
                        borderRadius: '2px 2px 0 0',
                        transition: 'height 0.4s ease',
                        cursor: 'pointer',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* X-axis labels */}
              <div className="flex gap-0" style={{ paddingLeft: '36px', marginTop: '8px' }}>
                {sorted.map((d) => (
                  <div
                    key={d.state}
                    className="flex-1 text-center"
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', color: '#374151', fontWeight: 700 }}
                  >
                    {d.state}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
            {[
              { color: '#004B22', label: 'Title Issue' },
              { color: '#0EB075', label: 'Stolen History' },
              { color: '#F9FFF7', label: 'Odometer Fraud', border: '1px solid #004B22' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div style={{ width: '14px', height: '14px', backgroundColor: item.color, border: item.border || 'none', borderRadius: '2px', flexShrink: 0 }} />
                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#374151' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why These Numbers Matter */}
        <div>
          <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px', color: '#111827', marginBottom: '10px' }}>
            Why These Numbers Matter?
          </h3>
          <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.8', marginBottom: '24px', maxWidth: '800px' }}>
            The chart above shows the percentage of used vehicles in each state that carry serious, undisclosed issues
            that could directly impact your safety and your wallet. These are not minor cosmetic problems — they are
            structural risks that depreciate value, void warranties, and in some cases make a vehicle dangerous to drive.
            Running a comprehensive license plate lookup before any used car purchase is the single most effective way to
            protect yourself from these hidden hazards.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Title Issues',
                body: 'Salvage, rebuilt, flood, and lemon titles indicate the vehicle has suffered significant damage or legal defects. Vehicles with title brands are worth 20–50% less than clean-title equivalents and are often uninsurable at standard rates.',
                bg: '#EFF6FF',
                border: '#BFDBFE',
                titleColor: '#1e3a5f',
              },
              {
                title: 'Stolen History',
                body: 'Vehicles reported stolen at any point in their history create serious ownership and legal complications. Buying a car with a stolen record — even unknowingly — can result in seizure, financial loss, and criminal investigation.',
                bg: '#FFF0F3',
                border: '#FECDD3',
                titleColor: '#9F1239',
              },
              {
                title: 'Odometer Fraud',
                body: 'Rolled-back mileage artificially inflates the vehicle\'s perceived value and masks real wear. The NHTSA estimates odometer fraud costs U.S. buyers over $1 billion annually. A plate lookup exposes odometer discrepancies instantly.',
                bg: '#F0FDF4',
                border: '#BBF7D0',
                titleColor: '#14532d',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: card.bg,
                  border: `2px solid ${card.border}`,
                  borderRadius: '4px',
                  padding: '24px',
                  boxShadow: `3px 3px 0 0 ${card.border}`,
                }}
              >
                <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: card.titleColor, marginBottom: '10px' }}>
                  {card.title}
                </h4>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#374151', lineHeight: '1.8' }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LicensePlateLookupPage() {
  const [plate, setPlate] = useState('');
  const [state, setState] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FFF7' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-24 overflow-hidden" style={{ backgroundColor: '#F9FFF7' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content Column */}
              <div className="text-left">
                {/* Breadcrumb */}
                <div className="flex items-center justify-start gap-2 mb-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
                  <Link href="/" className="hover:text-[#0EB075] transition-colors">Home</Link>
                  <span>/</span>
                  <span style={{ color: '#0EB075' }}>License Plate Lookup</span>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1
                    className="leading-tight mb-6"
                    style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
                  >
                    License Plate{' '}
                    <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Lookup</span>
                  </h1>

                  <p className="mb-10 leading-relaxed" style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '18px',
                    color: '#3D4A41',
                    maxWidth: '620px',
                  }}>
                    Enter any U.S. license plate to instantly reveal the full vehicle history — accidents, title brands, liens, odometer fraud, stolen records, and more.
                  </p>
                </motion.div>

                {/* Plate + State Search Box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative mb-6"
                  style={{
                    backgroundColor: '#F9FEFB',
                    border: '2px solid #004B22',
                    borderRadius: '2px',
                    padding: '24px',
                    maxWidth: '694px',
                    boxShadow: '2px 2px 0 0 #004B22'
                  }}
                >
                  {/* Sticky note label */}
                  <div
                    className="absolute -top-4 left-4 px-3 py-1 font-body text-sm flex items-center gap-1"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '2px solid #004B22',
                      borderRadius: '6px',
                      transform: 'rotate(-2deg)',
                      fontFamily: '"Gochi Hand", cursive',
                      color: '#004B22'
                    }}
                  >
                    Enter plate + state <ArrowDown size={14} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-1">
                    <div
                      className="flex-grow flex items-center px-4 py-3 gap-3"
                      style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px', minWidth: 0 }}
                    >
                      <Search size={18} className="text-slate-400 shrink-0" />
                      <input
                        id="plate-input"
                        className="bg-transparent border-none outline-none w-full"
                        placeholder="License plate..."
                        type="text"
                        value={plate}
                        onChange={(e) => setPlate(e.target.value.toUpperCase())}
                        style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', letterSpacing: '2px' }}
                      />
                    </div>

                    <div
                      className="relative flex items-center"
                      style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px', minWidth: '160px' }}
                    >
                      <select
                        id="state-select"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full appearance-none bg-transparent border-none outline-none px-4 py-3"
                        style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: state ? '#111827' : '#94a3b8' }}
                      >
                        <option value="" disabled>State...</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 text-slate-400 pointer-events-none" />
                    </div>

                    <button
                      id="run-plate-lookup-btn"
                      className="primary-button font-body text-sm px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                      style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        fontFamily: '"Space Mono", monospace'
                      }}
                    >
                      Run Plate Lookup
                    </button>
                  </div>
                </motion.div>

                {/* Helper links */}
                <div className="flex items-center justify-between max-w-[694px] mb-10 px-2">
                  <Link
                    href="/window-sticker"
                    className="font-body hover:text-[#0EB075] transition-colors"
                    style={{
                      color: '#191C1E',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '1.125rem',
                      textDecoration: 'underline'
                    }}
                  >
                    No plate? Check by VIN
                  </Link>
                  <a
                    href="#"
                    className="font-body hover:text-[#0EB075] transition-colors"
                    style={{
                      color: '#191C1E',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '1.125rem',
                      textDecoration: 'underline'
                    }}
                  >
                    View sample report →
                  </a>
                </div>

                {/* Trust badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap justify-start gap-4 mt-10"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}
                >
                  {[
                    { icon: <CheckCircle size={16} className="text-[#0EB075]" />, text: '45+ State Databases' },
                    { icon: <Zap size={16} className="text-[#0EB075]" />, text: 'Instant Results' },
                    { icon: <Lock size={16} className="text-[#0EB075]" />, text: '100% Secure' },
                    { icon: <ClipboardList size={16} className="text-[#0EB075]" />, text: '330M+ Records' }
                  ].map((b, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white flex items-center gap-2" style={{ border: '1.5px solid #004B22', borderRadius: '4px' }}>
                      {b.icon} {b.text}
                    </span>
                  ))}
                </motion.div>
              </div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="w-full relative"
                >
                  {/* Decorative Labels */}
                  <div className="absolute -top-10 -right-6 z-20 hidden sm:block">
                    <div className="bg-[#FFE5E5] border-2 border-[#ef4444] px-4 py-2 rotate-6 sketch-shadow">
                      <span className="font-hand text-[#ef4444] text-lg" style={{ fontFamily: '"Gochi Hand", cursive' }}>Instant Lookup!</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -left-10 z-20 hidden sm:block">
                    <div className="bg-[#E5F7EE] border-2 border-[#004B22] px-4 py-2 -rotate-3 sketch-shadow">
                      <span className="font-hand text-[#004B22] text-lg" style={{ fontFamily: '"Gochi Hand", cursive' }}>Support All 50 States</span>
                    </div>
                  </div>

                  <div
                    className="relative z-10 overflow-hidden"
                    style={{
                      aspectRatio: '16/9',
                      backgroundColor: '#111827',
                    }}
                  >
                    <video
                      src="/plate-home-vid.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />

                    {/* Magic Scanner Effect */}
                    <motion.div
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      className="absolute left-0 right-0 h-1 bg-[#0EB075]/40 shadow-[0_0_15px_rgba(14,176,117,0.5)] z-10 pointer-events-none"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>


        {/* ═══════════════ WHAT IS A LICENSE PLATE LOOKUP ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff', borderTop: '1px solid #e5f0e8' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left – Main Explainer */}
              <div>
                <div
                  className="inline-flex items-center gap-2 mb-6 px-4 py-2"
                  style={{
                    backgroundColor: '#F0FDF6',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#004B22',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  <FileSearch size={14} /> What Is It?
                </div>

                <h2
                  className="leading-tight mb-6"
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}
                >
                  What Is a{' '}
                  <span className="wavy-underline" style={{ color: '#0EB075' }}>License Plate Lookup?</span>
                </h2>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#3D4A41', lineHeight: '1.9', marginBottom: '20px' }}>
                  A <strong>license plate lookup</strong> is an online search that converts a vehicle&apos;s registration plate number into a comprehensive vehicle history report — without needing the VIN. By querying state DMV databases, insurance records, and accident reporting systems, it surfaces the complete story behind any U.S.-registered vehicle.
                </p>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#3D4A41', lineHeight: '1.9', marginBottom: '24px' }}>
                  Whether you&apos;re buying a used car from a private seller or a dealership, a license plate number search gives you instant access to title brands, accident history, lien records, odometer data, and more — directly from official state and federal databases.
                </p>

                {/* Legal note callout */}
                <div
                  style={{
                    backgroundColor: '#F0FDF6',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '20px 24px',
                    boxShadow: '4px 4px 0 0 #004B22',
                  }}
                >
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#004B22', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Shield size={20} /> Is It Legal?
                  </div>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.8' }}>
                    Yes — 100% legal for personal use under the <strong>Driver&apos;s Privacy Protection Act (DPPA)</strong>. Running a plate lookup to research a vehicle before purchase is an explicitly permitted use. We never return personal owner information such as names or addresses.
                  </p>
                </div>
              </div>

              {/* Right – Data Point Cards */}
              <div>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '16px' }}>
                  WHAT YOU CAN DO WITH A PLATE SEARCH
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <AlertTriangle size={20} color="#ef4444" />,
                      accent: '#ef4444',
                      title: 'Avoid Damaged Vehicles',
                      stat: '1 in 25',
                      body: 'used cars has a history of accidents that may not be disclosed by sellers. A plate lookup reveals accident history, structural damage, and airbag deployments.',
                    },
                    {
                      icon: <Flag size={20} color="#ef4444" />,
                      accent: '#ef4444',
                      title: 'Identify Stolen Vehicles',
                      stat: '850,708',
                      body: 'vehicles were stolen in the U.S. in 2024. Some re-enter the market with altered VINs and fake paperwork. Spot them instantly with a plate check.',
                    },
                    {
                      icon: <Users size={20} color="#0EB075" />,
                      accent: '#0EB075',
                      title: 'Check Owner Records',
                      stat: 'Full Chain',
                      body: 'Multiple rapid ownership changes can signal heavy use or hidden problems. See every registered owner, usage type, and state-by-state location history.',
                    },
                    {
                      icon: <Shield size={20} color="#F59E0B" />,
                      accent: '#F59E0B',
                      title: 'Catch Title Brand Records',
                      stat: 'Salvage · Flood · Lemon',
                      body: 'Some vehicles are assigned salvage, rebuilt, junk, or flood title brands after damage. A lookup identifies vehicles that are not safe or legal to drive.',
                    },
                    {
                      icon: <Clock size={20} color="#F59E0B" />,
                      accent: '#F59E0B',
                      title: 'Spot Mileage Fraud',
                      stat: '2.14M vehicles',
                      body: 'on U.S. roads may have had their odometers rolled back in 2024. These vehicles have more wear, more risk, and shorter lifespans — catch it before you buy.',
                    },
                    {
                      icon: <CreditCard size={20} color="#0EB075" />,
                      accent: '#0EB075',
                      title: 'Spot Lien & Loan Records',
                      stat: 'Active Liens',
                      body: 'If a lien exists, the lender owns the car — not the seller. Our plate search tells you upfront so you can walk away before signing over your money.',
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      style={{
                        backgroundColor: '#F9FFF7',
                        border: '2px solid #004B22',
                        borderRadius: '4px',
                        padding: '20px',
                        boxShadow: '3px 3px 0 0 #004B22',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {card.icon}
                        <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#111827' }}>
                          {card.title}
                        </h3>
                      </div>
                      <div
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: card.accent,
                          letterSpacing: '0.5px',
                          marginBottom: '8px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {card.stat}
                      </div>
                      <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.75' }}>
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ═══════════════ WHEN TO CONDUCT ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9FFF7', borderTop: '1px solid #e5f0e8' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}
              >
                Situations That <span className="wavy-underline-red" style={{ color: '#ef4444' }}>Demand</span> a Plate Check
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', maxWidth: '580px', margin: '0 auto', lineHeight: '1.8' }}>
                Not every deal is what it seems. These are the exact moments a license plate search can save you from a costly, regrettable mistake — before you ever hand over your money.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {[
                {
                  icon: <Search size={22} color="#ef4444" />,
                  bg: '#FFF5F5',
                  border: '#f8c0c0',
                  shadow: '#ef4444',
                  title: 'No VIN Visible',
                  badge: '🚩 Red Flag',
                  badgeColor: '#ef4444',
                  badgeBg: '#FEE2E2',
                  body: 'You\'re buying a car and the VIN plate is missing, covered, or tampered with. A license plate lookup is your only way to pull the vehicle\'s full history — and a missing VIN is always a red flag worth investigating.',
                },
                {
                  icon: <Clock size={22} color="#F59E0B" />,
                  bg: '#FFFBEB',
                  border: '#fcd97a',
                  shadow: '#F59E0B',
                  title: 'Rushing Seller',
                  badge: '⚠️ Be Cautious',
                  badgeColor: '#B45309',
                  badgeBg: '#FEF3C7',
                  body: 'The seller is pushing for a quick sale, avoiding questions about the vehicle\'s past, or refusing to provide paperwork. Run a plate lookup immediately — pressure tactics are a classic sign of something to hide.',
                },
                {
                  icon: <MapPin size={22} color="#0EB075" />,
                  bg: '#F0FDF6',
                  border: '#a3d9b8',
                  shadow: '#004B22',
                  title: 'Online Marketplace Deals',
                  badge: '🌐 Always Verify',
                  badgeColor: '#004B22',
                  badgeBg: '#DCFCE7',
                  body: 'You found the car on Craigslist, Facebook Marketplace, or another private listing site. These platforms have zero verification. A quick license plate number lookup gives you the truth no listing photo ever will.',
                },
                {
                  icon: <DollarSign size={22} color="#ef4444" />,
                  bg: '#FFF5F5',
                  border: '#f8c0c0',
                  shadow: '#ef4444',
                  title: 'Too Good to Be True',
                  badge: '🚩 Classic Scam Sign',
                  badgeColor: '#ef4444',
                  badgeBg: '#FEE2E2',
                  body: 'The price is well below market value and the seller can\'t fully explain why. Salvage titles, flood damage, and prior total-loss designations drastically reduce a vehicle\'s value — and the seller knows it.',
                },
                {
                  icon: <Flag size={22} color="#F59E0B" />,
                  bg: '#FFFBEB',
                  border: '#fcd97a',
                  shadow: '#F59E0B',
                  title: 'Suspected Stolen Vehicle',
                  badge: '⚠️ Verify Immediately',
                  badgeColor: '#B45309',
                  badgeBg: '#FEF3C7',
                  body: 'Something feels off — mismatched colors, fresh repainting, a story that doesn\'t add up. A plate lookup cross-references the NICB national stolen vehicle database instantly to confirm whether the car is reported stolen.',
                },
                {
                  icon: <ClipboardList size={22} color="#0EB075" />,
                  bg: '#F0FDF6',
                  border: '#a3d9b8',
                  shadow: '#004B22',
                  title: 'Missing Documentation',
                  badge: '🌐 No Papers = No Deal',
                  badgeColor: '#004B22',
                  badgeBg: '#DCFCE7',
                  body: 'The vehicle has little to no service records, title history, or ownership documents. A license plate search reconstructs the vehicle\'s history from official state records so you\'re never buying blind.',
                },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: card.bg,
                    border: `2px solid ${card.border}`,
                    borderRadius: '4px',
                    padding: '24px',
                    boxShadow: `3px 3px 0 0 ${card.shadow}`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {card.icon}
                    <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827' }}>
                      {card.title}
                    </h3>
                  </div>
                  <span
                    className="inline-block mb-3 px-2.5 py-0.5"
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: card.badgeColor,
                      backgroundColor: card.badgeBg,
                      borderRadius: '3px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {card.badge}
                  </span>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.8' }}>
                    {card.body}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div
              className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-8 px-10 py-10"
              style={{
                backgroundColor: '#fff',
                border: '2px solid #004B22',
                borderRadius: '4px',
                boxShadow: '6px 6px 0 0 #004B22',
              }}
            >
              {/* Left: Content */}
              <div className="flex-1">
                <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#111827', marginBottom: '10px', lineHeight: '1.3' }}>
                  Don&apos;t wait for a <span style={{ color: '#0EB075' }}>costly surprise</span> — check before you commit.
                </p>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563', lineHeight: '1.8' }}>
                  Instant results from 330M+ records. No VIN needed.
                </p>
              </div>

              {/* Right: Buttons */}
              <div className="flex flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
                <a
                  href="#"
                  className="primary-button inline-flex items-center justify-center px-10 py-4"
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  GET A LICENSE PLATE LOOKUP
                </a>
                <a
                  href="#"
                  className="secondary-button inline-flex items-center justify-center px-10 py-4"
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontWeight: 700,
                    fontSize: '14px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  VIEW A SAMPLE REPORT
                </a>
              </div>
            </div>
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
        <section className="py-24" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <div
                className="inline-block"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#0EB075',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: '1.5px solid #0EB075',
                  borderRadius: '2px',
                  padding: '4px 12px',
                  marginBottom: '20px',
                }}
              >
                Real Buyer Story
              </div>
              <h2
                style={{
                  fontFamily: '"Gochi Hand", cursive',
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                  color: '#111827',
                  lineHeight: '1.25',
                  maxWidth: '680px',
                  margin: '0 auto 16px',
                }}
              >
                How Jason Almost Bought a{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>
                  Total-Loss Vehicle
                </span>
              </h2>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '13px',
                  color: '#3D4A41',
                  lineHeight: '1.8',
                  maxWidth: '540px',
                  margin: '0 auto',
                }}
              >
                The listing looked clean. The seller was charming. But Jason decided to run one quick plate lookup before signing. It was the best $20 he ever spent.
              </p>
            </div>

            {/* Pull quote */}
            <div
              className="max-w-4xl mx-auto"
              style={{
                backgroundColor: '#F5FDF9',
                border: '2px solid #004B22',
                borderRadius: '4px',
                boxShadow: '4px 4px 0 0 #004B22',
                padding: '28px 36px',
                marginBottom: '48px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  fontFamily: '"Gochi Hand", cursive',
                  fontSize: '26px',
                  color: '#0EB075',
                  lineHeight: '1',
                  marginBottom: '12px',
                  opacity: 0.4,
                }}
              >
                &ldquo;
              </div>
              <p
                style={{
                  fontFamily: '"Gochi Hand", cursive',
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  color: '#111827',
                  lineHeight: '1.5',
                  margin: '0 0 16px',
                }}
              >
                The moment I showed them the lookup results, the seller&apos;s story fell apart. The &lsquo;one owner, no accidents&rsquo; talk stopped instantly.
              </p>
              <div
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '12px',
                  color: '#0EB075',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                }}
              >
                — JASON, 32 · TAMPA, FL
              </div>
            </div>

            {/* Two-column body */}
            <div className="grid lg:grid-cols-2 gap-10">

              {/* LEFT — Story steps */}
              <div className="flex flex-col gap-6">
                <h3
                  style={{
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: '22px',
                    color: '#111827',
                    marginBottom: '4px',
                  }}
                >
                  What happened, step by step
                </h3>
                {[
                  {
                    icon: <AlertTriangle size={16} style={{ color: '#EF4444', flexShrink: 0 }} />,
                    label: 'The Seller\'s Pitch',
                    text: '"It\'s been in the family for years. Never a single dent. Cleanest title you\'ll find in Florida."',
                    accent: '#EF4444',
                    bg: '#FEF2F2',
                  },
                  {
                    icon: <FileText size={16} style={{ color: '#F59E0B', flexShrink: 0 }} />,
                    label: 'Jason Runs the Lookup',
                    text: 'Something felt off. He pulled the plate number and had the full report on his phone in 60 seconds.',
                    accent: '#F59E0B',
                    bg: '#FFFBEB',
                  },
                  {
                    icon: <Shield size={16} style={{ color: '#0EB075', flexShrink: 0 }} />,
                    label: 'What the Report Showed',
                    text: 'The car was declared a total loss in Georgia two years ago. It had major flood damage and a salvage brand title.',
                    accent: '#0EB075',
                    bg: '#F0FBF5',
                  },
                  {
                    icon: <BadgeDollarSign size={16} style={{ color: '#0EB075', flexShrink: 0 }} />,
                    label: 'The Outcome',
                    text: 'Jason walked away immediately. He avoided buying a vehicle that was essentially worth its weight in scrap metal.',
                    accent: '#0EB075',
                    bg: '#F0FBF5',
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      alignItems: 'flex-start',
                      backgroundColor: step.bg,
                      border: `1.5px solid ${step.accent}`,
                      borderRadius: '4px',
                      padding: '16px 18px',
                    }}
                  >
                    <div style={{ marginTop: '2px' }}>{step.icon}</div>
                    <div>
                      <div
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '11px',
                          fontWeight: 700,
                          color: step.accent,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '6px',
                        }}
                      >
                        {step.label}
                      </div>
                      <p
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '12px',
                          color: '#3D4A41',
                          lineHeight: '1.8',
                          margin: 0,
                          fontStyle: i === 0 ? 'italic' : 'normal',
                        }}
                      >
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT — Numbers */}
              <div className="flex flex-col gap-6">
                <h3
                  style={{
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: '22px',
                    color: '#111827',
                    marginBottom: '4px',
                  }}
                >
                  By the numbers
                </h3>

                {/* Price table */}
                <div
                  style={{
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    boxShadow: '3px 3px 0 0 #004B22',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#004B22',
                      padding: '16px 20px',
                      fontFamily: '"Gochi Hand", cursive',
                      color: '#fff',
                      fontSize: '18px',
                    }}
                  >
                    Potential Cost vs. Savings
                  </div>
                  <div className="divide-y divide-slate-100" style={{ backgroundColor: '#fff' }}>
                    {[
                      { label: 'Seller\'s Asking Price', val: '$18,500', color: '#111827' },
                      { label: 'Actual Value (Salvage)', val: '$4,200', color: '#EF4444' },
                      { label: 'Potential Repair Bills', val: '$5,000+', color: '#EF4444' },
                      { label: 'License Plate Lookup', val: '-$19.99', color: '#0EB075' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between items-center px-5 py-4">
                        <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#4B5563' }}>{row.label}</span>
                        <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', fontWeight: 700, color: row.color }}>{row.val}</span>
                      </div>
                    ))}
                    <div
                      className="flex justify-between items-center px-5 py-5"
                      style={{ backgroundColor: '#F0FBF5' }}
                    >
                      <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#004B22' }}>Total Avoided Loss</span>
                      <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px', color: '#004B22' }}>$14,300+</span>
                    </div>
                  </div>
                </div>

                {/* Savings Callout */}
                <div
                  style={{
                    backgroundColor: '#FFFBEB',
                    border: '1.5px dashed #F59E0B',
                    borderRadius: '4px',
                    padding: '24px',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Zap size={20} className="text-[#F59E0B]" />
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#B45309' }}>The Real Cost of Silence</h4>
                  </div>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#92400E', lineHeight: '1.7' }}>
                    A total-loss vehicle isn&apos;t just a bad investment—it&apos;s often uninsurable and dangerous to drive. Jason saved more than just money; he saved himself from a safety nightmare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ VEHICLE ISSUES BY STATE ═══════════════ */}
        <VehicleIssuesChart />

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
                  <div className="flex items-center gap-2">
                    <Bell size={18} /> Avoid Buying Damaged Vehicles
                  </div>
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
                  <div className="flex items-center gap-2">
                    <Search size={18} /> Spot Lien and Loan Records
                  </div>
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
        <section className="py-24" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', marginBottom: '16px' }}
              >
                How the <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Plate Lookup Works?</span>
              </h2>
              <p
                style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#3D4A41', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}
              >
                The process is straightforward. By combining plate data with state and federal databases, we pull a comprehensive history of the vehicle without needing you to find the VIN yourself.
              </p>
            </div>

            {/* Main 4 Steps - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {[
                { 
                  step: 1, 
                  title: 'Grab the Plate Info', 
                  text: 'Pop in the number and select the state. It\'s the key to the car\'s hidden history.',
                  link: { label: 'Can\'t find the state?', href: '#' }
                },
                { 
                  step: 2, 
                  title: 'Instant Database Scan', 
                  text: 'Our systems query 330M+ state and federal records in milliseconds.'
                },
                { 
                  step: 3, 
                  title: 'The Full Disclosure', 
                  text: 'Unlock everything from title brands to hidden accident history.',
                  badge: 'READY IN SECONDS'
                },
                { 
                  step: 4, 
                  title: 'Drive with Confidence', 
                  text: 'Know exactly what you\'re getting. No more factory or owner secrets.',
                  link: { label: 'View sample report', href: '#' }
                },
              ].map((item) => (
                <div key={item.step} className="flex flex-col">
                  <div className="flex items-start gap-4 mb-3">
                    <span
                      style={{ color: '#0EB075', fontFamily: '"Gochi Hand", cursive', fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}
                    >
                      {item.step}
                    </span>
                    <h3
                      style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.5rem', color: '#1a1a1a' }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#4B5563', marginLeft: '32px', lineHeight: '1.6', marginBottom: '12px' }}
                  >
                    {item.text}
                  </p>
                  {item.link && (
                    <a
                      href={item.link.href}
                      style={{ 
                        color: '#191C1E', 
                        fontFamily: '"Space Mono", monospace', 
                        fontSize: '14px', 
                        marginLeft: '32px',
                        textDecoration: 'underline',
                        textDecorationColor: '#0EB075',
                        textUnderlineOffset: '4px'
                      }}
                    >
                      {item.link.label}
                    </a>
                  )}
                  {item.badge && (
                    <div
                      className="inline-flex items-center gap-2 mt-2"
                      style={{
                        alignSelf: 'flex-start',
                        marginLeft: '32px',
                        backgroundColor: '#F0FBF5',
                        border: '1px solid #0EB075',
                        borderRadius: '2px',
                        padding: '2px 8px',
                      }}
                    >
                      <Zap size={12} className="text-[#0EB075]" />
                      <span
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '10px',
                          fontWeight: 700,
                          color: '#0EB075',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                  )}
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
                  <div className="text-[#0EB075] mb-4">{pt.icon}</div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827', marginBottom: '8px' }}>{pt.name}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7' }}>{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ LICENSE PLATE FORMATS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                License Plate{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>Formats</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
                Every state designs its own plates — and formats vary widely. Our lookup handles them all, from standard alphanumeric to vanity and government plates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PLATE_FORMATS.map((fmt, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#F5FDF9',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '24px',
                    boxShadow: '4px 4px 0 0 #004B22',
                  }}
                >
                  <div
                    className="inline-block mb-4 px-4 py-2"
                    style={{
                      backgroundColor: '#004B22',
                      borderRadius: '3px',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '3px',
                    }}
                  >
                    {fmt.example}
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827', marginBottom: '6px' }}>{fmt.label}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.7' }}>{fmt.note}</p>
                </div>
              ))}
            </div>


          </div>
        </section>

        {/* ═══════════════ HOW TO REGISTER A VEHICLE ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2', borderTop: '1px solid #c8dfc8' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                How to{' '}
                <span className="wavy-underline" style={{ color: '#0EB075' }}>Register a Vehicle</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '560px', margin: '0 auto', lineHeight: '1.7' }}>
                Just bought a car? Before you get those plates, here's exactly what every state requires — and why running a plate lookup first is the smartest first step.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {REG_STEPS.map((step, i) => (
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
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '32px', color: '#0EB075', marginBottom: '10px' }}>{step.num}</div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41', lineHeight: '1.7' }}>{step.body}</p>
                </div>
              ))}
            </div>

            {/* Pro tip callout */}
            <div
              style={{
                backgroundColor: '#fff',
                border: '2px solid #004B22',
                borderRadius: '4px',
                boxShadow: '4px 4px 0 0 #004B22',
                padding: '24px 32px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                marginTop: '48px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: '"Gochi Hand", cursive',
                    fontSize: '22px',
                    color: '#111827',
                    marginBottom: '4px',
                  }}
                >
                  ⚡ Pro tip before you register
                </div>
                <div
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '13px',
                    color: '#3D4A41',
                    lineHeight: '1.7',
                    maxWidth: '620px',
                  }}
                >
                  Run a plate lookup <span style={{ color: '#0EB075', fontWeight: 700 }}>before</span> you pay any fees. If the vehicle has an active lien or salvage title, you&apos;ll want to know now.
                </div>
              </div>
              <a
                href="#"
                className="primary-button"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '15px',
                  fontWeight: 700,
                  padding: '12px 32px',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  display: 'inline-block',
                }}
              >
                Run a Free Lookup
              </a>
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
              className="mt-10 mx-auto p-8 max-w-2xl"
              style={{
                backgroundColor: '#fff',
                border: '2px solid #004B22',
                borderRadius: '4px',
                boxShadow: '4px 4px 0 0 #004B22',
              }}
            >
              <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827', marginBottom: '14px' }}>
                What state-level data you get:
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  'State-specific DMV records', 'Local title & registration history',
                  'Out-of-state transfer records', 'State-specific disclosure standards',
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <CheckCircle size={16} color="#0EB075" />
                    <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#3D4A41' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ═══════════════ TESTIMONIALS ═══════════════ */}
        <Testimonials />

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
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
        <section className="py-32" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div 
              className="relative p-12 md:p-20 text-center overflow-hidden"
              style={{ 
                backgroundColor: '#F5FDF9', 
                border: '3px solid #004B22', 
                borderRadius: '8px',
                boxShadow: '12px 12px 0 0 #004B22'
              }}
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EB075] opacity-[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#004B22] opacity-[0.03] rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div
                  className="inline-block mb-8 px-5 py-2"
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    fontFamily: '"Gochi Hand", cursive',
                    color: '#004B22',
                    fontSize: '18px',
                    transform: 'rotate(-1deg)'
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Search size={20} /> Instant Vehicle History
                  </div>
                </div>

                <h2 
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', marginBottom: '24px', lineHeight: '1.1' }}
                >
                  Ready to Uncover the <span style={{ color: '#0EB075' }}>Full Truth?</span>
                </h2>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#4B5563', marginBottom: '48px', lineHeight: '1.7' }}>
                  Run your first plate lookup now. Enter the plate number, select the state, and get the full vehicle history in seconds.
                </p>

                {/* CTA Form */}
                <div
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '8px',
                    boxShadow: '6px 6px 0 0 #004B22',
                  }}
                >
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div
                      className="flex-grow flex items-center px-5 py-4 gap-3 bg-white"
                      style={{ borderRadius: '2px' }}
                    >
                      <Search size={22} className="text-[#0EB075] shrink-0" />
                      <input
                        id="plate-input-cta"
                        className="bg-transparent border-none outline-none w-full font-bold"
                        placeholder="License plate..."
                        type="text"
                        style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#111827' }}
                      />
                    </div>
                    <div
                      className="flex items-center px-5 py-4 bg-white"
                      style={{ borderRadius: '2px', borderLeft: '2px solid #f1f5f9' }}
                    >
                      <select
                        id="state-select-cta"
                        className="bg-transparent border-none outline-none font-bold"
                        style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#111827', appearance: 'none' }}
                      >
                        <option value="" disabled>State...</option>
                        {US_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDown size={18} className="text-slate-400 ml-2" />
                    </div>
                    <button
                      id="lookup-plate-cta"
                      className="primary-button px-10 py-4 whitespace-nowrap"
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', fontWeight: 700 }}
                    >
                      Run Lookup
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-center gap-8 opacity-60">
                  {['Official Records', 'Instant Results', '100% Secure'].map((tag, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0EB075] rounded-full" />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ═══════════════ VIDEO MODAL ═══════════════ */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl overflow-hidden"
              style={{
                backgroundColor: '#fff',
                border: '3px solid #004B22',
                borderRadius: '8px',
                boxShadow: '12px 12px 0 0 #004B22',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b-2 border-[#004B22]" style={{ backgroundColor: '#F5FDF9' }}>
                <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#111827' }}>
                  License Plate Lookup Preview
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#0EB075]/10 transition-colors"
                  style={{ border: '2px solid #004B22' }}
                >
                  <Search size={20} className="rotate-45" />
                </button>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video bg-black">
                <video
                  src={selectedVideo}
                  autoPlay
                  controls
                  className="w-full h-full"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ backgroundColor: '#F5FDF9' }}>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
                  ⚡ All 50 states supported with instant data retrieval.
                </p>
                <button
                  className="primary-button px-8 py-2.5 text-sm"
                  style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}
                  onClick={() => setSelectedVideo(null)}
                >
                  Got it!
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
