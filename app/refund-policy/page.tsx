import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, XCircle, Clock, FileText } from "lucide-react"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Refund Policy | Dachshund Puppy Returns | Dachshund Haven",
  description:
    "Review our dachshund puppy refund policy including eligibility, timeframes, and non-refundable items. Transparent policies for buying dachshund puppies online.",
  keywords: "dachshund puppy refund policy, dachshund breeder returns, buy dachshund puppies online policy",
}

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4">
            Dachshund Puppy Refund Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We want you to be completely satisfied with your new dachshund family member. Please review our refund
            policy carefully.
          </p>
        </div>

        <div className="space-y-8">
          {/* Eligibility */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <CardTitle>Refund Eligibility</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Refunds may be granted under the following circumstances:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Serious health issues discovered within 72 hours of delivery, verified by a licensed veterinarian
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Cancellation made at least 14 days before scheduled pickup/delivery date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Puppy significantly differs from description provided (breed, color, or gender)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>We are unable to fulfill the adoption due to unforeseen circumstances</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Timeframe */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>Refund Timeframe</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Before Delivery</h4>
                  <p className="text-muted-foreground">
                    Cancellations made 14+ days before delivery: Full refund minus deposit (50%)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Within 72 Hours</h4>
                  <p className="text-muted-foreground">
                    Health-related returns with vet documentation: Full refund including deposit
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Processing Time</h4>
                  <p className="text-muted-foreground">
                    Approved refunds are processed within 7-10 business days to original payment method
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Non-Refundable */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-destructive" />
                <CardTitle>Non-Refundable Items</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">The following items and fees are non-refundable:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>
                    Reservation deposits (50% of total price) for cancellations made less than 14 days before delivery
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Delivery and transportation fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Application processing fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Shop items (toys, food, treats) once opened or used</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Returns due to buyer's remorse or change of mind after delivery</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Refund Process */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <CardTitle>How to Request a Refund</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">1.</span>
                  <span>Contact us immediately via phone or email with your order number and reason for refund</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">2.</span>
                  <span>For health-related returns, provide veterinary documentation within 72 hours of delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">3.</span>
                  <span>Complete the refund request form below or contact us directly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">4.</span>
                  <span>Our team will review your request within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-semibold text-primary">5.</span>
                  <span>If approved, refund will be processed to your original payment method</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Refund Inquiry Form</CardTitle>
              <CardDescription>
                Fill out this form to request a refund or ask questions about our refund policy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="order">Order Number</Label>
                    <Input id="order" placeholder="#12345" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason for Refund Request</Label>
                  <Textarea id="reason" placeholder="Please provide details about your refund request..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Submit Refund Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">
            <a href="/" className="hover:text-primary">
              Dachshund Puppies for Sale
            </a>{" "}
            |{" "}
            <a href="/health-guarantee" className="hover:text-primary">
              Health Guarantee
            </a>{" "}
            |{" "}
            <a href="/contact" className="hover:text-primary">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
