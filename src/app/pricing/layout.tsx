import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Plans – Vehicle History Reports & Window Stickers | UsedVehiclePro',
  description: 'View our transparent, affordable pricing for vehicle history reports and window stickers. Get single reports, bulk packages, or dealership subscriptions with no hidden fees.',
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
