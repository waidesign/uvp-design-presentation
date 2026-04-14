import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ATV VIN Check – Lookup Accident Records, Mileage & More | UsedVehiclePro',
  description: 'Get an ATV / UTV report before buying used. Check off-road vehicle specs, accident history, flood damage, mileage, and title status by VIN.',
};

export default function ATVVINCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
