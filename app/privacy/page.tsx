export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <p className="text-lg mb-6">
          At Plushimo, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect
          your personal information when you visit our website or make a purchase.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-3">Information You Provide</h3>
        <p className="mb-4">When you place an order or contact us, we collect:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Name and billing/shipping address</li>
          <li>Email address and phone number</li>
          <li>Payment information (processed securely through Shopify)</li>
          <li>Order history and preferences</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Automatically Collected Information</h3>
        <p className="mb-4">When you visit our site, we may automatically collect:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Browser type and IP address</li>
          <li>Pages visited and time spent on site</li>
          <li>Device information and operating system</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Process and fulfill your orders</li>
          <li>Send order confirmations and shipping updates</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Improve our website and shopping experience</li>
          <li>Send promotional emails (only with your consent)</li>
          <li>Prevent fraud and maintain security</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
        <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Shopify (our e-commerce platform) to process orders</li>
          <li>Shipping carriers to deliver your orders</li>
          <li>Payment processors to handle transactions securely</li>
          <li>Service providers who assist with our business operations</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p className="mb-6">
          We use cookies to enhance your browsing experience, analyze site traffic, and remember your preferences. You
          can control cookies through your browser settings, though some features may not work properly if cookies are
          disabled.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-6">
          We implement appropriate security measures to protect your personal information. However, no method of
          transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Access the personal information we hold about you</li>
          <li>Request corrections to your information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
          <li>Object to certain processing of your data</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p className="mb-6">
          Our website is not intended for children under 13. We do not knowingly collect personal information from
          children under 13. If you believe we have collected such information, please contact us immediately.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
          revision date. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy or how we handle your data, please contact us:
        </p>
        <p className="mb-2">
          Email:{" "}
          <a href="mailto:plushimo.info@gmail.com" className="text-primary hover:underline">
            plushimo.info@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
