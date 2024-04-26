export interface User {
  id: string
  userName: string
  avatar?: string
}

export interface UserSchema {
  authData?: User
  __has_init?: boolean
}
