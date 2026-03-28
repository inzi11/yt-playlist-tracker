import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./styles/font.css"
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './context/ThemeProvider/Theme.tsx';
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
