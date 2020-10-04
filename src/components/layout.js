import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./globalStyles"
import { lightTheme, darkTheme } from "../themes"
import { useDarkMode } from "./useDarkMode"

import Header from "./header"
import Footer from "./footer"
import Toggle from "./toggle"
import "./layout.css"

const Layout = ({ children }) => {
  const [theme, themeToggler, mountedComponent] = useDarkMode()
  const themeMode = theme === "light" ? lightTheme : darkTheme

  if (!mountedComponent) return <div />

  return (
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
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            <div className="overlay">
              <Header siteTitle={data.site.siteMetadata.title} />
              <Toggle theme={theme} toggleTheme={themeToggler} />
              <main>{children}</main>
              <Footer />
            </div>
          </>
        </ThemeProvider>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
