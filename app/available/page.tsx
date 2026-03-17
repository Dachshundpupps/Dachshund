"use client"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useCart } from "@/lib/cart-context"

// Import puppies from male and female pages
import { malePuppies } from "@/app/male/page"
import { femalePuppies } from "@/app/female/page"

export default function AvailablePuppiesPage() {
  const { addToCart } = useCart()
  const [favoriteIds, setFavoriteIds] = useState<Set<number>>(new Set())

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favoriteIds)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavoriteIds(newFavorites)
  }

  const handleAddToCart = (puppy: any) => {
    addToCart({
      id: puppy.id,
      name: puppy.name,
      price: Number.parseInt(puppy.price.replace("$", "")),
      type: "puppy",
      image: puppy.image,
      quantity: 1,
      paymentType: "full",
    })
  }

  // Filter available puppies only
  const availableMalePuppies = malePuppies.filter((p) => p.available === true)
  const availableFemalePuppies = femalePuppies.filter((p) => p.available === true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold mb-4">
              Available Puppies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our beautiful Dachshund puppies looking for their forever homes. Each puppy is health-tested,
              well-socialized, and ready to bring joy to your family.
            </p>
          </div>

          {/* Male Puppies Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Male Puppies</h2>
              <Badge className="bg-blue-600 text-white text-lg px-4 py-1">
                {availableMalePuppies.length} Available
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableMalePuppies.map((puppy) => (
                <Card key={puppy.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <Image
                      src={puppy.image || "/placeholder.svg"}
                      alt={puppy.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <button
                      onClick={() => toggleFavorite(puppy.id)}
                      className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        className={`h-5 w-5 ${favoriteIds.has(puppy.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                      />
                    </button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{puppy.name}</CardTitle>
                    <div className="flex gap-2 flex-wrap mt-2">
                      <Badge variant="secondary">{puppy.age}</Badge>
                      <Badge variant="outline">{puppy.color}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-3 mb-4 flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-3">{puppy.personality}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-semibold text-foreground">Coat:</span>
                          <p className="text-muted-foreground">{puppy.coatType}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Weight:</span>
                          <p className="text-muted-foreground">{puppy.weight}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-3xl font-bold text-primary">{puppy.price}</div>
                      <Button
                        onClick={() => handleAddToCart(puppy)}
                        className="bg-primary text-white hover:bg-primary/90"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Female Puppies Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Female Puppies</h2>
              <Badge className="bg-pink-600 text-white text-lg px-4 py-1">
                {availableFemalePuppies.length} Available
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableFemalePuppies.map((puppy) => (
                <Card key={puppy.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <Image
                      src={puppy.image || "/placeholder.svg"}
                      alt={puppy.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                    <button
                      onClick={() => toggleFavorite(puppy.id)}
                      className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition"
                      aria-label="Add to favorites"
                    >
                      <Heart
                        className={`h-5 w-5 ${favoriteIds.has(puppy.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                      />
                    </button>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{puppy.name}</CardTitle>
                    <div className="flex gap-2 flex-wrap mt-2">
                      <Badge variant="secondary">{puppy.age}</Badge>
                      <Badge variant="outline">{puppy.color}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-3 mb-4 flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-3">{puppy.personality}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="font-semibold text-foreground">Coat:</span>
                          <p className="text-muted-foreground">{puppy.coatType}</p>
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Weight:</span>
                          <p className="text-muted-foreground">{puppy.weight}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="text-3xl font-bold text-primary">{puppy.price}</div>
                      <Button
                        onClick={() => handleAddToCart(puppy)}
                        className="bg-primary text-white hover:bg-primary/90"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Browse by Gender */}
          <div className="mt-16 grid grid-cols-2 gap-6">
            <Link href="/male" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">View All Males</h3>
                  <p className="text-muted-foreground">Browse our complete collection of male Dachshund puppies</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/female" className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition">View All Females</h3>
                  <p className="text-muted-foreground">Browse our complete collection of female Dachshund puppies</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
