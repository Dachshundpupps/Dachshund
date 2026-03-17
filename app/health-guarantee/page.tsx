import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, FileCheck, Stethoscope, Clock, AlertCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Health Guarantee | 2-Year Genetic Guarantee | Dachshund Haven",
  description:
    "Comprehensive 2-year genetic health guarantee for all dachshund puppies. AKC registered, health tested, vaccinated, and microchipped. Reputable dachshund breeder.",
  keywords:
    "dachshund health guarantee, dachshund puppy warranty, AKC registered dachshunds, health tested dachshund puppies",
}

export default function HealthGuaranteePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4">
            Dachshund Puppy Health Guarantee
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your dachshund puppy's health and wellbeing is our top priority. We stand behind every puppy we place with a
            comprehensive 2-year health guarantee.
          </p>
        </div>

        <div className="space-y-8">
          {/* Overview */}
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                All puppies from Dachshund Haven come with a{" "}
                <strong className="text-foreground">2-year genetic health guarantee</strong> covering hereditary and
                congenital conditions. We are committed to breeding healthy puppies and will work with you to ensure
                your new family member has the best possible start in life.
              </p>
            </CardContent>
          </Card>

          {/* What's Covered */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileCheck className="h-6 w-6 text-primary" />
                <CardTitle>What's Covered</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our health guarantee covers the following hereditary and congenital conditions:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Intervertebral Disc Disease (IVDD)</strong> - Genetic
                    predisposition verified by veterinary specialist
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Progressive Retinal Atrophy (PRA)</strong> - Hereditary eye
                    condition
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Hip Dysplasia</strong> - Congenital joint malformation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Cardiac Defects</strong> - Congenital heart conditions present
                    at birth
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Patellar Luxation</strong> - Hereditary knee joint condition
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    <strong className="text-foreground">Other Genetic Conditions</strong> - Any hereditary condition
                    verified through genetic testing
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Health Certification */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Stethoscope className="h-6 w-6 text-primary" />
                <CardTitle>Health Certification</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Every puppy receives comprehensive veterinary care before going home:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Vaccinations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• First DHPP vaccine (6-8 weeks)</li>
                    <li>• Deworming treatments</li>
                    <li>• Vaccination record provided</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Health Checks</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete physical examination</li>
                    <li>• Fecal testing</li>
                    <li>• Health certificate from licensed vet</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Microchipping</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Microchip implanted before delivery</li>
                    <li>• Registration information provided</li>
                    <li>• Lifetime identification</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Documentation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AKC registration papers</li>
                    <li>• Pedigree information</li>
                    <li>• Parent health clearances</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guarantee Terms */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-primary" />
                <CardTitle>Guarantee Terms & Timeline</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">72-Hour Health Guarantee</h4>
                <p className="text-muted-foreground">
                  You must have your puppy examined by a licensed veterinarian within 72 hours of delivery. If any
                  serious health issues are discovered during this initial exam, we will provide a full refund or
                  replacement puppy at your choice.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">2-Year Genetic Guarantee</h4>
                <p className="text-muted-foreground">
                  If a hereditary or congenital condition covered under this guarantee is diagnosed by a licensed
                  veterinarian within 2 years of birth, we will replace your puppy with one of equal value or provide a
                  full refund of the purchase price.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Requirements for Claims</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Written diagnosis from a licensed veterinarian</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Medical records documenting the condition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Proof of proper veterinary care and vaccinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Notification to us within 7 days of diagnosis</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Not Covered */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <CardTitle>What's Not Covered</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The following conditions and circumstances are not covered under our health guarantee:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Illnesses or injuries resulting from accidents, neglect, or improper care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Parasites (fleas, ticks, worms) contracted after delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Viral infections (parvo, distemper) if vaccination schedule was not followed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Conditions resulting from improper diet or nutrition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Cosmetic issues (underbite, overbite, color variations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Behavioral issues or temperament problems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  <span>Conditions that develop due to lack of proper veterinary care</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Responsibilities */}
          <Card className="border-primary/20 bg-accent/50">
            <CardHeader>
              <CardTitle>Your Responsibilities as a Puppy Owner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">To maintain the validity of this health guarantee, you must:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Have your puppy examined by a licensed veterinarian within 72 hours of delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Follow the recommended vaccination and deworming schedule</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Provide proper nutrition, housing, and care for your puppy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Maintain regular veterinary care and keep records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Notify us immediately if any health concerns arise</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="text-center">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-2">
                  Questions About Our Health Guarantee?
                </h3>
                <p className="text-muted-foreground mb-4">
                  We're here to help! Contact us if you have any questions about our health guarantee or need to file a
                  claim.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">
            <a href="/available" className="hover:text-primary">
              Available Dachshund Puppies
            </a>{" "}
            |{" "}
            <a href="/refund-policy" className="hover:text-primary">
              Refund Policy
            </a>{" "}
            |{" "}
            <a href="/faq" className="hover:text-primary">
              FAQ
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
