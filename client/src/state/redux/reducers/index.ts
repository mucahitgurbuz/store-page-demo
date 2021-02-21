import { combineReducers } from 'redux'
import companiesReducer from './companies'
import itemsReducer from './items'
import bucketReducer from './bucket'
import filtersReducer from './filters'

export default combineReducers({
  companies: companiesReducer,
  items: itemsReducer,
  bucket: bucketReducer,
  filters: filtersReducer,
})
