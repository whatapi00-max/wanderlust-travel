"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle, Download, Home, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [bookingId, setBookingId] = useState("")

  useEffect(() => {
    // Generate a random booking ID
    const id = "BK" + Math.random().toString(36).substring(2, 10).toUpperCase()
    setBookingId(id)
  }, [])

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-muted-foreground mb-6">
          Thank you for your booking. We&apos;ve sent a confirmation email with your travel details.
        </p>

        <div className="bg-muted rounded-lg p-4 mb-6">
          <p className="text-sm text-muted-foreground mb-1">Booking Reference</p>
          <p className="text-2xl font-bold tracking-wider">{bookingId}</p>
        </div>

        {sessionId && (
          <div className="text-sm text-muted-foreground mb-6">
            <p>Session ID: {sessionId.substring(0, 20)}...</p>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>Confirmation email sent</span>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Download className="h-4 w-4" />
            <span>Vouchers will be sent 24h before departure</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <Link href="/">
            <Button variant="outline" className="w-full">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link href="/packages">
            <Button className="w-full">Book Another Trip</Button>
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-6">
          Need help? Contact us at info@sktourstravels.com or call +971 50 123 4567
        </p>
      </div>
    </div>
  )
}
