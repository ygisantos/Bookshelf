import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import {createTheme, ThemeProvider} from '@mui/material'

const theme = createTheme({
  colorSchemes: {
    dark: true
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#ef5350',
      contrastText: '#ffebee',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fbf0f2',
    },
    text: {
      primary: '#d32f2f',
      secondary: '#f44336',
      disabled: '#b71c1c',
      hint: '#f44336',
    },
  },
});

createRoot(document.getElementById('root')).render(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
)
