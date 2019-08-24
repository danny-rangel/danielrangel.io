import React, { Component } from "react"
import { graphql, Link } from "gatsby"
import Layout from "./layout"

export default class projectLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
      <Layout>
        <h1 style={{ color: "#FFCCBC" }}>{markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
        <Link to="/projects" style={{ color: "#FFCCBC" }}>
          Back
        </Link>
      </Layout>
    )
  }
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
