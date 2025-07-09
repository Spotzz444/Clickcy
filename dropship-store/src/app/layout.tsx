import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DropShip Store - Your Premium Online Shopping Destination",
  description: "Discover amazing products at unbeatable prices. Fast shipping, secure checkout, and excellent customer service guaranteed.",
  keywords: "ecommerce, online shopping, dropshipping, products, deals",
  authors: [{ name: "DropShip Store" }],
  creator: "DropShip Store",
  publisher: "DropShip Store",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourstore.com",
    title: "DropShip Store - Your Premium Online Shopping Destination",
    description: "Discover amazing products at unbeatable prices. Fast shipping, secure checkout, and excellent customer service guaranteed.",
    siteName: "DropShip Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "DropShip Store - Your Premium Online Shopping Destination",
    description: "Discover amazing products at unbeatable prices. Fast shipping, secure checkout, and excellent customer service guaranteed.",
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
