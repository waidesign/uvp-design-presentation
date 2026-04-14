"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle, ChevronDown, Check, X, CreditCard, Shield, Star, Award, TrendingDown
} from 'lucide-react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

// ─── Pricing Data ───────────────────────────────────────────────────────────
const PRICING_PLANS = [
  {
    title: 'Single Report',
    price: '$14.99',
    badge: null,
    features: [
      '1 Full Vehicle History Report',
      'Accident & Salvage Checks',
      'Odometer Rollback Detection',
      'Lien & Title Status',
      'Instant Online Delivery',
      'Valid for 30 Days'
    ],
    highlighted: false,
    cta: 'Get 1 Report'
  },
  {
    title: 'Pro Pack (5 Reports)',
    price: '$29.99',
    badge: 'BEST VALUE',
    features: [
      '5 Full Vehicle History Reports',
      'Accident & Salvage Checks',
      'Odometer Rollback Detection',
      'Lien & Title Status',
      'Bonus: 1 Window Sticker',
      'Valid for 90 Days'
    ],
    highlighted: true,
    cta: 'Get 5 Reports'
  },
  {
    title: 'Window Sticker',
    price: '$9.99',
    badge: 'FACTORY DATA',
    features: [
      '1 Original Window Sticker',
      'Factory Installed Options',
      'Original MSRP Breakdown',
      'Fuel Economy Data',
      'Standard Equipment List',
      'Instant Online Delivery'
    ],
    highlighted: false,
    cta: 'Get Window Sticker'
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FDF9' }}>
      <Nav />

      <main>
        {/* ═══════════════ HERO ═══════════════ */}
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#F5FDF9' }}>
          <div className="absolute inset-0 pointer-events-none opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #004B22 0px, transparent 1px, transparent 40px)',
          }} />

          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-block mb-6 px-5 py-2 bg-white" style={{
                border: '2px solid #004B22', borderRadius: '4px',
                boxShadow: '3px 3px 0 0 #004B22', fontFamily: '"Gochi Hand", cursive',
                color: '#004B22', fontSize: '18px', transform: 'rotate(-2deg)',
              }}>
                💵 Straightforward Pricing
              </div>

              <h1 className="leading-tight mb-6" 
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: '#111827' }}
              >
                No Hidden Fees. <br/>
                <span className="wavy-underline" style={{ color: '#0EB075' }}>Just Solid Data.</span>
              </h1>

              <p className="mx-auto text-lg mb-12" style={{ 
                fontFamily: '"Space Mono", monospace', 
                color: '#3D4A41', maxWidth: '600px',
              }}>
                Get the insights you need to make confident buying decisions. Save up to 50% compared to leading competitors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ PRICING CARDS ═══════════════ */}
        <section className="pb-24 relative z-20">
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                 {PRICING_PLANS.map((plan, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className={`relative bg-white p-8 ${plan.highlighted ? 'scale-105 z-10' : ''}`}
                      style={{ 
                        border: plan.highlighted ? '3px solid #0EB075' : '2px solid #004B22', 
                        borderRadius: '4px', 
                        boxShadow: plan.highlighted ? '12px 12px 0 0 rgba(14, 176, 117, 0.2)' : '6px 6px 0 0 #004B22' 
                      }}
                    >
                       {plan.badge && (
                         <div className="absolute -top-4 right-8 px-4 py-1 bg-[#0EB075] text-white" 
                              style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700, fontSize: '12px', border: '2px solid #004B22' }}>
                            {plan.badge}
                         </div>
                       )}
                       
                       <h3 className="mb-2" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: plan.highlighted ? '#0EB075' : '#111827' }}>
                          {plan.title}
                       </h3>
                       
                       <div className="mb-8 flex items-end gap-1">
                          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '42px', fontWeight: 700, color: '#111827', lineHeight: 1 }}>{plan.price}</span>
                          {plan.highlighted && <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', color: '#94a3b8', textDecoration: 'line-through', marginBottom: '8px' }}>$74.95</span>}
                       </div>
                       
                       <ul className="mb-10 space-y-4">
                          {plan.features.map((feature, fIdx) => (
                             <li key={fIdx} className="flex gap-3 items-start">
                                <CheckCircle size={18} className="text-[#0EB075] shrink-0 mt-0.5" />
                                <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', color: '#3D4A41' }}>{feature}</span>
                             </li>
                          ))}
                       </ul>
                       
                       <button 
                         className="w-full py-4 transition-all active:scale-95"
                         style={{ 
                           fontFamily: '"Space Mono", monospace', fontWeight: 700,
                           backgroundColor: plan.highlighted ? '#0EB075' : '#fff',
                           color: plan.highlighted ? '#fff' : '#004B22',
                           border: '2px solid #004B22',
                           boxShadow: plan.highlighted ? '3px 3px 0 0 #004B22' : '3px 3px 0 0 #004B22',
                         }}
                       >
                          {plan.cta}
                       </button>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══════════════ TRUST ELEMENTS ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#004B22' }}>
           <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-12 text-center text-white">
                 <div className="flex flex-col items-center">
                    <Shield size={40} className="text-[#0EB075] mb-4" />
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', marginBottom: '12px' }}>Secure Checkout</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', opacity: 0.8 }}>256-bit encryption. We never store your full credit card details.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <TrendingDown size={40} className="text-[#0EB075] mb-4" />
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', marginBottom: '12px' }}>Beat the Competition</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', opacity: 0.8 }}>Why pay $40+ for a single report? Get the same NMVTIS data for less.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <Award size={40} className="text-[#0EB075] mb-4" />
                    <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', marginBottom: '12px' }}>Data Guarantee</h4>
                    <p style={{ fontFamily: '"Space Mono", monospace', fontSize: '13px', opacity: 0.8 }}>If we can't find your vehicle's VIN, we won't charge you for the search.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ DEALERS / B2B ═══════════════ */}
        <section className="py-24 bg-white">
           <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center p-12" style={{ border: '2px dashed #0EB075', borderRadius: '4px', backgroundColor: '#F9F7F2' }}>
                 <div>
                    <div className="inline-block mb-4 px-3 py-1 bg-[#004B22] text-white" style={{ fontFamily: '"Space Mono", monospace', fontSize: '11px', fontWeight: 700 }}>FOR BUSINESSES</div>
                    <h2 className="mb-6" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                       Are you a <span style={{ color: '#0EB075' }}>Dealership?</span>
                    </h2>
                    <p className="mb-8" style={{ fontFamily: '"Space Mono", monospace', color: '#4B5563', lineHeight: 1.6 }}>
                       Stop overpaying for inventory checks. We offer high-volume monthly subscriptions and API access for auto auctions, lenders, and dealerships.
                    </p>
                    <button className="flex items-center gap-2 primary-button px-8 py-3" style={{ fontFamily: '"Space Mono", monospace', fontWeight: 700 }}>
                       View Dealer Plans
                    </button>
                 </div>
                 <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop" 
                      alt="Car Dealership" 
                      className="border-2 border-[#004B22]"
                      style={{ borderRadius: '4px', boxShadow: '-8px 8px 0 0 #004B22' }}
                    />
                 </div>
              </div>
           </div>
        </section>

        {/* ═══════════════ FAQ ═══════════════ */}
        <section className="py-24" style={{ backgroundColor: '#F5FDF9' }}>
           <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <h2 className="text-center mb-16" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '3rem' }}>
                 Pricing <span style={{ color: '#0EB075' }}>FAQ</span>
              </h2>
              <div className="space-y-4">
                 {[
                   { q: "Is this a one-time charge or a subscription?", a: "The Single Report and Pro Packs are one-time charges. You will not be automatically billed again unless you explicitly choose to buy more reports." },
                   { q: "How long are my reports valid?", a: "Single reports can be generated within 30 days of purchase. The Pro Pack (5 reports) gives you 90 days to use all your credits." },
                   { q: "Do you offer refunds if the report is empty?", a: "If our systems return zero records for a valid VIN, we will automatically issue a refund or provide a replacement credit. We stand by our data." },
                   { q: "What payment methods are supported?", a: "We accept all major credit cards (Visa, MasterCard, Amex, Discover), as well as PayPal and Apple Pay for quick checkout." }
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
      </main>

      <Footer />
    </div>
  );
}
