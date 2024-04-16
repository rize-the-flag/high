export const isEnumType = <T extends object>(value: unknown, enumType: T): value is T[keyof T] =>
  Object.keys(enumType).some((key) => key === value)
