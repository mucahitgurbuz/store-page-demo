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
      if (action.payload.type === FilterType.Brands && action.payload.value === 'all') {
        return { ...state, brands: [] }
      }
      if (action.payload.type === FilterType.Tags && action.payload.value === 'all') {
        return { ...state, tags: [] }
      }
      return {
        sort: action.payload.type === FilterType.Sort ? action.payload.value : state.sort,
        category: action.payload.type === FilterType.Category ? action.payload.value : state.category,
        brands:
          action.payload.type === FilterType.Brands
            ? state.brands.includes(action.payload.value)
              ? state.brands.filter(brand => brand !== action.payload.value)
              : [...state.brands, action.payload.value]
            : state.brands,
        tags:
          action.payload.type === FilterType.Tags
            ? state.tags.includes(action.payload.value)
              ? state.tags.filter(brand => brand !== action.payload.value)
              : [...state.tags, action.payload.value]
            : state.tags,
        activePage: action.payload.type === FilterType.ActivePage ? action.payload.value : 1,
      }
    }
    default:
      return state
  }
}
