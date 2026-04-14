"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="bg-[#004b22] pt-20 pb-20 border-t-2" 
      style={{ borderColor: '#0eb075' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Sections Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Products Column */}
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#ffffff' }}>Products</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'VIN Check', href: '/vin-check' },
                { label: 'Lien Check', href: '/lien-check' },
                { label: 'Title Check', href: '/title-check' },
                { label: 'Stolen VIN Check', href: '/stolen-vin-check' },
                { label: 'Window Sticker', href: '/window-sticker' },
                { label: 'Classic Car VIN Lookup', href: '/classic-vin-decoder' },
                { label: 'Build Sheet', href: '/build-sheet-by-vin' },
                { label: 'Service Records', href: '/service-records-by-vin' },
                { label: 'Warranty Lookup', href: '/warranty-by-vin' },
                { label: 'Recall Check', href: '/vehicle-recalls' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#0eb075] transition-colors" style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#f1f1f1' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#ffffff' }}>Resources</h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Bill of Sale', href: '/bill-of-sale' },
                { label: 'Motorcycle VIN Lookup', href: '/motorcycle-vin-lookup' },
                { label: 'Truck VIN Lookup', href: '/truck-vin-lookup' },
                { label: 'RV VIN Lookup', href: '/rv-vin-lookup' },
                { label: 'Trailer VIN Lookup', href: '/trailer-vin-lookup' },
                { label: 'ATV VIN Check', href: '/atv-vin-check' },
                { label: 'License Plate Lookup', href: '/license-plate-lookup' }
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#0eb075] transition-colors" style={{ fontFamily: '"Space Mono", monospace', fontSize: '15px', color: '#f1f1f1' }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sample Reports Column */}
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#ffffff' }}>Sample Reports</h3>
            <ul className="flex flex-col gap-2">
              {[
                '2015 Toyota Corolla L', '2004 Honda Civic Hybrid', 
                '2011 Mercedes-Benz C-Class', '2015 Jeep Wrangler'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#0eb075] transition-colors" style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#ffffff' }}>Company</h3>
            <ul className="flex flex-col gap-2">
              {[
                'About us', 'Contact us', 'Sitemap', 'Blog', 
                'FAQs', 'Login/ Sign up', 'Request a refund', 'Affiliate program'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#0eb075] transition-colors" style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-[#f1f1f1]/10 mb-10"></div>

        {/* Bottom Bar Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Footer Left */}
          <div className="flex flex-col gap-6">
            <div 
              style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '32px', color: '#ffffff' }}
            >
              UsedVehiclePro
            </div>
            <p className="p-color-white" style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '18px', color: '#ffffff' }}>
              &copy; 2026 UsedVehiclePro. All rights reserved.
            </p>
          </div>

          {/* Footer Right */}
          <div className="flex flex-col gap-4 text-left lg:text-right">
            <p className="p-color-light" style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1' }}>
              (800)-887-1339
            </p>
            <p className="p-color-light" style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1' }}>
              support@usedvehiclepro.com
            </p>
            <div className="flex flex-wrap items-center gap-x-2 lg:justify-end">
              {['Instagram', 'LinkedIn', 'YouTube', 'Facebook'].map((social, idx, arr) => (
                <div key={social} className="flex items-center gap-2">
                  <a href="#" className="hover:text-[#0eb075] transition-colors" style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px', color: '#f1f1f1' }}>
                    {social}
                  </a>
                  {idx < arr.length - 1 && (
                    <div className="w-px h-4 bg-[#f1f1f1]/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
