import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Articles from "../components/index/Articles"
import makeStyles from "@material-ui/core/styles/makeStyles"

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const IndexPage = () => {
  const classes = useStyles()
  const intl = useIntl()
  const t = (s) => intl.formatMessage({id:s})
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={t("title")}
        description={t("description")}
        keywords={[`poker`, `online game`, 'play poker']}
      />
      <div className={classes.root}>
        <Articles/>
      </div>
    </Layout>
  )
}

export default IndexPage
