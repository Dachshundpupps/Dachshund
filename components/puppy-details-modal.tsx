"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Calendar, Palette, Ruler, Activity, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface PuppyDetailsModalProps {
  puppy: {
    id: number
    name: string
    age: string
    gender: "Male" | "Female"
    price: string
    personality: string
    color: string
    bloodline?: string
    healthTested?: string
    coatType?: string
    weight?: string
    image?: string
    images?: string[]
    available: boolean
  }
  open: boolean
  onOpenChange: (open: boolean) => void
  onTakeMeHome?: (puppy: any, paymentType: "full" | "deposit") => void
}

export function PuppyDetailsModal({ puppy, open, onOpenChange, onTakeMeHome }: PuppyDetailsModalProps) {
  const puppyImages = puppy.images || (puppy.image ? [puppy.image] : ["/placeholder.svg"])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % puppyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + puppyImages.length) % puppyImages.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-[family-name:var(--font-playfair)] text-3xl">Meet {puppy.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-muted group">
              {puppyImages[currentImageIndex]?.endsWith(".mp4") ? (
                <video
                  src={puppyImages[currentImageIndex]}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={puppyImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`${puppy.name} - ${puppy.gender} dachshund puppy`}
                  className="w-full h-full object-cover"
                />
              )}

              {puppyImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {puppyImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {puppyImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex ? "border-primary" : "border-transparent"
                    }`}
                  >
                    {img.endsWith(".mp4") ? (
                      <video src={img} className="w-full h-full object-cover" muted />
                    ) : (
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`${puppy.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Puppy Details */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant={puppy.gender === "Male" ? "default" : "secondary"} className="text-base px-4 py-1">
                {puppy.gender}
              </Badge>
              {puppy.available ? (
                <Badge className="bg-green-600 text-white border-0">Available</Badge>
              ) : (
                <Badge variant="secondary">Reserved</Badge>
              )}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-semibold">{puppy.age}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Color</p>
                    <p className="font-semibold">{puppy.color}</p>
                  </div>
                </div>

                {puppy.coatType && (
                  <div className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Coat Type</p>
                      <p className="font-semibold">{puppy.coatType}</p>
                    </div>
                  </div>
                )}

                {puppy.weight && (
                  <div className="flex items-center gap-2">
                    <Ruler className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-semibold">{puppy.weight}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-secondary/30 rounded-lg space-y-3">
                <div className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Personality</p>
                    <p className="text-base">{puppy.personality}</p>
                  </div>
                </div>

                {puppy.healthTested && (
                  <div className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Health</p>
                      <p className="text-base">{puppy.healthTested}</p>
                    </div>
                  </div>
                )}

                {puppy.bloodline && (
                  <div className="flex items-start gap-2">
                    <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Bloodline</p>
                      <p className="text-base">{puppy.bloodline}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-1">Price</p>
                <span className="text-4xl font-bold text-primary">{puppy.price}</span>
              </div>

              {puppy.available && (
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={() => {
                      onTakeMeHome?.(puppy, "full")
                      onOpenChange(false)
                    }}
                    className="w-full font-semibold"
                    size="lg"
                  >
                    Take Me Home - Full Payment
                  </Button>
                  <Button
                    onClick={() => {
                      onTakeMeHome?.(puppy, "deposit")
                      onOpenChange(false)
                    }}
                    variant="outline"
                    className="w-full font-semibold"
                    size="lg"
                  >
                    Reserve with 50% Deposit
                  </Button>
                </div>
              )}

              {!puppy.available && (
                <Button disabled className="w-full" size="lg">
                  Currently Reserved
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
