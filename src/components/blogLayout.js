import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from './layout';

export default class blogLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;

        return (
          <div style={{margin: 'auto', maxWidth: '42rem', padding: '2rem 0.5rem', minHeight: '100vh'   }}>
            <Layout>
              <div style={{padding: '1rem'}}>
                <h1 style={{color: '#FFCCBC'}}>{markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }} />
                <Link to="/blog" style={{color: '#FFCCBC'}}>Back</Link>
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
        );
    }
}


export const query = graphql`
    query BlogQuery($slug: String!) {
    markdownRemark(frontmatter: {
        slug: {
            eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;