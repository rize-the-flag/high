import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { ArticleView } from '../../model/types/article'
import { Card } from 'shared/ui/Card/Card'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

const _ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (props) => {
  const {
    className,
    view
  } = props

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Skeleton width={30} height={30} border={'50%'}/>
            <Skeleton width={150} height={16} className={cls.username}/>
            <Skeleton width={150} height={16} className={cls.date}/>
          </div>
          <Skeleton width={250} height={24} className={cls.title}/>
          <Skeleton height={250} className={cls.img}/>
          <Skeleton height={200} className={cls.textBlock}/>
          <div className={cls.footer}>
             <Skeleton width={200} height={36} className={cls.views}/>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <Skeleton className={cls.img} width={200} height={200} />
        </div>
        <div className={cls.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={cls.title}/>
      </Card>
    </div>
  )
}

export const ArticleListItemSkeleton = memo(_ArticleListItemSkeleton)
