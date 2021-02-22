import React from 'react'
import Button from '../../../atoms/Button/Button'
import { Pagination, fetchPageNumbers, IPaginationComponent, range } from '../Pagination'
import { create } from 'react-test-renderer'

let mockProps: IPaginationComponent

describe('Pagination', () => {
  beforeEach(() => {
    mockProps = {
      pagination: {
        pageCount: 5,
        rowCount: 100,
        pagination: { offset: 0, count: 20, currentPage: 1 },
      },
      handlePageNumberChange: jest.fn(),
    }
  })

  test('range function generate expected array', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
    expect(range(1, 8, 2)).toEqual([1, 3, 5, 7])
    expect(range(4, 8, 1)).toEqual([4, 5, 6, 7, 8])
  })

  test('fetchPageNumbers function generates pageNumber array as expected', () => {
    expect(fetchPageNumbers(10, 1, 1)).toEqual([1, 2, 3, 4, 5, 'RIGHT', 10])
    expect(fetchPageNumbers(10, 1, 6)).toEqual([1, 'LEFT', 5, 6, 7, 'RIGHT', 10])
    expect(fetchPageNumbers(12, 2, 6)).toEqual([1, 'LEFT', 4, 5, 6, 7, 8, 'RIGHT', 12])
  })

  test('left button should be disabled when current page is 1', () => {
    const component = create(<Pagination {...mockProps} />)
    expect(component.root.findAllByType(Button)[0].props.disabled).toBe(true)
  })

  test('right button should be disabled when current page is the last', () => {
    mockProps = {
      ...mockProps,
      pagination: { ...mockProps.pagination, pagination: { count: 20, offset: 80, currentPage: 5 } },
    }
    const component = create(<Pagination {...mockProps} />)
    expect(component.root.findAllByType(Button)[6].props.disabled).toBe(true)
  })

  test('it displays active page button with correct props', () => {
    const component = create(<Pagination {...mockProps} />)
    expect(component.root.findAllByType(Button)[1].props.styleProps.backgroundColor).toBe('primary')
    expect(component.root.findAllByType(Button)[1].props.styleProps.color).toBe('white')
    expect(component.root.findAllByType(Button)[1].props.styleProps._hover).toStrictEqual({
      backgroundColor: 'primary',
    })
    expect(component.root.findAllByType(Button)[2].props.styleProps.backgroundColor).toBe('transparent')
    expect(component.root.findAllByType(Button)[2].props.styleProps.color).toBe('black400')
    expect(component.root.findAllByType(Button)[2].props.styleProps._hover).toStrictEqual({
      color: 'primary',
      backgroundColor: 'transparent',
    })
  })

  test('it calls handlePageNumberChange callback with selected page number', () => {
    const component = create(<Pagination {...mockProps} />)
    component.root.findAllByType(Button)[2].props.onClick()
    expect(mockProps.handlePageNumberChange).toHaveBeenCalledWith(2)
    component.root.findAllByType(Button)[3].props.onClick()
    expect(mockProps.handlePageNumberChange).toHaveBeenCalledWith(3)
  })

  test('it calls handlePageNumberChange callback with back and next buttons', () => {
    const component = create(<Pagination {...mockProps} />)
    component.root.findAllByType(Button)[6].props.onClick()
    expect(mockProps.handlePageNumberChange).toHaveBeenCalledWith(2)
    mockProps = {
      ...mockProps,
      pagination: { ...mockProps.pagination, pagination: { count: 20, offset: 80, currentPage: 5 } },
    }
    const component2 = create(<Pagination {...mockProps} />)
    component2.root.findAllByType(Button)[0].props.onClick()
    expect(mockProps.handlePageNumberChange).toHaveBeenCalledWith(4)
  })
})
