import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Squad 140 | Portfolio',
  description: 'My Squad 140 - Building the future together',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
