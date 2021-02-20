import {GET_ITEMS, ITEMS_ERROR} from '../types'
import axios from 'axios'

export const getItems = (pageNumber:number) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:3001/items?_page=${pageNumber}&_limit=16`)
         
        dispatch( {
            type: GET_ITEMS,
            payload: [res.data, res.headers['x-total-count'], res.headers['link'].split(',').filter(item=>item.includes('rel="last"'))[0].split('_page=').pop().split('&')[0], pageNumber]
        })
    }
    catch(e){
        dispatch( {
            type: ITEMS_ERROR,
            payload: console.log(e),
        })
    }
}