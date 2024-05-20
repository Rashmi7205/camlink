import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Camlink: Video Calling App",
  description: "A Zoom-like video conferencing application for online meetings.",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Camlink: Video Calling App</title>
        <meta name="description" content="A Zoom-like video conferencing application for online meetings." />
        <meta name="keywords" content="video conferencing, online meetings, Zoom clone, WebRTC" />
        <link rel="canonical" href="https://meetings-azure.vercel.app/" />
        <meta property="og:title" content="Camlink: Video Calling App" />
        <meta property="og:description" content="A Zoom-like video conferencing application for online meetings." />
        <meta property="og:url" content="https://meetings-azure.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://meetings-azure.vercel.app/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Camlink: Video Calling App" />
        <meta name="twitter:description" content="A Zoom-like video conferencing application for online meetings." />
        <meta name="twitter:image" content="https://meetings-azure.vercel.app/twitter-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://meetings-azure.vercel.app/",
              "name": "Camlink",
              "description": "A Zoom-like video conferencing application for online meetings."
            })
          }}
        />
      </Head>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: '/icons/logo.svg',
            socialButtonsVariant: 'iconButton'
          },
          variables: {
            colorText: '#fff',
            colorPrimary: '#0e78f9',
            colorBackground: '#1c1f2e',
            colorInputBackground: '#252a41',
            colorInputText: '#fff'
          }
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
        <Toaster />
      </ClerkProvider>
    </html>
  );
}
