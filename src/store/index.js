import { createStore, combineReducers } from 'redux'
import homeStore from './home/store'

// combineReducers 可以用来组合各个分reducer
const reducer = combineReducers({
  homeStore
})

const store = createStore(reducer);

export default store;