const path = require('path');


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    createPage({
        path: `/blog`,
        component: path.resolve('./src/components/blogPage.js')
    });

    createPage({
      path: `/recommendations`,
      component: path.resolve('./src/components/books.js')
    });

    createPage({
        path: `/projects`,
        component: path.resolve('./src/components/projectPage.js')
    });

    let promise1 = new Promise((resolve, reject) => {
        graphql(`
            {
            allMarkdownRemark(
              filter: { fileAbsolutePath: {regex : "\/blog/"} }
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
        `).then(results => {
            results.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: `/blog${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/blogLayout.js'),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                });
            })
            resolve();
        })
    });

    let promise2 = new Promise((resolve, reject) => {
        graphql(`
            {
            allMarkdownRemark(
              filter: { fileAbsolutePath: {regex : "\/projects/"} }
            ) {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                }
              }
            }
          }
        `).then(results => {
            results.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: `/projects${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/projectLayout.js'),
                    context: {
                        slug: node.frontmatter.slug,
                    }
                });
            })
            resolve();
        })
    });


    return Promise.all([promise1, promise2]);
    
}