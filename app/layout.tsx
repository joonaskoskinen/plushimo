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
    default: "Plushimo - Söpöjä Pehmoeläimiä | Laadukkaita Pehmoleluja",
    template: "%s | Plushimo",
  },
  description:
    "Söpöjä ja laadukkaita pehmoleluja jokaiseen kotiin. Luomme onnea ja iloa yksi halaus kerrallaan. Ilmainen toimitus yli 50€ tilauksiin.",
  keywords: ["pehmoeläimet", "pehmolelut", "söpöt pehmot", "lahjaideat", "plushies", "stuffed animals"],
  authors: [{ name: "Plushimo" }],
  creator: "Plushimo",
  publisher: "Plushimo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: "/",
    siteName: "Plushimo",
    title: "Plushimo - Söpöjä Pehmoeläimiä",
    description: "Söpöjä ja laadukkaita pehmoleluja jokaiseen kotiin. Ilmainen toimitus yli 50€ tilauksiin.",
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
    title: "Plushimo - Söpöjä Pehmoeläimiä",
    description: "Söpöjä ja laadukkaita pehmoleluja jokaiseen kotiin.",
    images: ["/plushimo-logo.png"],
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
    <html lang="fi">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
