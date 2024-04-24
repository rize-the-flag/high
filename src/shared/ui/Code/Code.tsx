import { type FC, memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'

interface CodeProps {
  className?: string
  text: string
}

const _Code: FC<CodeProps> = (props) => {
  const {
    className,
    text
  } = props

  const onCopy = () => {
    void navigator.clipboard.writeText(text)
  }

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        theme={ThemeButton.CLEAR}
        className={cls.copyBtn}
        onClick={onCopy}
      >
        <Icon Svg={CopyIcon} style={{ stroke: 'var(--primary-color)' }}/>
      </Button>
      <code>
        {text}
      </code>
    </pre>
  )
}

export const Code = memo(_Code)
