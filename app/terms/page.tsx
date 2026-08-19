import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          <p className="text-muted-foreground mt-2">Last updated: March 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the Wanderlust Travel website and services, you agree to be bound 
              by these Terms and Conditions. If you do not agree with any part of these terms, please do 
              not use our services. These terms constitute a legally binding agreement between you and Wanderlust Travel.
              We reserve the right to modify these terms at any time, and your continued use of the website 
              constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use this website only for lawful purposes and in a way that does not infringe upon 
              the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue within our website</li>
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Using automated tools to scrape or collect data</li>
              <li>Posting false or misleading information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Booking and Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All bookings are subject to availability and confirmation. When you make a booking:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>You must provide accurate, current, and complete information</li>
              <li>You are responsible for maintaining the confidentiality of your account information</li>
              <li>Payment must be made in full to confirm your booking</li>
              <li>We accept payments through secure credit/debit cards and digital payment methods</li>
              <li>All prices are displayed in USD unless otherwise stated</li>
              <li>Prices include applicable taxes unless specified otherwise</li>
              <li>A confirmation email will be sent within 24 hours of successful payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Cancellation and Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our cancellation policy varies depending on the type of booking and service provider:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Cancellations made 45+ days before departure: Full refund minus 5% processing fee</li>
              <li>Cancellations made 30-44 days before departure: 75% refund</li>
              <li>Cancellations made 15-29 days before departure: 50% refund</li>
              <li>Cancellations made 7-14 days before departure: 25% refund</li>
              <li>Cancellations made less than 7 days before departure: No refund</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Refund processing time is typically 7-14 business days depending on your payment method. 
              Some service providers may have stricter cancellation policies that will be communicated at booking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Travel Documents and Requirements</h2>
            <p className="text-muted-foreground leading-relaxed">
              It is your sole responsibility to ensure you have valid travel documents including passports, visas, 
              vaccinations, and any other requirements for your destination. Wanderlust Travel is not responsible 
              for denied entry, deportation, or travel delays due to incomplete or invalid documentation. We strongly 
              recommend purchasing comprehensive travel insurance that covers medical emergencies, trip cancellations, 
              and lost luggage. You must comply with all applicable laws and regulations of your destination country.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Changes to Bookings</h2>
            <p className="text-muted-foreground leading-relaxed">
              Changes to confirmed bookings (dates, names, destinations) may be subject to availability and 
              additional fees. Change requests must be submitted in writing at least 14 days before departure. 
              We reserve the right to refuse changes that cannot be accommodated by our service providers. 
              Some packages may have non-changeable components as specified in the booking details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Liability and Responsibility</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wanderlust Travel acts as an intermediary between you and travel service providers (airlines, 
              hotels, tour operators, transportation companies). We are not liable for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>The acts, omissions, or defaults of service providers</li>
              <li>Loss, damage, or theft of personal belongings</li>
              <li>Personal injury or illness during travel</li>
              <li>Delays, cancellations, or changes made by service providers</li>
              <li>Quality of accommodations or services provided</li>
              <li>Weather conditions or natural disasters</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Our liability is limited to the amount paid for the specific service in question. 
              We recommend obtaining travel insurance to cover these risks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Force Majeure</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are not responsible for failures or delays in performance due to circumstances beyond our 
              reasonable control, including but not limited to natural disasters, pandemics, acts of terrorism, 
              government restrictions, wars, strikes, extreme weather, or civil unrest. In such cases, we will 
              work to provide alternatives, reschedule your trip, or provide credit for future travel where possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Health and Safety</h2>
            <p className="text-muted-foreground leading-relaxed">
              You acknowledge that travel involves inherent risks including but not limited to health hazards, 
              accidents, and exposure to unfamiliar environments. You assume all risks associated with travel. 
              We recommend consulting with a healthcare provider before traveling to ensure you are fit for travel 
              and have necessary vaccinations. You are responsible for following all health and safety guidelines 
              provided by service providers and local authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, images, videos, and designs, is the property of 
              Wanderlust Travel or its content suppliers and is protected by international copyright laws. 
              You may not reproduce, distribute, or transmit any content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">11. User-Generated Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you submit reviews, comments, or other content to our website, you grant Wanderlust Travel 
              the right to use, modify, and display this content. You represent that you own or have the rights 
              to the content you submit and that it does not violate any third-party rights or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">12. Privacy and Data Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your use of our website is also governed by our Privacy Policy. We collect and process personal 
              data in accordance with applicable data protection laws. By using our website, you consent to 
              the collection and processing of your personal information as described in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">13. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content, 
              accuracy, or practices of these external sites. Your use of third-party websites is subject to 
              their terms and conditions. We recommend reviewing their policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">14. Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In the event of a dispute, you agree to first attempt to resolve the matter through good faith 
              negotiation with our customer service team. If the dispute cannot be resolved, you agree to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Submit the dispute in writing with detailed documentation</li>
              <li>Allow 30 days for our response and resolution attempt</li>
              <li>Pursue binding arbitration rather than litigation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">15. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions are governed by the laws of the jurisdiction where Wanderlust Travel 
              operates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction 
              of the courts in that jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">16. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Wanderlust Travel shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of our website or services, 
              even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">17. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, 
              the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">18. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="mt-4 text-muted-foreground space-y-2">
              <p className="font-semibold">Wanderlust Travel</p>
              <p>Email: support@wanderlusttravel.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Website: www.wanderlusttravel.com</p>
              <p>Address: 123 Travel Street, Adventure City, AC 12345</p>
            </div>
          </section>

          <section>
            <p className="text-sm text-muted-foreground italic">
              These Terms and Conditions were last updated on March 2025. We reserve the right to update 
              these terms at any time. Continued use of our website following any changes constitutes your 
              acceptance of the new terms.
            </p>
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
