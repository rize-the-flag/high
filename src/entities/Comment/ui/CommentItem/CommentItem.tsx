import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentItem.module.scss'
import { type FC } from 'react'
import { type Comment } from '../../model/types/comment'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'

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
          <Skeleton className={cls.avatar} width={30} height={30} border={'50%'}/>
          <Skeleton className={cls.username} width={'10%'} height={15} border={'10px'}/>
        </div>
        <Skeleton className={cls.text} border={'10px'}/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.Comment, {}, [className])}>
      <div className={cls.commentHeader}>
        <Avatar
          className={cls.avatar}
          size={30} src={comment.user.avatar}
        />
        <Text title={comment.user.userName} className={cls.username}/>
      </div>
      <Text message={comment.text}/>
    </div>
  )
}

export const CommentItem = memo(_CommentItem)
