import { type Profile } from 'entities/Profile'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

export const validateProfileData = (profile?: Profile): ValidateProfileError[] => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }

  const {
    first,
    lastname,
    username,
    age,
    country
  } = profile

  const errors: ValidateProfileError[] = []

  if (!username || username.length < 3) {
    errors.push(ValidateProfileError.INVALID_USERNAME)
  }

  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY)
  }

  return errors
}
