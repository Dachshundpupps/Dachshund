import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Home, Users } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Reputable Dachshund Breeders | Dachshund Haven",
  description:
    "Learn about Dachshund Haven, a reputable dachshund breeder since 2021. AKC registered, health-tested breeding dogs, home-raised puppies, and lifetime support.",
  keywords:
    "about dachshund breeder, reputable dachshund breeders, AKC dachshund breeder, miniature dachshund breeders",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dachshund Haven",
            description:
              "Reputable dachshund breeder specializing in healthy, AKC registered miniature dachshund puppies",
            foundingDate: "2021",
            url: "https://dachshundpuppiesonline.shop",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Houston",
              addressRegion: "TX",
              addressCountry: "US",
            },
          }),
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4">
            About Dachshund Haven - Reputable Dachshund Breeders
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to breeding healthy, happy AKC registered dachshunds in Houston, Texas since 2021.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden mb-16">
          <Image
            src="/dachshund-puppies-playing-together.jpg"
            alt="Dachshund puppies playing"
            fill
            className="object-cover"
          />
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-6 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Welcome to Dachshund Haven! Our journey began in 2021 in Houston, Texas, with a simple love for these
              charming, spirited little dogs. What started as a passion project has grown into a dedicated breeding
              program focused on producing healthy, well-socialized dachshund puppies.
            </p>
            <p>
              We believe that every puppy deserves the best start in life. That's why we've created a nurturing
              environment where our dogs are treated as family members, not just breeding stock. Our puppies are raised
              in our home, surrounded by love, attention, and early socialization to ensure they grow into confident,
              friendly companions.
            </p>
            <p>
              Over the years, we've placed hundreds of puppies with families across the country, and nothing brings us
              more joy than seeing the lifelong bonds that form between our puppies and their new families. We're not
              just breeders—we're matchmakers, connecting the perfect puppy with the perfect home.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Health First</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive health testing and veterinary care for all our dogs
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Quality Breeding</h3>
              <p className="text-sm text-muted-foreground">
                AKC registered dogs with excellent pedigrees and temperaments
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Home Raised</h3>
              <p className="text-sm text-muted-foreground">
                Puppies raised in our home with early socialization and love
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Lifetime Support</h3>
              <p className="text-sm text-muted-foreground">
                We're here for you and your puppy throughout their entire life
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Breeding Philosophy */}
        <Card className="mb-16">
          <CardContent className="pt-6">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-6 text-center">
              Our Breeding Philosophy
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Dachshund Haven, we adhere to the highest standards of ethical breeding. Our philosophy is built on
                three core principles:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Health & Genetics:</strong> All breeding dogs undergo
                    comprehensive health testing including genetic screening for hereditary conditions common in
                    dachshunds. We only breed dogs that meet strict health criteria.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Temperament:</strong> We carefully select breeding pairs based
                    on temperament, ensuring our puppies inherit the friendly, confident, and loving nature that makes
                    dachshunds such wonderful companions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Responsible Practices:</strong> We limit the number of litters
                    per year, allow adequate rest between litters, and retire our breeding dogs to loving pet homes
                    where they can enjoy their golden years.
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Facility */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-6 text-center">
            Our Facility
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Our breeding program operates from our family home in Houston, Texas, on a spacious property where our
                dogs have plenty of room to play and exercise. We maintain a clean, safe, and enriching environment that
                promotes the physical and mental wellbeing of all our dogs.
              </p>
              <p className="text-muted-foreground mb-4">
                Puppies are whelped and raised in a dedicated nursery area within our home, where they receive
                round-the-clock care and attention. As they grow, they're gradually introduced to household sights,
                sounds, and experiences to prepare them for life in their new homes.
              </p>
              <p className="text-muted-foreground">
                We welcome visits by appointment! If you'd like to see our facility, meet our dogs, and learn more about
                our breeding program, please contact us to schedule a visit.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-accent/50">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4">
                Ready to Find Your Perfect Puppy?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Browse our available puppies or contact us to learn more about upcoming litters and our adoption
                process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/available"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Available Puppies
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">Located in Houston, Texas</p>
          <p className="text-sm">
            <a href="/" className="hover:text-primary">
              Dachshund Puppies for Sale
            </a>{" "}
            |{" "}
            <a href="/testimonials" className="hover:text-primary">
              Customer Reviews
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
