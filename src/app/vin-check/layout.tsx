import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VIN Check – See Vehicle\'s History and Records in Seconds | UsedVehiclePro',
  description: 'Run a VIN check and get the full vehicle history before buying. Check title status, accidents, liens, odometer fraud, recalls, and auction records — no sign-up required.',
};

export default function VinCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
