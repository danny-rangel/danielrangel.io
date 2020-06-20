import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{ margin: "0 0 10px" }}>
      <Link to="/projects" style={{ textDecoration: "none", color: "#FFCCBC" }}>
        Projects
      </Link>
    </h2>
    <p> A collection of some personal projects</p>
  </Layout>
)

export default IndexPage
