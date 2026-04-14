import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lien Check by VIN – Verify Car Owner and Financial Status | UsedVehiclePro',
  description: 'Instantly check if a vehicle has any active liens or undisclosed loans. Scan 330M+ records to ensure you aren\'t inheriting someone else\'s debt. Fast, private, and official.',
};

export default function LienCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
