"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Search, CheckCircle, ExternalLink, MessageCircle, ArrowUpRight, Users } from 'lucide-react';

const socialPlatforms = [
  {
    name: 'Twitter (X)',
    handle: '@UsedVehiclePro',
    description: 'Real-time car scam alerts and market trend updates.',
    icon: <MessageCircle size={32} className="text-[#1DA1F2]" />,
    color: '#1DA1F2',
    hoverBg: '#F0F9FF',
    rotation: '-1deg'
  },
  {
    name: 'Instagram',
    handle: '@UsedVehiclePro',
    description: 'Visual guides on spotting flood damage and rollbacks.',
    icon: <Search size={32} className="text-[#E4405F]" />,
    color: '#E4405F',
    hoverBg: '#FFF5F7',
    rotation: '1.5deg'
  },
  {
    name: 'LinkedIn',
    handle: 'UsedVehiclePro',
    description: 'In-depth technical audits and professional market data.',
    icon: <ExternalLink size={32} className="text-[#0A66C2]" />,
    color: '#0A66C2',
    hoverBg: '#F0F7FF',
    rotation: '-2deg'
  },
  {
    name: 'YouTube',
    handle: 'UsedVehicleProTV',
    description: 'Video walkthroughs and deep dives into vehicle history.',
    icon: <CheckCircle size={32} className="text-[#FF0000]" />,
    color: '#FF0000',
    hoverBg: '#FFF5F5',
    rotation: '1deg'
  }
];

export default function SocialMedia() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5FDF9] rounded-full blur-3xl opacity-60 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5FDF9] rounded-full blur-3xl opacity-60 -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 
              className="mb-4"
              style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111827', lineHeight: '1.1' }}
            >
              The Truth is <span className="wavy-underline" style={{ color: '#0EB075', textDecorationColor: '#0EB075' }}>Social</span>
            </h2>
            <p 
              className="font-body opacity-70 leading-relaxed"
              style={{ fontFamily: '"Space Mono", monospace', fontSize: '18px' }}
            >
              Dont just take our word for it. Join our community of 15k+ savvy buyers and get daily insights into the used car market.
            </p>
          </div>

          <div 
            className="flex items-center gap-3 bg-[#F5FDF9] border-2 border-[#004B22] px-6 py-3 sketch-shadow self-center lg:self-auto"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <Users size={20} className="text-[#0EB075]" />
            <span className="font-bold text-[#111827]" style={{ fontFamily: '"Space Mono", monospace' }}>15,400+ Followers</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialPlatforms.map((platform, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative block p-8 sketch-border bg-white transition-all h-full"
              style={{ 
                borderColor: '#004B22', 
                boxShadow: '4px 4px 0px 0px #004B22',
                transform: `rotate(${platform.rotation})`
              }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{ backgroundColor: platform.hoverBg }}
              ></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white sketch-border-sm" style={{ borderColor: '#004B22' }}>
                  {platform.icon}
                </div>
                <ArrowUpRight 
                  size={20} 
                  className="text-slate-300 group-hover:text-[#0EB075] transition-colors" 
                  style={{ transform: 'rotate(-45deg)' }}
                />
              </div>

              <h3 
                className="mb-2"
                style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '24px', color: '#111827' }}
              >
                {platform.name}
              </h3>
              <div 
                className="font-body text-sm mb-4"
                style={{ fontFamily: '"Space Mono", monospace', color: platform.color }}
              >
                {platform.handle}
              </div>
              <p 
                className="font-body text-sm leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ fontFamily: '"Space Mono", monospace' }}
              >
                {platform.description}
              </p>

              {/* Decorative "Follow" label on hover */}
              <div 
                className="absolute -bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-all bg-[#0EB075] text-white px-3 py-1 text-xs font-bold sketch-border-sm translate-y-2 group-hover:translate-y-0"
                style={{ fontFamily: '"Space Mono", monospace', textTransform: 'uppercase' }}
              >
                Follow →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-20 text-center">
            <div className="inline-block relative">
                 <p 
                   className="font-hand text-2xl text-[#111827] mb-2"
                   style={{ fontFamily: '"Kalam", cursive' }}
                 >
                   Need help finding your next car?
                 </p>
                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <span 
                        className="font-body text-sm opacity-50 uppercase tracking-[0.2em]"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                        DM us @UsedVehiclePro
                    </span>
                    <div className="hidden sm:block w-8 h-[1px] bg-slate-200"></div>
                    <span 
                        className="font-body text-sm opacity-50 uppercase tracking-[0.2em]"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                    >
                        #StopTheLemon
                    </span>
                 </div>
                 
                 {/* Decorative sketchy arrow (could be an image or SVG) */}
                 <div className="absolute -left-16 top-0 hidden xl:block opacity-20">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 50C10 50 15 20 50 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M40 10L50 10L50 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
