import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Bill of Sale Template for Car Sellers & Buyers | UsedVehiclePro',
  description: 'Download a free, legally binding vehicle bill of sale template. Protect yourself during private car sales with state-specific forms and documentation.',
};

export default function BillOfSaleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
