import React from 'react'
import { create, act } from 'react-test-renderer'
import { useSelector } from 'react-redux'
import ProductList from '../ProductList'
import Skeleton from 'react-loading-skeleton'
import { ItemCategory } from '../../../../state/redux/reducers/filters'
import ProductItem from '../../../molecules/ProductItem/ProductItem'
import Pagination from '../../../molecules/Pagination/Pagination'

const mockDispatch = jest.fn()
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}))

const mockState = {
  items: {
    items: [],
    pagination: { count: 16, pageCount: 5, pagination: { offset: 0, count: 16 }, activePage: 1 },
    loading: true,
  },
  bucket: {
    bucketItems: [],
  },
  filters: { category: ItemCategory.Mug },
}

describe('ProductList', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockState)
    })
  })
  afterEach(() => {
    useSelector.mockClear()
  })

  it('shows skelatons when is loading', () => {
    const component = create(<ProductList />)
    expect(component.root.findAllByType(Skeleton).length).toBe(19)
    expect(component.root.findAllByType(ProductItem)[0]).toBeFalsy()
    expect(component.root.findAllByType(Pagination)[0]).toBeFalsy()
  })

  it('maps products with correct product infos', () => {
    const localState = {
      ...mockState,
      items: {
        ...mockState.items,
        items: [
          { slug: 'test-slug-1', price: 5.99, name: 'test-name-1' },
          { slug: 'test-slug-2', price: 8.99, name: 'test-name-2' },
        ],
        loading: false,
      },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState)
    })
    const component = create(<ProductList />)
    expect(component.root.findAllByType(Skeleton)[0]).toBeFalsy()
    expect(component.root.findAllByType(ProductItem).length).toBe(2)
    expect(component.root.findAllByType(ProductItem)[0].props.price).toBe(localState.items.items[0].price)
    expect(component.root.findAllByType(ProductItem)[0].props.name).toBe(localState.items.items[0].name)
    expect(component.root.findAllByType(ProductItem)[0].props.slug).toBe(localState.items.items[0].slug)
    expect(component.root.findAllByType(ProductItem)[1].props.price).toBe(localState.items.items[1].price)
    expect(component.root.findAllByType(ProductItem)[1].props.name).toBe(localState.items.items[1].name)
    expect(component.root.findAllByType(ProductItem)[1].props.slug).toBe(localState.items.items[1].slug)
  })

  it('displays pagination and pass correct pagination states from state', () => {
    const localState = {
      ...mockState,
      items: {
        ...mockState.items,
        loading: false,
      },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState)
    })
    const component = create(<ProductList />)
    expect(component.root.findByType(Pagination).props.pagination).toStrictEqual({
      rowCount: localState.items.pagination.count,
      pageCount: localState.items.pagination.pageCount,
      pagination: {
        offset: 0,
        count: 16,
        currentPage: localState.items.pagination.activePage,
      },
    })
  })

  it('calls dispatch on handlePageNumberChange callback triggers', () => {
    const localState = {
      ...mockState,
      items: {
        ...mockState.items,
        loading: false,
      },
    }
    useSelector.mockImplementation(callback => {
      return callback(localState)
    })
    const component = create(<ProductList />)
    act(() => {
      component.root.findByType(Pagination).props.handlePageNumberChange(1)
    })
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
})
