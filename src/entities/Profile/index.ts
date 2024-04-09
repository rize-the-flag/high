export type {
  Profile,
  ProfileSchema
} from './model/types/profile'

export {
  profileReducer,
  profileActions
} from './model/slice/profileSlice'

export {
  fetchProfileData
} from './model/services/fetchProfileData/fetchProfileData'

export {
  getUserProfile
} from './model/selectors/getUserProfile/getUserProfile'

export {
  getIsProfileLoading
} from './model/selectors/getIsProfileLoading/getIsProfileLoading'

export {
  getIsProfileError
} from './model/selectors/getIsProfileError/getIsProfileError'

export {
  ProfileCard
} from './ui/ProfileCard/ProfileCard'
