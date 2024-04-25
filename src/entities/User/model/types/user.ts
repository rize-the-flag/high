export interface User {
  id: number
  userName: string
  avatar?: string
}

export interface UserSchema {
  authData?: User
  __has_init?: boolean
}
