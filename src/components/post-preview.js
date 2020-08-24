import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import ReadLink from "./read-link"

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;
      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link to={post.slug}>
      <h3>{post.title}</h3>
    </Link>
    <p>{post.excerpt}</p>
    <ReadLink to={post.slug}>read more &rarr;</ReadLink>
  </article>
)

export default PostPreview
