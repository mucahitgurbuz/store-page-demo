import { combineReducers } from 'redux'
import companiesReducer from './companies'
import itemsReducer from './items'
import bucketReducer from './bucket'

export default combineReducers({
  companies: companiesReducer,
  items: itemsReducer,
  bucket: bucketReducer,
})
