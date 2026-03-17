"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Palette, Ruler, Activity, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { PuppyDetailsModal } from "./puppy-details-modal"

interface PuppyCardProps {
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
  onTakeMeHome?: (puppy: any, paymentType: "full" | "deposit") => void
}

export function PuppyCard({ puppy, onTakeMeHome }: PuppyCardProps) {
  const puppyImages = puppy.images || (puppy.image ? [puppy.image] : ["/placeholder.svg"])
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % puppyImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + puppyImages.length) % puppyImages.length)
  }

  return (
    <>
      <Card className="overflow-hidden border-2 border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
        <div className="aspect-square relative overflow-hidden bg-muted group">
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
              alt={`${puppy.name} - ${puppy.gender} ${puppy.age} old dachshund puppy`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          )}

          {puppyImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {puppyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-primary w-6" : "bg-background/60"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {!puppy.available && (
            <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center backdrop-blur-sm">
              <Badge variant="secondary" className="text-lg px-6 py-2 font-semibold">
                Reserved
              </Badge>
            </div>
          )}
          {puppy.available && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-600 text-white border-0 shadow-md">Available</Badge>
            </div>
          )}
        </div>

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground">{puppy.name}</h3>
            <Badge variant={puppy.gender === "Male" ? "default" : "secondary"} className="text-sm px-3 py-1">
              {puppy.gender}
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Age</p>
                <p className="font-medium text-foreground">{puppy.age}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Palette className="h-4 w-4 text-primary flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Color</p>
                <p className="font-medium text-foreground">{puppy.color}</p>
              </div>
            </div>

            {puppy.coatType && (
              <div className="flex items-center gap-2 text-sm">
                <Activity className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Coat</p>
                  <p className="font-medium text-foreground">{puppy.coatType}</p>
                </div>
              </div>
            )}

            {puppy.weight && (
              <div className="flex items-center gap-2 text-sm">
                <Ruler className="h-4 w-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Weight</p>
                  <p className="font-medium text-foreground">{puppy.weight}</p>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border pt-5">
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">Price</p>
              <span className="text-3xl font-bold text-primary">{puppy.price}</span>
            </div>

            <Button
              onClick={() => setShowDetailsModal(true)}
              variant="outline"
              className="w-full font-semibold mb-2"
              size="lg"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Details
            </Button>

            {puppy.available && (
              <div className="flex flex-col gap-2">
                <Button onClick={() => onTakeMeHome?.(puppy, "full")} className="w-full font-semibold" size="lg">
                  Take Me Home - Full Payment
                </Button>
                <Button
                  onClick={() => onTakeMeHome?.(puppy, "deposit")}
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
        </CardContent>
      </Card>

      <PuppyDetailsModal
        puppy={puppy}
        open={showDetailsModal}
        onOpenChange={setShowDetailsModal}
        onTakeMeHome={onTakeMeHome}
      />
    </>
  )
}
