import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from 'styled-components';

const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark (sort: {
            order: DESC,
                    fields: [frontmatter___date]	
            }) {
            edges {
                node {
                    excerpt
            frontmatter {
                title
                date(formatString:"MMMM DD, YYYY")
                slug
                description
            }
            }
        }
        }
    }
`

const Post = styled.article`
    padding: 1rem;
    border-radius: 4px;
    a {
        color: #FFCCBC;
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

const BlogListing = () => (
  <StaticQuery 
    query={LISTING_QUERY}
    render={({allMarkdownRemark}) => (
        allMarkdownRemark.edges.map(edge => (
            <Post key={edge.node.frontmatter.slug}>
                <h2><Link to={`/blog${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                </Link></h2>
                <p>{edge.node.frontmatter.date}</p>
                <p>{edge.node.frontmatter.description}</p>
            </Post>
        ))
    )}
  />
)

export default BlogListing;
