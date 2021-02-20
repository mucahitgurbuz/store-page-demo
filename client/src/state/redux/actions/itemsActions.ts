import {GET_ITEMS, ITEMS_ERROR} from '../types'
import axios from 'axios'

export const getItems = () => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:3001/items`)
        dispatch( {
            type: GET_ITEMS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ITEMS_ERROR,
            payload: console.log(e),
        })
    }
}