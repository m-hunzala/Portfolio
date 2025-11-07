import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hunzala Zafar',
  description: 'Professional portfolio of Hunzala Zafar - Full-stack developer, AI engineer, and graphic designer crafting intelligent digital experiences.',
  keywords: ['web developer', 'AI engineer', 'graphic designer', 'full-stack', 'React', 'Next.js', 'Python'],
  authors: [{ name: 'Hunzala Zafar' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicone.ico?v=3', sizes: 'any', type: 'image/x-icon' },
    ],
    shortcut: ['/favicone.ico?v=3'],
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}