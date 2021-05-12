/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { document } from "browser-monads"

import Header from "./header"
import "../styles/global.css"

const Layout = ({ children }) => {
  const [change1, setChange1] = useState(false)

  const toggleNav = () => {
    setChange1(!change1)
    if (!change1) {
      document.body.style.height = "100%"
      document.body.style.overflow = "hidden"
    } else {
      document.body.style = ""
    }
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          keywords
        }
      }
    }
  `)

  return (
    <>
      <Header
        toggleNav={toggleNav}
        change1={change1}
        siteTitle={data.site.siteMetadata.title}
      />
      <div>
        <main className={change1 && "blur"} id="content">
          {children}
        </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
