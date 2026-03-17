"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  const router = useRouter()
  const [orderDetails, setOrderDetails] = useState<any>(null)

  useEffect(() => {
    const details = sessionStorage.getItem("orderDetails")
    if (!details) {
      router.push("/")
      return
    }
    const parsedDetails = JSON.parse(details)
    setOrderDetails(parsedDetails)
  }, [router])

  if (!orderDetails) {
    return null
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">Thank you for your order. We'll be in touch shortly!</p>
          </div>

          <Card className="border-none shadow-md mb-8">
            <CardContent className="p-8">
              <div className="mb-6">
                <h2 className="font-semibold text-xl mb-2">Order Number</h2>
                <p className="text-3xl font-bold text-primary">{orderDetails.orderNumber}</p>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <h2 className="font-semibold text-xl mb-4">Order Details</h2>
                <div className="space-y-3">
                  {orderDetails.cart.map((item: any) => (
                    <div key={`${item.type}-${item.id}`} className="flex justify-between">
                      <span>
                        {item.name} {item.quantity && item.quantity > 1 ? `(×${item.quantity})` : ""}
                      </span>
                      <span className="font-medium">${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t border-border pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6 mb-6">
                <h2 className="font-semibold text-xl mb-4">Customer Information</h2>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Name:</strong> {orderDetails.customerInfo.firstName} {orderDetails.customerInfo.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {orderDetails.customerInfo.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {orderDetails.customerInfo.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {orderDetails.customerInfo.address}, {orderDetails.customerInfo.city},{" "}
                    {orderDetails.customerInfo.state} {orderDetails.customerInfo.zipCode}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h2 className="font-semibold text-xl mb-4">Payment Method</h2>
                <p className="capitalize">{orderDetails.paymentMethod}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md bg-secondary/30 mb-8">
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">What's Next?</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>
                    Your order has been saved. Please contact us at support@dachshundpuppiesonline.shop for
                    confirmation.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>Our team will contact you within 24 hours to finalize delivery arrangements.</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>We'll coordinate the best delivery or pickup option for your new family member!</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Return Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/orders">View My Orders</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
