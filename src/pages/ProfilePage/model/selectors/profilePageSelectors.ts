import { createSelector } from '@reduxjs/toolkit'
import { getAuthData } from 'entities/User'
import { getUserProfile } from 'entities/Profile'

export const canEditProfile = createSelector(
  [getAuthData, getUserProfile],
  (auth, profile) => auth?.id === profile?.id
)
