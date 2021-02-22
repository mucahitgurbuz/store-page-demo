import React from 'react'
import { create, act } from 'react-test-renderer'
import { SortType } from '../../../../state/redux/reducers/filters'
import RadioButton from '../../../atoms/RadioButton/RadioButton'
import SortBox from '../SortBox'

let mockSelector
const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: state => mockSelector,
}))

describe('SortBox', () => {
  beforeEach(() => {
    mockSelector = SortType.PriceLowToHigh
  })

  it('maps sort categories as radio buttons', () => {
    const component = create(<SortBox />)
    expect(component.root.findAllByType(RadioButton).length).toBe(Object.keys(SortType).length)
  })

  it('pass props correctly according to activeSort type', () => {
    const component = create(<SortBox />)
    expect(component.root.findAllByType(RadioButton)[0].props.isSelected).toBe(true)
    expect(component.root.findAllByType(RadioButton)[0].props.label).toBe(SortType.PriceLowToHigh)
    expect(component.root.findAllByType(RadioButton)[1].props.isSelected).toBe(false)
    expect(component.root.findAllByType(RadioButton)[1].props.label).toBe(SortType.PriceHighToLow)
    mockSelector = SortType.PriceHighToLow
    const component2 = create(<SortBox />)
    expect(component2.root.findAllByType(RadioButton)[0].props.isSelected).toBe(false)
    expect(component2.root.findAllByType(RadioButton)[1].props.isSelected).toBe(true)
  })

  it('calls dispatch function when click on a radio button', () => {
    const component = create(<SortBox />)
    act(() => {
      component.root.findAllByType(RadioButton)[2].props.onClick()
    })
    expect(mockDispatch).toBeCalledTimes(1)
    act(() => {
      component.root.findAllByType(RadioButton)[3].props.onClick()
    })
    expect(mockDispatch).toBeCalledTimes(2)
  })
})
