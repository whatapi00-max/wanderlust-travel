import { Package } from "@/types";

export const packages: Package[] = [
  {
    id: "pkg-1",
    title: "Santorini Sunset Escape",
    destination: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4c79e42d1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613395877344-13d4c79e42d1?w=800&q=80",
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed2a?w=800&q=80"
    ],
    price: 1299,
    duration: 5,
    rating: 4.9,
    reviews: 328,
    category: "Romantic",
    description: "Experience the magic of Santorini with this curated 5-day escape. Watch legendary sunsets from Oia, explore volcanic beaches, and savor authentic Greek cuisine.",
    highlights: [
      "Sunset dinner cruise around the caldera",
      "Private wine tasting at local vineyards",
      "Guided tour of Ancient Akrotiri",
      "Traditional Greek cooking class",
      "Luxury cave hotel accommodation"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Santorini",
        description: "Welcome to Santorini! Transfer to your luxury cave hotel in Oia. Evening at leisure to explore the charming village.",
        activities: ["Airport transfer", "Hotel check-in", "Sunset viewing"],
        meals: ["Welcome dinner"]
      },
      {
        day: 2,
        title: "Oia & Fira Exploration",
        description: "Discover the iconic beauty of Oia and Fira with a guided walking tour through whitewashed streets.",
        activities: ["Guided walking tour", "Blue-domed churches visit", "Local shopping"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 3,
        title: "Volcanic Adventure",
        description: "Boat tour to the volcanic islands with hot springs swimming and a sunset dinner cruise.",
        activities: ["Boat tour", "Hot springs", "Sunset cruise"],
        meals: ["Breakfast", "Dinner cruise"]
      },
      {
        day: 4,
        title: "Wine & Culture",
        description: "Visit ancient Akrotiri ruins and enjoy wine tasting at three traditional vineyards.",
        activities: ["Akrotiri tour", "Wine tasting", "Cooking class"],
        meals: ["Breakfast", "Lunch", "Cooking class dinner"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Final morning to enjoy the caldera views. Transfer to the airport.",
        activities: ["Leisure time", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ],
    inclusions: [
      "4 nights luxury accommodation",
      "Daily breakfast",
      "Airport transfers",
      "Sunset dinner cruise",
      "Wine tasting tour",
      "Professional local guide",
      "All entrance fees"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Optional activities",
      "Gratuities"
    ]
  },
  {
    id: "pkg-2",
    title: "Bali Paradise Retreat",
    destination: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80"
    ],
    price: 899,
    duration: 7,
    rating: 4.8,
    reviews: 512,
    category: "Wellness",
    description: "Immerse yourself in Bali's spiritual and natural beauty. From Ubud's rice terraces to beachside bliss in Seminyak.",
    highlights: [
      "Sacred Monkey Forest Sanctuary",
      "Tegalalang rice terrace trek",
      "Traditional Balinese spa day",
      "Sunset at Tanah Lot temple",
      "Local market tour"
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Bali",
        description: "Arrival in Denpasar, transfer to Ubud. Traditional Balinese welcome ceremony.",
        activities: ["Airport pickup", "Check-in", "Welcome massage"],
        meals: ["Welcome dinner"]
      },
      {
        day: 2,
        title: "Ubud Culture Day",
        description: "Explore Ubud's artistic heritage and visit the Sacred Monkey Forest.",
        activities: ["Monkey Forest", "Art galleries", "Ubud Palace"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 3,
        title: "Rice Terraces & Temples",
        description: "Morning trek through Tegalalang rice terraces and visit to Tirta Empul temple.",
        activities: ["Rice terrace trek", "Temple purification", "Coffee tasting"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 4,
        title: "Beach Transfer",
        description: "Move to beachside resort in Seminyak. Afternoon at leisure.",
        activities: ["Resort transfer", "Beach time", "Pool relaxation"],
        meals: ["Breakfast"]
      },
      {
        day: 5,
        title: "Island Temple Tour",
        description: "Visit iconic sea temples including Tanah Lot and Uluwatu with Kecak dance.",
        activities: ["Tanah Lot", "Uluwatu temple", "Kecak dance"],
        meals: ["Breakfast", "Dinner"]
      },
      {
        day: 6,
        title: "Spa & Wellness",
        description: "Full day of traditional Balinese spa treatments and yoga session.",
        activities: ["Yoga class", "Spa treatments", "Meditation"],
        meals: ["Breakfast", "Healthy lunch", "Detox dinner"]
      },
      {
        day: 7,
        title: "Departure",
        description: "Final morning in paradise before airport transfer.",
        activities: ["Beach sunrise", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ],
    inclusions: [
      "6 nights accommodation (3 Ubud + 3 Seminyak)",
      "Daily breakfast",
      "All transfers",
      "Guided tours",
      "Spa day package",
      "Entrance fees",
      "Yoga classes"
    ],
    exclusions: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Optional activities",
      "Alcoholic beverages"
    ]
  },
  {
    id: "pkg-3",
    title: "Kyoto Cultural Journey",
    destination: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
      "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80"
    ],
    price: 1899,
    duration: 6,
    rating: 4.9,
    reviews: 276,
    category: "Cultural",
    description: "Step into traditional Japan with this immersive Kyoto experience. Visit ancient temples, bamboo forests, and taste kaiseki cuisine.",
    highlights: [
      "Fushimi Inari shrine with 10,000 torii gates",
      "Arashiyama bamboo grove walk",
      "Traditional tea ceremony",
      "Kaiseki dinner experience",
      "Geisha district (Gion) evening walk"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kyoto",
        description: "Arrival at KIX, express train to Kyoto. Check into traditional ryokan.",
        activities: ["Airport transfer", "Train to Kyoto", "Ryokan check-in"],
        meals: ["Kaiseki dinner"]
      },
      {
        day: 2,
        title: "Temple Hopping",
        description: "Visit Kinkaku-ji (Golden Pavilion), Ryoan-ji rock garden, and Ninna-ji.",
        activities: ["Golden Pavilion", "Zen gardens", "Temple tours"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 3,
        title: "Fushimi Inari & Gion",
        description: "Early morning hike at Fushimi Inari, afternoon tea ceremony, evening in Gion.",
        activities: ["Fushimi Inari hike", "Tea ceremony", "Gion walk"],
        meals: ["Breakfast", "Tea sweets", "Dinner"]
      },
      {
        day: 4,
        title: "Arashiyama Day",
        description: "Bamboo grove walk, Tenryu-ji temple, and Monkey Park Iwatayama.",
        activities: ["Bamboo grove", "Tenryu-ji temple", "Monkey park"],
        meals: ["Breakfast", "Tofu cuisine lunch"]
      },
      {
        day: 5,
        title: "Nara Day Trip",
        description: "Day trip to Nara to visit Todai-ji and the friendly deer park.",
        activities: ["Todai-ji temple", "Deer park", "Kasuga Taisha"],
        meals: ["Breakfast", "Lunch in Nara"]
      },
      {
        day: 6,
        title: "Departure",
        description: "Final morning at Nishiki Market before transfer to airport.",
        activities: ["Nishiki Market", "Souvenir shopping", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ],
    inclusions: [
      "5 nights traditional ryokan",
      "Daily breakfast and dinner",
      "Japan Rail Pass",
      "Tea ceremony experience",
      "English-speaking guide",
      "All entrance fees",
      "Airport transfers"
    ],
    exclusions: [
      "International flights",
      "Lunches (except day 5)",
      "Personal expenses",
      "Travel insurance",
      "Optional activities"
    ]
  },
  {
    id: "pkg-4",
    title: "Machu Picchu Expedition",
    destination: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&q=80"
    ],
    price: 2299,
    duration: 8,
    rating: 4.9,
    reviews: 189,
    category: "Adventure",
    description: "Trek through the Sacred Valley to the legendary Incan citadel. Experience Peruvian culture, cuisine, and breathtaking Andean landscapes.",
    highlights: [
      "Guided tour of Machu Picchu",
      "Sacred Valley exploration",
      "Cusco historic center tour",
      "Traditional Peruvian cooking class",
      "Scenic Vistadome train journey"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Lima",
        description: "Welcome to Peru! Overnight in Lima before flight to Cusco.",
        activities: ["Airport pickup", "Hotel check-in", "Lima city walk"],
        meals: ["Welcome dinner"]
      },
      {
        day: 2,
        title: "Cusco Arrival",
        description: "Flight to Cusco, acclimatization day with gentle walking tour of historic center.",
        activities: ["Flight to Cusco", "Plaza de Armas", "Cathedral visit"],
        meals: ["Breakfast", "Coca tea welcome"]
      },
      {
        day: 3,
        title: "Sacred Valley",
        description: "Visit Pisac market and Ollantaytambo fortress in the Sacred Valley.",
        activities: ["Pisac market", "Ollantaytambo", "Textile demonstration"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 4,
        title: "Machu Picchu Day",
        description: "Early morning Vistadome train to Aguas Calientes and guided tour of Machu Picchu.",
        activities: ["Scenic train", "Machu Picchu tour", "Huayna Picchu option"],
        meals: ["Breakfast", "Box lunch"]
      },
      {
        day: 5,
        title: "Return to Cusco",
        description: "Morning in Aguas Calientes, afternoon return to Cusco.",
        activities: ["Hot springs", "Train to Cusco", "Evening at leisure"],
        meals: ["Breakfast"]
      },
      {
        day: 6,
        title: "Cusco Culture",
        description: "Saqsaywaman fortress, Qorikancha temple, and Peruvian cooking class.",
        activities: ["Saqsaywaman", "Qorikancha", "Cooking class"],
        meals: ["Breakfast", "Cooking class dinner"]
      },
      {
        day: 7,
        title: "Rainbow Mountain",
        description: "Full day trip to the stunning Rainbow Mountain (Vinicunca).",
        activities: ["Rainbow Mountain trek", "Alpaca viewing", "Scenic views"],
        meals: ["Breakfast", "Lunch"]
      },
      {
        day: 8,
        title: "Departure",
        description: "Transfer to Cusco airport for flight to Lima and international departure.",
        activities: ["Airport transfer"],
        meals: ["Breakfast"]
      }
    ],
    inclusions: [
      "7 nights accommodation",
      "All meals as indicated",
      "Domestic flights Lima-Cusco-Lima",
      "Vistadome train tickets",
      "Machu Picchu entrance",
      "All tours with guides",
      "Airport transfers"
    ],
    exclusions: [
      "International flights",
      "Huayna Picchu permit",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities"
    ]
  },
  {
    id: "pkg-5",
    title: "Maldives Luxury Overwater",
    destination: "Maldives",
    country: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80"
    ],
    price: 3499,
    duration: 6,
    rating: 5.0,
    reviews: 145,
    category: "Luxury",
    description: "Ultimate luxury escape in an overwater villa. Crystal-clear lagoons, world-class dining, and pure relaxation.",
    highlights: [
      "Stay in luxury overwater villa",
      "Private snorkeling excursion",
      "Sunset dolphin cruise",
      "Underwater restaurant dining",
      "Spa treatment over the ocean"
    ],
    itinerary: [
      {
        day: 1,
        title: "Maldives Arrival",
        description: "Seaplane transfer to your private island resort. Check into overwater villa.",
        activities: ["Seaplane transfer", "Villa check-in", "Resort orientation"],
        meals: ["Welcome dinner"]
      },
      {
        day: 2,
        title: "Island Relaxation",
        description: "Full day to enjoy your villa, private deck, and resort amenities.",
        activities: ["Villa relaxation", "Private pool", "Water sports"],
        meals: ["Breakfast", "Lunch", "Dinner"]
      },
      {
        day: 3,
        title: "Ocean Adventure",
        description: "Private snorkeling excursion and sunset dolphin watching cruise.",
        activities: ["Snorkeling", "Dolphin cruise", "Sunset viewing"],
        meals: ["Breakfast", "Beach BBQ dinner"]
      },
      {
        day: 4,
        title: "Spa & Dining",
        description: "Morning spa treatment, afternoon at leisure, dinner at underwater restaurant.",
        activities: ["Spa treatment", "Underwater restaurant", "Stargazing"],
        meals: ["Breakfast", "Dinner at 5.8 Undersea"]
      },
      {
        day: 5,
        title: "Local Island Visit",
        description: "Visit a local Maldivian island to experience authentic culture.",
        activities: ["Local island tour", "Cultural experience", "Souvenir shopping"],
        meals: ["Breakfast", "Lunch on local island"]
      },
      {
        day: 6,
        title: "Departure",
        description: "Final morning in paradise before seaplane transfer to Male airport.",
        activities: ["Sunrise yoga", "Seaplane transfer"],
        meals: ["Breakfast"]
      }
    ],
    inclusions: [
      "5 nights overwater villa",
      "All inclusive meals",
      "Seaplane transfers",
      "Snorkeling excursion",
      "Dolphin cruise",
      "Spa treatment",
      "Underwater restaurant dinner"
    ],
    exclusions: [
      "International flights",
      "Alcoholic beverages (except AI)",
      "Additional spa services",
      "Water sports beyond snorkeling",
      "Personal expenses"
    ]
  },
  {
    id: "pkg-6",
    title: "Swiss Alps Adventure",
    destination: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=800&q=80"
    ],
    price: 1999,
    duration: 5,
    rating: 4.8,
    reviews: 234,
    category: "Adventure",
    description: "Breathtaking Alpine scenery with hiking, scenic train rides, and Swiss chocolate tasting.",
    highlights: [
      "Glacier Express scenic train",
      "Hiking in Zermatt with Matterhorn views",
      "Lake Geneva cruise",
      "Swiss chocolate factory tour",
      "Traditional fondue dinner"
    ],
    itinerary: [
      {
        day: 1,
        title: "Zurich to Lucerne",
        description: "Arrival in Zurich, transfer to Lucerne. Evening lakeside walk.",
        activities: ["Airport transfer", "Lake Lucerne", "Old town walk"],
        meals: ["Welcome fondue dinner"]
      },
      {
        day: 2,
        title: "Mount Pilatus",
        description: "Cogwheel train to Mount Pilatus summit with panoramic views.",
        activities: ["Cogwheel train", "Summit hiking", "Dragon ride"],
        meals: ["Breakfast", "Lunch at summit"]
      },
      {
        day: 3,
        title: "Glacier Express",
        description: "Full day on the Glacier Express from Zermatt to St. Moritz.",
        activities: ["Glacier Express journey", "Scenic viewing", "Zermatt visit"],
        meals: ["Breakfast", "Onboard lunch"]
      },
      {
        day: 4,
        title: "Interlaken & Lakes",
        description: "Visit Interlaken and take a cruise on Lake Brienz.",
        activities: ["Interlaken", "Lake Brienz cruise", "Chocolate factory"],
        meals: ["Breakfast", "Lunch", "Chocolate tasting"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Morning in Zurich for last-minute shopping before airport transfer.",
        activities: ["Zurich shopping", "Airport transfer"],
        meals: ["Breakfast"]
      }
    ],
    inclusions: [
      "4 nights accommodation",
      "Daily breakfast",
      "Glacier Express tickets",
      "Swiss Travel Pass",
      "Guided hikes",
      "Chocolate factory tour",
      "Lake cruise"
    ],
    exclusions: [
      "International flights",
      "Lunches (except day 2)",
      "Personal expenses",
      "Optional cable cars",
      "Travel insurance"
    ]
  }
];
