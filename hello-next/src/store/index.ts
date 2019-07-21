import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from '../ducks/_root-reducer'
import rootSaga from '../sagas/_root-saga'
import { HelloState } from '../ducks/hello'

export interface Store {
  hello: HelloState
}

const configureStore = () => {
  const saga = createSagaMiddleware()
  const store = createStore(rootReducer, applyMiddleware(saga, logger))
  saga.run(rootSaga)
  return store
}

export default configureStore()
