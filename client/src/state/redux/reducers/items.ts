import {GET_ITEMS} from '../types'

const initialState = {
    items:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_ITEMS:
        return {
            ...state,
            items:action.payload,
            loading:false
        }
        default: return state
    }
}