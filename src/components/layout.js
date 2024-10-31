/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { injectIntl } from "gatsby-plugin-intl"

import Header from "./header"
import "./layout.css"
import { Typography } from "@material-ui/core"

const Layout = ({ children, intl }) => {
  return (
    <div className={"page-container"}>
      <Header title={intl.formatMessage({ id: "title" })} />
      <main className={"content-wrap"}>{children}</main>
      <footer className={"main-footer"}>
        <Typography paragraph={true} variant="body1">
          © PokerGloss {new Date().getFullYear()}
        </Typography>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
