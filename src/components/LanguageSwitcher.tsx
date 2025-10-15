import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"en" | "uz">("en");

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "uz" : "en")}
      className="gap-2"
    >
      <Globe className="h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  );
}
