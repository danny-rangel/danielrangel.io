import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import gif from '../images/giphy.gif'

const NotFoundPage = () => (
  <div style={{ margin: 'auto', maxWidth: '42rem', padding: '2rem 0.5rem'}}>
    <Layout>
      <SEO title="404: Not found" />
      <div style={{padding: '1rem'}}>
        <h1 style={{color: '#FFCCBC'}}>Oops...</h1>
        <p>There doesn&#39;t seem to be anything here...yet.</p>
        <div style={{width: '100%', textAlign: 'center'}}>
          <img src={gif} alt="spongebob"/>
        </div>
      </div>
    </Layout>
  </div>
)

export default NotFoundPage
