import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About TECLE LAW | Houston Personal Injury & Expungement Attorney',
  description: "Meet TECLE LAW, PLLC - Houston's trusted personal injury and criminal expungement attorney. Experienced legal representation with personalized attention.",
  openGraph: {
    title: 'About TECLE LAW | Houston Attorney',
    description: 'Experienced legal representation with personalized attention.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
