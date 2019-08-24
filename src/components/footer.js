import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
  max-width: 960;
  padding: 1rem;
`

const Footer = () => (
  <FooterWrapper>
    <footer
      style={{
        color: "#FFCCBC",
        width: "100%",
        textAlign: "center",
      }}
    >
      <h4 style={{ display: "inline-block", margin: "8px" }}>
        <a href="https://github.com/danny-rangel" style={{ color: "#FFCCBC" }}>
          Github
        </a>
      </h4>
      <h4 style={{ display: "inline-block", margin: "8px" }}>
        <a href="mailto:hello@danielrangel.io" style={{ color: "#FFCCBC" }}>
          Email
        </a>
      </h4>
      <p style={{ margin: "0" }}>
        © {new Date().getFullYear()}, Daniel Rangel
        {` `}
      </p>
    </footer>
  </FooterWrapper>
)

export default Footer
