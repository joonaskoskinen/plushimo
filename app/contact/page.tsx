export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">
          We'd love to hear from you! Whether you have questions about our products, need help with an order, or just
          want to share your love for plushies, we're here to help.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-3">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:plushimo.info@gmail.com" className="text-primary hover:underline">
                plushimo.info@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground text-sm">
              We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">When will my order ship?</h3>
            <p>
              Orders are typically processed within 2-5 business days. Once shipped, you'll receive a tracking number
              via email.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Can I change or cancel my order?</h3>
            <p>
              Please contact us immediately at plushimo.info@gmail.com. We'll do our best to accommodate changes before
              the order ships.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Do you ship internationally?</h3>
            <p>
              Yes! We ship to most countries worldwide. Shipping times vary by destination, typically 10-25 business
              days.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">What if my plushie arrives damaged?</h3>
            <p>
              We're so sorry if that happens! Please email us photos of the damage within 48 hours of delivery, and
              we'll arrange a replacement or refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
