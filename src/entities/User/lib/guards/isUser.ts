import { type User } from 'entities/User'

export const isUser = (x: any): x is User => {
  return ('id' in x && 'userName' in x)
}
