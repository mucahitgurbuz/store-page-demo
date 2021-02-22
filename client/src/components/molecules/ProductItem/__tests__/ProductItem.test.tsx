import React from 'react'
import { create, act } from 'react-test-renderer'
import Button from '../../../atoms/Button/Button'
import ProductItem from '../ProductItem'

let mockProps
let mockSelector
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: state => mockSelector,
}))

describe('ProductItem', () => {
  beforeEach(() => {
    mockProps = {
      price: 4.99,
      name: 'test-name',
      slug: 'test-slug',
    }
    mockSelector = false
  })

  it('displays product item informations from prop', () => {
    const component = create(<ProductItem {...mockProps} />)
    expect(component.root.findAllByType('span')[0].props.children).toEqual(['₺ ', mockProps.price])
    expect(component.root.findAllByType('span')[1].props.children).toEqual(mockProps.name)
  })

  it('styles button correctly when is in bucket', () => {
    const component = create(<ProductItem {...mockProps} />)
    expect(component.root.findByType(Button).props.styleProps).toStrictEqual({
      width: '100%',
      backgroundColor: 'primary',
      height: '22px',
      marginTop: '8px',
      fontSize: '12px',
      _hover: { backgroundColor: 'primary100' },
    })
    act(() => {
      component.root.findByType(Button).props.onClick()
    })
    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(component.root.findByType(Button).props.children).toEqual('Add')

    mockSelector = true
    const component2 = create(<ProductItem {...mockProps} />)
    expect(component2.root.findByType(Button).props.styleProps).toStrictEqual({
      width: '100%',
      backgroundColor: 'red',
      height: '22px',
      marginTop: '8px',
      fontSize: '12px',
      _hover: { backgroundColor: 'red100' },
    })
    act(() => {
      component2.root.findByType(Button).props.onClick()
    })
    expect(mockDispatch).toHaveBeenCalledTimes(2)
    expect(component2.root.findByType(Button).props.children).toEqual('Remove')
  })
})
