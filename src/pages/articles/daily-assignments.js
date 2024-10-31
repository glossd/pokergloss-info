import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Typography } from "@material-ui/core"
import Article from "../../components/articles/Article"
import ArticleImg from "../../components/articles/ArticleImg"

const DailyAssignments = ({ intl }) => {
  const t = (s) => intl.formatMessage({ id: s })
  return (
    <Article name={"dailyAssignments"}>
      <Typography component={"h4"}>{t("dailyAssignments.description")}</Typography>
      <Typography>{t("dailyAssignments.paragraph0")}</Typography>

      <Typography>
        {t("dailyAssignments.paragraph1")}
        <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/DailyAssignments/daily-note.png"}/>
      </Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/DailyAssignments/daily-1.png"}/>
      <Typography>{t("dailyAssignments.paragraph2")}</Typography>
      <Typography>{t("dailyAssignments.paragraph3")}</Typography>

      <Typography>
        {t("dailyAssignments.paragraph4")}
        <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/DailyAssignments/daily-note.png"}/>
      </Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/DailyAssignments/daily-2.png"}/>
      <Typography>{t("dailyAssignments.paragraph5")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/DailyAssignments/daily-3.png"}/>
      <Typography>{t("dailyAssignments.paragraph6")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/DailyAssignments/daily-4.png"}/>
      <Typography>{t("dailyAssignments.paragraph7")}</Typography>

      <Typography component={"span"}>
        <ul>
          <li><Typography>{t("dailyAssignments.example0")}</Typography></li>
          <li><Typography>{t("dailyAssignments.example1")}</Typography></li>
          <li><Typography>{t("dailyAssignments.example2")}</Typography></li>
          <li><Typography>{t("dailyAssignments.example3")}</Typography></li>
          <li><Typography>{t("dailyAssignments.example4")}</Typography></li>
          <li><Typography>{t("dailyAssignments.example5")}</Typography></li>
        </ul>
      </Typography>

      <Typography>{t("dailyAssignments.paragraph8")}</Typography>
    </Article>
  )
}

export default injectIntl(DailyAssignments)