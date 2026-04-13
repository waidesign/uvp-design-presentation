"use client";
import { Clock } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: 1,
      title: 'Gimme the VIN',
      text: "Pop in those 17 digits. It's like the car's fingerprint.",
      link: { label: 'Where can I find the VIN?', href: '#' },
    },
    {
      step: 2,
      title: 'We Start Digging',
      text: 'Our bots scour 1000+ sources around the globe instantly.',
      link: null,
    },
    {
      step: 3,
      title: 'The Big Reveal',
      text: 'Pay and unlock your full vehicle history report.',
      badge: 'READY IN SECONDS',
    },
    {
      step: 4,
      title: 'Buy with Swagger',
      text: "Know exactly what you're getting. No surprises.",
      link: { label: 'View sample report', href: '#' },
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h2
          className="text-center mb-16"
          style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}
        >
          How it works?
        </h2>

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((item) => (
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
                className="font-body mb-3"
                style={{ fontFamily: '"Space Mono", monospace', marginLeft: '32px' }}
              >
                {item.text}
              </p>
              {item.link && (
                <a
                  href={item.link.href}
                  className="font-body ml-8"
                  style={{ 
                    color: '#191C1E', 
                    fontFamily: '"Space Mono", monospace', 
                    fontSize: '1.125rem', 
                    fontStyle: 'normal', 
                    fontWeight: 400, 
                    lineHeight: '1.75rem',
                    textDecorationLine: 'underline',
                    textDecorationStyle: 'solid',
                    textDecorationSkipInk: 'auto',
                    textDecorationColor: '#000',
                    textDecorationThickness: 'auto',
                    textUnderlineOffset: 'auto',
                    textUnderlinePosition: 'from-font'
                  }}
                >
                  {item.link.label}
                </a>
              )}
              {item.badge && (
                <div
                  className="inline-flex items-center gap-2 ml-8"
                  style={{
                    border: '1.5px solid #004B22',
                    borderRadius: '999px',
                    padding: '4px 14px',
                    width: 'fit-content',
                    color: '#0EB075',
                  }}
                >
                  <Clock size={13} />
                  <span className="font-body" style={{ letterSpacing: '0.06em', fontWeight: 700, fontFamily: '"Space Mono", monospace' }}>
                    {item.badge}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
