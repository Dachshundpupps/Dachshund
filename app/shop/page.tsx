"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Product {
  id: number
  name: string
  category: "toys" | "treats" | "food"
  price: number
  rating: number
  reviews: number
  description: string
  image: string
  inStock: boolean
}

export default function ShopPage() {
  const [cart, setCart] = useState<number[]>([])

  const products: Product[] = [
    {
      id: 1,
      name: "Dachshund Plush Squeaky Toy",
      category: "toys",
      price: 12.99,
      rating: 5,
      reviews: 124,
      description: "Soft plush toy perfect for small breeds with built-in squeaker",
      image: "/products/plush-toy.jpg",
      inStock: true,
    },
    {
      id: 2,
      name: "Interactive Puzzle Toy",
      category: "toys",
      price: 18.99,
      rating: 4,
      reviews: 89,
      description: "Mental stimulation puzzle toy to keep your dachshund engaged",
      image: "/products/puzzle-toy.jpg",
      inStock: true,
    },
    {
      id: 3,
      name: "Rope Tug Toy Set",
      category: "toys",
      price: 14.99,
      rating: 5,
      reviews: 156,
      description: "Durable rope toys for interactive play and dental health",
      image: "/products/rope-toy.jpg",
      inStock: true,
    },
    {
      id: 4,
      name: "Chew Ball with Treat Dispenser",
      category: "toys",
      price: 16.99,
      rating: 4,
      reviews: 98,
      description: "Rubber ball that dispenses treats during play",
      image: "/products/chew-ball.jpg",
      inStock: true,
    },
    {
      id: 5,
      name: "Premium Training Treats",
      category: "treats",
      price: 9.99,
      rating: 5,
      reviews: 203,
      description: "Small, soft training treats perfect for dachshunds",
      image: "/products/training-treats.jpg",
      inStock: true,
    },
    {
      id: 6,
      name: "Dental Chew Sticks",
      category: "treats",
      price: 11.99,
      rating: 5,
      reviews: 167,
      description: "Natural dental chews for healthy teeth and gums",
      image: "/products/dental-chews.jpg",
      inStock: true,
    },
    {
      id: 7,
      name: "Freeze-Dried Chicken Treats",
      category: "treats",
      price: 13.99,
      rating: 5,
      reviews: 189,
      description: "100% pure chicken, freeze-dried for maximum nutrition",
      image: "/products/chicken-treats.jpg",
      inStock: true,
    },
    {
      id: 8,
      name: "Peanut Butter Biscuits",
      category: "treats",
      price: 8.99,
      rating: 4,
      reviews: 142,
      description: "Crunchy biscuits with real peanut butter",
      image: "/products/peanut-butter-biscuits.jpg",
      inStock: false,
    },
    {
      id: 9,
      name: "Small Breed Puppy Food",
      category: "food",
      price: 34.99,
      rating: 5,
      reviews: 312,
      description: "Premium puppy formula for small breeds (5lb bag)",
      image: "/products/puppy-food.jpg",
      inStock: true,
    },
    {
      id: 10,
      name: "Adult Small Breed Formula",
      category: "food",
      price: 39.99,
      rating: 5,
      reviews: 278,
      description: "Complete nutrition for adult dachshunds (10lb bag)",
      image: "/products/adult-food.jpg",
      inStock: true,
    },
    {
      id: 11,
      name: "Grain-Free Chicken Recipe",
      category: "food",
      price: 44.99,
      rating: 4,
      reviews: 156,
      description: "Grain-free formula with real chicken (8lb bag)",
      image: "/products/grain-free-food.jpg",
      inStock: true,
    },
    {
      id: 12,
      name: "Senior Small Breed Food",
      category: "food",
      price: 37.99,
      rating: 5,
      reviews: 134,
      description: "Specially formulated for senior dachshunds (7lb bag)",
      image: "/products/senior-food.jpg",
      inStock: true,
    },
  ]

  const [activeCategory, setActiveCategory] = useState<"all" | "toys" | "treats" | "food">("all")

  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory)

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
    alert("Product added to cart!")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold mb-4 text-balance">
              Dachshund Shop
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Premium toys, treats, and food specially selected for dachshunds
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12" onValueChange={(v) => setActiveCategory(v as any)}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="toys">Toys</TabsTrigger>
              <TabsTrigger value="treats">Treats</TabsTrigger>
              <TabsTrigger value="food">Food</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {!product.inStock && (
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xs ${i < product.rating ? "text-primary" : "text-muted"}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    <Button
                      size="sm"
                      onClick={() => addToCart(product.id)}
                      disabled={!product.inStock}
                      className="gap-2"
                    >
                      🛒 Add
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">Premium products only</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm bg-secondary/30">
              <CardContent className="pt-6 text-center">
                <h3 className="font-semibold text-lg mb-2">Expert Recommendations</h3>
                <p className="text-sm text-muted-foreground">Curated for dachshunds</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">Raising happy, healthy dachshunds with love and care.</p>
        </div>
      </footer>
    </div>
  )
}
