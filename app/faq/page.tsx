import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dachshund Puppy FAQ | Common Questions | Dachshund Haven",
  description:
    "Find answers to frequently asked questions about dachshund puppies, breeding practices, health guarantee, delivery, and adoption process. Expert dachshund breeder advice.",
  keywords:
    "dachshund puppy FAQ, dachshund breeder questions, miniature dachshund care, buy dachshund puppies online FAQ",
}

export default function FAQPage() {
  const faqs = [
    {
      category: "Puppy Care",
      questions: [
        {
          q: "What vaccinations do puppies receive before going home?",
          a: "All puppies receive their first round of vaccinations at 6-8 weeks, including distemper, parvovirus, and adenovirus. They also receive deworming treatments and a health certificate from our licensed veterinarian before going to their new homes.",
        },
        {
          q: "What should I feed my new dachshund puppy?",
          a: "We recommend high-quality puppy food formulated for small breeds. Your puppy will come with a starter supply of the food they've been eating. We suggest continuing with the same food for at least 2 weeks to avoid digestive upset, then gradually transitioning if desired.",
        },
        {
          q: "How often should I take my puppy to the vet?",
          a: "Schedule a vet visit within 72 hours of bringing your puppy home. Follow-up visits are typically needed at 12 and 16 weeks for additional vaccinations. After that, annual check-ups are recommended.",
        },
      ],
    },
    {
      category: "Breeding Practices",
      questions: [
        {
          q: "Are your dachshunds AKC registered?",
          a: "Yes, all of our breeding dogs are AKC registered with documented pedigrees. Puppies come with AKC registration papers and a complete health history.",
        },
        {
          q: "Do you health test your breeding dogs?",
          a: "Absolutely. All our breeding dogs undergo comprehensive health screenings including genetic testing for common dachshund conditions, hip evaluations, and regular veterinary check-ups to ensure they meet the highest health standards.",
        },
        {
          q: "How often do your dogs have litters?",
          a: "We follow responsible breeding practices, allowing our females to have no more than one litter per year with adequate rest between litters. The health and wellbeing of our dogs is our top priority.",
        },
      ],
    },
    {
      category: "Health Guarantee",
      questions: [
        {
          q: "What does your health guarantee cover?",
          a: "We provide a 2-year genetic health guarantee covering hereditary conditions. If a genetic health issue is diagnosed by a licensed veterinarian within this period, we will replace the puppy or provide a full refund.",
        },
        {
          q: "What if my puppy gets sick after I bring them home?",
          a: "Contact us immediately if your puppy shows signs of illness. If a health issue is discovered within 72 hours and verified by a vet, we will work with you to resolve the situation, which may include treatment coverage or replacement.",
        },
        {
          q: "Are puppies microchipped?",
          a: "Yes, all puppies are microchipped before leaving our facility. We provide you with the microchip registration information so you can update it with your contact details.",
        },
      ],
    },
    {
      category: "Delivery & Pickup",
      questions: [
        {
          q: "Do you ship puppies?",
          a: "Yes, we offer safe and reliable delivery options including ground transportation and flight nanny services. We work with experienced pet transporters who specialize in puppy delivery.",
        },
        {
          q: "How much does delivery cost?",
          a: "Delivery costs vary based on your location and chosen method. Ground transportation typically ranges from $200-$500, while flight nanny services range from $500-$800. Contact us for a specific quote.",
        },
        {
          q: "Can I pick up my puppy in person?",
          a: "We encourage in-person pickups when possible. You're welcome to visit our facility, meet the parents, and take your puppy home yourself. We're located in [Your Location].",
        },
      ],
    },
    {
      category: "Adoption Process",
      questions: [
        {
          q: "How do I reserve a puppy?",
          a: "Browse our available puppies and click either 'Reserve Me' for a 50% deposit or 'Take Me Home' for full payment. Complete the checkout process with your information and preferred payment method.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept Zelle, Chime, Apple Pay, and Bitcoin. Payment instructions will be provided during checkout based on your selected method.",
        },
        {
          q: "How long does the adoption process take?",
          a: "Once your application is approved and payment is received, puppies are typically ready to go home within 1-2 weeks, depending on their age and vaccination schedule. We'll keep you updated throughout the process.",
        },
        {
          q: "Do you have a waiting list for future litters?",
          a: "Yes! If you don't see a puppy that's perfect for you, you can join our waiting list. We'll notify you when new litters are expected and give you first priority for reservations.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            ),
          }),
        }}
      />
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4">
            Dachshund Puppy Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our dachshund puppies, breeding practices, and adoption process.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, idx) => (
            <Card key={idx}>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-6">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                      <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-accent/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-2">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                We're here to help! Contact us directly and we'll be happy to answer any questions you may have.
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

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">
            <a href="/available" className="hover:text-primary">
              Dachshund Puppies for Sale
            </a>{" "}
            |{" "}
            <a href="/adoption" className="hover:text-primary">
              Adoption Process
            </a>{" "}
            |{" "}
            <a href="/health-guarantee" className="hover:text-primary">
              Health Guarantee
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
