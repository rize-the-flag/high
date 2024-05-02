import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import { type Article, ArticleBlockType, type ArticleTextBlock, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text/Text'
import { Icon } from 'shared/ui/Icon/Icon'
import EyeIcon from 'shared/assets/icons/views-20-20.svg'
import { Card } from 'shared/ui/Card/Card'
import Avatar from 'shared/ui/Avatar/Avatar'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/route-config/route-config'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

const _ArticleListItem: FC<ArticleListItemProps> = (props) => {
  const {
    className,
    article,
    view
  } = props

  const { t } = useTranslation()
  const navigate = useNavigate()

  const onOpenArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}/${article.id}`)
  }, [article.id, navigate])

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block): block is ArticleTextBlock => block.type === ArticleBlockType.TEXT
    )

    return (
      <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={article.user.avatar}/>
            <Text message={article.user.userName} className={cls.username}/>
            <Text message={article.createdAt} className={cls.date}/>
          </div>
          <Text title={article.title} className={cls.title}/>
          <Text message={article.type.join(', ')} className={cls.type}/>
          <img src={article.img} alt={article.title} className={cls.img}/>
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>}
          <div className={cls.footer}>
            <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
              {t('More..')}
            </Button>
            <Text message={String(article.views)} className={cls.views}/>
            <Icon Svg={EyeIcon}/>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
      <Card onClick={onOpenArticle} className={cls.card}>
        <div className={cls.imageWrapper}>
          <img src={article.img} className={cls.img} alt={article.title}/>
          <Text message={article.createdAt} className={cls.date}/>
        </div>
        <div className={cls.infoWrapper}>
          <Text message={article.type.join(', ')} className={cls.type}/>
          <Text message={String(article.views)} className={cls.views}/>
          <Icon Svg={EyeIcon}/>
        </div>
        <Text message={article.title} className={cls.title}/>
      </Card>
    </div>
  )
}

export const ArticleListItem = memo(_ArticleListItem)
