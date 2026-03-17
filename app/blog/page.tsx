import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Dachshund Care & Buying Guides | Expert Tips & Advice",
  description:
    "Expert guides on buying, caring for, and training dachshund puppies. Learn from experienced breeders about health, nutrition, and finding reputable dachshund puppies for sale.",
}

const blogPosts = [
  {
    slug: "dachshund-puppies-for-sale-guide",
    title: "Dachshund Puppies for Sale: How to Choose and Care for the Right One",
    excerpt:
      "Complete guide to finding reputable dachshund puppies for sale, choosing the right puppy, and providing excellent care from day one.",
    image: "/cute-dachshund-puppy-brown-coat.jpg",
    date: "January 11, 2025",
    readTime: "15 min read",
    category: "Buying Guide",
  },
  {
    slug: "miniature-dachshund-puppies-for-sale-guide",
    title: "Miniature Dachshund Puppies for Sale: Your Ultimate Buying Guide",
    excerpt:
      "Find miniature Dachshund puppies for sale from trusted breeders. Learn how to choose, care for, and raise your perfect little companion.",
    image: "/miniature-dachshund-puppy-red-coat.jpg",
    date: "January 11, 2025",
    readTime: "15 min read",
    category: "Buying Guide",
  },
  {
    slug: "dachshund-puppy-care-buying-guide",
    title: "Dachshund Puppy Care and Buying Guide: Everything You Need to Know",
    excerpt:
      "Discover expert tips on dachshund puppy care, how to buy the right puppy, and ensure a healthy, happy companion.",
    image: "/dachshund-puppy-black-and-tan-coat.jpg",
    date: "January 11, 2025",
    readTime: "15 min read",
    category: "Care Guide",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Dachshund Care & Buying Guides</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert advice from experienced breeders on choosing, caring for, and training your dachshund puppy. Learn
            everything you need to know about this wonderful breed.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group/btn">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-12 bg-muted/50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">More Articles Coming Soon!</h2>
          <p className="text-muted-foreground mb-6">
            We're working on more comprehensive guides about dachshund care, training, and health. Check back soon for
            new content!
          </p>
          <Button asChild>
            <Link href="/available">View Available Puppies</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
