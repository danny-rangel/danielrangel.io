import React from "react"
import { Link } from 'gatsby'

import BlogListing from '../components/blogListing';
import Layout from "../components/layout"


const BlogPage = () => (
    <>
        <Layout>
            <BlogListing />
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

export default BlogPage;
