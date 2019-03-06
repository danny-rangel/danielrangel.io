import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
query BlogPostArchive {
    allMarkdownRemark (sort: {
        order: DESC,
                fields: [frontmatter___date]	
          }) {
          edges {
              node {
          frontmatter {
                      title
            date(formatString:"MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({allMarkdownRemark}) => (
      <>
        <h1>Archive</h1>
        <ul>
            {allMarkdownRemark.edges.map(edge => (
                <li key={edge.node.frontmatter.slug}>
                    <Link to={`/blog${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
                </li>
            ))}
        </ul>
      </>
    )}
  />
)


export default Archive
