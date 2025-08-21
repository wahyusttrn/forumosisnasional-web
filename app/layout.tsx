import type React from 'react';
import type { Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

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
  title: {
    default: 'Forum OSIS Nasional - Wadah Aspirasi Pelajar Indonesia',
    template: '%s | Forum OSIS Nasional'
  },
  description:
    'Forum OSIS Nasional (FON) adalah wadah representasi pelajar Indonesia yang mengedepankan pengembangan moral, karakter, dan intelektual melalui 3B (Bersinergi, Berdampak & Berkelanjutan).',
  keywords:
    'Forum OSIS Nasional, FON, OSIS, pelajar Indonesia, organisasi siswa, pendidikan, kepemudaan, #OSISUntukIndonesia',
  authors: [{ name: 'Forum OSIS Nasional' }],
  creator: 'Forum OSIS Nasional',
  publisher: 'Forum OSIS Nasional',
  metadataBase: new URL('https://forumosisnasional.org'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://forumosisnasional.org',
    title: 'Forum OSIS Nasional - Wadah Aspirasi Pelajar Indonesia',
    description:
      'Forum OSIS Nasional (FON) adalah wadah representasi pelajar Indonesia yang mengedepankan pengembangan moral, karakter, dan intelektual.',
    siteName: 'Forum OSIS Nasional',
    images: [
      {
        url: '/logo_FON.png',
        width: 1200,
        height: 630,
        alt: 'Logo Forum OSIS Nasional'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forum OSIS Nasional - Wadah Aspirasi Pelajar Indonesia',
    description:
      'Forum OSIS Nasional (FON) adalah wadah representasi pelajar Indonesia yang mengedepankan pengembangan moral, karakter, dan intelektual.',
    images: ['/logo_FON.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${lexend.variable}`}>
      <body className="font-body antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
