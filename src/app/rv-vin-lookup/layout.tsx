import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Your RV\'s Value & History by VIN | UsedVehiclePro',
  description: 'Verify RV history including specs, title status, accidents, and market valuation by VIN. Avoid scams and protect your investment in your motorhome or camper.',
};

export default function RVVINLookupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
