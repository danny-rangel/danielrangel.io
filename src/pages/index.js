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
    <h2 style={{ margin: "0 0 10px" }}>
      <Link to="/music" style={{ textDecoration: "none", color: "#FFCCBC" }}>
        Music
      </Link>
    </h2>
    <p>Recordings by yours truly</p>
  </Layout>
)

export default IndexPage
