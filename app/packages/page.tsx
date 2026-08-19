import Link from "next/link"
import { Star, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { packages } from "@/data/packages"

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
            alt="Travel Packages"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://placehold.co/1920x1080/3b82f6/ffffff?text=Travel+Packages`
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Packages</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Curated experiences for unforgettable journeys
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group border rounded-xl overflow-hidden hover:shadow-xl transition-all bg-white">
              <div className="relative aspect-[16/10] bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(pkg.title)}`
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{pkg.destination}, {pkg.country}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>
                
                <div className="flex items-center space-x-4 text-sm mb-4">
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-muted-foreground">({pkg.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration} days</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                    <span key={idx} className="text-xs bg-muted px-2 py-1 rounded">
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-2xl font-bold">AED {pkg.price}</span>
                    <span className="text-muted-foreground text-sm">/person</span>
                  </div>
                  <Link href={`/packages/${pkg.id}`}>
                    <Button>
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
