import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trusted Classic Car VIN Decoder: Pre-1980 VIN Number Search | UsedVehiclePro',
  description: 'Decode pre-1980 VINs with our Classic Car VIN Decoder. Get a full history report plus specs, title records, auction data, mileage, and value for vintage vehicles.',
};

export default function ClassicVINDecoderLayout({ children }: { children: React.ReactNode }) {
  return children;
}
