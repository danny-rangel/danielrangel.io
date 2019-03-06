import React from "react"
import { Link } from 'gatsby'

import BlogListing from '../components/blogListing';
import Layout from "../components/layout"


const IndexPage = () => (
  <>
    <Layout>
      <div style={{padding: '1rem'}}>
        <Link to="/projects" style={{textDecoration: 'none', color: '#FFCCBC'}}><h2 style={{margin: '0 0 40px'}}>Projects</h2></Link>
        <Link to="/blog" style={{textDecoration: 'none', color: '#FFCCBC'}}><h2 style={{margin: '0 0 40px'}}>Blog</h2></Link>
        <Link to="/music" style={{textDecoration: 'none', color: '#FFCCBC'}}><h2 style={{margin: '0 0 40px'}}>Music</h2></Link>
      </div>
    </Layout>
    <footer style={{color: '#FFCCBC', bottom: 0, width: '100%', textAlign: 'center', position: 'fixed'}}>
      <div>
        <h4 style={{display: 'inline-block', margin: '8px'}} ><a href="https://github.com/danny-rangel" style={{color: '#FFCCBC'}} >Github</a></h4>
        <h4 style={{display: 'inline-block', margin: '8px'}}><a href="mailto:hello@danielrangel.io" style={{color: '#FFCCBC'}} >Email</a></h4>
        <p>© {new Date().getFullYear()}, Daniel Rangel
        {` `}</p>
      </div>
    </footer> 
  </>
)

export default IndexPage
