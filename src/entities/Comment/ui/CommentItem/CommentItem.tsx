import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentItem.module.scss'
import { type FC } from 'react'
import { type Comment } from '../../model/types/comment'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface CommentProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

const _CommentItem: FC<CommentProps> = (props) => {
  const {
    className,
    comment,
    isLoading
  } = props

  if (isLoading) {
    return (
      <div className={classNames(cls.Comment, {}, [className])}>
        <div className={cls.commentHeader}>
          <Skeleton className={cls.avatar} />
          <Skeleton className={cls.username} />
        </div>
        <Skeleton className={cls.text}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Comment, {}, [className])}>
      Comment Item
    </div>
  )
}

export const CommentItem = memo(_CommentItem)
