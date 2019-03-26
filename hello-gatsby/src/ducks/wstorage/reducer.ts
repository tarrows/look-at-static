import { Reducer } from 'redux'
import * as types from './types'
import { SetAction, GetAction } from './actions'

export interface WebStorageState {
  storage: { [key: string]: string }
  error?: Error
}

const initialState: WebStorageState = {
  storage: {}
}

const wstorage: Reducer<WebStorageState, SetAction | GetAction> = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_GET_ITEM:
      return { storage: { ...state.storage} }
    case types.SUCCESS_GET_ITEM:
      return { storage: { ...state.storage, [action.payload.key]: action.payload.value } }
    case types.FAILURE_GET_ITEM:
      return { storage: { ...state.storage }, error: action.payload.error }
    case types.REQUEST_SET_ITEM:
      return { storage: { ...state.storage} }
    case types.SUCCESS_SET_ITEM:
      return { storage: { ...state.storage, [action.payload.key]: action.payload.value } }
    case types.FAILURE_SET_ITEM:
      return { storage: { ...state.storage }, error: action.payload.error }
    default:
      const _: never = action
      return state
  }
}

export default wstorage
