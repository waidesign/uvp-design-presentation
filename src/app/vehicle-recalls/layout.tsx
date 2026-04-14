import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vehicle Recall Check – Safety Alerts for Your VIN | UsedVehiclePro',
  description: 'Check for open safety recalls by VIN. Get official alerts from NHTSA and manufacturers. Learn how to get free repairs for safety-related defects.',
};

export default function VehicleRecallsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
