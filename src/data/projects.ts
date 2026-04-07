export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  stack: Array<string>
  url?: string
  github?: string
  status: "live" | "in-development" | "client"
}

export const projects: Array<Project> = [
  {
    slug: "proof-barrel",
    name: "Proof Barrel",
    tagline: "Barrel tracking for craft distilleries",
    description:
      "Built for distillers who need to know exactly what's in their rickhouse. Visual barrel grids, gauging logs you can fill out one-handed while wearing gloves, mashbill tracking, and compliance reports that write themselves. Every action is timestamped and audit-ready.",
    stack: [
      "React 19",
      "Hono",
      "Cloudflare Workers",
      "Neon Postgres",
      "Drizzle ORM",
      "OpenAPI",
      "TanStack Router",
      "Turborepo",
    ],
    url: "https://proofbarrel.co",
    github: "https://github.com/solution-ops/proof.barrel",
    status: "live",
  },
  {
    slug: "rise-coffee",
    name: "Rise Coffee",
    tagline: "Brew tracking for people who care about the details",
    description:
      "I built this because I wanted a better way to track my coffee brewing. Not a spreadsheet, not a notes app. A real tool that helps you refine your process over time. Every change is tested in its own isolated environment before it goes live.",
    stack: ["React 19", "Hono", "Cloudflare Workers", "Neon Postgres", "Drizzle ORM", "TanStack Router", "Turborepo"],
    url: "https://app.risecoffee.co",
    github: "https://github.com/solution-ops/rise.coffee",
    status: "live",
  },
  {
    slug: "task-cloud",
    name: "Task Cloud",
    tagline: "Task management that respects your time",
    description:
      "Most task apps try to do everything. This one does less, better. Clean categories, keyboard-first navigation, and nothing between you and your work. Every feature gets its own test environment with automated checks before anything touches production.",
    stack: ["React 19", "Hono", "Cloudflare Workers", "Neon Postgres", "Drizzle ORM", "TanStack Router", "Turborepo"],
    github: "https://github.com/solution-ops/task.cloud",
    status: "live",
  },
  {
    slug: "tamarack",
    name: "Tamarack",
    tagline: "A remodeling company that looks as good as their work",
    description:
      "A Pacific Northwest contractor needed a site that matched the quality of their craftsmanship. Photography-first, warm tones, and a layout that lets the work breathe. Server-rendered and deployed to the edge. Ready for a CMS whenever they outgrow static content.",
    stack: ["React 19", "TanStack Start", "Tailwind CSS v4", "Cloudflare Pages", "Vite"],
    github: "https://github.com/solution-ops/tamarack",
    status: "in-development",
  },
  {
    slug: "salon",
    name: "Salon",
    tagline: "Nail art deserves better than a template",
    description:
      "A salon owner came to me because every nail artist website she found looked the same. So we built something that feels like her work: dark, bold, and unapologetically artistic. Smooth animations, generous whitespace, and photography that does the talking.",
    stack: ["React 19", "TanStack Start", "Tailwind CSS v4", "Motion", "Cloudflare Pages", "Vite"],
    github: "https://github.com/solution-ops/salon",
    status: "in-development",
  },
]
