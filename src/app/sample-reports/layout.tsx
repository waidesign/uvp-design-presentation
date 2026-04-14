import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sample Vehicle History Reports & Window Stickers | UsedVehiclePro',
  description: 'View sample vehicle history reports and original factory window stickers for cars, trucks, motorcycles, RVs, and ATVs before you buy.',
};

export default function SampleReportsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
