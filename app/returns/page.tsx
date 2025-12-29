"use client"

import { useLanguage } from "@/lib/language-context"

export default function ShippingPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t.shippingPage.title}</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">{t.shippingPage.intro}</p>

        <div className="bg-primary/10 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-center">{t.shippingPage.freeShippingBanner}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">{t.shippingPage.processing.title}</h2>
        <p className="mb-6">{t.shippingPage.processing.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.shippingPage.methods.title}</h2>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-primary pl-4">
            <h3 className="font-semibold mb-2">{t.shippingPage.methods.standard.title}</h3>
            <ul className="list-disc pl-6 space-y-2">
              {t.shippingPage.methods.standard.times.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">{t.shippingPage.tracking.title}</h2>
        <p className="mb-6">{t.shippingPage.tracking.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.shippingPage.customs.title}</h2>
        <p className="mb-6">{t.shippingPage.customs.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.shippingPage.issues.title}</h2>
        <p className="mb-4">{t.shippingPage.issues.description}</p>
        <p>{t.shippingPage.issues.disclaimer}</p>
      </div>
    </div>
  )
}
