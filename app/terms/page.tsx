"use client"

import { useLanguage } from "@/lib/language-context"

export default function TermsPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t.termsPage.title}</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-8">
          {t.termsPage.lastUpdated}{" "}
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <p className="text-lg mb-6">{t.termsPage.intro}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.general.title}</h2>
        <p className="mb-6">{t.termsPage.sections.general.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.products.title}</h2>
        <p className="mb-4">{t.termsPage.sections.products.intro}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.termsPage.sections.products.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mb-6">{t.termsPage.sections.products.note}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.orders.title}</h2>
        <p className="mb-4">{t.termsPage.sections.orders.intro}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.termsPage.sections.orders.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p className="mb-6">{t.termsPage.sections.orders.note}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.shipping.title}</h2>
        <p className="mb-6">{t.termsPage.sections.shipping.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.returns.title}</h2>
        <p className="mb-6">{t.termsPage.sections.returns.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.intellectual.title}</h2>
        <p className="mb-6">{t.termsPage.sections.intellectual.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.liability.title}</h2>
        <p className="mb-6">{t.termsPage.sections.liability.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.safety.title}</h2>
        <p className="mb-6">{t.termsPage.sections.safety.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.warranty.title}</h2>
        <p className="mb-6">{t.termsPage.sections.warranty.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.indemnification.title}</h2>
        <p className="mb-6">{t.termsPage.sections.indemnification.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.governing.title}</h2>
        <p className="mb-6">{t.termsPage.sections.governing.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.changesTerms.title}</h2>
        <p className="mb-6">{t.termsPage.sections.changesTerms.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.termsPage.sections.contactTerms.title}</h2>
        <p className="mb-4">{t.termsPage.sections.contactTerms.intro}</p>
        <p className="mb-2">
          {t.termsPage.sections.contactTerms.email}{" "}
          <a href="mailto:support@plushimo.com" className="text-primary hover:underline">
            support@plushimo.com
          </a>
        </p>

        <p className="text-muted-foreground mt-8 italic">{t.termsPage.acceptance}</p>
      </div>
    </div>
  )
}
