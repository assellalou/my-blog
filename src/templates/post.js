import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"
import Seo from "../components/seo"

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
    }
  }
`

const PostTemplate = ({ data: { mdx: post }, children }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      {`posted by ${post.frontmatter.author}`}
    </p>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      {new Date(post.frontmatter.date).toDateString()}
    </p>
    {children}
    <ReadLink to="/">&larr; Go back home</ReadLink>
  </Layout>
)

export const Head = ({ data: { mdx: post } }) => (
  <Seo title={post.frontmatter.title} />
)

export default PostTemplate
