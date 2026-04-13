"use client";
import { motion } from 'motion/react';
import { CheckCircle, AlertTriangle, Zap, Coins } from 'lucide-react';
const damageVideoImg = '/assets/damage_video.png';
const odometerVideoImg = '/assets/odometer_video.png';
const titleVideoImg = '/assets/title_video.png';

export default function Features() {
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
      imgSide: 'right',
      tag: 'Accident & Damage History',
      title: 'Spot damage and write-offs',
      text: 'Our system cross-references 330 million accident records from police reports, insurance claims, and body shop databases across 45 countries.',
      features: ['Structural damage flags', 'Airbag deployment records', 'Total loss / write-off status', 'Repair cost estimates'],
      videoImg: damageVideoImg,
      videoFile: 'Damage_Report_v2.mp4',
    },
    {
      imgSide: 'left',
      tag: 'Odometer & Mileage',
      title: 'Catch odometer rollbacks instantly',
      text: 'Odometer fraud costs buyers billions annually. We verify mileage history checkpoints to expose discrepancies and clocking attempts.',
      features: ['Mileage history timeline', 'Fraud probability score', 'Inspection records', 'Multi-country verification'],
      videoImg: odometerVideoImg,
      videoFile: 'Mileage_Verification_Engine.mp4',
    },
    {
      imgSide: 'right',
      tag: 'Title & Ownership',
      title: 'Uncover hidden title issues',
      text: 'Liens, salvage titles, and flood damage can turn a dream car into a nightmare. We surface all title records so you know exactly what you\'re buying.',
      features: ['Salvage / rebuilt titles', 'Active lien checks', 'Flood & fire damage', 'Number of owners'],
      videoImg: titleVideoImg,
      videoFile: 'Title_Audit_Live.mp4',
    },
  ];

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
                  style={{ fontSize: '13px', color: '#4a5568', fontFamily: '"Space Mono", monospace' }}
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
            We check what sellers{' '}
            <span style={{ fontFamily: '"Kalam", cursive', color: '#0EB075' }}>won't tell you</span>
          </h2>

          {featureRows.map((row, idx) => (
            <div
              key={idx}
              className={`grid lg:grid-cols-2 gap-12 items-center ${idx < featureRows.length - 1 ? 'mb-24' : ''}`}
            >
              {/* Text column */}
              <div className={row.imgSide === 'left' ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                <h3
                  className="mb-4"
                  style={{ fontFamily: '"Gochi Hand", cursive', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: '#1a1a1a' }}
                >
                  {row.title}
                </h3>
                <p
                  className="font-body mb-6 leading-relaxed"
                  style={{ fontSize: '13px', color: '#4a5568', fontFamily: '"Space Mono", monospace' }}
                >
                  {row.text}
                </p>
                <ul className="space-y-2">
                  {row.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 font-body" style={{ 
                      color: '#3D4A41', 
                      fontFamily: '"Space Mono", monospace', 
                      fontSize: '1.125rem', 
                      fontStyle: 'normal', 
                      fontWeight: 400, 
                      lineHeight: '1.75rem' 
                    }}>
                      <CheckCircle size={16} color="#0EB075" strokeWidth={2} className="shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column */}
              <div className={row.imgSide === 'left' ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                <div 
                  className="relative sketch-border sketch-shadow overflow-hidden bg-slate-900 aspect-video group cursor-pointer"
                >
                  <img 
                    src={row.videoImg} 
                    alt={row.tag} 
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#0EB075] rounded-full flex items-center justify-center sketch-shadow group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1.5"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 sketch-border-sm text-white text-[10px] font-body inline-block" style={{ fontFamily: '"Space Mono", monospace' }}>
                       {row.videoFile}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
