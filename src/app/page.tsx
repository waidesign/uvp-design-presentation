"use client";
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import TruthScanner from '../components/TruthScanner';
import CompetitorComparison from '../components/CompetitorComparison';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Blog from '../components/Blog';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import FinalCTA from '../components/FinalCTA';
import VideoDemo from '../components/VideoDemo';
import UnlimitedPricingCard from '../components/UnlimitedPricingCard';
import LicensePlateLookup from '../components/LicensePlateLookup';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5FDF9]">
      {/* Navigation */}
      <Nav />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* ─────────────── Competitor Comparison ─────────────── */}
        <section className="py-20" style={{ backgroundColor: '#F9F7F2' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2
              className="mb-4"
              style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}
            >
              Why pay more for <span style={{ color: '#ef4444' }}>half-truths</span>?
            </h2>
            <p
              className="font-body mb-16 mx-auto opacity-70"
              style={{ fontFamily: '"Space Mono", monospace', maxWidth: '500px' }}
            >
              We provide more data checkpoints than the big names, for less than the price of a takeout lunch.
            </p>

            <CompetitorComparison />

            <div className="mt-16 text-left">
              <UnlimitedPricingCard />
            </div>
          </div>
        </section>

        {/* ─────────────── Interactive Reveal Section ─────────────── */}
        <section className="py-20" style={{ backgroundColor: '#fff' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="mb-4"
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827' }}
              >
                The <span className="wavy-underline-red" style={{ color: '#111827', textDecorationColor: '#EA4335' }}>Full Truth</span> Scanner
              </h2>
              <p
                className="font-body mx-auto leading-relaxed"
                style={{ fontFamily: '"Space Mono", monospace', maxWidth: '520px' }}
              >
                Ever wonder what Carfax and AutoCheck &quot;forget&quot; to mention?<br />
                Grab the slider and see the skeletons sellers are hiding.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left Column - Truth Scanner */}
              <div>
                <TruthScanner />
                <div className="flex items-center justify-center gap-4 mt-6">
                  <ChevronLeft size={16} color="#0EB075" />
                  <span style={{ fontFamily: '"Kalam", cursive', color: '#0EB075', fontSize: '18px' }}>
                    Slide to unmask the vehicle!
                  </span>
                  <ChevronRight size={16} color="#0EB075" />
                </div>
              </div>

              {/* Right Column - Text & CTA */}
              <div>
                <h3
                  className="mb-4 leading-tight"
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#111827' }}
                >
                  Carfax doesn&apos;t show you the full truth. <span style={{ color: '#EA4335' }}>We do.</span>
                </h3>
                <p
                  className="font-body mb-8 leading-relaxed"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  While our competitors are busy charging you for &quot;brand name&quot; reports that miss crucial data, we&apos;re digging deep into 45+ countries and 330M records to find exactly what happened to that car.
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} color="#0EB075" strokeWidth={2} className="shrink-0 mt-0.5" />
                    <div>
                      <div className="font-body mb-1" style={{ color: '#3D4A41', fontFamily: '"Space Mono", monospace', fontSize: '1.125rem', fontStyle: 'normal', fontWeight: 400, lineHeight: '1.75rem' }}>Detailed Accident Assessments</div>
                      <div className="font-body" style={{ color: '#3D4A41', fontFamily: '"Space Mono", monospace', fontSize: '1.125rem', fontStyle: 'normal', fontWeight: 400, lineHeight: '1.75rem' }}>Not just &quot;Accident reported&quot;, but &quot;Left-front structural damage&quot;.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle size={20} color="#0EB075" strokeWidth={2} className="shrink-0 mt-0.5" />
                    <div>
                      <div className="font-body mb-1" style={{ color: '#3D4A41', fontFamily: '"Space Mono", monospace', fontSize: '1.125rem', fontStyle: 'normal', fontWeight: 400, lineHeight: '1.75rem' }}>Real-time Market Value</div>
                      <div className="font-body" style={{ color: '#3D4A41', fontFamily: '"Space Mono", monospace', fontSize: '1.125rem', fontStyle: 'normal', fontWeight: 400, lineHeight: '1.75rem' }}>Know instantly if you&apos;re getting a deal or a scam.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main CTA Row under the columns */}
            <div
              className="mt-16 p-8 lg:p-12 sketch-border sketch-shadow"
              style={{ backgroundColor: '#F5FDF9', borderColor: '#004B22' }}
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8">
                  <div style={{ color: '#0EB075', fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.2em', marginBottom: '12px', fontFamily: '"Space Mono", monospace', textTransform: 'uppercase' }}>
                    Instant Connection
                  </div>
                  <h4 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '28px', color: '#111827', marginBottom: '12px' }}>
                    Connect with used car buyers <span className="wavy-underline" style={{ color: '#111827', textDecorationColor: '#0EB075' }}>instantly.</span>
                  </h4>
                  <p className="max-w-3xl" style={{ fontFamily: '"Space Mono", monospace', fontSize: '16px', color: '#4B5563' }}>
                    Don&apos;t wait for &quot;pending updates&quot;. Our database is live. Grab your report and let the buyer know the truth before anyone else does.
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <button className="primary-button font-body px-8 py-5 w-full transition-all active:scale-95" style={{ fontSize: '16px', fontWeight: '700', fontFamily: '"Space Mono", monospace', textTransform: 'uppercase' }}>
                    GET STARTED FOR $24.99
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Demo Section */}
        <VideoDemo />

        {/* Features & How It Works */}
        <Features />
        <HowItWorks />

        {/* Stats / Fact Card Section */}
        <Stats />

        {/* License Plate Lookup Section */}
        <LicensePlateLookup />

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA Section */}
        <FinalCTA />

        {/* FAQ Section */}
        <FAQ />

        {/* Blog Section */}
        <Blog />

        {/* Social Media Section */}
        <SocialMedia />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
