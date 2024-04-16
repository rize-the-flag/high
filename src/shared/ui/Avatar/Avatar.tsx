import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type CSSProperties, type FC, useMemo } from 'react'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    className,
    src,
    size,
    alt
  } = props

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size
  }), [size])

  return (
    <img
      style={styles}
      alt={alt}
      src={src}
      className={classNames(cls.Avatar, {}, [className])}
    />
  )
}

export default Avatar
