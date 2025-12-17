export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Returns & Refunds</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">
          We want you to absolutely love your plushie! If you're not completely satisfied, we're here to help.
        </p>

        <h2 className="text-2xl font-semibold mb-4">30-Day Return Policy</h2>
        <p className="mb-6">
          You have 30 days from the date of delivery to return your plushie for a refund or exchange. To be eligible for
          a return:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Item must be unused and in the same condition you received it</li>
          <li>Item must be in original packaging with all tags attached</li>
          <li>Proof of purchase (order number or receipt) is required</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          <li>
            Email us at{" "}
            <a href="mailto:support@plushimo.com" className="text-primary hover:underline">
              support@plushimo.com
            </a>{" "}
            with your order number and reason for return
          </li>
          <li>We'll provide you with return instructions and shipping address</li>
          <li>Ship the item back to us using a trackable shipping method</li>
          <li>Once we receive and inspect your return, we'll process your refund within 5-7 business days</li>
        </ol>

        <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg mb-6">
          <p className="font-semibold mb-2">Important:</p>
          <p>
            Return shipping costs are the customer's responsibility unless the item arrived damaged or defective. We
            recommend using a trackable shipping service.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Damaged or Defective Items</h2>
        <p className="mb-6">
          If your plushie arrives damaged or defective, please contact us within 48 hours of delivery with photos of the
          issue. We'll send a replacement or issue a full refund at no cost to you, including return shipping.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
        <p className="mb-6">
          If you'd like to exchange your plushie for a different one, please follow the return process above and place a
          new order for the item you'd like instead. This ensures you receive your new plushie as quickly as possible.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Refund Processing</h2>
        <p className="mb-4">
          Once your return is received and approved, your refund will be processed to your original payment method
          within 5-7 business days. Please note that it may take an additional 3-5 business days for the refund to
          appear in your account, depending on your bank or card issuer.
        </p>

        <p className="text-muted-foreground mt-8">
          Questions about returns? Contact us at{" "}
          <a href="mailto:support@plushimo.com" className="text-primary hover:underline">
            support@plushimo.com
          </a>{" "}
          and we'll be happy to help!
        </p>
      </div>
    </div>
  )
}
