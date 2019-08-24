import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

const PROJECT_LISTING_QUERY = graphql`
  query ProjectListing {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            description
          }
        }
      }
    }
  }
`

const Project = styled.article`
  padding: 0rem 0rem 2rem 0rem;
  border-radius: 4px;
  margin: 0;
  a {
    color: #ffccbc;
    text-decoration: none;
  }
  p {
    color: white;
    font-size: 0.8rem;
    margin: 0;
  }
  h2 {
    margin: 0;
  }
`

const ProjectListing = () => (
  <StaticQuery
    query={PROJECT_LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(edge => (
        <Project key={edge.node.frontmatter.slug}>
          <h2>
            <Link to={`/projects${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p>{edge.node.frontmatter.description}</p>
        </Project>
      ))
    }
  />
)

export default ProjectListing
