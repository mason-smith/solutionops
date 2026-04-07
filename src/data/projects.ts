export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  stack: Array<string>
  role: string
  url?: string
  github?: string
  status: "live" | "in-development" | "client"
}

export const projects: Array<Project> = [
  {
    slug: "rise-coffee",
    name: "Rise.Coffee",
    tagline: "Brew tracking for the obsessed",
    description:
      "A specialty coffee brewing tracker for home enthusiasts. Log brews, track beans, manage equipment, and refine your craft over time. Built as a full-stack monorepo with ephemeral PR environments. Every pull request gets its own isolated database and deployment.",
    stack: ["React 19", "Hono", "Cloudflare Workers", "Neon Postgres", "Drizzle ORM", "TanStack Router", "Turborepo"],
    role: "Solo developer",
    url: "https://app.risecoffee.co",
    github: "https://github.com/solution-ops/rise.coffee",
    status: "live",
  },
  {
    slug: "task-cloud",
    name: "Task.Cloud",
    tagline: "Task management, stripped to the essentials",
    description:
      "A modern task management app built for speed and clarity. Category-based organization, keyboard-first interaction, and a clean interface that gets out of the way. Features dynamic feature environments per PR with ephemeral Neon branches and automated E2E testing against preview deployments.",
    stack: ["React 19", "Hono", "Cloudflare Workers", "Neon Postgres", "Drizzle ORM", "TanStack Router", "Turborepo"],
    role: "Solo developer",
    github: "https://github.com/solution-ops/task.cloud",
    status: "live",
  },
  {
    slug: "proof-barrel",
    name: "Proof Barrel",
    tagline: "Barrel tracking and rickhouse management for craft distilleries",
    description:
      "A system of record for craft distilleries. Visual rickhouse grids, gauging logs optimized for one-handed mobile use, mashbill recipes with lineage tracking, and TTB compliance reporting. Every action is timestamped, attributed, and audit-ready by default.",
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
    role: "Solo developer",
    url: "https://proofbarrel.co",
    github: "https://github.com/solution-ops/proof.barrel",
    status: "live",
  },
  {
    slug: "tamarack",
    name: "Tamarack",
    tagline: "A Pacific Northwest remodeling contractor, online",
    description:
      "Marketing site for a PNW home remodeling contractor. Photography-driven, editorial layout with a warm, crafted aesthetic. Built with TanStack Start for server-side rendering and deployed to Cloudflare Pages. Content is data-driven and CMS-migration ready.",
    stack: ["React 19", "TanStack Start", "Tailwind CSS v4", "Cloudflare Pages", "Vite"],
    role: "Solo developer",
    github: "https://github.com/solution-ops/tamarack",
    status: "in-development",
  },
  {
    slug: "salon",
    name: "Salon",
    tagline: "Custom nail art deserves a custom experience",
    description:
      "A marketing site for a nail salon that treats nail art as wearable art. Dark-first design with a luxury aesthetic. Minimalist UI, generous whitespace, and editorial photography. Built with TanStack Start and Motion for smooth, purposeful animations.",
    stack: ["React 19", "TanStack Start", "Tailwind CSS v4", "Motion", "Cloudflare Pages", "Vite"],
    role: "Solo developer",
    github: "https://github.com/solution-ops/salon",
    status: "in-development",
  },
]
