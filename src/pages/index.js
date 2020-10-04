import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>software engineer @ google</h4>
    <h4 style={{ display: "inline-block", margin: "8px" }}>
      <a href="https://github.com/danny-rangel">github</a>
    </h4>
    <h4 style={{ display: "inline-block", margin: "8px" }}>
      <a href="mailto:hello@danielrangel.io">email</a>
    </h4>
  </Layout>
)

export default IndexPage
