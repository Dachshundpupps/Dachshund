import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Home, ArrowRight, Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Our Available Puppies | Long-Haired Mini Dachshund Puppies for Sale",
  description:
    "Meet our adorable long-haired miniature dachshund puppies: Mochi, Moffi, Mofy, Nala, and Draco. Each puppy comes with health guarantee, AKC registration, and lifetime support.",
}

export default function OurPuppiesPage() {
  const puppies = [
    {
      id: "mochi",
      name: "Mochi",
      age: "8 weeks",
      gender: "Female",
      price: "$2,800",
      personality: "Charming, cuddly, and devoted",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meet%20Mochi-a6mBInJNufVGT4NYwRtYb7TWHC1HST.jpeg",
      breed: "Long-Haired Mini Dachshund",
      description: `From the very beginning, Mochi has enchanted everyone she's met. With her luxuriously soft long-haired coat, dainty paws, and heart-melting personality, she's the kind of puppy who leaves paw prints not just on the floor—but on your soul. She's charming, cuddly, a little bit cheeky, and completely devoted once she chooses you as her person.

Whether you're looking for a puppy to join you on daily adventures, or one to curl up beside you through quiet evenings, Mochi is ready to be the love of your life.`,
      includes: [
        "Health & vet records",
        "Small bag of current food",
        "Blanket with litter's scent",
        "Favorite toy",
        "Puppy care and feeding guide",
        "Optional microchip",
        "Ongoing breeder support",
        "Year health guarantee",
      ],
    },
    {
      id: "moffi",
      name: "Moffi",
      age: "8 weeks",
      gender: "Female",
      price: "$2,900",
      personality: "Beautiful, intelligent, and playful",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Moffi-b8KpjsXpJF8B47MZBO674mRJ60Tcni.jpeg",
      breed: "Long-Haired Mini Dachshund (Dapple)",
      description: `When it comes to puppies that truly capture hearts, few can compare to the elegance, charm, and devotion of a long-haired miniature dachshund. Today, we're proud to introduce Moffi, a little bundle of joy who is not only beautiful but also filled with love, intelligence, and playful spirit. If you've been searching for the perfect puppy to join your family, Moffi may just be the one you've been waiting for.

With her stunning dapple coat and gentle nature, Moffi represents the very best of the breed—combining beauty with a loving temperament that makes her an ideal companion.`,
      includes: [
        "Health & vet records",
        "Small bag of current food",
        "Blanket with litter's scent",
        "Favorite toy",
        "Puppy care and feeding guide",
        "Optional microchip",
        "Ongoing breeder support",
        "Year health guarantee",
      ],
    },
    {
      id: "mofy",
      name: "Mofy",
      age: "8 weeks",
      gender: "Female",
      price: "$2,800",
      personality: "Sweet-natured, fluffy, and magical",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meet%20Mofy-xoXaKBonZvkTxnnjkDkxxpj7JkIZMa.jpeg",
      breed: "Long-Haired Mini Dachshund",
      description: `Every once in a while, a puppy comes along who feels like more than a pet — they feel like a little piece of joy wrapped in fur. A tiny heart full of wonder, love, and endless loyalty. That's exactly what you'll find in Mofy, our beautiful long-haired miniature Dachshund puppy.

Mofy isn't just another dog — she's a once-in-a-lifetime companion with a loving soul, a gentle heart, and a bright spirit that makes every day better. If you're looking for a loyal best friend who brings joy, comfort, and love into your life, Mofy is waiting to meet you.`,
      includes: [
        "Health & vet records",
        "Small bag of current food",
        "Blanket with litter's scent",
        "Favorite toy",
        "Puppy care and feeding guide",
        "Optional microchip",
        "Ongoing breeder support",
        "Year health guarantee",
      ],
    },
    {
      id: "nala",
      name: "Nala",
      age: "10 weeks",
      gender: "Female",
      price: "$2,700",
      personality: "Sweet, loyal, curious, and regal",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meet%20Nala-vo7OASX6hID4FQe48j9SxX9jvAY2S3.jpeg",
      breed: "Long-Haired Mini Dachshund",
      description: `To describe Nala in one word is nearly impossible. She's sweet like honey, loyal like a best friend, curious like a toddler, and regal like her name suggests. With just one look into her dark, thoughtful eyes, you'll feel something shift—a small spark, a warm glow, a quiet knowing that this little pup was meant for something big.

At 10 weeks old, Nala has already developed a personality that's both endearing and captivating. She's the perfect blend of playfulness and calm, adventure and cuddles, independence and devotion.`,
      includes: [
        "Health & vet records",
        "Small bag of current food",
        "Blanket with litter's scent",
        "Favorite toy",
        "Puppy care and feeding guide",
        "Optional microchip",
        "Ongoing breeder support",
        "Year health guarantee",
      ],
    },
    {
      id: "draco",
      name: "Draco",
      age: "8 weeks",
      gender: "Male",
      price: "$2,600",
      personality: "Sweet, snuggly, and laid back",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Name%20of%20puppy%20Draco-ksr0RTb92cBzQwWosHhR9DK3OTqtWP.jpeg",
      breed: "Mini Dachshund (Black & Tan Dapple)",
      description: `Say hello to Draco! He is a very sweet and snuggly pup. He loves to play with his littermates. He is very laid back, loves attention, and is very sweet. He has a beautiful black and tan coat with dappled markings. He would love to come home and be your new best friend!

Draco's gentle temperament and affectionate nature make him an ideal companion for families, singles, or anyone looking for a loyal friend who will bring warmth and joy to every day.`,
      includes: [
        "Health & vet records",
        "Small bag of current food",
        "Blanket with litter's scent",
        "Favorite toy",
        "Puppy care and feeding guide",
        "Optional microchip",
        "Ongoing breeder support",
        "Year health guarantee",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            Meet Our Available Puppies
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Each of our long-haired miniature dachshund puppies is raised with love, care, and devotion. They're not
            just puppies—they're future family members waiting to fill your home with joy, laughter, and unconditional
            love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Inquire About a Puppy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/health-guarantee">View Health Guarantee</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Puppies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {puppies.map((puppy, index) => (
            <div
              key={puppy.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={puppy.image || "/placeholder.svg"}
                    alt={`${puppy.name} - ${puppy.age} old ${puppy.gender.toLowerCase()} ${puppy.breed} puppy`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {puppy.breed}
                </div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4">{puppy.name}</h2>
                <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Age:</span>
                    <span className="text-muted-foreground">{puppy.age}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Gender:</span>
                    <span className="text-muted-foreground">{puppy.gender}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">Personality:</span>
                    <span className="text-muted-foreground">{puppy.personality}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  {puppy.description.split("\n\n").map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <Accordion type="single" collapsible className="mb-8">
                  <AccordionItem value="includes" className="border-border">
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      What's Included with {puppy.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-4">
                        {puppy.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Investment</div>
                    <div className="text-4xl font-bold text-primary">{puppy.price}</div>
                  </div>
                  <Button asChild size="lg">
                    <Link href="/contact">
                      Reserve {puppy.name}
                      <Heart className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
            Why Choose Our Dachshund Puppies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Raised with Love</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every puppy is raised in our family home with constant socialization, care, and attention from day
                  one. They're not just puppies—they're part of our family until they become part of yours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Health Guaranteed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All puppies come with comprehensive health certifications, up-to-date vaccinations, and our year-long
                  health guarantee. Your puppy's wellbeing is our top priority.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">Lifetime Support</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're here for you and your puppy for life. From training tips to health questions, we provide ongoing
                  support to ensure a smooth transition and happy life together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Welcome Your New Best Friend?
          </h2>
          <p className="text-lg mb-8 opacity-90 leading-relaxed">
            Each of these puppies is waiting to meet their forever family. Don't miss the chance to bring home a
            companion who will fill your days with love, laughter, and endless joy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/health-guarantee">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
