import PropTypes from "prop-types"
import React from "react"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core"
import { navigate } from "gatsby-plugin-intl"

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "midnightblue",
    minHeight: "75px",
    alignItems: "center"
  },
  leftSide: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      filter: "invert(30%) sepia(37%) saturate(3164%) hue-rotate(170deg) brightness(104%) contrast(108%)"
    }
  },
  logo: {
    width: '50px',
    height: '50px',
    margin: 0,
  },
  playBtn: {
    float: `right`,
  },
  title: {
    color: "white",
    margin: 0,
    fontWeight: "bold",
  },
  wordBlow: {
    color: "#6ccbff",
  }
});

const Header = ({ title }) => {
  const classes = useStyles()

  // wordBlow? wtf guys? Now it's wordGloss
  const wordGloss = 'Gloss'
  const indexOfWordBlow = title.indexOf(wordGloss)

  const firstTitleSubstring = title.slice(0, indexOfWordBlow)
  const secondTitleSubstring = title.slice(indexOfWordBlow, indexOfWordBlow + wordGloss.length)
  const thirdTitleSubstring = title.slice(indexOfWordBlow + wordGloss.length, title.length)

  return (
  <header className={classes.header}>
    <div
      className={classes.leftSide}
      onClick={() => navigate('/')}
      role="presentation"
    >
      <img className={classes.logo} src="https://storage.googleapis.com/pokerblow-info/logo-white.png" alt="" />
      <Typography className={classes.title} variant="h4" component="h1">
        {firstTitleSubstring}
        <span className={classes.wordBlow}>{secondTitleSubstring}</span>
        {thirdTitleSubstring}
      </Typography>
    </div>

    <div className={classes.playBtn}>
      <Button color={"secondary"} onClick={() => window.location = "https://pokergloss.com/lobby"}>Play Poker</Button>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
