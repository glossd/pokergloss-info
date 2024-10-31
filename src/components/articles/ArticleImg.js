import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  picture: {
    margin: "15px 0 20px 0",
    borderRadius: "10px",
    boxShadow: "0.4em 0.4em 5px rgb(122 122 122 / 60%)"
  }
}))

const ArticleImg = ({ src }) => {
  const classes = useStyles()
  return (
        <img className={classes.picture} src={src} alt="" />
  )
}

export default ArticleImg