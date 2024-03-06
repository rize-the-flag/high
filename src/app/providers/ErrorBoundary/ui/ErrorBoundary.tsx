import { types } from 'sass'
import Error = types.Error
import { type ErrorInfo } from 'react-dom/client'
import React, { Suspense } from 'react'
import { withTranslation } from 'react-i18next'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: React.ReactNode
}

type ErrorBoundaryState<TError = unknown> = {
  hasError: true
  error: TError
} | {
  hasError: false
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    if (hasError) {
      return (
        <Suspense fallback="">
          <PageError/>
        </Suspense>
      )
    }

    return this.props.children
  }
}

export default withTranslation()(ErrorBoundary)
