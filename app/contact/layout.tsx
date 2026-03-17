import type React from "react"
import type { Metadata } from "next"
import ContactLayoutClient from "./contact-layout-client"

export const metadata: Metadata = {
  title: "Contact Dachshund Breeder | Get in Touch | Dachshund Haven",
  description:
    "Contact our dachshund breeder for questions about available puppies, adoption process, or to reserve a dachshund puppy. Phone, email, and contact form available.",
  keywords:
    "contact dachshund breeder, dachshund puppies for sale contact, reserve dachshund puppies, buy dachshund puppies online",
  openGraph: {
    title: "Contact Dachshund Haven - Reputable Dachshund Breeder",
    description: "Get in touch with our dachshund breeder for questions about available puppies",
    type: "website",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ContactLayoutClient>{children}</ContactLayoutClient>
}
