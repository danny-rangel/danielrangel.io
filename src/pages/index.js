import React from "react"
import { Link } from 'gatsby'

import SEO from '../components/seo'
import Layout from "../components/layout"




const IndexPage = () => (
  <div style={{ margin: 'auto', maxWidth: '42rem', padding: '2rem 0', minHeight: '100vh' }}>
    <Layout>
      <SEO title="Home" />
      <div style={{padding: '1rem'}}>
        <h2 style={{margin: '0 0 10px'}}><Link to="/projects" style={{textDecoration: 'none', color: '#FFCCBC'}}>Projects</Link></h2>
        <p> A collection of some of my personal projects</p>
        <h2 style={{margin: '0 0 10px'}}><Link to="/blog" style={{textDecoration: 'none', color: '#FFCCBC'}}>Blog</Link></h2>
        <p>Posts about music, tech, and life</p>
        <h2 style={{margin: '0 0 10px'}}><Link to="/music" style={{textDecoration: 'none', color: '#FFCCBC'}}>Music</Link></h2>
        <p>Recordings by yours truly</p>
      </div>
    </Layout>
    <footer style={{color: '#FFCCBC', bottom: 0, width: '100%', textAlign: 'center', left: 0, position: 'absolute'}}>
      <div>
        <h4 style={{display: 'inline-block', margin: '8px'}} ><a href="https://github.com/danny-rangel" style={{color: '#FFCCBC'}} >Github</a></h4>
        <h4 style={{display: 'inline-block', margin: '8px'}}><a href="mailto:hello@danielrangel.io" style={{color: '#FFCCBC'}} >Email</a></h4>
        <p>© {new Date().getFullYear()}, Daniel Rangel
        {` `}</p>
      </div>
    </footer> 
  </div>
)

export default IndexPage
