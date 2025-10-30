import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chasen Wang - Frontend Developer Portfolio',
  description:
    'Creative problem solver with 6+ years of frontend development experience. Specializing in React, Vue, and Next.js. View my projects and experience.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Vue Developer',
    'TypeScript',
    'Next.js',
    'Web Development',
    'Brisbane',
    'Australia',
    'Portfolio',
  ],
  authors: [{ name: 'Chasen Wang' }],
  creator: 'Chasen Wang',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://your-domain.com', // TODO: Update with actual domain
    title: 'Chasen Wang - Frontend Developer',
    description:
      'Creative problem solver with 6+ years of frontend development experience. Specialized in React, Vue, and modern JavaScript.',
    siteName: 'Chasen Wang Portfolio',
    images: [
      {
        url: '/og-image.png', // TODO: Create OG image
        width: 1200,
        height: 630,
        alt: 'Chasen Wang - Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chasen Wang - Frontend Developer',
    description:
      'Frontend Developer specializing in React, Vue, and Next.js. 6+ years of experience building elegant web applications.',
    images: ['/og-image.png'], // TODO: Create OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code', // TODO: Add after Google Search Console setup
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
