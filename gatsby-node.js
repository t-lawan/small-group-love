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
  const project = path.resolve(`src/templates/project.js`)
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
                images {
                  fluid(quality: 100, maxWidth: 2000) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                  file {
                    url
                  }
                }
                isTextTranslucent
              }
              type
              backgroundImage {
                fluid(quality: 100, maxWidth: 2000) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
        allContentfulProject {
          edges {
            node {
              contentful_id
              startDate
              endDate
              title
              isCurrent
              contentSection {
                contentful_id
                text {
                  raw
                }
                title
                type
                images {
                  fluid(quality: 100, maxWidth: 2000) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              url
              participant
              page
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
      console.log('RESULT', edge.node)
      if(edge.node.title !== "Main"){
        createPage({
          // Path for this page — required
          path: `${edge.node.url}`,
          component: page,
          context: edge.node
        })
      }

    })

    result.data.allContentfulProject.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.url}`,
        component: project,
        context: edge.node
      })
    })
  })
}
