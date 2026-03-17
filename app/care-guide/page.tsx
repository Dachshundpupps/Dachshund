import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UtensilsCrossed, Scissors, GraduationCap, Heart, Home, AlertCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dachshund Puppy Care Guide | Training, Feeding, Health | Dachshund Haven",
  description:
    "Complete dachshund puppy care guide covering feeding, grooming, training, health care, and back safety. Expert advice from reputable dachshund breeders.",
  keywords:
    "dachshund puppy care, how to care for dachshund puppy, dachshund training guide, dachshund feeding schedule, dachshund back care",
}

export default function CareGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-4">
            Complete Dachshund Puppy Care Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to give your new dachshund puppy the best start in life.
          </p>
        </div>

        <Tabs defaultValue="feeding" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8 h-auto gap-1 p-1">
            <TabsTrigger value="feeding" className="text-xs md:text-sm px-2 py-2">
              Feeding
            </TabsTrigger>
            <TabsTrigger value="grooming" className="text-xs md:text-sm px-2 py-2">
              Grooming
            </TabsTrigger>
            <TabsTrigger value="training" className="text-xs md:text-sm px-2 py-2">
              Training
            </TabsTrigger>
            <TabsTrigger value="health" className="text-xs md:text-sm px-2 py-2">
              Health
            </TabsTrigger>
            <TabsTrigger value="safety" className="text-xs md:text-sm px-2 py-2">
              Safety
            </TabsTrigger>
            <TabsTrigger value="supplies" className="text-xs md:text-sm px-2 py-2">
              Supplies
            </TabsTrigger>
          </TabsList>

          {/* Feeding */}
          <TabsContent value="feeding" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <UtensilsCrossed className="h-6 w-6 text-primary" />
                  <CardTitle>Feeding Your Dachshund Puppy</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Feeding Schedule</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">8-12 weeks:</strong> 4 meals per day
                    </p>
                    <p>
                      <strong className="text-foreground">3-6 months:</strong> 3 meals per day
                    </p>
                    <p>
                      <strong className="text-foreground">6-12 months:</strong> 2 meals per day
                    </p>
                    <p>
                      <strong className="text-foreground">12+ months:</strong> 2 meals per day (adult portions)
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Food Recommendations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>High-quality puppy food formulated for small breeds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Look for real meat as the first ingredient</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Avoid foods with excessive fillers, by-products, or artificial additives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Consider foods with added DHA for brain development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Transition gradually when changing foods (7-10 days)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Portion Control</h3>
                  <p className="text-muted-foreground mb-2">
                    Dachshunds are prone to obesity, which can lead to back problems. Follow these guidelines:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Follow feeding guidelines on food packaging based on weight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Measure portions carefully—don't free feed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Limit treats to 10% of daily caloric intake</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Monitor body condition—you should be able to feel ribs easily</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Foods to Avoid</h4>
                  <p className="text-sm text-muted-foreground">
                    Chocolate, grapes, raisins, onions, garlic, xylitol (artificial sweetener), macadamia nuts, avocado,
                    alcohol, and cooked bones.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grooming */}
          <TabsContent value="grooming" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Scissors className="h-6 w-6 text-primary" />
                  <CardTitle>Grooming Your Dachshund</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Coat Care</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Smooth Coat</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Brush weekly with a soft bristle brush</li>
                        <li>• Bathe every 4-6 weeks or as needed</li>
                        <li>• Minimal grooming required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Long Coat</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Brush 2-3 times per week to prevent matting</li>
                        <li>• Bathe every 4-6 weeks</li>
                        <li>• Trim feathering on ears and legs as needed</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Wire Coat</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Brush 2-3 times per week with a slicker brush</li>
                        <li>• Hand-strip or clip coat 2-3 times per year</li>
                        <li>• Professional grooming recommended</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Nail Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Trim nails every 2-3 weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Use proper dog nail clippers or grinder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Be careful not to cut the quick (blood vessel)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Start nail trimming early to get puppy accustomed</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Dental Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Brush teeth daily with dog toothpaste</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Provide dental chews and toys</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Schedule professional cleanings as recommended by vet</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Ear Care</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Check ears weekly for redness, odor, or discharge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Clean with vet-approved ear cleaner as needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Long-eared breeds are prone to ear infections—stay vigilant</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Training */}
          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <CardTitle>Training Your Dachshund</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">House Training</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Take puppy out every 2 hours, after meals, and after naps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Use a consistent potty spot and command word</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Praise and reward immediately after successful potty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Never punish accidents—clean thoroughly with enzyme cleaner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Crate training can help with house training</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Basic Commands</h3>
                  <p className="text-muted-foreground mb-3">
                    Start training early using positive reinforcement. Essential commands include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground">Sit</h4>
                      <p className="text-sm text-muted-foreground">Foundation for all other commands</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground">Stay</h4>
                      <p className="text-sm text-muted-foreground">Important for safety and control</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground">Come</h4>
                      <p className="text-sm text-muted-foreground">Critical recall command</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground">Down</h4>
                      <p className="text-sm text-muted-foreground">Helps with impulse control</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground">Leave It</h4>
                      <p className="text-sm text-muted-foreground">Prevents eating dangerous items</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-foreground">Drop It</h4>
                      <p className="text-sm text-muted-foreground">Release items from mouth</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Socialization</h3>
                  <p className="text-muted-foreground mb-3">Critical period is 3-14 weeks. Expose your puppy to:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Different people (ages, genders, appearances)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Other vaccinated dogs and puppies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Various environments (parks, stores, car rides)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Different sounds (vacuum, doorbell, traffic)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Handling (paws, ears, mouth) for grooming and vet visits</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Training Tips</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Keep training sessions short (5-10 minutes)</li>
                    <li>• Use high-value treats for motivation</li>
                    <li>• Be consistent with commands and rules</li>
                    <li>• End on a positive note</li>
                    <li>• Consider puppy training classes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Health */}
          <TabsContent value="health" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary" />
                  <CardTitle>Health Care</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Vaccination Schedule</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">6-8 weeks</p>
                      <p className="text-sm">DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">10-12 weeks</p>
                      <p className="text-sm">DHPP booster, Leptospirosis (optional)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">14-16 weeks</p>
                      <p className="text-sm">DHPP booster, Rabies, Leptospirosis booster</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">12-16 months</p>
                      <p className="text-sm">DHPP booster, Rabies booster</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Annually</p>
                      <p className="text-sm">Boosters as recommended by your veterinarian</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Parasite Prevention</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Heartworm:</strong> Monthly preventative year-round
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Fleas & Ticks:</strong> Monthly preventative during warm
                        months
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Intestinal Worms:</strong> Deworming as recommended by vet
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Common Health Issues in Dachshunds</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">IVDD (Back Problems):</strong> Avoid jumping, use ramps,
                        maintain healthy weight
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Obesity:</strong> Monitor diet and exercise carefully
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Dental Disease:</strong> Regular brushing and dental care
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Ear Infections:</strong> Regular ear cleaning and checks
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">When to Call the Vet</h3>
                  <p className="text-muted-foreground mb-2">Contact your veterinarian immediately if you notice:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Vomiting or diarrhea lasting more than 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Lethargy or loss of appetite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Difficulty breathing or coughing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Signs of pain (whimpering, reluctance to move)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Seizures or loss of consciousness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      <span>Inability to urinate or defecate</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Safety */}
          <TabsContent value="safety" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <CardTitle>Safety & Back Care</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Protecting Your Dachshund's Back</h3>
                  <p className="text-muted-foreground mb-3">
                    Dachshunds are prone to IVDD (Intervertebral Disc Disease) due to their long backs. Follow these
                    guidelines:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">No Jumping:</strong> Prevent jumping on/off furniture, use
                        ramps or stairs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Proper Support:</strong> Support both front and back when
                        picking up
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Weight Management:</strong> Keep at healthy weight to reduce
                        back strain
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">Controlled Exercise:</strong> Avoid excessive running on
                        hard surfaces
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        <strong className="text-foreground">No Stairs:</strong> Limit stair climbing, especially for
                        puppies
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Puppy-Proofing Your Home</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Remove or secure electrical cords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Store cleaning products and chemicals out of reach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Remove toxic plants (lilies, azaleas, sago palms)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Secure trash cans with lids</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Block access to small spaces where puppy could get stuck</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Remove small objects that could be choking hazards</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Exercise Guidelines</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Short walks (10-15 minutes) 2-3 times daily for puppies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Avoid over-exercising—puppies need lots of rest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Use a harness instead of collar to protect neck and back</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Provide mental stimulation with puzzle toys and training</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Supplies */}
          <TabsContent value="supplies" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-primary" />
                  <CardTitle>Essential Supplies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Before Bringing Puppy Home</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Food & Water</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• High-quality puppy food</li>
                        <li>• Food and water bowls (stainless steel or ceramic)</li>
                        <li>• Treats for training</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Sleeping</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Crate (appropriately sized)</li>
                        <li>• Comfortable bed or blankets</li>
                        <li>• Crate pad or mat</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Potty Training</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Puppy pads (if needed)</li>
                        <li>• Enzyme cleaner for accidents</li>
                        <li>• Outdoor potty area setup</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Walking</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Harness (not collar for walking)</li>
                        <li>• 4-6 foot leash</li>
                        <li>• ID tag with contact info</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Toys</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Chew toys (various textures)</li>
                        <li>• Interactive puzzle toys</li>
                        <li>• Soft plush toys</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Grooming</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Brush appropriate for coat type</li>
                        <li>• Nail clippers or grinder</li>
                        <li>• Dog shampoo</li>
                        <li>• Toothbrush and toothpaste</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Safety</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Pet gates or exercise pen</li>
                        <li>• Ramps for furniture access</li>
                        <li>• First aid kit</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Health</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Flea/tick prevention</li>
                        <li>• Heartworm prevention</li>
                        <li>• Veterinarian contact info</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Shop Our Store</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We offer a curated selection of dachshund-friendly toys, treats, and supplies in our shop.
                  </p>
                  <a
                    href="/shop"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Browse Shop
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-accent/50">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-foreground mb-2">
                Need More Help?
              </h3>
              <p className="text-muted-foreground mb-4">
                We're here to support you throughout your puppy's life. Contact us with any questions or concerns.
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

      <Footer />
    </div>
  )
}
