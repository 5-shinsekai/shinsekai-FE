import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { SidebarContextProvider } from '@/context/SideBarContext';
import { Sidebar } from '@/components/commons/SideBar';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
      <body
        className={`${inter.variable} ${pretendard.className}  ${pretendard.variable} antialiased`}
      >
        <SidebarContextProvider>
          <Sidebar />
          {children}
        </SidebarContextProvider>
      </body>
    </html>
  );
}
