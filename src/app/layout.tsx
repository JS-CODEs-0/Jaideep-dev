import type { Metadata } from 'next';
import { Instrument_Serif, JetBrains_Mono, Inter } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jaideep Singh — Software & AI Engineer',
  description:
    'Gothic computational archive documenting software engineering, AI systems infrastructure, and technical work by Jaideep Singh.',
  keywords: [
    'Jaideep Singh',
    'Software Engineer',
    'AI Engineer',
    'Systems Engineering',
    'Machine Learning',
    'Fullstack Developer',
    'India',
  ],
  authors: [{ name: 'Jaideep Singh' }],
  metadataBase: new URL('https://jaideepsingh.dev'),
  openGraph: {
    title: 'Jaideep Singh — Software & AI Engineer',
    description:
      'Gothic computational archive documenting software engineering, AI systems infrastructure, and technical work.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Jaideep Singh Portfolio',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${inter.variable}`}
    >
      <body className="bg-obsidian text-parchment font-sans antialiased min-h-screen selection:bg-border-accent selection:text-bone">
        <SmoothScroll>
          <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden pt-16">
            <Navigation />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
