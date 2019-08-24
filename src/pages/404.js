import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import gif from "../images/giphy.gif"

const NotFoundPage = () => (
  <div style={{ margin: "auto", maxWidth: "42rem" }}>
    <Layout>
      <SEO title="404: Not found" />
      <h1 style={{ color: "#FFCCBC" }}>Oops...</h1>
      <p>There doesn&#39;t seem to be anything here...yet.</p>
      <div style={{ width: "100%", textAlign: "center" }}>
        <img
          src={gif}
          style={{ borderRadius: "4px", boxShadow: "0px 1px 2px #292929" }}
          alt="spongebob"
        />
      </div>
    </Layout>
  </div>
)

export default NotFoundPage
