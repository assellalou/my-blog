import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1
      css={css`
        margin-bottom: 2.5rem;
      `}
    >
      About
    </h1>
    <h3
      css={css`
        margin-top: 1.5rem;
        font-weight: 400;
        line-height: 1.5;
      `}
    >
      Hi{" "}
      <span role="img" aria-label="hand waves">
        👋🏼
      </span>
    </h3>
    <h3
      css={css`
        margin-top: 1.5rem;
        font-weight: 400;
        line-height: 1.5;
      `}
    >
      I'm{" "}
      <span
        css={css`
          background-image: linear-gradient(to left, #667eea 0%, #764ba2 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding: 0.15rem;
        `}
      >
        Assellalou
      </span>
      - I am a full stack developer, security newbie and IT student from
      Morocco.
    </h3>
    <h3
      css={css`
        margin-top: 1.5rem;
        font-weight: 400;
        line-height: 1.5;
      `}
    >
      My last job was at Sagatec a small company in Morocco and I am currently
      looking for a job anywhere in the world.
    </h3>
    <h3
      css={css`
        margin-top: 1.5rem;
        font-weight: 400;
        line-height: 1.5;
      `}
    >
      Meanwhile I make a lot of random projects because the web needs some dumb
      shit.
    </h3>
    <h3
      css={css`
        margin-top: 30px;
        margin-bottom: 10px;
      `}
    >
      Wanna support me ?
    </h3>

    <a href="https://paypal.me/assellalou" target="_blank" rel="noreferrer">
      <img
        src="https://img.shields.io/badge/Buy%20me%20a%20coffee-005EA6?style=flat-square&logo=paypal&logoColor=fff&link=https://www.paypal.me/assellalou/"
        alt="Buy me a coffee"
      />
    </a>
    <br />
    <Link to="/">&larr; Go back home</Link>
  </Layout>
)
