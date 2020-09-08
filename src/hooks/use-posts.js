import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            author
            date
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    autho: post.frontmatter.author,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    excerpt: post.excerpt,
  }))
}
export default usePosts
