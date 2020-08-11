import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        padding: "1rem",
      }}
    >
      <h1>Welcome to the former site of SolutionOps, LLC</h1>
      <p>
        Some years ago I decided to leave the independent contracting life
        behind me <br />
        and pursue full time employment.
      </p>
      <p>
        I am now happily employed at{" "}
        <a style={{ color: "#000" }} href="https://www.i4-insight.com/">
          i4-Insight
        </a>{" "}
        where I organize big data into <br /> easy-to-interpret visualizations
        and predictive analytics.
      </p>
      <p>
        I am not active on social media but you can scope <br /> some weird
        projects and experiments on my{" "}
        <a style={{ color: "#000" }} href="https://github.com/mason-smith">
          Github
        </a>
      </p>
      <p>
        I have a "blog" called{" "}
        <a style={{ color: "#000" }} href="https://www.masonsmith.dev/">
          WeirdJS
        </a>{" "}
        where I just kind of say what's on my mind.
      </p>
    </div>
  </Layout>
)

export default IndexPage
