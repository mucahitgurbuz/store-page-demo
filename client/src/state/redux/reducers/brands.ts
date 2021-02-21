import { BRANDS_LOADING, GET_BRANDS } from '../types'

const initialState = {
  brands: [],
  loading: true,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS:
      return {
        ...state,
        brands: action.payload,
        loading: false,
      }
    case BRANDS_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
