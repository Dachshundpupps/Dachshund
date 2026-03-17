"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { malePuppies } from "@/app/male/page"
import { femalePuppies } from "@/app/female/page"

export default function SoldReservedPuppiesPage() {
  // Get only sold puppies
  const soldMalePuppies = malePuppies.filter((p) => p.available === false)
  const soldFemalePuppies = femalePuppies.filter((p) => p.available === false)
  const allSoldPuppies = [...soldMalePuppies, ...soldFemalePuppies]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold mb-4">
              Sold & Reserved Puppies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our beautiful puppies that have found their forever homes or are reserved. These wonderful companions
              have been carefully matched with loving families.
            </p>
          </div>

          {/* All Sold Puppies Grid */}
          {allSoldPuppies.length > 0 ? (
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold">Sold & Reserved</h2>
                <Badge className="bg-amber-600 text-white text-lg px-4 py-1">{allSoldPuppies.length} Puppies</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allSoldPuppies.map((puppy) => (
                  <Card
                    key={puppy.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col relative"
                  >
                    {/* SOLD Badge */}
                    <div className="absolute top-4 right-4 z-10 bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm">
                      SOLD
                    </div>

                    <div className="relative h-64 bg-muted overflow-hidden opacity-75">
                      <Image
                        src={puppy.image || "/placeholder.svg"}
                        alt={puppy.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    <CardHeader>
                      <CardTitle className="text-2xl">{puppy.name}</CardTitle>
                      <div className="flex gap-2 flex-wrap mt-2">
                        <Badge variant="secondary">{puppy.age}</Badge>
                        <Badge variant="outline">{puppy.color}</Badge>
                        <Badge className="bg-gray-600">{puppy.gender}</Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">{puppy.personality}</p>

                        <div className="grid grid-cols-2 gap-3 text-sm bg-muted p-3 rounded">
                          <div>
                            <span className="font-semibold text-foreground">Age:</span>
                            <p className="text-muted-foreground">{puppy.age}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Color:</span>
                            <p className="text-muted-foreground">{puppy.color}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Coat:</span>
                            <p className="text-muted-foreground">{puppy.coatType}</p>
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">Weight:</span>
                            <p className="text-muted-foreground">{puppy.weight}</p>
                          </div>
                        </div>

                        <div className="border-t pt-3">
                          <p className="text-sm">
                            <span className="font-semibold text-foreground">Health:</span>
                            <p className="text-muted-foreground text-xs mt-1">{puppy.healthTested}</p>
                          </p>
                        </div>

                        <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded p-3 text-center">
                          <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                            This puppy has found their forever home
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No sold or reserved puppies at this time.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
