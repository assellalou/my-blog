import React from "react"
import { css } from "@emotion/react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <h1>Contact</h1>
    <h3>Here is my Email!</h3>
    <p>collaborate@assellalou.com</p>
    <h3
      css={css`
        margin-top: 1.5rem;
        font-weight: 400;
        line-height: 1.5;
      `}
    >
      Go to{" "}
      <a
        href="https://assellalou.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        assellalou.com
      </a>
    </h3>
    <Link to="/">&larr; Go back home</Link>
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
