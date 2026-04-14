"use client";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Search, Shield, FileText, AlertTriangle, Clock, BookOpen, FileCheck, Bike, Truck, Caravan, Tractor, ClipboardList, History } from 'lucide-react';
import Logo from './Logo';

// ─── Simple nav links ─────────────────────────────────────────────────────────
const simpleLinks = [
  { name: 'Vehicle History', href: '/' },
  { name: 'Window Sticker', href: '/window-sticker' },
  { name: 'License Plate Lookup', href: '/license-plate-lookup' },
];

const rightLinks = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Sample Reports', href: '/sample-reports' },
];

// ─── Tools mega-menu data ─────────────────────────────────────────────────────
const vinChecks = [
  { icon: <Search size={15} />, label: 'VIN Check', href: '/vin-check' },
  { icon: <Shield size={15} />, label: 'Lien Check', href: '/lien-check' },
  { icon: <FileText size={15} />, label: 'Title Check', href: '/title-check' },
  { icon: <AlertTriangle size={15} />, label: 'Stolen VIN Check', href: '/stolen-vin-check' },
  { icon: <Clock size={15} />, label: 'MSRP by VIN', href: '/window-sticker' },
  { icon: <ClipboardList size={15} />, label: 'Build Sheet by VIN', href: '/build-sheet-by-vin' },
  { icon: <History size={15} />, label: 'Service Records by VIN', href: '/service-records-by-vin' },
  { icon: <Shield size={15} />, label: 'Warranty by VIN', href: '/warranty-by-vin' },
  { icon: <AlertTriangle size={15} />, label: 'Recall Check', href: '/vehicle-recalls' },
  { icon: <BookOpen size={15} />, label: 'Classic Car VIN Lookup', href: '/classic-vin-decoder' },
  { icon: <FileCheck size={15} />, label: 'Bill of Sale', href: '/bill-of-sale' },
  { icon: <FileText size={15} />, label: 'Pre-1980 VIN Search', href: '/classic-vin-decoder' },
];

const byVehicleType = [
  { icon: <Bike size={15} />, label: 'Motorcycle VIN Lookup', href: '/motorcycle-vin-lookup' },
  { icon: <Truck size={15} />, label: 'Truck VIN Lookup', href: '/truck-vin-lookup' },
  { icon: <Caravan size={15} />, label: 'RV VIN Lookup', href: '/rv-vin-lookup' },
  { icon: <Truck size={15} />, label: 'Trailer VIN Lookup', href: '/trailer-vin-lookup' },
  { icon: <Tractor size={15} />, label: 'ATV VIN Check', href: '/atv-vin-check' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openTools = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsToolsOpen(true);
  };

  const closeTools = () => {
    closeTimer.current = setTimeout(() => setIsToolsOpen(false), 120);
  };

  const allMobileLinks = [
    ...simpleLinks,
    { name: 'Our Tools', href: '#', isGroup: true },
    ...vinChecks.map(l => ({ name: l.label, href: l.href, indent: true })),
    ...byVehicleType.map(l => ({ name: l.label, href: l.href, indent: true })),
    ...rightLinks,
  ];

  return (
    <nav className="fixed top-0 w-full z-50" style={{ backgroundColor: '#F1F7F0', borderBottom: '1px solid #c8dfc8' }}>
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <Logo />

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-x-6" style={{ color: '#2d4a38' }}>
          {/* Simple left links */}
          {simpleLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-green-700 transition-colors whitespace-nowrap"
              style={{ color: '#2d4a38', fontSize: '13px', fontFamily: '"Space Mono", monospace' }}
            >
              {link.name}
            </a>
          ))}

          {/* Our Tools dropdown */}
          <div
            className="relative"
            onMouseEnter={openTools}
            onMouseLeave={closeTools}
          >
            <button
              id="our-tools-menu-btn"
              className="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-green-700"
              style={{ color: '#2d4a38', fontSize: '13px', fontFamily: '"Space Mono", monospace', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Our Tools
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.2s ease',
                  transform: isToolsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>

            <AnimatePresence>
              {isToolsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={openTools}
                  onMouseLeave={closeTools}
                  className="absolute left-0 top-full mt-2"
                  style={{
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRadius: '4px',
                    boxShadow: '5px 5px 0 0 #004B22',
                    minWidth: '480px',
                    padding: '20px 24px',
                    zIndex: 100,
                  }}
                >
                  {/* Arrow pointer */}
                  <div style={{
                    position: 'absolute',
                    top: '-8px',
                    left: '24px',
                    width: '14px',
                    height: '14px',
                    backgroundColor: '#fff',
                    border: '2px solid #004B22',
                    borderRight: 'none',
                    borderBottom: 'none',
                    transform: 'rotate(45deg)',
                  }} />

                  <div className="grid grid-cols-2 gap-6 relative z-10">
                    {/* VIN Checks column */}
                    <div>
                      <div
                        className="mb-3 pb-1"
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          color: '#94a3b8',
                          borderBottom: '1px dashed #c8dfc8',
                        }}
                      >
                        VIN CHECKS
                      </div>
                      <div className="flex flex-col gap-1">
                        {vinChecks.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2.5 px-2 py-1.5 rounded transition-colors group"
                            style={{ textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5FDF9';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                            }}
                          >
                            <span style={{ color: '#0EB075', flexShrink: 0 }}>{item.icon}</span>
                            <span style={{
                              fontFamily: '"Space Mono", monospace',
                              fontSize: '12px',
                              color: '#2d4a38',
                            }}>
                              {item.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* By Vehicle Type column */}
                    <div>
                      <div
                        className="mb-3 pb-1"
                        style={{
                          fontFamily: '"Space Mono", monospace',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          color: '#94a3b8',
                          borderBottom: '1px dashed #c8dfc8',
                        }}
                      >
                        BY VEHICLE TYPE
                      </div>
                      <div className="flex flex-col gap-1">
                        {byVehicleType.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2.5 px-2 py-1.5 rounded transition-colors"
                            style={{ textDecoration: 'none' }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F5FDF9';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                            }}
                          >
                            <span style={{ color: '#0EB075', flexShrink: 0 }}>{item.icon}</span>
                            <span style={{
                              fontFamily: '"Space Mono", monospace',
                              fontSize: '12px',
                              color: '#2d4a38',
                            }}>
                              {item.label}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right simple links */}
          {rightLinks.map((link) => (
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

        {/* CTA + Mobile Menu button */}
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
            <div className="flex flex-col gap-3">
              {simpleLinks.map((link) => (
                <a key={link.name} href={link.href} style={{ color: '#2d4a38', fontFamily: '"Space Mono", monospace', fontSize: '13px' }}>
                  {link.name}
                </a>
              ))}

              {/* Our Tools group header */}
              <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '0.1em', color: '#94a3b8', marginTop: '8px' }}>
                OUR TOOLS — VIN CHECKS
              </div>
              {vinChecks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 pl-3"
                  style={{ color: '#2d4a38', fontFamily: '"Space Mono", monospace', fontSize: '12px', textDecoration: 'none' }}
                >
                  <span style={{ color: '#0EB075' }}>{item.icon}</span>
                  {item.label}
                </a>
              ))}

              <div style={{ fontFamily: '"Space Mono", monospace', fontSize: '10px', letterSpacing: '0.1em', color: '#94a3b8', marginTop: '4px' }}>
                OUR TOOLS — BY VEHICLE TYPE
              </div>
              {byVehicleType.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 pl-3"
                  style={{ color: '#2d4a38', fontFamily: '"Space Mono", monospace', fontSize: '12px', textDecoration: 'none' }}
                >
                  <span style={{ color: '#0EB075' }}>{item.icon}</span>
                  {item.label}
                </a>
              ))}

              {rightLinks.map((link) => (
                <a key={link.name} href={link.href} style={{ color: '#2d4a38', fontFamily: '"Space Mono", monospace', fontSize: '13px', marginTop: '8px' }}>
                  {link.name}
                </a>
              ))}

              <button
                className="primary-button font-body text-base px-6 py-2 mt-2"
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
