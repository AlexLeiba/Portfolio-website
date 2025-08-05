import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from '@/components/navigations/Header';
import Footer from '@/components/navigations/Footer';
import { Spacer } from '@/components/UI/spacer/spacer';

import AosInit from '../lib/aosInit';

import { Toaster } from 'react-hot-toast';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { ThemeProvider } from '@/lib/useThemeContext';
import { ProgressBar } from '@/components/ProgressBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const baseUrl = 'https://alex-leiba-portfolio.netlify.app/';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Portfolio website which showcases skills , education , projects , contact details',
  openGraph: {
    title: 'Portfolio',
    description:
      'Portfolio website which showcases skills , education , projects , contact details',
    url: baseUrl,
    siteName: 'alex-leiba-portfolio.netlify.app',
    images: [
      {
        url: 'https://res.cloudinary.com/deixj28ym/image/upload/v1754379930/travel-plan/qamzwu6szygpu8wcpdsc.webp', // Full URL required
        width: 1200,
        height: 630,
        alt: 'Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster />
          <ProgressBar />
          <div className='flex min-h-[100vh] bg-white  flex-col text-black dark:text-white dark:bg-black overflow-hidden'>
            <header>
              <Header />
            </header>
            <Spacer size={12} /> {/*Header size*/}
            <main className='flex-grow'>
              <AosInit>{children}</AosInit>
              <ScrollToTopButton />
            </main>
            <footer>
              <Footer />
            </footer>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
