import { GET_BRANDS, BRANDS_ERROR, BRANDS_LOADING } from '../types'
import axios from 'axios'

export const getBrands = () => async dispatch => {
  dispatch({ type: BRANDS_LOADING })
  try {
    const res = await axios.get(`http://localhost:3001/companies`)
    dispatch({
      type: GET_BRANDS,
      payload: res.data,
    })
  } catch (e) {
    dispatch({
      type: BRANDS_ERROR,
      payload: console.log(e),
    })
  }
}
