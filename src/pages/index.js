import React from "react"
import { Link } from 'gatsby'

import BlogListing from '../components/blogListing';
import Layout from "../components/layout"


const IndexPage = () => (
  <Layout>
    <div style={{padding: '1rem'}}>
      <Link to="/projects" style={{textDecoration: 'none', color: '#FFCCBC'}}><h2 style={{margin: '0 0 40px'}}>Projects</h2></Link>
      <Link to="/blog" style={{textDecoration: 'none', color: '#FFCCBC'}}><h2 style={{margin: '0 0 40px'}}>Blog</h2></Link>
      <Link to="/music" style={{textDecoration: 'none', color: '#FFCCBC'}}><h2 style={{margin: '0 0 40px'}}>Music</h2></Link>
    </div>
  </Layout>
)

export default IndexPage
