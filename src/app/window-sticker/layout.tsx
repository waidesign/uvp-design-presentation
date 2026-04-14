import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Window Sticker Lookup by VIN | UsedVehiclePro',
  description: 'Enter your VIN to get the original window sticker (Monroney label) and verify factory equipment, options, and specs for all brands, models, and years.',
};

export default function WindowStickerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
