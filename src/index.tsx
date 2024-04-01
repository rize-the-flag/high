import App from './app/App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/index.scss'
import 'shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/StoreProvider'

const container = document.getElementById('root')

if (container !== null) {
  const root = createRoot(container)
  root?.render(
    <StoreProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider>
            <App/>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreProvider>
  )
} else {
  console.error('root was not found')
}
