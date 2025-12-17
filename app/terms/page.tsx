export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <p className="text-lg mb-6">
          Welcome to Plushimo! By accessing or using our website and purchasing our products, you agree to be bound by
          these Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. General Terms</h2>
        <p className="mb-6">
          By using this website, you represent that you are at least 18 years old or have permission from a parent or
          guardian. You agree to use our website only for lawful purposes and in a way that does not infringe the rights
          of others.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Products and Pricing</h2>
        <p className="mb-4">All products are subject to availability. We reserve the right to:</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Limit quantities of products available for purchase</li>
          <li>Discontinue products at any time</li>
          <li>Modify prices without prior notice</li>
          <li>Refuse or cancel orders in case of pricing errors</li>
        </ul>
        <p className="mb-6">
          Product images are for illustration purposes. Actual colors and details may vary slightly from what appears on
          your screen.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Orders and Payment</h2>
        <p className="mb-4">
          When you place an order, you agree to provide accurate and complete information. We accept payment through
          Shopify's secure payment system. By submitting payment information, you:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Authorize us to charge the provided payment method</li>
          <li>Confirm that you have the right to use the payment method</li>
          <li>Agree to pay all charges at the prices in effect when charged</li>
        </ul>
        <p className="mb-6">
          Order confirmation does not guarantee acceptance. We reserve the right to refuse or cancel any order for any
          reason, including suspected fraud or unavailability.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Shipping and Delivery</h2>
        <p className="mb-6">
          Shipping times are estimates and not guarantees. We are not responsible for delays caused by customs, weather,
          carrier issues, or other circumstances beyond our control. Risk of loss transfers to you upon delivery to the
          shipping carrier.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
        <p className="mb-6">
          Our return and refund policy is detailed on our Returns page. By purchasing, you agree to our 30-day return
          policy and the conditions outlined there.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
        <p className="mb-6">
          All content on this website, including images, text, logos, and designs, is the property of Plushimo or our
          licensors. You may not use, reproduce, or distribute any content without our written permission.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
        <p className="mb-6">
          To the fullest extent permitted by law, Plushimo shall not be liable for any indirect, incidental, special, or
          consequential damages arising from your use of our website or products. Our total liability shall not exceed
          the amount you paid for the product in question.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Product Safety</h2>
        <p className="mb-6">
          Our plushies are intended for ages 3 and up due to small parts that may present a choking hazard. Adult
          supervision is recommended for young children. We are not responsible for misuse of products or failure to
          follow safety warnings.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Disclaimer of Warranties</h2>
        <p className="mb-6">
          Products are provided "as is" without warranties of any kind, either express or implied. We do not warrant
          that products will meet your expectations or be free from defects, though we'll work to resolve any issues
          that arise.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
        <p className="mb-6">
          You agree to indemnify and hold Plushimo harmless from any claims, damages, or expenses arising from your
          violation of these Terms or misuse of our products or website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by and construed in accordance with applicable laws. Any disputes shall be resolved
          in the appropriate courts.
        </p>

        <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
        <p className="mb-6">
          We reserve the right to update these Terms at any time. Changes will be effective immediately upon posting.
          Continued use of our website after changes constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
        <p className="mb-4">If you have questions about these Terms of Service, please contact us:</p>
        <p className="mb-2">
          Email:{" "}
          <a href="mailto:support@plushimo.com" className="text-primary hover:underline">
            support@plushimo.com
          </a>
        </p>

        <p className="text-muted-foreground mt-8 italic">
          By using Plushimo, you acknowledge that you have read, understood, and agree to be bound by these Terms of
          Service.
        </p>
      </div>
    </div>
  )
}
