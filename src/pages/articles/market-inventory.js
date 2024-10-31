import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Typography } from "@material-ui/core"
import Article from "../../components/articles/Article"
import ArticleImg from "../../components/articles/ArticleImg"

const MarketInventory = ({ intl }) => {
  const t = (s) => intl.formatMessage({ id: s })
  return (
    <Article name={"marketInventory"}>
      <Typography component={"h4"}>{t("marketInventory.description")}</Typography>

      <Typography>
        {t("marketInventory.paragraph0")}
        <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/Market%26Inveterate/market-menu.png"}/>
      </Typography>
      <Typography>{t("marketInventory.paragraph1")}</Typography>

      <ArticleImg src={t("marketInventory.src1")} />
      <Typography>{t("marketInventory.paragraph2")}</Typography>

      <ArticleImg src={t("marketInventory.src2")} />
      <Typography>{t("marketInventory.paragraph3")}</Typography>

      <ArticleImg src={t("marketInventory.src3")} />
      <Typography>
        {t("marketInventory.paragraph4")}
        <a href={"https://info.pokergloss.com/ru/articles/vip"} target="_blank" rel="noopener noreferrer">{t("link")}</a>
      </Typography>
      <Typography>{t("marketInventory.paragraph5")}</Typography>

      <ArticleImg src={t("marketInventory.src4")} />
      <Typography>{t("marketInventory.paragraph6")}</Typography>

      <ArticleImg src={t("marketInventory.src5")} />
      <Typography>{t("marketInventory.paragraph7")}</Typography>
      <Typography>{t("marketInventory.paragraph8")}</Typography>

      <Typography>
        {t("marketInventory.paragraph9")}
        <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/Market%26Inveterate/market-menu.png"} />
      </Typography>
      <Typography>{t("marketInventory.paragraph10")}</Typography>

      <ArticleImg src={t("marketInventory.src6")} />
      <Typography>{t("marketInventory.paragraph11")}</Typography>
    </Article>
  )
}

export default injectIntl(MarketInventory)