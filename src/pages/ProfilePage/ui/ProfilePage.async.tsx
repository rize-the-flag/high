import { lazy } from 'react'
import { asyncDelay } from 'shared/lib/asyncDelay/asyncDelay'

export const MainPageAsync = lazy(async () => {
  await asyncDelay(2000)
  return await import('./ProfilePage')
})
