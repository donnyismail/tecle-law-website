import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Personal Injury Attorney Houston | No Win No Fee - TECLE LAW',
  description: 'Injured in Houston? Get the compensation you deserve. No fees unless we win your case. Free case review. Call (713) 282-5871 today.',
  keywords: ['personal injury', 'Houston attorney', 'car accident lawyer', 'truck accident', 'injury lawyer'],
  openGraph: {
    title: 'Personal Injury Attorney Houston | No Win No Fee',
    description: 'Injured? Get free case review. No fees unless we win.',
    type: 'website',
  },
};

export default function PersonalInjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
