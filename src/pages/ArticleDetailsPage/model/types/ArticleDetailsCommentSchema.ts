import { type Comment } from 'entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsCommentSchema extends EntityState<Comment, Comment['id']> {
  isLoading: boolean
  error?: string
}
