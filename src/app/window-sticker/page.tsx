"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, CheckCircle, FileText, Shield, Zap, Tag, Fuel, ArrowRight } from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── FAQ Data ────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: 'Can you get a build sheet from a VIN?',
    a: 'Yes! Our build sheet lookup tool gives you the original factory specs for any vehicle. Enter the VIN and get the full breakdown of exactly how your car was built from the factory floor.',
  },
  {
    q: 'Can I look up my vehicle specs by VIN?',
    a: 'Absolutely. Our VIN decoder pulls the complete factory specification sheet for any supported make and model. Engine, transmission, trim package, optional extras—all decoded in seconds.',
  },
  {
    q: 'Can a VIN tell me the trim level?',
    a: 'Yes. The VIN encodes the trim level, body style, engine type, and even the plant where it was assembled. Our lookup decodes all of that for you instantly.',
  },
  {
    q: 'What is a Window Sticker (Monroney Label)?',
    a: 'The Monroney label is the federally mandated sticker placed on every new vehicle. It lists the MSRP, standard features, optional packages, fuel economy ratings, and safety data. Getting it by VIN lets you verify what was really on that car from day one.',
  },
  {
    q: 'What brands do you support?',
    a: 'We support virtually every major manufacturer sold in the US—Ford, Toyota, Honda, GM, BMW, Mercedes-Benz, Jeep, RAM, Audi, Volkswagen, and dozens more. Classic and pre-1980 vehicles have a separate lookup tool.',
  },
];

// ─── Brands ──────────────────────────────────────────────────────────────────
const BRANDS = [
  'Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Bentley', 'Buick', 'Cadillac',
  'Chevrolet', 'Chrysler', 'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis',
  'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'KIA',
  'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mini',
  'Mitsubishi', 'Nissan', 'Porsche', 'RAM', 'Rivian', 'Rolls-Royce',
  'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo',
];

// ─── What's Included data ────────────────────────────────────────────────────
const STICKER_SECTIONS = [
  { icon: <Tag size={28} color="#0EB075" />, title: 'Vehicle Description', desc: 'Year, make, model, trim level, body style, and the full 17-digit VIN—all in one place.' },
  { icon: <CheckCircle size={28} color="#0EB075" />, title: 'Optional Equipment & Packages', desc: 'Every factory package, individual add-on, and trim-level addition that was ordered fresh from the assembly line.' },
  { icon: <FileText size={28} color="#0EB075" />, title: 'MSRP & Total Price', desc: 'Original sticker price broken down: base cost, factory options, destination charge, and the bottom-line MSRP.' },
  { icon: <Shield size={28} color="#0EB075" />, title: 'NHTSA Safety Ratings', desc: 'Official crash-test scores and the overall safety star rating from the National Highway Traffic Safety Administration.' },
  { icon: <Fuel size={28} color="#0EB075" />, title: 'Fuel Economy & Green Scores', desc: 'City, highway, and combined MPG; estimated annual fuel cost; five-year savings; and the CO₂ emissions rating.' },
  { icon: <Zap size={28} color="#0EB075" />, title: 'Mechanical & Interior Features', desc: 'Engine specs, transmission type, drivetrain layout, seating, cabin tech, safety systems, and warranty terms.' },
];

// ─── Why Important ───────────────────────────────────────────────────────────
const WHY_GROUPS = [
  {
    emoji: '🛒',
    role: 'Buyers',
    points: [
      'Verify specs & avoid scams before you sign anything.',
      'Compare fuel ratings, safety stars, and package inclusions side-by-side.',
      'Negotiate with hard numbers—not dealer talking points.',
    ],
  },
  {
    emoji: '🏷️',
    role: 'Sellers',
    points: [
      'Prove original features and packages to command a fair price.',
      'Build trust by showing factory documentation upfront.',
      'Shorten the haggling phase with transparent paperwork.',
    ],
  },
  {
    emoji: '🏢',
    role: 'Dealerships',
    points: [
      'Stay compliant with federal and state disclosure requirements.',
      'Give buyers accurate factory info—zero disputes.',
      'Boost customer loyalty with professional, documented presentations.',
    ],
  },
];

// ─── How It Works steps ───────────────────────────────────────────────────────
const STEPS = [
  { num: '01', title: 'Find the VIN', body: 'Look on the driver-side dashboard (visible through the windshield), the door jamb sticker, or the vehicle title. It\'s always 17 characters.' },
  { num: '02', title: 'Enter it Above', body: 'Type or paste the VIN into the search box at the top of this page and hit "Get Window Sticker".' },
  { num: '03', title: 'Download Your Sticker', body: 'Your original Monroney label is generated instantly. Download it as a PDF or share a direct link.' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function WindowStickerPage() {
  const [vin, setVin] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
          {/* Decorative sketch lines */}
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #004B22 0px, transparent 1px, transparent 40px)',
          }} />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
              <a href="/" className="hover:text-[#0EB075] transition-colors">Home</a>
              <span>/</span>
              <span style={{ color: '#0EB075' }}>Window Sticker</span>
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
                🪟 Original Monroney Label Lookup
              </div>

              <h1
                className="leading-tight mb-6"
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                Window Sticker{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Lookup by VIN</span>
              </h1>

              <p className="mb-10 mx-auto leading-relaxed" style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '18px',
                color: '#3D4A41',
                maxWidth: '620px',
              }}>
                Enter your VIN to retrieve the original window sticker (Monroney label) and verify factory equipment, options, and specs for any brand, model, or year.
              </p>
            </motion.div>

            {/* VIN Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mx-auto"
              style={{
                backgroundColor: '#fff',
                border: '2px solid #004B22',
                borderRadius: '4px',
                padding: '24px',
                maxWidth: '680px',
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
                Paste VIN here 👇
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <div
                  className="flex-grow flex items-center px-4 py-3 gap-3"
                  style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}
                >
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="vin-input-window-sticker"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="Enter 17-digit VIN number..."
                    type="text"
                    value={vin}
                    onChange={(e) => setVin(e.target.value.toUpperCase())}
                    maxLength={17}
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                  />
                </div>
                <button
                  id="get-window-sticker-btn"
                  className="primary-button px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', fontWeight: 700 }}
                >
                  Get Window Sticker
                </button>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4 text-sm" style={{ fontFamily: '"Space Mono", monospace', color: '#6B7280' }}>
                <a href="#" className="hover:text-[#0EB075] underline transition-colors">Where can I find the VIN?</a>
                <a href="#" className="hover:text-[#0EB075] underline transition-colors">View a sample sticker →</a>
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
              {['✅ All Major Brands', '⚡ Instant PDF Download', '🔒 100% Private Lookup', '📋 330M+ Records'].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-white" style={{ border: '1.5px solid #004B22', borderRadius: '4px' }}>{badge}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ WHY YOU NEED IT ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Why You Need the VIN for a{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Window Sticker</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41', maxWidth: '560px', margin: '0 auto' }}>
                The window sticker is the factory&apos;s sworn statement about what that car is. Here&apos;s what it reveals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'The Original MSRP', body: 'Know the real factory sticker price—not the inflated number a dealer scribbles on the lot.' },
                { title: 'Trim Level & Factory Config', body: 'Confirm if it\'s truly a "Sport" or "Limited" trim, not a base model dressed up with dealer add-ons.' },
                { title: 'Packages & Installed Equipment', body: 'See every factory package that was ticked at the time of order—sunroof, tow package, tech bundle.' },
                { title: 'Engine & Transmission', body: 'The exact engine code, displacement, and transmission that came bolted in from the factory.' },
                { title: 'Paint & Interior Combinations', body: 'Verify original color codes. Repainted cars won\'t match the factory exterior code on the sticker.' },
                { title: 'Fuel Economy & Safety Data', body: 'Official EPA fuel ratings and NHTSA crash scores assigned before the car ever left the plant.' },
              ].map((item, i) => (
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
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#0EB075', marginBottom: '10px' }}>
                    {String(i + 1).padStart(2, '0')}.
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.7' }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ REAL STORY (Liam's Case) ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#004B22' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff' }}>
              A Real Story: What the<br />
              <span style={{ color: '#0EB075' }}>Window Sticker Revealed</span>
            </h2>
            <p className="text-center mb-14" style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.7)', maxWidth: '560px', margin: '0 auto 56px' }}>
              Liam was about to buy a &quot;fully loaded&quot; SUV. The dealer&apos;s pitch sounded great—until he pulled the original sticker.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Dealer claims */}
              <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '4px', padding: '28px' }}>
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#ef4444', marginBottom: '16px' }}>🚩 What the Dealer Said</div>
                {[
                  '"This is fully loaded with premium packages."',
                  '"The original sticker was $31,000. You\'re getting a steal at $19,500."',
                  '"These luxury features don\'t come standard."',
                ].map((claim, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <span style={{ color: '#ef4444', fontSize: '20px', flexShrink: 0 }}>✗</span>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', fontStyle: 'italic' }}>{claim}</p>
                  </div>
                ))}
              </div>

              {/* What sticker revealed */}
              <div style={{ backgroundColor: 'rgba(14,176,117,0.12)', border: '2px solid #0EB075', borderRadius: '4px', padding: '28px' }}>
                <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#0EB075', marginBottom: '16px' }}>📋 What the Sticker Showed</div>
                {[
                  'LIE #1: Original MSRP was $29,345—not $31,000.',
                  'LIE #2: The "premium cloth seats" were standard equipment.',
                  'LIE #3: "Fully loaded" was missing several optional packages.',
                  'LIE #4: Charging premium prices for features that came free.',
                ].map((truth, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <span style={{ color: '#0EB075', fontSize: '20px', flexShrink: 0 }}>✓</span>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>{truth}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {[
                { emoji: '💰', val: '$3,000', label: 'Saved in negotiation' },
                { emoji: '😌', val: 'Zero', label: "Buyer's remorse" },
                { emoji: '💪', val: '100%', label: 'Negotiated with confidence' },
              ].map((stat) => (
                <div key={stat.val} className="text-center">
                  <div style={{ fontSize: '32px', marginBottom: '4px' }}>{stat.emoji}</div>
                  <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#0EB075' }}>{stat.val}</div>
                  <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ WHAT'S INCLUDED ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Everything Inside Your<br />
                <span style={{ color: '#0EB075' }}>Window Sticker Report</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STICKER_SECTIONS.map((section, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '28px',
                    boxShadow: '4px 4px 0 0 #004B22',
                  }}
                >
                  <div style={{ marginBottom: '14px' }}>{section.icon}</div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827', marginBottom: '8px' }}>{section.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.7' }}>{section.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ WHY IMPORTANT ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '12px' }}>
                Why Getting a Window Sticker{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Matters</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {WHY_GROUPS.map((group) => (
                <div
                  key={group.role}
                  style={{
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    boxShadow: '5px 5px 0 0 #004B22',
                  }}
                >
                  <div style={{ backgroundColor: '#004B22', padding: '16px 24px' }}>
                    <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#fff' }}>
                      {group.emoji} For {group.role}
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#fff', padding: '24px' }}>
                    {group.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3 mb-4">
                        <CheckCircle size={16} color="#0EB075" className="shrink-0 mt-1" />
                        <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.6' }}>{pt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="#"
                className="primary-button inline-flex items-center gap-2 px-10 py-4"
                style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', fontWeight: 700 }}
              >
                Get Window Sticker <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════ HOW IT WORKS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-14" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              How to Use the{' '}
              <span style={{ color: '#0EB075' }}>Window Sticker Lookup</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((step, i) => (
                <div key={i} className="relative text-center">
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px" style={{ borderTop: '2px dashed #004B22' }} />
                  )}
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 mb-5"
                    style={{ border: '2px solid #004B22', borderRadius: '4px', boxShadow: '3px 3px 0 0 #004B22', backgroundColor: '#fff', fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#0EB075' }}
                  >
                    {step.num}
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.7' }}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ SUPPORTED BRANDS ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-center mb-4" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827' }}>
              Supported{' '}
              <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Brands</span>
            </h2>
            <p className="text-center mb-12" style={{ fontFamily: '"Space Mono", monospace', color: '#3D4A41' }}>
              Window sticker lookup available for these manufacturers
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {BRANDS.map((brand) => (
                <a
                  key={brand}
                  href="#"
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '13px',
                    color: '#004B22',
                    padding: '8px 16px',
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
                  {brand}
                </a>
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
              Everything you wanted to know about window sticker lookups
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
                    id={`ws-faq-${idx}`}
                    className="w-full flex justify-between items-center text-left px-6 py-5 gap-4"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.15rem', color: '#1a1a1a' }}>
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
                          style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', borderTop: '1px solid #e5e7eb', lineHeight: '1.7' }}
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
              🔍 Check Your Vehicle&apos;s Documentation
            </div>
            <h2 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px' }}>
              Know Exactly What You&apos;re Buying.{' '}
              <span style={{ color: '#0EB075' }}>Every Time.</span>
            </h2>
            <p style={{ fontFamily: '"Space Mono", monospace', color: 'rgba(255,255,255,0.75)', marginBottom: '40px', lineHeight: '1.7' }}>
              Pull the original factory sticker by VIN in seconds. Verify specs, packages, and the real original MSRP before you sign a single thing.
            </p>

            {/* Inline CTA VIN form */}
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
                  style={{ borderRadius: '2px' }}
                >
                  <Search size={18} className="text-slate-400 shrink-0" />
                  <input
                    id="vin-input-ws-cta"
                    className="bg-transparent border-none outline-none w-full"
                    placeholder="Enter 17-digit VIN..."
                    type="text"
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827' }}
                  />
                </div>
                <button
                  id="lookup-window-sticker-cta"
                  className="primary-button px-8 py-3 whitespace-nowrap"
                  style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', fontWeight: 700 }}
                >
                  Lookup Window Sticker by VIN
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
