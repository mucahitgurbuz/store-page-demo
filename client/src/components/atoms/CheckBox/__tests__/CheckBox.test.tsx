import { Flex, Text } from 'bumbag'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { create } from 'react-test-renderer'
import CheckBox from '../CheckBox'

let mockProps

describe('CheckBox', () => {
  beforeEach(() => {
    mockProps = {
      isSelected: false,
      label: 'Test-Checkbox',
      onClick: jest.fn(),
    }
  })

  it('styles as not selected when isSelected prop is false', () => {
    const component = create(<CheckBox {...mockProps} />)
    expect(component.root.findAllByType(Flex)[1].props.backgroundColor).toBe('white')
    expect(component.root.findAllByType(Flex)[1].props.children).toEqual(false)
    expect(component.root.findByType('span').props.children).toEqual(mockProps.label)
  })

  it('styles as selected when isSelected prop is true', () => {
    mockProps = { ...mockProps, isSelected: true }
    const component = create(<CheckBox {...mockProps} />)
    expect(component.root.findAllByType(Flex)[1].props.backgroundColor).toBe('primary')
    expect(component.root.findAllByType(FaCheck)[0]).toBeTruthy()
  })

  it('displays count when passed as props', () => {
    mockProps = { ...mockProps, count: 5 }
    const component = create(<CheckBox {...mockProps} />)
    expect(component.root.findAllByType('span')[1].props.children).toEqual(['(', 5, ')'])
  })

  it('calls on onClick callback when container click', () => {
    const component = create(<CheckBox {...mockProps} />)
    component.root.findAllByType(Flex)[0].props.onClick()
    expect(mockProps.onClick).toHaveBeenCalled()
  })
})
