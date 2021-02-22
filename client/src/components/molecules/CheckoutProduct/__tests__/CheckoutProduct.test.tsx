import React from 'react'
import { create } from 'react-test-renderer'
import Button from '../../../atoms/Button/Button'
import CheckoutProduct from '../CheckoutProduct'

let mockProps
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}))

describe('CheckoutProduct', () => {
  beforeEach(() => {
    mockProps = {
      product: { name: 'test-name', price: 4.99, count: 5, itemSlug: 'test-slug' },
    }
  })

  it('displays product informations from product prop', () => {
    const component = create(<CheckoutProduct {...mockProps} />)
    expect(component.root.findAllByType('span')[0].props.children).toEqual(mockProps.product.name)
    expect(component.root.findAllByType('span')[1].props.children).toEqual(['₺', mockProps.product.price])
    expect(component.root.findByProps({ width: '32px' }).props.children).toEqual(mockProps.product.count)
  })

  it('calls actions with dispatch on remove and add button clicks', () => {
    const component = create(<CheckoutProduct {...mockProps} />)
    component.root.findAllByType(Button)[0].props.onClick()
    expect(mockDispatch).toHaveBeenCalledTimes(1)
    component.root.findAllByType(Button)[1].props.onClick()
    expect(mockDispatch).toHaveBeenCalledTimes(2)
    component.root.findAllByType(Button)[1].props.onClick()
    expect(mockDispatch).toHaveBeenCalledTimes(3)
  })
})
