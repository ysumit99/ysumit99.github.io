import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sumit Yadav | Staff Software Engineer & System Architect',
  description: 'Portfolio of Sumit Yadav, a Staff Software Engineer specializing in scalable full-stack platforms, distributed systems, and AI engineering with React, Next.js, Node.js, and AWS.',
  keywords: [
    'Sumit Yadav', 
    'Staff Engineer', 
    'Tech Lead', 
    'Senior Software Engineer', 
    'Distributed Systems', 
    'Next.js', 
    'React', 
    'AWS', 
    'AI Engineering', 
    'System Architecture'
  ],
  authors: [{ name: 'Sumit Yadav' }],
  creator: 'Sumit Yadav',
  openGraph: {
    title: 'Sumit Yadav | Staff Software Engineer',
    description: 'Building scalable platforms with React, Next.js, Node.js, TypeScript, AWS, Vercel, and AI integrations.',
    url: 'https://ysumit99.github.io/',
    siteName: 'Sumit Yadav Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumit Yadav | Staff Software Engineer',
    description: 'Building scalable platforms with React, Next.js, TypeScript, AWS, and AI integrations.',
    creator: '@ysumit99',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-slate-950 text-slate-200">
        {children}
      </body>
    </html>
  );
}