"use client"

import { useLanguage } from "@/lib/language-context"

export default function ReturnsPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t.returnsPage.title}</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">{t.returnsPage.intro}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.returnsPage.policy.title}</h2>
        <p className="mb-6">{t.returnsPage.policy.description}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.returnsPage.policy.conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{t.returnsPage.howTo.title}</h2>
        <ol className="list-decimal pl-6 mb-6 space-y-3">
          {t.returnsPage.howTo.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg mb-6">
          <p className="font-semibold mb-2">{t.returnsPage.important.title}</p>
          <p>{t.returnsPage.important.message}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-4">{t.returnsPage.damaged.title}</h2>
        <p className="mb-6">{t.returnsPage.damaged.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.returnsPage.exchanges.title}</h2>
        <p className="mb-6">{t.returnsPage.exchanges.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.returnsPage.refund.title}</h2>
        <p className="mb-4">{t.returnsPage.refund.description}</p>

        <p className="text-muted-foreground mt-8">{t.returnsPage.questions}</p>
      </div>
    </div>
  )
}
