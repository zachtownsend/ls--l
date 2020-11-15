import React from "react"
import { Link } from "gatsby"
import GatsbyLogo from "../assets/svg/gatsby.inline.svg"

export default () => (
  <h1>
    <Link to="/">
    <GatsbyLogo />
    <span
      style={{
        transform: `translateY(5px)`,
        display: `inline-block`,
      }}
    >
        Gatsby Source WordPress V4 demo
  </span>
  </Link>
  </h1>
)
