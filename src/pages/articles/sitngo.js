import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Divider, makeStyles, Typography, useMediaQuery } from "@material-ui/core"
import YouTube from "react-youtube"
import Article from "../../components/articles/Article"
import ArticleImg from "../../components/articles/ArticleImg"

const useStyles = makeStyles(() => ({
  videoContainer: {
    textAlign: 'center',
    width: '100%',
    height: 'auto',
  },
  video: {
    maxWidth: '100%'
  },
  portraitVideo: {
    maxWidth: '100%',
    height: 'auto',
  }
}))

const SitngoPage = ({ intl }) => {
  const classes = useStyles()
  const isPortrait = useMediaQuery("(orientation: portrait)")
  const t = (s) => intl.formatMessage({id:s})

  const parameters = [
    {
      name: "sitngo.Name",
      description: "sitngo.NameDescription"
    },
    {
      name: "sitngo.TableSize",
      description: "sitngo.TableSizeDescription"
    },
    {
      name: "sitngo.DecisionTime"
    },
    {
      name: "sitngo.BigBlind"
    },
    {
      name: "sitngo.BuyIn",
      description: "sitngo.BuyInDescription"
    },
    {
      name: "sitngo.BlindsUpTime",
      description: "sitngo.BlindsUpTimeDescription"
    },
    {
      name: "sitngo.PlacesPaid",
      description: "sitngo.PlacesPaidDescription"
    },
    {
      name: "sitngo.AutostartIn",
      description: "sitngo.AutostartInDescription"
    },
    {
      name: "sitngo.BettingLimit"
    },
  ]

  return (
    <Article name={"sitngo"}>
      <Typography>{t("sitngo.description")}</Typography>
      <Divider/>

      <Typography>{t("sitngo.paragraph1")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/sitngo/sitngo1.png"}/>
      <Typography>{t("sitngo.paragraph2")}</Typography>
      <Typography component={'span'}>
        <ul>
          {
            parameters.map(parameter => (
              <li><strong>{t(parameter.name)}</strong>{parameter.description && t(parameter.description)}</li>
            ))
          }
        </ul>
      </Typography>
      <Typography>{t("sitngo.paragraph3")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/sitngo/sitngo2.png"}/>
      <Typography>{t("sitngo.paragraph4")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/sitngo/sitngo3.png"}/>
      <Typography>{t("sitngo.paragraph5")}</Typography>
      <ArticleImg src={"https://storage.googleapis.com/pokerblow-info/sitngo/sitngo4.png"}/>
      <Divider/>

      <Typography>{t("sitngo.paragraph6")}</Typography>
      <div className={classes.videoContainer}>
        <YouTube className={isPortrait ? classes.portraitVideo : classes.video} videoId={"RmDrouSyCdg"}/>
      </div>
    </Article>
  )
}

export default injectIntl(SitngoPage)
