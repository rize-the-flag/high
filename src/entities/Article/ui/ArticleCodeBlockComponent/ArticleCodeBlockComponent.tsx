import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleCodeBlockComponent.module.scss'
import { type FC } from 'react'
import { type ArticleCodeBlock } from '../../model/types/article'
import { Code } from 'shared/ui/Code/Code'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

const _ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props) => {
  const {
    className,
    block
  } = props

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  )
}

export const ArticleCodeBlockComponent = memo(_ArticleCodeBlockComponent)
