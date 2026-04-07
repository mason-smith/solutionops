import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/theme-provider"

import appCss from "../styles.css?url"

const themeScript = `(function(){var t=localStorage.getItem("solutionops-theme")||"system";var r=t;if(t==="system"){r=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.add(r)})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SolutionOps | Software, from scratch." },
      {
        name: "description",
        content:
          "Freelance software engineering. Full-stack TypeScript, cloud-native architecture, and interfaces that feel considered.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [{ children: themeScript }],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-svh antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
