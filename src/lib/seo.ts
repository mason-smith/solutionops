const SITE_URL = "https://solutionops.com"
const SITE_NAME = "SolutionOps"
const DEFAULT_TITLE = "SolutionOps | Crafted software."
const DEFAULT_DESCRIPTION =
  "Mason Smith is a Silicon Valley bred software engineer in Kentucky. Every project is a craft, not a transaction. When it ships with his name on it, it's built right."

type SeoOptions = {
  title?: string
  description?: string
  path?: string
  type?: "website" | "article"
}

export function createSeoMeta({ title, description, path = "/", type = "website" }: SeoOptions = {}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
  const pageDescription = description || DEFAULT_DESCRIPTION
  const canonicalUrl = `${SITE_URL}${path}`

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },

    // Open Graph
    { property: "og:type", content: type },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_US" },

    // Twitter
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },

    // Geo targeting
    { name: "geo.region", content: "US-KY" },
    { name: "geo.placename", content: "Kentucky" },
  ]
}

export function createCanonicalLink(path = "/") {
  return { rel: "canonical", href: `${SITE_URL}${path}` }
}

export function createJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        founder: {
          "@type": "Person",
          name: "Mason Smith",
          jobTitle: "Software Engineer",
          url: SITE_URL,
          sameAs: ["https://github.com/solution-ops", "https://linkedin.com/in/masonsmith"],
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "KY",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "State", name: "Kentucky" },
        ],
        serviceType: [
          "Custom Software Development",
          "Web Application Development",
          "Website Development",
          "Full-Stack Development",
          "Cloud-Native Architecture",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        description:
          "Freelance software engineering in Kentucky. Custom websites, web applications, and cloud-native systems built with care.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "State", name: "Kentucky" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Web Application Development",
                description: "Full-stack TypeScript applications deployed to Cloudflare Workers",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Website Development",
                description: "Static and server-rendered websites for businesses of all sizes",
              },
            },
          ],
        },
      },
    ],
  }
}
