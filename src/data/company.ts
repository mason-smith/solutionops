export const company = {
  name: "SolutionOps",
  owner: "Mason Smith",
  tagline: "Crafted software.",
  description:
    "I'm Mason, a Silicon Valley bred software engineer now based in Kentucky. I treat every project as a craft, not a transaction. Whether it's a website for a local business or a barrel tracking system for a distillery, it gets the same care. When it ships with my name on it, it's built right.",
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
