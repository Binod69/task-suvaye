import './globals.css';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import { Navbar, Footer } from './Components';

const vazirmatn = Vazirmatn({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Suvaye Search',
  description: 'Suvaye Search for Dictionary',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
