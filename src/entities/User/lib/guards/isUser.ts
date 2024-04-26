import { type User } from 'entities/User'

export const isUser = (x: unknown): x is User => {
  return (typeof x === 'object' && x !== null && 'id' in x && 'userName' in x)
}
