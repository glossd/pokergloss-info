import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Divider, Typography } from "@material-ui/core"
import Article from "../../components/articles/Article"
import ArticleImg from "../../components/articles/ArticleImg"

const Survival = ({ intl }) => {
    const t = (s) => intl.formatMessage({ id: s })
    return (
    <Article name={"survival"}>
      <Typography component={"h4"}>{t("survival.description")}</Typography>
      <Typography>{t("survival.paragraph0")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-1.png"} />
      <Typography>{t("survival.paragraph1")}</Typography>
      <Typography>{t("survival.paragraph2")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-2.png"} />
      <Typography>{t("survival.paragraph3")}</Typography>
      <Typography>{t("survival.paragraph4")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-3.png"} />
      <Typography>{t("survival.paragraph5")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-4.png"} />
      <Typography>{t("survival.paragraph6")}</Typography>
      <Typography>{t("survival.paragraph7")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-5.png"} />
      <Typography>{t("survival.paragraph8")}</Typography>
      <Typography>{t("survival.paragraph9")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-6.png"} />
      <Typography>{t("survival.paragraph10")}</Typography>
      <Typography>{t("survival.paragraph11")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-7.png"} />
      <Typography>{t("survival.paragraph12")}</Typography>

      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/survival/survaival-8.png"} />
      <Typography>{t("survival.paragraph13")}</Typography>
      <Divider />
    </Article>
  )
}

export default injectIntl(Survival)