import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Component for test
export const BugButton = () => {
  const [error, setError] = useState(false)
  const { t } = useTranslation()

  const throwError = () => {
    setError(e => !e)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <Button onClick={throwError}>
      {t('throw error')}
    </Button>
  )
}

export default BugButton
