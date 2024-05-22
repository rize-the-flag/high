declare module '*.scss' {
  type IClassName = Record<string, string>

  const classNames: IClassName
  export = classNames
}

declare module '*.jpeg';
declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.SVGFactory
  export default SVG
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __API__: string
// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest'

declare module 'global' {
  export type valueOf<T extends Record<string | number | symbol, unknown>> = T[keyof T]
}

declare type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T
}
