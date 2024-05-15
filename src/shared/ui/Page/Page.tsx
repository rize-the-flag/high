import { memo, type ReactNode, type FC, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
}

const _Page: FC<PageProps> = (props) => {
  const {
    className,
    children
  } = props

  const wrapperRef = useRef<HTMLElement | null>(null)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useInfiniteScroll({
    callback: () => {
      console.log('Callbacking')
    },
    wrapperRef,
    triggerRef
  })

  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef}></div>
    </section>
  )
}

export const Page = memo(_Page)
