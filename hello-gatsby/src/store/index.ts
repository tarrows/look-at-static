import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import { StoryState } from '../services/hackernews/hackernews-actions'
// import { initialState } from '../services/hackernews-actions';
import story from '../services/hackernews/hackernews-reducer'
import rootSaga from '../services/hackernews/hackernews-saga'

const configureStore = (initialState: StoryState) => {
  console.log("configureStore called")
  const sagaMiddleWare = createSagaMiddleware()
  const store = createStore(story,
    initialState,
    applyMiddleware(sagaMiddleWare, logger))
  sagaMiddleWare.run(rootSaga)
  return store
}

export default configureStore
