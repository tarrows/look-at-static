import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

import rootReducer from './ducks'

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(logger))
  return store
}

export default configureStore
