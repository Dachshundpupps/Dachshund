import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dachshund Puppy Reviews & Testimonials | Happy Families | Dachshund Haven",
  description:
    "Read reviews from 150+ happy families who adopted dachshund puppies from our breeder. 5-star rated miniature dachshund breeders with excellent customer satisfaction.",
  keywords:
    "dachshund puppy reviews, dachshund breeder testimonials, miniature dachshund breeders reviews, buy dachshund puppies online reviews",
  openGraph: {
    title: "Dachshund Puppy Reviews - 150+ Happy Families",
    description: "5-star rated dachshund breeder with excellent customer reviews and testimonials",
    type: "website",
  },
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Austin, TX",
      puppy: "Bella",
      rating: 5,
      date: "January 2025",
      text: "We couldn't be happier with our little Bella! The entire adoption process was smooth and professional. The breeder kept us updated with photos and videos, and Bella arrived healthy and well-socialized. She's brought so much joy to our family!",
      image: "/placeholder.svg?key=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Seattle, WA",
      puppy: "Max",
      rating: 5,
      date: "December 2024",
      text: "Max is absolutely perfect! He came with all his health records, vaccinations, and even a starter kit. The breeder was incredibly knowledgeable and has been available for questions even after adoption. Highly recommend Dachshund Haven!",
      image: "/placeholder.svg?key=michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Denver, CO",
      puppy: "Luna",
      rating: 5,
      date: "November 2024",
      text: "Luna is the sweetest puppy! The breeder clearly puts so much love and care into raising these puppies. She was well-adjusted from day one and has the most wonderful temperament. Thank you for bringing this little angel into our lives!",
      image: "/placeholder.svg?key=emily",
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Portland, OR",
      puppy: "Charlie",
      rating: 5,
      date: "October 2024",
      text: "Outstanding experience from start to finish! The breeder was transparent, communicative, and genuinely cared about finding the right match. Charlie is healthy, happy, and has become an integral part of our family. Worth every penny!",
      image: "/placeholder.svg?key=david",
    },
    {
      id: 5,
      name: "Jessica Martinez",
      location: "Phoenix, AZ",
      puppy: "Daisy",
      rating: 5,
      date: "September 2024",
      text: "Daisy is everything we hoped for and more! The breeder's dedication to health testing and proper socialization really shows. She's confident, friendly, and has the best personality. We're so grateful to have found Dachshund Haven!",
      image: "/placeholder.svg?key=jessica",
    },
    {
      id: 6,
      name: "Robert Williams",
      location: "San Diego, CA",
      puppy: "Rocky",
      rating: 5,
      date: "August 2024",
      text: "Rocky has exceeded all our expectations! The breeder provided excellent support throughout the adoption process and continues to check in on Rocky. He came home healthy, happy, and ready to be part of the family. Highly recommended!",
      image: "/placeholder.svg?key=robert",
    },
  ]

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dachshund Haven",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5.0",
              reviewCount: "150",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />
      <Navigation />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold mb-4 text-balance">
              Dachshund Puppy Reviews & Happy Families
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Read what our families have to say about adopting dachshund puppies from Dachshund Haven
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Happy Families</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5.0</div>
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">Average Rating</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-muted overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">{testimonial.text}</p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Adopted <span className="font-medium text-foreground">{testimonial.puppy}</span>
                    </span>
                    <span className="text-muted-foreground">{testimonial.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-primary text-primary-foreground rounded-2xl p-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Ready to Join Our Happy Dachshund Families?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Start your journey to finding the perfect dachshund puppy companion today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/available"
                className="inline-flex items-center justify-center rounded-md bg-primary-foreground text-primary px-8 py-3 text-base font-medium hover:opacity-90 transition-opacity"
              >
                View Available Puppies
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border-2 border-primary-foreground text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">
            <a href="/" className="hover:text-primary">
              Dachshund Puppies for Sale
            </a>{" "}
            |{" "}
            <a href="/adoption" className="hover:text-primary">
              Adoption Process
            </a>{" "}
            |{" "}
            <a href="/health-guarantee" className="hover:text-primary">
              Health Guarantee
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
