import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stolen VIN Check: Verify Theft Records and Vehicle History | UsedVehiclePro',
  description: 'Run a stolen vehicle check by VIN to identify theft records, recovery status, and police markings. Protect yourself from buying stolen assets.',
};

export default function StolenVINCheckLayout({ children }: { children: React.ReactNode }) {
  return children;
}
