import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLE = 'article',
  ARTICLE_DETAILS = 'article_details', // + id
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLE]: '/article',
  [AppRoutes.ARTICLE_DETAILS]: '/article', // + id
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage/>
  },
  [AppRoutes.ARTICLE]: {
    path: RoutePath.article,
    element: <ArticlesPage />,
    authOnly: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: RoutePath.article_details + '/:id',
    element: <ArticleDetailsPage />,
    authOnly: true
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}/:id`,
    element: <ProfilePage/>,
    authOnly: true
  }
}
