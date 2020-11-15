import React from "react"
import Header from "./header"
import Menu from "./menu"

import "../assets/style.css"

const Layout = ({ children }) => (
  <div>
    <Header />
    <Menu />
  </div>
)

export default Layout
