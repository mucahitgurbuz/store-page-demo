import { ItemCategory, SortType } from '../reducers/filters'
import { SET_ACTIVE_FILTERS } from '../types'

export interface IActiveFilter {
  type: FilterType
  value: SortType | ItemCategory | string[] | number
}

export enum FilterType {
  Sort,
  Category,
  Brands,
  Tags,
  ActivePage,
}

export const setActiveFilters = (activeFilter: IActiveFilter) => dispatch => {
  dispatch({
    type: SET_ACTIVE_FILTERS,
    payload: activeFilter,
  })
}
