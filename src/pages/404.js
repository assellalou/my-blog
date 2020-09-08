import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout>
    <Helmet>
      <title>Assellalou - Oops</title>
    </Helmet>
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
export default NotFound
