import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginSchema } from 'features/AuthByUsername'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type ArticleDetailsSchema } from 'entities/Article'
import { type ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage'
import { type AddCommentFormSchema } from 'features/AddNewComment/model/types/addCommentForm'
import { type ArticlesPageSchema } from 'pages/ArticlesPage'

export interface StateSchema extends AsyncState, PersistentState, Record<string, any> {}

export interface PersistentState {
  counter: CounterSchema
  user: UserSchema
}

export interface AsyncState {
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type StateSchemaKeys = keyof StateSchema

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  extra: ThunkExtraArg
  state: StateSchema
  rejectValue: T
}
