import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"
import Seo from "../components/seo"

const HomePage = () => {
  const posts = usePosts()
  return (
    <Layout>
      <h1
        css={css`
          margin-top: 100px;
        `}
      >
        Hi.
        <span role="img" aria-label="hand waves">
          👋🏼
        </span>
      </h1>
      <h2
        css={css`
          margin-top: 2rem;
          font-weight: 500;
        `}
      >
        I'm Assellalou - I am a Software Engineer
        <span
          css={css`
            background-image: linear-gradient(
              to left,
              #667eea 0%,
              #764ba2 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 0.15rem;
          `}
        >
          @Odoo
        </span>
        , Security Enthusiast and DevOps hobbyist.
      </h2>
      <h2
        css={css`
          margin-top: 2rem;
          font-weight: 500;
        `}
      >
        I'm open to new opportunities and collaborations.
      </h2>
      <h2
        css={css`
          margin-top: 2rem;
          margin-bottom: 100px;
          font-weight: 500;
        `}
      >
        This is my old personal website, don't forget to check out my new one at{" "}
        <a href="https://assellalou.com">assellalou.com</a>.
      </h2>

      <h2
        css={css`
          margin-bottom: 2rem;
          border-bottom: 1px solid #ddd;
        `}
      >
        Old Posts
      </h2>

      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export const Head = () => <Seo />

export default HomePage
