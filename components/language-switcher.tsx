"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fi" : "en")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} title="Change language">
      <Languages className="h-5 w-5" />
      <span className="sr-only ml-1 text-xs font-medium">{language.toUpperCase()}</span>
    </Button>
  )
}
