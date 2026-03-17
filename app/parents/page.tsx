import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dachshund Parents | AKC Registered Breeding Dogs | Dachshund Haven",
  description:
    "Meet our AKC registered dachshund parents. Health tested, champion bloodline breeding dogs with excellent temperaments. View our miniature dachshund breeders.",
  keywords:
    "dachshund breeders, AKC registered dachshunds, miniature dachshund breeders, dachshund breeding dogs, champion bloodline dachshunds",
  openGraph: {
    title: "Meet Our Dachshund Parents - Champion Bloodlines",
    description: "AKC registered, health tested dachshund breeding dogs with excellent temperaments",
    type: "website",
  },
}

export default function ParentsPage() {
  const parents = [
    {
      id: 1,
      name: "Duke",
      gender: "Male",
      color: "Red",
      weight: "18 lbs",
      temperament: "Friendly, confident, and playful",
      certifications: ["AKC Registered", "Health Tested", "Champion Bloodline"],
      image: "/red-dachshund-male-dog.jpg",
    },
    {
      id: 2,
      name: "Rosie",
      gender: "Female",
      color: "Black & Tan",
      weight: "16 lbs",
      temperament: "Gentle, loving, and intelligent",
      certifications: ["AKC Registered", "Health Tested", "OFA Certified"],
      image: "/black-and-tan-dachshund-female-dog.jpg",
    },
    {
      id: 3,
      name: "Bruno",
      gender: "Male",
      color: "Chocolate",
      weight: "19 lbs",
      temperament: "Brave, loyal, and energetic",
      certifications: ["AKC Registered", "Health Tested", "Champion Bloodline"],
      image: "/chocolate-dachshund-male-dog.jpg",
      gallery: [
        "/parent-dog-1.jpg",
        "/parent-dog-2.jpg",
        "/parent-dog-3.jpg",
        "/parent-dog-4.jpg",
        "/parent-dog-5.jpg",
        "/parent-dog-6.jpg",
        "/parent-dog-7.jpg",
        "/parent-dog-8.jpg",
        "/parent-dog-9.jpg",
      ],
    },
    {
      id: 4,
      name: "Stella",
      gender: "Female",
      color: "Cream",
      weight: "15 lbs",
      temperament: "Sweet, affectionate, and calm",
      certifications: ["AKC Registered", "Health Tested", "OFA Certified"],
      image: "/cream-dachshund-female-dog.jpg",
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
            description: "Premium AKC registered dachshund breeders with champion bloodline dogs",
            url: "https://dachshundpuppies.shop/parents",
          }),
        }}
      />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold mb-4 text-balance">
              Meet Our AKC Registered Dachshund Parents
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our champion bloodline breeding dogs are carefully selected for excellent health, temperament, and breed
              standards
            </p>
          </div>

          {/* Health & Quality Commitment */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Health Tested</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All parents undergo comprehensive health testing including genetic screening
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AKC Registered</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  All breeding dogs are registered with the American Kennel Club
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Excellent Temperament</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Selected for their friendly, stable, and loving personalities
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Parent Dogs */}
          <div className="grid md:grid-cols-2 gap-8">
            {parents.map((parent) => (
              <Card key={parent.id} className="overflow-hidden border-none shadow-md">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={parent.image || "/placeholder.svg"}
                    alt={parent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold">{parent.name}</h3>
                    <Badge variant={parent.gender === "Male" ? "default" : "secondary"}>{parent.gender}</Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Color:</span>
                      <span className="font-medium">{parent.color}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Weight:</span>
                      <span className="font-medium">{parent.weight}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Temperament:</span>
                      <p className="font-medium mt-1">{parent.temperament}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Certifications:</p>
                    <div className="flex flex-wrap gap-2">
                      {parent.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {parent.gallery && parent.gallery.length > 0 && (
                    <div className="pt-4 border-t border-border mt-4">
                      <p className="text-sm text-muted-foreground mb-3">More Photos:</p>
                      <div className="grid grid-cols-3 gap-2">
                        {parent.gallery.map((photo, index) => (
                          <div key={index} className="aspect-square relative overflow-hidden rounded-lg">
                            <img
                              src={photo || "/placeholder.svg"}
                              alt={`${parent.name} photo ${index + 1}`}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-secondary/30 rounded-2xl p-8 md:p-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-6 text-center">
              Our Dachshund Breeding Philosophy
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Dachshund Haven, we believe that exceptional dachshund puppies come from exceptional parents. Our
                breeding program focuses on producing healthy, well-tempered miniature dachshunds that make wonderful
                family companions.
              </p>
              <p>
                Each of our AKC registered dachshund parents has been carefully selected not only for their adherence to
                breed standards but also for their outstanding personalities and proven health. We conduct comprehensive
                health testing on all breeding dogs to ensure we're producing the healthiest dachshund puppies possible.
              </p>
              <p>
                Our dachshund dogs live as beloved family members in our home, receiving daily love, attention, and
                socialization. This ensures that their puppies are born into a nurturing environment and inherit their
                parents' wonderful temperaments.
              </p>
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
            <a href="/available" className="hover:text-primary">
              Available Dachshunds
            </a>{" "}
            |{" "}
            <a href="/contact" className="hover:text-primary">
              Contact Breeder
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
