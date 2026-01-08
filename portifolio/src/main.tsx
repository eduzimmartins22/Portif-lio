import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF8C00', 
    },
    background: {
      default: '#111111',
    },
  },
  typography: {
    fontFamily: "Helvetica Neue"
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
