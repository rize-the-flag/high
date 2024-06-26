import { type Currency } from 'entities/Currency/model/types/currency'

import { type Country } from 'entities/Country/model/types/country'

export interface Profile {
  id?: string
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}
export interface ProfileSchema {
  data?: Profile
  form?: Profile
  error?: string
  isLoading: boolean
  readonly: boolean
  validateError?: ValidateProfileError[]
}

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  INVALID_USERNAME = 'INVALID_USERNAME',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}
