import { Input } from 'bumbag'
import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { create, act } from 'react-test-renderer'
import CheckBox from '../../../atoms/CheckBox/CheckBox'
import FilterBox from '../FilterBox'

let mockProps

describe('FilterBox', () => {
  beforeEach(() => {
    mockProps = {
      title: 'Test-FilterBox',
      categories: [],
      onSelect: jest.fn(),
      searchPlaceholder: 'Test-Placeholder',
    }
  })

  it('displays title and searchPlaceholder correctly and no category when there is no given', () => {
    const component = create(<FilterBox {...mockProps} />)
    expect(component.root.findAllByType('span')[0].props.children).toEqual(mockProps.title)
    expect(component.root.findByType(Input).props.placeholder).toEqual(mockProps.searchPlaceholder)
    expect(component.root.findAllByType(CheckBox)[0]).toBeFalsy()
  })

  it('displays categories with correct infos and calls onSelect callback when clicked', () => {
    mockProps = {
      ...mockProps,
      categories: [
        { label: 'test-1', isSelected: false },
        { label: 'test-2', isSelected: true, count: 2, slug: 'test-slug' },
      ],
    }
    const component = create(<FilterBox {...mockProps} />)
    expect(component.root.findAllByType(CheckBox).length).toBe(2)
    expect(component.root.findAllByType(CheckBox)[0].props.label).toBe(mockProps.categories[0].label)
    expect(component.root.findAllByType(CheckBox)[0].props.isSelected).toBe(
      mockProps.categories[0].isSelected
    )
    expect(component.root.findAllByType(CheckBox)[1].props.label).toBe(mockProps.categories[1].label)
    expect(component.root.findAllByType(CheckBox)[1].props.isSelected).toBe(
      mockProps.categories[1].isSelected
    )
    expect(component.root.findAllByType(CheckBox)[1].props.count).toBe(mockProps.categories[1].count)
    component.root.findAllByType(CheckBox)[0].props.onClick()
    expect(mockProps.onSelect).not.toHaveBeenCalled()
    component.root.findAllByType(CheckBox)[1].props.onClick()
    expect(mockProps.onSelect).toHaveBeenCalledWith(mockProps.categories[1].slug)
  })

  it('displays loading skelatons when isBusy instead of checkboxes', () => {
    mockProps = {
      ...mockProps,
      categories: [
        { label: 'test-1', isSelected: false },
        { label: 'test-2', isSelected: true, count: 2, slug: 'test-slug' },
      ],
      isBusy: true,
    }
    const component = create(<FilterBox {...mockProps} />)
    expect(component.root.findAllByType(CheckBox)[0]).toBeFalsy()
    expect(component.root.findAllByType(Skeleton)[0]).toBeTruthy()
  })

  it('successfully filters categories based on text inputs', () => {
    mockProps = {
      ...mockProps,
      categories: [
        { label: 'test-1', isSelected: false },
        { label: 'test-2', isSelected: true, count: 2, slug: 'test-slug' },
      ],
    }
    const component = create(<FilterBox {...mockProps} />)
    act(() => {
      component.root.findByType(Input).props.onChange({ target: { value: 'test-1' } })
    })
    expect(component.root.findByType(Input).props.value).toBe('test-1')
    expect(component.root.findAllByType(CheckBox).length).toBe(1)
    expect(component.root.findAllByType(CheckBox)[0].props.label).toBe('test-1')
  })
})
