"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, MessageCircle, Check } from "lucide-react"

export default function BookAppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitAppointment = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all required fields")
      return
    }

    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-appointment-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferredDate: formData.date,
          preferredTime: formData.time,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrorMessage(data.error || "Failed to submit appointment")
        return
      }

      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      })

      // Show success for 5 seconds then reset
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Appointment submission error:", error)
      setErrorMessage("Failed to submit appointment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance">
              Book Available Puppies Viewing Appointment
            </h1>
            <p className="text-lg text-muted-foreground">We love meeting our future puppy parents in person!</p>
          </div>

          {/* Appointment Details Card */}
          <Card className="mb-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Appointment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Appointment Fee</h3>
                    <p className="text-muted-foreground">$300 (Discuss payment options with our team)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Viewing Hours</h3>
                    <p className="text-muted-foreground">Monday – Saturday, 10:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h3 className="font-semibold mb-3">What Your $300 Fee Includes:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Secures your spot to visit and meet our puppies in person</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Credited toward your final puppy purchase if you decide to buy</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Refundable if you choose to cancel or decide not to move forward</span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Ensures we only schedule serious and verified visitors</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>How to Book</CardTitle>
              <CardDescription>Follow these simple steps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Step 1: Fill Out Application */}
                <div className="border-l-4 border-primary pl-6 pb-6">
                  <h3 className="font-semibold text-lg mb-4">Step 1: Complete Your Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Select Date & Time */}
                <div className="border-l-4 border-primary pl-6 pb-6">
                  <h3 className="font-semibold text-lg mb-4">Step 2: Choose Your Preferred Date & Time</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                      <Input name="date" type="date" value={formData.date} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                      <Input name="time" type="time" value={formData.time} onChange={handleInputChange} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Message (Optional)</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us anything you'd like us to know..."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3: Submit Appointment */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-semibold text-lg mb-4">Step 3: Submit Your Appointment Request</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    After filling in your details, click the button below to submit your appointment request. We'll
                    receive your information at support@dachshundpuppiesonline.shop and will contact you within 24 hours
                    to confirm your appointment and discuss payment options.
                  </p>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-sm text-red-800">{errorMessage}</p>
                    </div>
                  )}

                  {!submitted ? (
                    <Button
                      onClick={handleSubmitAppointment}
                      className="w-full"
                      disabled={
                        !formData.name ||
                        !formData.email ||
                        !formData.phone ||
                        !formData.date ||
                        !formData.time ||
                        isSubmitting
                      }
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
                    </Button>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-green-900">Appointment Request Submitted!</p>
                          <p className="text-sm text-green-800">
                            Thank you! We've received your appointment request. Our team will contact you at{" "}
                            {formData.email} within 24 hours to confirm your appointment and discuss payment options.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Confirmation Message */}
          <Card className="mt-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle>Process Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">1.</span>
                  <span>Fill out the form above with your contact information and preferred appointment time</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">2.</span>
                  <span>Click "Submit Appointment Request" to send your details to our team</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">3.</span>
                  <span>
                    We'll email you within 24 hours at support@dachshundpuppiesonline.shop to confirm your appointment
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">4.</span>
                  <span>
                    Discuss your preferred payment method with our team (Apple Pay, Chime, Zelle, Cash App, or card)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-primary">5.</span>
                  <span>Make your $300 appointment payment and receive confirmation of your appointment</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Refund & Cancellation Policy */}
          <Card className="mt-8 border-none shadow-lg">
            <CardHeader>
              <CardTitle>Refund & Cancellation Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We understand that plans can change. If you decide not to move forward or need to cancel your
                appointment, please notify us at least 24 hours in advance at support@dachshundpuppiesonline.shop, and
                we'll issue a full refund of your $300 appointment fee.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">Located in Houston, Texas | Ready to welcome your new puppy!</p>
        </div>
      </footer>
    </div>
  )
}
