"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, CalendarIcon, Users, Star, Plane, Compass, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { destinations } from "@/data/destinations"
import { packages } from "@/data/packages"
import { blogPosts } from "@/data/blog"
import { testimonials } from "@/data/testimonials"
import { format } from "date-fns"

export default function HomePage() {
  const featuredDestinations = destinations.slice(0, 6)
  const featuredPackages = packages.slice(0, 4)
  const featuredBlogPosts = blogPosts.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)
  
  const [date, setDate] = useState<Date>()
  const [travelers, setTravelers] = useState("2 Adults")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80"
            alt="Beautiful travel destination"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
            Discover Your Next
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Great Adventure
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore breathtaking destinations and create unforgettable memories with Happy Tour FZ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations" className="inline-flex">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                Explore Destinations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/packages" className="inline-flex">
              <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-white text-white bg-white/10 hover:bg-white hover:text-black">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 -mt-20 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Destination</label>
                <div className="flex items-center space-x-2 border rounded-lg px-3 py-2">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="flex-1 outline-none bg-transparent"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Dates</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="flex items-center space-x-2 border rounded-lg px-3 py-2 cursor-pointer hover:border-primary">
                      <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                      <span className="flex-1 text-sm text-muted-foreground">
                        {date ? format(date, "PP") : "When?"}
                      </span>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Travelers</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="flex items-center space-x-2 border rounded-lg px-3 py-2 cursor-pointer hover:border-primary">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span className="flex-1 text-sm">{travelers}</span>
                      <ChevronDown className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-56">
                    <div className="space-y-2">
                      {["1 Adult", "2 Adults", "2 Adults, 1 Child", "2 Adults, 2 Children", "Group (5+)"].map((option) => (
                        <div
                          key={option}
                          onClick={() => setTravelers(option)}
                          className="cursor-pointer p-2 hover:bg-muted rounded-md text-sm"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex items-end">
                <Link href="/packages" className="w-full">
                  <Button className="w-full h-[42px]">Search</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From pristine beaches to majestic mountains, discover the world&apos;s most sought-after locations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <Link key={destination.id} href={`/destinations`}>
                <div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-white text-sm">{destination.rating}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    <p className="text-white/80 text-sm">{destination.country}</p>
                    <p className="text-white font-semibold mt-2">From AED {destination.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/destinations">
              <Button variant="outline" size="lg">
                View All Destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Curated</h3>
              <p className="text-muted-foreground">
                Every destination and package is carefully selected by our travel experts for unforgettable experiences.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-muted-foreground">
                Book with confidence using our secure payment system and flexible cancellation policies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-muted-foreground">
                We guarantee competitive prices so you can travel more while spending less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Travel Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All-inclusive packages designed for the perfect getaway
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.id}`}>
                <div className="group border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <div className="relative aspect-[4/3] bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded text-sm font-medium">
                      {pkg.duration} days
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-1 text-yellow-500 mb-2">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-muted-foreground text-sm">({pkg.reviews} reviews)</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">{pkg.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{pkg.destination}, {pkg.country}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold">AED {pkg.price}</span>
                        <span className="text-muted-foreground text-sm">/person</span>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/packages">
              <Button variant="outline" size="lg">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our happy travelers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Travel Inspiration</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tips, guides, and stories to fuel your wanderlust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="group border rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                Read All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Book your dream trip today and create memories that will last a lifetime. Our travel experts are ready to help you plan the perfect getaway.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Book Your Dream Trip
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
