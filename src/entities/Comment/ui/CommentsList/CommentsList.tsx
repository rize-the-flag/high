import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentsList.module.scss'
import { type FC } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentItem } from '../CommentItem/CommentItem'
import { type Comment } from '../../model/types/comment'

interface CommentsListProps {
  className?: string
  comments: Comment[]
  isLoading?: boolean
  error?: string
}

const _CommentsList: FC<CommentsListProps> = (props) => {
  const {
    className,
    isLoading,
    comments
  } = props

  const { t } = useTranslation()

  return (
    <div className={classNames(cls.CommentsList, {}, [className])}>
      {
        comments.length
          ? comments.map(comment => (
            <CommentItem
              isLoading={isLoading}
              comment={comment}
              key={comment.id}
              className={cls.comment}
            />
          ))
          : <Text message={t('NoComments')}/>
      }
    </div>
  )
}

export const CommentsList = memo(_CommentsList)
