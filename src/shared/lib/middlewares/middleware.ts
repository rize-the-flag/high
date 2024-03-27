import { type Middleware } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

// eslint-disable-next-line @typescript-eslint/ban-types
export const middleware: Middleware<{}, StateSchema> = (store) => (next) => (action) => {
  console.log({ ...store.getState() })
  next(action)
}
