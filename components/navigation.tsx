"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingBag, Mail, Phone } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { cartCount } = useCart()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/available", label: "All Available Puppies" },
    { href: "/male", label: "Available Male Puppies" },
    { href: "/female", label: "Available Female Puppies" },
    { href: "/sold-reserved", label: "Sold & Reserved Puppies" },
    { href: "/book-appointment", label: "Book Appointment" },
    { href: "/health-guarantee", label: "Health Guarantee" },
    { href: "/delivery", label: "Delivery" },
    { href: "/care-guide", label: "Care Guide" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="bg-primary text-primary-foreground py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
          <a
            href="mailto:support@dachshundpuppiesonline.shop"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Mail size={16} />
            <span>support@dachshundpuppiesonline.shop</span>
          </a>
          <a
            href="https://wa.me/13235447099"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone size={16} />
            <span>WhatsApp: +1 (323) 544-7099</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.jpg"
              alt="Dachshund Puppies Haven Logo"
              width={200}
              height={60}
              className="h-12 w-auto group-hover:opacity-80 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/cart" className="relative p-2 text-foreground/70 hover:text-primary transition-colors">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <Link href="/cart" className="relative p-2 text-foreground">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-primary/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
