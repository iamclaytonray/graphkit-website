import * as React from "react"

import { Header } from "../Header"

import "./layout.scss"

export const Layout = ({ children, pageTitle }) => (
  <React.Fragment>
    <Header pageTitle={pageTitle} />
    <div>
      <main>{children}</main>
    </div>
  </React.Fragment>
)
