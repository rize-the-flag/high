import { memo, type FC, type SVGFactory, type SVGAttributes } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps extends SVGAttributes<SVGElement> {
  className?: string
  Svg: SVGFactory
}

const _Icon: FC<IconProps> = (props) => {
  const {
    className,
    Svg,
    ...rest
  } = props

  return (
    <Svg className={classNames(cls.Icon, {}, [className])} {...rest}/>
  )
}

export const Icon = memo(_Icon)
