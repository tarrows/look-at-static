import { Reducer } from 'redux'
import * as acts from './action'

export interface WebStorageState {
  storage: { [key: string]: string }
  error?: Error
}

const initialState: WebStorageState = {
  storage: {}
}

const storageReducer: Reducer<WebStorageState, acts.SetAction | acts.GetAction> = (state = initialState, action) => {
  switch (action.type) {
    case acts.REQUEST_GET_ITEM:
      return { storage: { ...state.storage} }
    case acts.SUCCESS_GET_ITEM:
      return { storage: { ...state.storage, [action.payload.key]: action.payload.value } }
    case acts.FAILURE_GET_ITEM:
      return { storage: { ...state.storage }, error: action.payload.error }
    case acts.REQUEST_SET_ITEM:
      return { storage: { ...state.storage} }
    case acts.SUCCESS_SET_ITEM:
      return { storage: { ...state.storage, [action.payload.key]: action.payload.value } }
    case acts.FAILURE_SET_ITEM:
      return { storage: { ...state.storage }, error: action.payload.error }
    default:
      const _: never = action
      return state
  }
}

export default storageReducer
