import { Link, graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Img from "gatsby-image"

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.8rem;
`;

const AVI_QUERY = graphql`
{
  file(relativePath: {
		regex: "/profilepic/"
  }) {
		childImageSharp {
			fluid(maxWidth: 200) {
				...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 0.8rem`,
            paddingTop: 0,
          }}>
        <StaticQuery
          query={AVI_QUERY}
          render={data => <Img className="aviPhoto" fluid={data.file.childImageSharp.fluid} />}
        />
        <div style={{display: 'inline-block', padding: '0 0 0 1rem'}}>
          <h2 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                color: '#FFCCBC'
              }}
            >
              {siteTitle}
            </Link>
          </h2>
          <h5 style={{ color: '#FFCCBC', margin: 0}}>Creating through code and music</h5>
        </div>
      </div>
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
