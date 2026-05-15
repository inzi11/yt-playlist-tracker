import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./styles/font.css"
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './context/ThemeProvider/Theme.tsx';
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
