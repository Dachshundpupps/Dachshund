import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "@/app/client-layout"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Dachshund Puppies for Sale | AKC Registered | Dachshund Haven",
  description:
    "Find healthy, AKC-registered dachshund puppies for sale with nationwide delivery and health guarantee. Reputable miniature dachshund breeders with 50% reservation option.",
  keywords: [
    "dachshund puppies for sale",
    "miniature dachshund puppies",
    "AKC registered dachshund",
    "dachshund breeders",
    "healthy dachshund puppies",
    "dachshund puppies near me",
    "wiener dog puppies",
    "dachshund puppies with health guarantee",
  ],
  authors: [{ name: "Dachshund Haven" }],
  creator: "Dachshund Haven",
  publisher: "Dachshund Haven",
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
    locale: "en_US",
    url: "https://dachshundpuppiesonline.shop",
    siteName: "Dachshund Haven",
    title: "Dachshund Puppies for Sale | AKC Registered",
    description:
      "Find healthy, AKC-registered dachshund puppies for sale with nationwide delivery and health guarantee.",
    images: [
      {
        url: "https://dachshundpuppiesonline.shop/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adorable Dachshund Puppies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dachshund Puppies for Sale | AKC Registered",
    description:
      "Find healthy, AKC-registered dachshund puppies for sale with nationwide delivery and health guarantee.",
    images: ["https://dachshundpuppiesonline.shop/og-image.jpg"],
  },
  verification: {
    google: "aTyDjBHenLDB9MhZnZbqgdAa1dZMO0GzuoM7G3tSuoY",
    other: {
      "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: "Dachshund Haven",
    description: "Premium AKC-registered dachshund puppies for sale with health guarantee and nationwide delivery",
    url: "https://dachshundpuppiesonline.shop",
    telephone: "+13235447099",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    image: "https://dachshundpuppiesonline.shop/og-image.jpg",
    sameAs: [
      // Add your social media URLs here when available
    ],
  }

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="aTyDjBHenLDB9MhZnZbqgdAa1dZMO0GzuoM7G3tSuoY" />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="canonical" href="https://dachshundpuppiesonline.shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B4513" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
