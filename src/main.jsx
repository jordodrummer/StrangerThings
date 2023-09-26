import { StrictMode, React } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes.jsx'

const router = createBrowserRouter(routes)
const theme = createTheme({
  palette: {
    primary: {
      main: "#013e87",
    },
    secondary: {
      main: "#2e74c9",
    }
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    }
  },
  components: {
    Box: {
      styleOverrides: {
        // your object in the home component goes here
        pt: 4, 
        display: 'flex', 
        flexDirection: { xs: "column", md: "row"},
        flexWrap: {md: "wrap", xs: "nowrap"},
        justifyContent: "space-between", 
        gap: 4
      }
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)

