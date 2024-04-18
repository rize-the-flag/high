import { type StateSchema } from 'app/providers/StoreProvider'
import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type DeepPartial } from 'shared/lib/genericTypes/genericTypes'
import axios, { type AxiosStatic } from 'axios'

type ActionCreatorType<Return, Arg, RejectValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {
  rejectValue: RejectValue
}>

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Arg, RejectValue> {
  actionCreator: ActionCreatorType<Return, Arg, RejectValue>
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  api: jest.MockedFunctionDeep<AxiosStatic>
  navigate: jest.MockedFn<any>

  constructor (actionCreator: ActionCreatorType<Return, Arg, RejectValue>, state?: DeepPartial<StateSchema>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.api = mockedAxios
    this.navigate = jest.fn()
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    return await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate })
  }
}
