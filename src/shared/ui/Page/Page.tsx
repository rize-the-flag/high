import { memo, type ReactNode, type FC, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

const _Page: FC<PageProps> = (props) => {
  const {
    className,
    children,
    onScrollEnd
  } = props

  const wrapperRef = useRef<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useInfiniteScroll({
    callback: onScrollEnd,
    wrapperRef,
    triggerRef
  })

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  )
}

export const Page = memo(_Page)
