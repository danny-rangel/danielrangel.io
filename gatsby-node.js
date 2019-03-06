const path = require('path');


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    createPage({
        path: `/blog`,
        component: path.resolve('./src/components/blogPage.js')
    });

    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark{
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
    
    
}