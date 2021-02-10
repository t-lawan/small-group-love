/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const page = path.resolve(`src/templates/page.js`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    return graphql(
      `
        {
            allContentfulPage {
                edges {
                  node {
                    contentful_id
                    title
                    url
                    contentSection {
                      contentful_id
                      title
                      type
                      text {
                        raw
                      }
                    }
                    type
                  }
                }
              }
        }
      `,
      { limit: 1000 }
    ).then(result => {
      if (result.errors) {
        throw result.errors
      }

      result.data.allContentfulPage.edges.forEach(edge => {

        createPage({
          // Path for this page — required
          path: `${edge.node.url}`,
          component: page,
          context: edge.node,
        })
      })
    })
  }