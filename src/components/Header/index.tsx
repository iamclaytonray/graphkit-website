import * as React from "react"
import { Link } from "gatsby"
import { Button } from "antd"

import "./header.scss"

export const Header = ({ pageTitle }) => {
  return (
    <React.Fragment>
      <header>
        <div className="nav-logo">
          <Link to="/">
            <img
              src="https://avatars3.githubusercontent.com/u/45945075?s=200&v=4"
              alt="GraphKit Logo"
            />
          </Link>
        </div>
        <nav>
          <Link activeClassName="active" to="/">
            Home
          </Link>
          <Link activeClassName="active" to="/codegen">
            Code Generator
          </Link>
          <Link activeClassName="active" to="/cli">
            CLI
          </Link>
          <Link activeClassName="active" to="/console">
            Console
          </Link>
          <Link activeClassName="active" to="/admin">
            Admin
          </Link>
          <Link activeClassName="active" to="/docs">
            Docs
          </Link>
          <a href="https://github.com/graphkit" target="_blank">
            <Button
              style={{ backgroundColor: "#333", color: "#fff", border: "none" }}
              icon="github"
            >
              Github
            </Button>
          </a>
          <Button type="primary" icon="search">
            Search
          </Button>
        </nav>
      </header>
      {pageTitle ? (
        <div className="header-banner">
          <h1>{pageTitle}</h1>
        </div>
      ) : null}
    </React.Fragment>
  )
}
