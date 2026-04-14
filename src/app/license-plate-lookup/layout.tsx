import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'License Plate Lookup – Unlock Vehicle History in Seconds | UsedVehiclePro',
  description: 'Run a license plate lookup to access hidden vehicle history: accidents, ownership, theft, title brands, odometer fraud, and more across all 50 U.S. states.',
};

export default function LicensePlateLookupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
