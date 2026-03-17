"use client"

import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useCart } from "@/lib/cart-context"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  const { cart, cartTotal, clearCart } = useCart()
  const router = useRouter()
  const [paymentMethod, setPaymentMethod] = useState("")
  const [customerInfo, setCustomerInfo] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const info = sessionStorage.getItem("customerInfo")
    if (!info) {
      router.push("/checkout")
      return
    }
    setCustomerInfo(JSON.parse(info))
  }, [router])

  if (cart.length === 0 || !customerInfo) {
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!paymentMethod) {
      alert("Please select a payment method")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerInfo,
          cartItems: cart,
          paymentMethod,
          totalAmount: cartTotal,
        }),
      })

      let result
      try {
        result = await response.json()
      } catch (parseError) {
        console.error("Order creation error: JSON parse failed", parseError)
        const text = await response.text()
        console.error("Response text:", text)
        throw new Error(`Invalid response format from server. Please contact support.`)
      }

      if (!response.ok) {
        alert(
          `Failed to submit order: ${result.error || "Unknown error"}\n\nPlease contact support@dachshundpuppiesonline.shop`,
        )
        return
      }

      if (!result.success) {
        throw new Error(result.error || "Failed to create order")
      }

      const orderDetails = {
        customerInfo,
        cart,
        total: cartTotal,
        paymentMethod,
        orderDate: result.order.created_at,
        orderNumber: result.order.order_number,
        orderId: result.order.id,
      }

      sessionStorage.setItem("orderDetails", JSON.stringify(orderDetails))

      if (typeof window !== "undefined") {
        const existingNotifications = JSON.parse(localStorage.getItem("orderNotifications") || "[]")
        existingNotifications.push({
          orderNumber: result.order.order_number,
          customerName: customerInfo.name,
          timestamp: new Date().toISOString(),
        })
        localStorage.setItem("orderNotifications", JSON.stringify(existingNotifications))
      }

      clearCart()
      router.push("/confirmation")
    } catch (error) {
      console.error("Order submission error:", error)
      alert("Failed to submit order. Please try again or contact support at support@dachshundpuppiesonline.shop")
    } finally {
      setIsSubmitting(false)
    }
  }

  const paymentMethods = [
    {
      id: "zelle",
      name: "Zelle",
      logo: "/images/zelle-website.webp",
    },
    {
      id: "chime",
      name: "Chime",
      logo: "/images/images.jpeg",
    },
    {
      id: "applepay",
      name: "Apple Pay",
      logo: "/images/apple-pay-og.jpg",
    },
    {
      id: "bitcoin",
      name: "Bitcoin",
      logo: "/images/bitcoin.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/checkout"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Checkout
          </Link>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-8">Payment</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Payment Methods */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Select Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        {paymentMethods.map((method) => (
                          <div key={method.id}>
                            <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                              <RadioGroupItem value={method.id} id={method.id} />
                              <Label htmlFor={method.id} className="flex items-center gap-4 cursor-pointer flex-1">
                                <div className="h-16 w-24 flex items-center justify-center bg-muted rounded overflow-hidden">
                                  <Image
                                    src={method.logo || "/placeholder.svg"}
                                    alt={method.name}
                                    width={96}
                                    height={64}
                                    className="object-contain"
                                    unoptimized
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="font-semibold">{method.name}</div>
                                </div>
                              </Label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>

                    {paymentMethod && (
                      <div className="mt-6">
                        {paymentMethod === "bitcoin" ? (
                          <Alert>
                            <Info className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Bitcoin Payment Address:</strong>
                              <br />
                              <code className="block mt-2 p-2 bg-muted rounded text-xs break-all">
                                bc1qknfng0dzzvlf6afqd0y54a054n55vqmm07c5nw
                              </code>
                              <br />
                              Please send the exact amount to this address. Once payment is confirmed, we will contact
                              you to complete the order.
                            </AlertDescription>
                          </Alert>
                        ) : (
                          <Alert>
                            <Info className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Contact support for payment details.</strong>
                              <br />
                              After submitting your order, please contact us at{" "}
                              <a
                                href="mailto:support@dachshundpuppiesonline.shop"
                                className="text-primary hover:underline"
                              >
                                support@dachshundpuppiesonline.shop
                              </a>{" "}
                              to receive payment instructions for {paymentMethod}.
                            </AlertDescription>
                          </Alert>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-none shadow-md sticky top-24">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {cart.map((item) => {
                        const itemTotal = item.price * (item.quantity || 1)
                        const finalPrice = item.paymentType === "deposit" ? itemTotal * 0.5 : itemTotal
                        return (
                          <div key={`${item.type}-${item.id}`} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                {item.name} {item.quantity && item.quantity > 1 ? `(×${item.quantity})` : ""}
                              </span>
                              <span className="font-medium">${finalPrice.toFixed(2)}</span>
                            </div>
                            {item.paymentType === "deposit" && (
                              <div className="flex justify-end">
                                <Badge variant="secondary" className="text-xs">
                                  50% Deposit
                                </Badge>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold text-lg">Total</span>
                        <span className="font-bold text-2xl text-primary">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <Button type="submit" size="lg" className="w-full" disabled={!paymentMethod || isSubmitting}>
                      {isSubmitting ? "Processing..." : "Complete Order"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
