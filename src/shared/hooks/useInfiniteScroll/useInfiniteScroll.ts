import { type MutableRefObject, useEffect, useRef } from 'react'

export interface UseInfiniteScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement | null>
  wrapperRef: MutableRefObject<HTMLElement | null>
}

export const useInfiniteScroll = (args: UseInfiniteScrollOptions) => {
  useEffect(() => {
    const { callback, wrapperRef, triggerRef } = args
    if (!callback) return

    const options: IntersectionObserverInit = {
      root: wrapperRef.current,
      threshold: 1.0,
      rootMargin: '0px'
    }

    const onIntersection: IntersectionObserverCallback = (entries, observer) => {
      entries.pop()?.isIntersecting && callback()
    }

    const observer = new IntersectionObserver(onIntersection, options)

    triggerRef.current && observer.observe(triggerRef.current)

    return () => {
      triggerRef.current && observer.unobserve(triggerRef.current)
    }
  }, [args])
}
