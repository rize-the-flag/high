import React, { Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/route-config/route-config'
import PageLoader from 'widgets/PageLoader/PageLoader'
import { useSelector } from 'react-redux'
import { getAuthData } from 'entities/User'

export const AppRouter = () => {
  const auth = useSelector(getAuthData)

  const filteredRoutes = useMemo(() => (
    Object.values(routeConfig).filter(route => !(route.authOnly && !auth))
  ), [auth])

  const routes = filteredRoutes.map(({ element, path }) => (
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
