export const company = {
  name: "SolutionOps",
  tagline: "Software, from scratch.",
  description:
    "Freelance software engineering for teams that need things built right. Full-stack TypeScript, cloud-native architecture, and interfaces that feel considered, not generated.",
  email: "mason.smith@solutionops.com",
  github: "https://github.com/solution-ops",
  linkedin: "https://linkedin.com/in/masonsmith",
  site: "https://solutionops.com",
} as const

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "GitHub", href: company.github, external: true },
  { label: "Contact", href: `mailto:${company.email}`, external: true },
] as const
