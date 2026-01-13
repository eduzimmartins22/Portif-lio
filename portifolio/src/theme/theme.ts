import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#161616",
      paper: "#1C1C1C",
    },
    primary: {
      main: "#FF8C00",
    },
    secondary: {
      main: "#E10600",
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#BDBDBD",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    button: { fontWeight: 600 },
  },
})

export default theme
