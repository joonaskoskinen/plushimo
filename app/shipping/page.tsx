export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">
          We want your new plushie friend to arrive safely and quickly! Here's everything you need to know about
          shipping.
        </p>

        <div className="bg-primary/10 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-center">Free Shipping on Orders Over €50</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
        <p className="mb-6">
          Orders are processed within 2-5 business days. During busy seasons (holidays, sales events), processing may
          take up to 7 business days. You'll receive an email confirmation when your order ships with tracking
          information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Shipping Methods & Times</h2>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold mb-2">Standard Shipping</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Europe: 10-20 business days</li>
              <li>North America: 15-25 business days</li>
              <li>Rest of World: 15-30 business days</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
        <p className="mb-6">
          Once your order ships, you'll receive a tracking number via email. Please note that tracking information may
          take 2-3 days to update in the carrier's system.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Customs & Duties</h2>
        <p className="mb-6">
          International orders may be subject to customs fees, import duties, and taxes determined by your country's
          customs office. These fees are the responsibility of the recipient and are not included in our shipping costs.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Shipping Issues</h2>
        <p className="mb-4">
          If your order hasn't arrived within the expected timeframe, please contact us at{" "}
          <a href="mailto:support@plushimo.com" className="text-primary hover:underline">
            support@plushimo.com
          </a>{" "}
          with your order number and we'll investigate.
        </p>
        <p>
          We're not responsible for delays caused by customs, weather, or carrier issues, but we'll always do our best
          to help resolve any problems.
        </p>
      </div>
    </div>
  )
}
