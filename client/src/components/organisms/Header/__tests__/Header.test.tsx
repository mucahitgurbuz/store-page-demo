import React from 'react'
import { create } from 'react-test-renderer'
import Header from '../Header'

let mockSelector
jest.mock('react-redux', () => ({
  useSelector: state => mockSelector,
}))

describe('Header', () => {
  beforeEach(() => {
    mockSelector = 39.9985
  })

  it('displays totalPrice from state', () => {
    const component = create(<Header />)
    expect(component.root.findByType('span').props.children).toEqual(['₺ ', mockSelector.toFixed(2)])
  })
})
