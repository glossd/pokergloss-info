import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Typography } from "@material-ui/core"
import Article from "../../components/articles/Article"
import Calculator from "../../components/calculator"
import ArticleImg from "../../components/articles/ArticleImg"


const DailyBonus = ({ intl }) => {
  const t = (s) => intl.formatMessage({ id: s })
  return (
    <Article name={"dailyBonus"}>
      <Typography component={"h4"}>{t("dailyBonus.description")}</Typography>
      <Typography>{t("dailyBonus.paragraph0")}</Typography>

      <ArticleImg src={t("dailyBonus.src1")}/>
      <Typography>{t("dailyBonus.paragraph1")}</Typography>
      <Typography>{t("dailyBonus.paragraph2")}</Typography>
      <Typography>{t("dailyBonus.paragraph3")}</Typography>

      <Calculator/>

      <Typography>{t("dailyBonus.paragraph4")}</Typography>
      <Typography>{t("dailyBonus.paragraph5")}</Typography>
    </Article>
  )
}

export default injectIntl(DailyBonus)