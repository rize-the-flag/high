import React, { type JSX } from 'react'

interface LazyImport {
  readonly default: () => JSX.Element
}
export const MainPageAsync = React.lazy(async () => await new Promise<LazyImport>((resolve) => {
  setTimeout(() => { resolve(import('./MainPage')) }, 2000)
}))
