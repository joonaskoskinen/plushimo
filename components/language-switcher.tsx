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
    <Button variant="ghost" size="icon" onClick={toggleLanguage} title="Change language" className="relative">
      <Languages className="h-5 w-5" />
      <span className="absolute -bottom-0.5 text-[10px] font-bold uppercase">{language}</span>
      <span className="sr-only">Change language</span>
    </Button>
  )
}
