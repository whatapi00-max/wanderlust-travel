import Link from "next/link"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function BookingPolicyPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Booking Policy</h1>
          <p className="text-muted-foreground mt-2">Understanding how to book with SK Tours & Travels</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8 space-y-8">
          
          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              How to Book
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Booking your dream vacation with SK Tours & Travels is simple:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Browse our destinations and packages on the website</li>
                <li>Select your preferred travel package</li>
                <li>Click &ldquo;Book Now&rdquo; to start the booking process</li>
                <li>Fill in your personal and travel details</li>
                <li>Review your booking summary</li>
                <li>Complete payment through our secure gateway</li>
                <li>Receive instant confirmation via email</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-2" />
              Booking Requirements
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>To complete a booking, you must provide:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Valid passport (minimum 6 months validity)</li>
                <li>Contact details (email and phone number)</li>
                <li>Emergency contact information</li>
                <li>Travel dates and preferred accommodations</li>
                <li>Any dietary requirements or special requests</li>
                <li>Valid payment method</li>
              </ul>
              <p className="mt-4">
                For international travel, visa requirements vary by destination. Our team will assist you with visa information and processing where applicable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Payment Terms
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Full Payment:</strong> Required at the time of booking to confirm your reservation</li>
                <li><strong>Payment Methods:</strong> Credit/Debit cards (Visa, Mastercard, Amex), Bank Transfer, or Cash at our office</li>
                <li><strong>Currency:</strong> All prices are in UAE Dirhams (AED) unless otherwise specified</li>
                <li><strong>Processing Fee:</strong> A nominal processing fee may apply to card payments</li>
                <li><strong>Receipts:</strong> Official receipts are provided for all transactions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
              Confirmation Process
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Upon successful payment:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Instant email confirmation with booking reference number</li>
                <li>Detailed itinerary sent within 24 hours</li>
                <li>Pre-travel documents provided 7 days before departure</li>
                <li>Final travel vouchers issued 48 hours before travel</li>
                <li>WhatsApp support group created for group tours</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <XCircle className="h-6 w-6 text-red-500 mr-2" />
              Booking Restrictions
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Bookings are subject to availability and confirmation</li>
                <li>Some packages have minimum age requirements</li>
                <li>Certain destinations may require specific vaccinations</li>
                <li>Group bookings require minimum participant numbers</li>
                <li>Special dietary requirements must be requested at booking</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Modification Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>Need to make changes to your booking?</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Date changes: Allowed up to 14 days before departure (fees may apply)</li>
                <li>Name changes: Permitted with valid documentation (admin fee applies)</li>
                <li>Destination changes: Treated as cancellation and new booking</li>
                <li>Room upgrades: Subject to availability at time of request</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">No-Show Policy</h2>
            <div className="text-muted-foreground">
              <p>
                If you fail to arrive for your trip without prior notice (no-show), the entire booking amount will be forfeited. 
                We recommend contacting us immediately if you anticipate any delays or issues.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact for Bookings</h2>
            <div className="text-muted-foreground">
              <p>For booking assistance or inquiries:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Email: info@sktourstravels.com</li>
                <li>Phone: +971 50 123 4567</li>
                <li>Office: Sheikh Zayed Road, Dubai, UAE</li>
                <li>Hours: Sunday-Thursday, 9AM-6PM GST</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
