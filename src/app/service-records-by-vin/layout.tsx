import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Records by VIN – Check Vehicle Maintenance History | UsedVehiclePro',
  description: 'Lookup a vehicle maintenance history by VIN. Get detailed service records, oil change logs, repair history, and dealership maintenance reports for any car.',
};

export default function ServiceRecordsByVINLayout({ children }: { children: React.ReactNode }) {
  return children;
}
