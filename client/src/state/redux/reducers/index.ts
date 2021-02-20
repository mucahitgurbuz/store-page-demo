import { combineReducers } from 'redux'
import companiesReducer from './companies'
import itemsReducer from './items'

export default combineReducers({
  companies: companiesReducer,
  items: itemsReducer
})