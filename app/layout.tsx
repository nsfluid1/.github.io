import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'NSFluid',
    template: '%s | NSFluid',
  },
  description: 'Independent news platform.',
  metadataBase: new URL('https://nsfluid.com'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 antialiased min-h-screen font-sans">{children}</body>
    </html>
  );
}
