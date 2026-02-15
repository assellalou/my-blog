exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          internal {
            contentFilePath
          }
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }

  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: `${require.resolve(
        `./src/templates/post.js`,
      )}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
