import React from "react"
import { makeStyles, Typography } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  subtitle: {
    margin: "25px 0 10px 0",
    textTransform: "uppercase",
    fontWeight: "600"
  },
  sure: {
    background: "#6ccbff",
    marginRight: "10px"
}
}))

const ArticleSubtitle = ({ text }) => {
  const classes = useStyles()
  return (
      <Typography className={classes.subtitle} variant="h5" component={"h2"}><span className={classes.sure}>&nbsp;</span>{text}</Typography>
  )
}

export default ArticleSubtitle