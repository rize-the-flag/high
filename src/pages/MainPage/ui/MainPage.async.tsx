import React, {JSX} from "react";

type LazyImport = {
  readonly default: () => JSX.Element
}
export const MainPageAsync = React.lazy(() => new Promise<LazyImport>(res => {
  setTimeout(() => res(import('./MainPage')), 2000)
}));
