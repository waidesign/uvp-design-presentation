import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heavy and Semi Truck VIN Lookup: Get Full History Report | UsedVehiclePro',
  description: 'Lookup commercial and heavy-duty truck history by VIN. Get factory specs, recalls, ownership records, and DOT compliance data for semi-trucks and fleet vehicles.',
};

export default function TruckVINLookupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
