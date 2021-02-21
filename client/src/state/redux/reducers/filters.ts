import { FilterType } from '../actions/filtersActions'
import { SET_ACTIVE_FILTERS } from '../types'

export interface IFilterState {
  sort: SortType
  category: ItemCategory
  brands: string[]
  tags: string[]
  activePage: number
}

export enum SortType {
  PriceLowToHigh = 'Price low to high',
  PriceHighToLow = 'Price high to low',
  NewToOld = 'New to old',
  OldToNew = 'Old to new',
}

export enum ItemCategory {
  Mug = 'mug',
  Shirt = 'shirt',
}

const initialState: IFilterState = {
  sort: SortType.PriceLowToHigh,
  category: ItemCategory.Mug,
  brands: [],
  tags: [],
  activePage: 1,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_FILTERS: {
      return {
        sort: action.payload.type === FilterType.Sort ? action.payload.value : state.sort,
        category: action.payload.type === FilterType.Category ? action.payload.value : state.category,
        brands: action.payload.type === FilterType.Brands ? action.payload.value : state.brands,
        tags: action.payload.type === FilterType.Tags ? action.payload.value : state.tags,
        activePage: action.payload.type === FilterType.ActivePage ? action.payload.value : state.activePage,
      }
    }
    default:
      return state
  }
}
