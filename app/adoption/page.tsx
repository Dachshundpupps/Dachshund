import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, MessageCircle, DollarSign, Home, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Adopt a Dachshund Puppy | Adoption Process | Dachshund Haven",
  description:
    "Learn how to adopt a dachshund puppy from our reputable breeder. Simple 4-step adoption process, health guarantee, AKC registration, and lifetime support included.",
  keywords:
    "adopt a dachshund puppy, adopt dachshund puppies, dachshund adoption process, buy dachshund puppies online, reserve dachshund puppies",
  openGraph: {
    title: "Adopt a Dachshund Puppy - Simple 4-Step Process",
    description: "Transparent adoption process with health guarantee and lifetime breeder support",
    type: "website",
  },
}

export default function AdoptionPage() {
  const steps = [
    {
      number: 1,
      icon: FileText,
      title: "Submit Application",
      description:
        "Fill out our adoption application form to tell us about yourself, your home, and what you're looking for in a puppy.",
    },
    {
      number: 2,
      icon: MessageCircle,
      title: "Phone Interview",
      description:
        "We'll schedule a friendly phone call to discuss your application, answer your questions, and help match you with the perfect puppy.",
    },
    {
      number: 3,
      icon: DollarSign,
      title: "Deposit & Reservation",
      description:
        "Once approved, place a deposit to reserve your puppy. We'll keep you updated with photos and videos as they grow.",
    },
    {
      number: 4,
      icon: Home,
      title: "Pickup or Delivery",
      description:
        "When your puppy is ready (typically 8-10 weeks old), arrange pickup or delivery to bring your new family member home!",
    },
  ]

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I adopt a dachshund puppy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our adoption process includes 4 simple steps: Submit an application, complete a phone interview, place a deposit to reserve your puppy, and arrange pickup or delivery when your puppy is ready.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to adopt a dachshund puppy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our dachshund puppies are priced between $2,200 - $2,800 depending on color, markings, and lineage. A $500 non-refundable deposit is required to reserve your puppy.",
                },
              },
            ],
          }),
        }}
      />
      <Navigation />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold mb-4 text-balance">
              How to Adopt a Dachshund Puppy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We make adopting your dachshund puppy simple, transparent, and stress-free
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <Card key={step.number} className="border-none shadow-md">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-2xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="h-6 w-6 text-primary" />
                        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-8 text-center">
              What's Included with Your Puppy
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Health certificate from licensed veterinarian",
                "Up-to-date vaccinations and deworming",
                "AKC registration papers",
                "Microchip identification",
                "1-year health guarantee",
                "Puppy starter kit (food, toys, blanket)",
                "Lifetime breeder support",
                "Training and care guidance",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <Card className="border-none shadow-md bg-secondary/30 mb-16">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-center">
                Pricing & Payment
              </h2>
              <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our dachshund puppies are priced between{" "}
                  <span className="font-semibold text-foreground">$2,200 - $2,800</span> depending on color, markings,
                  and lineage.
                </p>
                <p>
                  A <span className="font-semibold text-foreground">$500 non-refundable deposit</span> is required to
                  reserve your puppy. The remaining balance is due at pickup or before delivery.
                </p>
                <p>
                  We accept cash, bank transfers, and major credit cards. Payment plans may be available for qualified
                  buyers - please inquire for details.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-8 text-center">
              Adoption Requirements
            </h2>
            <div className="max-w-3xl mx-auto bg-card rounded-lg p-8 shadow-sm">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Must be 21 years or older</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Provide proof of residence and identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>If renting, provide landlord approval for pets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Commit to providing proper veterinary care</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Agree to our adoption contract and health guarantee terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>Keep us updated on your puppy's wellbeing</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-4">
              Ready to Adopt a Dachshund Puppy?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contact us today to begin your dachshund adoption journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/available">View Available Puppies</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">
            <a href="/available" className="hover:text-primary">
              Buy Dachshund Puppies Online
            </a>{" "}
            |{" "}
            <a href="/male" className="hover:text-primary">
              Male Dachshund Pups
            </a>{" "}
            |{" "}
            <a href="/female" className="hover:text-primary">
              Female Dachshund Pups
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
