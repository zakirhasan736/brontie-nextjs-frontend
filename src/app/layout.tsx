import type { Metadata } from 'next';
import { Lobster } from 'next/font/google';
import './globals.css';

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
      {/* ✅ Apply Lobster font */}
      <body className={`${lobster.className} coffeE-gift-main-wrapper-area`}>
        {children}
      </body>
    </html>
  );
}
