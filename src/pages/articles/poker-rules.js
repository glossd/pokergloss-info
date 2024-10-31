import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Divider, Typography } from "@material-ui/core"
import Article from "../../components/articles/Article"
import ArticleImg from "../../components/articles/ArticleImg"
import ArticleSubtitle from "../../components/articles/ArticleSubtitle"

const PokerRules = ({ intl }) => {
  const t = (s) => intl.formatMessage({ id: s })
  return (
    <Article name={"pokerRules"}>
      <Typography>{t("pokerRules.description")}</Typography>
      <Typography>{t("pokerRules.paragraph0")}</Typography>

      <ArticleSubtitle text={t("pokerRules.paragraph1")}/>
      <Typography>{t("pokerRules.paragraph2")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-1.png"}/>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-2.png"}/>

      <ArticleSubtitle text={t("pokerRules.paragraph3")}/>
      <Typography>{t("pokerRules.paragraph4")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-3.png"}/>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-4.png"}/>
      <Typography>{t("pokerRules.paragraph5")}</Typography>

      <ArticleSubtitle text={t("pokerRules.paragraph6")}/>
      <Typography>{t("pokerRules.paragraph7")}</Typography>

      <ArticleSubtitle text={t("pokerRules.paragraph8")}/>
      <Typography>{t("pokerRules.paragraph9")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-5.png"}/>
      <Typography>{t("pokerRules.paragraph10")}</Typography>

      <Typography variant="h6" component={"h2"}>{t("pokerRules.paragraph11")}</Typography>
      <Typography component={"span"}>
        <ul>
          <li><Typography>{t("pokerRules.example0")}</Typography></li>
          <li><Typography>{t("pokerRules.example1")}</Typography></li>
          <li><Typography>{t("pokerRules.example2")}</Typography></li>
          <li><Typography>{t("pokerRules.example3")}</Typography></li>
          <li><Typography>{t("pokerRules.example4")}</Typography></li>
          <li><Typography>{t("pokerRules.example5")}</Typography></li>
        </ul>
      </Typography>
      <Typography>{t("pokerRules.paragraph12")}</Typography>

      <ArticleSubtitle text={t("pokerRules.paragraph13")}/>
      <Typography>{t("pokerRules.paragraph14")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-6.png"}/>
      <Typography>
        {t("pokerRules.paragraph15")}
        <a href={"https://info.pokergloss.com/ru/articles/hands"} target="_blank" rel="noopener noreferrer">{t("link")}</a>
      </Typography>
      <Typography>{t("pokerRules.paragraph16")}</Typography>

      <ArticleSubtitle text={t("pokerRules.paragraph17")}/>
      <Typography>{t("pokerRules.paragraph18")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-7.png"}/>
      <Typography>{t("pokerRules.paragraph19")}</Typography>

      <ArticleSubtitle text={t("pokerRules.paragraph20")}/>
      <Typography>{t("pokerRules.paragraph21")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-8.png"}/>
      <Typography>{t("pokerRules.paragraph22")}</Typography>

      <ArticleSubtitle text={t("pokerRules.paragraph23")}/>
      <Typography>{t("pokerRules.paragraph24")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-9.png"}/>
      <Typography>{t("pokerRules.paragraph25")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/PokerRules/rules-10.png"}/>

      <ArticleSubtitle text={t("pokerRules.paragraph26")}/>
      <Typography>
        {t("pokerRules.paragraph27")}
        <a href={"http://info.uat.pokerblow.com/ru/articles/vip"} target="_blank" rel="noopener noreferrer">{t("link")}</a>
      </Typography>
      <Typography>{t("pokerRules.paragraph28")}</Typography>
      <Divider/>

      <Typography>
        {t("pokerRules.paragraph29")}
        <a href={"http://info.uat.pokerblow.com/ru/articles/sitngo"} target="_blank" rel="noopener noreferrer">{t("link")}</a>
      </Typography>
    </Article>
  )
}

export default injectIntl(PokerRules)