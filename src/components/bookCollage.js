import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const IMAGE_QUERY = graphql`
query {
  allFile(
    sort: { order: ASC, fields: [id]},
    filter: {extension: {regex: "/jpg/"}, relativeDirectory: {eq: "bookCovers"}}) {
    edges {
      node {
        id,
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`


const bookCollage = () => (
  <StaticQuery
    query={IMAGE_QUERY}
    render={({allFile}) => (
      allFile.edges.map(edge => (
          <div key={edge.node.id}>
            <Img className="bookImage" style={{border: '1px solid black', boxShadow: '0px 1px 2px #FFCCBC'}} fluid={edge.node.childImageSharp.fluid}></Img>
          </div>
      ))
    )}
  />
)
export default bookCollage
