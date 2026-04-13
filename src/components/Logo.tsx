"use client";
import React from 'react';

export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <rect width="40" height="40" rx="4" fill="#0EB075" />
        <path d="M10 20C10 14.4772 14.4772 10 20 10V10C25.5228 10 30 14.4772 30 20V24C30 27.3137 27.3137 30 24 30H16C12.6863 30 10 27.3137 10 24V20Z" fill="white" fillOpacity="0.2" />
        <path d="M12 24L18 14L24 24H12Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 26C22 26 23.5 24 25.5 24C27.5 24 29 26 29 26" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-headline text-2xl tracking-tight text-[#004B22]" style={{ fontFamily: '"Gochi Hand", cursive' }}>
        UsedVehiclePro
      </span>
    </div>
  );
}
