import {GET_COMPANIES, COMPANIES_ERROR} from '../types'
import axios from 'axios'

export const getCompanies = () => async dispatch => {  
    try{
        const res = await axios.get(`http://localhost:3001/companies`)
        dispatch( {
            type: GET_COMPANIES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: COMPANIES_ERROR,
            payload: console.log(e),
        })
    }
}