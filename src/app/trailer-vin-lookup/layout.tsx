import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trailer VIN Lookup – Check Specs, Title & Theft History | UsedVehiclePro',
  description: 'Easily lookup trailer history by VIN. Verify specifications, accident reports, theft history, and past ownership for utility, cargo, horse, and boat trailers.',
};

export default function TrailerVINLookupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
