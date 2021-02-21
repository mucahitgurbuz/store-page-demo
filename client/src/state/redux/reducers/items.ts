import { GET_ITEMS } from '../types'

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
  console.log(action)

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
    default:
      return state
  }
}
