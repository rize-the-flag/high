export type DeepPartial<T extends Record<string | symbol | number, any>> = {
  [K in keyof T]?: T[K] extends Record<string, any>
    ? DeepPartial<T[K]>
    : T[K]
}
