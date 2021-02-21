import { GET_ITEMS, ITEMS_LOADING, ITEMS_ERROR } from '../types'
import axios from 'axios'
import { IFilterState, SortType } from '../reducers/filters'

export const getItems = (activeFilter: IFilterState) => async dispatch => {
  dispatch({ type: ITEMS_LOADING })
  try {
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

    console.log({ activeFilter })

    const brandsQuery = activeFilter.brands.length ? `&brands=${activeFilter.brands.join()}` : ''

    const tagsQuery = activeFilter.tags.length ? `&itemTags=${activeFilter.tags.join()}` : ''

    const res = await axios.get(
      `http://localhost:3001/items?page=${
        activeFilter.activePage
      }&limit=16${categoryQuery}${sortQuery()}${brandsQuery}${tagsQuery}`
    )

    dispatch({
      type: GET_ITEMS,
      payload: [res.data.data, res.data.brands, res.data.tags, res.data.count, activeFilter.activePage],
    })
  } catch (e) {
    dispatch({
      type: ITEMS_ERROR,
      payload: console.log(e),
    })
  }
}
