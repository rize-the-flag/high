import { type CSSProperties, memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Skeleton.module.scss'

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string | number
}

const _Skeleton: FC<SkeletonProps> = (props) => {
  const {
    className,
    border,
    height,
    width
  } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  }

  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])}>

    </div>
  )
}

export const Skeleton = memo(_Skeleton)
