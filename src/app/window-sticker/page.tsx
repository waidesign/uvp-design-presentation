"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, ChevronDown, CheckCircle, FileText, Shield, Zap, Tag, Fuel, ArrowRight,
  ArrowDown, CircleCheck, Lock, ClipboardList, Layout, ShoppingCart, Building2,
  DollarSign, Smile, Award, Flag, AlertTriangle, TrendingUp, Wrench, BadgeDollarSign,
  Car, BarChart3, Clock, History, Globe, Target, AlertCircle, X
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Testimonials from '../../components/Testimonials';
import Link from 'next/link';

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







// ─── Component ────────────────────────────────────────────────────────────────
export default function WindowStickerPage() {
  const [vin, setVin] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-28 pb-24 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content Column */}
              <div className="text-left">
                {/* Breadcrumb */}
                <div className="flex items-center justify-start gap-2 mb-8" style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>
                  <Link href="/" className="hover:text-[#0EB075] transition-colors">Home</Link>
                  <span>/</span>
                  <span style={{ color: '#0EB075' }}>Window Sticker</span>
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
                    Lost your window sticker?{' '}
                    <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Look it up by VIN</span> in seconds!
                  </h1>

                  <p className="mb-10 leading-relaxed" style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '18px',
                    color: '#3D4A41',
                    maxWidth: '620px',
                  }}>
                    Enter your VIN to retrieve the original window sticker (Monroney label) and verify factory equipment, options, and specs for any brand, model, or year.
                  </p>
                </motion.div>

                {/* VIN Search Box - Homepage Version */}
                <motion.div
                  id="vin-search-section"
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
                    Paste VIN here <ArrowDown size={14} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-1">
                    <div
                      className="flex-grow flex items-center px-4 py-3 gap-3"
                      style={{ border: '1.5px dashed #94a3b8', borderRadius: '2px' }}
                    >
                      <Search size={18} className="text-slate-400 shrink-0" />
                      <input
                        id="vin-input-window-sticker"
                        className="bg-transparent border-none outline-none w-full font-body text-sm placeholder-slate-300"
                        placeholder="Paste that 17-digit VIN..."
                        type="text"
                        value={vin}
                        onChange={(e) => setVin(e.target.value.toUpperCase())}
                        maxLength={17}
                        style={{ fontSize: '14px', fontFamily: '"Space Mono", monospace' }}
                      />
                    </div>
                    <button
                      id="get-window-sticker-btn"
                      className="primary-button font-body text-sm px-8 py-3 transition-all active:scale-95 whitespace-nowrap"
                      style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        fontFamily: '"Space Mono", monospace'
                      }}
                    >
                      Get Window Sticker
                    </button>
                  </div>
                </motion.div>

                {/* Helper links */}
                <div className="flex items-center justify-between max-w-[694px] mb-10 px-2">
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
                    Where can I find the VIN?
                  </a>
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
                    View sample sticker →
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
                    { icon: <CircleCheck size={16} className="text-[#0EB075]" />, text: 'All Major Brands' },
                    { icon: <Zap size={16} className="text-[#0EB075]" />, text: 'Instant PDF Download' },
                    { icon: <Lock size={16} className="text-[#0EB075]" />, text: '100% Private Lookup' },
                    { icon: <ClipboardList size={16} className="text-[#0EB075]" />, text: '330M+ Records' }
                  ].map((b, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white flex items-center gap-2" style={{ border: '1.5px solid #004B22', borderRadius: '4px' }}>
                      {b.icon} {b.text}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right Graphics Column */}
              <div className="hidden lg:block relative h-[500px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="w-full h-full"
                >
                  {/* Placeholder for Graphics Section */}
                  <div 
                    className="w-full h-full relative"
                    style={{
                      border: '3px dashed #004B22',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(14, 176, 117, 0.03)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      transform: 'rotate(1deg)',
                      boxShadow: '10px 10px 0 0 rgba(0, 75, 34, 0.05)',
                    }}
                  >
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      fontFamily: '"Gochi Hand", cursive',
                      color: '#0EB075',
                      fontSize: '16px',
                      transform: 'rotate(5deg)'
                    }}>
                      [ Graphics Section Placeholder ]
                    </div>
                    
                    <FileText size={80} className="text-[#0EB075]/20 mb-4" />
                    <div style={{ fontFamily: '"Space Mono", monospace', color: '#004B22', fontSize: '14px', opacity: 0.5 }}>
                      Official Monroney Label Visualization
                    </div>
                    
                    {/* Sketchy elements */}
                    <div style={{
                      position: 'absolute',
                      bottom: '40px',
                      left: '40px',
                      width: '60%',
                      height: '2px',
                      backgroundColor: '#004B22',
                      opacity: 0.1
                    }} />
                    <div style={{
                      position: 'absolute',
                      bottom: '50px',
                      left: '40px',
                      width: '40%',
                      height: '2px',
                      backgroundColor: '#004B22',
                      opacity: 0.1
                    }} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ WHAT IS A WINDOW STICKER ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: Explanation */}
              <div>

                <h2
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '16px' }}
                >
                  What exactly is a{' '}
                  <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Window Sticker?</span>
                </h2>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#3D4A41', lineHeight: '1.8', marginBottom: '20px' }}>
                  Also called the <strong>Monroney label</strong>, a window sticker is the federally required document attached to every new vehicle sold in the US. It&apos;s not just a price tag—it&apos;s the factory&apos;s sworn statement about what that car is.
                </p>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#3D4A41', lineHeight: '1.8', marginBottom: '28px' }}>
                  By law, dealers cannot remove it before sale. That means it&apos;s the single most trustworthy source of truth about a vehicle&apos;s original specs, packages, and pricing—direct from the manufacturer.
                </p>

                {/* Key facts */}
                <div className="flex flex-col gap-4">
                  {[
                    { num: '1966', label: 'Year the Monroney Act became law', note: 'Named after Senator Mike Monroney' },
                    { num: '100%', label: 'Factory-sourced data', note: 'Not dealer estimates or guesses' },
                    { num: '17', label: 'Characters in a VIN', note: 'Your key to unlocking the sticker' },
                  ].map((fact) => (
                    <div
                      key={fact.num}
                      className="flex items-start gap-4 p-4"
                      style={{
                        border: '1.5px solid #c8dfc8',
                        borderRadius: '4px',
                        backgroundColor: '#F5FDF9',
                      }}
                    >
                      <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#0EB075', minWidth: '64px' }}>
                        {fact.num}
                      </div>
                      <div>
                        <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#111827', fontWeight: 700, marginBottom: '2px' }}>{fact.label}</div>
                        <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280' }}>{fact.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Sticker anatomy visual */}
              <div className="relative">
                {/* Decorative tilt container */}
                <div
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    boxShadow: '8px 8px 0 0 #004B22',
                    padding: '28px',
                    transform: 'rotate(1deg)',
                  }}
                >
                  {/* Sticker header */}
                  <div
                    className="text-center py-3 mb-5"
                    style={{
                      backgroundColor: '#004B22',
                      borderRadius: '2px',
                      fontFamily: '"Gochi Hand", cursive',
                      color: '#fff',
                      fontSize: '18px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    WINDOW STICKER — WHAT&apos;S INSIDE
                  </div>

                  {/* Anatomy rows */}
                  <div className="flex flex-col gap-3">
                    {[
                      { section: 'Vehicle ID', detail: 'Make, Model, Year, Trim & VIN', color: '#0EB075' },
                      { section: 'MSRP Breakdown', detail: 'Base price + packages + destination charge', color: '#F59E0B' },
                      { section: 'Standard Features', detail: 'Everything included at the factory as standard', color: '#6366F1' },
                      { section: 'Optional Equipment', detail: 'Every add-on package checked at order time', color: '#EC4899' },
                      { section: 'Fuel Economy', detail: 'City / Hwy / Combined MPG + annual cost est.', color: '#14B8A6' },
                      { section: 'Safety Ratings', detail: 'NHTSA crash-test scores & star ratings', color: '#EF4444' },
                      { section: 'Emissions', detail: 'CO₂ output & Green Score from the EPA', color: '#84CC16' },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3"
                        style={{
                          paddingBottom: '10px',
                          borderBottom: i < 6 ? '1px dashed #e5e7eb' : 'none',
                        }}
                      >
                        <div
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: row.color,
                            marginTop: '5px',
                            flexShrink: 0,
                          }}
                        />
                        <div>
                          <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '17px', color: '#111827' }}>{row.section}</div>
                          <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#6B7280', lineHeight: '1.5' }}>{row.detail}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative sticky arrow */}
                <div
                  className="absolute -top-5 -left-5"
                  style={{
                    backgroundColor: '#FFF9C4',
                    border: '1.5px solid #004B22',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    fontFamily: '"Gochi Hand", cursive',
                    color: '#004B22',
                    fontSize: '13px',
                    transform: 'rotate(-4deg)',
                    boxShadow: '2px 2px 0 0 #004B22',
                  }}
                >
                  ← Every section decoded!
                </div>
              </div>
            </div>
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

        {/* ═══════════════ WHY IS GETTING A WINDOW STICKER IMPORTANT ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F5FDF9', borderTop: '1px solid #c8dfc8', borderBottom: '1px solid #c8dfc8' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2
                style={{
                  fontFamily: '"Gochi Hand", cursive',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#111827',
                  marginBottom: '14px',
                }}
              >
                Why is Getting a{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Window Sticker</span>{' '}
                Important?
              </h2>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '15px',
                  color: '#3D4A41',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.8',
                }}
              >
                Before you sign anything, here&apos;s what the window sticker
                protects you from — and what it hands you as leverage.
              </p>
            </div>

            {/* Reasons grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
              {([
                {
                  icon: <BadgeDollarSign size={22} className="text-[#0EB075]" />,
                  title: 'Catch Dealer Markups Instantly',
                  body: 'Dealers sometimes add "market adjustment" fees above MSRP. The window sticker shows the real factory price—so you know exactly when you\'re being overcharged.',
                  tag: 'Buyer Protection',
                },
                {
                  icon: <AlertTriangle size={22} className="text-[#0EB075]" />,
                  title: 'Spot Hidden Trim Swaps',
                  body: 'A seller might advertise a top-trim model but swap badges. The sticker\'s factory equipment list exposes mismatches in seconds.',
                  tag: 'Fraud Prevention',
                },
                {
                  icon: <Wrench size={22} className="text-[#0EB075]" />,
                  title: 'Verify Every Factory Option',
                  body: 'Did it really come with the tow package, panoramic roof, or premium audio? Only factory options appear on the Monroney label.',
                  tag: 'Spec Accuracy',
                },
                {
                  icon: <BarChart3 size={22} className="text-[#0EB075]" />,
                  title: 'Negotiate From Solid Ground',
                  body: 'Knowing the original MSRP gives you a precise baseline to negotiate from—not the inflated lot price the dealer wants you anchored to.',
                  tag: 'Negotiation Edge',
                },
                {
                  icon: <Shield size={22} className="text-[#0EB075]" />,
                  title: 'Confirm Insurance & Warranty',
                  body: 'Insurers tie premiums to factory specs. A sticker confirms original engine size, safety ratings, and equipment for accurate coverage.',
                  tag: 'Coverage Accuracy',
                },
                {
                  icon: <TrendingUp size={22} className="text-[#0EB075]" />,
                  title: 'Protect Your Resale Value',
                  body: 'Having the original window sticker on record signals a well-documented vehicle history. Buyers pay more for cars with provable factory specs.',
                  tag: 'Resale Value',
                },
              ] as { icon: React.ReactNode; title: string; body: string; tag: string }[]).map((reason, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    padding: '24px',
                    boxShadow: '3px 3px 0 0 #004B22',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      backgroundColor: '#F0FBF5',
                      border: '1.5px solid #c8dfc8',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    {reason.icon}
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#F0FBF5',
                      border: '1px solid #c8dfc8',
                      borderRadius: '2px',
                      padding: '1px 8px',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#004B22',
                      letterSpacing: '0.08em',
                      marginBottom: '10px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {reason.tag}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Gochi Hand", cursive',
                      fontSize: '19px',
                      color: '#111827',
                      marginBottom: '8px',
                    }}
                  >
                    {reason.title}
                  </div>
                  <p
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '12px',
                      color: '#3D4A41',
                      lineHeight: '1.8',
                      margin: 0,
                    }}
                  >
                    {reason.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA strip */}
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
                  Ready to pull yours?
                </div>
                <div
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '13px',
                    color: '#3D4A41',
                  }}
                >
                  All you need is the 17-digit VIN from the dashboard or door jamb.
                </div>
              </div>
              <a
                href="#vin-search-section"
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
                Get Window Sticker
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════ WINDOW STICKER BREAKDOWN ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-14">
              <h2
                style={{
                  fontFamily: '"Gochi Hand", cursive',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  color: '#111827',
                  marginBottom: '14px',
                }}
              >
                Breaking Down{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>
                  Every Section
                </span>{' '}
                of a Window Sticker
              </h2>
              <p
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '14px',
                  color: '#3D4A41',
                  maxWidth: '580px',
                  margin: '0 auto',
                  lineHeight: '1.8',
                }}
              >
                A real window sticker is divided into distinct zones. Here&apos;s exactly what each one contains and what you should pay attention to.
              </p>
            </div>

            {/* Two-column: Video + List */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* LEFT — Video Placeholder */}
              <div style={{ position: 'sticky', top: 'max(88px, calc(50vh - 220px))' }}>
                <div
                  style={{
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    boxShadow: '6px 6px 0 0 #004B22',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                  }}
                >
                  {/* Video area */}
                  <div
                    style={{
                      position: 'relative',
                      backgroundColor: '#111827',
                      aspectRatio: '16/9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: '16px',
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Faint grid overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'linear-gradient(rgba(14,176,117,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,176,117,0.05) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                      }}
                    />
                    {/* Play button */}
                    <div
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        backgroundColor: '#0EB075',
                        border: '3px solid #fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        zIndex: 1,
                        boxShadow: '0 4px 24px rgba(14,176,117,0.4)',
                      }}
                    >
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderTop: '12px solid transparent',
                          borderBottom: '12px solid transparent',
                          borderLeft: '20px solid #fff',
                          marginLeft: '4px',
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontFamily: '"Gochi Hand", cursive',
                        fontSize: '18px',
                        color: '#fff',
                        position: 'relative',
                        zIndex: 1,
                        textAlign: 'center',
                        lineHeight: '1.4',
                      }}
                    >
                      Window Sticker Explainer Video
                    </div>
                    <div
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '11px',
                        color: 'rgba(255,255,255,0.5)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      Coming soon — video placeholder
                    </div>
                  </div>

                  {/* Caption bar */}
                  <div
                    style={{
                      padding: '16px 20px',
                      borderTop: '2px solid #004B22',
                      backgroundColor: '#F5FDF9',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <FileText size={16} style={{ color: '#0EB075', flexShrink: 0 }} />
                    <p
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '12px',
                        color: '#3D4A41',
                        lineHeight: '1.6',
                        margin: 0,
                      }}
                    >
                      Watch a full walkthrough of every section on a real window sticker.
                    </p>
                  </div>
                </div>

                {/* Pro tip note */}
                <div
                  style={{
                    marginTop: '16px',
                    backgroundColor: '#fff',
                    border: '1.5px dashed #004B22',
                    borderRadius: '4px',
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                  }}
                >
                  <Lock size={15} style={{ color: '#0EB075', flexShrink: 0, marginTop: '2px' }} />
                  <p
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '11px',
                      color: '#3D4A41',
                      lineHeight: '1.7',
                      margin: 0,
                    }}
                  >
                    <strong>Remember:</strong> Dealer-installed options do <em>not</em> appear on the Monroney label. Only factory-ordered equipment is recorded.
                  </p>
                </div>
              </div>

              {/* RIGHT — Numbered section list */}
              <div className="flex flex-col">
                {[
                  { zone: '01', color: '#0EB075', title: 'Vehicle Description', desc: 'Year, make, model, trim, body style, and the 17-digit VIN — tying the document to one specific unit.' },
                  { zone: '02', color: '#6366F1', title: "Manufacturer's Suggested Retail Price", desc: 'Factory-set base price plus each option, listed line-by-line. The number all negotiations should start from.' },
                  { zone: '03', color: '#F59E0B', title: 'Standard Equipment', desc: "Every feature built into that trim's standard config at no extra charge — factory only, not dealer add-ons." },
                  { zone: '04', color: '#EC4899', title: 'Optional Equipment & Packages', desc: 'Every add-on checked at the time of order — tow packages, premium audio, panoramic roof, and more.' },
                  { zone: '05', color: '#14B8A6', title: 'Fuel Economy', desc: 'EPA city/hwy/combined MPG estimates plus annual fuel cost. Official figures before the car left the factory.' },
                  { zone: '06', color: '#EF4444', title: 'Safety Ratings', desc: 'NHTSA frontal, side, and rollover crash-test star ratings. Assigned pre-sale and used for insurance quotes.' },
                  { zone: '07', color: '#8B5CF6', title: 'Exterior & Interior Colors', desc: 'Official factory paint and upholstery codes. A mismatch here is an instant repaint fraud signal.' },
                  { zone: '08', color: '#0EA5E9', title: 'Warranty Information', desc: 'Bumper-to-bumper, powertrain, corrosion, and roadside coverage terms — all in one place.' },
                  { zone: '09', color: '#84CC16', title: 'Greenhouse Gas & Emissions', desc: "EPA Green Score and CO₂ output compared to other vehicles in the same class." },
                  { zone: '10', color: '#F97316', title: 'Destination & Delivery Charge', desc: "Mandatory transport fee from factory to dealer. Non-negotiable — every vehicle has it." },
                  { zone: '11', color: '#64748B', title: 'Mechanical Features', desc: 'Engine code, displacement, horsepower, torque, transmission type, and drivetrain — as originally built.' },
                  { zone: '12', color: '#004B22', title: 'Total Vehicle Price', desc: 'Base price + all options + destination. The definitive factory sticker total before any taxes or fees.' },
                ].map((zone, i, arr) => (
                  <div
                    key={zone.zone}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                      padding: '18px 0',
                      borderBottom: i < arr.length - 1 ? '1px solid #e5e7eb' : 'none',
                    }}
                  >
                    {/* Color bar + zone number */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '4px',
                          backgroundColor: zone.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: '"Gochi Hand", cursive',
                          fontSize: '14px',
                          color: '#fff',
                          fontWeight: 700,
                        }}
                      >
                        {zone.zone}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          style={{
                            width: '2px',
                            flexGrow: 1,
                            minHeight: '24px',
                            backgroundColor: '#e5e7eb',
                            borderRadius: '1px',
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ paddingTop: '4px', paddingBottom: i < arr.length - 1 ? '18px' : 0 }}>
                      <div
                        style={{
                          fontFamily: '"Gochi Hand", cursive',
                          fontSize: '18px',
                          color: '#111827',
                          marginBottom: '6px',
                        }}
                      >
                        {zone.title}
                      </div>
                      <p
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '12px',
                          color: '#3D4A41',
                          lineHeight: '1.8',
                          margin: 0,
                        }}
                      >
                        {zone.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ═══════════════ TRUE STORY ═══════════════ */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-6xl mx-auto px-6 lg:px-8">

            {/* Section eyebrow */}
            <div className="text-center mb-12">
              <div
                style={{
                  display: 'inline-block',
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
                How Liam Saved $3,000 With a{' '}
                <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>
                  Window Sticker
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
                Liam, 24, was three minutes from signing on a used 2018 Chevrolet Equinox. Then his friend asked one question: &ldquo;Did you check the window sticker?&rdquo;
              </p>
            </div>

            {/* Pull quote */}
            <div
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
                The moment I showed them the factory sticker, everything changed. The &lsquo;premium package&rsquo; talk stopped. They were suddenly willing to negotiate.
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
                — LIAM, 24 · CHICAGO, IL
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
                    label: 'The Dealer\'s Pitch',
                    text: '"This is fully loaded — original sticker was $31,000. You\'re getting a steal at $19,500."',
                    accent: '#EF4444',
                    bg: '#FEF2F2',
                  },
                  {
                    icon: <FileText size={16} style={{ color: '#F59E0B', flexShrink: 0 }} />,
                    label: 'Liam Pulls the Sticker',
                    text: 'His friend suggested checking the VIN. Two minutes and the original Monroney label was on his phone.',
                    accent: '#F59E0B',
                    bg: '#FFFBEB',
                  },
                  {
                    icon: <Shield size={16} style={{ color: '#0EB075', flexShrink: 0 }} />,
                    label: 'What the Sticker Showed',
                    text: 'MSRP was $29,345 — not $31,000. The "premium cloth seats" were standard. Several optional packages were missing entirely.',
                    accent: '#0EB075',
                    bg: '#F0FBF5',
                  },
                  {
                    icon: <BadgeDollarSign size={16} style={{ color: '#0EB075', flexShrink: 0 }} />,
                    label: 'The Outcome',
                    text: 'Armed with the factory data, Liam walked back in. Final price: $16,500. He saved $3,000 on the spot.',
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
                      padding: '10px 20px',
                      backgroundColor: '#004B22',
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Price Breakdown
                  </div>
                  {[
                    { label: "Dealer's Claimed MSRP", val: '$31,000', strike: true, green: false },
                    { label: 'Factory MSRP (Window Sticker)', val: '$29,345', strike: false, green: true },
                    { label: "Dealer's Asking Price", val: '$19,500', strike: false, green: false },
                    { label: 'Final Negotiated Price', val: '$16,500', strike: false, green: true },
                  ].map((row, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '14px 20px',
                        borderBottom: i < 3 ? '1px solid #e5e7eb' : 'none',
                        backgroundColor: row.green ? '#F5FDF9' : '#fff',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '12px',
                          color: '#3D4A41',
                        }}
                      >
                        {row.label}
                      </span>
                      <span
                        style={{
                          fontFamily: '"Gochi Hand", cursive',
                          fontSize: '20px',
                          color: row.green ? '#0EB075' : row.strike ? '#9CA3AF' : '#111827',
                          textDecoration: row.strike ? 'line-through' : 'none',
                        }}
                      >
                        {row.val}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 3 outcome stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { val: '$3,000', label: 'Saved' },
                    { val: '2 min', label: 'Lookup time' },
                    { val: '0', label: "Buyer's remorse" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      style={{
                        border: '2px solid #004B22',
                        borderRadius: '4px',
                        boxShadow: '3px 3px 0 0 #004B22',
                        padding: '16px 12px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: '"Gochi Hand", cursive',
                          fontSize: '24px',
                          color: '#0EB075',
                          marginBottom: '4px',
                        }}
                      >
                        {stat.val}
                      </div>
                      <div
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '10px',
                          color: '#3D4A41',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#vin-search-section"
                  className="primary-button"
                  style={{
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '14px',
                    fontWeight: 700,
                    padding: '14px 24px',
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '4px',
                  }}
                >
                  Pull Your Window Sticker Now
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════ HOW TO GET A WINDOW STICKER ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', marginBottom: '16px' }}
              >
                How to get a <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Window Sticker?</span>
              </h2>
              <p
                style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#3D4A41', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}
              >
                Getting a window sticker is pretty simple once you have the VIN. The whole process feels straightforward because you&apos;re basically pulling information that already exists in the vehicle&apos;s original record.
              </p>
            </div>

            {/* Main 4 Steps - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              {[
                { 
                  step: 1, 
                  title: 'Gimme the VIN', 
                  text: 'Pop in those 17 digits. It&apos;s like the car&apos;s fingerprint.',
                  link: { label: 'Where can I find the VIN?', href: '#' }
                },
                { 
                  step: 2, 
                  title: 'We Start Digging', 
                  text: 'Our bots scour official manufacturer databases instantly around the globe.'
                },
                { 
                  step: 3, 
                  title: 'The Big Reveal', 
                  text: 'Pay and unlock your original factory window sticker report.',
                  badge: 'READY IN SECONDS'
                },
                { 
                  step: 4, 
                  title: 'Buy with Swagger', 
                  text: 'Know exactly what you&apos;re getting. No factory secrets left.',
                  link: { label: 'View sample sticker', href: '#' }
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
                      className="inline-flex items-center gap-2"
                      style={{
                        border: '1.5px solid #0EB075',
                        borderRadius: '999px',
                        padding: '4px 14px',
                        width: 'fit-content',
                        color: '#0EB075',
                        marginLeft: '32px'
                      }}
                    >
                      <Clock size={13} />
                      <span style={{ letterSpacing: '0.06em', fontWeight: 700, fontFamily: '"Space Mono", monospace', fontSize: '11px' }}>
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button moved up */}
            <div className="text-center mb-20">
              <a
                href="#vin-search-section"
                className="primary-button inline-block"
                style={{
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '16px',
                  fontWeight: 700,
                  padding: '16px 40px',
                  textDecoration: 'none',
                }}
              >
                Lookup Window Sticker by VIN
              </a>
            </div>

            {/* Alternative Methods Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-grow bg-[#004B22] opacity-10"></div>
              <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#004B22', opacity: 0.6 }}>Other ways to find it</h3>
              <div className="h-px flex-grow bg-[#004B22] opacity-10"></div>
            </div>

            {/* Alternative Ways - Two Boxes */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <div 
                style={{ 
                  backgroundColor: '#F5FDF9', 
                  border: '2px solid #004B22', 
                  borderRadius: '4px', 
                  padding: '24px',
                  boxShadow: '4px 4px 0 0 #004B22'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ backgroundColor: '#0EB075', color: '#fff', borderRadius: '4px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building2 size={18} />
                  </div>
                  <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827' }}>Contact a Dealership</h4>
                </div>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7' }}>
                  If you prefer talking to a real person, you can reach out to a dealership that sells the same brand. Some dealerships can generate a factory window sticker for you, though results vary by brand and dealer policy.
                </p>
              </div>

              <div 
                style={{ 
                  backgroundColor: '#F9FEFB', 
                  border: '2px solid #004B22', 
                  borderRadius: '4px', 
                  padding: '24px',
                  boxShadow: '4px 4px 0 0 #004B22'
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ backgroundColor: '#0EB075', color: '#fff', borderRadius: '4px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ClipboardList size={18} />
                  </div>
                  <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827' }}>Check Vehicle Documentation</h4>
                </div>
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41', lineHeight: '1.7' }}>
                  Sometimes the original window sticker is already tucked away in the glove box, the owner&apos;s manual folder, or the service records. It&apos;s always worth checking the physical paperwork before trying anything else.
                </p>
              </div>
            </div>


          </div>
        </section>

        {/* ═══════════════ CLASSIC BUILD SHEET ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div 
              className="relative overflow-hidden"
              style={{ 
                backgroundColor: '#fff', 
                border: '2px solid #004B22', 
                borderRadius: '4px',
                boxShadow: '8px 8px 0 0 #004B22',
                padding: '0'
              }}
            >
              {/* Decorative Corner Label */}
              <div 
                className="absolute top-0 right-0 px-6 py-2"
                style={{ 
                  backgroundColor: '#004B22', 
                  color: '#fff', 
                  fontFamily: '"Space Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  transform: 'rotate(0deg)',
                  borderBottomLeftRadius: '4px'
                }}
              >
                CLASSIC VIN SUPPORT
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: Text Content */}
                <div className="p-8 lg:p-16">
                  <div className="flex items-center gap-3 mb-6">
                    <History size={24} color="#0EB075" />
                    <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#0EB075', fontWeight: 700, letterSpacing: '0.1em' }}>
                      VINTAGE VEHICLE DATA
                    </span>
                  </div>

                  <h2 
                    style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', marginBottom: '24px', lineHeight: '1.1' }}
                  >
                    Looking for the <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Classic Build Sheet</span> by VIN?
                  </h2>

                  <p 
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#3D4A41', marginBottom: '32px', lineHeight: '1.7' }}
                  >
                    Our database includes the original build information of classic cars (pre-1981) with non-standard VINs or serial numbers, ranging from <span style={{ color: '#0EB075', fontWeight: 700 }}>5 – 13 digits.</span>
                  </p>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="mt-1" style={{ width: '8px', height: '8px', backgroundColor: '#0EB075', borderRadius: '50%' }} />
                      <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#4B5563' }}>
                        Identify original factory colors, engine codes, and transmission types.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1" style={{ width: '8px', height: '8px', backgroundColor: '#0EB075', borderRadius: '50%' }} />
                      <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#4B5563' }}>
                        Perfect for restorations needing authentic factory specifications.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1" style={{ width: '8px', height: '8px', backgroundColor: '#0EB075', borderRadius: '50%' }} />
                      <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#4B5563' }}>
                        Supports Ford, GM, Mopar, and European classics.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#vin-search-section"
                      className="primary-button"
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '14px',
                        fontWeight: 700,
                        padding: '16px 32px',
                        textDecoration: 'none',
                      }}
                    >
                      Get a Classic Build Sheet
                    </a>
                    <a
                      href="#"
                      className="secondary-button"
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '14px',
                        fontWeight: 700,
                        padding: '16px 32px',
                        textDecoration: 'none',
                        border: '1.5px solid #004B22',
                        backgroundColor: '#fff',
                        color: '#004B22',
                        borderRadius: '2px'
                      }}
                    >
                      View Sample
                    </a>
                  </div>
                </div>

                {/* Right: Mockup Illustration */}
                <div 
                  className="bg-[#F5FDF9] p-8 lg:p-16 flex items-center justify-center relative overflow-hidden"
                  style={{ borderLeft: '2px solid #004B22' }}
                >
                  {/* Styled Vintage Card Mockup */}
                  <div 
                    style={{ 
                      backgroundColor: '#fff', 
                      border: '1.5px solid #D1D5DB', 
                      borderRadius: '2px',
                      padding: '24px',
                      width: '100%',
                      maxWidth: '400px',
                      boxShadow: '10px 10px 30px rgba(0,0,0,0.05)',
                      transform: 'rotate(-1deg)',
                      position: 'relative'
                    }}
                  >
                    <div className="flex justify-between items-center mb-6 border-bottom pb-4" style={{ borderBottom: '1px solid #F3F4F6' }}>
                      <div style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px', color: '#111827' }}>1967 GTO Build Info</div>
                      <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#9CA3AF' }}>SERIAL: 242177</div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { k: 'ENGINE', v: '400 cu in (6.6 L) V8' },
                        { k: 'EXTERIOR', v: 'Tyrol Blue (Code D)' },
                        { k: 'INTERIOR', v: 'Parchment (Code 224)' },
                        { k: 'TRANS', v: '4-Speed Manual' },
                        { k: 'PACKAGES', v: 'Rally II Wheels, Redlines' },
                      ].map((spec, i) => (
                        <div key={i} className="flex justify-between items-end gap-4">
                          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#9CA3AF', whiteSpace: 'nowrap' }}>{spec.k}</span>
                          <div style={{ flexGrow: 1, borderBottom: '1px dotted #E5E7EB', marginBottom: '3px' }} />
                          <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '14px', color: '#374151', textAlign: 'right' }}>{spec.v}</span>
                        </div>
                      ))}
                    </div>

                    <div 
                      className="mt-8 pt-4"
                      style={{ borderTop: '2px solid #0EB075', textAlign: 'center' }}
                    >
                      <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '9px', color: '#0EB075', letterSpacing: '0.2em' }}>AUTHENTIC FACTORY DATA</div>
                    </div>

                    {/* Decorative Stamp */}
                    <div 
                      className="absolute -bottom-4 -right-4 w-20 h-20 flex items-center justify-center"
                      style={{ 
                        border: '2px double #ef4444', 
                        borderRadius: '50%', 
                        color: '#ef4444', 
                        transform: 'rotate(-15deg)',
                        fontFamily: '"Gochi Hand", cursive',
                        fontSize: '12px',
                        textAlign: 'center',
                        backgroundColor: 'rgba(255,255,255,0.8)',
                        padding: '4px'
                      }}
                    >
                      DECODED BY EXPERTS
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════ WHY CHOOSE OUR SERVICE ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Side: Large Reason List */}
              <div className="lg:col-span-7">
                <div 
                  className="inline-block px-4 py-1 mb-6"
                  style={{ 
                    backgroundColor: '#F5FDF9', 
                    border: '1.5px solid #004B22', 
                    borderRadius: '4px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '12px',
                    color: '#0EB075',
                    fontWeight: 700,
                    letterSpacing: '0.1em'
                  }}
                >
                  THE ADVANTAGE
                </div>

                <h2 
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', marginBottom: '32px', lineHeight: '1.1' }}
                >
                  Why choose our <span style={{ color: '#0EB075' }}>Window Sticker</span> lookup?
                </h2>

                <div className="space-y-10">
                  {[
                    { 
                      icon: <Zap size={24} color="#0EB075" />, 
                      title: 'Fast Results Without the Stress', 
                      desc: 'Enter the VIN and the information appears in a short moment. No waiting around and no complicated process to get through.' 
                    },
                    { 
                      icon: <Target size={24} color="#0EB075" />, 
                      title: '100% Accurate Factory Information', 
                      desc: 'The details come from the original record, so you see the real MSRP, trim, equipment and the features the vehicle had when it was new.' 
                    },
                    { 
                      icon: <Smile size={24} color="#0EB075" />, 
                      title: 'Simple for Anyone to Use', 
                      desc: 'The tool is straightforward. You find the VIN, enter it and our system handles the rest without making you guess what to do next.' 
                    },
                    { 
                      icon: <Globe size={24} color="#0EB075" />, 
                      title: 'Trusted and Updated Data Source', 
                      desc: 'Get up-to-date vehicle data from DMV, auctions, police, insurance, and proprietary online sales sources.' 
                    },
                    { 
                      icon: <Car size={24} color="#0EB075" />, 
                      title: 'Covers Many Vehicle Brands', 
                      desc: 'The lookup works for many different makes and models, including common brands and some you do not see very often.' 
                    },
                    { 
                      icon: <Search size={24} color="#0EB075" />, 
                      title: 'A Quick Way to Verify Features', 
                      desc: 'You can compare what the vehicle has now with what it originally came with. It clears up any confusion about changes over time.' 
                    },
                  ].map((feat, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div 
                        className="shrink-0 mt-1 flex items-center justify-center"
                        style={{ 
                          width: '48px', 
                          height: '48px', 
                          backgroundColor: '#F5FDF9', 
                          border: '2px solid #004B22', 
                          borderRadius: '8px',
                          boxShadow: '3px 3px 0 0 #004B22'
                        }}
                      >
                        {feat.icon}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#111827', marginBottom: '8px' }}>{feat.title}</h3>
                        <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#4B5563', lineHeight: '1.6' }}>{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Highlight Box */}
              <div className="lg:col-span-5 lg:sticky lg:top-24">
                <div 
                  style={{ 
                    backgroundColor: '#F5FDF9', 
                    border: '2px solid #004B22', 
                    borderRadius: '2px', 
                    padding: '40px',
                    boxShadow: '10px 10px 0 0 #004B22'
                  }}
                >
                  <div 
                    className="w-12 h-12 mb-8 flex items-center justify-center"
                    style={{ backgroundColor: '#0EB075', borderRadius: '50%', color: '#fff' }}
                  >
                    <Shield size={24} />
                  </div>
                  
                  <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '32px', color: '#111827', marginBottom: '20px' }}>
                    Stop Guessing. <br />
                    <span style={{ color: '#0EB075' }}>Start Knowing.</span>
                  </h4>

                  <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#3D4A41', marginBottom: '32px', lineHeight: '1.8' }}>
                    A window sticker lookup gives you clear details from the moment the vehicle was built. Our tool is designed to make that whole process feel simple. You get information you can trust, without any stress.
                  </p>

                  <div className="pt-8 border-t border-[#004B22] border-opacity-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div style={{ width: '10px', height: '10px', backgroundColor: '#0EB075', borderRadius: '50%' }} />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', fontWeight: 700 }}>45+ State Databases Scanned</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                      <div style={{ width: '10px', height: '10px', backgroundColor: '#0EB075', borderRadius: '50%' }} />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', fontWeight: 700 }}>Real-Time MSRP Validation</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div style={{ width: '10px', height: '10px', backgroundColor: '#0EB075', borderRadius: '50%' }} />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#111827', fontWeight: 700 }}>Instant PDF Generation</span>
                    </div>
                  </div>

                  <a
                    href="#vin-search-section"
                    className="primary-button block text-center mt-12 py-5"
                    style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', fontWeight: 700 }}
                  >
                    GET THE FULL TRUTH NOW
                  </a>
                </div>
                
                {/* Hand-drawn style note */}
                <div 
                  className="mt-8 text-center"
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#0EB075' }}
                >
                  &quot;The most detailed report I&apos;ve seen for under $10.&quot;
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════ CARFAX COMPARISON ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#111827', marginBottom: '24px', lineHeight: '1.2' }}
              >
                Does Carfax Provide <span style={{ color: '#ef4444' }}>Original</span> Window Stickers?
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#475569', lineHeight: '1.7' }}>
                It&apos;s a common question with a surprising answer. While Carfax is a giant in history reports, they have a different focus when it comes to factory documents.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Carfax Box */}
              <div 
                style={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #E2E8F0', 
                  borderRadius: '4px', 
                  padding: '40px',
                  position: 'relative'
                }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                    <AlertCircle size={20} />
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#1e293b' }}>The Carfax Reality</h3>
                </div>
                
                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#64748b', lineHeight: '1.8', marginBottom: '24px' }}>
                  Many people search for a **Carfax original window sticker**, but Carfax does not supply the factory window sticker for any vehicle. Their reports are built for a different purpose:
                </p>

                <ul className="space-y-4">
                  {[
                    'Ownership history & title records',
                    'Accident & damage reports',
                    'Odometer readings & service history',
                    'Recall information'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3" style={{ opacity: 0.6 }}>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#1e293b' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Box */}
              <div 
                style={{ 
                  backgroundColor: '#F5FDF9', 
                  border: '2px solid #004B22', 
                  borderRadius: '4px', 
                  padding: '40px',
                  boxShadow: '8px 8px 0 0 #004B22',
                  position: 'relative'
                }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-[#0EB075] rounded-full flex items-center justify-center text-white">
                    <CheckCircle size={20} />
                  </div>
                  <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#111827' }}>The Dedicated Solution</h3>
                </div>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#3D4A41', lineHeight: '1.8', marginBottom: '24px' }}>
                  If you want to see the true sticker price and exact configuration, you need a dedicated **window sticker lookup tool** that pulls directly from manufacturer records:
                </p>

                <ul className="space-y-4">
                  {[
                    'Original MSRP & Package pricing',
                    'Factory-installed options & features',
                    'Fuel economy & Safety ratings',
                    'Engine & Transmission specifications'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#0EB075] rounded-full" />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#111827', fontWeight: 600 }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#vin-search-section" 
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '32px', 
                    color: '#0EB075', 
                    fontFamily: '"Space Mono", monospace', 
                    fontSize: '13px', 
                    fontWeight: 700,
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }}
                >
                  GET YOUR ACCURATE STICKER →
                </a>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#475569', maxWidth: '800px', marginInline: 'auto' }}>
                Our service bridges the gap that standard history reports leave behind, giving you the accurate factory configuration instead of just a summary or approximation.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════ INTERACTIVE VISUAL COMPARISON ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Interactive Slider */}
              <div className="relative">
                <div 
                  className="relative aspect-[4/5] overflow-hidden select-none cursor-ew-resize"
                  style={{ 
                    border: '3px solid #004B22', 
                    borderRadius: '8px',
                    boxShadow: '8px 8px 0 0 #004B22'
                  }}
                  onMouseMove={(e) => {
                    if (isDragging) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = ((e.clientX - rect.left) / rect.width) * 100;
                      setSliderPos(Math.max(0, Math.min(100, x)));
                    }
                  }}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                >
                  {/* Premium Image (Base) */}
                  <img 
                    src="/Users/a/.gemini/antigravity/brain/a340bc73-f2f1-4db5-ba53-376be91ea2a4/premium_window_sticker_sample_1777628249594.png"
                    alt="Premium Window Sticker"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Generic Image (Overlay) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPos}%`, borderRight: '4px solid #fff' }}
                  >
                    <img 
                      src="/Users/a/.gemini/antigravity/brain/a340bc73-f2f1-4db5-ba53-376be91ea2a4/generic_vin_report_sample_1777628232996.png"
                      alt="Generic VIN Report"
                      className="absolute inset-0 w-auto h-full max-w-none object-cover"
                      style={{ width: 'calc(100% * 100 / ' + sliderPos + ')' }}
                    />
                  </div>

                  {/* Slider Handle */}
                  <div 
                    className="absolute top-0 bottom-0 flex items-center justify-center"
                    style={{ left: `calc(${sliderPos}% - 20px)`, pointerEvents: 'none' }}
                  >
                    <div 
                      className="w-10 h-10 bg-white border-2 border-[#004B22] rounded-full flex items-center justify-center shadow-xl"
                    >
                      <div className="flex gap-1">
                        <div className="w-1 h-4 bg-[#0EB075] rounded-full" />
                        <div className="w-1 h-4 bg-[#0EB075] rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 text-white text-[10px] font-bold rounded uppercase tracking-widest backdrop-blur-sm">
                    Generic Provider
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-[#0EB075]/80 text-white text-[10px] font-bold rounded uppercase tracking-widest backdrop-blur-sm">
                    UsedVehiclePro
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#4B5563' }}>
                    ← Drag slider to compare details →
                  </p>
                </div>
              </div>

              {/* Right: Feature Comparison */}
              <div>
                <div 
                  className="inline-block px-4 py-1 mb-6"
                  style={{ 
                    backgroundColor: '#F5FDF9', 
                    border: '1.5px solid #004B22', 
                    borderRadius: '4px',
                    fontFamily: '"Space Mono", monospace',
                    fontSize: '12px',
                    color: '#0EB075',
                    fontWeight: 700
                  }}
                >
                  VISUAL PROOF
                </div>

                <h2 
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#111827', marginBottom: '24px', lineHeight: '1.1' }}
                >
                  See the difference in <span style={{ color: '#0EB075' }}>every pixel.</span>
                </h2>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#4B5563', marginBottom: '32px', lineHeight: '1.8' }}>
                  Don&apos;t settle for blurry generic reports. We provide high-resolution, manufacturer-original window stickers that include every single option, package, and safety rating your car left the factory with.
                </p>

                <div className="space-y-6">
                  {[
                    { t: 'Authentic Layout', d: 'Identical to the sticker originally on the car window.' },
                    { t: 'Complete Transparency', d: 'Full MSRP breakdown including destination charges.' },
                    { t: 'Technical Accuracy', d: 'Verified engine codes, gear ratios, and safety stars.' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 border-2 border-[#0EB075] rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#0EB075] rounded-full" />
                      </div>
                      <div>
                        <h4 style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#111827', fontWeight: 700 }}>{item.t}</h4>
                        <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#6B7280' }}>{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <a
                    href="#vin-search-section"
                    className="primary-button inline-block"
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '16px',
                      fontWeight: 700,
                      padding: '16px 40px',
                      textDecoration: 'none',
                    }}
                  >
                    Generate Your Sticker
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══════════════ DETAILED COMPARISON TABLE ═══════════════ */}
        <section className="pb-24 pt-0" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <h3 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '32px', color: '#111827', marginBottom: '12px' }}
              >
                The Breakdown: <span style={{ color: '#0EB075' }}>Why Accuracy Matters</span>
              </h3>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#6B7280' }}>
                We don&apos;t just provide a report; we provide the official factory truth. Compare the data points below.
              </p>
            </div>

            <div 
              className="overflow-x-auto"
              style={{ 
                border: '2px solid #004B22', 
                borderRadius: '4px',
                boxShadow: '8px 8px 0 0 #004B22'
              }}
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ borderBottom: '2px solid #004B22', backgroundColor: '#F5FDF9' }}>
                    <th className="p-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#111827' }}>Feature Comparison</th>
                    <th className="p-6 text-center" style={{ backgroundColor: '#fff', borderLeft: '2px solid #004B22', borderRight: '2px solid #004B22' }}>
                      <div className="flex flex-col items-center">
                        <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#0EB075' }}>UsedVehiclePro</span>
                        <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', color: '#0EB075', fontWeight: 700 }}>VERIFIED DATA</span>
                      </div>
                    </th>
                    <th className="p-6 text-center" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#9CA3AF' }}>Standard Providers</th>
                  </tr>
                </thead>
                <tbody style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px' }}>
                  {[
                    { f: 'Manufacturer-Direct Factory Data', us: true, them: false },
                    { f: 'Classic VIN Support (5-13 Digits)', us: true, them: false },
                    { f: 'Full Original MSRP & Destination Fees', us: true, them: 'Estimate Only' },
                    { f: 'Original Factory Colors (Internal/External)', us: true, them: true },
                    { f: 'Complete Optional Equipment List', us: true, them: 'Summary' },
                    { f: 'Standard Features & Safety Ratings', us: true, them: true },
                    { f: 'Official EPA Fuel Economy Ratings', us: true, them: 'Generic' },
                    { f: 'Instant PDF Generation (0s Waiting)', us: true, them: 'Up to 24h' },
                    { f: 'High-Res Authentic Monroney Layout', us: true, them: 'Text Only' },
                  ].map((row, i) => (
                    <tr 
                      key={i} 
                      className="transition-colors hover:bg-slate-50"
                      style={{ borderBottom: i === 8 ? 'none' : '1px solid #E5E7EB' }}
                    >
                      <td className="p-6 font-medium text-[#111827]">{row.f}</td>
                      <td className="p-6 text-center" style={{ borderLeft: '2px solid #004B22', borderRight: '2px solid #004B22', backgroundColor: '#F9FEFB' }}>
                        {row.us === true ? <CheckCircle className="mx-auto" color="#0EB075" size={20} /> : <span style={{ color: '#0EB075' }}>{row.us}</span>}
                      </td>
                      <td className="p-6 text-center text-[#6B7280]">
                        {row.them === true ? <CheckCircle className="mx-auto" color="#9CA3AF" size={20} /> : row.them === false ? <X className="mx-auto" color="#EF4444" size={20} /> : row.them}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

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

        {/* ═══════════════ DEALERSHIP SOLUTIONS ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#111827', marginBottom: '24px', lineHeight: '1.1' }}
              >
                Customized & Branded Solutions <span style={{ color: '#0EB075' }}>for Dealerships</span>
              </h2>
              <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#4B5563', lineHeight: '1.7' }}>
                Make your inventory stand out and build instant trust with shoppers. Our professional-grade, branded window stickers integrate seamlessly with your dealership&apos;s identity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Branded Card */}
              <div 
                className="group relative"
                style={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #004B22', 
                  borderRadius: '4px',
                  boxShadow: '8px 8px 0 0 #004B22',
                  padding: '32px'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F5FDF9] border-2 border-[#004B22] rounded flex items-center justify-center text-[#0EB075]">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px', color: '#111827' }}>Branded Identity</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#0EB075', fontWeight: 700 }}>TRUST THROUGH CONSISTENCY</p>
                  </div>
                </div>

                <div className="relative aspect-video mb-8 overflow-hidden border border-slate-100 rounded">
                  <img 
                    src="/Users/a/.gemini/antigravity/brain/a340bc73-f2f1-4db5-ba53-376be91ea2a4/branded_toyota_sticker_sample_1777629686552.png" 
                    alt="Branded Window Sticker"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 bg-white text-[#111827] font-bold text-sm rounded shadow-lg" style={{ fontFamily: '"Space Mono", monospace' }}>
                      PREVIEW LAYOUT
                    </button>
                  </div>
                </div>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#4B5563', lineHeight: '1.8', marginBottom: '24px' }}>
                  Our branded window stickers blend our unique design style with your dealership&apos;s brand image, including your colors, logos, and mission. This professional look helps you gain customers&apos; trust and gives your inventory a unique identity.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Dealer Logo Integration', 'Custom Color Schemes', 'Dealer Contact Info', 'QR Code to Inventory'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0EB075]" />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#111827' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Customized Card */}
              <div 
                className="group relative"
                style={{ 
                  backgroundColor: '#fff', 
                  border: '2px solid #004B22', 
                  borderRadius: '4px',
                  boxShadow: '8px 8px 0 0 #004B22',
                  padding: '32px'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#F5FDF9] border-2 border-[#004B22] rounded flex items-center justify-center text-[#0EB075]">
                    <Layout size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '26px', color: '#111827' }}>Marketing Focused</h3>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', color: '#0EB075', fontWeight: 700 }}>DESIGNED TO CONVERT</p>
                  </div>
                </div>

                <div className="relative aspect-video mb-8 overflow-hidden border border-slate-100 rounded">
                  <img 
                    src="/Users/a/.gemini/antigravity/brain/a340bc73-f2f1-4db5-ba53-376be91ea2a4/custom_luxury_sticker_sample_1777629722821.png" 
                    alt="Customized Window Sticker"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 bg-white text-[#111827] font-bold text-sm rounded shadow-lg" style={{ fontFamily: '"Space Mono", monospace' }}>
                      VIEW CUSTOM SECTIONS
                    </button>
                  </div>
                </div>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#4B5563', lineHeight: '1.8', marginBottom: '24px' }}>
                  Our customized window stickers show key details about the vehicle, such as special features, financing options, or promotions. Custom stickers show your dealership&apos;s style and brand, helping it feel more genuine and attractive.
                </p>

                <ul className="space-y-3 mb-8">
                  {['Custom Promo Banners', 'Financing Highlights', 'Warranty Details', 'Special Feature Callouts'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-[#0EB075]" />
                      <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#111827' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-20 text-center flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                className="primary-button w-full md:w-auto"
                style={{ padding: '16px 40px', fontFamily: '"Space Mono", monospace' }}
              >
                Book a Demo
              </button>
              <button 
                style={{ 
                  fontFamily: '"Space Mono", monospace', 
                  fontSize: '14px', 
                  fontWeight: 700, 
                  color: '#004B22',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px'
                }}
              >
                Contact Us For More Details
              </button>
            </div>
          </div>
        </section>

        <Testimonials />

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
                    <Search size={20} /> Instant Factory Truth
                  </div>
                </div>

                <h2 
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', marginBottom: '24px', lineHeight: '1.1' }}
                >
                  Know Exactly What You&apos;re Buying. <span style={{ color: '#0EB075' }}>Every Time.</span>
                </h2>

                <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#4B5563', marginBottom: '48px', lineHeight: '1.7' }}>
                  Pull the original factory sticker by VIN in seconds. Verify specs, packages, and the real original MSRP before you sign a single thing.
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
                        id="vin-input-ws-cta"
                        className="bg-transparent border-none outline-none w-full font-bold"
                        placeholder="Enter 17-digit VIN..."
                        type="text"
                        style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#111827' }}
                      />
                    </div>
                    <button
                      id="lookup-window-sticker-cta"
                      className="primary-button px-10 py-4 whitespace-nowrap"
                      style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', fontWeight: 700 }}
                    >
                      Generate Sticker
                    </button>
                  </div>
                </div>

                <div className="mt-10 flex items-center justify-center gap-8 opacity-60">
                  {['Official Records', 'Instant PDF', '100% Accurate'].map((tag, i) => (
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
    </div>
  );
}
