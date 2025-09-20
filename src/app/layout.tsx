import type { Metadata } from 'next';
import { Lobster } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const lobster = Lobster({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Send a coffee in seconds.',
  description:
    'Brontie is Ireland’s first café gifting platform — no app, no login, just simple gifting.',
  icons: { icon: '/images/favicon.png', apple: '/images/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Cookiebot — must load before any tags that use cookies */}
        <Script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="tYvKBFyuVse4-B"
          async
        />
      </head>
      <body className={`${lobster.className} coffeE-gift-main-wrapper-area`}>
        {children}
      </body>
    </html>
  );
}
