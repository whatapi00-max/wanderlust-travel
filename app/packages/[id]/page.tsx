"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Star, Clock, MapPin, Check, X, Calendar, Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { packages } from "@/data/packages"

export default function PackageDetailPage() {
  const params = useParams()
  const pkg = packages.find(p => p.id === params.id)

  if (!pkg) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
        <Link href="/packages">
          <Button>Back to Packages</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted">
      {/* Header Image */}
      <div className="relative h-[50vh] bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://placehold.co/1920x1080/3b82f6/ffffff?text=${encodeURIComponent(pkg.title)}`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <Link href="/packages" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Packages
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-1" />
                {pkg.destination}, {pkg.country}
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                {pkg.duration} days
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-1 text-yellow-400 fill-yellow-400" />
                {pkg.rating} ({pkg.reviews} reviews)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Gallery</h2>
              <div className="grid grid-cols-3 gap-4">
                {pkg.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://placehold.co/400x400/3b82f6/ffffff?text=Photo+${idx + 1}`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">About This Package</h2>
              <p className="text-muted-foreground leading-relaxed">{pkg.description}</p>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Day-by-Day Itinerary</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-primary pl-6 pb-6 relative">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                    <h3 className="font-semibold text-lg">Day {day.day}: {day.title}</h3>
                    <p className="text-muted-foreground mt-2">{day.description}</p>
                    <div className="mt-3">
                      <p className="text-sm font-medium">Activities:</p>
                      <ul className="text-sm text-muted-foreground mt-1">
                        {day.activities.map((activity, idx) => (
                          <li key={idx}>• {activity}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">What&apos;s Not Included</h2>
                <ul className="space-y-3">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <div className="mb-6">
                <span className="text-3xl font-bold">AED {pkg.price}</span>
                <span className="text-muted-foreground"> / person</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{pkg.duration} days</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-muted-foreground">Rating</span>
                  <span className="font-medium flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                    {pkg.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{pkg.category}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Flexible dates available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Small group experience</span>
                </div>
              </div>

              <Link href={`/booking?package=${pkg.id}`}>
                <Button className="w-full h-12 text-lg">Book Now</Button>
              </Link>
              <p className="text-center text-sm text-muted-foreground mt-4">
                No payment required today
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
