import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import {Divider, Typography} from "@material-ui/core"
import Article from "../../components/articles/Article";
import ArticleImg from "../../components/articles/ArticleImg"
import ArticleSubtitle from "../../components/articles/ArticleSubtitle"

const Vip = ({ intl }) => {
  const t = (s) => intl.formatMessage({id: s})
  return (
    <Article name={"vip"}>
      <ArticleSubtitle text={t("vip.titleHow")}/>
      <Typography>{t("vip.paragraphHow1")}
        <a href={"https://pokergloss.com/coins"} target="_blank" rel="noopener noreferrer">{t("link")}</a>
      </Typography>
      <Typography>{t("vip.paragraphHow2")}
        <a href={"https://pokergloss.com/market"} target="_blank" rel="noopener noreferrer">{t("link")}</a>
      </Typography>
      <Divider/>

      <ArticleSubtitle text={t("vip.titleAdv")}/>
      <Typography>{t("vip.paragraph0")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/vip/showdown-privilege.gif"} />

      <Typography>{t("vip.paragraph1")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/vip/showdown-options.png"} />

      <Typography>{t("vip.paragraph2")}</Typography>
      <Typography>{t("vip.paragraph3")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/vip/vip.png"} />
      <Typography>{t("vip.paragraph4")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/vip/vip-2lvl.png"} />
      <Typography>{t("vip.paragraph5")}</Typography>
      <Typography>{t("vip.paragraph6")}</Typography>
    </Article>
  )
}

export default injectIntl(Vip)