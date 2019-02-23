import { createStore } from 'redux'

import { TodoState } from '../reducers/todos'
import { VisibilityFilterState } from '../reducers/visibilityFilter'

import rootReducer from '../reducers'

const store = createStore(rootReducer)

export interface Store {
  todos: TodoState
  visibilityFilter: VisibilityFilterState
}

export default store
