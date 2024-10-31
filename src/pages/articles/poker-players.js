import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Divider, Typography, useMediaQuery } from "@material-ui/core"
import Article from "../../components/articles/Article"
import makeStyles from "@material-ui/core/styles/makeStyles"
import ArticleSubtitle from "../../components/articles/ArticleSubtitle"

const desktopStyles = makeStyles(() => ({
  blockPlayers: {
    display: "flex",
    flexDirection: "row",
  },
  photosPlayers: {
    height: "35vh",
    width: "26vh",
    margin: "5px 20px",
    boxShadow: "0.4em 0.4em 5px rgba(122,122,122,0.5)",
  },
  subtitle: {
    margin: "10px auto",
    fontWeight: "600",
  },
}))

const portraitStyles = makeStyles(() => ({
  blockPlayers: {
    display: "flex",
    flexDirection: "column",
  },
  photosPlayers: {
    height: "42vh",
    width: "32vh",
    margin: "12px auto",
    boxShadow: "0.4em 0.4em 5px rgba(122,122,122,0.5)",
  },
}))

const excerpts = [
  {
    subtitle: "pokerPlayers.paragraph3",
    photo: "https://storage.googleapis.com/pokerblow-info/PokerPlayers/players-1.png",
    description: "pokerPlayers.paragraph4",
  },
  {
    subtitle: "pokerPlayers.paragraph5",
    photo: "https://storage.googleapis.com/pokerblow-info/PokerPlayers/players-2.png",
    description: "pokerPlayers.paragraph6",
  },
  {
    subtitle: "pokerPlayers.paragraph7",
    photo: "https://storage.googleapis.com/pokerblow-info/PokerPlayers/players-3.png",
    description: "pokerPlayers.paragraph8",
  },
  {
    subtitle: "pokerPlayers.paragraph9",
    photo: "https://storage.googleapis.com/pokerblow-info/PokerPlayers/players-4.png",
    description: "pokerPlayers.paragraph10",
  },
]


const PokerPlayers = ({ intl }) => {
  const t = (s) => intl.formatMessage({ id: s })

  const isPortrait = useMediaQuery("(orientation: portrait)")
  const classes = isPortrait ? portraitStyles() : desktopStyles()

  return (
    <Article name={"pokerPlayers"}>
      <Typography>{t("pokerPlayers.description")}</Typography>
      <Typography>{t("pokerPlayers.paragraph0")}</Typography>
      <Typography>{t("pokerPlayers.paragraph1")}</Typography>
      <Typography>{t("pokerPlayers.paragraph2")}</Typography>

      {
        excerpts.map(excerpt => (
          <div key={excerpt.subtitle}>
            <ArticleSubtitle text={t(excerpt.subtitle)}/>
            <div className={classes.blockPlayers}>
              <img className={classes.photosPlayers} src={(excerpt.photo)} alt="" />
              <Typography>{t(excerpt.description)}</Typography>
            </div>
            <Divider />
          </div>
        ))
      }

      <Typography>{t("pokerPlayers.paragraph11")}</Typography>
      <Typography>{t("pokerPlayers.paragraph12")}</Typography>
    </Article>
  )
}

export default injectIntl(PokerPlayers)