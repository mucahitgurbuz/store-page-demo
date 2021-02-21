import { IBucketItem } from '../reducers/bucket'
import { ADD_ITEM_TO_BUCKET, REMOVE_ITEM_FROM_BUCKET } from '../types'

export const addItemToBucket = (item: IBucketItem) => dispatch => {
  dispatch({
    type: ADD_ITEM_TO_BUCKET,
    payload: item,
  })
}

export const removeItemFromBucket = (itemSlug: string, decreament?: boolean) => dispatch => {
  dispatch({
    type: REMOVE_ITEM_FROM_BUCKET,
    payload: [itemSlug, decreament],
  })
}
