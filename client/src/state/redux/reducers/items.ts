import {GET_ITEMS} from '../types'

const initialState = {
    items:[],
    pagination: {
      count: 0,
      pageCount:0,
      currentPage:0
    },
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
        return {
            ...state,
            items:action.payload[0],
            pagination: {count: parseInt(action.payload[1]), pageCount:parseInt(action.payload[2]), currentPage: parseInt(action.payload[3])},
            loading:false
        }
        default: return state
    }
}