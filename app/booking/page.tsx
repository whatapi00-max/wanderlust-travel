"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { packages } from "@/data/packages"
import { toast } from "@/hooks/use-toast"

const steps = [
  { id: 1, name: "Personal Details" },
  { id: 2, name: "Travel Details" },
  { id: 3, name: "Package Selection" },
  { id: 4, name: "Review" },
  { id: 5, name: "Payment" },
]

function BookingContent() {
  const searchParams = useSearchParams()
  const preselectedPackage = searchParams.get("package")

  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
    packageId: preselectedPackage || "",
    specialRequests: "",
  })

  const selectedPackage = packages.find(p => p.id === bookingData.packageId)
  const totalPrice = selectedPackage ? selectedPackage.price * bookingData.travelers : 0

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!bookingData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!bookingData.lastName.trim()) newErrors.lastName = "Last name is required"
      if (!bookingData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.email)) {
        newErrors.email = "Please enter a valid email"
      }
      if (!bookingData.phone.trim()) newErrors.phone = "Phone number is required"
    }

    if (currentStep === 2) {
      if (!bookingData.destination.trim()) newErrors.destination = "Destination is required"
      if (!bookingData.startDate) newErrors.startDate = "Start date is required"
      if (!bookingData.endDate) newErrors.endDate = "End date is required"
      if (bookingData.startDate && bookingData.endDate) {
        const start = new Date(bookingData.startDate)
        const end = new Date(bookingData.endDate)
        if (end <= start) {
          newErrors.endDate = "End date must be after start date"
        }
      }
    }

    if (currentStep === 3) {
      if (!bookingData.packageId) newErrors.packageId = "Please select a package"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep() && currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/create-payment-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...bookingData,
          totalPrice,
          packageTitle: selectedPackage?.title,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        toast({
          title: "Error",
          description: "Failed to create payment session. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-muted py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/packages" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Packages
          </Link>
          <h1 className="text-3xl font-bold">Book Your Trip</h1>
          <p className="text-muted-foreground mt-2">Complete the steps below to book your dream vacation</p>
        </div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, idx) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm
                  ${currentStep >= step.id 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted-foreground/20 text-muted-foreground"
                  }
                `}>
                  {currentStep > step.id ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <span className={`
                  hidden sm:block ml-2 text-sm font-medium
                  ${currentStep >= step.id ? "text-foreground" : "text-muted-foreground"}
                `}>
                  {step.name}
                </span>
                {idx < steps.length - 1 && (
                  <div className={`
                    flex-1 h-1 mx-4 rounded
                    ${currentStep > step.id ? "bg-primary" : "bg-muted-foreground/20"}
                  `} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Personal Details <span className="text-sm font-normal text-red-500">* All fields required</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="firstName"
                    value={bookingData.firstName}
                    onChange={(e) => setBookingData({ ...bookingData, firstName: e.target.value })}
                    placeholder="John"
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                  <Input
                    id="lastName"
                    value={bookingData.lastName}
                    onChange={(e) => setBookingData({ ...bookingData, lastName: e.target.value })}
                    placeholder="Doe"
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.lastName}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  placeholder="john@example.com"
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                <Input
                  id="phone"
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  placeholder="+971 50 123 4567"
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.phone}</p>}
              </div>
            </div>
          )}

          {/* Step 2: Travel Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Travel Details <span className="text-sm font-normal text-red-500">* All fields required</span></h2>
              <div className="space-y-2">
                <Label htmlFor="destination">Preferred Destination <span className="text-red-500">*</span></Label>
                <Input
                  id="destination"
                  value={bookingData.destination}
                  onChange={(e) => setBookingData({ ...bookingData, destination: e.target.value })}
                  placeholder="e.g., Santorini, Bali"
                  className={errors.destination ? "border-red-500" : ""}
                />
                {errors.destination && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.destination}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date <span className="text-red-500">*</span></Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={bookingData.startDate}
                    onChange={(e) => setBookingData({ ...bookingData, startDate: e.target.value })}
                    className={errors.startDate ? "border-red-500" : ""}
                  />
                  {errors.startDate && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.startDate}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endDate">End Date <span className="text-red-500">*</span></Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={bookingData.endDate}
                    onChange={(e) => setBookingData({ ...bookingData, endDate: e.target.value })}
                    className={errors.endDate ? "border-red-500" : ""}
                  />
                  {errors.endDate && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.endDate}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="travelers">Number of Travelers</Label>
                <Select
                  value={bookingData.travelers.toString()}
                  onValueChange={(value) => setBookingData({ ...bookingData, travelers: parseInt(value) })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Traveler" : "Travelers"}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 3: Package Selection */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Select Your Package <span className="text-sm font-normal text-red-500">* Required</span></h2>
              <div className="grid grid-cols-1 gap-4">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    onClick={() => setBookingData({ ...bookingData, packageId: pkg.id })}
                    className={`
                      border-2 rounded-xl p-4 cursor-pointer transition-all
                      ${bookingData.packageId === pkg.id 
                        ? "border-primary bg-primary/5" 
                        : errors.packageId ? "border-red-300 hover:border-red-400" : "border-muted hover:border-primary/50"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{pkg.title}</h3>
                        <p className="text-sm text-muted-foreground">{pkg.destination}, {pkg.country}</p>
                        <p className="text-sm text-muted-foreground mt-1">{pkg.duration} days</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">AED {pkg.price}</p>
                        <p className="text-sm text-muted-foreground">per person</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {errors.packageId && <p className="text-red-500 text-sm flex items-center"><AlertCircle className="h-4 w-4 mr-1" />{errors.packageId}</p>}
            </div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Review Your Booking</h2>
              
              <div className="bg-muted rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name</span>
                  <span className="font-medium">{bookingData.firstName} {bookingData.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="font-medium">{bookingData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Destination</span>
                  <span className="font-medium">{selectedPackage?.destination || bookingData.destination}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Travelers</span>
                  <span className="font-medium">{bookingData.travelers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Package</span>
                  <span className="font-medium">{selectedPackage?.title}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold">AED {totalPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Payment */}
          {currentStep === 5 && (
            <div className="space-y-6 text-center">
              <h2 className="text-xl font-semibold">Complete Payment</h2>
              <p className="text-muted-foreground">
                You will be redirected to our secure payment gateway to complete your payment of AED {totalPrice}
              </p>
              <div className="bg-muted rounded-lg p-6 max-w-sm mx-auto">
                <p className="text-sm text-muted-foreground mb-2">Total Amount</p>
                <p className="text-4xl font-bold">AED {totalPrice}</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1}
            >
              Back
            </Button>
            
            {currentStep < 5 ? (
              <Button onClick={handleNext}>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Pay AED {totalPrice}</>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-muted flex items-center justify-center"><p>Loading...</p></div>}>
      <BookingContent />
    </Suspense>
  )
}
