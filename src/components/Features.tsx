"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, AlertTriangle, Zap, Coins, ChevronDown } from 'lucide-react';

export default function Features() {
  const [isExpanded, setIsExpanded] = useState(false);

  const valueProps = [
    {
      iconBg: '#FFE5E5',
      iconBorder: '#ef4444',
      icon: <AlertTriangle size={28} color="#ef4444" strokeWidth={1.5} />,
      title: 'Avoid expensive mistakes',
      text: "Don't inherit someone else's headache. Identify hidden accidents and \"money pits\" before signing any paperwork, saving thousands in future repairs.",
    },
    {
      iconBg: '#E5F7EE',
      iconBorder: '#004B22',
      icon: <Zap size={28} color="#0EB075" strokeWidth={1.5} />,
      title: 'Find the right car faster',
      text: 'Skip the lemon lot. Use our precision data to instantly filter out high-risk vehicles and focus your energy on the ones that deserve your attention.',
    },
    {
      iconBg: '#F0F0F0',
      iconBorder: '#6b7280',
      icon: <Coins size={28} color="#6b7280" strokeWidth={1.5} />,
      title: 'Know more, pay less',
      text: 'Data is your best negotiation tool. Use reported history and market valuations to secure a fair price and walk into any dealership with total confidence.',
    },
  ];

  const featureRows = [
    {
      tag: 'Auction & Sales',
      title: 'Auction or Sales History',
      text: 'Track when and where the vehicle was sold. View past auction photos and mileage readings from when the car last changed hands.',
      features: ['Past sales prices', 'Auction house records', 'Sales date verification', 'Previous mileage logs'],
      videoImg: '/assets/value_videoframe.png',
      videoFile: 'Auction_Sales_Audit.mp4',
    },
    {
      tag: 'Title Status',
      title: 'Title Brand Check',
      text: "Monitor for 'branded' titles including Salvage, Rebuilt, Lemon, and Flood damage that can drastically reduce car value.",
      features: ['Salvage/Rebuilt status', 'Flood & Fire damage tags', 'Lemon law history', 'Junk & Scrap records'],
      videoImg: '/assets/title_video.png',
      videoFile: 'Title_Brand_Audit.mp4',
    },
    {
      tag: 'Vehicle Usage',
      title: 'Vehicle Usage Records',
      text: 'Identify if a car was previously used as a Taxi, Police vehicle, Rental, or Lease to understand its true wear and tear.',
      features: ['Taxi & Ride-share check', 'Police & Govt usage', 'Rental fleet history', 'Commercial lease tags'],
      videoImg: '/assets/clean_car_sketch.png',
      videoFile: 'Usage_Profile_Scanner.mp4',
    },
    {
      tag: 'Ownership History',
      title: 'Vehicle Ownership Records',
      text: 'See the number of previous owners and how long they kept the vehicle. High turnover can be a red flag.',
      features: ['Number of owners', 'Duration of ownership', 'Registration locations', 'Private vs Commercial'],
      videoImg: '/assets/blog_chart_viz.png',
      videoFile: 'Ownership_Timeline_V3.mp4',
    },
    {
      tag: 'Mileage & Odometer',
      title: 'Mileage Records',
      text: 'Expose odometer rollbacks and discrepancies. We verify mileage history across multiple sources to ensure accuracy.',
      features: ['Odometer rollback alerts', 'Mileage timeline spikes', 'Annual mileage averages', 'Inspection record sync'],
      videoImg: '/assets/odometer_video.png',
      videoFile: 'Mileage_Verification_Engine.mp4',
    },
    {
      tag: 'Accident History',
      title: 'Accident Records',
      text: 'Check for reported accidents, insurance claims, and structural damage that sellers might not mention.',
      features: ['Police report matching', 'Insurance claim history', 'Minor vs Major damage', 'Collision dating'],
      videoImg: '/assets/damage_video.png',
      videoFile: 'Accident_Audit_Live.mp4',
    },
    {
      tag: 'Damage Assessment',
      title: 'Damage Verification',
      text: 'Detailed reports on specific damaged areas, severity of impact, and whether airbags were deployed.',
      features: ['Structural integrity check', 'Airbag deployment tags', 'Component replacement logs', 'Frame damage alerts'],
      videoImg: '/assets/damaged_car_sketch.png',
      videoFile: 'Damage_Forensics_Viz.mp4',
    },
    {
      tag: 'Safety Recalls',
      title: 'Vehicle Recalls',
      text: 'Stay safe by checking if the vehicle has any outstanding safety recalls that need immediate attention.',
      features: ['Manufacturer recall alerts', 'Safety component checks', 'Open vs Closed recall status', 'NHTSA data integration'],
      videoImg: '/assets/video_scanner_bg.png',
      videoFile: 'Safety_Recall_Scanner.mp4',
    },
  ];

  const visibleRows = isExpanded ? featureRows : featureRows.slice(0, 4);

  return (
    <>
      {/* ─────────────── Why Start Here? ─────────────── */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-center mb-16"
            style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}
          >
            Why start here? Because knowledge is{' '}
            <span style={{ fontFamily: '"Kalam", cursive', color: '#0EB075' }}>Power!</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {valueProps.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col"
              >
                <div
                  className="mb-5 flex items-center justify-center"
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: card.iconBg,
                    border: `2px solid ${card.iconBorder}`,
                    borderRadius: '2px',
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: '1.4rem', color: '#1a1a1a' }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-body leading-relaxed"
                  style={{ fontFamily: '"Space Mono", monospace' }}
                >
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── Features Section ─────────────── */}
      <section className="py-20" style={{ backgroundColor: '#F5FDF9' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            className="text-center mb-16"
            style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1a1a1a' }}
          >
            Detailed <span className="wavy-underline" style={{ color: '#111827', textDecorationColor: '#0EB075' }}>Vehicle History</span> Reports
          </h2>

          <div className="space-y-24">
            <AnimatePresence mode="popLayout">
              {visibleRows.map((row, idx) => {
                const isImgLeft = idx % 2 !== 0; // Alternating layout
                return (
                  <motion.div
                    key={row.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: idx % 4 * 0.1 }}
                    className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                  >
                    {/* Text column */}
                    <div className={isImgLeft ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                       <div className="inline-block px-3 py-1 bg-[#E5F7EE] border border-[#004B22] rounded-sm mb-4">
                          <span style={{ fontFamily: '"Space Mono", monospace', fontSize: '12px', fontWeight: 700, color: '#004B22', textTransform: 'uppercase' }}>
                            {row.tag}
                          </span>
                       </div>
                      <h3
                        className="mb-4"
                        style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#1a1a1a', lineHeight: 1.2 }}
                      >
                        {row.title}
                      </h3>
                      <p
                        className="font-body mb-8 leading-relaxed opacity-80"
                        style={{ fontFamily: '"Space Mono", monospace' }}
                      >
                        {row.text}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                        {row.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 font-body" style={{ 
                            color: '#3D4A41', 
                            fontFamily: '"Space Mono", monospace', 
                            fontSize: '1rem', 
                            lineHeight: '1.5rem' 
                          }}>
                            <CheckCircle size={16} color="#0EB075" strokeWidth={2.5} className="shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image/Video column */}
                    <div className={isImgLeft ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                      <div 
                        className="relative sketch-border sketch-shadow overflow-hidden bg-slate-900 aspect-video group cursor-pointer"
                      >
                        <img 
                          src={row.videoImg} 
                          alt={row.tag} 
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-16 h-16 bg-[#0EB075] rounded-full flex items-center justify-center sketch-shadow border-2 border-[#004B22]"
                          >
                            <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1.5"></div>
                          </motion.div>
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 sketch-border-sm text-white text-[11px] font-body flex items-center gap-2" style={{ fontFamily: '"Space Mono", monospace' }}>
                             <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                             {row.videoFile}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {!isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-20 text-center"
            >
              <button 
                onClick={() => setIsExpanded(true)}
                className="secondary-button px-10 py-5 text-xl flex items-center gap-3 mx-auto group"
              >
                <span>Show all features</span>
                <ChevronDown className="group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
