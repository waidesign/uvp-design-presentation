"use client";
import React from 'react';
import { Star, CheckCircle, Phone, Sparkles, Zap } from 'lucide-react';

export default function UnlimitedPricingCard() {
  return (
    <div 
      className="sketch-border text-left mt-8 flex flex-col md:flex-row shadow-[4px_4px_0_0_#004B22] text-[#111827]"
      style={{ backgroundColor: '#F5FDF9' }}
    >
      {/* Left Column - Core Offer */}
      <div className="flex-1 p-8 md:p-12 flex flex-col">
        <div className="inline-flex items-center gap-2 bg-[#0EB075] text-[#ffffff] px-3 py-1 mb-6 rounded-sm w-max border-2 border-[#004B22]">
          <Sparkles size={16} strokeWidth={2.5} color="#ffffff" />
          <span style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '16px', letterSpacing: '0.5px', color: '#ffffff' }}>Best Value!</span>
        </div>

        <h3 className="mb-2" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#111827', lineHeight: '1.2' }}>
          Unlimited VIN Check
        </h3>
        
        <div className="font-body opacity-70 mb-6" style={{ fontFamily: '"Space Mono", monospace', fontSize: '14px', fontWeight: 700 }}>
          Monthly Subscription
        </div>

        <p className="font-body mb-8 leading-relaxed max-w-lg" style={{ fontFamily: '"Space Mono", monospace' }}>
          Uncover the hidden history of any vehicle with unlimited access to basic VIN check reports.
        </p>

        {/* Pricing Sub-block */}
        <div 
          className="sketch-border-sm p-6 mb-8 flex flex-col justify-center"
          style={{ backgroundColor: '#E8F4E8' }}
        >
          <div className="flex flex-row items-end gap-2 mb-2">
            <span style={{ fontFamily: '"Kalam", cursive', fontSize: '48px', fontWeight: 700, color: '#0EB075', lineHeight: '1' }}>$49.99</span>
            <span className="font-body mb-2" style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#111827' }}>/month</span>
          </div>
          <div className="font-body opacity-70 flex items-center gap-2" style={{ fontFamily: '"Space Mono", monospace' }}>
            Billed monthly • Cancel anytime!
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
          <button 
            className="primary-button font-body px-8 py-3 w-full sm:w-auto"
            style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '20px' }}
          >
            Subscribe Now
          </button>
          
          <a href="#" className="font-body font-bold underline underline-offset-4" style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#0EB075' }}>
            View sample
          </a>
        </div>

        {/* Footer Contact */}
        <div className="flex items-center gap-3 mt-10 opacity-70">
           <Phone size={16} color="#111827" />
           <span className="font-body" style={{ fontFamily: '"Space Mono", monospace' }}>
             <a href="#" className="underline underline-offset-2 hover:text-[#0EB075] transition-colors">Contact Sales</a> for custom enterprise solutions
           </span>
        </div>
      </div>

      {/* Right Column - Features & Upsell */}
      <div className="flex-1 p-8 md:p-12 border-t-2 md:border-t-0 md:border-l-2 border-[#004B22] flex flex-col gap-6" style={{ backgroundColor: '#fff' }}>
        
        {/* Features Box */}
        <div className="sketch-border-sm p-6 md:p-8" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="flex items-center gap-3 mb-6">
            <Star size={24} color="#FACC15" fill="#FACC15" />
            <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#111827' }}>
              Why choose this plan?
            </h4>
          </div>

          <ul className="space-y-4">
            {[
              "Unlimited access to basic reports",
              "Special 50% discount on full premium reports",
              "Free VIN decoding, recall check and maintenance",
              "Free access to a dashboard to manage reports",
              "Early access for upcoming features and more!"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={18} color="#0EB075" strokeWidth={2.5} className="shrink-0 mt-0.5" />
                <span className="font-body" style={{ fontFamily: '"Space Mono", monospace', lineHeight: '1.75rem' }}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upsell Box */}
        <div className="sketch-border p-6 md:p-8" style={{ backgroundColor: '#0EB075', boxShadow: '2px 2px 0px 0px #004B22' }}>
           <div className="flex items-start gap-3 mb-4">
              <Zap size={24} color="#FACC15" fill="#FACC15" className="shrink-0 mt-0.5" />
              <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '22px', color: '#fff', lineHeight: '1.3' }}>
                Get 50% off full detailed reports when you subscribe.
              </h4>
           </div>
           
           <p className="font-body p-color-light opacity-90 mb-4" style={{ fontFamily: '"Space Mono", monospace' }}>
             Full reports include ownership history, accident details, maintenance history, title checks, theft, lien records, and photos.
           </p>
           
           <div className="font-body font-bold text-white text-[15px]" style={{ fontFamily: '"Space Mono", monospace' }}>
             {"Don't wait! Get unlimited checks for just $49.99/month."}
           </div>
        </div>

      </div>
    </div>
  );
}
