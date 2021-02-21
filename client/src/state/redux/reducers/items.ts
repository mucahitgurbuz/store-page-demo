import { GET_ITEMS, ITEMS_LOADING } from '../types'

const initialState = {
  items: [],
  brands: [],
  tags: [],
  pagination: {
    count: 0,
    pageCount: 0,
    activePage: 0,
  },
  loading: true,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        items: action.payload[0],
        brands: action.payload[1],
        tags: action.payload[2],
        pagination: {
          count: action.payload[3],
          pageCount: Math.ceil(action.payload[3] / 16),
          activePage: action.payload[4],
        },
        loading: false,
      }
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
