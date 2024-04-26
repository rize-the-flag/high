import { type AddCommentFormSchema } from '../types/addCommentForm'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: AddCommentFormSchema = {
  error: undefined,
  isLoading: false,
  text: ''
}

export const addCommentSlice = createSlice({
  name: 'addCommentSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})

export const {
  reducer: addCommentSliceReducer,
  actions: addCommentSliceActions
} = addCommentSlice
