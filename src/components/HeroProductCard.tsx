"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, AlertTriangle, CheckCircle, XCircle, Clock, FileText, TrendingDown, Gauge, MapPin } from 'lucide-react';

const DEMO_VIN = '1HGCM82633A004352';

type Phase = 'idle' | 'scanning' | 'done';

const FINDINGS = [
  {
    icon: <AlertTriangle size={14} className="shrink-0" />,
    label: '1 Accident Reported',
    sub: 'Front-end structural damage — Oct 2019',
    status: 'warn',
    delay: 0.1,
  },
  {
    icon: <XCircle size={14} className="shrink-0" />,
    label: 'Odometer Rollback Detected',
    sub: 'Jumped 22,000 miles between records',
    status: 'bad',
    delay: 0.25,
  },
  {
    icon: <CheckCircle size={14} className="shrink-0" />,
    label: 'Title: Clean',
    sub: 'No salvage, flood, or lemon history',
    status: 'good',
    delay: 0.4,
  },
  {
    icon: <CheckCircle size={14} className="shrink-0" />,
    label: '11 Service Records',
    sub: 'Last serviced 3 months ago',
    status: 'good',
    delay: 0.55,
  },
  {
    icon: <XCircle size={14} className="shrink-0" />,
    label: '2 Open Recalls',
    sub: 'Airbag inflator — unrepaired',
    status: 'bad',
    delay: 0.7,
  },
  {
    icon: <TrendingDown size={14} className="shrink-0" />,
    label: 'Market Value: $8,400',
    sub: 'Listed $2,100 above fair market price',
    status: 'warn',
    delay: 0.85,
  },
];

const statusStyles: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  good: { bg: '#F0FDF4', text: '#15803d', border: '#86efac', dot: '#22c55e' },
  warn: { bg: '#FFFBEB', text: '#b45309', border: '#fcd34d', dot: '#f59e0b' },
  bad: { bg: '#FEF2F2', text: '#b91c1c', border: '#fca5a5', dot: '#ef4444' },
};

export default function HeroProductCard() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [displayedVin, setDisplayedVin] = useState('');

  // Auto-start on mount, loop every 7s
  useEffect(() => {
    const run = () => {
      setPhase('idle');
      setDisplayedVin('');
      setScanProgress(0);

      // Type the VIN character by character
      let i = 0;
      const typeInterval = setInterval(() => {
        i++;
        setDisplayedVin(DEMO_VIN.slice(0, i));
        if (i >= DEMO_VIN.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setPhase('scanning');
            // Animate progress bar
            let p = 0;
            const prog = setInterval(() => {
              p += 2;
              setScanProgress(p);
              if (p >= 100) {
                clearInterval(prog);
                setPhase('done');
              }
            }, 30);
          }, 400);
        }
      }, 60);
    };

    run();
    const loop = setInterval(run, 9000);
    return () => clearInterval(loop);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="w-full max-w-[460px] mx-auto"
      style={{ fontFamily: '"Space Mono", monospace' }}
    >
      {/* Browser-chrome wrapper */}
      <div
        style={{
          background: '#fff',
          border: '2px solid #004B22',
          borderRadius: '12px',
          boxShadow: '6px 6px 0 0 #004B22',
          overflow: 'hidden',
        }}
      >
        {/* Top bar */}
        <div
          style={{
            background: '#F5FDF9',
            borderBottom: '1.5px solid #e2e8f0',
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', gap: '6px' }}>
            {['#ef4444', '#f59e0b', '#22c55e'].map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, border: '1px solid rgba(0,0,0,0.1)' }} />
            ))}
          </div>
          {/* VIN Input area */}
          <div
            style={{
              flex: 1,
              background: '#fff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '6px',
              padding: '4px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              color: '#64748b',
              minWidth: 0,
            }}
          >
            <Gauge size={11} style={{ color: '#0EB075', flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', letterSpacing: '0.05em' }}>
              {displayedVin || <span style={{ color: '#cbd5e1' }}>Enter VIN…</span>}
              {phase === 'idle' && displayedVin.length < DEMO_VIN.length && (
                <span style={{ display: 'inline-block', width: '1px', height: '12px', background: '#0EB075', marginLeft: '1px', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
              )}
            </span>
          </div>
          <div
            style={{
              background: '#0EB075',
              color: '#fff',
              border: '1.5px solid #004B22',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: 700,
              padding: '4px 10px',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            RUN REPORT
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '16px' }}>
          {/* Vehicle identity card */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '14px' }}>
            <div
              style={{
                background: '#F5FDF9',
                border: '1.5px solid #d1fae5',
                borderRadius: '8px',
                padding: '8px 12px',
                flex: 1,
              }}
            >
              <div style={{ fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Vehicle Identified</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>2014 Toyota Corolla</div>
              <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>LE Sedan · 1.8L 4-Cyl · FWD</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#64748b' }}>
                <MapPin size={10} style={{ color: '#0EB075' }} /> Texas, USA
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#64748b' }}>
                <Gauge size={10} style={{ color: '#0EB075' }} /> 87,420 mi
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: '#64748b' }}>
                <Clock size={10} style={{ color: '#0EB075' }} /> 3 owners
              </div>
            </div>
          </div>

          {/* Scanning bar */}
          <AnimatePresence>
            {phase === 'scanning' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{ marginBottom: '14px', overflow: 'hidden' }}
              >
                <div style={{ fontSize: '10px', color: '#64748b', marginBottom: '6px', display: 'flex', justifyContent: 'space-between' }}>
                  <span>🔍 Scanning 330M+ records…</span>
                  <span style={{ color: '#0EB075', fontWeight: 700 }}>{scanProgress}%</span>
                </div>
                <div style={{ background: '#e2e8f0', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                  <motion.div
                    style={{
                      background: 'linear-gradient(90deg, #0EB075, #004B22)',
                      height: '100%',
                      borderRadius: '4px',
                      width: `${scanProgress}%`,
                    }}
                    transition={{ duration: 0.03 }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '6px', marginTop: '6px', flexWrap: 'wrap' }}>
                  {['NHTSA', 'CARFAX DB', 'State DMV', 'Insurance', 'Auction'].map((src, i) => (
                    <div key={i} style={{ fontSize: '8px', background: '#F0FDF4', border: '1px solid #86efac', color: '#15803d', borderRadius: '3px', padding: '2px 5px' }}>
                      ✓ {src}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Findings */}
          <AnimatePresence>
            {phase === 'done' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}
              >
                {/* Header row */}
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <FileText size={12} style={{ color: '#0EB075' }} />
                    <span style={{ fontSize: '10px', fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Report Summary</span>
                  </div>
                  <div style={{
                    fontSize: '9px',
                    background: '#FEF2F2',
                    color: '#b91c1c',
                    border: '1px solid #fca5a5',
                    borderRadius: '10px',
                    padding: '2px 8px',
                    fontWeight: 700,
                  }}>
                    ⚠ 3 Issues Found
                  </div>
                </motion.div>

                {FINDINGS.map((f, i) => {
                  const s = statusStyles[f.status];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: f.delay, duration: 0.3 }}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        background: s.bg,
                        border: `1px solid ${s.border}`,
                        borderRadius: '6px',
                        padding: '7px 10px',
                      }}
                    >
                      <div style={{ color: s.text, marginTop: '1px' }}>{f.icon}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: '11px', fontWeight: 700, color: s.text, lineHeight: 1.3 }}>{f.label}</div>
                        <div style={{ fontSize: '9px', color: '#64748b', marginTop: '1px', lineHeight: 1.4 }}>{f.sub}</div>
                      </div>
                      <div style={{ width: 7, height: 7, borderRadius: '50%', background: s.dot, flexShrink: 0, marginTop: '3px' }} />
                    </motion.div>
                  );
                })}

                {/* CTA strip */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  style={{
                    marginTop: '4px',
                    background: '#004B22',
                    borderRadius: '6px',
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '10px', color: '#86efac', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Full Report Ready</div>
                    <div style={{ fontSize: '12px', color: '#fff', fontWeight: 700 }}>Unlock all 47 data points →</div>
                  </div>
                  <div style={{
                    background: '#0EB075',
                    color: '#fff',
                    borderRadius: '4px',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '5px 10px',
                    border: '1px solid #86efac',
                    flexShrink: 0,
                  }}>
                    $24.99
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Idle placeholder */}
          {phase === 'idle' && displayedVin.length === 0 && (
            <div style={{ textAlign: 'center', padding: '20px 0', color: '#cbd5e1', fontSize: '11px' }}>
              <ShieldCheck size={28} style={{ margin: '0 auto 8px', color: '#d1fae5' }} />
              Enter a VIN to get started
            </div>
          )}
        </div>
      </div>

      {/* Floating trust badges */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { label: '330M+ Records', color: '#0EB075' },
          { label: '45+ Countries', color: '#004B22' },
          { label: 'Instant Results', color: '#0EB075' },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.1 }}
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: b.color,
              background: '#F5FDF9',
              border: `1.5px solid ${b.color}`,
              borderRadius: '20px',
              padding: '4px 12px',
              fontFamily: '"Space Mono", monospace',
            }}
          >
            ✓ {b.label}
          </motion.div>
        ))}
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </motion.div>
  );
}
