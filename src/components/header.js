import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
// import Image from '../components/image';

import avi from "../images/avi.jpg";

const HeaderWrapper = styled.div`
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0.8rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <div style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1rem`,
            paddingTop: 0,
          }}>
        <img alt="avi" src={avi} style={{width: '60px', borderRadius: '100%', margin: 0}}></img>
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
          <h5 style={{ color: '#FFCCBC', margin: 0}}>I create through code and music</h5>
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
