import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from './layout';

export default class blogLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;

        return (
            <Layout>
              <div style={{padding: '1rem'}}>
                <h1 style={{color: '#FFCCBC'}}>{markdownRemark.frontmatter.title}</h1>
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }} />
                </div>
            </Layout>
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