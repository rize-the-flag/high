declare module '*.scss' {
  interface IClassName {
    [className: string]: string
  }

  const classNames: IClassName;
  export = classNames
}

declare module '*.jpeg';
declare module '*.png';
declare module '*.jpg';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.SVGFactory;
  export default SVG;
}

declare module 'global' {
  export type valueOf<T extends {}> = T[keyof T];
}

