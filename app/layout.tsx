import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { CartProvider } from "@/lib/cart-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://plushimo.com"),
  title: {
    default: "Plushimo - Adorable Plushies | Premium Quality Stuffed Animals",
    template: "%s | Plushimo",
  },
  description:
    "Adorable and high-quality plushies for every home. Creating happiness and joy one hug at a time. Free shipping on orders over €50.",
  keywords: [
    "plushies",
    "stuffed animals",
    "cute plushies",
    "gift ideas",
    "soft toys",
    "teddy bears",
    "kawaii plushies",
    "premium plushies",
  ],
  authors: [{ name: "Plushimo" }],
  creator: "Plushimo",
  publisher: "Plushimo",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "fi-FI": "/",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "fi_FI",
    url: "/",
    siteName: "Plushimo",
    title: "Plushimo - Adorable Premium Plushies",
    description: "Adorable and high-quality plushies for every home. Free shipping on orders over €50.",
    images: [
      {
        url: "/plushimo-logo.png",
        width: 1200,
        height: 630,
        alt: "Plushimo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plushimo - Adorable Premium Plushies",
    description: "Adorable and high-quality plushies for every home.",
    images: ["/plushimo-logo.png"],
    creator: "@plushimo",
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
  category: "E-commerce",
  classification: "Toys & Games",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
