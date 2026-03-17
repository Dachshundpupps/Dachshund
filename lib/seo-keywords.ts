// SEO Keywords for Dachshund Puppy Business
// These keywords are used throughout the website for SEO optimization,
// blog posts, meta descriptions, and content creation

export const marketingKeywords = [
  "Dachshund puppies for sale",
  "Miniature dachshund breeders",
  "AKC registered dachshund puppies",
  "Healthy dachshund puppies",
  "Dachshund puppy delivery service",
  "Affordable dachshund puppies",
  "Reputable dachshund kennel",
  "Dachshund puppy adoption process",
  "Long-haired dachshund puppies",
  "Smooth coat dachshund for sale",
  "Dachshund puppy care guide",
  "Dachshund puppy training tips",
  "Buy dachshund puppy online",
  "Dachshund puppy health guarantee",
  "Dachshund puppy starter kit",
] as const

export const highSearchVolumeKeywords = [
  "Dachshund puppies for sale",
  "Miniature dachshund puppies",
  "Long-haired dachshund puppies",
  "AKC registered dachshund",
  "Dachshund breeders near me",
  "Dachshund puppy adoption",
  "Smooth coat dachshund",
  "Dachshund puppy care tips",
  "Dachshund puppy training",
  "Dachshund puppy delivery",
  "Healthy dachshund puppies",
  "Dachshund puppy price",
  "Dachshund puppy food",
  "Dachshund puppy toys",
  "Dachshund puppy health guarantee",
] as const

export const allKeywords = [...new Set([...marketingKeywords, ...highSearchVolumeKeywords])] as const

// Helper function to get keywords for specific topics
export function getKeywordsForTopic(topic: string): string[] {
  const topicKeywordMap: Record<string, string[]> = {
    breeding: [
      "AKC registered dachshund puppies",
      "Reputable dachshund kennel",
      "Miniature dachshund breeders",
      "Dachshund breeders near me",
      "Healthy dachshund puppies",
    ],
    delivery: ["Dachshund puppy delivery service", "Buy dachshund puppy online", "Dachshund puppy delivery"],
    care: [
      "Dachshund puppy care guide",
      "Dachshund puppy care tips",
      "Dachshund puppy food",
      "Dachshund puppy toys",
      "Dachshund puppy starter kit",
    ],
    training: ["Dachshund puppy training tips", "Dachshund puppy training"],
    adoption: ["Dachshund puppy adoption process", "Dachshund puppy adoption", "Dachshund puppies for sale"],
    health: ["Dachshund puppy health guarantee", "Healthy dachshund puppies"],
    coatTypes: ["Long-haired dachshund puppies", "Smooth coat dachshund for sale", "Smooth coat dachshund"],
    pricing: ["Affordable dachshund puppies", "Dachshund puppy price"],
  }

  return topicKeywordMap[topic] || []
}
