import type { Metadata, Viewport } from "next";
import { fraunces, inter } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://vikrantnalawade.com"
  ),
  title: {
    default: "Vikrant Nalawade — High-Retention Video Editor & Visual Director",
    template: "%s | Vikrant Nalawade",
  },
  description:
    "Official portfolio of Vikrant Nalawade. Specializing in high-retention video editing, viral pacing, and cinematic color science for top influencers, digital creators, and forward-thinking personal brands.",
  keywords: [
    "Vikrant Nalawade",
    "video editor",
    "high retention video editor",
    "influencer video editor",
    "creator video editing",
    "viral video editor",
    "YouTube video editor",
    "Instagram Reels editor",
    "Shorts video editing",
    "podcast video editor",
    "cinematic color grading",
    "sound design",
    "post production specialist",
    "visual director",
    "Mumbai video editor",
  ],
  authors: [{ name: "Vikrant Nalawade", url: "https://www.instagram.com/thatjournoguy" }],
  creator: "Vikrant Nalawade",
  publisher: "Vikrant Nalawade",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Vikrant Nalawade — Video Editor & Visual Director",
    title: "Vikrant Nalawade — High-Retention Video Editor & Visual Director",
    description:
      "High-retention video editing, viral pacing, and cinematic visual direction crafted for top creators, influencers, and visionary brands.",
    images: [
      {
        url: "/logo-vikrant.png",
        width: 920,
        height: 602,
        alt: "Vikrant Nalawade — Video Editor & Visual Director",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vikrant Nalawade — High-Retention Video Editor & Visual Director",
    description:
      "High-retention video editing, viral pacing, and cinematic visual direction crafted for top creators, influencers, and visionary brands.",
    images: ["/logo-vikrant.png"],
    creator: "@thatjournoguy",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Vikrant Nalawade",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body
        className="antialiased font-body"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
