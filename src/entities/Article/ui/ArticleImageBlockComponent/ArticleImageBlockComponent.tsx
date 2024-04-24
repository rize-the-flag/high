import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from 'entities/Article/model/types/article'
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

const _ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props) => {
  const {
    className,
    block
  } = props

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} alt={block.title ?? ''} />
      {block.title && (<Text message={block.title} size={TextSize.M} align={TextAlign.CENTER}/>)}
    </div>
  )
}

export const ArticleImageBlockComponent = memo(_ArticleImageBlockComponent)
