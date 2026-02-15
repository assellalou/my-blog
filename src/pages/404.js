import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1 style={{ textAlign: "center", marginBottom: 20, marginTop: 50 }}>
      Eww Are you sure !!, it's a 4
      <span role="img" aria-label="face emoji">
        🙄
      </span>
      4
    </h1>
    <Link to="/">&larr; Go back home</Link>
  </Layout>
)

export const Head = () => <Seo title="Oops, Not Found" />

export default NotFoundPage
