import { combineReducers } from 'redux'
import brandsReducer from './brands'
import itemsReducer from './items'
import bucketReducer from './bucket'
import filtersReducer from './filters'

export default combineReducers({
  brands: brandsReducer,
  items: itemsReducer,
  bucket: bucketReducer,
  filters: filtersReducer,
})
