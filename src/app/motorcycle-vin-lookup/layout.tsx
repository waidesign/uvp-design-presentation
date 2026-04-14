import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motorcycle VIN Lookup: Accidents and Theft Records | UsedVehiclePro',
  description: 'Check your motorcycle\'s history with our specialized VIN lookup. Verify specifications, accident reports, theft history, and salvage titles before you buy.',
};

export default function MotorcycleVINLookupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
