import { ADD_ITEM_TO_BUCKET, REMOVE_ITEM_FROM_BUCKET } from '../types'

export interface IBucketItem {
  itemSlug: string
  name: string
  price: number
  count?: number
}

interface IInitialState {
  bucketItems: IBucketItem[]
  totalPrice: number
}

const initialState: IInitialState = {
  bucketItems: [],
  totalPrice: 0,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_BUCKET: {
      const bucketItems = state.bucketItems
      const placedSameLineItem = bucketItems.filter(
        bucketItem => bucketItem.itemSlug === action.payload.itemSlug
      )[0]
      if (placedSameLineItem) {
        placedSameLineItem.count += 1
      } else {
        bucketItems.push({
          ...action.payload,
          count: 1,
        })
      }

      return {
        ...state,
        bucketItems: bucketItems,
        totalPrice: bucketItems.reduce((acc, curr) => acc + curr.count * curr.price, 0),
      }
    }

    case REMOVE_ITEM_FROM_BUCKET: {
      let bucketItems = state.bucketItems
      const placedSameLineItem = bucketItems.filter(
        bucketItem => bucketItem.itemSlug === action.payload[0]
      )[0]
      if (placedSameLineItem && placedSameLineItem.count !== 1 && action.payload[1]) {
        placedSameLineItem.count -= 1
      } else {
        bucketItems = bucketItems.filter(item => item.itemSlug !== action.payload[0])
      }

      return {
        ...state,
        bucketItems: bucketItems,
        totalPrice: bucketItems.reduce((acc, curr) => acc + curr.count * curr.price, 0),
      }
    }

    default:
      return state
  }
}
