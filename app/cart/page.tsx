"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()
  const router = useRouter()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Start adding puppies or products to your cart to begin your journey!
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/available">Browse Puppies</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/shop">Shop Products</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-8">Your Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <Card key={`${item.type}-${item.id}`} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <div className="flex gap-2 items-center">
                              <p className="text-sm text-muted-foreground capitalize">{item.type}</p>
                              {item.type === "puppy" && item.paymentType && (
                                <Badge variant={item.paymentType === "deposit" ? "secondary" : "default"}>
                                  {item.paymentType === "deposit" ? "50% Deposit" : "Full Payment"}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            {item.paymentType === "deposit" ? (
                              <div>
                                <span className="text-xl font-bold text-primary">${(item.price * 0.5).toFixed(2)}</span>
                                <span className="text-sm text-muted-foreground ml-2 line-through">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>
                            ) : (
                              <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                            )}
                          </div>
                          {item.type === "product" && (
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity || 1}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-none shadow-md sticky top-24">
                <CardContent className="p-6">
                  <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">Calculated at checkout</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="font-semibold text-lg">Total</span>
                        <span className="font-bold text-2xl text-primary">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Button size="lg" className="w-full" onClick={() => router.push("/checkout")}>
                    Proceed to Checkout
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full mt-3 bg-transparent">
                    <Link href="/available">Continue Shopping</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
