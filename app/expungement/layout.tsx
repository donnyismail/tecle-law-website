import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Criminal Expungement Houston | Clear Your Record - TECLE LAW',
  description: 'Clear your criminal record in Texas for $1,495 with 100% money-back guarantee. Free eligibility consultation. Call (713) 282-5871 today.',
  keywords: ['expungement', 'criminal record', 'Texas expungement', 'Houston attorney', 'record sealing'],
  openGraph: {
    title: 'Criminal Expungement Houston | $1,495 All-Inclusive',
    description: 'Clear your criminal record with 100% money-back guarantee. Free consultation.',
    type: 'website',
  },
};

export default function ExpungementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
