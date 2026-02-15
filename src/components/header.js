import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import logo from "../images/logo.png"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;
  &.active {
    background-image: linear-gradient(to left, #c471f5 0%, #fa71cd 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &:last-of-type {
    margin-right: 0;
  }
`
const Header = () => (
  <header
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem calc((100vw - 900px - 0.5rem) / 2);
    `}
  >
    <div
      css={css`
        margin: 1rem 0 1rem 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <NavLink to="/" fontWeight="bold">
        <img src={logo} alt="logo" style={{ maxWidth: "100%" }} />
      </NavLink>
    </div>
    <nav
      css={css`
        width: 100%;
        margin-top: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
      `}
    >
      <div
        className="website-nav"
        css={css`
          margin: 0;
        `}
      >
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </div>
    </nav>
  </header>
)
export default Header
