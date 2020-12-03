import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import results from './reducers/results'
import createUrl from './reducers/createUrl'


const reducer = combineReducers({
  results,
  createUrl,
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
