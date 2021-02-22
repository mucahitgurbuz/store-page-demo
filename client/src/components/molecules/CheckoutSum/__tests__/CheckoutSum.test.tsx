import { Flex } from 'bumbag'
import React from 'react'
import { create } from 'react-test-renderer'
import CheckoutSum from '../CheckoutSum'

let mockSelector: number
jest.mock('react-redux', () => ({
  useSelector: state => mockSelector,
}))

describe('CheckoutSum', () => {
  beforeEach(() => {
    mockSelector = 4.99999
  })

  it('displays totalPrice of bucket items from state', () => {
    const component = create(<CheckoutSum />)
    expect(component.root.findByType(Flex).props.children).toEqual(['₺', mockSelector.toFixed(2)])
  })
})
