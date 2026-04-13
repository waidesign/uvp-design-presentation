"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      author: 'Marcus T.',
      text: "I almost bought a 'mint condition' SUV that turned out to be a submarine in a previous life. Thanks for saving my wallet!",
      rotation: '-1.5deg'
    },
    {
      author: 'Sarah J.',
      text: "The seller said the miles were low. Your report said the miles were... creative. Walked away and never looked back.",
      rotation: '0.5deg'
    },
    {
      author: 'David C.',
      text: "Best $20 I've spent. Used the report to knock $1,500 off the price. It's practically free money!",
      rotation: '-1deg'
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2
          className="text-center mb-20"
          style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#111827' }}
        >
          Notes from the <span style={{ color: '#0EB075' }}>Road...</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-10 sketch-border bg-white flex flex-col justify-between text-left transition-transform duration-300 hover:z-10 hover:!rotate-0"
              style={{ 
                boxShadow: '4px 4px 0 0 #004B22',
                transform: `rotate(${t.rotation})`
              }}
            >
              <p
                className="font-body mb-10 leading-relaxed"
                style={{ fontSize: '15px', color: '#3D4A41', fontFamily: '"Space Mono", monospace' }}
              >
                {"\""}{t.text}{"\""}
              </p>
              
              <div
                className="font-bold flex items-center gap-2"
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.4rem', color: '#111827' }}
              >
                — {t.author}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
            <a 
              href="#" 
              className="secondary-button inline-flex items-center gap-2 px-6 py-4"
              style={{ fontSize: '18px' }}
            >
              {"See all reviews"}
              <ExternalLink size={20} strokeWidth={2.5} />
            </a>
        </div>
      </div>
    </section>
  );
}
