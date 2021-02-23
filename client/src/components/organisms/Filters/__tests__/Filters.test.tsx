import React from 'react'
import { create, act } from 'react-test-renderer'
import { useSelector } from 'react-redux'
import Filters from '../Filters'
import FilterBox from '../../../molecules/FilterBox/FilterBox'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}))

const mockState = {
  brands: { brands: [], loading: false },
  items: { brands: [], tags: [], loading: false },
  filters: { brands: [], tags: [] },
}

describe('Filters', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState)
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })
  it('passes correct params to brand FiterBox', () => {
    const localState = {
      ...mockState,
      brands: { ...mockState.brands, brands: [{ name: 'test brand', slug: 'test-brand' }] },
      items: { ...mockState.items, brands: [{ slug: 'test-brand', count: 5 }] },
      filters: { ...mockState.filters, brands: ['test-brand'] },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState)
    })
    const component = create(<Filters />)
    expect(component.root.findAllByType(FilterBox)[0].props.categories).toStrictEqual([
      { count: 5, label: 'test brand', slug: 'test-brand', isSelected: true },
      { count: 5, isSelected: false, label: 'All', slug: 'all' },
    ])

    const localState2 = {
      ...mockState,
      brands: { ...mockState.brands, brands: [{ name: 'test brand 2', slug: 'test-brand-2' }] },
      items: { ...mockState.items, brands: [{ slug: 'test-brand-2', count: 1 }] },
      filters: { ...mockState.filters, brands: [] },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState2)
    })
    const component2 = create(<Filters />)
    expect(component2.root.findAllByType(FilterBox)[0].props.categories).toStrictEqual([
      { label: 'test brand 2', slug: 'test-brand-2', count: 1, isSelected: false },
      { count: 1, isSelected: true, label: 'All', slug: 'all' },
    ])

    expect(component2.root.findAllByType(FilterBox)[0].props.isBusy).toBe(false)
    const localState3 = {
      ...mockState,
      brands: { ...mockState.brands, loading: true },
      items: { ...mockState.items, loading: false },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState3)
    })
    const component3 = create(<Filters />)
    expect(component3.root.findAllByType(FilterBox)[0].props.isBusy).toBe(true)

    const localState4 = {
      ...mockState,
      brands: { ...mockState.brands, loading: false },
      items: { ...mockState.items, loading: true },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState4)
    })
    const component4 = create(<Filters />)
    expect(component4.root.findAllByType(FilterBox)[0].props.isBusy).toBe(true)

    act(() => {
      component.root.findAllByType(FilterBox)[0].props.onSelect('test-slug')
    })
    expect(mockDispatch).toHaveBeenCalledTimes(5)
  })

  it('passes correct params to tag FiterBox', () => {
    const localState = {
      ...mockState,
      items: { ...mockState.items, tags: [{ slug: 'test-tag', count: 5 }] },
      filters: { ...mockState.filters, tags: ['test-tag'] },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState)
    })
    const component = create(<Filters />)
    expect(component.root.findAllByType(FilterBox)[1].props.categories).toStrictEqual([
      { label: 'test-tag', slug: 'test-tag', count: 5, isSelected: true },
      { count: 5, isSelected: false, label: 'All', slug: 'all' },
    ])

    const localState2 = {
      ...mockState,
      items: { ...mockState.items, tags: [{ slug: 'test-tag-2', count: 2 }] },
      filters: { ...mockState.filters, tags: [] },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState2)
    })
    const component2 = create(<Filters />)
    expect(component2.root.findAllByType(FilterBox)[1].props.categories).toStrictEqual([
      { label: 'test-tag-2', slug: 'test-tag-2', count: 2, isSelected: false },
      { label: 'All', slug: 'all', count: 2, isSelected: true },
    ])

    expect(component2.root.findAllByType(FilterBox)[1].props.isBusy).toBe(false)
    const localState3 = {
      ...mockState,
      items: { ...mockState.items, loading: false },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState3)
    })
    const component3 = create(<Filters />)
    expect(component3.root.findAllByType(FilterBox)[1].props.isBusy).toBe(false)

    const localState4 = {
      ...mockState,
      items: { ...mockState.items, loading: true },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState4)
    })
    const component4 = create(<Filters />)
    expect(component4.root.findAllByType(FilterBox)[1].props.isBusy).toBe(true)

    act(() => {
      component.root.findAllByType(FilterBox)[1].props.onSelect('test-slug')
    })
    expect(mockDispatch).toHaveBeenCalledTimes(10)
  })
})
