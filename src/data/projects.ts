export type ProjectImage = {
  src: string
  alt: string
}

export type ProjectHero = {
  dark: string
  light: string
  alt: string
}

export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  stack: Array<string>
  url?: string
  github?: string
  featured?: boolean
  status: "live" | "in-development" | "client"
  images?: {
    hero?: ProjectHero
    fan?: [ProjectImage, ProjectImage, ProjectImage]
  }
}

const img = (slug: string, file: string) => `/images/projects/${slug}/${file}`

export const projects: Array<Project> = [
  {
    slug: "proof-barrel",
    name: "Proof Barrel",
    tagline: "Advanced barrel tracking for craft distilleries",
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
    featured: true,
    status: "live",
    images: {
      hero: {
        dark: img("proof-barrel", "dashboard-desktop-dark.png"),
        light: img("proof-barrel", "dashboard-desktop-light.png"),
        alt: "Proof Barrel dashboard showing barrel inventory",
      },
      fan: [
        { src: img("proof-barrel", "rickhouse-mobile-dark.png"), alt: "Rickhouse grid on mobile" },
        { src: img("proof-barrel", "dashboard-mobile-dark.png"), alt: "Proof Barrel mobile dashboard" },
        { src: img("proof-barrel", "barrel-detail-mobile-light.png"), alt: "Barrel detail on mobile" },
      ],
    },
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
    images: {
      hero: {
        dark: img("rise-coffee", "dashboard-desktop-dark.png"),
        light: img("rise-coffee", "dashboard-desktop-light.png"),
        alt: "Rise Coffee dashboard with brew history",
      },
      fan: [
        { src: img("rise-coffee", "brew-log-mobile-dark.png"), alt: "Brew log on mobile" },
        { src: img("rise-coffee", "dashboard-mobile-dark.png"), alt: "Rise Coffee mobile dashboard" },
        { src: img("rise-coffee", "bean-detail-mobile-light.png"), alt: "Bean detail view" },
      ],
    },
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
    images: {
      hero: {
        dark: img("task-cloud", "dashboard-desktop-dark.png"),
        light: img("task-cloud", "dashboard-desktop-light.png"),
        alt: "Task Cloud dashboard with category view",
      },
      fan: [
        { src: img("task-cloud", "dashboard-mobile-dark.png"), alt: "Task Cloud mobile dashboard" },
        { src: img("task-cloud", "task-view-mobile-dark.png"), alt: "Task detail on mobile" },
        { src: img("task-cloud", "task-view-mobile-light.png"), alt: "Task view in light mode" },
      ],
    },
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
    images: {
      hero: {
        dark: img("tamarack", "home-desktop.png"),
        light: img("tamarack", "home-desktop.png"),
        alt: "Tamarack Remodel & Design home page",
      },
      fan: [
        { src: img("tamarack", "home-mobile.png"), alt: "Tamarack mobile home page" },
        { src: img("tamarack", "contact-mobile.png"), alt: "Contact page on mobile" },
        { src: img("tamarack", "why-tamarack-mobile.png"), alt: "Why Tamarack on mobile" },
      ],
    },
  },
  {
    slug: "salon",
    name: "Polish'd",
    tagline: "Nail art deserves better than a template",
    description:
      "The owner of Polish'd came to me because every nail artist website she found looked the same. So we built something that feels like her work: dark, bold, and unapologetically artistic. Smooth animations, generous whitespace, and photography that does the talking. I'm also helping revitalize her business with SEO work after she started losing clients.",
    stack: ["React 19", "TanStack Start", "Tailwind CSS v4", "Motion", "Cloudflare Pages", "Vite", "SEO"],
    github: "https://github.com/solution-ops/salon",
    featured: true,
    status: "in-development",
    images: {
      hero: {
        dark: img("salon", "home-desktop-dark.png"),
        light: img("salon", "home-desktop-light.png"),
        alt: "Polish'd nail salon home page",
      },
      fan: [
        { src: img("salon", "home-mobile-dark.png"), alt: "Polish'd mobile home page" },
        { src: img("salon", "about-mobile-dark.png"), alt: "About page on mobile" },
        { src: img("salon", "about-mobile-light.png"), alt: "About page in light mode" },
      ],
    },
  },
]
