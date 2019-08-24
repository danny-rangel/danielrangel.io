import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div
        style={{
          margin: "auto",
          maxWidth: "42rem",
          padding: "1.3rem",
          minHeight: "100vh",
          display: "grid",
          gridTemplateRows: "90px 1fr 100px",
          gridTemplateColumns: "1fr",
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main
          style={{
            margin: `0`,
            maxWidth: 960,
            padding: `1rem`,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
