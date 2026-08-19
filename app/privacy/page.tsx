import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-muted">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: January 2025</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Happy Tour FZ (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              visit our website or use our services. By accessing or using our services, you agree to the collection 
              and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Register for an account or make a booking</li>
              <li>Sign up for our newsletter</li>
              <li>Contact us via email, phone, or contact forms</li>
              <li>Participate in surveys or promotions</li>
              <li>Make a payment through our secure gateway</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This information may include your name, email address, phone number, passport details, 
              payment information, travel preferences, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Process and manage your travel bookings</li>
              <li>Communicate with you about your reservations</li>
              <li>Send promotional emails and newsletters (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Payment Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              All payment transactions are processed through secure, PCI-DSS compliant payment gateways. 
              We do not store your complete credit card details on our servers. Payment information is 
              encrypted and handled directly by our trusted payment partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell or rent your personal information to third parties. We may share your information 
              with service providers necessary to fulfill your travel arrangements (hotels, airlines, tour operators) 
              and legal authorities when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
              over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, update, or delete your personal information. You may also opt-out 
              of receiving marketing communications at any time. To exercise these rights, please contact us 
              at info@happytourfz.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 text-muted-foreground">
              <p>Happy Tour FZ</p>
              <p>Email: info@happytourfz.com</p>
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
