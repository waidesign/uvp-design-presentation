import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Title Check – Lookup a Free Title by VIN Instantly | UsedVehiclePro',
  description: 'Run a vehicle title check by VIN to get history including title brands, odometer readings, liens, theft records, and accidents in one source. Fast and secure.',
};

export default function TitleCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
