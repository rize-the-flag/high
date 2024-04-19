import { type FC, type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { getAuthData } from 'entities/User'
import { useLocation, Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/route-config/route-config'

interface RequireAuthProps {
  children?: ReactNode
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const auth = useSelector(getAuthData)
  const location = useLocation()

  if (!auth) {
    return (
      <Navigate to={RoutePath.main} state={{ from: location }} replace/>
    )
  }

  return children
}
