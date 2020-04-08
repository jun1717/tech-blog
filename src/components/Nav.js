import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, css } from "@emotion/core"

const headerTitle = css({
  color: "#4A4A4A",
  fontWeight: "bold",
  fontSize: "40px",
  lineHeight: "65px",
})

const linkStyle = {
  position: "absolute",
  top: "24px",
  right: "112px",
  textDecoration: "none",
}

const linkText = css`
  color: #4a4a4a;
  font-weight: bold;
  font-size: 24px;
`

const Nav = () => (
  <nav
    css={{
      backgroundColor: "#FEBF0F",
      padding: "35px 0px",
    }}
  >
    <div
      css={css`
        width: 330px;
        height: 65px;
        margin: 0 auto;
      `}
    >
      <span css={headerTitle}>TECH MEMO</span>
    </div>
    <Link to="/about" style={linkStyle}>
      <span css={linkText}>ABOUT</span>
    </Link>
  </nav>
)

export default Nav
