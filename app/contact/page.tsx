"use client"

import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t.contactPage.title}</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">{t.contactPage.intro}</p>

        <div className="bg-muted/50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">{t.contactPage.getInTouch.title}</h2>
          <div className="space-y-3">
            <p>
              <strong>{t.contactPage.getInTouch.email}</strong>{" "}
              <a href="mailto:support@plushimo.com" className="text-primary hover:underline">
                support@plushimo.com
              </a>
            </p>
            <p className="text-muted-foreground text-sm">{t.contactPage.getInTouch.responseTime}</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">{t.contactPage.faq.title}</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">{t.contactPage.faq.q1.question}</h3>
            <p>{t.contactPage.faq.q1.answer}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">{t.contactPage.faq.q2.question}</h3>
            <p>{t.contactPage.faq.q2.answer}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">{t.contactPage.faq.q3.question}</h3>
            <p>{t.contactPage.faq.q3.answer}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">{t.contactPage.faq.q4.question}</h3>
            <p>{t.contactPage.faq.q4.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
