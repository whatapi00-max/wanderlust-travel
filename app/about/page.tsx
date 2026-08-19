import Image from "next/image"
import { Compass, Heart, Shield, Users } from "lucide-react"

const team = [
  {
    name: "Sheikh Khalid Al-Rashid",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Travel enthusiast with 15 years of experience in the tourism industry across the Middle East.",
  },
  {
    name: "Omar Hassan",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Expert in crafting seamless travel experiences across 50+ countries worldwide.",
  },
  {
    name: "Fatima Al-Zahra",
    role: "Travel Curator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    bio: "Former travel blogger who has visited over 100 countries and specializes in luxury experiences.",
  },
  {
    name: "Ahmad Khalil",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Dedicated to ensuring every traveler from the UAE has an unforgettable journey.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We live and breathe travel. Every destination we offer is personally vetted by our team.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Your safety is our priority. We partner only with verified and reliable service providers.",
  },
  {
    icon: Compass,
    title: "Curated Experiences",
    description: "We handpick unique experiences that go beyond typical tourist attractions.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Every traveler is unique. We tailor our packages to match your preferences.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
            alt="About Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About SK Tours & Travels</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Creating unforgettable travel experiences from Dubai since 2015
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-6">
            SK Tours & Travels was born from a simple belief: travel should be transformative, not transactional. 
            Founded in 2015 in Dubai, UAE, we started as a small team of passionate travelers who wanted to 
            share the world&apos;s most extraordinary destinations with others across the Middle East.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            What began as a boutique travel consultancy has grown into a global community of explorers, 
            adventurers, and dreamers. Yet, our core mission remains unchanged—to craft journeys that 
            inspire, connect, and create lasting memories.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, we&apos;ve helped over 50,000 travelers from the UAE and Middle East discover their dream destinations across 100+ countries. 
            Every journey we plan is infused with the same passion and attention to detail that defined our first trip.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-primary-foreground/80">Happy Travelers</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-primary-foreground/80">Countries</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-primary-foreground/80">Travel Packages</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">10+</p>
              <p className="text-primary-foreground/80">Years in UAE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
