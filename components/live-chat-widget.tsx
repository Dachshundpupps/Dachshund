"use client"

import type React from "react"

import { Mail, X, MessageCircle, Calendar, Bell } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [inquiryType, setInquiryType] = useState<"general" | "appointment" | null>(null)
  const [notifications, setNotifications] = useState<any[]>([])
  const [showNotifications, setShowNotifications] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedNotifications = JSON.parse(localStorage.getItem("orderNotifications") || "[]")
      setNotifications(savedNotifications)
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject =
      inquiryType === "appointment" ? `Appointment Inquiry from ${formData.name}` : `Message from ${formData.name}`

    let body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A`

    if (formData.phone) {
      body += `Phone: ${formData.phone}%0D%0A`
    }

    if (inquiryType === "appointment") {
      body += `%0D%0AAppointment Inquiry:%0D%0A`
      if (formData.preferredDate) {
        body += `Preferred Date: ${formData.preferredDate}%0D%0A`
      }
      if (formData.preferredTime) {
        body += `Preferred Time: ${formData.preferredTime}%0D%0A`
      }
    }

    body += `%0D%0AMessage:%0D%0A${formData.message}`

    const mailtoLink = `mailto:support@dachshundpuppiesonline.shop?subject=${encodeURIComponent(subject)}&body=${body}`

    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "", preferredDate: "", preferredTime: "" })
    setInquiryType(null)
    setIsOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const clearNotifications = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("orderNotifications")
      setNotifications([])
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg transition-all duration-300 relative"
          aria-label="Open live chat"
        >
          <MessageCircle className="h-6 w-6" />
          {notifications.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notifications.length}
            </span>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[380px] shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Chat with Us</CardTitle>
              <div className="flex items-center gap-2">
                {notifications.length > 0 && (
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors relative"
                    aria-label="View notifications"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {notifications.length}
                    </span>
                  </button>
                )}
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setInquiryType(null)
                    setShowNotifications(false)
                  }}
                  className="hover:bg-primary-foreground/20 rounded-full p-1 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/90 mt-1">
              Questions about appointments or puppies? We're here to help!
            </p>
          </CardHeader>
          <CardContent className="p-4 overflow-y-auto flex-1">
            {showNotifications ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Recent Orders</h3>
                  <Button variant="ghost" size="sm" onClick={clearNotifications}>
                    Clear All
                  </Button>
                </div>
                {notifications.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">No new orders</p>
                ) : (
                  notifications.map((notification, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg bg-secondary/30">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">New Order</Badge>
                        <span className="text-xs text-muted-foreground">
                          {new Date(notification.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-sm font-medium">{notification.orderNumber}</p>
                      <p className="text-xs text-muted-foreground">From: {notification.customerName}</p>
                    </div>
                  ))
                )}
                <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowNotifications(false)}>
                  Back to Chat
                </Button>
              </div>
            ) : !inquiryType ? (
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground mb-4">How can we assist you today?</p>
                <button
                  onClick={() => setInquiryType("appointment")}
                  className="w-full p-3 text-left border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Book Appointment</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Schedule a puppy viewing</p>
                </button>
                <button
                  onClick={() => setInquiryType("general")}
                  className="w-full p-3 text-left border border-border rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="font-medium">General Inquiry</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Ask about our puppies or services</p>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setInquiryType(null)}
                  className="text-xs text-primary hover:underline mb-2"
                >
                  ← Back
                </button>

                {/* Common fields */}
                <div>
                  <label className="block text-xs font-medium mb-1">Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Phone</label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="w-full text-sm"
                  />
                </div>

                {/* Appointment-specific fields */}
                {inquiryType === "appointment" && (
                  <>
                    <div>
                      <label className="block text-xs font-medium mb-1">Preferred Date</label>
                      <Input
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1">Preferred Time</label>
                      <Input
                        name="preferredTime"
                        type="time"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full text-sm"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-xs font-medium mb-1">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      inquiryType === "appointment"
                        ? "Tell us about your interest in viewing our puppies..."
                        : "Your message..."
                    }
                    required
                    rows={3}
                    className="w-full text-sm resize-none"
                  />
                </div>
                <Button type="submit" className="w-full text-sm">
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </>
  )
}
