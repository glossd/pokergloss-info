import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {Divider, makeStyles, Typography} from "@material-ui/core"
import Back from "./Back";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30
  },
  articleTitle: {
    maxWidth: 1300
  },
  articleBody: {
    maxWidth: 900
  },
  combinationIconContainer: {
    display: 'flex',
    alignItems: 'center',
  }
}))

const Article = ({ intl, name, children }) => {
  const classes = useStyles()
  const t = (s) => intl.formatMessage({id: s})
  return (
    <Layout>
      <SEO lang={intl.locale} title={t(name+".title")} description={name+".description"}/>
      <div className={classes.root}>
        <div className={classes.articleTitle}>
          <Typography gutterBottom={true} variant="h3" component="h1">
            {t(name+".title")}
          </Typography>
        </div>
        <div className={classes.articleBody}>
          {children}
        </div>
        <Divider/>
        <Back/>
      </div>
    </Layout>
  )
}

Article.propTypes = {
  name: PropTypes.string.isRequired,
}

export default injectIntl(Article)