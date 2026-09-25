import type { ReactNode } from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { PersonSchema } from "./PersonSchema";
import { getContent } from "@/content";
import { htmlLang, type Locale } from "@/utils/i18n";
import { cn } from "@/utils/cn";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { nav, profile } = getContent(locale);

  return (
    <html
      lang={htmlLang(locale)}
      className={cn(inter.variable, jetbrainsMono.variable, "h-full antialiased")}
      suppressHydrationWarning
    >
      <body className="min-h-full" suppressHydrationWarning>
        <a
          href="#main"
          className="bg-accent text-surface sr-only rounded-lg px-4 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:flex focus:min-h-11 focus:items-center"
        >
          {nav.skipToContent}
        </a>
        <ThemeProvider>{children}</ThemeProvider>
        <PersonSchema profile={profile} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
