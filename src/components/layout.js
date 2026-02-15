import React from "react"
import { Global, css } from "@emotion/react"
import Header from "./header"
const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family:
              "IBM Plex Sans",
              -apple-system,
              BlinkMacSystemFont,
              "Segoe UI",
              Roboto,
              "Helvetica Neue",
              Arial,
              "Noto Sans",
              sans-serif,
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
              "Noto Color Emoji";
            font-size: 18px;
            line-height: 1.5;
            > div {
              margin: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.3;
            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }

          a {
            text-decoration: none;
            color: rebeccapurple;
          }
        `}
      />
      <Header />
      <main
        css={css`
          margin: 2rem auto 4rem;
          max-width: 90vw;
          width: 550px;
        `}
      >
        {children}
      </main>
    </>
  )
}
export default Layout
