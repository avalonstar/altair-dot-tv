/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          display: `grid`,
          gridTemplateRows: `1fr auto`,
          background: `#111`,
          height: `100vh`,
        }}
      >
        <main>{children}</main>
        <footer style={{ color: `#333`, padding: `1rem`, textAlign: `center`, fontSize: `12px`, fontWeight: `bold` }}>
          © {new Date().getFullYear()},{" "}
          <a href="https://avalonstar.com">Avalonstar Inc.</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
