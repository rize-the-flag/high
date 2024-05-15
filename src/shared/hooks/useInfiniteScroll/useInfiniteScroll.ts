import { type MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollOptions {
  callback: () => void
  triggerRef: MutableRefObject<HTMLElement | null>
  wrapperRef: MutableRefObject<HTMLElement | null>
}

export const useInfiniteScroll = (args: UseInfiniteScrollOptions) => {
  useEffect(() => {
    const { callback, wrapperRef, triggerRef } = args
    const options: IntersectionObserverInit = {
      root: wrapperRef.current,
      threshold: 1.0,
      rootMargin: '0px'
    }

    const listener: IntersectionObserverCallback = (entries, observer) => {
      console.dir(entries)
      console.dir(observer)
      callback()
    }

    const observer = new IntersectionObserver(listener, options)

    triggerRef.current && observer.observe(triggerRef.current)

    return () => {
      wrapperRef.current && observer.unobserve(wrapperRef.current)
    }
  })
}
