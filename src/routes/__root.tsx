import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router"
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
          "Mason Smith is a software engineer who left Silicon Valley for Kentucky. He still builds the same caliber of software, just with more intention.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
    scripts: [{ children: themeScript }],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
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

function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-24">
      <p className="text-sm text-muted-foreground">This page doesn't exist.</p>
      <Link to="/" className="mt-4 text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground">
        Back home
      </Link>
    </div>
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
