import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>About</h1>
    <h2>
      I'm{" "}
      <span
        css={css`
          background: rebeccapurple;
          color: #eee;
          padding: 0.15rem;
        `}
      >
        Assellalou
      </span>{" "}
      and I'm tryna make the world a more open place by sharing programming
      goodness💜
    </h2>
    <Link to="/">&larr; Go back home</Link>
  </Layout>
)
