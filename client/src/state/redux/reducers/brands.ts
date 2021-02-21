import { GET_BRANDS } from '../types'

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
    default:
      return state
  }
}
