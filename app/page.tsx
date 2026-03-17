import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroCarousel } from "@/components/hero-carousel"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Healthy Dachshund Puppies for Sale | AKC Registered | Nationwide Delivery",
  description:
    "Find adorable, AKC-registered dachshund puppies for sale. Miniature and standard dachshunds available with health guarantees and delivery options. Reputable dachshund breeders near you with smooth coat, long-haired dachshund puppies.",
  keywords:
    "dachshund puppies for sale, miniature dachshund puppies, long-haired dachshund puppies, AKC registered dachshund, dachshund breeders near me, dachshund puppy adoption, smooth coat dachshund, dachshund puppy care tips, dachshund puppy training, dachshund puppy delivery, healthy dachshund puppies, dachshund puppy price, dachshund puppy food, dachshund puppy toys, dachshund puppy health guarantee",
  openGraph: {
    title: "Healthy Dachshund Puppies for Sale | AKC Registered Breeders",
    description:
      "Find healthy, AKC-registered dachshund puppies for sale with nationwide delivery and health guarantee. Miniature dachshund breeders with smooth coat, long-haired puppies available.",
    images: ["/adorable-dachshund-puppies-playing-together.jpg"],
  },
}

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Plush Squeaky Toy",
      category: "Toys",
      price: "$12.99",
      image: "/products/plush-toy.jpg",
    },
    {
      id: 2,
      name: "Interactive Puzzle Toy",
      category: "Toys",
      price: "$18.99",
      image: "/products/puzzle-toy.jpg",
    },
    {
      id: 3,
      name: "Rope Tug Toy Set",
      category: "Toys",
      price: "$14.99",
      image: "/products/rope-toy.jpg",
    },
    {
      id: 5,
      name: "Training Treats",
      category: "Treats",
      price: "$9.99",
      image: "/products/training-treats.jpg",
    },
    {
      id: 6,
      name: "Dental Chew Sticks",
      category: "Treats",
      price: "$11.99",
      image: "/products/dental-chews.jpg",
    },
    {
      id: 7,
      name: "Freeze-Dried Chicken",
      category: "Treats",
      price: "$13.99",
      image: "/products/chicken-treats.jpg",
    },
    {
      id: 9,
      name: "Small Breed Puppy Food",
      category: "Food",
      price: "$34.99",
      image: "/products/puppy-food.jpg",
    },
    {
      id: 10,
      name: "Adult Small Breed Formula",
      category: "Food",
      price: "$39.99",
      image: "/products/adult-food.jpg",
    },
    {
      id: 11,
      name: "Grain-Free Chicken Recipe",
      category: "Food",
      price: "$44.99",
      image: "/products/grain-free-food.jpg",
    },
  ]

  const featuredPuppies: never[] = []

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "PetStore",
    name: "Dachshund Haven",
    description:
      "Reputable dachshund kennel offering healthy, AKC-registered miniature and standard dachshund puppies for sale with health guarantee and nationwide delivery",
    url: "https://dachshundpuppiesonline.shop",
    logo: "https://dachshundpuppiesonline.shop/logo.png",
    image: "https://dachshundpuppiesonline.shop/placeholder.svg?height=630&width=1200&query=adorable dachshund puppies",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Houston",
      addressRegion: "TX",
      addressCountry: "US",
    },
    telephone: "+1 (323) 544-7099",
    email: "support@dachshundpuppiesonline.shop",
    sameAs: ["https://facebook.com/dachshundpuppies", "https://instagram.com/dachshundpuppies"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  }

  const productSchema = featuredPuppies.map((puppy) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${puppy.name} - ${puppy.gender} Dachshund Puppy`,
    description: `${puppy.age} old ${puppy.gender.toLowerCase()} dachshund puppy. ${puppy.personality}. AKC registered with health guarantee.`,
    image: `https://dachshundpuppiesonline.shop${puppy.image}`,
    offers: {
      "@type": "Offer",
      price: puppy.price.replace("$", "").replace(",", ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Dachshund Haven",
      },
    },
    brand: {
      "@type": "Brand",
      name: "Dachshund Haven",
    },
  }))

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are your dachshund puppies AKC registered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our dachshund puppies are AKC registered and come with full registration papers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer a health guarantee for dachshund puppies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide a comprehensive health guarantee for all our dachshund puppies, including health certifications and vaccinations.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver dachshund puppies nationwide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer nationwide delivery options for our dachshund puppies with both ground and air transport available.",
        },
      },
      {
        "@type": "Question",
        name: "What types of dachshund puppies do you have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have miniature and standard dachshund puppies in various coat types including smooth coat and long-haired varieties.",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen">
        <HeroCarousel />

        <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-serif text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
                  Welcome to Dachshund Haven
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Discover your perfect companion from our family of healthy, AKC-registered dachshund puppies. Each
                  puppy is raised with love in Houston, Texas, and comes with a comprehensive health guarantee, lifetime
                  support, and nationwide delivery options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg">
                    <Link href="/available">View Available Puppies</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/miniature-dachshund-puppy-red-coat.jpg"
                  alt="Miniature dachshund puppy - healthy and AKC registered"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Dachshund Puppies section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Why Choose Our Dachshund Puppies?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">Healthy, Well-Bred Puppies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We prioritize the health and well-being of our puppies. Our Dachshund puppies come from responsible,
                    professional breeders who follow strict breeding standards to ensure they are free of genetic issues
                    and are in excellent health.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">Socialization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our puppies are raised in a loving, family environment where they are socialized early with people,
                    other pets, and different sounds. This ensures they grow into confident, well-adjusted dogs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">Breed-Specific Traits</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dachshunds are known for their unique personalities. Whether they're cuddling up for some downtime
                    or ready for play, our puppies reflect the loving, fun nature that the breed is known for.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">Vaccinated and Vet-Checked</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each of our puppies is up-to-date on vaccinations and deworming before they leave for their forever
                    homes. We also provide a full vet check to ensure they're in perfect health.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-xl font-semibold mb-4">Health Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We stand behind the quality of our puppies. Our health guarantee ensures that your new Dachshund
                    puppy is a sound investment in a loving, lifelong companion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Premium Products for Your Puppy
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Shop our carefully selected toys, treats, and foods specially chosen for dachshunds
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-accent uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <Button asChild size="sm" variant="outline">
                        <Link href="/shop">Take Me to Shop</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/shop">Shop All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pet Services section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">Our Pet Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Professional care and training services for your beloved pets
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4">Pet Sitting</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Reliable Pet Sitting Services You Can Trust! We provide loving, attentive care for your pets while
                    you're away. From feeding and playtime to walks and cuddles, we treat your pets like family!
                  </p>
                  <Button asChild>
                    <Link href="/contact">Contact us today</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4">Pet Minding</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Trusted Pet Minding Services — Care You Can Count On! Keep your pets happy and stress-free while
                    you're away. We provide personalized attention, playtime, and love just like you would!
                  </p>
                  <Button asChild>
                    <Link href="/contact">Book our reliable pet minding services today</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4">Pet Training</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Professional Pet Training — Teach, Train, and Transform! From basic obedience to advanced skills, we
                    help your pets become well-behaved companions. Our gentle, effective training methods ensure lasting
                    results.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Contact us today to schedule expert training</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4">Grooming</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Pamper Your Pet with Our Professional Grooming Services! Keep your pets looking fresh, clean, and
                    healthy with our expert grooming. We offer bathing, trimming, nail care, and more — all with a
                    gentle touch.
                  </p>
                  <Button asChild>
                    <Link href="/contact">Book your pet's grooming appointment today</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance">
                What's Included with Purchase
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Every puppy comes with comprehensive care and guarantees for your peace of mind
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold mb-2">✓ 10-Year Health Commitment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We stand behind our puppies with a comprehensive 10-year health commitment, ensuring your puppy's
                      long-term wellbeing.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold mb-2">✓ Microchip</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All puppies are microchipped for permanent identification and your peace of mind.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold mb-2">✓ Fully Vetted Breeder</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We are a reputable, fully vetted breeder committed to ethical breeding practices and puppy
                      welfare.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold mb-2">✓ Nose-to-Tail Veterinarian Health Check</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Each puppy receives a comprehensive nose-to-tail veterinarian health check before going home. You
                      will receive copies of your pup's health records upon pickup.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold mb-2">✓ Vaccinations & Deworming</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your puppy will be current on all vaccinations and deworming before going home, ensuring they're
                      protected and healthy.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <h3 className="font-serif text-xl font-semibold mb-2">✓ Complete Vet Records</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Receive complete veterinary records documenting all health checks, vaccinations, and treatments
                      for your puppy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/health-guarantee">Read More About Our Health Guarantee →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Dachshunds Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance">About Dachshunds</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Dachshund puppies are playful and affectionate companions with a unique long body and short legs,
                originally bred in Germany for hunting badgers. They come in three sizes (standard, miniature, and the
                smaller kaninchen) and three coat types (smooth, longhaired, and wirehaired), and require training,
                socialization, and care to prevent back injuries and manage barking.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4">Key Characteristics</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Temperament:</strong> Playful, friendly, energetic, and sometimes stubborn, making them
                        good watchdogs
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Sizes:</strong> Standard, miniature, and kaninchen (rabbit dog)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Coat types:</strong> Smooth, longhaired, and wirehaired
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Vocalization:</strong> Can be vocal, may bark excessively due to boredom or separation
                        anxiety
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4">Care and Training</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Exercise:</strong> Two daily walks of moderate length to build strong muscles and
                        support their backs
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Training:</strong> Intelligent but can be stubborn. Basic training required with mental
                        challenges
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Grooming:</strong> Needs vary by coat type. Smooth-haired need simple wiping, longhaired
                        require more brushing
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Health:</strong> Prone to back issues (IVDD) due to long spine. Maintaining healthy
                        weight is crucial
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardContent className="pt-8">
                  <h3 className="font-serif text-2xl font-semibold mb-4">Choosing Your Puppy</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Health screenings:</strong> Look for breeders who perform necessary health screenings on
                        parents
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Breeder reputation:</strong> Consider reputable breeders transparent about health and
                        temperament
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Cost:</strong> Price ranges from $500 to $3,500 depending on breeder, location, and coat
                        type
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong>Socialization:</strong> Important to introduce them to new experiences and other dogs
                        gradually
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                  Welcome to Dachshund Haven
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Welcome to Dachshund Haven, reputable dachshund breeders near you specializing in healthy, AKC
                  registered dachshund puppies. We raise miniature dachshund puppies and standard dachshunds with smooth
                  coat and long-haired varieties. Each dachshund puppy for sale comes with comprehensive dachshund puppy
                  health guarantee, vaccinations, and lifetime support. Located in Houston, Texas, we offer dachshund
                  puppy delivery nationwide. Reserve your puppy today with our 50% deposit option or buy dachshund puppy
                  online with full payment.
                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/miniature-dachshund-puppy-red-coat.jpg"
                  alt="Miniature dachshund puppy - healthy and AKC registered"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive care and support for your dachshund puppy journey
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl mb-4">🚚</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Nationwide Delivery</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Safe and reliable ground and air transport delivery options available across the United States.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/delivery">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl mb-4">🩺</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Health Guarantee</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive health guarantee with all puppies, including vaccinations and health certifications.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/health-guarantee">View Details</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Puppy Care Guide</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Complete care guide covering feeding, training, grooming, and health care for your new puppy.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/care-guide">Read Guide</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Lifetime Support</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We're here for you and your puppy for life with expert guidance and support whenever you need it.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-16 text-balance">
              Why Choose Our Reputable Dachshund Breeders
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-sm">
                <CardContent className="pt-8 text-center">
                  <div className="text-5xl mb-6">❤️</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Raised with Love</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every healthy dachshund puppy is raised in our family home in Houston, Texas with constant
                    socialization and dachshund puppy care from day one. Our miniature dachshund breeders ensure proper
                    temperament development and early dachshund puppy training.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-8 text-center">
                  <div className="text-5xl mb-6">🛡️</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Health Guaranteed</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All AKC-registered dachshund puppies come with health certifications, vaccinations, premium
                    dachshund puppy food, and our comprehensive{" "}
                    <Link href="/health-guarantee" className="text-primary hover:underline">
                      dachshund puppy health guarantee
                    </Link>
                    . We test all breeding dogs for genetic health.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm">
                <CardContent className="pt-8 text-center">
                  <div className="text-5xl mb-6">🏠</div>
                  <h3 className="font-serif text-2xl font-semibold mb-4">Lifetime Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're here for you and your puppy for life with dachshund puppy care tips, training guidance,
                    support, and our{" "}
                    <Link href="/care-guide" className="text-primary hover:underline">
                      comprehensive care guide
                    </Link>{" "}
                    whenever you need it.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Puppies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Featured Miniature Dachshund Puppies for Sale
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet some of our adorable AKC-registered miniature dachshund puppies currently available for dachshund
                puppy adoption. All puppies come with health guarantee, dachshund puppy toys starter kit, and premium
                dachshund puppy food samples. Reserve with 50% deposit or buy dachshund puppy online today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredPuppies
                .filter((puppy) => !puppy.featured)
                .map((puppy) => (
                  <Card
                    key={puppy.id}
                    className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={puppy.image || "/placeholder.svg"}
                        alt={`${puppy.name} - ${puppy.gender} ${puppy.age} old miniature dachshund puppy for sale - AKC registered - ${puppy.personality} - healthy dachshund puppy with health guarantee`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-2xl font-semibold mb-2">{puppy.name}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground mb-4">
                        <p>
                          <span className="font-medium text-foreground">Age:</span> {puppy.age}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Gender:</span> {puppy.gender}
                        </p>
                        <p>
                          <span className="font-medium text-foreground">Personality:</span> {puppy.personality}
                        </p>
                        {puppy.registration && (
                          <p>
                            <span className="font-medium text-foreground">Registration:</span> {puppy.registration}
                          </p>
                        )}
                        {puppy.health && (
                          <p>
                            <span className="font-medium text-foreground">Health:</span> {puppy.health}
                          </p>
                        )}
                        {puppy.description && (
                          <p>
                            <span className="font-medium text-foreground">Description:</span> {puppy.description}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{puppy.price}</span>
                        <Button asChild>
                          <Link href="/contact">Inquire</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/available">
                  View All Available Puppies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Explore Our Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-12 text-balance">
              Explore Our Dachshund Puppy Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/male" className="group">
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      Male Dachshund Puppies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Browse our male miniature dachshund puppies for sale
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/female" className="group">
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      Female Dachshund Puppies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      View our female dachshund puppies with smooth coat and long-haired options
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/delivery" className="group">
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      Dachshund Puppy Delivery
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Nationwide dachshund puppy delivery service available
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/health-guarantee" className="group">
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      Health Guarantee
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive dachshund puppy health guarantee included
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <Link href="/shop" className="group">
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      Dachshund Puppy Toys & Food
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Shop premium dachshund puppy toys and food essentials
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/care-guide" className="group">
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      Dachshund Puppy Care Tips
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Read our comprehensive dachshund puppy care guide and training tips
                    </p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/puppy-preparation" className="group">
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      Puppy Preparation
                    </h3>
                    <p className="text-sm text-muted-foreground">Everything you need to prepare for your new puppy</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Welcome a Healthy Dachshund Puppy into Your Family?
            </h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Start your dachshund puppy adoption process today with our reputable dachshund breeders near Houston,
              Texas. Find the perfect AKC registered miniature dachshund puppy who will bring joy and love to your home.
              Reserve with 50% deposit or buy dachshund puppy online with full payment. Nationwide dachshund puppy
              delivery available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/health-guarantee">View Health Guarantee</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
