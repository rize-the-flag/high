import React from "react";

export const MainPageAsync = React.lazy(() => new Promise(res => {
  // @ts-ignore
  setTimeout(() => res(import('./MainPage')), 2000)
}));
