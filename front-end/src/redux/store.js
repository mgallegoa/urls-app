import { createStore, combineReducers } from 'redux'

import results from './reducers/results'
import currentUrl from './reducers/currentUrl'
import createUrl from './reducers/createUrl'


const reducer = combineReducers({
  results,
  currentUrl,
  createUrl
})

const store = createStore(reducer);

export default store;
