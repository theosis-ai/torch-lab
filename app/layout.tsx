import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { META_THEME_COLORS, siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/themeProvider";

const baseUrl = "https://tunelab.theosis.ai";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tune Lab",
    template: "%s | Tune Lab",
  },
  description: "finetune llamas with torchtune",
  openGraph: {
    title: "Tune Lab",
    description: "finetune llamas with torchtune",
    url: baseUrl,
    siteName: "Tune Lab",
    locale: "en_US",
    type: "website",
  },
};


interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-svh bg-background font-sans antialiased",
            GeistSans.variable,
            GeistMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-svh flex-col bg-background">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
