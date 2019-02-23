import { Reducer } from 'redux'

import { Action, VisibilityFilters } from '../actions'

export interface VisibilityFilterState {
  filter: VisibilityFilters
}

const initialState: VisibilityFilterState = {
  filter: 'SHOW_ALL'
}

const visibilityFilter: Reducer<VisibilityFilterState, Action> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return { filter: action.payload.filter }
    default:
      return state
  }
}

export default visibilityFilter
