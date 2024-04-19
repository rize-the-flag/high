import { lazy } from 'react'
import { asyncDelay } from 'shared/lib/asyncDelay/asyncDelay'

export const ArticlesPageAsync = lazy(async () => {
  __IS_DEV__ && await asyncDelay(800)
  return await import('./ArticlesPage')
})
