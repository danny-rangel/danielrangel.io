// import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// import Archive from './archive';
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import Header from "./header"

// const SecondPage = () => (
//   <StaticQuery
//   query={graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `}
  
//     render={data => (
//       <>
//       <Layout>
//         <SEO title="Blog" />
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div
//           style={{
//             margin: `0 auto`,
//             maxWidth: 960,
//             padding: `0px 1.0875rem 1.45rem`,
//             paddingTop: 0,
//           }}
//         >
//           <Archive />
//           <footer>
//             © {new Date().getFullYear()}, Daniel Rangel
//             {` `}
//           </footer>
//         </div>
//         </Layout>
//       </>
//     )}
//   />
  
// )

// export default SecondPage
