import { type ReactNode } from 'react';
import { Inter } from 'next/font/google';

// project dependencies
import { SiteFooter, SiteHeader, ThemeProvider } from '@solutionops/components';
// local dependencies
import './global.css';
import { cn } from '@solutionops/utils';

export const metadata = {
  metadataBase: new URL('https://www.solutionops.com/'),
  title: 'Home | SolutionOps',
  description:
    'SolutionOps is a custom software solution company that helps businesses grow. We build custom software solutions to help maximize small to medium sized businesses.',
  author: 'Mason Smith',
  creator: 'Mason Smith',
  keywords: [
    'Mason Smith',
    'Software',
    'Engineer',
    'Custom Software',
    'SolutionOps',
    'Solution Ops',
    'Custom Software Solution',
  ],
  openGraph: {
    title: 'SolutionOps',
    description:
      'SolutionOps is a custom software solution company that helps businesses grow. We build custom software solutions to help maximize small to medium sized businesses.',
    url: 'https://www.solutionops.com/',
    siteName: 'SolutionOps',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 1800,
        height: 1600,
      },
      {
        url: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // robots: {
  //   index: true,
  //   follow: true,
  //   nocache: true,
  //   googleBot: {
  //     index: true,
  //     follow: false,
  //     noimageindex: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
