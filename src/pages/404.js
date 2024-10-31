import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ intl }) => {
  const t = (s) => intl.formatMessage({id:s})

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={`404: ${t( "title")}`}
      />
      <h1>
        {t("notfound.header")}
      </h1>
    </Layout>
  )
}

export default injectIntl(NotFoundPage)
