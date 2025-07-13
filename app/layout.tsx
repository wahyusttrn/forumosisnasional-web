import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900']
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Forum OSIS Nasional',
  description: 'Forum OSIS Nasional - Sebuah organisasi yang diisi dengan ketua OSIS terbaik dari seluruh Nusantara'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${lexend.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
