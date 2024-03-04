import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route-config/route-config'
import PageLoader from 'widgets/PageLoader/PageLoader'

export const AppRouter = () => {
  const routes = Object.values(routeConfig).map(({ element, path }) => (
    <Route
      key={path}
      path={path}
      element={
        <Suspense fallback={<PageLoader/>}>
          <div className={'content-wrapper'}>{element}</div>
        </Suspense>}
    />
  ))

  return (
      <Routes>
        {...routes}
      </Routes>
  )
}

export default AppRouter
