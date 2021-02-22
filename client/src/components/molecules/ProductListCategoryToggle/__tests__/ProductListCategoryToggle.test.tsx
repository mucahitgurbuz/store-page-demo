import React from 'react'
import { create, act } from 'react-test-renderer'
import { ItemCategory } from '../../../../state/redux/reducers/filters'
import Button from '../../../atoms/Button/Button'
import ProductListCategoryToggle from '../ProductListCategoryToggle'

let mockSelector
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: state => mockSelector,
}))

describe('ProductListCategoryToggle', () => {
  beforeEach(() => {
    mockSelector = ItemCategory.Mug
  })

  it('maps both item category buttons', () => {
    const component = create(<ProductListCategoryToggle />)
    expect(component.root.findAllByType(Button).length).toBe(Object.keys(ItemCategory).length)
  })

  it('styles correctly when selected and not selected', () => {
    const component = create(<ProductListCategoryToggle />)
    expect(component.root.findAllByType(Button)[0].props.children).toEqual(ItemCategory.Mug)
    expect(component.root.findAllByType(Button)[1].props.children).toEqual(ItemCategory.Shirt)
    expect(component.root.findAllByType(Button)[0].props.styleProps).toStrictEqual({
      height: '30px',
      paddingX: '16px',
      backgroundColor: 'primary',
      color: 'ghostWhite',
      fontSize: '13px',
      _hover: {
        backgroundColor: 'primary100',
      },
    })
    expect(component.root.findAllByType(Button)[1].props.styleProps).toStrictEqual({
      height: '30px',
      paddingX: '16px',
      backgroundColor: 'ghostWhite',
      color: 'primary',
      fontSize: '13px',
      _hover: {
        backgroundColor: 'ghostWhite100',
      },
    })

    mockSelector = ItemCategory.Shirt
    const component2 = create(<ProductListCategoryToggle />)
    expect(component2.root.findAllByType(Button)[1].props.styleProps).toStrictEqual({
      height: '30px',
      paddingX: '16px',
      backgroundColor: 'primary',
      color: 'ghostWhite',
      fontSize: '13px',
      _hover: {
        backgroundColor: 'primary100',
      },
    })
    expect(component2.root.findAllByType(Button)[0].props.styleProps).toStrictEqual({
      height: '30px',
      paddingX: '16px',
      backgroundColor: 'ghostWhite',
      color: 'primary',
      fontSize: '13px',
      _hover: {
        backgroundColor: 'ghostWhite100',
      },
    })
  })

  it('calls dispatch function button on click', () => {
    const component = create(<ProductListCategoryToggle />)
    act(() => {
      component.root.findAllByType(Button)[0].props.onClick()
    })
    expect(mockDispatch).toBeCalledTimes(1)
    act(() => {
      component.root.findAllByType(Button)[1].props.onClick()
    })
    expect(mockDispatch).toBeCalledTimes(2)
  })
})
