import React from "react"
import { Link } from "gatsby"
import GatsbyLogo from "../assets/svg/gatsby.inline.svg"
import Container from "./Container"

export default () => (
  <header>
    <Container>
      <h1>
        <Link to="/" className="flex align-center">
          <GatsbyLogo className="w-10 h-10" />
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
    </Container>
  </header>
)
