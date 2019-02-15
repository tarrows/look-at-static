import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import story from '../services/hackernews-reducer'
import sagaTopStoryIds from '../services/hackernews-saga'

const sagaMiddleWare = createSagaMiddleware()

const store = createStore(story, applyMiddleware(sagaMiddleWare))

export const run = () => sagaMiddleWare.run(sagaTopStoryIds)

export default store
