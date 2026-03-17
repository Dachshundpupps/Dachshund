import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Our Puppies</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/available" className="hover:text-primary transition-colors">
                  Available Puppies
                </Link>
              </li>
              <li>
                <Link href="/male" className="hover:text-primary transition-colors">
                  Male Puppies
                </Link>
              </li>
              <li>
                <Link href="/female" className="hover:text-primary transition-colors">
                  Female Puppies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/health-guarantee" className="hover:text-primary transition-colors">
                  Health Guarantee
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-primary transition-colors">
                  Delivery Info
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="hover:text-primary transition-colors">
                  Care Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shop" className="hover:text-primary transition-colors">
                  Toys & Food
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-muted-foreground border-t border-border pt-8">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">Located in Houston, Texas</p>
          <p className="text-sm">
            Reputable miniature dachshund breeders raising healthy, AKC-registered dachshund puppies with love and care.
          </p>
        </div>
      </div>
    </footer>
  )
}
