"use client"

import type React from "react"
import { Suspense, useEffect } from "react"
import { usePathname } from "next/navigation"
import { CartProvider } from "@/lib/cart-context"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { ChatwayWidget } from "@/components/chatway-widget"

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <CartProvider>
        <ScrollToTop />
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <WhatsAppWidget />
        <ChatwayWidget />
      </CartProvider>
      {/* <Analytics /> */}
    </>
  )
}

export default ClientLayout
