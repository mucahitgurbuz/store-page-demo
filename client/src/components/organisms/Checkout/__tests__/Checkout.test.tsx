import React from 'react'
import { create } from 'react-test-renderer'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../../molecules/CheckoutProduct/CheckoutProduct'
import Checkout from '../Checkout'

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

const mockState = { bucket: { bucketItems: [], totalPrice: 4.99 } }

describe('Checkout', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState)
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })
  it('displays no items in the bucket text when there is no bucketItem', () => {
    const component = create(<Checkout />)
    expect(component.root.findAllByType(CheckoutProduct)[0]).toBeFalsy()
    expect(component.root.findAllByType('span')[0].props.children).toEqual('No items in the bucket.')
  })
  it('renders items in the bucket by passing item info', () => {
    useSelector.mockImplementation(callback => {
      return callback({
        bucket: {
          ...mockState.bucket,
          bucketItems: [
            { name: 'test-name-1', price: 4.99, count: 2, itemSlug: 'test-slug-1' },
            { name: 'test-name-2', price: 8.99, count: 3, itemSlug: 'test-slug-2' },
          ],
        },
      })
    })
    const component = create(<Checkout />)
    expect(component.root.findAllByType(CheckoutProduct).length).toBe(2)
    expect(component.root.findAllByType(CheckoutProduct)[0].props.product).toStrictEqual({
      name: 'test-name-1',
      price: 4.99,
      count: 2,
      itemSlug: 'test-slug-1',
    })
    expect(component.root.findAllByType(CheckoutProduct)[1].props.product).toStrictEqual({
      name: 'test-name-2',
      price: 8.99,
      count: 3,
      itemSlug: 'test-slug-2',
    })
  })
})
