import Link from "next/link"
import { AlertTriangle, Calendar, Clock, RefreshCw } from "lucide-react"

export default function CancellationPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Cancellation Policy</h1>
          <p className="text-muted-foreground mt-2">Understanding our cancellation and refund terms</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8 space-y-8">
          
          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
              <div>
                <h2 className="font-semibold text-yellow-800 mb-2">Important Notice</h2>
                <p className="text-yellow-700 text-sm">
                  Cancellation policies vary depending on the type of booking, destination, and time of cancellation. 
                  Please review the specific terms for your booking carefully.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Calendar className="h-6 w-6 text-primary mr-2" />
              Standard Cancellation Timeline
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h3 className="font-semibold text-lg">30+ Days Before Departure</h3>
                <p className="text-muted-foreground mt-1">
                  <strong>Refund:</strong> Full refund minus processing fee of 5% or AED 100 (whichever is higher)
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Example: For a AED 5,000 booking, you receive approximately AED 4,750 - 4,900 back
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h3 className="font-semibold text-lg">15-29 Days Before Departure</h3>
                <p className="text-muted-foreground mt-1">
                  <strong>Refund:</strong> 50% of total booking amount minus AED 50 processing fee
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Example: For a AED 5,000 booking, you receive approximately AED 2,450 back
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h3 className="font-semibold text-lg">7-14 Days Before Departure</h3>
                <p className="text-muted-foreground mt-1">
                  <strong>Refund:</strong> 25% of total booking amount (no additional processing fee)
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Example: For a AED 5,000 booking, you receive AED 1,250 back
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h3 className="font-semibold text-lg">Less Than 7 Days Before Departure</h3>
                <p className="text-muted-foreground mt-1">
                  <strong>Refund:</strong> No refund available
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Rescheduling may be possible subject to availability and additional charges
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Clock className="h-6 w-6 text-primary mr-2" />
              How to Cancel
            </h2>
            <div className="text-muted-foreground space-y-2">
              <p>To cancel your booking:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Email us at <strong>info@sktourstravels.com</strong> with subject &ldquo;Cancellation Request&rdquo;</li>
                <li>Include your booking reference number in the email</li>
                <li>Provide reason for cancellation (helps us improve our services)</li>
                <li>Wait for confirmation email (within 24-48 hours)</li>
                <li>Refunds will be processed within 7-14 business days</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Non-Refundable Items</h2>
            <div className="text-muted-foreground">
              <p>The following are typically non-refundable regardless of cancellation timing:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Flight tickets (subject to airline policies)</li>
                <li>Visa application fees</li>
                <li>Travel insurance premiums</li>
                <li>Concert tickets, event passes, and activity tickets</li>
                <li>Hotel bookings marked as non-refundable</li>
                <li>Service fees and booking charges</li>
                <li>Peak season surcharges</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <RefreshCw className="h-6 w-6 text-primary mr-2" />
              Rescheduling Options
            </h2>
            <div className="text-muted-foreground space-y-2">
              <p>Prefer to travel later? Consider rescheduling instead:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Rescheduling requests must be made at least 7 days before departure</li>
                <li>New travel dates must be within 12 months of original booking</li>
                <li>Rescheduling fee: AED 250 per person</li>
                <li>Price differences (if any) will be charged or refunded</li>
                <li>Subject to availability at new desired dates</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Force Majeure Cancellations</h2>
            <div className="text-muted-foreground">
              <p>
                In case of cancellations due to force majeure events (natural disasters, pandemics, 
                government restrictions, war, etc.):
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>We will work with service providers to secure the best possible outcome</li>
                <li>Options may include full/partial credit for future travel</li>
                <li>Free rescheduling where possible</li>
                <li>Refund according to service provider policies</li>
                <li>Travel insurance claims may be applicable</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">No-Show Policy</h2>
            <div className="text-muted-foreground">
              <p>
                If you fail to show up for your trip without prior cancellation notice, the entire 
                booking amount will be forfeited with no refund. Please contact us as soon as possible 
                if you cannot make your trip.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Refund Processing</h2>
            <div className="text-muted-foreground">
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Refund requests are processed within 7-14 business days</li>
                <li>Credit card refunds may take additional 5-10 business days to appear on your statement</li>
                <li>Bank transfers may take 10-15 business days</li>
                <li>Cash refunds can be collected from our office (ID required)</li>
                <li>You will receive an email confirmation once refund is initiated</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Special Package Policies</h2>
            <div className="text-muted-foreground">
              <p>Some special packages may have different cancellation terms:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Hajj & Umrah packages:</strong> Strict cancellation policy - 50% deduction 60+ days before</li>
                <li><strong>Cruise packages:</strong> Follow cruise line cancellation policies</li>
                <li><strong>Group tours:</strong> Minimum participant requirements may affect cancellation terms</li>
                <li><strong>Promotional deals:</strong> May be non-refundable or have special terms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="text-muted-foreground">
              <p>For cancellation requests or questions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Email: info@sktourstravels.com</li>
                <li>Phone: +971 50 123 4567</li>
                <li>Office Hours: Sunday-Thursday, 9AM-6PM GST</li>
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
