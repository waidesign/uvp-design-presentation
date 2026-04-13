"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { name: 'VehicleHistory', href: '#' },
  { name: 'WindowSticker', href: '#' },
  { name: 'LicensePlateLookup', href: '#' },
  { name: 'Tools', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'SampleReports', href: '#' },
];

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50" style={{ backgroundColor: '#F1F7F0', borderBottom: '1px solid #c8dfc8' }}>
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <Logo />

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-x-7 font-body text-sm" style={{ color: '#2d4a38' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-green-700 transition-colors whitespace-nowrap"
              style={{ color: '#2d4a38', fontSize: '13px', fontFamily: '"Space Mono", monospace' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            className="hidden sm:block primary-button font-body text-sm px-6 py-2 transition-all active:scale-95"
            style={{ fontFamily: '"Space Mono", monospace' }}
          >
            Check VIN
          </button>
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t p-6"
            style={{ backgroundColor: '#F1F7F0', borderColor: '#c8dfc8' }}
          >
            <div className="flex flex-col gap-4 font-body text-base">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} style={{ color: '#2d4a38', fontFamily: '"Space Mono", monospace' }}>{link.name}</a>
              ))}
              <button
                className="primary-button font-body text-base px-6 py-2"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                Check VIN
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
