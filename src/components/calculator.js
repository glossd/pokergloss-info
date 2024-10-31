import React, { useState } from "react"
import makeStyles from "@material-ui/core/styles/makeStyles"
import { Divider, Input } from "@material-ui/core"
import { injectIntl } from "gatsby-plugin-intl"


const useStyles = makeStyles(() => ({
  root: {
    userSelect: "none",
    margin: "10px auto",
    textAlign: "center",
    fontSize: "30px",
    fontFamily: "sans-serif",
    backgroundColor: "azure",
    width: "350px",
    maxWidth: "80%",
    height: "180px",
    border: "2px solid darkgray",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0.4em 0.4em 5px rgb(122 122 122 / 60%)"
  },
  input: {
    width: "70%",
    fontSize: "25px"
  },
  chip: {
    width: "30px",
    verticalAlign: "text-top",
    marginBottom: "0",
  },
}))

const Calculator = ({ intl }) => {
  const t = (s) => intl.formatMessage({ id: s })
  const classes = useStyles()
  const [number, setNumber] = useState("")

  function validateNumber(number) {
    return /^$|^[1-9][0-9]{0,2}$/.test(number)
  }

  function numberHandler(inputNumber) {
    if (validateNumber(inputNumber)) {
      setNumber(inputNumber)
    }
  }

  function count() {
    if (number === "") {
      return ""
    } else
      return Math.floor(500 * Math.sqrt((2 * (number - 1))) + 500)
  }

  return (
    <div className={classes.root}>

      <div>
        <Input
          className={classes.input}
          placeholder={t("dailyBonus.calculatorText0")}
          value={number}
          onChange={e => numberHandler(e.target.value)}
        />
      </div>

      <Divider />

      <div>
        <span>{t("dailyBonus.calculatorText1")}</span>
        {
          number &&
          <span>
            {count()}
            <img className={classes.chip} src="https://storage.googleapis.com/pokerblow/red-chip-2.svg" alt="" />
            </span>
        }
      </div>
    </div>
  )
}

export default injectIntl(Calculator)