"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PuppyCard } from "@/components/puppy-card"
import { PuppyFilters } from "@/components/puppy-filters"
import { useCart } from "@/lib/cart-context"

export const malePuppies = [
  {
    id: 410,
    name: "Rocky",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Rocky is a handsome 8-week-old black and tan Dachshund puppy with a bold and confident personality. This spirited little guy has a glossy coat and an adventurous nature that makes him stand out. Rocky loves to explore, play with toys, and snuggle up after an exciting day. With his loyal temperament and charming character, Rocky is ready to become your devoted companion and bring endless joy to your home.",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/rocky-sold.jpg",
    available: false,
  },
  {
    id: 411,
    name: "Cooper",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Cooper is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Cooper comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/cooper-sold.jpg",
    available: false,
  },
  {
    id: 412,
    name: "Louie",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$720",
    personality:
      "Louie is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Louie comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Black, Tan & White",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/louie-sold.jpg",
    available: false,
  },
  {
    id: 413,
    name: "Axel",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$980",
    personality:
      "A handsome long-haired mini Dachshund puppy looking for his forever home! Loves car rides, playing ball, taking naps, and going on adventures. Will love you unconditionally and turn heads wherever he goes!",
    color: "Red Long-haired",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.4 lbs",
    image: "/images/axel-sold.jpg",
    available: false,
  },
  {
    id: 414,
    name: "Pete",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$920",
    personality:
      "Hi, I'm Pete the Mini Dachshund puppy! I'm a sweetheart for sure and a perfect little ray of sunshine. I'm just starting to explore this big wide world, my siblings and I enjoy the outdoors, and my personal favorite activity is spending time hanging out with my humans. I come with a microchip. Will you be my person? I will share all my puppy kisses with you!",
    color: "Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, microchipped",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/pete-sold.jpg",
    available: false,
  },
  {
    id: 415,
    name: "Princeton",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$980",
    personality:
      "Princeton's favorite thing to do is give cuddles. He is more relaxed and prefers to sit back and watch his siblings wrestle. However, if they come for his favorite stuffed toy the battle is on. He loves to chase the kids around and be wherever they are all the time. If you are looking for him, you will find him snuggled up on warm blankets. Princeton comes with health & vet records, a small bag of his current food, blanket with his litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Chocolate & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.4 lbs",
    image: "/images/princeton-sold.jpg",
    available: false,
  },
  {
    id: 420,
    name: "Bondi",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$895",
    personality:
      "Bondi is a charming 8-week-old cream and white Dachshund puppy with striking features and a wonderful temperament. This affectionate boy has a calm yet playful nature, perfect for families seeking a gentle companion. Bondi loves exploring, playing fetch, and snuggling beside his favorite humans. His loyal personality and beautiful coat make him an excellent choice for any loving home.",
    color: "Cream & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/bondi-male.jpg",
    available: true,
  },
  {
    id: 421,
    name: "Sable",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$910",
    personality:
      "Sable is a stunning 8-week-old sable Dachshund puppy with a unique coat pattern and spirited personality. This confident boy loves adventure and outdoor exploration, yet he's also sweet and affectionate with his family. Sable is intelligent, eager to please, and makes an excellent playmate for active families. His beautiful coloring and charming nature make him unforgettable.",
    color: "Sable",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/sable-male.jpg",
    available: true,
  },
  {
    id: 422,
    name: "Atlas",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$925",
    personality:
      "Atlas is a handsome 8-week-old chocolate and white Dachshund puppy with a strong and confident personality. This brave little explorer loves discovering new places and meeting new people. Atlas is loyal, protective of his family, and incredibly affectionate. He thrives in active households and makes a wonderful companion for families who can provide plenty of playtime and love.",
    color: "Chocolate & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    image: "/images/atlas-male.jpg",
    available: true,
  },
  {
    id: 423,
    name: "Zephyr",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$905",
    personality:
      "Zephyr is a beautiful 8-week-old light cream Dachshund puppy with an elegant appearance and sweet temperament. This gentle boy is calm and observant, yet full of puppy energy when playtime comes around. Zephyr loves cuddles, gentle play, and being close to his family. His serene nature and loving disposition make him perfect for families seeking a balanced companion.",
    color: "Light Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/zephyr-male.jpg",
    available: true,
  },
  {
    id: 424,
    name: "Echo",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$915",
    personality:
      "Echo is a precious 8-week-old cream and white Dachshund puppy with a cheerful and playful personality. This social little guy loves being the center of attention and makes friends easily. Echo is smart, responsive, and eager to learn, making him ideal for families interested in training. His joyful spirit and loving nature will brighten any home.",
    color: "Cream & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/echo-male.jpg",
    available: true,
  },
  {
    id: 425,
    name: "Louis",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$935",
    personality:
      "Louis is a delightful 8-week-old brown and white Dachshund puppy with a warm personality and loving disposition. This affectionate boy is always ready for a cuddle or a play session. Louis is great with children and other pets, making him an excellent family companion. His gentle nature and beautiful coat make him a cherished addition to any loving home.",
    color: "Brown & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    image: "/images/louis-male.jpg",
    available: true,
  },
  {
    id: 426,
    name: "Kairo",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$920",
    personality:
      "Kairo is an impressive 8-week-old cream and tan Dachshund puppy with striking blue eyes and an alert personality. This intelligent boy loves exploring and playing fetch. Kairo is affectionate, responsive to training, and makes an excellent companion for active families. His beautiful appearance and wonderful temperament make him stand out.",
    color: "Cream & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/kairo-male.jpg",
    available: true,
  },
  {
    id: 401,
    name: "Rocky",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$920",
    personality:
      "Rocky is a handsome 8-week-old black and tan Dachshund puppy with a bold and confident personality. This spirited little guy has a glossy coat and an adventurous nature that makes him stand out. Rocky loves to explore, play with toys, and snuggle up after an exciting day. With his loyal temperament and charming character, Rocky is ready to become your devoted companion and bring endless joy to your home.",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/9b1563d1-65c3-4ae8-93a2-486717ecf21f.jpeg",
    available: true,
  },
  {
    id: 402,
    name: "Buddy",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$950",
    personality:
      "Buddy is a stunning 8-week-old dapple Dachshund puppy with mesmerizing chocolate and tan markings that create a unique pattern. This sweet boy has a gentle and affectionate nature, always ready to shower you with puppy kisses. Buddy loves being the center of attention and enjoys both playtime and cuddle sessions. With his beautiful coat and loving personality, Buddy is the perfect addition to any family looking for a loyal companion.",
    color: "Dapple Chocolate & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    image: "/images/7fe3b1f2-26c3-44a0-b1fd-b1adac9f41c9.jpeg",
    available: true,
  },
  {
    id: 403,
    name: "Daddy",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$960",
    personality:
      "Daddy is an extraordinary 8-week-old dapple Dachshund puppy with captivating features and a gentle soul. His unique markings and expressive eyes make him truly one-of-a-kind. Daddy has a calm and observant personality, always watching the world with curiosity. He's affectionate, loves gentle play, and forms deep bonds with his family. This special boy is ready to bring warmth, loyalty, and unconditional love to his forever home.",
    color: "Dapple Multi-Color",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/35d7a862-d98a-46ba-a6d4-f9243c9633d9.jpeg",
    available: true,
  },
  {
    id: 404,
    name: "Mola",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$940",
    personality:
      "Mola is an adorable 8-week-old cream Dachshund puppy with a silky coat and the sweetest disposition. This charming boy has a playful yet gentle nature, making him perfect for families with children or other pets. Mola loves outdoor adventures, chasing toys, and curling up in warm laps. His soft cream coat and loving personality make him irresistible. With proper care and training, Mola will grow into a devoted and well-mannered companion.",
    color: "Cream",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/8371e8e5-a789-4bb9-8e88-4021a1450d19.jpeg",
    available: true,
  },
  {
    id: 405,
    name: "Dole",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$930",
    personality:
      "Dole is a precious 8-week-old golden-red long-haired Dachshund puppy with the most adorable features and sweetest temperament. His soft, flowing coat and warm eyes give him an irresistible charm. Dole is curious, friendly, and loves exploring new environments. He's great with people of all ages and enjoys both active play and peaceful cuddles. This beautiful boy is ready to fill your home with love, laughter, and countless happy memories.",
    color: "Golden Red",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/21301424-737f-47a2-8605-eb6f8bc2c7ab.jpeg",
    available: true,
  },
  {
    id: 120,
    name: "Cooper",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$830",
    personality:
      "Cooper is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Cooper comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/cooper.jpg",
    available: true,
  },
  {
    id: 121,
    name: "Tucker",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$830",
    personality:
      "Tucker is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Tucker comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Black & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/tucker.jpg",
    available: true,
  },
  {
    id: 122,
    name: "Jasper",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$720",
    personality:
      "Jasper is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Jasper comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Chocolate & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/jasper.jpg",
    available: true,
  },
  {
    id: 123,
    name: "Doli",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$950",
    personality:
      "Doli is a precious 8-week-old male dachshund with an outstanding temperament and gentle nature. AKC registered with all health certifications, Doli has been vet-checked, vaccinated, dewormed, and is on potty training. He's house broken, great with other pets and kids, and comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Cream & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, house trained",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/doli.jpg",
    available: true,
  },
  {
    id: 125,
    name: "Ace",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$720",
    personality:
      "Ace is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Ace comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Golden",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/ace.jpg",
    available: true,
  },
  {
    id: 126,
    name: "Louie",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$720",
    personality:
      "Louie is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Louie comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Black, Tan & White",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/louie.jpg",
    available: true,
  },
  {
    id: 127,
    name: "Bentley",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$680",
    personality:
      "Bentley is an 8-week-old male AKC registered dachshund with an excellent temperament. Well-socialized and healthy, Bentley comes with health & vet records, a small bag of current food, blanket with litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support. Perfect for families and great with kids and other pets.",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/bentley.jpg",
    available: true,
  },
  {
    id: 53,
    name: "Dambi",
    age: "10 weeks",
    gender: "Male" as const,
    price: "$870",
    personality:
      "Dambi is a heart-stealer with a soft, light brown coat and soulful eyes that understand you instantly. This 10-week-old AKC registered male balances playful energy with a gentle, observant nature, making him perfect for both quiet cuddles and curious adventures. With his floppy ears and growing paws, Dambi is full of promise and personality, ready to bring joy, loyalty, and warmth to a loving home.",
    color: "Dapple Brown & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.8 lbs",
    images: ["/dambi-1.jpg", "/dambi-2.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dambi-TAGlge68w6QdTp4s3IkbG3IWMF0Q6J.mp4"],
    available: true,
  },
  {
    id: 54,
    name: "Polis",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$900",
    personality:
      "Polis is a picture of puppy perfection with a soft tan coat, soulful eyes, and naturally curious charm. This 8-week-old AKC registered male has a gentle demeanor and alert expression that hint at a bright, affectionate personality waiting to blossom. Whether perched indoors or exploring new surroundings, Polis brings quiet confidence and irresistible warmth, ready to become someone's loyal companion full of cuddles, playfulness, and heart.",
    color: "Chocolate & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    images: ["/polis-1.jpg", "/polis-2.jpg", "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Polis-0hO96aR0o8hDKPOc2xDYCj7Pdt5WGJ.mp4"],
    available: true,
  },
  {
    id: 55,
    name: "Hubs",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Hubs is an 8-week-old male Dachshund puppy, AKC registered and full of personality. With his sleek black-and-tan coat and curious gaze, Hubs already shows the confidence and charm that make Dachshunds such loyal companions. His alert expression and playful nature hint at a bright future filled with adventures and affection, ready to grow into a loving, devoted addition to the perfect home.",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    images: ["/hubs-1.jpg", "/hubs-2.jpg"],
    available: true,
  },
  {
    id: 56,
    name: "Mass",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$900",
    personality:
      "Mass is an 8-week-old male Dachshund puppy, AKC registered and full of charm. With his expressive eyes and soft, tri-colored coat, Mass already shows the gentle temperament and playful spirit that make Dachshunds such beloved companions. His curious nature and affectionate personality shine through in every interaction, ready to bring warmth, joy, and endless entertainment to his forever home.",
    color: "Dapple Tri-Color",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    images: ["/mass-1.jpg", "/mass-2.jpg"],
    available: true,
  },
  {
    id: 57,
    name: "Sagard",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Sagard is an 8-week-old male Dachshund puppy, AKC registered and brimming with charm. With his soft coat and bright, curious eyes, Sagard already shows the affectionate nature and playful energy that make Dachshunds such treasured companions. His gentle temperament and eagerness to explore make him the perfect blend of cuddle buddy and adventure partner, ready to grow into a loyal, loving member of a lucky family.",
    color: "Chocolate & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    images: ["/sagard-1.jpeg", "/sagard-2.jpeg"],
    available: true,
  },
  {
    id: 58,
    name: "Panda",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$920",
    personality:
      "Panda is an 8-week-old male Dachshund puppy, AKC registered and irresistibly adorable. With his dappled coat and striking blue eyes, Panda is a bundle of charm and curiosity that captures hearts instantly. He already shows the sweet, playful nature that makes Dachshunds such cherished companions, combining unique beauty with an affectionate personality. Ready to snuggle his way into your heart and home with endless love and devotion.",
    color: "Dapple with Blue Eyes",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    images: ["/panda-1.jpeg", "/panda-2.jpg"],
    available: true,
  },
  {
    id: 44,
    name: "Perry",
    age: "9 weeks",
    gender: "Male" as const,
    price: "$800",
    personality:
      "Perry is an adorable 9-week-old male Mini Dachshund who is ready to bring love, joy, and endless cuddles into his forever home. With an estimated adult weight of just 11 lbs, Perry is the perfect size for families, singles, or anyone looking for a loyal little companion.",
    color: "Blue Dapple & White",
    bloodline: "Premium Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    image: "/images/replace-20as-20perry.jpg",
    available: false,
  },
  {
    id: 45,
    name: "Ruffus",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Are you looking for a loyal, affectionate, and utterly charming four-legged friend? Allow us to introduce you to Ruffus, our stunning long-haired Miniature Dachshund puppy who is now ready to bring love, laughter, and a whole lot of cuddles into a forever home. With his beautiful flowing coat, soulful eyes, and endearing personality, Ruffus is more than just a puppy—he's a lifelong companion waiting to make your family complete.",
    color: "Black & Tan",
    bloodline: "Premium Long-Haired Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/replace-20as-20ruffus.jpg",
    available: false,
  },
  {
    id: 46,
    name: "Shaine",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$800",
    personality:
      "Say hello to Shaine, a long-haired miniature Dachshund puppy with charm, charisma, and a spirit as sweet as his name. From his silky coat to his warm gaze, Shaine is a standout—radiating love, curiosity, and the kind of soulful connection that lasts a lifetime. Shaine is not your average pup. He has a peaceful yet playful nature that immediately draws people in. Whether he's curling up beside you for a nap or trotting around the yard on his tiny paws, he does everything with quiet confidence and genuine joy. With his fluffy coat and loving personality, he's the kind of puppy who makes your house feel like home.",
    color: "Brown & Tan",
    bloodline: "Premium Long-Haired Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/images/replace-20shaine.jpg",
    available: false,
  },
  {
    id: 47,
    name: "Shama",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Meet Shama, a stunning 8-week-old long-haired miniature Dachshund with a beautiful black coat and a heart full of love. Shama is gentle, affectionate, and ready to become your loyal companion. With his soft, flowing coat and soulful eyes, he's the perfect addition to any loving home.",
    color: "Black Long-Hair",
    bloodline: "Premium Long-Haired Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.3 lbs",
    image: "/images/shama.jpeg",
    available: false,
  },
  {
    id: 48,
    name: "Skidoo",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "If you're searching for the perfect blend of beauty, personality, and loyalty in a puppy, look no further—Skidoo, a long-haired miniature dachshund, is ready to capture your heart. With his silky coat, curious spirit, and affectionate nature, Skidoo is more than just a puppy; he's a lifelong companion waiting for his forever family. Skidoo's luxurious, flowing coat shines with health and feels soft to the touch, making every cuddle irresistible. His floppy ears frame his sweet face, and his expressive eyes sparkle with intelligence and warmth.",
    color: "Black Long-Hair",
    bloodline: "Premium Long-Haired Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.4 lbs",
    image: "/images/skidoo.jpeg",
    available: true,
  },
  {
    id: 49,
    name: "Skittles",
    age: "10 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Some puppies are cute. Some are clever. Some are cuddly. Skittles is all three and then some. At just 10 weeks old, this stunning long-haired mini Dachshund has already mastered the art of stealing hearts with a single look. With his silky coat, soulful eyes, and bright, joyful personality, Skittles is ready to trade our loving arms for yours and begin the happiest chapter of his life—by your side.",
    color: "Dapple Brown & Tan",
    bloodline: "Premium Long-Haired Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.7 lbs",
    image: "/images/skittles.jpeg",
    available: true,
  },
  {
    id: 36,
    name: "Draco",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$800",
    personality:
      "Say hello to Draco! He is a very sweet and snuggly pup. He loves to play with his littermates. He is very laid back, loves attention, and is very sweet. He has a beautiful black and tan coat with dappled markings. He would love to come home and be your new best friend!",
    color: "Black & Tan Dapple",
    bloodline: "Premium Long-Haired Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Long-haired",
    weight: "2.2 lbs",
    image: "/draco.jpeg",
    available: false,
  },
  {
    id: 21,
    name: "Max",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$800",
    personality:
      "In a world full of noise, chaos, and busy schedules, it's rare to find a little soul who brings pure peace, quiet joy, and unwavering love into your life. Meet Max — a long-haired mini Dachshund puppy who doesn't just fit into your home… he completes it. With his serene personality, loving heart, and classic Dachshund charm, Max is a puppy like no other. Every glance from him is a hug in disguise. Every tail wag is a quiet celebration of your presence.",
    color: "Chocolate & Tan",
    bloodline: "Premium Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/replace-20as-20max.jpg",
    available: false,
  },
  {
    id: 24,
    name: "Emily",
    age: "9 weeks",
    gender: "Male" as const,
    price: "$800",
    personality:
      "Say hello to Emily — a 9-week-old male Dachshund puppy with a heart full of love and a look that melts hearts. With his soft, cream-and-light brown coat and striking blue eyes, Emily is a true standout. His long body, short legs, and floppy ears give him that classic Dachshund charm, while his playful expression and gentle nature make him an irresistible companion.",
    color: "Cream & Light Brown",
    bloodline: "Premium Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    image: "/images/replace-20as-20emily.jpg",
    available: false,
  },
  {
    id: 25,
    name: "Kruz",
    age: "9 weeks",
    gender: "Male" as const,
    price: "$850",
    personality:
      "Meet Kruz — a breathtaking 9-week-old male Dachshund puppy with a coat as unique as his personality. His soft blend of cream, white, and light brown fur gives him a one-of-a-kind look that's sure to turn heads. With soulful light-colored eyes and a sweet pink nose, Kruz has an expressive face that radiates warmth and curiosity.",
    color: "Cream, White & Light Brown",
    bloodline: "Premium Miniature Line",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.5 lbs",
    image: "/images/replace-20as-20kruz.jpg",
    available: true,
  },
  {
    id: 301,
    name: "Axel",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$980",
    personality:
      "A handsome long-haired mini Dachshund puppy looking for his forever home! Loves car rides, playing ball, taking naps, and going on adventures. Will love you unconditionally and turn heads wherever he goes!",
    color: "Red Long-haired",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Microchipped, up-to-date on vaccinations",
    coatType: "Long-haired",
    weight: "2.4 lbs",
    image: "/images/name-20is-20axel.jpeg",
    available: true,
  },
  {
    id: 302,
    name: "Otti",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$950",
    personality:
      "Meet Otti, the most adorable little chocolate dapple boy! He is the sweetest and will just love on you all day. He will follow you everywhere and make the perfect addition to your family. Otti comes with a microchip and AKC registration papers. You will not regret making him yours!",
    color: "Chocolate Dapple",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Microchipped, up-to-date on vaccinations",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/otti.jpeg",
    available: true,
  },
  {
    id: 303,
    name: "Pete",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$920",
    personality:
      "Hi, I'm Pete the Mini Dachshund puppy! I'm a sweetheart for sure and a perfect little ray of sunshine. I'm just starting to explore this big wide world, my siblings and I enjoy the outdoors, and my personal favorite activity is spending time hanging out with my humans. I come with a microchip. Will you be my person? I will share all my puppy kisses with you!",
    color: "Cream",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Microchipped, healthy and ready",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/pete.jpeg",
    available: false,
  },
  {
    id: 304,
    name: "Princeton",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$980",
    personality:
      "Princeton's favorite thing to do is give cuddles. He is more relaxed and prefers to sit back and watch his siblings wrestle. However, if they come for his favorite stuffed toy the battle is on. He loves to chase the kids around and be wherever they are all the time. If you are looking for him, you will find him snuggled up on warm blankets. Princeton comes with health & vet records, a small bag of his current food, blanket with his litter's scent, favorite toy, puppy care and feeding guide, optional microchip, and ongoing breeder support.",
    color: "Chocolate & Tan",
    bloodline: "Premium Long-Haired Miniature Line - AKC Registered",
    healthTested: "Yes - Health & vet records, microchip optional",
    coatType: "Long-haired",
    weight: "2.4 lbs",
    image: "/images/princeton.jpeg",
    available: false,
  },
  {
    id: 305,
    name: "Regis",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$980",
    personality:
      "I'm Regis the Mini Dachshund puppy, and I love you already! With my good looks and athletic nature, you've got a winning combination of beauty in action! You'll love how quickly I pick up on new commands and tricks due to my intelligent mind. I come with a microchip and AKC registration papers. I can't wait to smother you in puppy kisses, so act quickly!",
    color: "Black & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Microchipped, up-to-date on vaccinations",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/regis.jpeg",
    available: true,
  },
  {
    id: 128,
    name: "Melbourne",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$890",
    personality:
      "Melbourne is an absolutely stunning 8-week-old male dachshund puppy with striking black and white markings and an irresistible charm. This handsome boy features a beautiful tricolor coat with tan accents that make him truly eye-catching. Melbourne has a confident yet gentle temperament, combining playful energy with a calm, observant nature. He loves exploring, playing with toys, and snuggling after an exciting day of adventures. With his gorgeous looks and sweet disposition, Melbourne is ready to become your devoted companion and bring endless joy, laughter, and unconditional love to your home.",
    color: "Black, White & Tan",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed, had shots",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/melbourne-male-puppy.jpg",
    available: true,
  },
  {
    id: 129,
    name: "Silver",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$1050",
    personality:
      "Silver is a breathtaking 8-week-old male Dachshund with a rare and stunning silver coat and striking blue eyes. This exceptional boy has a confident yet gentle personality, combining playful energy with a calm, observant nature. Silver is affectionate with family, curious about his surroundings, and loves both interactive play and cozy cuddle sessions. His unique silvery coloring and loving temperament make him truly one-of-a-kind. AKC registered with all health certifications, Silver comes ready to bring distinction, joy, and devoted companionship to his forever home.",
    color: "Silver with Blue Eyes",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.3 lbs",
    image: "/images/silver-male-puppy.jpg",
    available: true,
  },
  {
    id: 130,
    name: "Jeffry Mae",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$890",
    personality:
      "Jeffry Mae is an 8-week-old male Dachshund with a charming brown and white smooth coat and an equally lovable personality. This sweet boy is playful, affectionate, and full of personality. Jeffry Mae loves exploring, socializing with people, and snuggling after playtime. His alert eyes and warm demeanor hint at a bright, inquisitive mind and a heart full of love. AKC registered and fully health-checked, Jeffry Mae is ready to become your devoted little companion and fill your home with laughter and endless cuddles.",
    color: "Brown & White",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.2 lbs",
    image: "/images/jeffry-mae-puppy.jpg",
    available: true,
  },
  {
    id: 131,
    name: "Murphy",
    age: "8 weeks",
    gender: "Male" as const,
    price: "$920",
    personality:
      "Murphy is a handsome 8-week-old male Dachshund with a sleek black coat and soulful eyes that capture hearts instantly. This charming boy has a bold yet gentle personality, making him perfect for active families who appreciate a companion with confidence and warmth. Murphy loves outdoor adventures, interactive play, and bonding with his human family. His shiny coat and loving nature make him irresistible. AKC registered with excellent health certifications, Murphy is ready to become your loyal best friend and bring joy to your home for years to come.",
    color: "Black",
    bloodline: "Premium Miniature Line - AKC Registered",
    healthTested: "Yes - Vet-checked, vaccinated, dewormed",
    coatType: "Smooth",
    weight: "2.4 lbs",
    image: "/images/murphy-puppy.jpg",
    available: true,
  },
]

export default function MalePuppiesPage() {
  const [ageFilter, setAgeFilter] = useState("all")
  const [colorFilter, setColorFilter] = useState("all")
  const [availabilityFilter, setAvailabilityFilter] = useState("all")
  const { addToCart } = useCart()
  const router = useRouter()

  const availablePuppies = malePuppies.filter((p) => p.available === true)

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
              Male Dachshund Puppies
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Meet our handsome male dachshund puppies looking for loving families
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
                No male puppies match your current filters. Try adjusting your search criteria.
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
