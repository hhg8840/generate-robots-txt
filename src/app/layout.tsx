import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes"; // Import useTheme
import { Theme } from "@radix-ui/themes";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Faqs from "@/components/faqs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import "@radix-ui/themes/styles.css";

// Import the new Client Component
import CoupangAds from './coupangAds';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // ... (metadata settings)
  metadataBase: new URL("https://youtubetxt.hankyungmna.com/"),
  title: {
    default: "youtube.txt Generator",
    template: "%s - youtube.txt Generator",
  },
  manifest: "/manifest.json",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/logo.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "any",
      url: "/images/logo.png",
    },
    {
      rel: "apple-touch-icon",
      type: "image/png",
      sizes: "180x180",
      url: "/images/apple-touch-icon.png",
    },
  ],
  description: "youtube.txt Generator Util.",
  openGraph: {
    title: "youtube.txt Generator",
    description: "youtube.txt Generator Util",
    url: "https://youtubetxt.hankyungmna.com/images/og_image.png",
    siteName: "youtube.txt Generator - youtube.txt Generator Util",
    locale: "ko_KO",
    type: "website",
  },
  youtube: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "youtube.txt Generator - youtube.txt Generator Util",
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  // ... (viewport settings)
  themeColor: "#171717",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko" suppressHydrationWarning={true}>
      <head>
        {/* Coupang Ads Scripts - Remove existing script here */}
        {/* The script will now be added dynamically after 10 seconds */}
      </head>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Theme>
          <Analytics />
          <SpeedInsights />
          <Header />
          {children}
          <Faqs />
          <Footer />
          {/* Render the new Client Component */}
          {/*<CoupangAds/>*/}
        </Theme>
      </ThemeProvider>

      <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2248591987136887"
          crossOrigin="anonymous"
      />

      <meta
          name="google-site-verification"
          content="0R-Zwg7kaOBU8J3Z58im_yVflJxXT-_gHVXQulRIAqs"
      />
      </body>
      </html>
  );
}