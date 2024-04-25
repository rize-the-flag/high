import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type NavigateFunction } from 'react-router-dom'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'

export interface StateSchema extends AsyncState, PersistentState {
}

export interface PersistentState {
  counter: CounterSchema
  user: UserSchema
}

export interface AsyncState {
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComment?: ArticleDetailsCommentSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
