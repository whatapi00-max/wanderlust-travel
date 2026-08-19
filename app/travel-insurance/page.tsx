import Link from "next/link"
import { Shield, CheckCircle, AlertCircle, Heart } from "lucide-react"

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Travel Insurance</h1>
          <p className="text-muted-foreground mt-2">Protect your journey with comprehensive coverage</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8 space-y-8">
          
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
              <div>
                <h2 className="font-semibold text-blue-800 mb-2">Why Travel Insurance?</h2>
                <p className="text-blue-700 text-sm">
                  Travel insurance provides peace of mind and financial protection against unexpected events 
                  that could disrupt your trip. While we hope you never need it, having coverage ensures 
                  you&apos;re protected when things don&apos;t go as planned.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-6">What&apos;s Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                <h3 className="font-medium mb-1">Trip Cancellation</h3>
                <p className="text-sm text-muted-foreground">
                  Reimbursement for non-refundable expenses if you must cancel due to covered reasons
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                <h3 className="font-medium mb-1">Medical Emergencies</h3>
                <p className="text-sm text-muted-foreground">
                  Coverage for hospitalization, doctor visits, and emergency medical treatment abroad
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                <h3 className="font-medium mb-1">Trip Interruption</h3>
                <p className="text-sm text-muted-foreground">
                  Coverage if you must cut your trip short due to emergencies back home
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                <h3 className="font-medium mb-1">Lost/Delayed Baggage</h3>
                <p className="text-sm text-muted-foreground">
                  Compensation for lost luggage or reimbursement for essentials during baggage delays
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                <h3 className="font-medium mb-1">Travel Delays</h3>
                <p className="text-sm text-muted-foreground">
                  Reimbursement for accommodation and meals during extended travel delays
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <CheckCircle className="h-5 w-5 text-green-500 mb-2" />
                <h3 className="font-medium mb-1">Emergency Evacuation</h3>
                <p className="text-sm text-muted-foreground">
                  Coverage for emergency medical evacuation and repatriation to the UAE
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Insurance Plans</h2>
            <div className="space-y-4">
              <div className="border-2 border-primary rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Standard Plan</h3>
                    <p className="text-sm text-muted-foreground">Perfect for short trips</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">From AED 75</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Medical coverage up to $50,000</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Trip cancellation up to $2,500</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Baggage loss up to $1,000</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 emergency assistance</li>
                </ul>
              </div>

              <div className="border-2 border-primary rounded-lg p-6 bg-primary/5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Premium Plan</h3>
                    <p className="text-sm text-muted-foreground">Recommended for most travelers</p>
                    <span className="inline-block mt-1 text-xs bg-primary text-white px-2 py-0.5 rounded">Most Popular</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">From AED 150</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Medical coverage up to $100,000</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Trip cancellation up to $5,000</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Baggage loss up to $2,500</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Adventure sports coverage</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Cancel for any reason (75% refund)</li>
                </ul>
              </div>

              <div className="border-2 border-primary rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">Elite Plan</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive protection for luxury travel</p>
                  </div>
                  <span className="text-2xl font-bold text-primary">From AED 300</span>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Medical coverage up to $1,000,000</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Trip cancellation up to $50,000</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Baggage loss up to $10,000</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Cancel for any reason (100% refund)</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Rental car coverage</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Personal liability coverage</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">When to Purchase</h2>
            <div className="text-muted-foreground space-y-2">
              <p>We recommend purchasing travel insurance when you book your trip, or within 14 days of making your initial trip deposit. This ensures:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Maximum coverage benefits</li>
                <li>&ldquo;Cancel for any reason&rdquo; eligibility (where available)</li>
                <li>Pre-existing medical condition coverage</li>
                <li>Protection starts immediately</li>
              </ul>
            </div>
          </section>

          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-0.5" />
              <div>
                <h2 className="font-semibold text-yellow-800 mb-2">Important Exclusions</h2>
                <p className="text-yellow-700 text-sm mb-2">
                  Travel insurance typically does NOT cover:
                </p>
                <ul className="text-yellow-700 text-sm list-disc list-inside space-y-1 ml-4">
                  <li>Pre-existing medical conditions (unless declared and approved)</li>
                  <li>Extreme sports not specifically covered</li>
                  <li>Travel to countries under government advisory</li>
                  <li>Intentional self-harm or reckless behavior</li>
                  <li>Losses due to intoxication or drug use</li>
                  <li>War, terrorism (unless add-on purchased)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">How to Purchase</h2>
            <div className="text-muted-foreground space-y-2">
              <p>You can add travel insurance during your booking process:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Select your travel package and proceed to checkout</li>
                <li>Choose &ldquo;Add Travel Insurance&rdquo; option</li>
                <li>Select your preferred coverage level</li>
                <li>Complete payment</li>
                <li>Insurance documents will be emailed within 24 hours</li>
              </ol>
              <p className="mt-4">
                Alternatively, contact our team to discuss insurance options before or after booking.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Making a Claim</h2>
            <div className="text-muted-foreground space-y-2">
              <p>If you need to make a claim:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact the insurance provider immediately (24/7 hotline provided in your policy)</li>
                <li>Keep all receipts and documentation related to your claim</li>
                <li>Obtain police reports for theft or loss incidents</li>
                <li>Submit claim forms within the specified timeframe</li>
                <li>Our team can assist you with the claims process</li>
              </ul>
            </div>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
              <div>
                <h2 className="font-semibold text-green-800 mb-2">Peace of Mind</h2>
                <p className="text-green-700 text-sm">
                  Travel insurance is a small investment that can save you thousands in unexpected expenses. 
                  Don&apos;t let unforeseen circumstances ruin your dream vacation. Protect yourself and travel with confidence.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <div className="text-muted-foreground">
              <p>For insurance inquiries or assistance:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Email: info@sktourstravels.com</li>
                <li>Phone: +971 50 123 4567</li>
                <li>Office: Sheikh Zayed Road, Dubai, UAE</li>
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
