import { type FC, memo, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from 'entities/Article'
import ListIcon from 'shared/assets/icons/list-24-24.svg'
import TiledIcon from 'shared/assets/icons/tiled-24-24.svg'
import { Icon } from 'shared/ui/Icon/Icon'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ArticleViewSelectorProps {
  className?: string
  view: ArticleView
  onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: ListIcon
  },
  {
    view: ArticleView.BIG,
    icon: TiledIcon
  }
]

const _ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const {
    className,
    onViewClick,
    view
  } = props

  const onViewChangeClick = useCallback((newView: ArticleView) => {
    return () => {
      onViewClick && onViewClick(newView)
    }
  }, [onViewClick])

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(viewType => (
        <Button
          key={viewType.view}
          theme={ThemeButton.CLEAR}
          onClick={onViewChangeClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', { [cls.selected]: viewType.view === view })}
          />
        </Button>
      ))}
    </div>
  )
}

export const ArticleViewSelector = memo(_ArticleViewSelector)
