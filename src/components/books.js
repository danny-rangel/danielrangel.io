import React from "react"
import { Link } from 'gatsby';
import Layout from "./layout"
import SEO from "./seo"
import BookCollage from './bookCollage';
import './books.css';


const Books = () => (
    <div style={{ margin: 'auto', maxWidth: '42rem', padding: '2rem 0'}}>
      <Layout>
        <SEO title="Recommendations" />
        <div style={{padding: '1rem'}} >
        <h1 style={{color: '#FFCCBC'}} >Books</h1>
          <div className="booksContainer">
            <BookCollage className="item" />
          </div>
          <div style={{color: '#FFCCBC', marginTop: '30px'}}>
            <Link to="/" style={{color: '#FFCCBC'}}>Back</Link>
          </div>
        </div>
      </Layout>
      <footer style={{color: '#FFCCBC', bottom: 0, width: '100%', textAlign: 'center', left: 0, position: 'relative'}}>
          <div>
              <h4 style={{display: 'inline-block', margin: '8px'}} ><a href="https://github.com/danny-rangel" style={{color: '#FFCCBC'}} >Github</a></h4>
              <h4 style={{display: 'inline-block', margin: '8px'}}><a href="mailto:hello@danielrangel.io" style={{color: '#FFCCBC'}} >Email</a></h4>
              <p>© {new Date().getFullYear()}, Daniel Rangel
              {` `}</p>
          </div>
      </footer> 
    </div>
)

export default Books;
