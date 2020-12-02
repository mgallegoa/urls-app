import { createStore, combineReducers } from 'redux'

import results from './reducers/results'
import currentUrl from './reducers/currentUrl'


const reducer = combineReducers({
  results,
  currentUrl
})

const store = createStore(reducer);

export default store;
