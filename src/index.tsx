import App from './app/App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'

const container = document.getElementById('root')
if (container !== null) {
  const root = createRoot(container)
  root?.render(
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider initialTheme={Theme.LIGHT}>
          <App/>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
} else {
  console.error('root was not found')
}
