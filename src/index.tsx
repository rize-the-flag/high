import App from './app/App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/StoreProvider'
import { LOCAL_STORAGE_THEME_KEY, type ThemeType } from 'app/providers/ThemeProvider/lib/ThemeContext'

const container = document.getElementById('root')

const theme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? Theme.LIGHT) as ThemeType

document.body.className = theme

if (container !== null) {
  const root = createRoot(container)
  root?.render(
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider initialTheme={theme}>
            <App/>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  )
} else {
  console.error('root was not found')
}
