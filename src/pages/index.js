import React from "react"
import Layout from "../components/layout"
import usePosts from "../hooks/use-posts"
import PostPreview from "../components/post-preview"

export default () => {
  const posts = usePosts()
  return (
    <Layout>
      <h1>Home</h1>
      <h2>Read my blogs</h2>
      {posts.map(post => (
        // <pre>{JSON.stringify(post, null, 2)}</pre>
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}
