"use client"

import { useLanguage } from "@/lib/language-context"

export default function PrivacyPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">{t.privacyPage.title}</h1>

      <div className="prose prose-gray max-w-none">
        <p className="text-muted-foreground mb-8">
          {t.privacyPage.lastUpdated}{" "}
          {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
        </p>

        <p className="text-lg mb-6">{t.privacyPage.intro}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.collection.title}</h2>
        <h3 className="text-xl font-semibold mb-3">{t.privacyPage.sections.collection.provided.title}</h3>
        <p className="mb-4">{t.privacyPage.sections.collection.provided.intro}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.privacyPage.sections.collection.provided.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-3">{t.privacyPage.sections.collection.automatic.title}</h3>
        <p className="mb-4">{t.privacyPage.sections.collection.automatic.intro}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.privacyPage.sections.collection.automatic.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.usage.title}</h2>
        <p className="mb-4">{t.privacyPage.sections.usage.intro}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.privacyPage.sections.usage.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.sharing.title}</h2>
        <p className="mb-4">{t.privacyPage.sections.sharing.intro}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.privacyPage.sections.sharing.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.cookies.title}</h2>
        <p className="mb-6">{t.privacyPage.sections.cookies.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.security.title}</h2>
        <p className="mb-6">{t.privacyPage.sections.security.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.rights.title}</h2>
        <p className="mb-4">{t.privacyPage.sections.rights.intro}</p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          {t.privacyPage.sections.rights.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.children.title}</h2>
        <p className="mb-6">{t.privacyPage.sections.children.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.changes.title}</h2>
        <p className="mb-6">{t.privacyPage.sections.changes.description}</p>

        <h2 className="text-2xl font-semibold mb-4">{t.privacyPage.sections.contact.title}</h2>
        <p className="mb-4">{t.privacyPage.sections.contact.intro}</p>
        <p className="mb-2">
          {t.privacyPage.sections.contact.email}{" "}
          <a href="mailto:support@plushimo.com" className="text-primary hover:underline">
            support@plushimo.com
          </a>
        </p>
      </div>
    </div>
  )
}
