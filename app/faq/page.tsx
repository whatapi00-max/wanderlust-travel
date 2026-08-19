import Link from "next/link"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I book a trip with Happy Tour FZ?",
    answer: "Booking is easy! Browse our destinations or packages, select your preferred option, and click 'Book Now'. Follow our 5-step booking process: enter your details, select travel dates, choose your package, review your booking, and complete payment through our secure gateway."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express), bank transfers, and cash payments at our Dubai office. All online payments are processed through secure, PCI-DSS compliant payment gateways."
  },
  {
    question: "Do I need travel insurance?",
    answer: "While not mandatory, we strongly recommend comprehensive travel insurance for all our trips. Travel insurance protects you against trip cancellations, medical emergencies, lost luggage, and other unforeseen circumstances. We can help you arrange suitable coverage."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Cancellations made 30+ days before departure receive a full refund minus processing fees. 15-29 days before: 50% refund. 7-14 days before: 25% refund. Less than 7 days: no refund, but rescheduling may be possible. Please see our full Cancellation Policy page for details."
  },
  {
    question: "Can I modify my booking after confirmation?",
    answer: "Yes, changes to dates, destinations, or number of travelers can be made subject to availability. Change requests must be submitted at least 14 days before departure and may incur additional fees depending on the changes required."
  },
  {
    question: "Do you offer visa assistance?",
    answer: "Yes, we provide visa assistance services for most destinations. Our team will guide you through the documentation requirements and can handle the application process on your behalf for select countries. Visa fees are additional and non-refundable."
  },
  {
    question: "What documents do I need for international travel?",
    answer: "Typically you'll need a valid passport (with at least 6 months validity), appropriate visas for your destination, travel insurance documents, and any required vaccination certificates. Specific requirements vary by destination - we'll provide a complete checklist when you book."
  },
  {
    question: "Are flights included in your packages?",
    answer: "Most of our packages include international flights from Dubai/UAE. Some specialized packages may be land-only. Each package clearly states what's included. We can also arrange custom flight bookings if needed."
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes! Groups of 6 or more travelers receive special rates. Contact us directly for group bookings and we'll create a customized package with attractive discounts."
  },
  {
    question: "What is the best time to book?",
    answer: "We recommend booking at least 2-3 months in advance for popular destinations and peak seasons (summer holidays, Eid, Christmas, New Year). Early booking ensures better availability and often better prices."
  },
  {
    question: "How can I contact Happy Tour FZ?",
    answer: "You can reach us via email at info@happytourfz.com, visit our office on Sheikh Zayed Road in Dubai, or use the contact form on our website. Our team is available Sunday-Thursday, 9AM-6PM GST."
  },
  {
    question: "Do you offer customized itineraries?",
    answer: "Absolutely! We specialize in tailor-made travel experiences. Share your preferences, budget, and travel dates with us, and our experts will craft a personalized itinerary just for you."
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-2">Find answers to common questions about our services</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b last:border-0 pb-6 last:pb-0">
                <h3 className="font-semibold text-lg mb-3 flex items-start">
                  <span className="text-primary mr-2">Q:</span>
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Contact Us
          </Link>
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
