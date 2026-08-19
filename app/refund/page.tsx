import Link from "next/link"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Refund Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              At SK Tours & Travels, we understand that plans can change. This Refund Policy outlines 
              the conditions under which you may be eligible for a refund for your travel bookings. 
              Please read this policy carefully before making a reservation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Cancellation Timeframes and Refund Eligibility</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">30+ Days Before Departure</h3>
                <p className="text-muted-foreground text-sm">
                  Full refund minus a processing fee of 5% of the total booking amount or AED 100 
                  (whichever is higher).
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">15-29 Days Before Departure</h3>
                <p className="text-muted-foreground text-sm">
                  50% refund of the total booking amount. Processing fee of AED 50 applies.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">7-14 Days Before Departure</h3>
                <p className="text-muted-foreground text-sm">
                  25% refund of the total booking amount. No processing fee.
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-2">Less Than 7 Days Before Departure</h3>
                <p className="text-muted-foreground text-sm">
                  No refund available. However, you may request to reschedule subject to availability 
                  and additional charges.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Non-Refundable Items</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The following items are generally non-refundable:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Flight tickets (subject to airline policies)</li>
              <li>Visa application fees</li>
              <li>Travel insurance premiums</li>
              <li>Special event tickets and activity passes</li>
              <li>Hotel bookings marked as non-refundable</li>
              <li>Service fees and booking charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Force Majeure Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In case of cancellations due to force majeure events (natural disasters, pandemics, 
              government restrictions, etc.), we will work with our service providers to secure 
              the best possible outcome. This may include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
              <li>Full or partial credit for future travel</li>
              <li>Rescheduling without change fees (where possible)</li>
              <li>Refund according to service provider policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
              <li>Email us at info@sktourstravels.com with your booking reference number</li>
              <li>Include the reason for cancellation</li>
              <li>Attach any supporting documentation if applicable</li>
              <li>Allow 7-14 business days for processing</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Refund Processing</h2>
            <p className="text-muted-foreground leading-relaxed">
              Once approved, refunds will be processed to the original payment method. Credit card 
              refunds typically take 7-14 business days to appear on your statement depending on your 
              bank. Bank transfer refunds may take 10-15 business days. You will receive an email 
              confirmation once the refund has been initiated.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Travel Insurance</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strongly recommend purchasing comprehensive travel insurance at the time of booking. 
              Travel insurance may cover cancellations due to medical emergencies, family bereavement, 
              or other unforeseen circumstances that are not covered by our standard refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For refund-related inquiries, please contact our customer service team:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>Email: info@sktourstravels.com</p>
              <p>Phone: +971 50 123 4567</p>
              <p>Hours: Sunday - Thursday, 9:00 AM - 6:00 PM GST</p>
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
