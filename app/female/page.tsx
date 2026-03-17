"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PuppyCard } from "@/components/puppy-card"
import { PuppyFilters } from "@/components/puppy-filters"
import { useCart } from "@/lib/cart-context"

export const femalePuppies = [
  {
    id: 501,
    name: "Sadie",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$940",
    personality:
      "Sadie is a stunning 8-week-old dapple Dachshund puppy with a gorgeous chocolate and cream coat that features unique dapple markings. This sweet girl has a playful and affectionate personality, always eager to make new friends. Sadie loves toy time, gentle cuddles, and being part of family activities. Her beautiful coloring and loving nature make her a true gem. She's ready to bring joy, companionship, and endless love to her forever home.",
    color: "Dapple Chocolate & Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/72842ceb-1c40-4be4-9281-13c704d86a17.jpeg",
    available: true,
  },
  {
    id: 502,
    name: "Lily",
    age: "7 weeks",
    gender: "Female" as const,
    price: "$960",
    personality:
      "Lily is an absolutely breathtaking 7-week-old merle Dachshund puppy with captivating features and mesmerizing eyes. Her unique coat pattern showcases beautiful chocolate and tan merle markings that make her truly one-of-a-kind. Lily has a gentle and sweet temperament, enjoying both playtime with her siblings and quiet moments of affection. This precious girl is smart, loving, and ready to become your devoted companion and family member.",
    color: "Chocolate & Tan Merle",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.1 lbs",
    image: "/images/184f289d-d42f-4219-b530-d7d3561ee6f7.jpeg",
    available: true,
  },
  {
    id: 503,
    name: "Luna",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$970",
    personality:
      "Luna is an enchanting 8-week-old cream Dachshund puppy with the most beautiful blue eyes and a soft, silky coat. This angelic girl has a calm and observant personality, always watching the world with curiosity and wonder. Luna loves gentle play, snuggling in cozy blankets, and following her favorite people around. Her serene nature and stunning appearance make her an absolute treasure. She's ready to fill your life with love, peace, and companionship.",
    color: "Cream with Blue Eyes",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/68fbc715-7084-43f0-bac3-046bdd369ff1.jpeg",
    available: true,
  },
  {
    id: 504,
    name: "Coco",
    age: "7 weeks",
    gender: "Female" as const,
    price: "$930",
    personality:
      "Coco is an adorable 7-week-old chocolate long-haired Dachshund puppy with the softest coat and the sweetest personality. This little darling has a warm brown coat that's incredibly soft to touch, and her gentle eyes reflect her loving nature. Coco is affectionate, curious, and loves to explore. She enjoys playtime with toys, cuddle sessions, and belly rubs. With her charming looks and wonderful temperament, Coco is ready to become your cherished companion.",
    color: "Chocolate Long-Hair",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.0 lbs",
    image: "/images/6541978a-356d-4def-bad2-92149e19810a.jpeg",
    available: true,
  },
  {
    id: 123,
    name: "Doli",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$950",
    personality:
      "Doli is a precious 8-week-old female dachshund with an outstanding temperament and gentle nature. AKC registered with all health certifications, Doli has been vet-checked, vaccinated, dewormed, and is on potty training. She's house broken, great with other pets and kids, and comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Cream & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, house trained",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/doli.jpg",
    available: true,
  },
  {
    id: 124,
    name: "Dayana",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$950",
    personality:
      "Dayana is a delightful 8-week-old female dachshund with a smooth coat and excellent temperament. AKC registered and fully health-tested, Dayana has been vet-checked, vaccinated, dewormed, and is on potty training. She's house broken and wonderful with other pets and children. She comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Brown & Tan Dapple",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, house trained",
    coatType: "Long-haired",
    weight: "2.1 lbs",
    image: "/images/dayana.jpg",
    available: true,
  },
  {
    id: 125,
    name: "Dura",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$900",
    personality:
      "Dura is an adorable 8-week-old female dachshund with a loving and playful personality. AKC registered and fully health-tested, Dura has been vet-checked, vaccinated, dewormed, and is on potty training. She's house broken and excellent with other pets and children. She comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Chocolate & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, house trained",
    coatType: "Long-haired",
    weight: "2.0 lbs",
    image: "/images/dura.jpg",
    available: true,
  },
  {
    id: 126,
    name: "Moli",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$950",
    personality:
      "Moli is a charming 8-week-old female dachshund with a sweet and affectionate personality. AKC registered and fully health-tested, Moli has been vet-checked, vaccinated, dewormed, and is on potty training. She's house broken and gets along wonderfully with other pets and children. She comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Blue Merle & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, house trained",
    coatType: "Short-haired",
    weight: "2.1 lbs",
    image: "/images/moli.jpg",
    available: true,
  },
  {
    id: 127,
    name: "Stormy",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$990",
    personality:
      "Stormy is a beautiful 8-week-old female dachshund with a gorgeous dapple coat and wonderful temperament. AKC registered and fully health-tested, Stormy has been vet-checked, vaccinated, dewormed, and is on potty training. She's house broken and fantastic with other pets and children. She comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Cream Dapple",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, house trained",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/stormy.jpg",
    available: true,
  },
  {
    id: 122,
    name: "Zoey",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$800",
    personality:
      "Zoey is an 8-week-old female AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Zoey comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Brown & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/zoey.jpg",
    available: true,
  },
  {
    id: 41,
    name: "Nela",
    age: "9 weeks",
    gender: "Female" as const,
    price: "$950",
    personality:
      "Say hello to Nela, a stunning 9-week-old Dachshund puppy with the sweetest personality and the most captivating eyes. She's already showing her gentle, affectionate nature and is ready to bring endless joy to her forever home. Nela is fully registered with paperwork included, vet-checked, up-to-date on vaccinations, and dewormed. Her temperament is loving, playful, and eager to bond with her new family.",
    color: "Cream Dapple with Blue Eyes",
    bloodline: "Premium Miniature Line - Fully Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, registered",
    coatType: "Smooth",
    weight: "2.5 lbs",
    image: "/images/nela.jpeg",
    available: true,
  },
  {
    id: 26,
    name: "Fani",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$800",
    personality:
      "Fani is a gorgeous 8-week-old female dapple dachshund with a sweet and playful personality. She's healthy, well cared for, and already has her vaccinations up-to-date and is microchipped for your peace of mind.",
    color: "Dapple",
    bloodline: "Premium Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, microchipped",
    coatType: "Long-haired",
    weight: "2.0 lbs",
    image: "/fani.jpeg",
    available: true,
  },
  {
    id: 44,
    name: "Delma",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$800",
    personality:
      "Meet Delma – Your Perfect Mini Companion! Delma is an adorable 8-week-old female Mini Dachshund with a sweet personality and endless charm. With an estimated adult weight of just 10 lbs, Delma is the perfect size for families, couples, or anyone searching for a small but mighty best friend.",
    color: "Black & Tan Dapple",
    bloodline: "Premium Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.1 lbs",
    image: "/images/delma.jpeg",
    available: true,
  },
  {
    id: 103,
    name: "Daisy",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$820",
    personality:
      "Daisy is a precious 8-week-old female dachshund puppy with a heart full of love and a playful spirit. With her adorable features and gentle nature, Daisy is ready to become your cherished companion. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Brown & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/female-20daisy.jpg",
    available: true,
  },
  {
    id: 104,
    name: "Willow",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$900",
    personality:
      "Willow is a beautiful and affectionate 8-week-old female dachshund with a wonderful personality. With her elegant features and loving demeanor, Willow is eager to find her forever home. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Red & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/female-20willow.jpg",
    available: true,
  },
  {
    id: 106,
    name: "Penny",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$780",
    personality:
      "Penny is a sweet and playful 8-week-old female dachshund with a heart full of love. With her charming personality and affectionate nature, Penny is ready to bring joy to her forever home. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Cream & Brown",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.1 lbs",
    image: "/images/female-20penny.jpg",
    available: true,
  },
  {
    id: 107,
    name: "Zoey",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$990",
    personality:
      "Zoey is an enchanting 8-week-old female dachshund puppy with a vibrant personality and loving spirit. With her stunning appearance and playful nature, Zoey is the perfect companion for any loving family. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Dapple Brown & Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/female-20zoey.jpg",
    available: true,
  },
  {
    id: 108,
    name: "Hazel",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$900",
    personality:
      "Hazel is a gentle and affectionate 8-week-old female dachshund with a wonderful temperament. With her soft features and loving nature, Hazel is ready to become your cherished companion. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/female-20hazel.jpg",
    available: true,
  },
  {
    id: 120,
    name: "Molly",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$730",
    personality:
      "Molly is an adorable 8-week-old female dachshund with a sweet and gentle temperament. With her long-haired coat and charming personality, she's ready to become your cherished companion. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Cream & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/female-20molly.jpg",
    available: true,
  },
  {
    id: 121,
    name: "Coco",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$670",
    personality:
      "Coco is a beautiful 8-week-old female dachshund with a warm and loving nature. With her long-haired coat and expressive eyes, she's ready to bring joy to your home. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Brown & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.1 lbs",
    image: "/images/female-20coco.jpg",
    available: true,
  },
  {
    id: 201,
    name: "Ruby",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$980",
    personality:
      "Say hello to Ruby, an adorable 8-week-old female Dachshund puppy with a heart as big as her floppy ears! Ruby is full of playful energy, curiosity, and affection, making her the perfect companion for any loving home. She comes fully up-to-date on vaccinations and is microchipped for added peace of mind. Ruby has been raised with care, receiving plenty of socialization and attention, so she's well on her way to being a confident and loyal little friend.",
    color: "Red",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Microchipped, up-to-date on vaccinations",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/ruby.jpeg",
    available: true,
  },
  {
    id: 202,
    name: "Noosa",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$880",
    personality:
      "Noosa is an adorable 8-week-old female Dachshund with a striking black and white coat and an outgoing, friendly personality. This lively girl loves meeting new people, playing with toys, and exploring her environment with boundless curiosity and joy. Noosa is social, affectionate, and eagerly bonds with her family members of all ages. Her alert eyes and playful nature hint at a bright, intelligent mind. With her beautiful coloring and charming personality, Noosa is ready to become your delightful little friend and bring endless happiness to your home.",
    color: "Black & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.1 lbs",
    image: "/images/noosa-puppy.jpg",
    available: true,
  },
  {
    id: 203,
    name: "Nellie",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$900",
    personality:
      "Nellie is a precious 8-week-old female Dachshund with a beautiful cream-colored smooth coat and the most loving temperament. This sweet girl has been vet-checked, vaccinated, dewormed, and is ready to become part of your family. Nellie is gentle, affectionate, and loves cuddles, making her perfect for families seeking a calm yet playful companion. Her warm personality and soft appearance make her irresistible. With her AKC registration and excellent health certifications, Nellie comes ready to bring warmth, loyalty, and unconditional love to your home for years to come.",
    color: "Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.0 lbs",
    image: "/images/nellie-puppy.jpg",
    available: true,
  },
  {
    id: 204,
    name: "Macie",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$870",
    personality:
      "Macie is an adorable 8-week-old female Dachshund with a striking black and white smooth coat and an endearing, playful personality. This charming girl is curious, friendly, and loves exploring new environments with confidence and enthusiasm. Macie gets along wonderfully with children and other pets, making her an ideal family companion. Her alert expression and warm demeanor showcase her intelligent, affectionate nature. AKC registered and fully health-certified, Macie is ready to become your perfect little adventure buddy and bring joy and laughter to your household.",
    color: "Black & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.1 lbs",
    image: "/images/macie-puppy.jpg",
    available: true,
  },
  {
    id: 205,
    name: "Lyra",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$940",
    personality:
      "Lyra is a beautiful 8-week-old female Dachshund with a gorgeous liver and white smooth coat and a warm, loving personality. This gentle girl has a calm demeanor, loving eyes, and an affectionate nature that draws people to her instantly. Lyra enjoys quiet moments of companionship and gentle play, making her perfect for families of any age. Her stunning coloring and sweet temperament make her absolutely precious. AKC registered with complete health certifications, Lyra is ready to become your beloved companion and fill your heart with endless love and loyalty.",
    color: "Liver & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/lyra-puppy.jpg",
    available: true,
  },
  {
    id: 206,
    name: "Elara",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$920",
    personality:
      "Elara is a delightful 8-week-old female Dachshund with a beautiful cream smooth coat and an angelic, gentle personality. This sweet girl has soulful eyes and a calm, observant nature that makes her the perfect companion for someone seeking a loving, loyal friend. Elara enjoys both playtime and quiet cuddles, adapting beautifully to her family's lifestyle. Her serene presence and affectionate nature bring peace and joy wherever she goes. AKC registered and fully health-certified, Elara is ready to become your cherished little girl and bring warmth and devotion to your home.",
    color: "Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.1 lbs",
    image: "/images/elara-puppy.jpg",
    available: true,
  },
  {
    id: 207,
    name: "Zuri",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$950",
    personality:
      "Zuri is a stunning 8-week-old female Dachshund with a beautiful chocolate and tan smooth coat and a spirited, joyful personality. This lively girl is playful, affectionate, and full of personality, always eager to explore and spend time with her beloved family. Zuri loves interactive play, toy time, and snuggling up after adventures. Her expressive eyes and warm demeanor showcase her intelligent, loving nature. AKC registered with excellent health certifications, Zuri is ready to become your perfect little companion and bring excitement, love, and endless joy to your home.",
    color: "Chocolate & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/zuri-puppy.jpg",
    available: true,
  },
  {
    id: 510,
    name: "Nela",
    age: "9 weeks",
    gender: "Female" as const,
    price: "$950",
    personality:
      "Say hello to Nela, a stunning 9-week-old Dachshund puppy with the sweetest personality and the most captivating eyes. She's already showing her gentle, affectionate nature and is ready to bring endless joy to her forever home. Nela is fully registered with paperwork included, vet-checked, up-to-date on vaccinations, and dewormed. Her temperament is loving, playful, and eager to bond with her new family.",
    color: "Cream Dapple with Blue Eyes",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.5 lbs",
    image: "/images/nela-sold.jpg",
    available: false,
  },
  {
    id: 511,
    name: "Zoey",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$990",
    personality:
      "Zoey is an enchanting 8-week-old female dachshund puppy with a vibrant personality and loving spirit. With her stunning appearance and playful nature, Zoey is the perfect companion for any loving family. She comes with health & vet records, a small bag of her current food, blanket with her litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Dapple Brown & Cream",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/zoey-sold.jpg",
    available: false,
  },
  {
    id: 512,
    name: "Ruby",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$980",
    personality:
      "Say hello to Ruby, an adorable 8-week-old female Dachshund puppy with a heart as big as her floppy ears! Ruby is full of playful energy, curiosity, and affection, making her the perfect companion for any loving home. She comes fully up-to-date on vaccinations and is microchipped for added peace of mind. Ruby has been raised with care, receiving plenty of socialization and attention, so she's well on her way to being a confident and loyal little friend.",
    color: "Red",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, microchipped",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/ruby-sold.jpg",
    available: false,
  },
  {
    id: 513,
    name: "Otti",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$950",
    personality:
      "Meet Otti, the most adorable little chocolate dapple girl! She is the sweetest and will just love on you all day. She will follow you everywhere and make the perfect addition to your family. Otti comes with a microchip and AKC registration papers. You will not regret making her yours!",
    color: "Chocolate Dapple",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, microchipped",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/otti-sold.jpg",
    available: false,
  },
  {
    id: 520,
    name: "Calypso",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$900",
    personality:
      "Calypso is a striking 8-week-old black Dachshund puppy with an energetic and playful personality. This spirited girl loves adventure and is always ready for the next activity. Calypso is intelligent, loyal, and forms strong bonds with her family. She's perfect for active families who enjoy outdoor activities and provide plenty of playtime and training.",
    color: "Black",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/calypso-female.jpg",
    available: true,
  },
  {
    id: 521,
    name: "Nyx",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$920",
    personality:
      "Nyx is a beautiful 8-week-old black and white Dachshund puppy with a gentle and affectionate nature. This sweet girl loves cuddles and quiet moments with her family. Nyx is calm, observant, and makes an excellent companion for families seeking a more relaxed personality. Her striking appearance and loving temperament make her special.",
    color: "Black & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/nyx-female.jpg",
    available: true,
  },
  {
    id: 522,
    name: "Vesper",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$925",
    personality:
      "Vesper is an elegant 8-week-old black and tan Dachshund puppy with a sweet and nurturing personality. This caring girl has a maternal instinct even at this young age and loves looking after others. Vesper is affectionate, intelligent, and eager to please. She's wonderful with children and other pets, making her an ideal family companion.",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    image: "/images/vesper-female.jpg",
    available: true,
  },
  {
    id: 523,
    name: "Harmony",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$910",
    personality:
      "Harmony is a delightful 8-week-old cream Dachshund puppy with a balanced and peaceful personality. This calm girl loves being part of family activities and enjoys both playtime and relaxation. Harmony is responsive to training, affectionate, and great with everyone she meets. Her gentle nature and beautiful coat make her a wonderful companion.",
    color: "Cream",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/harmony-female.jpg",
    available: true,
  },
  {
    id: 524,
    name: "Aurora",
    age: "8 weeks",
    gender: "Female" as const,
    price: "$930",
    personality:
      "Aurora is a radiant 8-week-old red long-haired Dachshund puppy with a bright and cheerful personality. This joyful girl lights up every room with her enthusiasm and love for life. Aurora is playful, curious, and loves exploring with her family. Her beautiful flowing coat and wonderful temperament make her an unforgettable companion.",
    color: "Red Long-haired",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/aurora-female.jpg",
    available: true,
  },
]

export default function FemalePuppiesPage() {
  const [ageFilter, setAgeFilter] = useState("all")
  const [colorFilter, setColorFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")
  const { addToCart } = useCart()
  const router = useRouter()

  const availablePuppies = femalePuppies.filter((p) => p.available === true)

  const filteredPuppies = availablePuppies.filter((puppy) => {
    if (ageFilter !== "all") {
      const weeks = Number.parseInt(puppy.age)
      if (ageFilter === "8-10" && (weeks < 8 || weeks > 10)) return false
      if (ageFilter === "10-12" && (weeks < 10 || weeks > 12)) return false
      if (ageFilter === "12+" && weeks < 12) return false
    }

    if (colorFilter !== "all" && puppy.color !== colorFilter) return false

    if (availabilityFilter === "available" && !puppy.available) return false
    if (availabilityFilter === "reserved" && puppy.available) return false

    return true
  })

  const resetFilters = () => {
    setAgeFilter("all")
    setColorFilter("all")
    setAvailabilityFilter("all")
  }

  const handleTakeMeHome = (puppy: any, paymentType: "full" | "deposit") => {
    addToCart(
      {
        id: puppy.id,
        name: puppy.name,
        price: Number.parseFloat(puppy.price.replace(/[$,]/g, "")),
        type: "puppy",
        image: puppy.image,
      },
      paymentType,
    )
    router.push("/cart")
  }

  return (
    <div className="min-h-screen">
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl font-bold mb-4 text-balance">
              Female Dachshund Puppies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet our beautiful female dachshund puppies looking for loving families
            </p>
          </div>

          <PuppyFilters
            ageFilter={ageFilter}
            setAgeFilter={setAgeFilter}
            colorFilter={colorFilter}
            setColorFilter={setColorFilter}
            availabilityFilter={availabilityFilter}
            setAvailabilityFilter={setAvailabilityFilter}
            onReset={resetFilters}
          />

          {filteredPuppies.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No female puppies match your current filters. Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPuppies.map((puppy) => (
                <PuppyCard key={puppy.id} puppy={puppy} onTakeMeHome={handleTakeMeHome} />
              ))}
            </div>
          )}
        </div>
      </main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">© 2025 Dachshund Haven. All rights reserved.</p>
          <p className="text-sm">Located in Houston, Texas | Raising happy, healthy dachshunds with love and care.</p>
        </div>
      </footer>
    </div>
  )
}
