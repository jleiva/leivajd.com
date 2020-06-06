const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // ToDo: type and path comes from markdown metadata, should I add a fallback in case
    // any of these fields are missing?
    const type = node.frontmatter.type
    const path = node.frontmatter.path

    createNodeField({
      node,
      name: `slug`,
      value: `/${type}${path}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { isDraft: { ne: true } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges
  const postsLength = posts.length

  posts.forEach(({ node }, index) => {
    const previous = index === postsLength - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Create blog post list pages
  const postsPerPage = 20
  const numPages = Math.ceil(postsLength / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/pagina/${i + 1}`,
      component: path.resolve("./src/templates/blog-list.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
