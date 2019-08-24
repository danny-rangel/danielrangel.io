import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
// import Img from "gatsby-image"

const HeaderWrapper = styled.div`
  max-width: 960px;
  padding: 1rem;
`

const HeaderContainer = styled.div``

// const AVI_QUERY = graphql`
//   {
//     file(relativePath: { regex: "/profilepic/" }) {
//       childImageSharp {
//         fluid(maxWidth: 200) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      {/* <StaticQuery
          query={AVI_QUERY}
          render={data => (
            <Img className="aviPhoto" fluid={data.file.childImageSharp.fluid} />
          )}
        /> */}
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: "#FFCCBC",
          }}
        >
          {siteTitle}
        </Link>
      </h2>
      <h5 style={{ color: "#FFCCBC", margin: 0 }}>
        Creating through code and music
      </h5>
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
