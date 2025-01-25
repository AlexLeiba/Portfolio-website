import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Header from '@/components/navigations/Header';
import Footer from '@/components/navigations/Footer';
import { Spacer } from '@/components/UI/spacer/spacer';

import AosInit from '../lib/aosInit';

import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <div className='flex min-h-[100vh] bg-white  flex-col text-black dark:text-white dark:bg-black'>
          <header>
            <Header />
          </header>
          <Spacer size={12} /> {/*Header size*/}
          <main className='flex-grow'>
            <AosInit>{children}</AosInit>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
