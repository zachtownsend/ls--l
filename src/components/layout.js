import React from "react"
import Header from "./header"
import Menu from "./menu"

import "../assets/style.css"

const Layout = ({ children }) => (
  <div>
    <Header />
    <Menu />
    <main>{children}</main>
  </div>
)

export default Layout
