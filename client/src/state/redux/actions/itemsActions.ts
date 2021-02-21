import { GET_ITEMS, ITEMS_ERROR } from '../types'
import axios from 'axios'
import { IFilterState, SortType } from '../reducers/filters'

export const getItems = (activeFilter: IFilterState) => async dispatch => {
  try {
    console.log({ activeFilter })

    const categoryQuery = `&itemType=${activeFilter.category}`
    const sortQuery = () => {
      switch (activeFilter.sort) {
        case SortType.PriceLowToHigh:
          return `&_sort=price&_order=asc`
        case SortType.PriceHighToLow:
          return `&_sort=price&_order=desc`
        case SortType.NewToOld:
          return `&_sort=added&_order=desc`
        case SortType.OldToNew:
          return `&_sort=added&_order=asc`
        default:
          return `&_sort=price&_order=asc`
      }
    }

    const res = await axios.get(
      `http://localhost:3001/items?_page=${activeFilter.activePage}&_limit=16${categoryQuery}${sortQuery()}`
    )

    dispatch({
      type: GET_ITEMS,
      payload: [
        res.data,
        res.headers['x-total-count'],
        res.headers['link']
          .split(',')
          .filter(item => item.includes('rel="last"'))[0]
          .split('_page=')
          .pop()
          .split('&')[0],
        activeFilter.activePage,
      ],
    })
  } catch (e) {
    dispatch({
      type: ITEMS_ERROR,
      payload: console.log(e),
    })
  }
}
