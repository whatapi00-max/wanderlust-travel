import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the SK Tours & Travels website and services, you agree to be bound 
              by these Terms and Conditions. If you do not agree with any part of these terms, please do 
              not use our services. These terms constitute a legally binding agreement between you and SK Tours & Travels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Booking and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All bookings are subject to availability and confirmation. When you make a booking:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You must provide accurate and complete information</li>
              <li>Payment must be made in full to confirm your booking</li>
              <li>We accept payments through secure credit/debit cards and bank transfers</li>
              <li>All prices are in UAE Dirhams (AED) unless otherwise stated</li>
              <li>Prices include applicable taxes unless specified otherwise</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Cancellation and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our cancellation policy varies depending on the type of booking:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Cancellations made 30+ days before departure: Full refund minus processing fees</li>
              <li>Cancellations made 15-29 days before departure: 50% refund</li>
              <li>Cancellations made 7-14 days before departure: 25% refund</li>
              <li>Cancellations made less than 7 days before departure: No refund</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Refund processing time is typically 7-14 business days depending on your payment method.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Travel Documents and Requirements</h2>
            <p className="text-muted-foreground leading-relaxed">
              It is your responsibility to ensure you have valid travel documents including passports, visas, 
              and any required vaccinations. SK Tours & Travels is not responsible for denied entry due to 
              incomplete or invalid documentation. We recommend purchasing comprehensive travel insurance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Changes to Bookings</h2>
            <p className="text-muted-foreground leading-relaxed">
              Changes to confirmed bookings (dates, names, destinations) may be subject to availability and 
              additional fees. Change requests must be submitted in writing at least 14 days before departure. 
              We reserve the right to refuse changes that cannot be accommodated by our service providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Liability and Responsibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              SK Tours & Travels acts as an intermediary between you and travel service providers (airlines, 
              hotels, tour operators). We are not liable for the acts, omissions, or defaults of these providers. 
              Our liability is limited to the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are not responsible for failures or delays in performance due to circumstances beyond our 
              reasonable control, including but not limited to natural disasters, acts of terrorism, government 
              restrictions, strikes, or pandemics. In such cases, we will work to provide alternatives or 
              credit for future travel where possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions are governed by the laws of the United Arab Emirates. Any disputes 
              arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>SK Tours & Travels</p>
              <p>Email: info@sktourstravels.com</p>
              <p>Phone: +971 50 123 4567</p>
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
