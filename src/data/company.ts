export const company = {
  name: "SolutionOps",
  owner: "Mason Smith",
  tagline: "Software, from scratch.",
  description:
    "I'm Mason, a software engineer who left Silicon Valley for Kentucky. I still build the same caliber of software, just with more intention and less overhead. If you need something built right the first time, let's talk.",
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
