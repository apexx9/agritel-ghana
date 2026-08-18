import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agritelghana.com"),

  title: {
    default: "AgriTel Ghana | Smart Agriculture & Farm Intelligence",
    template: "%s | AgriTel Ghana",
  },

  description:
    "AgriTel Ghana is a smart agriculture platform helping farmers monitor crops, detect pests, and make better farming decisions with technology and data.",

  applicationName: "AgriTel Ghana",

  authors: [
    {
      name: "AgriTel Ghana",
      url: "https://agritelghana.com",
    },
  ],

  creator: "AgriTel Ghana",
  publisher: "AgriTel Ghana",

  keywords: [
    "AgriTel Ghana",
    "smart agriculture Ghana",
    "precision agriculture Ghana",
    "agriculture technology",
    "smart farming",
    "farm monitoring",
    "pest detection",
    "crop monitoring",
    "agritech Ghana",
    "farm technology",
  ],

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_GH",
    url: "https://agritelghana.com",
    siteName: "AgriTel Ghana",
    title: "AgriTel Ghana | Smart Agriculture & Farm Intelligence",
    description:
      "Smart agriculture technology helping farmers monitor crops, detect pests, and make better farming decisions with data.",

    images: [
      {
        url: "https://agritelghana.com/og-green.png",
        width: 1200,
        height: 630,
        alt: "AgriTel Ghana - Smart Agriculture Platform",
      },
      // {
      //   url: "/og-white.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "AgriTel Ghana - Smart Agriculture Platform",
      // },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AgriTel Ghana | Smart Agriculture & Farm Intelligence",
    description:
      "Smart agriculture technology helping farmers monitor crops, detect pests, and make better farming decisions with data.",
    images: ["https://agritelghana.com/og-green.png"], // ["https://agritelghana.com/og-green.png", "https://agritelghana.com/og-white.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
