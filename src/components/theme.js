import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      textPrimary: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: "white"
      },
      textSecondary: {
        backgroundColor: "rgb(57 130 23)",
        color: "white",
        fontWeight: "bold",
        '&:hover': {
          backgroundColor: "rgb(42 95 17)",
        }
      }
    },
    MuiDivider: {
      root: {
        margin: "15px 0"
      }
    },
    MuiInputBase: {
      input: {
        height: "1.18em",
      }
    }
  }
})

export default theme