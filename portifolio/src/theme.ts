import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
    },
    secondary: {
      main: "#FF8C00",
    },
  },
  typography: {
    fontFamily: "sans-serif"
  }
});

theme = responsiveFontSizes(theme);

export default theme;