import { Reducer } from 'redux'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = (numIncrement = 1) => ({
  type: INCREMENT as typeof INCREMENT,
  payload: { numIncrement }
})

export const decrement = () => ({
  type: DECREMENT as typeof DECREMENT
})

export type Action = ReturnType<typeof increment | typeof decrement>

const counter: Reducer<CounterState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + action.payload.numIncrement }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      const _: never = action
      return state
  }
}

export default counter
