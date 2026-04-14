import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Build Sheet by VIN – Get Original Factory Specs | UsedVehiclePro',
  description: 'Lookup your vehicle build sheet by VIN to verify original equipment, option codes (RPOs), paint codes, and production details for any car or truck.',
};

export default function BuildSheetByVINLayout({ children }: { children: React.ReactNode }) {
  return children;
}
