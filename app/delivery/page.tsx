import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Truck, MapPin, Shield, Clock, DollarSign } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DeliveryPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold mb-4 text-balance">
              Delivery Information
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We offer safe and reliable delivery options to bring your new puppy home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Ground Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Professional pet transport service for regional deliveries within 500 miles.
                </p>
                <p className="font-semibold text-primary text-xl mb-2">$90 - $150</p>
                <p className="text-sm text-muted-foreground">Delivery fee is shared 50-50 between buyer and seller</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Air Transport</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Safe air travel with climate-controlled cabin for nationwide delivery.
                </p>
                <p className="font-semibold text-primary text-xl mb-2">$150 - $250</p>
                <p className="text-sm text-muted-foreground">Delivery fee is shared 50-50 between buyer and seller</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-playfair)]">Local Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Pick up your puppy in person at our location and meet the parents.
                </p>
                <p className="font-semibold text-primary text-xl">Free</p>
              </CardContent>
            </Card>
          </div>

          {/* Delivery Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Delivery Timeframe</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ground transport typically takes 1-3 days. Air transport is same-day or next-day delivery. We
                      coordinate with you to find the best delivery date.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Safety First</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All puppies travel in climate-controlled, comfortable carriers with food, water, and comfort
                      items. We only use licensed and insured transporters.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Service Areas</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We deliver throughout the continental United States. Ground transport available within 500 miles.
                      Air transport available nationwide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Payment Terms</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Delivery fees are shared equally (50-50) between buyer and seller. Payment is due before transport
                      is scheduled. We accept all major payment methods.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  How do I know my puppy will be safe during transport?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We only work with licensed, insured, and experienced pet transporters who specialize in puppy
                  delivery. Your puppy travels in a climate-controlled environment with regular check-ins. We provide
                  you with tracking information and updates throughout the journey.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">What comes with my puppy during delivery?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Your puppy arrives with their health certificate, vaccination records, a comfort blanket with mom's
                  scent, a small bag of their current food, and a puppy care package with helpful information and
                  supplies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Can I track my puppy during delivery?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! We provide regular updates via text and email throughout the delivery process. For air transport,
                  we provide flight information. For ground transport, we share the driver's contact information and
                  estimated arrival times.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">What if I want to pick up my puppy in person?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We encourage local pickups! You'll get to meet the puppy's parents, see where they were raised, and
                  receive personalized guidance on caring for your new family member. We'll schedule a convenient pickup
                  time once your puppy is ready to go home.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Are there any areas you don't deliver to?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We deliver throughout the continental United States. For Hawaii and Alaska, we can arrange special air
                  transport at an additional cost. International deliveries are evaluated on a case-by-case basis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">How does the 50-50 delivery fee split work?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The total delivery cost is split equally between you (the buyer) and us (the seller). For example, if
                  ground transport costs $120, you would pay $60 and we would pay $60. This helps make delivery more
                  affordable while ensuring your puppy receives the best care during transport.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
