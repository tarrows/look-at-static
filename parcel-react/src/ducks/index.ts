import { combineReducers } from 'redux'
import counter, { CounterState } from './counter'

export interface RootState {
  counter: CounterState
}

export default combineReducers({ counter })
