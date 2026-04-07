export type ProjectImage = {
  src: string
  alt: string
  size: "desktop" | "mobile"
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
  status: "live" | "in-development" | "client"
  images?: {
    hero?: ProjectHero
    gallery?: Array<ProjectImage>
  }
}

const img = (slug: string, file: string) => `/images/projects/${slug}/${file}`

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
    images: {
      hero: {
        dark: img("proof-barrel", "dashboard-desktop-dark.png"),
        light: img("proof-barrel", "dashboard-desktop-light.png"),
        alt: "Proof Barrel dashboard showing barrel inventory",
      },
      gallery: [
        {
          src: img("proof-barrel", "rickhouse-desktop-dark.png"),
          alt: "Visual rickhouse grid layout",
          size: "desktop",
        },
        { src: img("proof-barrel", "dashboard-mobile-dark.png"), alt: "Proof Barrel mobile dashboard", size: "mobile" },
        {
          src: img("proof-barrel", "barrel-detail-desktop-dark.png"),
          alt: "Barrel detail view with gauging history",
          size: "desktop",
        },
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
      gallery: [
        { src: img("rise-coffee", "dashboard-mobile-dark.png"), alt: "Rise Coffee mobile dashboard", size: "mobile" },
        { src: img("rise-coffee", "brew-log-mobile-dark.png"), alt: "Brew log on mobile", size: "mobile" },
        { src: img("rise-coffee", "bean-detail-mobile-light.png"), alt: "Bean detail view", size: "mobile" },
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
      gallery: [
        {
          src: img("task-cloud", "task-view-desktop-dark.png"),
          alt: "Task detail view",
          size: "desktop",
        },
        { src: img("task-cloud", "dashboard-mobile-dark.png"), alt: "Task Cloud mobile dashboard", size: "mobile" },
        {
          src: img("task-cloud", "task-view-mobile-light.png"),
          alt: "Task detail on mobile in light mode",
          size: "mobile",
        },
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
      gallery: [
        {
          src: img("tamarack", "portfolio-grid-desktop.png"),
          alt: "Portfolio grid showing completed projects",
          size: "desktop",
        },
        { src: img("tamarack", "home-mobile.png"), alt: "Tamarack mobile home page", size: "mobile" },
        { src: img("tamarack", "process-desktop.png"), alt: "Remodeling process overview", size: "desktop" },
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
    status: "in-development",
    images: {
      hero: {
        dark: img("salon", "home-desktop-dark.png"),
        light: img("salon", "home-desktop-light.png"),
        alt: "Polish'd nail salon home page",
      },
      gallery: [
        {
          src: img("salon", "services-desktop-dark.png"),
          alt: "Services page with pricing",
          size: "desktop",
        },
        { src: img("salon", "home-mobile-dark.png"), alt: "Polish'd mobile home page", size: "mobile" },
        { src: img("salon", "about-mobile-light.png"), alt: "About page on mobile in light mode", size: "mobile" },
      ],
    },
  },
]
