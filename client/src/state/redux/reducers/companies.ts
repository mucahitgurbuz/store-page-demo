import {GET_COMPANIES} from '../types'

const initialState = {
    companies:[],
    loading:true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_COMPANIES:
        return {
            ...state,
            companies:action.payload,
            loading:false
        }
        default: return state
    }
}