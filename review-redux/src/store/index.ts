import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import { TodoState } from '../reducers/todos'
import { VisibilityFilterState } from '../reducers/visibilityFilter'

import rootReducer from '../reducers'

const store = createStore(rootReducer, applyMiddleware(logger))

export interface Store {
  todos: TodoState
  visibilityFilter: VisibilityFilterState
}

export default store
