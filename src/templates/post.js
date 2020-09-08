import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import ReadLink from "../components/read-link"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
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
    <MDXRenderer>{post.body}</MDXRenderer>
    <ReadLink to="/">&larr; Go back home</ReadLink>
  </Layout>
)
export default PostTemplate
