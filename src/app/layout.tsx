import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Theme } from "@radix-ui/themes";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Contribute from "@/components/contribute";
import Faqs from "@/components/faqs";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://robotstxt.trainingk.ing/"),
  title: {
    default:
      "Robots.txt Generator",
    template: "%s - Robots.txt Generator",
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
  description: "robots.txt Generator Util.",
  openGraph: {
    title: "Robots.txt Generator",
    description: "robots.txt Generator Util",
    url: "https://robotstxt.trainingk.ing/images/og_image.png",
    siteName:
      "Robots.txt Generator - robots.txt Generator Util",
    locale: "ko_KO",
    type: "website",
  },
  robots: {
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
    title:
      "Robots.txt Generator - robots.txt Generator Util",
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#171717",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
    <body className={inter.className}>
    <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
      <Theme>
        <Analytics/>
        <SpeedInsights/>
        <Header/>
        {children}
        <Faqs/>
        {/*<Contribute />*/}
        <Footer/>
      </Theme>
    </ThemeProvider>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1460515233106641"
            crossOrigin="anonymous"></script>
    <meta name="naver-site-verification" content="d7cb7f2c6cc2e515d5b38da4e348691d7f6ddd0f"/>
    <meta name="google-site-verification" content="0R-Zwg7kaOBU8J3Z58im_yVflJxXT-_gHVXQulRIAqs"/>
    {/*<Script*/}
    {/*  async*/}
    {/*  src="https://cloud.umami.is/script.js"*/}
    {/*  data-website-id="03fb5087-8d74-47f2-a3ee-e4725b26e1cd"*/}
    {/*/>*/}
    </body>
    </html>
  );
}
