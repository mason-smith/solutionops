export const company = {
  name: "SolutionOps",
  owner: "Mason Smith",
  tagline: "Crafted software.",
  description:
    "I'm Mason, a Silicon Valley bred software engineer now based in Kentucky. I treat every project as a craft, not a transaction. Whether you need a static website or a fully custom application, your project gets the same craftsmanship. When it ships with my name on it, it's built right.",
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
