import React from "react"

import SEO from '../components/seo'
import BlogListing from '../components/blogListing';
import Layout from "../components/layout"


const BlogPage = () => (
    <div style={{ margin: 'auto', maxWidth: '42rem', padding: '2rem 0', minHeight: '100vh'  }}>
    <SEO title="Blog" />
        <Layout>
            <BlogListing />
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

export default BlogPage;
