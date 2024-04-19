import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLoader from 'widgets/PageLoader/PageLoader'
import { type AppRouteProps, routeConfig } from 'shared/config/route-config/route-config'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

export const AppRouter = () => {
  const renderWithWrapper = (route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<PageLoader/>}>
        <div className={'content-wrapper'}>{route.element}</div>
      </Suspense>
    )

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly
          ? <RequireAuth>{element}</RequireAuth>
          : element
        }
      />
    )
  }

  const routes = Object.values(routeConfig).map(renderWithWrapper)

  return (
    <Routes>
      {...routes}
    </Routes>
  )
}

export default AppRouter
