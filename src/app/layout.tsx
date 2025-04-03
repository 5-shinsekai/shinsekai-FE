import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// 변경
export const metadata: Metadata = {
  title: {
    default: 'SPHAROS 6TH Rebuilding APP',
    template: '%s | SPHAROS 6TH Rebuilding APP',
  },
  description: '1차프로젝트 SPHAROS 6TH Rebuilding',
  icons: { icon: '/assets/images/icons/icon.png' },
  metadataBase: new URL('https://spharos5th.com'),
  openGraph: {
    url: 'https://spharos6th.com',
    title: 'SPHAROS 6TH',
    description: '1차프로젝트 SPHAROS 6TH',
    images: [{ url: '/assets/images/og/og_image.png' }],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
