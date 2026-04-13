"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Will they know I checked?',
      a: "Nope! Our lookups are 100% private. The seller stays in the dark—you're just doing your homework. No data is shared with dealers, insurance, or other sites.",
    },
    {
      q: 'How fast do I get the report?',
      a: 'We dig fast. Reports are generated in seconds. As soon as you confirm, the full automotive scrapbook is ready for your eyes only.',
    },
    {
      q: 'Where does your data come from?',
      a: 'We scour 330 million+ records from police databases, insurance logs, auction sites, body shop records, and more across 45 countries.',
    },
    {
      q: 'What if the VIN is invalid?',
      a: "If we can't find a single record for a valid VIN (which is rare), or the VIN is incorrect, our support team will help you sort it out. We stand by our data.",
    },
    {
      q: 'Is this better than Carfax?',
      a: "We like to think so. We often catch 'minor' accidents or multi-country history that the bigger guys sometimes gloss over. Plus, we're less than half the price.",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}
        >
          Burning{' '}
          <span style={{ fontFamily: '"Kalam", cursive', color: '#0EB075' }}>Questions?</span>
        </h2>
        <p
          className="text-center font-body mb-12"
          style={{ fontFamily: '"Space Mono", monospace' }}
        >
          Everything you wanted to know about VIN checks
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
                boxShadow: '2px 2px 0 0 #004B22'
              }}
            >
              <button
                id={`faq-${idx}`}
                className="w-full flex justify-between items-center text-left px-6 py-5 gap-4"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.15rem', color: '#1a1a1a' }}
                >
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
                      className="font-body px-6 pb-5"
                      style={{ fontFamily: '"Space Mono", monospace', borderTop: '1px solid #e5e7eb' }}
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
  );
}
