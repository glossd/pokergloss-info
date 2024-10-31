import {Button} from "@material-ui/core";
import {injectIntl, navigate} from "gatsby-plugin-intl/index";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";

const Back = ({ intl }) => {
  const t = (s) => intl.formatMessage({id: s})
  return (
    <Button variant="outlined" color="secondary" onClick={() => navigate('/')}>
      <ArrowBackIcon/>{t("BackToArticles")}
    </Button>
  )
}

export default injectIntl(Back)