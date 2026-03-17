import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Home, ShoppingBag, Calendar, Heart, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Puppy Preparation Guide | Getting Ready for Your New Dachshund | Dachshund Haven",
  description:
    "Complete guide to preparing for your new dachshund puppy. Learn what supplies you need, how to puppy-proof your home, and create the perfect welcome for your new family member.",
  keywords:
    "puppy preparation, new puppy checklist, puppy supplies, puppy-proofing home, dachshund puppy preparation, first time puppy owner",
}

export default function PuppyPreparationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4">
            Puppy Preparation Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to prepare for your new dachshund puppy and ensure a smooth transition to their
            new home.
          </p>
        </div>

        {/* Before Your Puppy Arrives */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Before Your Puppy Arrives</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">2-3 Weeks Before</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Research and select a veterinarian in your area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Schedule your puppy's first vet appointment (within 48 hours of arrival)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Research pet insurance options and select a plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Decide on a name for your puppy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Research local puppy training classes and socialization opportunities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">1 Week Before</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Purchase all essential supplies (see checklist below)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Puppy-proof your home (see safety section below)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Set up puppy's sleeping area with crate and bedding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Establish designated potty area outside</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Stock up on the same food your puppy has been eating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Plan your schedule for the first few days (take time off if possible)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Day Before Arrival</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Do a final safety check of your home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Prepare food and water bowls in designated feeding area</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Set up a quiet, comfortable space for your puppy to decompress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Charge your phone/camera to capture first moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Get plenty of rest—you'll need energy for your new puppy!</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Essential Supplies Checklist */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Essential Supplies Checklist</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Food & Water</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>High-quality puppy food (same brand breeder uses)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stainless steel or ceramic food bowl</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Stainless steel or ceramic water bowl</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Small training treats</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Sleeping & Crate</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Appropriately sized crate (24-30" for dachshunds)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Comfortable crate pad or mat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Soft blankets for comfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dog bed for living areas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Potty Training</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Puppy pads (for indoor training if needed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Enzyme-based cleaner for accidents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Paper towels and cleaning supplies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Poop bags and dispenser</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Walking & Safety</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Harness (NOT collar for walking dachshunds)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>4-6 foot leash</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>ID tag with your contact information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pet gates or exercise pen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Toys & Enrichment</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Variety of chew toys (different textures)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Interactive puzzle toys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Soft plush toys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rope toys for gentle tug games</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Grooming & Health</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Brush appropriate for coat type</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Nail clippers or grinder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Puppy shampoo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dog toothbrush and toothpaste</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Dachshund-Specific</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pet ramps for furniture access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pet stairs (alternative to ramps)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Supportive harness for back protection</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Emergency Supplies</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pet first aid kit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency vet contact information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Pet carrier for vet visits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Pro Tip:</strong> Visit our{" "}
                  <Link href="/shop" className="text-primary hover:underline">
                    shop
                  </Link>{" "}
                  for curated dachshund-friendly supplies and toys!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Puppy-Proofing Your Home */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Home className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Puppy-Proofing Your Home</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">General Safety</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Secure or remove electrical cords and cables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Store cleaning products, chemicals, and medications in locked cabinets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Remove or secure toxic plants (lilies, azaleas, sago palms, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Secure trash cans with lids or place in cabinets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Remove small objects that could be choking hazards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>Block access to small spaces where puppy could get stuck</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Dachshund-Specific Safety</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Block stairs:</strong> Use baby gates to prevent stair access
                      until puppy is older
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Install ramps:</strong> Place ramps near furniture to prevent
                      jumping
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Lower furniture:</strong> Consider lowering beds or using
                      floor beds initially
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Secure outdoor areas:</strong> Check fence for gaps a small
                      puppy could squeeze through
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Room-by-Room Checklist</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Kitchen</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Secure cabinet doors</li>
                      <li>• Remove toxic foods from low shelves</li>
                      <li>• Cover trash can or use locking lid</li>
                      <li>• Remove floor mats that could be chewed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Living Room</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Secure electrical cords</li>
                      <li>• Remove breakable decorations from low tables</li>
                      <li>• Install ramps to furniture</li>
                      <li>• Remove or secure houseplants</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Bedroom</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Keep shoes and clothing off floor</li>
                      <li>• Secure closet doors</li>
                      <li>• Remove small items from nightstands</li>
                      <li>• Install ramp if puppy will sleep on bed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Bathroom</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Keep toilet lid closed</li>
                      <li>• Store medications in locked cabinet</li>
                      <li>• Remove cleaning products from under sink</li>
                      <li>• Keep bathroom door closed when not in use</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* First Days at Home */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">First Days at Home</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Day 1: Arrival Day</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep things calm and quiet—your puppy may be overwhelmed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Take puppy to designated potty area immediately upon arrival</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Offer small amounts of water and food (same brand they're used to)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Show puppy their sleeping area and crate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Limit visitors for the first few days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Begin establishing potty routine (every 2 hours)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">First Week</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Visit veterinarian within 48 hours for health check</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Establish consistent daily routine (feeding, potty, play, sleep)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Begin crate training and house training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Start basic handling exercises (paws, ears, mouth)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Introduce puppy to different household sounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Keep interactions positive and reward good behavior</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-foreground mb-3">First Month</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Continue house training and crate training consistently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Begin basic obedience training (sit, stay, come)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Gradually introduce puppy to new people and experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Enroll in puppy socialization class (after vaccinations allow)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Establish grooming routine (brushing, nail trimming, teeth brushing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Monitor health and keep vaccination schedule</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-accent/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Remember</h4>
                <p className="text-sm text-muted-foreground">
                  Every puppy adjusts at their own pace. Be patient, consistent, and positive. If you have questions or
                  concerns, don't hesitate to contact us or your veterinarian. We're here to support you throughout your
                  puppy's life!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">
                Ready to Bring Your Puppy Home?
              </h3>
              <p className="mb-6 opacity-90 max-w-2xl mx-auto">
                View our available puppies or contact us with any questions about preparing for your new family member.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/available">View Available Puppies</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">
            <Link href="/available" className="hover:text-primary">
              Available Puppies
            </Link>{" "}
            |{" "}
            <Link href="/health-guarantee" className="hover:text-primary">
              Health Guarantee
            </Link>{" "}
            |{" "}
            <Link href="/care-guide" className="hover:text-primary">
              Care Guide
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
