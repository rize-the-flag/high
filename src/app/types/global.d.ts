declare module '*.scss' {
  interface IClassName {
    [className: string]: string
  }

  const classNames: IClassName;
  export = classNames
}

declare module 'global' {
  export type valueOf<T extends {}> = T[keyof T];
}
