import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Well this is awkward.</p>
    <p>
      SolutionOps is supposed to be a one page site with no navigation or routes
      . . .
    </p>
    <p>
      Do me a favor and <Link to="/">go back?</Link>
    </p>
  </Layout>
)

export default NotFoundPage
