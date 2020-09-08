import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <h1
        css={css`
          margin-top: 100px;
        `}
      >
        Hi. {""}
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
        I'm Assellalou - I am a full stack developer, security newbie and IT
        student from Morocco.
      </h2>
      <h2
        css={css`
          margin-top: 2rem;
          font-weight: 500;
        `}
      >
        My last job was at Sagatec a small company in my country, and I am
        currently looking for a job anywhere in the world.
      </h2>
      <h2
        css={css`
          margin-top: 2rem;
          margin-bottom: 100px;
          font-weight: 500;
        `}
      >
        Meanwhile I make a lot of random projects because the web needs some
        dumb shit.
      </h2>

      <h2
        css={css`
          margin-bottom: 2rem;
          border-bottom: 1px solid #ddd;
        `}
      >
        Latest Posts
      </h2>

      {posts.map(post => (
        // <pre>{JSON.stringify(post, null, 2)}</pre>
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
