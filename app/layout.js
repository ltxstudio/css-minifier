import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  style: ['normal'],
});

export const metadata = {
  title: 'CSS Minifier Tool',
  description: 'Optimize and minify your CSS to reduce file size and improve website performance.',
  author: 'Your Name or Company',
  keywords: 'CSS minifier, CSS compressor, web performance, CSS optimization, tool',
  openGraph: {
    title: 'CSS Minifier Tool',
    description: 'A tool to minify and optimize your CSS files for better performance.',
    url: 'https://yourdomain.com',
    siteName: 'CSS Minifier Tool',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CSS Minifier Tool Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yourtwitterhandle',
    creator: '@yourtwitterhandle',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
        
        {/* Link to the manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Add a favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${poppins.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
