import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Warranty by VIN – Is Your Vehicle Still Protected? | UsedVehiclePro',
  description: 'Find out if your vehicle is still under factory warranty. Check bumper-to-bumper, powertrain, and emissions coverage by VIN for Ford, Chevy, Toyota, and more.',
};

export default function WarrantyByVINLayout({ children }: { children: React.ReactNode }) {
  return children;
}
