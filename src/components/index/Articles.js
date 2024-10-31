import React from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core"
import { navigate, useIntl } from "gatsby-plugin-intl"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1300,
    margin: '3%'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 15,
  },
  card: {
    maxWidth: 345,
  },
  disabledCard: {
    maxWidth: 345,
    filter: 'brightness(0.3)',
  },
  actionArea: {
    height: '100%',
    flexDirection: 'column'
  },
  media: {
    height: 180,
  },
}))

const Articles = () => {
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-device-width: 1224px)")
  const isPortrait = useMediaQuery("(orientation: portrait)")
  const xs = isPortrait ? 12 : (isMobile ? 6 : 4)

  const intl = useIntl()
  const t = (s) => intl.formatMessage({id:s})

  const categories = [
    {
      name: "pokerRules.title",
      picture: "https://storage.googleapis.com/pokerblow-info/PokerRules/rules-icon.png",
      description: "pokerRules.description",
      link: "/articles/poker-rules",
    },
    {
      name: "hands.title",
      picture: "https://cdn.pixabay.com/photo/2013/07/13/12/18/cards-159600__340.png",
      description: "hands.description",
      link: "/articles/hands",
    },
    {
      name: "pokerPlayers.title",
      picture: "https://storage.googleapis.com/pokerblow-info/PokerPlayers/players-icon.png",
      description: "pokerPlayers.description",
      link: "/articles/poker-players",
    },
    {
      name: "sitngo.title",
      picture: "https://cdn.pixabay.com/photo/2015/12/25/15/04/casino-1107736__340.jpg",
      description: "sitngo.description",
      link: "/articles/sitngo",
    },
    {
      name: "vip.title",
      picture: "https://cdn.pixabay.com/photo/2017/08/14/04/48/ceiling-2639360_1280.jpg",
      description: "vip.description",
      link: "/articles/vip",
    },
    {
      name: "dailyAssignments.title",
      picture: "https://storage.googleapis.com/pokerblow-info/DailyAssignments/daily-assign-icon.png",
      description: "dailyAssignments.description",
      link: "/articles/daily-assignments",
    },
    {
      name: "dailyBonus.title",
      picture: "https://storage.googleapis.com/pokerblow-info/DailyBonus/daily-bonus-icon.png",
      description: "dailyBonus.description",
      link: "/articles/daily-bonus",
    },
    {
      name: "marketInventory.title",
      picture: "https://storage.googleapis.com/pokerblow-info/Market%26Inveterate/market-icon.png",
      description: "marketInventory.description",
      link: "/articles/market-inventory",
    },
    {
      name: "survival.title",
      picture: "https://storage.googleapis.com/pokerblow-info/survival/survival-icon.png",
      description: "survival.description",
      link: "/articles/survival",
    },
  ]

  function handleOpenCategoryPage(link) {
    if (link !== "") {
      navigate(link)
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {
          categories.map(category => (
            <Grid item xs={xs} className={classes.grid} key={category.name}>
              <Card className={category.link ? classes.card : classes.disabledCard}>

                <CardActionArea className={classes.actionArea} onClick={() => handleOpenCategoryPage(category.link)}>
                  <CardMedia
                    className={classes.media}
                    image={category.picture}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {t(category.name)}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {t(category.description)}
                    </Typography>
                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

export default Articles